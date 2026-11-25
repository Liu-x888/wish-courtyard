import {
  ArrowRight,
  Camera,
  Check,
  CircleDot,
  Eye,
  Feather,
  Flower2,
  Heart,
  Landmark,
  LogOut,
  RotateCcw,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { WishCourtyardGame } from "./game/WishCourtyardGame";
import type {
  CharacterPreset,
  HudState,
  Interaction,
  NearestInteraction,
} from "./game/types";

declare global {
  interface Window {
    __wishCourtyardGame?: WishCourtyardGame;
  }
}

const WISH_STORAGE_KEY = "wish-courtyard-wishes-v1";
const JOURNAL_STORAGE_KEY = "wish-courtyard-journal-v1";

interface WishRecord {
  id: string;
  text: string;
  createdAt: string;
}

interface JournalRecord {
  id: string;
  mood: string;
  text: string;
  createdAt: string;
}

const readStorage = <T,>(key: string, fallback: T): T => {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const storeRecords = <T,>(key: string, records: T[]) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(records));
  } catch {
    // Local storage can be unavailable in privacy-restricted browsers.
  }
};

function App() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<WishCourtyardGame | null>(null);
  const modalRef = useRef<Interaction | null>(null);
  const toastTimer = useRef<number | null>(null);
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [preset, setPreset] = useState<CharacterPreset>("female");
  const [hud, setHud] = useState<HudState>({
    zone: "山门 · 入口",
    viewMode: "first",
    started: false,
  });
  const [nearby, setNearby] = useState<NearestInteraction | null>(null);
  const [modal, setModal] = useState<Interaction | null>(null);
  const [paused, setPaused] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const element = sceneRef.current;
    if (!element) {
      return;
    }
    const game = new WishCourtyardGame(element, {
      onReady: () => setReady(true),
      onHud: (state) => setHud(state),
      onInteraction: (interaction) => setNearby(interaction),
      onInteract: (interaction) => {
        modalRef.current = interaction;
        setModal(interaction);
        setPaused(false);
        game.setInactive(true);
      },
      onPauseChange: (value) => {
        if (!modalRef.current) {
          setPaused(value);
        }
      },
      onLockChange: () => undefined,
    });
    gameRef.current = game;
    if (new URLSearchParams(window.location.search).has("visual-test")) {
      window.__wishCourtyardGame = game;
    }
    return () => {
      game.dispose();
      gameRef.current = null;
      window.__wishCourtyardGame = undefined;
    };
  }, []);

  useEffect(
    () => () => {
      if (toastTimer.current) {
        window.clearTimeout(toastTimer.current);
      }
    },
    [],
  );

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) {
      window.clearTimeout(toastTimer.current);
    }
    toastTimer.current = window.setTimeout(() => setToast(null), 3200);
  }, []);

  const closeModal = () => {
    modalRef.current = null;
    setModal(null);
    setPaused(false);
    gameRef.current?.setInactive(false);
    gameRef.current?.requestPointerLock();
  };

  const beginGame = () => {
    setStarted(true);
    setPaused(false);
    gameRef.current?.start(preset);
  };

  const exitGame = () => {
    modalRef.current = null;
    setModal(null);
    setStarted(false);
    setPaused(false);
    setNearby(null);
    gameRef.current?.exitToMenu();
  };

  return (
    <main className="app-shell">
      <div className="scene" ref={sceneRef} />
      <div className="scene-wash" aria-hidden="true" />
      <div className="film-grain" aria-hidden="true" />

      {!started ? (
        <StartScreen
          ready={ready}
          preset={preset}
          onPreset={setPreset}
          onStart={beginGame}
        />
      ) : (
        <>
          <GameHud
            hud={hud}
            nearby={nearby}
            paused={paused}
            hasModal={Boolean(modal)}
            onView={() => gameRef.current?.toggleView()}
            onExit={exitGame}
          />
          {paused && !modal ? (
            <PauseScreen
              onResume={() => {
                setPaused(false);
                gameRef.current?.resume();
              }}
              onExit={exitGame}
            />
          ) : null}
        </>
      )}

      {modal ? (
        <InteractionModal
          interaction={modal}
          onClose={closeModal}
          onToast={showToast}
        />
      ) : null}

      <div className="cultural-disclaimer">
        游戏化文化演出 · 不提供真实宗教服务 · 不承诺愿望结果
      </div>

      {toast ? (
        <div className="toast" role="status">
          <Check size={16} aria-hidden="true" />
          {toast}
        </div>
      ) : null}
    </main>
  );
}

interface StartScreenProps {
  ready: boolean;
  preset: CharacterPreset;
  onPreset: (preset: CharacterPreset) => void;
  onStart: () => void;
}

function StartScreen({ ready, preset, onPreset, onStart }: StartScreenProps) {
  return (
    <section className="start-screen">
      <header className="start-header">
        <div className="brand-mark">
          <span className="brand-seal">愿</span>
          <span className="brand-wordmark">WISH COURTYARD</span>
        </div>
        <span className="edition-label">文化漫游 · 第一卷</span>
      </header>

      <div className="start-copy">
        <p className="eyebrow">一座虚构庭院，一段可被安放的心绪</p>
        <h1>
          愿庭
          <span>WISH COURTYARD</span>
        </h1>
        <p className="start-lead">
          穿过山门，在檐影、树声与水光之间缓行。所有礼佛、上香、财神与还愿内容均为游戏化文化演出。
        </p>

        <div className="start-actions">
          <div className="preset-toggle" role="group" aria-label="角色预设">
            <button
              type="button"
              className={preset === "female" ? "is-active" : ""}
              aria-pressed={preset === "female"}
              onClick={() => onPreset("female")}
            >
              <UserRound size={18} />
              青裳
            </button>
            <button
              type="button"
              className={preset === "male" ? "is-active" : ""}
              aria-pressed={preset === "male"}
              onClick={() => onPreset("male")}
            >
              <UserRound size={18} />
              玄衣
            </button>
          </div>
          <button
            type="button"
            className="enter-button"
            onClick={onStart}
            disabled={!ready}
          >
            {ready ? "踏入愿庭" : "庭院构筑中"}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <footer className="start-footer">
        <span>第一人称文化漫游</span>
        <span>尺度研究 · 2026</span>
        <span>桌面浏览器体验</span>
      </footer>
    </section>
  );
}

interface GameHudProps {
  hud: HudState;
  nearby: NearestInteraction | null;
  paused: boolean;
  hasModal: boolean;
  onView: () => void;
  onExit: () => void;
}

function GameHud({
  hud,
  nearby,
  paused,
  hasModal,
  onView,
  onExit,
}: GameHudProps) {
  return (
    <>
      <header className="game-hud">
        <div className="hud-brand">
          <span className="hud-seal">愿</span>
          <div>
            <strong>愿庭</strong>
            <span>{hud.zone}</span>
          </div>
        </div>
        <div className="hud-tools">
          <button
            type="button"
            className="icon-button"
            title={hud.viewMode === "first" ? "切换第三人称" : "切换第一人称"}
            aria-label={hud.viewMode === "first" ? "切换第三人称" : "切换第一人称"}
            onClick={onView}
          >
            {hud.viewMode === "first" ? <Camera size={18} /> : <Eye size={18} />}
          </button>
          <button
            type="button"
            className="icon-button"
            title="离开庭院"
            aria-label="离开庭院"
            onClick={onExit}
          >
            <LogOut size={18} />
          </button>
        </div>
      </header>

      <div
        className={`reticle ${hud.viewMode === "third" ? "is-soft" : ""}`}
        aria-hidden="true"
      >
        <span />
      </div>

      {nearby && !paused && !hasModal ? (
        <div className="interaction-prompt">
          <span className="prompt-key">E</span>
          <span className="prompt-copy">
            <strong>{nearby.title}</strong>
            <small>{nearby.detail}</small>
          </span>
        </div>
      ) : null}

      <div className="view-badge" aria-hidden="true">
        {hud.viewMode === "first" ? "第一人称" : "第三人称"}
      </div>
    </>
  );
}

interface PauseScreenProps {
  onResume: () => void;
  onExit: () => void;
}

function PauseScreen({ onResume, onExit }: PauseScreenProps) {
  return (
    <div className="pause-backdrop">
      <section className="pause-panel" aria-labelledby="pause-title">
        <span className="eyebrow">庭院仍在风里</span>
        <h2 id="pause-title">漫游暂停</h2>
        <p>檐下光影会在这里等你。</p>
        <div className="pause-actions">
          <button type="button" className="paper-button primary" onClick={onResume}>
            <RotateCcw size={17} />
            继续漫游
          </button>
          <button type="button" className="paper-button" onClick={onExit}>
            回到入口
          </button>
        </div>
      </section>
    </div>
  );
}

interface InteractionModalProps {
  interaction: Interaction;
  onClose: () => void;
  onToast: (message: string) => void;
}

function InteractionModal({
  interaction,
  onClose,
  onToast,
}: InteractionModalProps) {
  const Icon = (() => {
    switch (interaction.kind) {
      case "wish-tree":
        return Flower2;
      case "pond":
        return CircleDot;
      case "fortune":
        return Landmark;
      case "vow-hall":
        return Feather;
      case "main-hall":
        return Heart;
      default:
        return UsersRound;
    }
  })();

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className={`interaction-modal modal-${interaction.kind}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          className="modal-close"
          aria-label="关闭"
          onClick={onClose}
        >
          <X size={18} />
        </button>
        <header className="modal-header">
          <span className="modal-icon">
            <Icon size={21} />
          </span>
          <div>
            <span className="modal-kicker">游戏化文化演出</span>
            <h2 id="modal-title">{interaction.title}</h2>
          </div>
        </header>

        {interaction.kind === "wish-tree" ? (
          <WishModal onClose={onClose} onToast={onToast} />
        ) : null}
        {interaction.kind === "pond" ? (
          <JournalModal onClose={onClose} onToast={onToast} />
        ) : null}
        {interaction.kind === "incense" ? (
          <IncenseModal onClose={onClose} onToast={onToast} />
        ) : null}
        {interaction.kind === "fortune" ? (
          <FortuneModal onClose={onClose} />
        ) : null}
        {interaction.kind === "vow-hall" ? (
          <VowModal onClose={onClose} onToast={onToast} />
        ) : null}
        {interaction.kind === "main-hall" ? (
          <BreathingModal onClose={onClose} onToast={onToast} />
        ) : null}
        {interaction.kind === "gate" ? (
          <GateModal onClose={onClose} />
        ) : null}

        <footer className="modal-footer">
          仅作为虚构场景中的文化互动，不构成现实承诺或宗教服务。
        </footer>
      </section>
    </div>
  );
}

function WishModal({
  onClose,
  onToast,
}: {
  onClose: () => void;
  onToast: (message: string) => void;
}) {
  const [wishes, setWishes] = useState<WishRecord[]>(() =>
    readStorage<WishRecord[]>(WISH_STORAGE_KEY, []),
  );
  const [text, setText] = useState("");

  const submit = () => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }
    const next = [
      ...wishes,
      {
        id: crypto.randomUUID(),
        text: trimmed,
        createdAt: new Date().toISOString(),
      },
    ].slice(-10);
    setWishes(next);
    storeRecords(WISH_STORAGE_KEY, next);
    setText("");
    onToast("愿望签已留在本机，不会上传。");
  };

  return (
    <div className="modal-body wish-layout">
      <div className="wish-form">
        <p className="section-lead">写下一句此刻想留住的话，把它系在虚构的枝头。</p>
        <label>
          <span>愿望签</span>
          <textarea
            maxLength={72}
            rows={4}
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="不必写得完整，一句话也可以。"
          />
          <small>{text.length} / 72</small>
        </label>
        <button
          type="button"
          className="paper-button primary"
          disabled={!text.trim()}
          onClick={submit}
        >
          <Flower2 size={17} />
          系上心愿签
        </button>
      </div>
      <aside className="record-list" aria-label="本机愿望签">
        <div className="record-list-head">
          <span>本机愿望签</span>
          <span>{wishes.length} / 10</span>
        </div>
        {wishes.length === 0 ? (
          <p className="empty-state">枝头还没有自己的签。</p>
        ) : (
          <ul>
            {wishes
              .slice()
              .reverse()
              .map((wish, index) => (
                <li key={wish.id}>
                  <span>{String(wishes.length - index).padStart(2, "0")}</span>
                  <p>{wish.text}</p>
                </li>
              ))}
          </ul>
        )}
      </aside>
    </div>
  );
}

const moods = ["澄明", "平静", "牵挂", "疲惫", "期待"];

function JournalModal({
  onClose,
  onToast,
}: {
  onClose: () => void;
  onToast: (message: string) => void;
}) {
  const [entries, setEntries] = useState<JournalRecord[]>(() =>
    readStorage<JournalRecord[]>(JOURNAL_STORAGE_KEY, []),
  );
  const [mood, setMood] = useState("平静");
  const [text, setText] = useState("");

  const save = () => {
    const next = [
      ...entries,
      {
        id: crypto.randomUUID(),
        mood,
        text: text.trim(),
        createdAt: new Date().toISOString(),
      },
    ].slice(-40);
    setEntries(next);
    storeRecords(JOURNAL_STORAGE_KEY, next);
    onToast("心绪记录已保存在本机。");
    onClose();
  };

  return (
    <div className="modal-body journal-layout">
      <div className="journal-main">
        <p className="section-lead">此刻更接近哪种心绪？</p>
        <div className="mood-row" role="group" aria-label="选择心绪">
          {moods.map((item) => (
            <button
              type="button"
              key={item}
              className={mood === item ? "is-selected" : ""}
              aria-pressed={mood === item}
              onClick={() => setMood(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <label>
          <span>写一点什么</span>
          <textarea
            maxLength={120}
            rows={5}
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="一句话，或只留下一点痕迹。"
          />
          <small>{text.length} / 120</small>
        </label>
        <button type="button" className="paper-button primary" onClick={save}>
          <Feather size={17} />
          存入本机
        </button>
      </div>
      <aside className="journal-summary">
        <span>已记录</span>
        <strong>{entries.length}</strong>
        <small>条本机心绪</small>
        <p>只保存在当前浏览器，不会同步或上传。</p>
      </aside>
    </div>
  );
}

function IncenseModal({
  onClose,
  onToast,
}: {
  onClose: () => void;
  onToast: (message: string) => void;
}) {
  return (
    <div className="modal-body ritual-layout">
      <div className="ritual-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="section-lead">
        香炉中的烟气只是场景演出。合十、停留或离开，都不会改变现实中的任何结果。
      </p>
      <div className="ritual-actions">
        <button
          type="button"
          className="paper-button primary"
          onClick={() => {
            onToast("已听见檐风，香烟会继续在庭院里飘散。");
            onClose();
          }}
        >
          <Heart size={17} />
          完成一次合十
        </button>
        <button type="button" className="paper-button" onClick={onClose}>
          收起
        </button>
      </div>
    </div>
  );
}

const fortuneLines = [
  "把今天能做的一件小事，做得更从容一些。",
  "先整理手边的一小片空间，再决定下一步。",
  "不必急着回应所有声音，留一点时间给自己。",
  "向可信赖的人说清楚一个具体需要。",
  "把复杂的事分成三次完成，今天只做第一步。",
];

function FortuneModal({ onClose }: { onClose: () => void }) {
  const [line, setLine] = useState<string | null>(null);
  return (
    <div className="modal-body fortune-layout">
      <p className="section-lead">
        财神民俗展陈以展签、木牌和纹样构成虚构民俗叙事，不提供祈福、占卜或任何现实承诺。
      </p>
      <div className={`fortune-plaque ${line ? "is-open" : ""}`}>
        <span className="fortune-label">今日民俗批注</span>
        <p>
          {line ??
            "抽一枚木牌，只把它当作今天可以开始的小行动，而不是对未来的判断。"}
        </p>
      </div>
      <div className="fortune-actions">
        <button
          type="button"
          className="paper-button primary"
          onClick={() =>
            setLine(fortuneLines[Math.floor(Math.random() * fortuneLines.length)])
          }
        >
          <CircleDot size={17} />
          {line ? "再抽一枚" : "抽一枚木牌"}
        </button>
        <button type="button" className="paper-button" onClick={onClose}>
          收好木牌
        </button>
      </div>
    </div>
  );
}

function VowModal({
  onClose,
  onToast,
}: {
  onClose: () => void;
  onToast: (message: string) => void;
}) {
  const [text, setText] = useState("");
  return (
    <div className="modal-body vow-layout">
      <p className="section-lead">
        还愿堂把“兑现一个承诺”改写为：为现实中已经发生的努力留下一句确认。
      </p>
      <label>
        <span>写给自己的确认</span>
        <textarea
          maxLength={100}
          rows={4}
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="例如：我认真完成了这段时间里最难的一步。"
        />
        <small>{text.length} / 100</small>
      </label>
      <button
        type="button"
        className="paper-button primary"
        disabled={!text.trim()}
        onClick={() => {
          onToast("这句话只留在这一刻，没有产生任何现实承诺。");
          onClose();
        }}
      >
        <Check size={17} />
        完成游戏内仪式
      </button>
    </div>
  );
}

function BreathingModal({
  onClose,
  onToast,
}: {
  onClose: () => void;
  onToast: (message: string) => void;
}) {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    if (!running) {
      return;
    }
    const timer = window.setInterval(() => {
      setSeconds((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          setRunning(false);
          onToast("二十秒的静心体验已经完成。");
          return 0;
        }
        return current - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [onToast, running]);

  const start = () => {
    setSeconds(20);
    setRunning(true);
  };

  return (
    <div className="modal-body breathing-layout">
      <p className="section-lead">
        这是一段游戏中的安静时间。跟随圆环缓慢呼吸，没有奖励，也不预测任何结果。
      </p>
      <div className={`breathing-stage ${running ? "is-running" : ""}`}>
        <span className="breathing-ring outer" />
        <span className="breathing-ring inner" />
        <span className="breathing-core">{running ? seconds : "静"}</span>
      </div>
      <div className="ritual-actions">
        <button type="button" className="paper-button primary" onClick={start}>
          <Heart size={17} />
          {running ? "重新开始" : "开始二十秒"}
        </button>
        <button type="button" className="paper-button" onClick={onClose}>
          离开静心殿
        </button>
      </div>
    </div>
  );
}

function GateModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-body gate-layout">
      <p className="section-lead">
        愿庭是一处完全虚构的当代中式庭院。门、殿、树、池与所有仪式均为游戏场景的一部分。
      </p>
      <blockquote>“入庭不必许愿，只消慢一点。”</blockquote>
      <button type="button" className="paper-button primary" onClick={onClose}>
        <ArrowRight size={17} />
        回到院中
      </button>
    </div>
  );
}

export default App;
