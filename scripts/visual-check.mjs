import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { chromium } from "playwright-core";

const root = path.resolve("dist");
const contentTypes = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

const server = http.createServer((request, response) => {
  const urlPath = new URL(
    request.url ?? "/",
    "http://127.0.0.1",
  ).pathname;
  const filePath = path.join(
    root,
    decodeURIComponent(urlPath === "/" ? "/index.html" : urlPath),
  );
  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.statusCode = 404;
      response.end("Not found");
      return;
    }
    response.setHeader(
      "Content-Type",
      contentTypes[path.extname(filePath)] ?? "application/octet-stream",
    );
    response.end(data);
  });
});

await new Promise((resolve) => server.listen(4173, "127.0.0.1", resolve));

const browser = await chromium.launch({
  executablePath:
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  headless: true,
  args: [
    "--enable-unsafe-swiftshader",
    "--use-angle=swiftshader",
    "--no-first-run",
    "--disable-features=msEdgeFirstRunExperience",
  ],
});

const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});
const errors = [];
page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
page.on("console", (message) => {
  if (message.type() === "error") {
    errors.push(`console: ${message.text()}`);
  }
});

await page.goto("http://127.0.0.1:4173/?visual-test=1", {
  waitUntil: "networkidle",
});
try {
  await page.waitForSelector(".enter-button:not([disabled])", { timeout: 30000 });
} catch (error) {
  console.error(
    JSON.stringify(
      {
        errors,
        body: await page.locator("body").innerText(),
      },
      null,
      2,
    ),
  );
  throw error;
}
await page.waitForTimeout(1500);
await page.screenshot({ path: "visual-start.png" });

await page.click(".enter-button");
await page.waitForTimeout(2500);
const initialDebug = await page.evaluate(() =>
  window.__wishCourtyardGame?.getDebugState(),
);
await page.screenshot({ path: "visual-game-first.png" });

await page.keyboard.press("v");
await page.waitForTimeout(1000);
await page.screenshot({ path: "visual-game-third.png" });
await page.keyboard.press("v");

await page.keyboard.down("w");
await page.waitForTimeout(5000);
await page.keyboard.up("w");
await page.waitForTimeout(500);
const afterWalkDebug = await page.evaluate(() =>
  window.__wishCourtyardGame?.getDebugState(),
);
await page.screenshot({ path: "visual-after-walk.png" });

await page.evaluate(() => window.__wishCourtyardGame?.teleportForTest(0, 5.5));
await page.waitForTimeout(400);

const promptVisible = await page.locator(".interaction-prompt").isVisible();
if (promptVisible) {
  await page.keyboard.press("e");
  await page.waitForTimeout(600);
  await page.screenshot({ path: "visual-interaction.png" });
}

const state = await page.evaluate(() => ({
  canvasCount: document.querySelectorAll("canvas").length,
  canvasSize: Array.from(document.querySelectorAll("canvas")).map((canvas) => ({
    width: canvas.width,
    height: canvas.height,
  })),
  hud: document.querySelector(".hud-brand span:last-child")?.textContent ?? null,
  prompt: document.querySelector(".interaction-prompt")?.textContent ?? null,
  modal: document.querySelector(".interaction-modal h2")?.textContent ?? null,
}));

console.log(
  JSON.stringify({ state, initialDebug, afterWalkDebug, errors }, null, 2),
);

await browser.close();
await new Promise((resolve) => server.close(resolve));
