var B_=Object.defineProperty;var H_=(s,e,t)=>e in s?B_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ot=(s,e,t)=>H_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var dh={exports:{}},la={},ph={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function V_(){if(Um)return vt;Um=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(k){return k===null||typeof k!="object"?null:(k=g&&k[g]||k["@@iterator"],typeof k=="function"?k:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function S(k,re,Oe){this.props=k,this.context=re,this.refs=w,this.updater=Oe||x}S.prototype.isReactComponent={},S.prototype.setState=function(k,re){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,re,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(k,re,Oe){this.props=k,this.context=re,this.refs=w,this.updater=Oe||x}var C=L.prototype=new y;C.constructor=L,M(C,S.prototype),C.isPureReactComponent=!0;var T=Array.isArray,N=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function z(k,re,Oe){var Q,fe={},Ee=null,xe=null;if(re!=null)for(Q in re.ref!==void 0&&(xe=re.ref),re.key!==void 0&&(Ee=""+re.key),re)N.call(re,Q)&&!O.hasOwnProperty(Q)&&(fe[Q]=re[Q]);var Ae=arguments.length-2;if(Ae===1)fe.children=Oe;else if(1<Ae){for(var ke=Array(Ae),tt=0;tt<Ae;tt++)ke[tt]=arguments[tt+2];fe.children=ke}if(k&&k.defaultProps)for(Q in Ae=k.defaultProps,Ae)fe[Q]===void 0&&(fe[Q]=Ae[Q]);return{$$typeof:s,type:k,key:Ee,ref:xe,props:fe,_owner:I.current}}function P(k,re){return{$$typeof:s,type:k.type,key:re,ref:k.ref,props:k.props,_owner:k._owner}}function A(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function B(k){var re={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Oe){return re[Oe]})}var ee=/\/+/g;function K(k,re){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):re.toString(36)}function le(k,re,Oe,Q,fe){var Ee=typeof k;(Ee==="undefined"||Ee==="boolean")&&(k=null);var xe=!1;if(k===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(k.$$typeof){case s:case e:xe=!0}}if(xe)return xe=k,fe=fe(xe),k=Q===""?"."+K(xe,0):Q,T(fe)?(Oe="",k!=null&&(Oe=k.replace(ee,"$&/")+"/"),le(fe,re,Oe,"",function(tt){return tt})):fe!=null&&(A(fe)&&(fe=P(fe,Oe+(!fe.key||xe&&xe.key===fe.key?"":(""+fe.key).replace(ee,"$&/")+"/")+k)),re.push(fe)),1;if(xe=0,Q=Q===""?".":Q+":",T(k))for(var Ae=0;Ae<k.length;Ae++){Ee=k[Ae];var ke=Q+K(Ee,Ae);xe+=le(Ee,re,Oe,ke,fe)}else if(ke=v(k),typeof ke=="function")for(k=ke.call(k),Ae=0;!(Ee=k.next()).done;)Ee=Ee.value,ke=Q+K(Ee,Ae++),xe+=le(Ee,re,Oe,ke,fe);else if(Ee==="object")throw re=String(k),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return xe}function he(k,re,Oe){if(k==null)return k;var Q=[],fe=0;return le(k,Q,"","",function(Ee){return re.call(Oe,Ee,fe++)}),Q}function ae(k){if(k._status===-1){var re=k._result;re=re(),re.then(function(Oe){(k._status===0||k._status===-1)&&(k._status=1,k._result=Oe)},function(Oe){(k._status===0||k._status===-1)&&(k._status=2,k._result=Oe)}),k._status===-1&&(k._status=0,k._result=re)}if(k._status===1)return k._result.default;throw k._result}var ue={current:null},G={transition:null},ce={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:G,ReactCurrentOwner:I};function oe(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:he,forEach:function(k,re,Oe){he(k,function(){re.apply(this,arguments)},Oe)},count:function(k){var re=0;return he(k,function(){re++}),re},toArray:function(k){return he(k,function(re){return re})||[]},only:function(k){if(!A(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},vt.Component=S,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=L,vt.StrictMode=i,vt.Suspense=f,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,vt.act=oe,vt.cloneElement=function(k,re,Oe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Q=M({},k.props),fe=k.key,Ee=k.ref,xe=k._owner;if(re!=null){if(re.ref!==void 0&&(Ee=re.ref,xe=I.current),re.key!==void 0&&(fe=""+re.key),k.type&&k.type.defaultProps)var Ae=k.type.defaultProps;for(ke in re)N.call(re,ke)&&!O.hasOwnProperty(ke)&&(Q[ke]=re[ke]===void 0&&Ae!==void 0?Ae[ke]:re[ke])}var ke=arguments.length-2;if(ke===1)Q.children=Oe;else if(1<ke){Ae=Array(ke);for(var tt=0;tt<ke;tt++)Ae[tt]=arguments[tt+2];Q.children=Ae}return{$$typeof:s,type:k.type,key:fe,ref:Ee,props:Q,_owner:xe}},vt.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},vt.createElement=z,vt.createFactory=function(k){var re=z.bind(null,k);return re.type=k,re},vt.createRef=function(){return{current:null}},vt.forwardRef=function(k){return{$$typeof:h,render:k}},vt.isValidElement=A,vt.lazy=function(k){return{$$typeof:m,_payload:{_status:-1,_result:k},_init:ae}},vt.memo=function(k,re){return{$$typeof:d,type:k,compare:re===void 0?null:re}},vt.startTransition=function(k){var re=G.transition;G.transition={};try{k()}finally{G.transition=re}},vt.unstable_act=oe,vt.useCallback=function(k,re){return ue.current.useCallback(k,re)},vt.useContext=function(k){return ue.current.useContext(k)},vt.useDebugValue=function(){},vt.useDeferredValue=function(k){return ue.current.useDeferredValue(k)},vt.useEffect=function(k,re){return ue.current.useEffect(k,re)},vt.useId=function(){return ue.current.useId()},vt.useImperativeHandle=function(k,re,Oe){return ue.current.useImperativeHandle(k,re,Oe)},vt.useInsertionEffect=function(k,re){return ue.current.useInsertionEffect(k,re)},vt.useLayoutEffect=function(k,re){return ue.current.useLayoutEffect(k,re)},vt.useMemo=function(k,re){return ue.current.useMemo(k,re)},vt.useReducer=function(k,re,Oe){return ue.current.useReducer(k,re,Oe)},vt.useRef=function(k){return ue.current.useRef(k)},vt.useState=function(k){return ue.current.useState(k)},vt.useSyncExternalStore=function(k,re,Oe){return ue.current.useSyncExternalStore(k,re,Oe)},vt.useTransition=function(){return ue.current.useTransition()},vt.version="18.3.1",vt}var Fm;function qf(){return Fm||(Fm=1,ph.exports=V_()),ph.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function G_(){if(Om)return la;Om=1;var s=qf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(h,f,d){var m,g={},v=null,x=null;d!==void 0&&(v=""+d),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(x=f.ref);for(m in f)i.call(f,m)&&!l.hasOwnProperty(m)&&(g[m]=f[m]);if(h&&h.defaultProps)for(m in f=h.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:h,key:v,ref:x,props:g,_owner:o.current}}return la.Fragment=t,la.jsx=c,la.jsxs=c,la}var km;function W_(){return km||(km=1,dh.exports=G_()),dh.exports}var $=W_(),It=qf(),Hl={},mh={exports:{}},$n={},gh={exports:{}},vh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function X_(){return zm||(zm=1,(function(s){function e(G,ce){var oe=G.length;G.push(ce);e:for(;0<oe;){var k=oe-1>>>1,re=G[k];if(0<o(re,ce))G[k]=ce,G[oe]=re,oe=k;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var ce=G[0],oe=G.pop();if(oe!==ce){G[0]=oe;e:for(var k=0,re=G.length,Oe=re>>>1;k<Oe;){var Q=2*(k+1)-1,fe=G[Q],Ee=Q+1,xe=G[Ee];if(0>o(fe,oe))Ee<re&&0>o(xe,fe)?(G[k]=xe,G[Ee]=oe,k=Ee):(G[k]=fe,G[Q]=oe,k=Q);else if(Ee<re&&0>o(xe,oe))G[k]=xe,G[Ee]=oe,k=Ee;else break e}}return ce}function o(G,ce){var oe=G.sortIndex-ce.sortIndex;return oe!==0?oe:G.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();s.unstable_now=function(){return c.now()-h}}var f=[],d=[],m=1,g=null,v=3,x=!1,M=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(G){for(var ce=t(d);ce!==null;){if(ce.callback===null)i(d);else if(ce.startTime<=G)i(d),ce.sortIndex=ce.expirationTime,e(f,ce);else break;ce=t(d)}}function T(G){if(w=!1,C(G),!M)if(t(f)!==null)M=!0,ae(N);else{var ce=t(d);ce!==null&&ue(T,ce.startTime-G)}}function N(G,ce){M=!1,w&&(w=!1,y(z),z=-1),x=!0;var oe=v;try{for(C(ce),g=t(f);g!==null&&(!(g.expirationTime>ce)||G&&!B());){var k=g.callback;if(typeof k=="function"){g.callback=null,v=g.priorityLevel;var re=k(g.expirationTime<=ce);ce=s.unstable_now(),typeof re=="function"?g.callback=re:g===t(f)&&i(f),C(ce)}else i(f);g=t(f)}if(g!==null)var Oe=!0;else{var Q=t(d);Q!==null&&ue(T,Q.startTime-ce),Oe=!1}return Oe}finally{g=null,v=oe,x=!1}}var I=!1,O=null,z=-1,P=5,A=-1;function B(){return!(s.unstable_now()-A<P)}function ee(){if(O!==null){var G=s.unstable_now();A=G;var ce=!0;try{ce=O(!0,G)}finally{ce?K():(I=!1,O=null)}}else I=!1}var K;if(typeof L=="function")K=function(){L(ee)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,he=le.port2;le.port1.onmessage=ee,K=function(){he.postMessage(null)}}else K=function(){S(ee,0)};function ae(G){O=G,I||(I=!0,K())}function ue(G,ce){z=S(function(){G(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){M||x||(M=!0,ae(N))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(G){switch(v){case 1:case 2:case 3:var ce=3;break;default:ce=v}var oe=v;v=ce;try{return G()}finally{v=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,ce){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var oe=v;v=G;try{return ce()}finally{v=oe}},s.unstable_scheduleCallback=function(G,ce,oe){var k=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?k+oe:k):oe=k,G){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=oe+re,G={id:m++,callback:ce,priorityLevel:G,startTime:oe,expirationTime:re,sortIndex:-1},oe>k?(G.sortIndex=oe,e(d,G),t(f)===null&&G===t(d)&&(w?(y(z),z=-1):w=!0,ue(T,oe-k))):(G.sortIndex=re,e(f,G),M||x||(M=!0,ae(N))),G},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(G){var ce=v;return function(){var oe=v;v=ce;try{return G.apply(this,arguments)}finally{v=oe}}}})(vh)),vh}var Bm;function j_(){return Bm||(Bm=1,gh.exports=X_()),gh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function Y_(){if(Hm)return $n;Hm=1;var s=qf(),e=j_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return f.call(g,n)?!0:f.call(m,n)?!1:d.test(n)?g[n]=!0:(m[n]=!0,!1)}function x(n,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,a,u){if(r===null||typeof r>"u"||x(n,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,a,u,p,_,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,L);S[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,L);S[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,L);S[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,r,a,u){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,a,p,u)&&(a=null),u||p===null?v(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(r=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(r):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,r,a):n.setAttribute(r,a))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),G=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,k;function re(n){if(k===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||""}return`
`+k+n}var Oe=!1;function Q(n,r){if(!n||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(te){var u=te}Reflect.construct(n,[],r)}else{try{r.call()}catch(te){u=te}n.call(r.prototype)}else{try{throw Error()}catch(te){u=te}n()}}catch(te){if(te&&u&&typeof te.stack=="string"){for(var p=te.stack.split(`
`),_=u.stack.split(`
`),E=p.length-1,F=_.length-1;1<=E&&0<=F&&p[E]!==_[F];)F--;for(;1<=E&&0<=F;E--,F--)if(p[E]!==_[F]){if(E!==1||F!==1)do if(E--,F--,0>F||p[E]!==_[F]){var H=`
`+p[E].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=E&&0<=F);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function fe(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case P:return"Profiler";case z:return"StrictMode";case K:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case ee:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:Ee(n.type)||"Memo";case ae:r=n._payload,n=n._init;try{return Ee(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(r);case 8:return r===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function tt(n){var r=ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(E){u=""+E,_.call(this,E)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function kt(n){n._valueTracker||(n._valueTracker=tt(n))}function yt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return n&&(u=ke(n)?n.checked?"true":"false":n.value),n=u,n!==a?(r.setValue(n),!0):!1}function Wt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function V(n,r){var a=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ln(n,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=Ae(r.value!=null?r.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function _t(n,r){r=r.checked,r!=null&&C(n,"checked",r,!1)}function mt(n,r){_t(n,r);var a=Ae(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Ut(n,r.type,a):r.hasOwnProperty("defaultValue")&&Ut(n,r.type,Ae(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ze(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ut(n,r,a){(r!=="number"||Wt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var qe=Array.isArray;function D(n,r,a,u){if(n=n.options,r){r={};for(var p=0;p<a.length;p++)r["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=r.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),r=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function R(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(qe(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Ae(a)}}function me(n,r){var a=Ae(r.value),u=Ae(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ve(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function je(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?de(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,ze=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,a,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function dt(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ve=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Ve.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function Je(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function nt(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=Je(a,r[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var Ge=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(n,r){if(r){if(Ge[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function at(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,se=null,pe=null;function De(n){if(n=Yo(n)){if(typeof Re!="function")throw Error(t(280));var r=n.stateNode;r&&(r=nl(r),Re(n.stateNode,n.type,r))}}function Le(n){se?pe?pe.push(n):pe=[n]:se=n}function lt(){if(se){var n=se,r=pe;if(pe=se=null,De(n),r)for(n=0;n<r.length;n++)De(r[n])}}function jt(n,r){return n(r)}function ln(){}var Ct=!1;function Gn(n,r,a){if(Ct)return n(r,a);Ct=!0;try{return jt(n,r,a)}finally{Ct=!1,(se!==null||pe!==null)&&(ln(),lt())}}function Dn(n,r){var a=n.stateNode;if(a===null)return null;var u=nl(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var Ms=!1;if(h)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{Ms=!1}function zi(n,r,a,u,p,_,E,F,H){var te=Array.prototype.slice.call(arguments,3);try{r.apply(a,te)}catch(_e){this.onError(_e)}}var Bi=!1,Vr=null,Gr=!1,ur=null,Ua={onError:function(n){Bi=!0,Vr=n}};function Es(n,r,a,u,p,_,E,F,H){Bi=!1,Vr=null,zi.apply(Ua,arguments)}function Fa(n,r,a,u,p,_,E,F,H){if(Es.apply(this,arguments),Bi){if(Bi){var te=Vr;Bi=!1,Vr=null}else throw Error(t(198));Gr||(Gr=!0,ur=te)}}function Ri(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Oa(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function ka(n){if(Ri(n)!==n)throw Error(t(188))}function Fc(n){var r=n.alternate;if(!r){if(r=Ri(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,u=r;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return ka(p),n;if(_===u)return ka(p),r;_=_.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=_;else{for(var E=!1,F=p.child;F;){if(F===a){E=!0,a=p,u=_;break}if(F===u){E=!0,u=p,a=_;break}F=F.sibling}if(!E){for(F=_.child;F;){if(F===a){E=!0,a=_,u=p;break}if(F===u){E=!0,u=_,a=p;break}F=F.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function za(n){return n=Fc(n),n!==null?Ba(n):null}function Ba(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ba(n);if(r!==null)return r;n=n.sibling}return null}var b=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,ne=e.unstable_shouldYield,ie=e.unstable_requestPaint,W=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,be=e.unstable_ImmediatePriority,Fe=e.unstable_UserBlockingPriority,Be=e.unstable_NormalPriority,it=e.unstable_LowPriority,rt=e.unstable_IdlePriority,$e=null,ct=null;function bt(n){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot($e,n,void 0,(n.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:Ke,$t=Math.log,Tt=Math.LN2;function Ke(n){return n>>>=0,n===0?32:31-($t(n)/Tt|0)|0}var en=64,Et=4194304;function vn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function gi(n,r){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,_=n.pingedLanes,E=a&268435455;if(E!==0){var F=E&~p;F!==0?u=vn(F):(_&=E,_!==0&&(u=vn(_)))}else E=a&~p,E!==0?u=vn(E):_!==0&&(u=vn(_));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,_=r&-r,p>=_||p===16&&(_&4194240)!==0))return r;if((u&4)!==0&&(u|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)a=31-Pt(r),p=1<<a,u|=n[a],r&=~p;return u}function In(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wr(n,r){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var E=31-Pt(_),F=1<<E,H=p[E];H===-1?((F&a)===0||(F&u)!==0)&&(p[E]=In(F,r)):H<=r&&(n.expiredLanes|=F),_&=~F}}function zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nn(){var n=en;return en<<=1,(en&4194240)===0&&(en=64),n}function Sn(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function nn(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Pt(r),n[r]=a}function Mn(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Pt(a),_=1<<p;r[p]=0,u[p]=-1,n[p]=-1,a&=~_}}function Xr(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var u=31-Pt(a),p=1<<u;p&r|n[u]&r&&(n[u]|=r),a&=~p}}var xt=0;function dd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var pd,Oc,md,gd,vd,kc=!1,Ha=[],hr=null,fr=null,dr=null,Lo=new Map,Do=new Map,pr=[],lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _d(n,r){switch(n){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":Lo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(r.pointerId)}}function Io(n,r,a,u,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:_,targetContainers:[p]},r!==null&&(r=Yo(r),r!==null&&Oc(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function cv(n,r,a,u,p){switch(r){case"focusin":return hr=Io(hr,n,r,a,u,p),!0;case"dragenter":return fr=Io(fr,n,r,a,u,p),!0;case"mouseover":return dr=Io(dr,n,r,a,u,p),!0;case"pointerover":var _=p.pointerId;return Lo.set(_,Io(Lo.get(_)||null,n,r,a,u,p)),!0;case"gotpointercapture":return _=p.pointerId,Do.set(_,Io(Do.get(_)||null,n,r,a,u,p)),!0}return!1}function xd(n){var r=jr(n.target);if(r!==null){var a=Ri(r);if(a!==null){if(r=a.tag,r===13){if(r=Oa(a),r!==null){n.blockedOn=r,vd(n.priority,function(){md(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Va(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=Bc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Nt=u,a.target.dispatchEvent(u),Nt=null}else return r=Yo(a),r!==null&&Oc(r),n.blockedOn=a,!1;r.shift()}return!0}function yd(n,r,a){Va(n)&&a.delete(r)}function uv(){kc=!1,hr!==null&&Va(hr)&&(hr=null),fr!==null&&Va(fr)&&(fr=null),dr!==null&&Va(dr)&&(dr=null),Lo.forEach(yd),Do.forEach(yd)}function No(n,r){n.blockedOn===r&&(n.blockedOn=null,kc||(kc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,uv)))}function Uo(n){function r(p){return No(p,n)}if(0<Ha.length){No(Ha[0],n);for(var a=1;a<Ha.length;a++){var u=Ha[a];u.blockedOn===n&&(u.blockedOn=null)}}for(hr!==null&&No(hr,n),fr!==null&&No(fr,n),dr!==null&&No(dr,n),Lo.forEach(r),Do.forEach(r),a=0;a<pr.length;a++)u=pr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)xd(a),a.blockedOn===null&&pr.shift()}var ws=T.ReactCurrentBatchConfig,Ga=!0;function hv(n,r,a,u){var p=xt,_=ws.transition;ws.transition=null;try{xt=1,zc(n,r,a,u)}finally{xt=p,ws.transition=_}}function fv(n,r,a,u){var p=xt,_=ws.transition;ws.transition=null;try{xt=4,zc(n,r,a,u)}finally{xt=p,ws.transition=_}}function zc(n,r,a,u){if(Ga){var p=Bc(n,r,a,u);if(p===null)iu(n,r,u,Wa,a),_d(n,u);else if(cv(p,n,r,a,u))u.stopPropagation();else if(_d(n,u),r&4&&-1<lv.indexOf(n)){for(;p!==null;){var _=Yo(p);if(_!==null&&pd(_),_=Bc(n,r,a,u),_===null&&iu(n,r,u,Wa,a),_===p)break;p=_}p!==null&&u.stopPropagation()}else iu(n,r,u,null,a)}}var Wa=null;function Bc(n,r,a,u){if(Wa=null,n=j(u),n=jr(n),n!==null)if(r=Ri(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Oa(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Wa=n,null}function Sd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case be:return 1;case Fe:return 4;case Be:case it:return 16;case rt:return 536870912;default:return 16}default:return 16}}var mr=null,Hc=null,Xa=null;function Md(){if(Xa)return Xa;var n,r=Hc,a=r.length,u,p="value"in mr?mr.value:mr.textContent,_=p.length;for(n=0;n<a&&r[n]===p[n];n++);var E=a-n;for(u=1;u<=E&&r[a-u]===p[_-u];u++);return Xa=p.slice(n,1<u?1-u:void 0)}function ja(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ya(){return!0}function Ed(){return!1}function Qn(n){function r(a,u,p,_,E){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(_):_[F]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Ya:Ed,this.isPropagationStopped=Ed,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),r}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vc=Qn(Ts),Fo=oe({},Ts,{view:0,detail:0}),dv=Qn(Fo),Gc,Wc,Oo,qa=oe({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Oo&&(Oo&&n.type==="mousemove"?(Gc=n.screenX-Oo.screenX,Wc=n.screenY-Oo.screenY):Wc=Gc=0,Oo=n),Gc)},movementY:function(n){return"movementY"in n?n.movementY:Wc}}),wd=Qn(qa),pv=oe({},qa,{dataTransfer:0}),mv=Qn(pv),gv=oe({},Fo,{relatedTarget:0}),Xc=Qn(gv),vv=oe({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),_v=Qn(vv),xv=oe({},Ts,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yv=Qn(xv),Sv=oe({},Ts,{data:0}),Td=Qn(Sv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=wv[n])?!!r[n]:!1}function jc(){return Tv}var Av=oe({},Fo,{key:function(n){if(n.key){var r=Mv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ja(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ev[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(n){return n.type==="keypress"?ja(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ja(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Cv=Qn(Av),Rv=oe({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=Qn(Rv),bv=oe({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),Pv=Qn(bv),Lv=oe({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dv=Qn(Lv),Iv=oe({},qa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=Qn(Iv),Uv=[9,13,27,32],Yc=h&&"CompositionEvent"in window,ko=null;h&&"documentMode"in document&&(ko=document.documentMode);var Fv=h&&"TextEvent"in window&&!ko,Cd=h&&(!Yc||ko&&8<ko&&11>=ko),Rd=" ",bd=!1;function Pd(n,r){switch(n){case"keyup":return Uv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function Ov(n,r){switch(n){case"compositionend":return Ld(r);case"keypress":return r.which!==32?null:(bd=!0,Rd);case"textInput":return n=r.data,n===Rd&&bd?null:n;default:return null}}function kv(n,r){if(As)return n==="compositionend"||!Yc&&Pd(n,r)?(n=Md(),Xa=Hc=mr=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Cd&&r.locale!=="ko"?null:r.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!zv[n.type]:r==="textarea"}function Id(n,r,a,u){Le(u),r=Qa(r,"onChange"),0<r.length&&(a=new Vc("onChange","change",null,a,u),n.push({event:a,listeners:r}))}var zo=null,Bo=null;function Bv(n){Kd(n,0)}function $a(n){var r=Ls(n);if(yt(r))return n}function Hv(n,r){if(n==="change")return r}var Nd=!1;if(h){var qc;if(h){var $c="oninput"in document;if(!$c){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),$c=typeof Ud.oninput=="function"}qc=$c}else qc=!1;Nd=qc&&(!document.documentMode||9<document.documentMode)}function Fd(){zo&&(zo.detachEvent("onpropertychange",Od),Bo=zo=null)}function Od(n){if(n.propertyName==="value"&&$a(Bo)){var r=[];Id(r,Bo,n,j(n)),Gn(Bv,r)}}function Vv(n,r,a){n==="focusin"?(Fd(),zo=r,Bo=a,zo.attachEvent("onpropertychange",Od)):n==="focusout"&&Fd()}function Gv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $a(Bo)}function Wv(n,r){if(n==="click")return $a(r)}function Xv(n,r){if(n==="input"||n==="change")return $a(r)}function jv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var vi=typeof Object.is=="function"?Object.is:jv;function Ho(n,r){if(vi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!f.call(r,p)||!vi(n[p],r[p]))return!1}return!0}function kd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zd(n,r){var a=kd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=r&&u>=r)return{node:a,offset:r-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kd(a)}}function Bd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Bd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Hd(){for(var n=window,r=Wt();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Wt(n.document)}return r}function Zc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Yv(n){var r=Hd(),a=n.focusedElem,u=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Bd(a.ownerDocument.documentElement,a)){if(u!==null&&Zc(a)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,_=Math.min(u.start,p);u=u.end===void 0?_:Math.min(u.end,p),!n.extend&&_>u&&(p=u,u=_,_=p),p=zd(a,_);var E=zd(a,u);p&&E&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),_>u?(n.addRange(r),n.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qv=h&&"documentMode"in document&&11>=document.documentMode,Cs=null,Kc=null,Vo=null,Jc=!1;function Vd(n,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Cs==null||Cs!==Wt(u)||(u=Cs,"selectionStart"in u&&Zc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Vo&&Ho(Vo,u)||(Vo=u,u=Qa(Kc,"onSelect"),0<u.length&&(r=new Vc("onSelect","select",null,r,a),n.push({event:r,listeners:u}),r.target=Cs)))}function Za(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Rs={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},Qc={},Gd={};h&&(Gd=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Ka(n){if(Qc[n])return Qc[n];if(!Rs[n])return n;var r=Rs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Gd)return Qc[n]=r[a];return n}var Wd=Ka("animationend"),Xd=Ka("animationiteration"),jd=Ka("animationstart"),Yd=Ka("transitionend"),qd=new Map,$d="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(n,r){qd.set(n,r),l(r,[n])}for(var eu=0;eu<$d.length;eu++){var tu=$d[eu],$v=tu.toLowerCase(),Zv=tu[0].toUpperCase()+tu.slice(1);gr($v,"on"+Zv)}gr(Wd,"onAnimationEnd"),gr(Xd,"onAnimationIteration"),gr(jd,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(Yd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function Zd(n,r,a){var u=n.type||"unknown-event";n.currentTarget=a,Fa(u,r,void 0,n),n.currentTarget=null}function Kd(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var _=void 0;if(r)for(var E=u.length-1;0<=E;E--){var F=u[E],H=F.instance,te=F.currentTarget;if(F=F.listener,H!==_&&p.isPropagationStopped())break e;Zd(p,F,te),_=H}else for(E=0;E<u.length;E++){if(F=u[E],H=F.instance,te=F.currentTarget,F=F.listener,H!==_&&p.isPropagationStopped())break e;Zd(p,F,te),_=H}}}if(Gr)throw n=ur,Gr=!1,ur=null,n}function Yt(n,r){var a=r[cu];a===void 0&&(a=r[cu]=new Set);var u=n+"__bubble";a.has(u)||(Jd(r,n,2,!1),a.add(u))}function nu(n,r,a){var u=0;r&&(u|=4),Jd(a,n,u,r)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function Wo(n){if(!n[Ja]){n[Ja]=!0,i.forEach(function(a){a!=="selectionchange"&&(Kv.has(a)||nu(a,!1,n),nu(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Ja]||(r[Ja]=!0,nu("selectionchange",!1,r))}}function Jd(n,r,a,u){switch(Sd(r)){case 1:var p=hv;break;case 4:p=fv;break;default:p=zc}a=p.bind(null,r,a,n),p=void 0,!Ms||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,a,{capture:!0,passive:p}):n.addEventListener(r,a,!0):p!==void 0?n.addEventListener(r,a,{passive:p}):n.addEventListener(r,a,!1)}function iu(n,r,a,u,p){var _=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var F=u.stateNode.containerInfo;if(F===p||F.nodeType===8&&F.parentNode===p)break;if(E===4)for(E=u.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;E=E.return}for(;F!==null;){if(E=jr(F),E===null)return;if(H=E.tag,H===5||H===6){u=_=E;continue e}F=F.parentNode}}u=u.return}Gn(function(){var te=_,_e=j(a),ye=[];e:{var ge=qd.get(n);if(ge!==void 0){var Ne=Vc,We=n;switch(n){case"keypress":if(ja(a)===0)break e;case"keydown":case"keyup":Ne=Cv;break;case"focusin":We="focus",Ne=Xc;break;case"focusout":We="blur",Ne=Xc;break;case"beforeblur":case"afterblur":Ne=Xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=Pv;break;case Wd:case Xd:case jd:Ne=_v;break;case Yd:Ne=Dv;break;case"scroll":Ne=dv;break;case"wheel":Ne=Nv;break;case"copy":case"cut":case"paste":Ne=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=Ad}var Xe=(r&4)!==0,rn=!Xe&&n==="scroll",q=Xe?ge!==null?ge+"Capture":null:ge;Xe=[];for(var X=te,Z;X!==null;){Z=X;var we=Z.stateNode;if(Z.tag===5&&we!==null&&(Z=we,q!==null&&(we=Dn(X,q),we!=null&&Xe.push(Xo(X,we,Z)))),rn)break;X=X.return}0<Xe.length&&(ge=new Ne(ge,We,null,a,_e),ye.push({event:ge,listeners:Xe}))}}if((r&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ne=n==="mouseout"||n==="pointerout",ge&&a!==Nt&&(We=a.relatedTarget||a.fromElement)&&(jr(We)||We[Hi]))break e;if((Ne||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(We=a.relatedTarget||a.toElement,Ne=te,We=We?jr(We):null,We!==null&&(rn=Ri(We),We!==rn||We.tag!==5&&We.tag!==6)&&(We=null)):(Ne=null,We=te),Ne!==We)){if(Xe=wd,we="onMouseLeave",q="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=Ad,we="onPointerLeave",q="onPointerEnter",X="pointer"),rn=Ne==null?ge:Ls(Ne),Z=We==null?ge:Ls(We),ge=new Xe(we,X+"leave",Ne,a,_e),ge.target=rn,ge.relatedTarget=Z,we=null,jr(_e)===te&&(Xe=new Xe(q,X+"enter",We,a,_e),Xe.target=Z,Xe.relatedTarget=rn,we=Xe),rn=we,Ne&&We)t:{for(Xe=Ne,q=We,X=0,Z=Xe;Z;Z=bs(Z))X++;for(Z=0,we=q;we;we=bs(we))Z++;for(;0<X-Z;)Xe=bs(Xe),X--;for(;0<Z-X;)q=bs(q),Z--;for(;X--;){if(Xe===q||q!==null&&Xe===q.alternate)break t;Xe=bs(Xe),q=bs(q)}Xe=null}else Xe=null;Ne!==null&&Qd(ye,ge,Ne,Xe,!1),We!==null&&rn!==null&&Qd(ye,rn,We,Xe,!0)}}e:{if(ge=te?Ls(te):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var Ye=Hv;else if(Dd(ge))if(Nd)Ye=Xv;else{Ye=Gv;var Qe=Vv}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ye=Wv);if(Ye&&(Ye=Ye(n,te))){Id(ye,Ye,a,_e);break e}Qe&&Qe(n,ge,te),n==="focusout"&&(Qe=ge._wrapperState)&&Qe.controlled&&ge.type==="number"&&Ut(ge,"number",ge.value)}switch(Qe=te?Ls(te):window,n){case"focusin":(Dd(Qe)||Qe.contentEditable==="true")&&(Cs=Qe,Kc=te,Vo=null);break;case"focusout":Vo=Kc=Cs=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Vd(ye,a,_e);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":Vd(ye,a,_e)}var et;if(Yc)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else As?Pd(n,a)&&(st="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(Cd&&a.locale!=="ko"&&(As||st!=="onCompositionStart"?st==="onCompositionEnd"&&As&&(et=Md()):(mr=_e,Hc="value"in mr?mr.value:mr.textContent,As=!0)),Qe=Qa(te,st),0<Qe.length&&(st=new Td(st,n,null,a,_e),ye.push({event:st,listeners:Qe}),et?st.data=et:(et=Ld(a),et!==null&&(st.data=et)))),(et=Fv?Ov(n,a):kv(n,a))&&(te=Qa(te,"onBeforeInput"),0<te.length&&(_e=new Td("onBeforeInput","beforeinput",null,a,_e),ye.push({event:_e,listeners:te}),_e.data=et))}Kd(ye,r)})}function Xo(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Qa(n,r){for(var a=r+"Capture",u=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Dn(n,a),_!=null&&u.unshift(Xo(n,_,p)),_=Dn(n,r),_!=null&&u.push(Xo(n,_,p))),n=n.return}return u}function bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qd(n,r,a,u,p){for(var _=r._reactName,E=[];a!==null&&a!==u;){var F=a,H=F.alternate,te=F.stateNode;if(H!==null&&H===u)break;F.tag===5&&te!==null&&(F=te,p?(H=Dn(a,_),H!=null&&E.unshift(Xo(a,H,F))):p||(H=Dn(a,_),H!=null&&E.push(Xo(a,H,F)))),a=a.return}E.length!==0&&n.push({event:r,listeners:E})}var Jv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function ep(n){return(typeof n=="string"?n:""+n).replace(Jv,`
`).replace(Qv,"")}function el(n,r,a){if(r=ep(r),ep(n)!==r&&a)throw Error(t(425))}function tl(){}var ru=null,su=null;function ou(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,e_=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,t_=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(n){return tp.resolve(null).then(n).catch(n_)}:au;function n_(n){setTimeout(function(){throw n})}function lu(n,r){var a=r,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),Uo(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);Uo(r)}function vr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function np(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),bi="__reactFiber$"+Ps,jo="__reactProps$"+Ps,Hi="__reactContainer$"+Ps,cu="__reactEvents$"+Ps,i_="__reactListeners$"+Ps,r_="__reactHandles$"+Ps;function jr(n){var r=n[bi];if(r)return r;for(var a=n.parentNode;a;){if(r=a[Hi]||a[bi]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=np(n);n!==null;){if(a=n[bi])return a;n=np(n)}return r}n=a,a=n.parentNode}return null}function Yo(n){return n=n[bi]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ls(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function nl(n){return n[jo]||null}var uu=[],Ds=-1;function _r(n){return{current:n}}function qt(n){0>Ds||(n.current=uu[Ds],uu[Ds]=null,Ds--)}function Xt(n,r){Ds++,uu[Ds]=n.current,n.current=r}var xr={},En=_r(xr),Wn=_r(!1),Yr=xr;function Is(n,r){var a=n.type.contextTypes;if(!a)return xr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=r[_];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Xn(n){return n=n.childContextTypes,n!=null}function il(){qt(Wn),qt(En)}function ip(n,r,a){if(En.current!==xr)throw Error(t(168));Xt(En,r),Xt(Wn,a)}function rp(n,r,a){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,xe(n)||"Unknown",p));return oe({},a,u)}function rl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xr,Yr=En.current,Xt(En,n),Xt(Wn,Wn.current),!0}function sp(n,r,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=rp(n,r,Yr),u.__reactInternalMemoizedMergedChildContext=n,qt(Wn),qt(En),Xt(En,n)):qt(Wn),Xt(Wn,a)}var Vi=null,sl=!1,hu=!1;function op(n){Vi===null?Vi=[n]:Vi.push(n)}function s_(n){sl=!0,op(n)}function yr(){if(!hu&&Vi!==null){hu=!0;var n=0,r=xt;try{var a=Vi;for(xt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Vi=null,sl=!1}catch(p){throw Vi!==null&&(Vi=Vi.slice(n+1)),b(be,yr),p}finally{xt=r,hu=!1}}return null}var Ns=[],Us=0,ol=null,al=0,ai=[],li=0,qr=null,Gi=1,Wi="";function $r(n,r){Ns[Us++]=al,Ns[Us++]=ol,ol=n,al=r}function ap(n,r,a){ai[li++]=Gi,ai[li++]=Wi,ai[li++]=qr,qr=n;var u=Gi;n=Wi;var p=32-Pt(u)-1;u&=~(1<<p),a+=1;var _=32-Pt(r)+p;if(30<_){var E=p-p%5;_=(u&(1<<E)-1).toString(32),u>>=E,p-=E,Gi=1<<32-Pt(r)+p|a<<p|u,Wi=_+n}else Gi=1<<_|a<<p|u,Wi=n}function fu(n){n.return!==null&&($r(n,1),ap(n,1,0))}function du(n){for(;n===ol;)ol=Ns[--Us],Ns[Us]=null,al=Ns[--Us],Ns[Us]=null;for(;n===qr;)qr=ai[--li],ai[li]=null,Wi=ai[--li],ai[li]=null,Gi=ai[--li],ai[li]=null}var ei=null,ti=null,Zt=!1,_i=null;function lp(n,r){var a=fi(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function cp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ei=n,ti=vr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ei=n,ti=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=qr!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=fi(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,ei=n,ti=null,!0):!1;default:return!1}}function pu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function mu(n){if(Zt){var r=ti;if(r){var a=r;if(!cp(n,r)){if(pu(n))throw Error(t(418));r=vr(a.nextSibling);var u=ei;r&&cp(n,r)?lp(u,a):(n.flags=n.flags&-4097|2,Zt=!1,ei=n)}}else{if(pu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Zt=!1,ei=n}}}function up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function ll(n){if(n!==ei)return!1;if(!Zt)return up(n),Zt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!ou(n.type,n.memoizedProps)),r&&(r=ti)){if(pu(n))throw hp(),Error(t(418));for(;r;)lp(n,r),r=vr(r.nextSibling)}if(up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){ti=vr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}ti=null}}else ti=ei?vr(n.stateNode.nextSibling):null;return!0}function hp(){for(var n=ti;n;)n=vr(n.nextSibling)}function Fs(){ti=ei=null,Zt=!1}function gu(n){_i===null?_i=[n]:_i.push(n)}var o_=T.ReactCurrentBatchConfig;function qo(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(E){var F=p.refs;E===null?delete F[_]:F[_]=E},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function cl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function fp(n){var r=n._init;return r(n._payload)}function dp(n){function r(q,X){if(n){var Z=q.deletions;Z===null?(q.deletions=[X],q.flags|=16):Z.push(X)}}function a(q,X){if(!n)return null;for(;X!==null;)r(q,X),X=X.sibling;return null}function u(q,X){for(q=new Map;X!==null;)X.key!==null?q.set(X.key,X):q.set(X.index,X),X=X.sibling;return q}function p(q,X){return q=Rr(q,X),q.index=0,q.sibling=null,q}function _(q,X,Z){return q.index=Z,n?(Z=q.alternate,Z!==null?(Z=Z.index,Z<X?(q.flags|=2,X):Z):(q.flags|=2,X)):(q.flags|=1048576,X)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function F(q,X,Z,we){return X===null||X.tag!==6?(X=ah(Z,q.mode,we),X.return=q,X):(X=p(X,Z),X.return=q,X)}function H(q,X,Z,we){var Ye=Z.type;return Ye===O?_e(q,X,Z.props.children,we,Z.key):X!==null&&(X.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ae&&fp(Ye)===X.type)?(we=p(X,Z.props),we.ref=qo(q,X,Z),we.return=q,we):(we=Il(Z.type,Z.key,Z.props,null,q.mode,we),we.ref=qo(q,X,Z),we.return=q,we)}function te(q,X,Z,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==Z.containerInfo||X.stateNode.implementation!==Z.implementation?(X=lh(Z,q.mode,we),X.return=q,X):(X=p(X,Z.children||[]),X.return=q,X)}function _e(q,X,Z,we,Ye){return X===null||X.tag!==7?(X=is(Z,q.mode,we,Ye),X.return=q,X):(X=p(X,Z),X.return=q,X)}function ye(q,X,Z){if(typeof X=="string"&&X!==""||typeof X=="number")return X=ah(""+X,q.mode,Z),X.return=q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case N:return Z=Il(X.type,X.key,X.props,null,q.mode,Z),Z.ref=qo(q,null,X),Z.return=q,Z;case I:return X=lh(X,q.mode,Z),X.return=q,X;case ae:var we=X._init;return ye(q,we(X._payload),Z)}if(qe(X)||ce(X))return X=is(X,q.mode,Z,null),X.return=q,X;cl(q,X)}return null}function ge(q,X,Z,we){var Ye=X!==null?X.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Ye!==null?null:F(q,X,""+Z,we);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case N:return Z.key===Ye?H(q,X,Z,we):null;case I:return Z.key===Ye?te(q,X,Z,we):null;case ae:return Ye=Z._init,ge(q,X,Ye(Z._payload),we)}if(qe(Z)||ce(Z))return Ye!==null?null:_e(q,X,Z,we,null);cl(q,Z)}return null}function Ne(q,X,Z,we,Ye){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(Z)||null,F(X,q,""+we,Ye);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case N:return q=q.get(we.key===null?Z:we.key)||null,H(X,q,we,Ye);case I:return q=q.get(we.key===null?Z:we.key)||null,te(X,q,we,Ye);case ae:var Qe=we._init;return Ne(q,X,Z,Qe(we._payload),Ye)}if(qe(we)||ce(we))return q=q.get(Z)||null,_e(X,q,we,Ye,null);cl(X,we)}return null}function We(q,X,Z,we){for(var Ye=null,Qe=null,et=X,st=X=0,mn=null;et!==null&&st<Z.length;st++){et.index>st?(mn=et,et=null):mn=et.sibling;var Lt=ge(q,et,Z[st],we);if(Lt===null){et===null&&(et=mn);break}n&&et&&Lt.alternate===null&&r(q,et),X=_(Lt,X,st),Qe===null?Ye=Lt:Qe.sibling=Lt,Qe=Lt,et=mn}if(st===Z.length)return a(q,et),Zt&&$r(q,st),Ye;if(et===null){for(;st<Z.length;st++)et=ye(q,Z[st],we),et!==null&&(X=_(et,X,st),Qe===null?Ye=et:Qe.sibling=et,Qe=et);return Zt&&$r(q,st),Ye}for(et=u(q,et);st<Z.length;st++)mn=Ne(et,q,st,Z[st],we),mn!==null&&(n&&mn.alternate!==null&&et.delete(mn.key===null?st:mn.key),X=_(mn,X,st),Qe===null?Ye=mn:Qe.sibling=mn,Qe=mn);return n&&et.forEach(function(br){return r(q,br)}),Zt&&$r(q,st),Ye}function Xe(q,X,Z,we){var Ye=ce(Z);if(typeof Ye!="function")throw Error(t(150));if(Z=Ye.call(Z),Z==null)throw Error(t(151));for(var Qe=Ye=null,et=X,st=X=0,mn=null,Lt=Z.next();et!==null&&!Lt.done;st++,Lt=Z.next()){et.index>st?(mn=et,et=null):mn=et.sibling;var br=ge(q,et,Lt.value,we);if(br===null){et===null&&(et=mn);break}n&&et&&br.alternate===null&&r(q,et),X=_(br,X,st),Qe===null?Ye=br:Qe.sibling=br,Qe=br,et=mn}if(Lt.done)return a(q,et),Zt&&$r(q,st),Ye;if(et===null){for(;!Lt.done;st++,Lt=Z.next())Lt=ye(q,Lt.value,we),Lt!==null&&(X=_(Lt,X,st),Qe===null?Ye=Lt:Qe.sibling=Lt,Qe=Lt);return Zt&&$r(q,st),Ye}for(et=u(q,et);!Lt.done;st++,Lt=Z.next())Lt=Ne(et,q,st,Lt.value,we),Lt!==null&&(n&&Lt.alternate!==null&&et.delete(Lt.key===null?st:Lt.key),X=_(Lt,X,st),Qe===null?Ye=Lt:Qe.sibling=Lt,Qe=Lt);return n&&et.forEach(function(z_){return r(q,z_)}),Zt&&$r(q,st),Ye}function rn(q,X,Z,we){if(typeof Z=="object"&&Z!==null&&Z.type===O&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case N:e:{for(var Ye=Z.key,Qe=X;Qe!==null;){if(Qe.key===Ye){if(Ye=Z.type,Ye===O){if(Qe.tag===7){a(q,Qe.sibling),X=p(Qe,Z.props.children),X.return=q,q=X;break e}}else if(Qe.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ae&&fp(Ye)===Qe.type){a(q,Qe.sibling),X=p(Qe,Z.props),X.ref=qo(q,Qe,Z),X.return=q,q=X;break e}a(q,Qe);break}else r(q,Qe);Qe=Qe.sibling}Z.type===O?(X=is(Z.props.children,q.mode,we,Z.key),X.return=q,q=X):(we=Il(Z.type,Z.key,Z.props,null,q.mode,we),we.ref=qo(q,X,Z),we.return=q,q=we)}return E(q);case I:e:{for(Qe=Z.key;X!==null;){if(X.key===Qe)if(X.tag===4&&X.stateNode.containerInfo===Z.containerInfo&&X.stateNode.implementation===Z.implementation){a(q,X.sibling),X=p(X,Z.children||[]),X.return=q,q=X;break e}else{a(q,X);break}else r(q,X);X=X.sibling}X=lh(Z,q.mode,we),X.return=q,q=X}return E(q);case ae:return Qe=Z._init,rn(q,X,Qe(Z._payload),we)}if(qe(Z))return We(q,X,Z,we);if(ce(Z))return Xe(q,X,Z,we);cl(q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,X!==null&&X.tag===6?(a(q,X.sibling),X=p(X,Z),X.return=q,q=X):(a(q,X),X=ah(Z,q.mode,we),X.return=q,q=X),E(q)):a(q,X)}return rn}var Os=dp(!0),pp=dp(!1),ul=_r(null),hl=null,ks=null,vu=null;function _u(){vu=ks=hl=null}function xu(n){var r=ul.current;qt(ul),n._currentValue=r}function yu(n,r,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===a)break;n=n.return}}function zs(n,r){hl=n,vu=ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(jn=!0),n.firstContext=null)}function ci(n){var r=n._currentValue;if(vu!==n)if(n={context:n,memoizedValue:r,next:null},ks===null){if(hl===null)throw Error(t(308));ks=n,hl.dependencies={lanes:0,firstContext:n}}else ks=ks.next=n;return r}var Zr=null;function Su(n){Zr===null?Zr=[n]:Zr.push(n)}function mp(n,r,a,u){var p=r.interleaved;return p===null?(a.next=a,Su(r)):(a.next=p.next,p.next=a),r.interleaved=a,Xi(n,u)}function Xi(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Sr=!1;function Mu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Mr(n,r,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Rt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,Xi(n,a)}return p=u.interleaved,p===null?(r.next=r,Su(u)):(r.next=p.next,p.next=r),u.interleaved=r,Xi(n,a)}function fl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,Xr(n,a)}}function vp(n,r){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=E:_=_.next=E,a=a.next}while(a!==null);_===null?p=_=r:_=_.next=r}else p=_=r;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function dl(n,r,a,u){var p=n.updateQueue;Sr=!1;var _=p.firstBaseUpdate,E=p.lastBaseUpdate,F=p.shared.pending;if(F!==null){p.shared.pending=null;var H=F,te=H.next;H.next=null,E===null?_=te:E.next=te,E=H;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,F=_e.lastBaseUpdate,F!==E&&(F===null?_e.firstBaseUpdate=te:F.next=te,_e.lastBaseUpdate=H))}if(_!==null){var ye=p.baseState;E=0,_e=te=H=null,F=_;do{var ge=F.lane,Ne=F.eventTime;if((u&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ne,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var We=n,Xe=F;switch(ge=r,Ne=a,Xe.tag){case 1:if(We=Xe.payload,typeof We=="function"){ye=We.call(Ne,ye,ge);break e}ye=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Xe.payload,ge=typeof We=="function"?We.call(Ne,ye,ge):We,ge==null)break e;ye=oe({},ye,ge);break e;case 2:Sr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,ge=p.effects,ge===null?p.effects=[F]:ge.push(F))}else Ne={eventTime:Ne,lane:ge,tag:F.tag,payload:F.payload,callback:F.callback,next:null},_e===null?(te=_e=Ne,H=ye):_e=_e.next=Ne,E|=ge;if(F=F.next,F===null){if(F=p.shared.pending,F===null)break;ge=F,F=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);if(_e===null&&(H=ye),p.baseState=H,p.firstBaseUpdate=te,p.lastBaseUpdate=_e,r=p.shared.interleaved,r!==null){p=r;do E|=p.lane,p=p.next;while(p!==r)}else _===null&&(p.shared.lanes=0);Qr|=E,n.lanes=E,n.memoizedState=ye}}function _p(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var $o={},Pi=_r($o),Zo=_r($o),Ko=_r($o);function Kr(n){if(n===$o)throw Error(t(174));return n}function Eu(n,r){switch(Xt(Ko,r),Xt(Zo,n),Xt(Pi,$o),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:je(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=je(r,n)}qt(Pi),Xt(Pi,r)}function Bs(){qt(Pi),qt(Zo),qt(Ko)}function xp(n){Kr(Ko.current);var r=Kr(Pi.current),a=je(r,n.type);r!==a&&(Xt(Zo,n),Xt(Pi,a))}function wu(n){Zo.current===n&&(qt(Pi),qt(Zo))}var Kt=_r(0);function pl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Tu=[];function Au(){for(var n=0;n<Tu.length;n++)Tu[n]._workInProgressVersionPrimary=null;Tu.length=0}var ml=T.ReactCurrentDispatcher,Cu=T.ReactCurrentBatchConfig,Jr=0,Jt=null,cn=null,dn=null,gl=!1,Jo=!1,Qo=0,a_=0;function wn(){throw Error(t(321))}function Ru(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!vi(n[a],r[a]))return!1;return!0}function bu(n,r,a,u,p,_){if(Jr=_,Jt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ml.current=n===null||n.memoizedState===null?h_:f_,n=a(u,p),Jo){_=0;do{if(Jo=!1,Qo=0,25<=_)throw Error(t(301));_+=1,dn=cn=null,r.updateQueue=null,ml.current=d_,n=a(u,p)}while(Jo)}if(ml.current=xl,r=cn!==null&&cn.next!==null,Jr=0,dn=cn=Jt=null,gl=!1,r)throw Error(t(300));return n}function Pu(){var n=Qo!==0;return Qo=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Jt.memoizedState=dn=n:dn=dn.next=n,dn}function ui(){if(cn===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var r=dn===null?Jt.memoizedState:dn.next;if(r!==null)dn=r,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},dn===null?Jt.memoizedState=dn=n:dn=dn.next=n}return dn}function ea(n,r){return typeof r=="function"?r(n):r}function Lu(n){var r=ui(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=cn,p=u.baseQueue,_=a.pending;if(_!==null){if(p!==null){var E=p.next;p.next=_.next,_.next=E}u.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,u=u.baseState;var F=E=null,H=null,te=_;do{var _e=te.lane;if((Jr&_e)===_e)H!==null&&(H=H.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),u=te.hasEagerState?te.eagerState:n(u,te.action);else{var ye={lane:_e,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};H===null?(F=H=ye,E=u):H=H.next=ye,Jt.lanes|=_e,Qr|=_e}te=te.next}while(te!==null&&te!==_);H===null?E=u:H.next=F,vi(u,r.memoizedState)||(jn=!0),r.memoizedState=u,r.baseState=E,r.baseQueue=H,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do _=p.lane,Jt.lanes|=_,Qr|=_,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Du(n){var r=ui(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,_=r.memoizedState;if(p!==null){a.pending=null;var E=p=p.next;do _=n(_,E.action),E=E.next;while(E!==p);vi(_,r.memoizedState)||(jn=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),a.lastRenderedState=_}return[_,u]}function yp(){}function Sp(n,r){var a=Jt,u=ui(),p=r(),_=!vi(u.memoizedState,p);if(_&&(u.memoizedState=p,jn=!0),u=u.queue,Iu(wp.bind(null,a,u,n),[n]),u.getSnapshot!==r||_||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,ta(9,Ep.bind(null,a,u,p,r),void 0,null),pn===null)throw Error(t(349));(Jr&30)!==0||Mp(a,r,p)}return p}function Mp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Jt.updateQueue,r===null?(r={lastEffect:null,stores:null},Jt.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Ep(n,r,a,u){r.value=a,r.getSnapshot=u,Tp(r)&&Ap(n)}function wp(n,r,a){return a(function(){Tp(r)&&Ap(n)})}function Tp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!vi(n,a)}catch{return!0}}function Ap(n){var r=Xi(n,1);r!==null&&Mi(r,n,1,-1)}function Cp(n){var r=Li();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:n},r.queue=n,n=n.dispatch=u_.bind(null,Jt,n),[r.memoizedState,n]}function ta(n,r,a,u){return n={tag:n,create:r,destroy:a,deps:u,next:null},r=Jt.updateQueue,r===null?(r={lastEffect:null,stores:null},Jt.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,r.lastEffect=n)),n}function Rp(){return ui().memoizedState}function vl(n,r,a,u){var p=Li();Jt.flags|=n,p.memoizedState=ta(1|r,a,void 0,u===void 0?null:u)}function _l(n,r,a,u){var p=ui();u=u===void 0?null:u;var _=void 0;if(cn!==null){var E=cn.memoizedState;if(_=E.destroy,u!==null&&Ru(u,E.deps)){p.memoizedState=ta(r,a,_,u);return}}Jt.flags|=n,p.memoizedState=ta(1|r,a,_,u)}function bp(n,r){return vl(8390656,8,n,r)}function Iu(n,r){return _l(2048,8,n,r)}function Pp(n,r){return _l(4,2,n,r)}function Lp(n,r){return _l(4,4,n,r)}function Dp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ip(n,r,a){return a=a!=null?a.concat([n]):null,_l(4,4,Dp.bind(null,r,n),a)}function Nu(){}function Np(n,r){var a=ui();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Ru(r,u[1])?u[0]:(a.memoizedState=[n,r],n)}function Up(n,r){var a=ui();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Ru(r,u[1])?u[0]:(n=n(),a.memoizedState=[n,r],n)}function Fp(n,r,a){return(Jr&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=a):(vi(a,r)||(a=Nn(),Jt.lanes|=a,Qr|=a,n.baseState=!0),r)}function l_(n,r){var a=xt;xt=a!==0&&4>a?a:4,n(!0);var u=Cu.transition;Cu.transition={};try{n(!1),r()}finally{xt=a,Cu.transition=u}}function Op(){return ui().memoizedState}function c_(n,r,a){var u=Ar(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},kp(n))zp(r,a);else if(a=mp(n,r,a,u),a!==null){var p=Fn();Mi(a,n,u,p),Bp(a,r,u)}}function u_(n,r,a){var u=Ar(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(kp(n))zp(r,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var E=r.lastRenderedState,F=_(E,a);if(p.hasEagerState=!0,p.eagerState=F,vi(F,E)){var H=r.interleaved;H===null?(p.next=p,Su(r)):(p.next=H.next,H.next=p),r.interleaved=p;return}}catch{}finally{}a=mp(n,r,p,u),a!==null&&(p=Fn(),Mi(a,n,u,p),Bp(a,r,u))}}function kp(n){var r=n.alternate;return n===Jt||r!==null&&r===Jt}function zp(n,r){Jo=gl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Bp(n,r,a){if((a&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,Xr(n,a)}}var xl={readContext:ci,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},h_={readContext:ci,useCallback:function(n,r){return Li().memoizedState=[n,r===void 0?null:r],n},useContext:ci,useEffect:bp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,vl(4194308,4,Dp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return vl(4194308,4,n,r)},useInsertionEffect:function(n,r){return vl(4,2,n,r)},useMemo:function(n,r){var a=Li();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var u=Li();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=c_.bind(null,Jt,n),[u.memoizedState,n]},useRef:function(n){var r=Li();return n={current:n},r.memoizedState=n},useState:Cp,useDebugValue:Nu,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=Cp(!1),r=n[0];return n=l_.bind(null,n[1]),Li().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var u=Jt,p=Li();if(Zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),pn===null)throw Error(t(349));(Jr&30)!==0||Mp(u,r,a)}p.memoizedState=a;var _={value:a,getSnapshot:r};return p.queue=_,bp(wp.bind(null,u,_,n),[n]),u.flags|=2048,ta(9,Ep.bind(null,u,_,a,r),void 0,null),a},useId:function(){var n=Li(),r=pn.identifierPrefix;if(Zt){var a=Wi,u=Gi;a=(u&~(1<<32-Pt(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=Qo++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=a_++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},f_={readContext:ci,useCallback:Np,useContext:ci,useEffect:Iu,useImperativeHandle:Ip,useInsertionEffect:Pp,useLayoutEffect:Lp,useMemo:Up,useReducer:Lu,useRef:Rp,useState:function(){return Lu(ea)},useDebugValue:Nu,useDeferredValue:function(n){var r=ui();return Fp(r,cn.memoizedState,n)},useTransition:function(){var n=Lu(ea)[0],r=ui().memoizedState;return[n,r]},useMutableSource:yp,useSyncExternalStore:Sp,useId:Op,unstable_isNewReconciler:!1},d_={readContext:ci,useCallback:Np,useContext:ci,useEffect:Iu,useImperativeHandle:Ip,useInsertionEffect:Pp,useLayoutEffect:Lp,useMemo:Up,useReducer:Du,useRef:Rp,useState:function(){return Du(ea)},useDebugValue:Nu,useDeferredValue:function(n){var r=ui();return cn===null?r.memoizedState=n:Fp(r,cn.memoizedState,n)},useTransition:function(){var n=Du(ea)[0],r=ui().memoizedState;return[n,r]},useMutableSource:yp,useSyncExternalStore:Sp,useId:Op,unstable_isNewReconciler:!1};function xi(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Uu(n,r,a,u){r=n.memoizedState,a=a(u,r),a=a==null?r:oe({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var yl={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var u=Fn(),p=Ar(n),_=ji(u,p);_.payload=r,a!=null&&(_.callback=a),r=Mr(n,_,p),r!==null&&(Mi(r,n,p,u),fl(r,n,p))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var u=Fn(),p=Ar(n),_=ji(u,p);_.tag=1,_.payload=r,a!=null&&(_.callback=a),r=Mr(n,_,p),r!==null&&(Mi(r,n,p,u),fl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Fn(),u=Ar(n),p=ji(a,u);p.tag=2,r!=null&&(p.callback=r),r=Mr(n,p,u),r!==null&&(Mi(r,n,u,a),fl(r,n,u))}};function Hp(n,r,a,u,p,_,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,E):r.prototype&&r.prototype.isPureReactComponent?!Ho(a,u)||!Ho(p,_):!0}function Vp(n,r,a){var u=!1,p=xr,_=r.contextType;return typeof _=="object"&&_!==null?_=ci(_):(p=Xn(r)?Yr:En.current,u=r.contextTypes,_=(u=u!=null)?Is(n,p):xr),r=new r(a,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=yl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),r}function Gp(n,r,a,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==n&&yl.enqueueReplaceState(r,r.state,null)}function Fu(n,r,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},Mu(n);var _=r.contextType;typeof _=="object"&&_!==null?p.context=ci(_):(_=Xn(r)?Yr:En.current,p.context=Is(n,_)),p.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(Uu(n,r,_,a),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&yl.enqueueReplaceState(p,p.state,null),dl(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Hs(n,r){try{var a="",u=r;do a+=fe(u),u=u.return;while(u);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:p,digest:null}}function Ou(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function ku(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var p_=typeof WeakMap=="function"?WeakMap:Map;function Wp(n,r,a){a=ji(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){Cl||(Cl=!0,Qu=u),ku(n,r)},a}function Xp(n,r,a){a=ji(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;a.payload=function(){return u(p)},a.callback=function(){ku(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){ku(n,r),typeof u!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),a}function jp(n,r,a){var u=n.pingCache;if(u===null){u=n.pingCache=new p_;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(a)||(p.add(a),n=R_.bind(null,n,r,a),r.then(n,n))}function Yp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function qp(n,r,a,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=ji(-1,1),r.tag=2,Mr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var m_=T.ReactCurrentOwner,jn=!1;function Un(n,r,a,u){r.child=n===null?pp(r,null,a,u):Os(r,n.child,a,u)}function $p(n,r,a,u,p){a=a.render;var _=r.ref;return zs(r,p),u=bu(n,r,a,u,_,p),a=Pu(),n!==null&&!jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Yi(n,r,p)):(Zt&&a&&fu(r),r.flags|=1,Un(n,r,u,p),r.child)}function Zp(n,r,a,u,p){if(n===null){var _=a.type;return typeof _=="function"&&!oh(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=_,Kp(n,r,_,u,p)):(n=Il(a.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&p)===0){var E=_.memoizedProps;if(a=a.compare,a=a!==null?a:Ho,a(E,u)&&n.ref===r.ref)return Yi(n,r,p)}return r.flags|=1,n=Rr(_,u),n.ref=r.ref,n.return=r,r.child=n}function Kp(n,r,a,u,p){if(n!==null){var _=n.memoizedProps;if(Ho(_,u)&&n.ref===r.ref)if(jn=!1,r.pendingProps=u=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(jn=!0);else return r.lanes=n.lanes,Yi(n,r,p)}return zu(n,r,a,u,p)}function Jp(n,r,a){var u=r.pendingProps,p=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(Gs,ni),ni|=a;else{if((a&1073741824)===0)return n=_!==null?_.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Xt(Gs,ni),ni|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=_!==null?_.baseLanes:a,Xt(Gs,ni),ni|=u}else _!==null?(u=_.baseLanes|a,r.memoizedState=null):u=a,Xt(Gs,ni),ni|=u;return Un(n,r,p,a),r.child}function Qp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function zu(n,r,a,u,p){var _=Xn(a)?Yr:En.current;return _=Is(r,_),zs(r,p),a=bu(n,r,a,u,_,p),u=Pu(),n!==null&&!jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Yi(n,r,p)):(Zt&&u&&fu(r),r.flags|=1,Un(n,r,a,p),r.child)}function em(n,r,a,u,p){if(Xn(a)){var _=!0;rl(r)}else _=!1;if(zs(r,p),r.stateNode===null)Ml(n,r),Vp(r,a,u),Fu(r,a,u,p),u=!0;else if(n===null){var E=r.stateNode,F=r.memoizedProps;E.props=F;var H=E.context,te=a.contextType;typeof te=="object"&&te!==null?te=ci(te):(te=Xn(a)?Yr:En.current,te=Is(r,te));var _e=a.getDerivedStateFromProps,ye=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==u||H!==te)&&Gp(r,E,u,te),Sr=!1;var ge=r.memoizedState;E.state=ge,dl(r,u,E,p),H=r.memoizedState,F!==u||ge!==H||Wn.current||Sr?(typeof _e=="function"&&(Uu(r,a,_e,u),H=r.memoizedState),(F=Sr||Hp(r,a,F,u,ge,H,te))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=H),E.props=u,E.state=H,E.context=te,u=F):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{E=r.stateNode,gp(n,r),F=r.memoizedProps,te=r.type===r.elementType?F:xi(r.type,F),E.props=te,ye=r.pendingProps,ge=E.context,H=a.contextType,typeof H=="object"&&H!==null?H=ci(H):(H=Xn(a)?Yr:En.current,H=Is(r,H));var Ne=a.getDerivedStateFromProps;(_e=typeof Ne=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(F!==ye||ge!==H)&&Gp(r,E,u,H),Sr=!1,ge=r.memoizedState,E.state=ge,dl(r,u,E,p);var We=r.memoizedState;F!==ye||ge!==We||Wn.current||Sr?(typeof Ne=="function"&&(Uu(r,a,Ne,u),We=r.memoizedState),(te=Sr||Hp(r,a,te,u,ge,We,H)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,We,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,We,H)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||F===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=We),E.props=u,E.state=We,E.context=H,u=te):(typeof E.componentDidUpdate!="function"||F===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),u=!1)}return Bu(n,r,a,u,_,p)}function Bu(n,r,a,u,p,_){Qp(n,r);var E=(r.flags&128)!==0;if(!u&&!E)return p&&sp(r,a,!1),Yi(n,r,_);u=r.stateNode,m_.current=r;var F=E&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&E?(r.child=Os(r,n.child,null,_),r.child=Os(r,null,F,_)):Un(n,r,F,_),r.memoizedState=u.state,p&&sp(r,a,!0),r.child}function tm(n){var r=n.stateNode;r.pendingContext?ip(n,r.pendingContext,r.pendingContext!==r.context):r.context&&ip(n,r.context,!1),Eu(n,r.containerInfo)}function nm(n,r,a,u,p){return Fs(),gu(p),r.flags|=256,Un(n,r,a,u),r.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Vu(n){return{baseLanes:n,cachePool:null,transitions:null}}function im(n,r,a){var u=r.pendingProps,p=Kt.current,_=!1,E=(r.flags&128)!==0,F;if((F=E)||(F=n!==null&&n.memoizedState===null?!1:(p&2)!==0),F?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Xt(Kt,p&1),n===null)return mu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(E=u.children,n=u.fallback,_?(u=r.mode,_=r.child,E={mode:"hidden",children:E},(u&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=E):_=Nl(E,u,0,null),n=is(n,u,a,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=Vu(a),r.memoizedState=Hu,n):Gu(r,E));if(p=n.memoizedState,p!==null&&(F=p.dehydrated,F!==null))return g_(n,r,E,u,F,p,a);if(_){_=u.fallback,E=r.mode,p=n.child,F=p.sibling;var H={mode:"hidden",children:u.children};return(E&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=H,r.deletions=null):(u=Rr(p,H),u.subtreeFlags=p.subtreeFlags&14680064),F!==null?_=Rr(F,_):(_=is(_,E,a,null),_.flags|=2),_.return=r,u.return=r,u.sibling=_,r.child=u,u=_,_=r.child,E=n.child.memoizedState,E=E===null?Vu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},_.memoizedState=E,_.childLanes=n.childLanes&~a,r.memoizedState=Hu,u}return _=n.child,n=_.sibling,u=Rr(_,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=a),u.return=r,u.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=u,r.memoizedState=null,u}function Gu(n,r){return r=Nl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Sl(n,r,a,u){return u!==null&&gu(u),Os(r,n.child,null,a),n=Gu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function g_(n,r,a,u,p,_,E){if(a)return r.flags&256?(r.flags&=-257,u=Ou(Error(t(422))),Sl(n,r,E,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=u.fallback,p=r.mode,u=Nl({mode:"visible",children:u.children},p,0,null),_=is(_,p,E,null),_.flags|=2,u.return=r,_.return=r,u.sibling=_,r.child=u,(r.mode&1)!==0&&Os(r,n.child,null,E),r.child.memoizedState=Vu(E),r.memoizedState=Hu,_);if((r.mode&1)===0)return Sl(n,r,E,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var F=u.dgst;return u=F,_=Error(t(419)),u=Ou(_,u,void 0),Sl(n,r,E,u)}if(F=(E&n.childLanes)!==0,jn||F){if(u=pn,u!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|E))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Xi(n,p),Mi(u,n,p,-1))}return sh(),u=Ou(Error(t(421))),Sl(n,r,E,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=b_.bind(null,n),p._reactRetry=r,null):(n=_.treeContext,ti=vr(p.nextSibling),ei=r,Zt=!0,_i=null,n!==null&&(ai[li++]=Gi,ai[li++]=Wi,ai[li++]=qr,Gi=n.id,Wi=n.overflow,qr=r),r=Gu(r,u.children),r.flags|=4096,r)}function rm(n,r,a){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),yu(n.return,r,a)}function Wu(n,r,a,u,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=a,_.tailMode=p)}function sm(n,r,a){var u=r.pendingProps,p=u.revealOrder,_=u.tail;if(Un(n,r,u.children,a),u=Kt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&rm(n,a,r);else if(n.tag===19)rm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Xt(Kt,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(a=r.child,p=null;a!==null;)n=a.alternate,n!==null&&pl(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=r.child,r.child=null):(p=a.sibling,a.sibling=null),Wu(r,!1,p,a,_);break;case"backwards":for(a=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&pl(n)===null){r.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Wu(r,!0,a,null,_);break;case"together":Wu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ml(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Yi(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Qr|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Rr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Rr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function v_(n,r,a){switch(r.tag){case 3:tm(r),Fs();break;case 5:xp(r);break;case 1:Xn(r.type)&&rl(r);break;case 4:Eu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Xt(ul,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Xt(Kt,Kt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?im(n,r,a):(Xt(Kt,Kt.current&1),n=Yi(n,r,a),n!==null?n.sibling:null);Xt(Kt,Kt.current&1);break;case 19:if(u=(a&r.childLanes)!==0,(n.flags&128)!==0){if(u)return sm(n,r,a);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Xt(Kt,Kt.current),u)break;return null;case 22:case 23:return r.lanes=0,Jp(n,r,a)}return Yi(n,r,a)}var om,Xu,am,lm;om=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Xu=function(){},am=function(n,r,a,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,Kr(Pi.current);var _=null;switch(a){case"input":p=V(n,p),u=V(n,u),_=[];break;case"select":p=oe({},p,{value:void 0}),u=oe({},u,{value:void 0}),_=[];break;case"textarea":p=R(n,p),u=R(n,u),_=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=tl)}gt(a,u);var E;a=null;for(te in p)if(!u.hasOwnProperty(te)&&p.hasOwnProperty(te)&&p[te]!=null)if(te==="style"){var F=p[te];for(E in F)F.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?_||(_=[]):(_=_||[]).push(te,null));for(te in u){var H=u[te];if(F=p?.[te],u.hasOwnProperty(te)&&H!==F&&(H!=null||F!=null))if(te==="style")if(F){for(E in F)!F.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in H)H.hasOwnProperty(E)&&F[E]!==H[E]&&(a||(a={}),a[E]=H[E])}else a||(_||(_=[]),_.push(te,a)),a=H;else te==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(_=_||[]).push(te,H)):te==="children"?typeof H!="string"&&typeof H!="number"||(_=_||[]).push(te,""+H):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(H!=null&&te==="onScroll"&&Yt("scroll",n),_||F===H||(_=[])):(_=_||[]).push(te,H))}a&&(_=_||[]).push("style",a);var te=_;(r.updateQueue=te)&&(r.flags|=4)}},lm=function(n,r,a,u){a!==u&&(r.flags|=4)};function na(n,r){if(!Zt)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Tn(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(r)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,r}function __(n,r,a){var u=r.pendingProps;switch(du(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(r),null;case 1:return Xn(r.type)&&il(),Tn(r),null;case 3:return u=r.stateNode,Bs(),qt(Wn),qt(En),Au(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(ll(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,_i!==null&&(nh(_i),_i=null))),Xu(n,r),Tn(r),null;case 5:wu(r);var p=Kr(Ko.current);if(a=r.type,n!==null&&r.stateNode!=null)am(n,r,a,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Tn(r),null}if(n=Kr(Pi.current),ll(r)){u=r.stateNode,a=r.type;var _=r.memoizedProps;switch(u[bi]=r,u[jo]=_,n=(r.mode&1)!==0,a){case"dialog":Yt("cancel",u),Yt("close",u);break;case"iframe":case"object":case"embed":Yt("load",u);break;case"video":case"audio":for(p=0;p<Go.length;p++)Yt(Go[p],u);break;case"source":Yt("error",u);break;case"img":case"image":case"link":Yt("error",u),Yt("load",u);break;case"details":Yt("toggle",u);break;case"input":Ln(u,_),Yt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!_.multiple},Yt("invalid",u);break;case"textarea":J(u,_),Yt("invalid",u)}gt(a,_),p=null;for(var E in _)if(_.hasOwnProperty(E)){var F=_[E];E==="children"?typeof F=="string"?u.textContent!==F&&(_.suppressHydrationWarning!==!0&&el(u.textContent,F,n),p=["children",F]):typeof F=="number"&&u.textContent!==""+F&&(_.suppressHydrationWarning!==!0&&el(u.textContent,F,n),p=["children",""+F]):o.hasOwnProperty(E)&&F!=null&&E==="onScroll"&&Yt("scroll",u)}switch(a){case"input":kt(u),Ze(u,_,!0);break;case"textarea":kt(u),ve(u);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(u.onclick=tl)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(a,{is:u.is}):(n=E.createElement(a),a==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,a),n[bi]=r,n[jo]=u,om(n,r,!1,!1),r.stateNode=n;e:{switch(E=at(a,u),a){case"dialog":Yt("cancel",n),Yt("close",n),p=u;break;case"iframe":case"object":case"embed":Yt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Go.length;p++)Yt(Go[p],n);p=u;break;case"source":Yt("error",n),p=u;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),p=u;break;case"details":Yt("toggle",n),p=u;break;case"input":Ln(n,u),p=V(n,u),Yt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=oe({},u,{value:void 0}),Yt("invalid",n);break;case"textarea":J(n,u),p=R(n,u),Yt("invalid",n);break;default:p=u}gt(a,p),F=p;for(_ in F)if(F.hasOwnProperty(_)){var H=F[_];_==="style"?nt(n,H):_==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&ze(n,H)):_==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&dt(n,H):typeof H=="number"&&dt(n,""+H):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?H!=null&&_==="onScroll"&&Yt("scroll",n):H!=null&&C(n,_,H,E))}switch(a){case"input":kt(n),Ze(n,u,!1);break;case"textarea":kt(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ae(u.value));break;case"select":n.multiple=!!u.multiple,_=u.value,_!=null?D(n,!!u.multiple,_,!1):u.defaultValue!=null&&D(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=tl)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Tn(r),null;case 6:if(n&&r.stateNode!=null)lm(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(a=Kr(Ko.current),Kr(Pi.current),ll(r)){if(u=r.stateNode,a=r.memoizedProps,u[bi]=r,(_=u.nodeValue!==a)&&(n=ei,n!==null))switch(n.tag){case 3:el(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&el(u.nodeValue,a,(n.mode&1)!==0)}_&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[bi]=r,r.stateNode=u}return Tn(r),null;case 13:if(qt(Kt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Zt&&ti!==null&&(r.mode&1)!==0&&(r.flags&128)===0)hp(),Fs(),r.flags|=98560,_=!1;else if(_=ll(r),u!==null&&u.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[bi]=r}else Fs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Tn(r),_=!1}else _i!==null&&(nh(_i),_i=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Kt.current&1)!==0?un===0&&(un=3):sh())),r.updateQueue!==null&&(r.flags|=4),Tn(r),null);case 4:return Bs(),Xu(n,r),n===null&&Wo(r.stateNode.containerInfo),Tn(r),null;case 10:return xu(r.type._context),Tn(r),null;case 17:return Xn(r.type)&&il(),Tn(r),null;case 19:if(qt(Kt),_=r.memoizedState,_===null)return Tn(r),null;if(u=(r.flags&128)!==0,E=_.rendering,E===null)if(u)na(_,!1);else{if(un!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(E=pl(n),E!==null){for(r.flags|=128,na(_,!1),u=E.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)_=a,n=u,_.flags&=14680066,E=_.alternate,E===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=E.childLanes,_.lanes=E.lanes,_.child=E.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=E.memoizedProps,_.memoizedState=E.memoizedState,_.updateQueue=E.updateQueue,_.type=E.type,n=E.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xt(Kt,Kt.current&1|2),r.child}n=n.sibling}_.tail!==null&&W()>Ws&&(r.flags|=128,u=!0,na(_,!1),r.lanes=4194304)}else{if(!u)if(n=pl(E),n!==null){if(r.flags|=128,u=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),na(_,!0),_.tail===null&&_.tailMode==="hidden"&&!E.alternate&&!Zt)return Tn(r),null}else 2*W()-_.renderingStartTime>Ws&&a!==1073741824&&(r.flags|=128,u=!0,na(_,!1),r.lanes=4194304);_.isBackwards?(E.sibling=r.child,r.child=E):(a=_.last,a!==null?a.sibling=E:r.child=E,_.last=E)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=W(),r.sibling=null,a=Kt.current,Xt(Kt,u?a&1|2:a&1),r):(Tn(r),null);case 22:case 23:return rh(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(ni&1073741824)!==0&&(Tn(r),r.subtreeFlags&6&&(r.flags|=8192)):Tn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function x_(n,r){switch(du(r),r.tag){case 1:return Xn(r.type)&&il(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Bs(),qt(Wn),qt(En),Au(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return wu(r),null;case 13:if(qt(Kt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Fs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qt(Kt),null;case 4:return Bs(),null;case 10:return xu(r.type._context),null;case 22:case 23:return rh(),null;case 24:return null;default:return null}}var El=!1,An=!1,y_=typeof WeakSet=="function"?WeakSet:Set,He=null;function Vs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){tn(n,r,u)}else a.current=null}function ju(n,r,a){try{a()}catch(u){tn(n,r,u)}}var cm=!1;function S_(n,r){if(ru=Ga,n=Hd(),Zc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var E=0,F=-1,H=-1,te=0,_e=0,ye=n,ge=null;t:for(;;){for(var Ne;ye!==a||p!==0&&ye.nodeType!==3||(F=E+p),ye!==_||u!==0&&ye.nodeType!==3||(H=E+u),ye.nodeType===3&&(E+=ye.nodeValue.length),(Ne=ye.firstChild)!==null;)ge=ye,ye=Ne;for(;;){if(ye===n)break t;if(ge===a&&++te===p&&(F=E),ge===_&&++_e===u&&(H=E),(Ne=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ne}a=F===-1||H===-1?null:{start:F,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(su={focusedElem:n,selectionRange:a},Ga=!1,He=r;He!==null;)if(r=He,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,He=n;else for(;He!==null;){r=He;try{var We=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var Xe=We.memoizedProps,rn=We.memoizedState,q=r.stateNode,X=q.getSnapshotBeforeUpdate(r.elementType===r.type?Xe:xi(r.type,Xe),rn);q.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var Z=r.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){tn(r,r.return,we)}if(n=r.sibling,n!==null){n.return=r.return,He=n;break}He=r.return}return We=cm,cm=!1,We}function ia(n,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&ju(r,a,_)}p=p.next}while(p!==u)}}function wl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function Yu(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function um(n){var r=n.alternate;r!==null&&(n.alternate=null,um(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[bi],delete r[jo],delete r[cu],delete r[i_],delete r[r_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function hm(n){return n.tag===5||n.tag===3||n.tag===4}function fm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||hm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qu(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=tl));else if(u!==4&&(n=n.child,n!==null))for(qu(n,r,a),n=n.sibling;n!==null;)qu(n,r,a),n=n.sibling}function $u(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for($u(n,r,a),n=n.sibling;n!==null;)$u(n,r,a),n=n.sibling}var _n=null,yi=!1;function Er(n,r,a){for(a=a.child;a!==null;)dm(n,r,a),a=a.sibling}function dm(n,r,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount($e,a)}catch{}switch(a.tag){case 5:An||Vs(a,r);case 6:var u=_n,p=yi;_n=null,Er(n,r,a),_n=u,yi=p,_n!==null&&(yi?(n=_n,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):_n.removeChild(a.stateNode));break;case 18:_n!==null&&(yi?(n=_n,a=a.stateNode,n.nodeType===8?lu(n.parentNode,a):n.nodeType===1&&lu(n,a),Uo(n)):lu(_n,a.stateNode));break;case 4:u=_n,p=yi,_n=a.stateNode.containerInfo,yi=!0,Er(n,r,a),_n=u,yi=p;break;case 0:case 11:case 14:case 15:if(!An&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var _=p,E=_.destroy;_=_.tag,E!==void 0&&((_&2)!==0||(_&4)!==0)&&ju(a,r,E),p=p.next}while(p!==u)}Er(n,r,a);break;case 1:if(!An&&(Vs(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(F){tn(a,r,F)}Er(n,r,a);break;case 21:Er(n,r,a);break;case 22:a.mode&1?(An=(u=An)||a.memoizedState!==null,Er(n,r,a),An=u):Er(n,r,a);break;default:Er(n,r,a)}}function pm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new y_),r.forEach(function(u){var p=P_.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function Si(n,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var _=n,E=r,F=E;e:for(;F!==null;){switch(F.tag){case 5:_n=F.stateNode,yi=!1;break e;case 3:_n=F.stateNode.containerInfo,yi=!0;break e;case 4:_n=F.stateNode.containerInfo,yi=!0;break e}F=F.return}if(_n===null)throw Error(t(160));dm(_,E,p),_n=null,yi=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(te){tn(p,r,te)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)mm(r,n),r=r.sibling}function mm(n,r){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(r,n),Di(n),u&4){try{ia(3,n,n.return),wl(3,n)}catch(Xe){tn(n,n.return,Xe)}try{ia(5,n,n.return)}catch(Xe){tn(n,n.return,Xe)}}break;case 1:Si(r,n),Di(n),u&512&&a!==null&&Vs(a,a.return);break;case 5:if(Si(r,n),Di(n),u&512&&a!==null&&Vs(a,a.return),n.flags&32){var p=n.stateNode;try{dt(p,"")}catch(Xe){tn(n,n.return,Xe)}}if(u&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,E=a!==null?a.memoizedProps:_,F=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{F==="input"&&_.type==="radio"&&_.name!=null&&_t(p,_),at(F,E);var te=at(F,_);for(E=0;E<H.length;E+=2){var _e=H[E],ye=H[E+1];_e==="style"?nt(p,ye):_e==="dangerouslySetInnerHTML"?ze(p,ye):_e==="children"?dt(p,ye):C(p,_e,ye,te)}switch(F){case"input":mt(p,_);break;case"textarea":me(p,_);break;case"select":var ge=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ne=_.value;Ne!=null?D(p,!!_.multiple,Ne,!1):ge!==!!_.multiple&&(_.defaultValue!=null?D(p,!!_.multiple,_.defaultValue,!0):D(p,!!_.multiple,_.multiple?[]:"",!1))}p[jo]=_}catch(Xe){tn(n,n.return,Xe)}}break;case 6:if(Si(r,n),Di(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(Xe){tn(n,n.return,Xe)}}break;case 3:if(Si(r,n),Di(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Uo(r.containerInfo)}catch(Xe){tn(n,n.return,Xe)}break;case 4:Si(r,n),Di(n);break;case 13:Si(r,n),Di(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Ju=W())),u&4&&pm(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(An=(te=An)||_e,Si(r,n),An=te):Si(r,n),Di(n),u&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!_e&&(n.mode&1)!==0)for(He=n,_e=n.child;_e!==null;){for(ye=He=_e;He!==null;){switch(ge=He,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:ia(4,ge,ge.return);break;case 1:Vs(ge,ge.return);var We=ge.stateNode;if(typeof We.componentWillUnmount=="function"){u=ge,a=ge.return;try{r=u,We.props=r.memoizedProps,We.state=r.memoizedState,We.componentWillUnmount()}catch(Xe){tn(u,a,Xe)}}break;case 5:Vs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){_m(ye);continue}}Ne!==null?(Ne.return=ge,He=Ne):_m(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{p=ye.stateNode,te?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(F=ye.stateNode,H=ye.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=Je("display",E))}catch(Xe){tn(n,n.return,Xe)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=te?"":ye.memoizedProps}catch(Xe){tn(n,n.return,Xe)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Si(r,n),Di(n),u&4&&pm(n);break;case 21:break;default:Si(r,n),Di(n)}}function Di(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(hm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(dt(p,""),u.flags&=-33);var _=fm(n);$u(n,_,p);break;case 3:case 4:var E=u.stateNode.containerInfo,F=fm(n);qu(n,F,E);break;default:throw Error(t(161))}}catch(H){tn(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function M_(n,r,a){He=n,gm(n)}function gm(n,r,a){for(var u=(n.mode&1)!==0;He!==null;){var p=He,_=p.child;if(p.tag===22&&u){var E=p.memoizedState!==null||El;if(!E){var F=p.alternate,H=F!==null&&F.memoizedState!==null||An;F=El;var te=An;if(El=E,(An=H)&&!te)for(He=p;He!==null;)E=He,H=E.child,E.tag===22&&E.memoizedState!==null?xm(p):H!==null?(H.return=E,He=H):xm(p);for(;_!==null;)He=_,gm(_),_=_.sibling;He=p,El=F,An=te}vm(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,He=_):vm(n)}}function vm(n){for(;He!==null;){var r=He;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:An||wl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!An)if(a===null)u.componentDidMount();else{var p=r.elementType===r.type?a.memoizedProps:xi(r.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&_p(r,_,u);break;case 3:var E=r.updateQueue;if(E!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}_p(r,E,a)}break;case 5:var F=r.stateNode;if(a===null&&r.flags&4){a=F;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var te=r.alternate;if(te!==null){var _e=te.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&Uo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||r.flags&512&&Yu(r)}catch(ge){tn(r,r.return,ge)}}if(r===n){He=null;break}if(a=r.sibling,a!==null){a.return=r.return,He=a;break}He=r.return}}function _m(n){for(;He!==null;){var r=He;if(r===n){He=null;break}var a=r.sibling;if(a!==null){a.return=r.return,He=a;break}He=r.return}}function xm(n){for(;He!==null;){var r=He;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{wl(4,r)}catch(H){tn(r,a,H)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(H){tn(r,p,H)}}var _=r.return;try{Yu(r)}catch(H){tn(r,_,H)}break;case 5:var E=r.return;try{Yu(r)}catch(H){tn(r,E,H)}}}catch(H){tn(r,r.return,H)}if(r===n){He=null;break}var F=r.sibling;if(F!==null){F.return=r.return,He=F;break}He=r.return}}var E_=Math.ceil,Tl=T.ReactCurrentDispatcher,Zu=T.ReactCurrentOwner,hi=T.ReactCurrentBatchConfig,Rt=0,pn=null,on=null,xn=0,ni=0,Gs=_r(0),un=0,ra=null,Qr=0,Al=0,Ku=0,sa=null,Yn=null,Ju=0,Ws=1/0,qi=null,Cl=!1,Qu=null,wr=null,Rl=!1,Tr=null,bl=0,oa=0,eh=null,Pl=-1,Ll=0;function Fn(){return(Rt&6)!==0?W():Pl!==-1?Pl:Pl=W()}function Ar(n){return(n.mode&1)===0?1:(Rt&2)!==0&&xn!==0?xn&-xn:o_.transition!==null?(Ll===0&&(Ll=Nn()),Ll):(n=xt,n!==0||(n=window.event,n=n===void 0?16:Sd(n.type)),n)}function Mi(n,r,a,u){if(50<oa)throw oa=0,eh=null,Error(t(185));nn(n,a,u),((Rt&2)===0||n!==pn)&&(n===pn&&((Rt&2)===0&&(Al|=a),un===4&&Cr(n,xn)),qn(n,u),a===1&&Rt===0&&(r.mode&1)===0&&(Ws=W()+500,sl&&yr()))}function qn(n,r){var a=n.callbackNode;Wr(n,r);var u=gi(n,n===pn?xn:0);if(u===0)a!==null&&Y(a),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(a!=null&&Y(a),r===1)n.tag===0?s_(Sm.bind(null,n)):op(Sm.bind(null,n)),t_(function(){(Rt&6)===0&&yr()}),a=null;else{switch(dd(u)){case 1:a=be;break;case 4:a=Fe;break;case 16:a=Be;break;case 536870912:a=rt;break;default:a=Be}a=bm(a,ym.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function ym(n,r){if(Pl=-1,Ll=0,(Rt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Xs()&&n.callbackNode!==a)return null;var u=gi(n,n===pn?xn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Dl(n,u);else{r=u;var p=Rt;Rt|=2;var _=Em();(pn!==n||xn!==r)&&(qi=null,Ws=W()+500,ts(n,r));do try{A_();break}catch(F){Mm(n,F)}while(!0);_u(),Tl.current=_,Rt=p,on!==null?r=0:(pn=null,xn=0,r=un)}if(r!==0){if(r===2&&(p=zt(n),p!==0&&(u=p,r=th(n,p))),r===1)throw a=ra,ts(n,0),Cr(n,u),qn(n,W()),a;if(r===6)Cr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!w_(p)&&(r=Dl(n,u),r===2&&(_=zt(n),_!==0&&(u=_,r=th(n,_))),r===1))throw a=ra,ts(n,0),Cr(n,u),qn(n,W()),a;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:ns(n,Yn,qi);break;case 3:if(Cr(n,u),(u&130023424)===u&&(r=Ju+500-W(),10<r)){if(gi(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Fn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=au(ns.bind(null,n,Yn,qi),r);break}ns(n,Yn,qi);break;case 4:if(Cr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var E=31-Pt(u);_=1<<E,E=r[E],E>p&&(p=E),u&=~_}if(u=p,u=W()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*E_(u/1960))-u,10<u){n.timeoutHandle=au(ns.bind(null,n,Yn,qi),u);break}ns(n,Yn,qi);break;case 5:ns(n,Yn,qi);break;default:throw Error(t(329))}}}return qn(n,W()),n.callbackNode===a?ym.bind(null,n):null}function th(n,r){var a=sa;return n.current.memoizedState.isDehydrated&&(ts(n,r).flags|=256),n=Dl(n,r),n!==2&&(r=Yn,Yn=a,r!==null&&nh(r)),n}function nh(n){Yn===null?Yn=n:Yn.push.apply(Yn,n)}function w_(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],_=p.getSnapshot;p=p.value;try{if(!vi(_(),p))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Cr(n,r){for(r&=~Ku,r&=~Al,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Pt(r),u=1<<a;n[a]=-1,r&=~u}}function Sm(n){if((Rt&6)!==0)throw Error(t(327));Xs();var r=gi(n,0);if((r&1)===0)return qn(n,W()),null;var a=Dl(n,r);if(n.tag!==0&&a===2){var u=zt(n);u!==0&&(r=u,a=th(n,u))}if(a===1)throw a=ra,ts(n,0),Cr(n,r),qn(n,W()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ns(n,Yn,qi),qn(n,W()),null}function ih(n,r){var a=Rt;Rt|=1;try{return n(r)}finally{Rt=a,Rt===0&&(Ws=W()+500,sl&&yr())}}function es(n){Tr!==null&&Tr.tag===0&&(Rt&6)===0&&Xs();var r=Rt;Rt|=1;var a=hi.transition,u=xt;try{if(hi.transition=null,xt=1,n)return n()}finally{xt=u,hi.transition=a,Rt=r,(Rt&6)===0&&yr()}}function rh(){ni=Gs.current,qt(Gs)}function ts(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,e_(a)),on!==null)for(a=on.return;a!==null;){var u=a;switch(du(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&il();break;case 3:Bs(),qt(Wn),qt(En),Au();break;case 5:wu(u);break;case 4:Bs();break;case 13:qt(Kt);break;case 19:qt(Kt);break;case 10:xu(u.type._context);break;case 22:case 23:rh()}a=a.return}if(pn=n,on=n=Rr(n.current,null),xn=ni=r,un=0,ra=null,Ku=Al=Qr=0,Yn=sa=null,Zr!==null){for(r=0;r<Zr.length;r++)if(a=Zr[r],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,_=a.pending;if(_!==null){var E=_.next;_.next=p,u.next=E}a.pending=u}Zr=null}return n}function Mm(n,r){do{var a=on;try{if(_u(),ml.current=xl,gl){for(var u=Jt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}gl=!1}if(Jr=0,dn=cn=Jt=null,Jo=!1,Qo=0,Zu.current=null,a===null||a.return===null){un=1,ra=r,on=null;break}e:{var _=n,E=a.return,F=a,H=r;if(r=xn,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var te=H,_e=F,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ne=Yp(E);if(Ne!==null){Ne.flags&=-257,qp(Ne,E,F,_,r),Ne.mode&1&&jp(_,te,r),r=Ne,H=te;var We=r.updateQueue;if(We===null){var Xe=new Set;Xe.add(H),r.updateQueue=Xe}else We.add(H);break e}else{if((r&1)===0){jp(_,te,r),sh();break e}H=Error(t(426))}}else if(Zt&&F.mode&1){var rn=Yp(E);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),qp(rn,E,F,_,r),gu(Hs(H,F));break e}}_=H=Hs(H,F),un!==4&&(un=2),sa===null?sa=[_]:sa.push(_),_=E;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var q=Wp(_,H,r);vp(_,q);break e;case 1:F=H;var X=_.type,Z=_.stateNode;if((_.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(wr===null||!wr.has(Z)))){_.flags|=65536,r&=-r,_.lanes|=r;var we=Xp(_,F,r);vp(_,we);break e}}_=_.return}while(_!==null)}Tm(a)}catch(Ye){r=Ye,on===a&&a!==null&&(on=a=a.return);continue}break}while(!0)}function Em(){var n=Tl.current;return Tl.current=xl,n===null?xl:n}function sh(){(un===0||un===3||un===2)&&(un=4),pn===null||(Qr&268435455)===0&&(Al&268435455)===0||Cr(pn,xn)}function Dl(n,r){var a=Rt;Rt|=2;var u=Em();(pn!==n||xn!==r)&&(qi=null,ts(n,r));do try{T_();break}catch(p){Mm(n,p)}while(!0);if(_u(),Rt=a,Tl.current=u,on!==null)throw Error(t(261));return pn=null,xn=0,un}function T_(){for(;on!==null;)wm(on)}function A_(){for(;on!==null&&!ne();)wm(on)}function wm(n){var r=Rm(n.alternate,n,ni);n.memoizedProps=n.pendingProps,r===null?Tm(n):on=r,Zu.current=null}function Tm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=__(a,r,ni),a!==null){on=a;return}}else{if(a=x_(a,r),a!==null){a.flags&=32767,on=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,on=null;return}}if(r=r.sibling,r!==null){on=r;return}on=r=n}while(r!==null);un===0&&(un=5)}function ns(n,r,a){var u=xt,p=hi.transition;try{hi.transition=null,xt=1,C_(n,r,a,u)}finally{hi.transition=p,xt=u}return null}function C_(n,r,a,u){do Xs();while(Tr!==null);if((Rt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=a.lanes|a.childLanes;if(Mn(n,_),n===pn&&(on=pn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Rl||(Rl=!0,bm(Be,function(){return Xs(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=hi.transition,hi.transition=null;var E=xt;xt=1;var F=Rt;Rt|=4,Zu.current=null,S_(n,a),mm(a,n),Yv(su),Ga=!!ru,su=ru=null,n.current=a,M_(a),ie(),Rt=F,xt=E,hi.transition=_}else n.current=a;if(Rl&&(Rl=!1,Tr=n,bl=p),_=n.pendingLanes,_===0&&(wr=null),bt(a.stateNode),qn(n,W()),r!==null)for(u=n.onRecoverableError,a=0;a<r.length;a++)p=r[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(Cl)throw Cl=!1,n=Qu,Qu=null,n;return(bl&1)!==0&&n.tag!==0&&Xs(),_=n.pendingLanes,(_&1)!==0?n===eh?oa++:(oa=0,eh=n):oa=0,yr(),null}function Xs(){if(Tr!==null){var n=dd(bl),r=hi.transition,a=xt;try{if(hi.transition=null,xt=16>n?16:n,Tr===null)var u=!1;else{if(n=Tr,Tr=null,bl=0,(Rt&6)!==0)throw Error(t(331));var p=Rt;for(Rt|=4,He=n.current;He!==null;){var _=He,E=_.child;if((He.flags&16)!==0){var F=_.deletions;if(F!==null){for(var H=0;H<F.length;H++){var te=F[H];for(He=te;He!==null;){var _e=He;switch(_e.tag){case 0:case 11:case 15:ia(8,_e,_)}var ye=_e.child;if(ye!==null)ye.return=_e,He=ye;else for(;He!==null;){_e=He;var ge=_e.sibling,Ne=_e.return;if(um(_e),_e===te){He=null;break}if(ge!==null){ge.return=Ne,He=ge;break}He=Ne}}}var We=_.alternate;if(We!==null){var Xe=We.child;if(Xe!==null){We.child=null;do{var rn=Xe.sibling;Xe.sibling=null,Xe=rn}while(Xe!==null)}}He=_}}if((_.subtreeFlags&2064)!==0&&E!==null)E.return=_,He=E;else e:for(;He!==null;){if(_=He,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:ia(9,_,_.return)}var q=_.sibling;if(q!==null){q.return=_.return,He=q;break e}He=_.return}}var X=n.current;for(He=X;He!==null;){E=He;var Z=E.child;if((E.subtreeFlags&2064)!==0&&Z!==null)Z.return=E,He=Z;else e:for(E=X;He!==null;){if(F=He,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:wl(9,F)}}catch(Ye){tn(F,F.return,Ye)}if(F===E){He=null;break e}var we=F.sibling;if(we!==null){we.return=F.return,He=we;break e}He=F.return}}if(Rt=p,yr(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot($e,n)}catch{}u=!0}return u}finally{xt=a,hi.transition=r}}return!1}function Am(n,r,a){r=Hs(a,r),r=Wp(n,r,1),n=Mr(n,r,1),r=Fn(),n!==null&&(nn(n,1,r),qn(n,r))}function tn(n,r,a){if(n.tag===3)Am(n,n,a);else for(;r!==null;){if(r.tag===3){Am(r,n,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(wr===null||!wr.has(u))){n=Hs(a,n),n=Xp(r,n,1),r=Mr(r,n,1),n=Fn(),r!==null&&(nn(r,1,n),qn(r,n));break}}r=r.return}}function R_(n,r,a){var u=n.pingCache;u!==null&&u.delete(r),r=Fn(),n.pingedLanes|=n.suspendedLanes&a,pn===n&&(xn&a)===a&&(un===4||un===3&&(xn&130023424)===xn&&500>W()-Ju?ts(n,0):Ku|=a),qn(n,r)}function Cm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Et,Et<<=1,(Et&130023424)===0&&(Et=4194304)));var a=Fn();n=Xi(n,r),n!==null&&(nn(n,r,a),qn(n,a))}function b_(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Cm(n,a)}function P_(n,r){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Cm(n,a)}var Rm;Rm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wn.current)jn=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return jn=!1,v_(n,r,a);jn=(n.flags&131072)!==0}else jn=!1,Zt&&(r.flags&1048576)!==0&&ap(r,al,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Ml(n,r),n=r.pendingProps;var p=Is(r,En.current);zs(r,a),p=bu(null,r,u,n,p,a);var _=Pu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Xn(u)?(_=!0,rl(r)):_=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Mu(r),p.updater=yl,r.stateNode=p,p._reactInternals=r,Fu(r,u,n,a),r=Bu(null,r,u,!0,_,a)):(r.tag=0,Zt&&_&&fu(r),Un(null,r,p,a),r=r.child),r;case 16:u=r.elementType;e:{switch(Ml(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=D_(u),n=xi(u,n),p){case 0:r=zu(null,r,u,n,a);break e;case 1:r=em(null,r,u,n,a);break e;case 11:r=$p(null,r,u,n,a);break e;case 14:r=Zp(null,r,u,xi(u.type,n),a);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:xi(u,p),zu(n,r,u,p,a);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:xi(u,p),em(n,r,u,p,a);case 3:e:{if(tm(r),n===null)throw Error(t(387));u=r.pendingProps,_=r.memoizedState,p=_.element,gp(n,r),dl(r,u,null,a);var E=r.memoizedState;if(u=E.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){p=Hs(Error(t(423)),r),r=nm(n,r,u,a,p);break e}else if(u!==p){p=Hs(Error(t(424)),r),r=nm(n,r,u,a,p);break e}else for(ti=vr(r.stateNode.containerInfo.firstChild),ei=r,Zt=!0,_i=null,a=pp(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),u===p){r=Yi(n,r,a);break e}Un(n,r,u,a)}r=r.child}return r;case 5:return xp(r),n===null&&mu(r),u=r.type,p=r.pendingProps,_=n!==null?n.memoizedProps:null,E=p.children,ou(u,p)?E=null:_!==null&&ou(u,_)&&(r.flags|=32),Qp(n,r),Un(n,r,E,a),r.child;case 6:return n===null&&mu(r),null;case 13:return im(n,r,a);case 4:return Eu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Os(r,null,u,a):Un(n,r,u,a),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:xi(u,p),$p(n,r,u,p,a);case 7:return Un(n,r,r.pendingProps,a),r.child;case 8:return Un(n,r,r.pendingProps.children,a),r.child;case 12:return Un(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,_=r.memoizedProps,E=p.value,Xt(ul,u._currentValue),u._currentValue=E,_!==null)if(vi(_.value,E)){if(_.children===p.children&&!Wn.current){r=Yi(n,r,a);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var F=_.dependencies;if(F!==null){E=_.child;for(var H=F.firstContext;H!==null;){if(H.context===u){if(_.tag===1){H=ji(-1,a&-a),H.tag=2;var te=_.updateQueue;if(te!==null){te=te.shared;var _e=te.pending;_e===null?H.next=H:(H.next=_e.next,_e.next=H),te.pending=H}}_.lanes|=a,H=_.alternate,H!==null&&(H.lanes|=a),yu(_.return,a,r),F.lanes|=a;break}H=H.next}}else if(_.tag===10)E=_.type===r.type?null:_.child;else if(_.tag===18){if(E=_.return,E===null)throw Error(t(341));E.lanes|=a,F=E.alternate,F!==null&&(F.lanes|=a),yu(E,a,r),E=_.sibling}else E=_.child;if(E!==null)E.return=_;else for(E=_;E!==null;){if(E===r){E=null;break}if(_=E.sibling,_!==null){_.return=E.return,E=_;break}E=E.return}_=E}Un(n,r,p.children,a),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,zs(r,a),p=ci(p),u=u(p),r.flags|=1,Un(n,r,u,a),r.child;case 14:return u=r.type,p=xi(u,r.pendingProps),p=xi(u.type,p),Zp(n,r,u,p,a);case 15:return Kp(n,r,r.type,r.pendingProps,a);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:xi(u,p),Ml(n,r),r.tag=1,Xn(u)?(n=!0,rl(r)):n=!1,zs(r,a),Vp(r,u,p),Fu(r,u,p,a),Bu(null,r,u,!0,n,a);case 19:return sm(n,r,a);case 22:return Jp(n,r,a)}throw Error(t(156,r.tag))};function bm(n,r){return b(n,r)}function L_(n,r,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(n,r,a,u){return new L_(n,r,a,u)}function oh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function D_(n){if(typeof n=="function")return oh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===he)return 14}return 2}function Rr(n,r){var a=n.alternate;return a===null?(a=fi(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Il(n,r,a,u,p,_){var E=2;if(u=n,typeof n=="function")oh(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return is(a.children,p,_,r);case z:E=8,p|=8;break;case P:return n=fi(12,a,r,p|2),n.elementType=P,n.lanes=_,n;case K:return n=fi(13,a,r,p),n.elementType=K,n.lanes=_,n;case le:return n=fi(19,a,r,p),n.elementType=le,n.lanes=_,n;case ue:return Nl(a,p,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:E=10;break e;case B:E=9;break e;case ee:E=11;break e;case he:E=14;break e;case ae:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=fi(E,a,r,p),r.elementType=n,r.type=u,r.lanes=_,r}function is(n,r,a,u){return n=fi(7,n,u,r),n.lanes=a,n}function Nl(n,r,a,u){return n=fi(22,n,u,r),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function ah(n,r,a){return n=fi(6,n,null,r),n.lanes=a,n}function lh(n,r,a){return r=fi(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function I_(n,r,a,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sn(0),this.expirationTimes=Sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function ch(n,r,a,u,p,_,E,F,H){return n=new I_(n,r,a,F,H),r===1?(r=1,_===!0&&(r|=8)):r=0,_=fi(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(_),n}function N_(n,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:r,implementation:a}}function Pm(n){if(!n)return xr;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Xn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Xn(a))return rp(n,a,r)}return r}function Lm(n,r,a,u,p,_,E,F,H){return n=ch(a,u,!0,n,p,_,E,F,H),n.context=Pm(null),a=n.current,u=Fn(),p=Ar(a),_=ji(u,p),_.callback=r??null,Mr(a,_,p),n.current.lanes=p,nn(n,p,u),qn(n,u),n}function Ul(n,r,a,u){var p=r.current,_=Fn(),E=Ar(p);return a=Pm(a),r.context===null?r.context=a:r.pendingContext=a,r=ji(_,E),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Mr(p,r,E),n!==null&&(Mi(n,p,E,_),fl(n,p,E)),E}function Fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Dm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function uh(n,r){Dm(n,r),(n=n.alternate)&&Dm(n,r)}function U_(){return null}var Im=typeof reportError=="function"?reportError:function(n){console.error(n)};function hh(n){this._internalRoot=n}Ol.prototype.render=hh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ul(n,r,null,null)},Ol.prototype.unmount=hh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;es(function(){Ul(null,n,null,null)}),r[Hi]=null}};function Ol(n){this._internalRoot=n}Ol.prototype.unstable_scheduleHydration=function(n){if(n){var r=gd();n={blockedOn:null,target:n,priority:r};for(var a=0;a<pr.length&&r!==0&&r<pr[a].priority;a++);pr.splice(a,0,n),a===0&&xd(n)}};function fh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function kl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function F_(n,r,a,u,p){if(p){if(typeof u=="function"){var _=u;u=function(){var te=Fl(E);_.call(te)}}var E=Lm(r,u,n,0,null,!1,!1,"",Nm);return n._reactRootContainer=E,n[Hi]=E.current,Wo(n.nodeType===8?n.parentNode:n),es(),E}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var F=u;u=function(){var te=Fl(H);F.call(te)}}var H=ch(n,0,!1,null,null,!1,!1,"",Nm);return n._reactRootContainer=H,n[Hi]=H.current,Wo(n.nodeType===8?n.parentNode:n),es(function(){Ul(r,H,a,u)}),H}function zl(n,r,a,u,p){var _=a._reactRootContainer;if(_){var E=_;if(typeof p=="function"){var F=p;p=function(){var H=Fl(E);F.call(H)}}Ul(r,E,n,p)}else E=F_(a,r,n,p,u);return Fl(E)}pd=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=vn(r.pendingLanes);a!==0&&(Xr(r,a|1),qn(r,W()),(Rt&6)===0&&(Ws=W()+500,yr()))}break;case 13:es(function(){var u=Xi(n,1);if(u!==null){var p=Fn();Mi(u,n,1,p)}}),uh(n,1)}},Oc=function(n){if(n.tag===13){var r=Xi(n,134217728);if(r!==null){var a=Fn();Mi(r,n,134217728,a)}uh(n,134217728)}},md=function(n){if(n.tag===13){var r=Ar(n),a=Xi(n,r);if(a!==null){var u=Fn();Mi(a,n,r,u)}uh(n,r)}},gd=function(){return xt},vd=function(n,r){var a=xt;try{return xt=n,r()}finally{xt=a}},Re=function(n,r,a){switch(r){case"input":if(mt(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==n&&u.form===n.form){var p=nl(u);if(!p)throw Error(t(90));yt(u),mt(u,p)}}}break;case"textarea":me(n,a);break;case"select":r=a.value,r!=null&&D(n,!!a.multiple,r,!1)}},jt=ih,ln=es;var O_={usingClientEntryPoint:!1,Events:[Yo,Ls,nl,Le,lt,ih]},aa={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k_={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=za(n),n===null?null:n.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||U_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{$e=Bl.inject(k_),ct=Bl}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O_,$n.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fh(r))throw Error(t(200));return N_(n,r,null,a)},$n.createRoot=function(n,r){if(!fh(n))throw Error(t(299));var a=!1,u="",p=Im;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=ch(n,1,!1,null,null,a,!1,u,p),n[Hi]=r.current,Wo(n.nodeType===8?n.parentNode:n),new hh(r)},$n.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=za(r),n=n===null?null:n.stateNode,n},$n.flushSync=function(n){return es(n)},$n.hydrate=function(n,r,a){if(!kl(r))throw Error(t(200));return zl(null,n,r,!0,a)},$n.hydrateRoot=function(n,r,a){if(!fh(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,_="",E=Im;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),r=Lm(r,null,n,1,a??null,p,!1,_,E),n[Hi]=r.current,Wo(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,p]:r.mutableSourceEagerHydrationData.push(a,p);return new Ol(r)},$n.render=function(n,r,a){if(!kl(r))throw Error(t(200));return zl(null,n,r,!1,a)},$n.unmountComponentAtNode=function(n){if(!kl(n))throw Error(t(40));return n._reactRootContainer?(es(function(){zl(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1},$n.unstable_batchedUpdates=ih,$n.unstable_renderSubtreeIntoContainer=function(n,r,a,u){if(!kl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return zl(n,r,a,!1,u)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var Vm;function q_(){if(Vm)return mh.exports;Vm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),mh.exports=Y_(),mh.exports}var Gm;function $_(){if(Gm)return Hl;Gm=1;var s=q_();return Hl.createRoot=s.createRoot,Hl.hydrateRoot=s.hydrateRoot,Hl}var Z_=$_();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ag=(...s)=>s.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=It.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:c,...h},f)=>It.createElement("svg",{ref:f,...J_,width:e,height:e,stroke:s,strokeWidth:i?Number(t)*24/Number(e):t,className:ag("lucide",o),...h},[...c.map(([d,m])=>It.createElement(d,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=(s,e)=>{const t=It.forwardRef(({className:i,...o},l)=>It.createElement(Q_,{ref:l,iconNode:e,className:ag(`lucide-${K_(s)}`,i),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=Jn("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=Jn("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=Jn("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=Jn("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=Jn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=Jn("Feather",[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=Jn("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=Jn("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=Jn("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=Jn("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=Jn("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=Jn("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=Jn("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=Jn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="171",ax=0,Xm=1,lx=2,dg=1,pg=2,er=3,Hr=0,Hn=1,Kn=2,kr=0,go=1,jm=2,Ym=3,qm=4,cx=5,fs=100,ux=101,hx=102,fx=103,dx=104,px=200,mx=201,gx=202,vx=203,nf=204,rf=205,_x=206,xx=207,yx=208,Sx=209,Mx=210,Ex=211,wx=212,Tx=213,Ax=214,sf=0,of=1,af=2,yo=3,lf=4,cf=5,uf=6,hf=7,mg=0,Cx=1,Rx=2,zr=0,bx=1,Px=2,Lx=3,gg=4,Dx=5,Ix=6,Nx=7,vg=300,So=301,Mo=302,ff=303,df=304,Dc=306,Aa=1e3,ps=1001,pf=1002,si=1003,Ux=1004,Vl=1005,Ni=1006,_h=1007,ms=1008,ar=1009,_g=1010,xg=1011,Ca=1012,Kf=1013,gs=1014,Ui=1015,Da=1016,Jf=1017,Qf=1018,Eo=1020,yg=35902,Sg=1021,Mg=1022,Ci=1023,Eg=1024,wg=1025,vo=1026,wo=1027,ed=1028,td=1029,Tg=1030,nd=1031,id=1033,xc=33776,yc=33777,Sc=33778,Mc=33779,mf=35840,gf=35841,vf=35842,_f=35843,xf=36196,yf=37492,Sf=37496,Mf=37808,Ef=37809,wf=37810,Tf=37811,Af=37812,Cf=37813,Rf=37814,bf=37815,Pf=37816,Lf=37817,Df=37818,If=37819,Nf=37820,Uf=37821,Ec=36492,Ff=36494,Of=36495,Ag=36283,kf=36284,zf=36285,Bf=36286,Fx=3200,Ox=3201,Cg=0,kx=1,Fr="",zn="srgb",To="srgb-linear",Cc="linear",Bt="srgb",js=7680,$m=519,zx=512,Bx=513,Hx=514,Rg=515,Vx=516,Gx=517,Wx=518,Xx=519,Hf=35044,Zm="300 es",ir=2e3,Rc=2001;class Ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Km=1234567;const Sa=Math.PI/180,Ao=180/Math.PI;function Fi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function pt(s,e,t){return Math.max(e,Math.min(t,s))}function rd(s,e){return(s%e+e)%e}function jx(s,e,t,i,o){return i+(s-e)*(o-i)/(t-e)}function Yx(s,e,t){return s!==e?(t-s)/(e-s):0}function Ma(s,e,t){return(1-t)*s+t*e}function qx(s,e,t,i){return Ma(s,e,1-Math.exp(-t*i))}function $x(s,e=1){return e-Math.abs(rd(s,e*2)-e)}function Zx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Kx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Jx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Qx(s,e){return s+Math.random()*(e-s)}function ey(s){return s*(.5-Math.random())}function ty(s){s!==void 0&&(Km=s);let e=Km+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ny(s){return s*Sa}function iy(s){return s*Ao}function ry(s){return(s&s-1)===0&&s!==0}function sy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function oy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ay(s,e,t,i,o){const l=Math.cos,c=Math.sin,h=l(t/2),f=c(t/2),d=l((e+i)/2),m=c((e+i)/2),g=l((e-i)/2),v=c((e-i)/2),x=l((i-e)/2),M=c((i-e)/2);switch(o){case"XYX":s.set(h*m,f*g,f*v,h*d);break;case"YZY":s.set(f*v,h*m,f*g,h*d);break;case"ZXZ":s.set(f*g,f*v,h*m,h*d);break;case"XZX":s.set(h*m,f*M,f*x,h*d);break;case"YXY":s.set(f*x,h*m,f*M,h*d);break;case"ZYZ":s.set(f*M,f*x,h*m,h*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ai(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const wc={DEG2RAD:Sa,RAD2DEG:Ao,generateUUID:Fi,clamp:pt,euclideanModulo:rd,mapLinear:jx,inverseLerp:Yx,lerp:Ma,damp:qx,pingpong:$x,smoothstep:Zx,smootherstep:Kx,randInt:Jx,randFloat:Qx,randFloatSpread:ey,seededRandom:ty,degToRad:ny,radToDeg:iy,isPowerOfTwo:ry,ceilPowerOfTwo:sy,floorPowerOfTwo:oy,setQuaternionFromProperEuler:ay,normalize:Ot,denormalize:Ai};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*o+e.x,this.y=l*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,i,o,l,c,h,f,d){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,l,c,h,f,d)}set(e,t,i,o,l,c,h,f,d){const m=this.elements;return m[0]=e,m[1]=o,m[2]=h,m[3]=t,m[4]=l,m[5]=f,m[6]=i,m[7]=c,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,l=this.elements,c=i[0],h=i[3],f=i[6],d=i[1],m=i[4],g=i[7],v=i[2],x=i[5],M=i[8],w=o[0],S=o[3],y=o[6],L=o[1],C=o[4],T=o[7],N=o[2],I=o[5],O=o[8];return l[0]=c*w+h*L+f*N,l[3]=c*S+h*C+f*I,l[6]=c*y+h*T+f*O,l[1]=d*w+m*L+g*N,l[4]=d*S+m*C+g*I,l[7]=d*y+m*T+g*O,l[2]=v*w+x*L+M*N,l[5]=v*S+x*C+M*I,l[8]=v*y+x*T+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],h=e[5],f=e[6],d=e[7],m=e[8];return t*c*m-t*h*d-i*l*m+i*h*f+o*l*d-o*c*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],h=e[5],f=e[6],d=e[7],m=e[8],g=m*c-h*d,v=h*f-m*l,x=d*l-c*f,M=t*g+i*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=g*w,e[1]=(o*d-m*i)*w,e[2]=(h*i-o*c)*w,e[3]=v*w,e[4]=(m*t-o*f)*w,e[5]=(o*l-h*t)*w,e[6]=x*w,e[7]=(i*f-d*t)*w,e[8]=(c*t-i*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,l,c,h){const f=Math.cos(l),d=Math.sin(l);return this.set(i*f,i*d,-i*(f*c+d*h)+c+e,-o*d,o*f,-o*(-d*c+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(xh.makeScale(e,t)),this}rotate(e){return this.premultiply(xh.makeRotation(-e)),this}translate(e,t){return this.premultiply(xh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xh=new ht;function bg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ly(){const s=bc("canvas");return s.style.display="block",s}const Jm={};function fo(s){s in Jm||(Jm[s]=!0,console.warn(s))}function cy(s,e,t){return new Promise(function(i,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}function uy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hy(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),e0=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fy(){const s={enabled:!0,workingColorSpace:To,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Bt&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Bt&&(o.r=_o(o.r),o.g=_o(o.g),o.b=_o(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Fr?Cc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[To]:{primaries:e,whitePoint:i,transfer:Cc,toXYZ:Qm,fromXYZ:e0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:i,transfer:Bt,toXYZ:Qm,fromXYZ:e0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),s}const Dt=fy();function or(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _o(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ys;class dy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ys===void 0&&(Ys=bc("canvas")),Ys.width=e.width,Ys.height=e.height;const i=Ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=or(l[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(or(t[i]/255)*255):t[i]=or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let py=0;class Pg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?l.push(yh(o[c].image)):l.push(yh(o[c]))}else l=yh(o);i.url=l}return t||(e.images[this.uuid]=i),i}}function yh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let my=0;class bn extends Ro{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,i=ps,o=ps,l=Ni,c=ms,h=Ci,f=ar,d=bn.DEFAULT_ANISOTROPY,m=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Fi(),this.name="",this.source=new Pg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=f,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case ps:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case ps:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=vg;bn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,o=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,l;const f=e.elements,d=f[0],m=f[4],g=f[8],v=f[1],x=f[5],M=f[9],w=f[2],S=f[6],y=f[10];if(Math.abs(m-v)<.01&&Math.abs(g-w)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+w)<.1&&Math.abs(M+S)<.1&&Math.abs(d+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,T=(x+1)/2,N=(y+1)/2,I=(m+v)/4,O=(g+w)/4,z=(M+S)/4;return C>T&&C>N?C<.01?(i=0,o=.707106781,l=.707106781):(i=Math.sqrt(C),o=I/i,l=O/i):T>N?T<.01?(i=.707106781,o=0,l=.707106781):(o=Math.sqrt(T),i=I/o,l=z/o):N<.01?(i=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),i=O/l,o=z/l),this.set(i,o,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(g-w)*(g-w)+(v-m)*(v-m));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-w)/L,this.z=(v-m)/L,this.w=Math.acos((d+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gy extends Ro{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const l=new bn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let h=0;h<c;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends gy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lg extends bn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=si,this.minFilter=si,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vy extends bn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=si,this.minFilter=si,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,l,c,h){let f=i[o+0],d=i[o+1],m=i[o+2],g=i[o+3];const v=l[c+0],x=l[c+1],M=l[c+2],w=l[c+3];if(h===0){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(h===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=w;return}if(g!==w||f!==v||d!==x||m!==M){let S=1-h;const y=f*v+d*x+m*M+g*w,L=y>=0?1:-1,C=1-y*y;if(C>Number.EPSILON){const N=Math.sqrt(C),I=Math.atan2(N,y*L);S=Math.sin(S*I)/N,h=Math.sin(h*I)/N}const T=h*L;if(f=f*S+v*T,d=d*S+x*T,m=m*S+M*T,g=g*S+w*T,S===1-h){const N=1/Math.sqrt(f*f+d*d+m*m+g*g);f*=N,d*=N,m*=N,g*=N}}e[t]=f,e[t+1]=d,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,o,l,c){const h=i[o],f=i[o+1],d=i[o+2],m=i[o+3],g=l[c],v=l[c+1],x=l[c+2],M=l[c+3];return e[t]=h*M+m*g+f*x-d*v,e[t+1]=f*M+m*v+d*g-h*x,e[t+2]=d*M+m*x+h*v-f*g,e[t+3]=m*M-h*g-f*v-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,l=e._z,c=e._order,h=Math.cos,f=Math.sin,d=h(i/2),m=h(o/2),g=h(l/2),v=f(i/2),x=f(o/2),M=f(l/2);switch(c){case"XYZ":this._x=v*m*g+d*x*M,this._y=d*x*g-v*m*M,this._z=d*m*M+v*x*g,this._w=d*m*g-v*x*M;break;case"YXZ":this._x=v*m*g+d*x*M,this._y=d*x*g-v*m*M,this._z=d*m*M-v*x*g,this._w=d*m*g+v*x*M;break;case"ZXY":this._x=v*m*g-d*x*M,this._y=d*x*g+v*m*M,this._z=d*m*M+v*x*g,this._w=d*m*g-v*x*M;break;case"ZYX":this._x=v*m*g-d*x*M,this._y=d*x*g+v*m*M,this._z=d*m*M-v*x*g,this._w=d*m*g+v*x*M;break;case"YZX":this._x=v*m*g+d*x*M,this._y=d*x*g+v*m*M,this._z=d*m*M-v*x*g,this._w=d*m*g-v*x*M;break;case"XZY":this._x=v*m*g-d*x*M,this._y=d*x*g-v*m*M,this._z=d*m*M+v*x*g,this._w=d*m*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],l=t[8],c=t[1],h=t[5],f=t[9],d=t[2],m=t[6],g=t[10],v=i+h+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-f)*x,this._y=(l-d)*x,this._z=(c-o)*x}else if(i>h&&i>g){const x=2*Math.sqrt(1+i-h-g);this._w=(m-f)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(l+d)/x}else if(h>g){const x=2*Math.sqrt(1+h-i-g);this._w=(l-d)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(f+m)/x}else{const x=2*Math.sqrt(1+g-i-h);this._w=(c-o)/x,this._x=(l+d)/x,this._y=(f+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,l=e._z,c=e._w,h=t._x,f=t._y,d=t._z,m=t._w;return this._x=i*m+c*h+o*d-l*f,this._y=o*m+c*f+l*h-i*d,this._z=l*m+c*d+i*f-o*h,this._w=c*m-i*h-o*f-l*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,l=this._z,c=this._w;let h=c*e._w+i*e._x+o*e._y+l*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=c,this._x=i,this._y=o,this._z=l,this;const f=1-h*h;if(f<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*i+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const d=Math.sqrt(f),m=Math.atan2(d,h),g=Math.sin((1-t)*m)/d,v=Math.sin(t*m)/d;return this._w=c*g+this._w*v,this._x=i*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(t0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(t0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*o,this.y=l[1]*t+l[4]*i+l[7]*o,this.z=l[2]*t+l[5]*i+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,l=e.x,c=e.y,h=e.z,f=e.w,d=2*(c*o-h*i),m=2*(h*t-l*o),g=2*(l*i-c*t);return this.x=t+f*d+c*g-h*m,this.y=i+f*m+h*d-l*g,this.z=o+f*g+l*m-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*o,this.y=l[1]*t+l[5]*i+l[9]*o,this.z=l[2]*t+l[6]*i+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,l=e.z,c=t.x,h=t.y,f=t.z;return this.x=o*f-l*h,this.y=l*c-i*f,this.z=i*h-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sh=new U,t0=new Vn;class xs{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=l.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,Ei):Ei.fromBufferAttribute(l,c),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gl.copy(i.boundingBox)),Gl.applyMatrix4(e.matrixWorld),this.union(Gl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),Wl.subVectors(this.max,ca),qs.subVectors(e.a,ca),$s.subVectors(e.b,ca),Zs.subVectors(e.c,ca),Pr.subVectors($s,qs),Lr.subVectors(Zs,$s),rs.subVectors(qs,Zs);let t=[0,-Pr.z,Pr.y,0,-Lr.z,Lr.y,0,-rs.z,rs.y,Pr.z,0,-Pr.x,Lr.z,0,-Lr.x,rs.z,0,-rs.x,-Pr.y,Pr.x,0,-Lr.y,Lr.x,0,-rs.y,rs.x,0];return!Mh(t,qs,$s,Zs,Wl)||(t=[1,0,0,0,1,0,0,0,1],!Mh(t,qs,$s,Zs,Wl))?!1:(Xl.crossVectors(Pr,Lr),t=[Xl.x,Xl.y,Xl.z],Mh(t,qs,$s,Zs,Wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new U,new U,new U,new U,new U,new U,new U,new U],Ei=new U,Gl=new xs,qs=new U,$s=new U,Zs=new U,Pr=new U,Lr=new U,rs=new U,ca=new U,Wl=new U,Xl=new U,ss=new U;function Mh(s,e,t,i,o){for(let l=0,c=s.length-3;l<=c;l+=3){ss.fromArray(s,l);const h=o.x*Math.abs(ss.x)+o.y*Math.abs(ss.y)+o.z*Math.abs(ss.z),f=e.dot(ss),d=t.dot(ss),m=i.dot(ss);if(Math.max(-Math.max(f,d,m),Math.min(f,d,m))>h)return!1}return!0}const _y=new xs,ua=new U,Eh=new U;class bo{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_y.setFromPoints(e).getCenter(i);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const t=ua.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(ua,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(Eh)),this.expandByPoint(ua.copy(e.center).sub(Eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new U,wh=new U,jl=new U,Dr=new U,Th=new U,Yl=new U,Ah=new U;class Dg{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){wh.copy(e).add(t).multiplyScalar(.5),jl.copy(t).sub(e).normalize(),Dr.copy(this.origin).sub(wh);const l=e.distanceTo(t)*.5,c=-this.direction.dot(jl),h=Dr.dot(this.direction),f=-Dr.dot(jl),d=Dr.lengthSq(),m=Math.abs(1-c*c);let g,v,x,M;if(m>0)if(g=c*f-h,v=c*h-f,M=l*m,g>=0)if(v>=-M)if(v<=M){const w=1/m;g*=w,v*=w,x=g*(g+c*v+2*h)+v*(c*g+v+2*f)+d}else v=l,g=Math.max(0,-(c*v+h)),x=-g*g+v*(v+2*f)+d;else v=-l,g=Math.max(0,-(c*v+h)),x=-g*g+v*(v+2*f)+d;else v<=-M?(g=Math.max(0,-(-c*l+h)),v=g>0?-l:Math.min(Math.max(-l,-f),l),x=-g*g+v*(v+2*f)+d):v<=M?(g=0,v=Math.min(Math.max(-l,-f),l),x=v*(v+2*f)+d):(g=Math.max(0,-(c*l+h)),v=g>0?l:Math.min(Math.max(-l,-f),l),x=-g*g+v*(v+2*f)+d);else v=c>0?-l:l,g=Math.max(0,-(c*v+h)),x=-g*g+v*(v+2*f)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(wh).addScaledVector(jl,v),x}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const i=Zi.dot(this.direction),o=Zi.dot(Zi)-i*i,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),h=i-c,f=i+c;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,l,c,h,f;const d=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(i=(e.min.x-v.x)*d,o=(e.max.x-v.x)*d):(i=(e.max.x-v.x)*d,o=(e.min.x-v.x)*d),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),i>c||l>o||((l>i||isNaN(i))&&(i=l),(c<o||isNaN(o))&&(o=c),g>=0?(h=(e.min.z-v.z)*g,f=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,f=(e.min.z-v.z)*g),i>f||h>o)||((h>i||i!==i)&&(i=h),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,i,o,l){Th.subVectors(t,e),Yl.subVectors(i,e),Ah.crossVectors(Th,Yl);let c=this.direction.dot(Ah),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;Dr.subVectors(this.origin,e);const f=h*this.direction.dot(Yl.crossVectors(Dr,Yl));if(f<0)return null;const d=h*this.direction.dot(Th.cross(Dr));if(d<0||f+d>c)return null;const m=-h*Dr.dot(Ah);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,o,l,c,h,f,d,m,g,v,x,M,w,S){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,l,c,h,f,d,m,g,v,x,M,w,S)}set(e,t,i,o,l,c,h,f,d,m,g,v,x,M,w,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=o,y[1]=l,y[5]=c,y[9]=h,y[13]=f,y[2]=d,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=M,y[11]=w,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Ks.setFromMatrixColumn(e,0).length(),l=1/Ks.setFromMatrixColumn(e,1).length(),c=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,l=e.z,c=Math.cos(i),h=Math.sin(i),f=Math.cos(o),d=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=c*m,x=c*g,M=h*m,w=h*g;t[0]=f*m,t[4]=-f*g,t[8]=d,t[1]=x+M*d,t[5]=v-w*d,t[9]=-h*f,t[2]=w-v*d,t[6]=M+x*d,t[10]=c*f}else if(e.order==="YXZ"){const v=f*m,x=f*g,M=d*m,w=d*g;t[0]=v+w*h,t[4]=M*h-x,t[8]=c*d,t[1]=c*g,t[5]=c*m,t[9]=-h,t[2]=x*h-M,t[6]=w+v*h,t[10]=c*f}else if(e.order==="ZXY"){const v=f*m,x=f*g,M=d*m,w=d*g;t[0]=v-w*h,t[4]=-c*g,t[8]=M+x*h,t[1]=x+M*h,t[5]=c*m,t[9]=w-v*h,t[2]=-c*d,t[6]=h,t[10]=c*f}else if(e.order==="ZYX"){const v=c*m,x=c*g,M=h*m,w=h*g;t[0]=f*m,t[4]=M*d-x,t[8]=v*d+w,t[1]=f*g,t[5]=w*d+v,t[9]=x*d-M,t[2]=-d,t[6]=h*f,t[10]=c*f}else if(e.order==="YZX"){const v=c*f,x=c*d,M=h*f,w=h*d;t[0]=f*m,t[4]=w-v*g,t[8]=M*g+x,t[1]=g,t[5]=c*m,t[9]=-h*m,t[2]=-d*m,t[6]=x*g+M,t[10]=v-w*g}else if(e.order==="XZY"){const v=c*f,x=c*d,M=h*f,w=h*d;t[0]=f*m,t[4]=-g,t[8]=d*m,t[1]=v*g+w,t[5]=c*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=h*m,t[10]=w*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xy,e,yy)}lookAt(e,t,i){const o=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ir.crossVectors(i,ii),Ir.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ir.crossVectors(i,ii)),Ir.normalize(),ql.crossVectors(ii,Ir),o[0]=Ir.x,o[4]=ql.x,o[8]=ii.x,o[1]=Ir.y,o[5]=ql.y,o[9]=ii.y,o[2]=Ir.z,o[6]=ql.z,o[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,l=this.elements,c=i[0],h=i[4],f=i[8],d=i[12],m=i[1],g=i[5],v=i[9],x=i[13],M=i[2],w=i[6],S=i[10],y=i[14],L=i[3],C=i[7],T=i[11],N=i[15],I=o[0],O=o[4],z=o[8],P=o[12],A=o[1],B=o[5],ee=o[9],K=o[13],le=o[2],he=o[6],ae=o[10],ue=o[14],G=o[3],ce=o[7],oe=o[11],k=o[15];return l[0]=c*I+h*A+f*le+d*G,l[4]=c*O+h*B+f*he+d*ce,l[8]=c*z+h*ee+f*ae+d*oe,l[12]=c*P+h*K+f*ue+d*k,l[1]=m*I+g*A+v*le+x*G,l[5]=m*O+g*B+v*he+x*ce,l[9]=m*z+g*ee+v*ae+x*oe,l[13]=m*P+g*K+v*ue+x*k,l[2]=M*I+w*A+S*le+y*G,l[6]=M*O+w*B+S*he+y*ce,l[10]=M*z+w*ee+S*ae+y*oe,l[14]=M*P+w*K+S*ue+y*k,l[3]=L*I+C*A+T*le+N*G,l[7]=L*O+C*B+T*he+N*ce,l[11]=L*z+C*ee+T*ae+N*oe,l[15]=L*P+C*K+T*ue+N*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],l=e[12],c=e[1],h=e[5],f=e[9],d=e[13],m=e[2],g=e[6],v=e[10],x=e[14],M=e[3],w=e[7],S=e[11],y=e[15];return M*(+l*f*g-o*d*g-l*h*v+i*d*v+o*h*x-i*f*x)+w*(+t*f*x-t*d*v+l*c*v-o*c*x+o*d*m-l*f*m)+S*(+t*d*g-t*h*x-l*c*g+i*c*x+l*h*m-i*d*m)+y*(-o*h*m-t*f*g+t*h*v+o*c*g-i*c*v+i*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],h=e[5],f=e[6],d=e[7],m=e[8],g=e[9],v=e[10],x=e[11],M=e[12],w=e[13],S=e[14],y=e[15],L=g*S*d-w*v*d+w*f*x-h*S*x-g*f*y+h*v*y,C=M*v*d-m*S*d-M*f*x+c*S*x+m*f*y-c*v*y,T=m*w*d-M*g*d+M*h*x-c*w*x-m*h*y+c*g*y,N=M*g*f-m*w*f-M*h*v+c*w*v+m*h*S-c*g*S,I=t*L+i*C+o*T+l*N;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=L*O,e[1]=(w*v*l-g*S*l-w*o*x+i*S*x+g*o*y-i*v*y)*O,e[2]=(h*S*l-w*f*l+w*o*d-i*S*d-h*o*y+i*f*y)*O,e[3]=(g*f*l-h*v*l-g*o*d+i*v*d+h*o*x-i*f*x)*O,e[4]=C*O,e[5]=(m*S*l-M*v*l+M*o*x-t*S*x-m*o*y+t*v*y)*O,e[6]=(M*f*l-c*S*l-M*o*d+t*S*d+c*o*y-t*f*y)*O,e[7]=(c*v*l-m*f*l+m*o*d-t*v*d-c*o*x+t*f*x)*O,e[8]=T*O,e[9]=(M*g*l-m*w*l-M*i*x+t*w*x+m*i*y-t*g*y)*O,e[10]=(c*w*l-M*h*l+M*i*d-t*w*d-c*i*y+t*h*y)*O,e[11]=(m*h*l-c*g*l-m*i*d+t*g*d+c*i*x-t*h*x)*O,e[12]=N*O,e[13]=(m*w*o-M*g*o+M*i*v-t*w*v-m*i*S+t*g*S)*O,e[14]=(M*h*o-c*w*o-M*i*f+t*w*f+c*i*S-t*h*S)*O,e[15]=(c*g*o-m*h*o+m*i*f-t*g*f-c*i*v+t*h*v)*O,this}scale(e){const t=this.elements,i=e.x,o=e.y,l=e.z;return t[0]*=i,t[4]*=o,t[8]*=l,t[1]*=i,t[5]*=o,t[9]*=l,t[2]*=i,t[6]*=o,t[10]*=l,t[3]*=i,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),l=1-i,c=e.x,h=e.y,f=e.z,d=l*c,m=l*h;return this.set(d*c+i,d*h-o*f,d*f+o*h,0,d*h+o*f,m*h+i,m*f-o*c,0,d*f-o*h,m*f+o*c,l*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,l,c){return this.set(1,i,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,l=t._x,c=t._y,h=t._z,f=t._w,d=l+l,m=c+c,g=h+h,v=l*d,x=l*m,M=l*g,w=c*m,S=c*g,y=h*g,L=f*d,C=f*m,T=f*g,N=i.x,I=i.y,O=i.z;return o[0]=(1-(w+y))*N,o[1]=(x+T)*N,o[2]=(M-C)*N,o[3]=0,o[4]=(x-T)*I,o[5]=(1-(v+y))*I,o[6]=(S+L)*I,o[7]=0,o[8]=(M+C)*O,o[9]=(S-L)*O,o[10]=(1-(v+w))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let l=Ks.set(o[0],o[1],o[2]).length();const c=Ks.set(o[4],o[5],o[6]).length(),h=Ks.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],wi.copy(this);const d=1/l,m=1/c,g=1/h;return wi.elements[0]*=d,wi.elements[1]*=d,wi.elements[2]*=d,wi.elements[4]*=m,wi.elements[5]*=m,wi.elements[6]*=m,wi.elements[8]*=g,wi.elements[9]*=g,wi.elements[10]*=g,t.setFromRotationMatrix(wi),i.x=l,i.y=c,i.z=h,this}makePerspective(e,t,i,o,l,c,h=ir){const f=this.elements,d=2*l/(t-e),m=2*l/(i-o),g=(t+e)/(t-e),v=(i+o)/(i-o);let x,M;if(h===ir)x=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(h===Rc)x=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=d,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,o,l,c,h=ir){const f=this.elements,d=1/(t-e),m=1/(i-o),g=1/(c-l),v=(t+e)*d,x=(i+o)*m;let M,w;if(h===ir)M=(c+l)*g,w=-2*g;else if(h===Rc)M=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=2*d,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=w,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ks=new U,wi=new wt,xy=new U(0,0,0),yy=new U(1,1,1),Ir=new U,ql=new U,ii=new U,n0=new wt,i0=new Vn;class Pn{constructor(e=0,t=0,i=0,o=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,l=o[0],c=o[4],h=o[8],f=o[1],d=o[5],m=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(pt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-pt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return n0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(n0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return i0.setFromEuler(this),this.setFromQuaternion(i0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Ig{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sy=0;const r0=new U,Js=new Vn,Ki=new wt,$l=new U,ha=new U,My=new U,Ey=new Vn,s0=new U(1,0,0),o0=new U(0,1,0),a0=new U(0,0,1),l0={type:"added"},wy={type:"removed"},Qs={type:"childadded",child:null},Ch={type:"childremoved",child:null};class sn extends Ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new U,t=new Pn,i=new Vn,o=new U(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new wt},normalMatrix:{value:new ht}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ig,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(s0,e)}rotateY(e){return this.rotateOnAxis(o0,e)}rotateZ(e){return this.rotateOnAxis(a0,e)}translateOnAxis(e,t){return r0.copy(e).applyQuaternion(this.quaternion),this.position.add(r0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(s0,e)}translateY(e){return this.translateOnAxis(o0,e)}translateZ(e){return this.translateOnAxis(a0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$l.copy(e):$l.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(ha,$l,this.up):Ki.lookAt($l,ha,this.up),this.quaternion.setFromRotationMatrix(Ki),o&&(Ki.extractRotation(o.matrixWorld),Js.setFromRotationMatrix(Ki),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(l0),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wy),Ch.child=e,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(l0),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,My),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,Ey,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let d=0,m=f.length;d<m;d++){const g=f[d];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,d=this.material.length;f<d;f++)h.push(l(e.materials,this.material[f]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];o.animations.push(l(e.animations,f))}}if(t){const h=c(e.geometries),f=c(e.materials),d=c(e.textures),m=c(e.images),g=c(e.shapes),v=c(e.skeletons),x=c(e.animations),M=c(e.nodes);h.length>0&&(i.geometries=h),f.length>0&&(i.materials=f),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=o,i;function c(h){const f=[];for(const d in h){const m=h[d];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}sn.DEFAULT_UP=new U(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new U,Ji=new U,Rh=new U,Qi=new U,eo=new U,to=new U,c0=new U,bh=new U,Ph=new U,Lh=new U,Dh=new Ht,Ih=new Ht,Nh=new Ht;class pi{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),Ti.subVectors(e,t),o.cross(Ti);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,i,o,l){Ti.subVectors(o,t),Ji.subVectors(i,t),Rh.subVectors(e,t);const c=Ti.dot(Ti),h=Ti.dot(Ji),f=Ti.dot(Rh),d=Ji.dot(Ji),m=Ji.dot(Rh),g=c*d-h*h;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(d*f-h*m)*v,M=(c*m-h*f)*v;return l.set(1-x-M,M,x)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,i,o,l,c,h,f){return this.getBarycoord(e,t,i,o,Qi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Qi.x),f.addScaledVector(c,Qi.y),f.addScaledVector(h,Qi.z),f)}static getInterpolatedAttribute(e,t,i,o,l,c){return Dh.setScalar(0),Ih.setScalar(0),Nh.setScalar(0),Dh.fromBufferAttribute(e,t),Ih.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Dh,l.x),c.addScaledVector(Ih,l.y),c.addScaledVector(Nh,l.z),c}static isFrontFacing(e,t,i,o){return Ti.subVectors(i,t),Ji.subVectors(e,t),Ti.cross(Ji).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Ti.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,l){return pi.getInterpolation(e,this.a,this.b,this.c,t,i,o,l)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,l=this.c;let c,h;eo.subVectors(o,i),to.subVectors(l,i),bh.subVectors(e,i);const f=eo.dot(bh),d=to.dot(bh);if(f<=0&&d<=0)return t.copy(i);Ph.subVectors(e,o);const m=eo.dot(Ph),g=to.dot(Ph);if(m>=0&&g<=m)return t.copy(o);const v=f*g-m*d;if(v<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(i).addScaledVector(eo,c);Lh.subVectors(e,l);const x=eo.dot(Lh),M=to.dot(Lh);if(M>=0&&x<=M)return t.copy(l);const w=x*d-f*M;if(w<=0&&d>=0&&M<=0)return h=d/(d-M),t.copy(i).addScaledVector(to,h);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return c0.subVectors(l,o),h=(g-m)/(g-m+(x-M)),t.copy(o).addScaledVector(c0,h);const y=1/(S+w+v);return c=w*y,h=v*y,t.copy(i).addScaledVector(eo,c).addScaledVector(to,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},Zl={h:0,s:0,l:0};function Uh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Dt.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Dt.workingColorSpace){if(e=rd(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=Uh(c,l,e+1/3),this.g=Uh(c,l,e),this.b=Uh(c,l,e-1/3)}return Dt.toWorkingColorSpace(this,o),this}setStyle(e,t=zn){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zn){const i=Ng[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return Dt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(pt(Rn.r*255,0,255))*65536+Math.round(pt(Rn.g*255,0,255))*256+Math.round(pt(Rn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(Rn.copy(this),t);const i=Rn.r,o=Rn.g,l=Rn.b,c=Math.max(i,o,l),h=Math.min(i,o,l);let f,d;const m=(h+c)/2;if(h===c)f=0,d=0;else{const g=c-h;switch(d=m<=.5?g/(c+h):g/(2-c-h),c){case i:f=(o-l)/g+(o<l?6:0);break;case o:f=(l-i)/g+2;break;case l:f=(i-o)/g+4;break}f/=6}return e.h=f,e.s=d,e.l=m,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=zn){Dt.fromWorkingColorSpace(Rn.copy(this),e);const t=Rn.r,i=Rn.g,o=Rn.b;return e!==zn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(Zl);const i=Ma(Nr.h,Zl.h,t),o=Ma(Nr.s,Zl.s,t),l=Ma(Nr.l,Zl.l,t);return this.setHSL(i,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*o,this.g=l[1]*t+l[4]*i+l[7]*o,this.b=l[2]*t+l[5]*i+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new ut;ut.NAMES=Ng;let Ty=0;class ys extends Ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=go,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nf,this.blendDst=rf,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(i.blending=this.blending),this.side!==Hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nf&&(i.blendSrc=this.blendSrc),this.blendDst!==rf&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$m&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(l){const c=[];for(const h in l){const f=l[h];delete f.metadata,c.push(f)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let l=0;l!==o;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nr extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new U,Kl=new Ie;class oi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hf,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kl.fromBufferAttribute(this,t),Kl.applyMatrix3(e),this.setXY(t,Kl.x,Kl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),o=Ot(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,l){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),o=Ot(o,this.array),l=Ot(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hf&&(e.usage=this.usage),e}}class Ug extends oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fg extends oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gt extends oi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ay=0;const di=new wt,Fh=new sn,no=new U,ri=new xs,fa=new xs,gn=new U;class yn extends Ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bg(e)?Fg:Ug)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new ht().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,i){return di.makeTranslation(e,t,i),this.applyMatrix4(di),this}scale(e,t,i){return di.makeScale(e,t,i),this.applyMatrix4(di),this}lookAt(e){return Fh.lookAt(e),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Gt(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const l=t[i];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const h=t[l];fa.setFromBufferAttribute(h),this.morphTargetsRelative?(gn.addVectors(ri.min,fa.min),ri.expandByPoint(gn),gn.addVectors(ri.max,fa.max),ri.expandByPoint(gn)):(ri.expandByPoint(fa.min),ri.expandByPoint(fa.max))}ri.getCenter(i);let o=0;for(let l=0,c=e.count;l<c;l++)gn.fromBufferAttribute(e,l),o=Math.max(o,i.distanceToSquared(gn));if(t)for(let l=0,c=t.length;l<c;l++){const h=t[l],f=this.morphTargetsRelative;for(let d=0,m=h.count;d<m;d++)gn.fromBufferAttribute(h,d),f&&(no.fromBufferAttribute(e,d),gn.add(no)),o=Math.max(o,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),h=[],f=[];for(let z=0;z<i.count;z++)h[z]=new U,f[z]=new U;const d=new U,m=new U,g=new U,v=new Ie,x=new Ie,M=new Ie,w=new U,S=new U;function y(z,P,A){d.fromBufferAttribute(i,z),m.fromBufferAttribute(i,P),g.fromBufferAttribute(i,A),v.fromBufferAttribute(l,z),x.fromBufferAttribute(l,P),M.fromBufferAttribute(l,A),m.sub(d),g.sub(d),x.sub(v),M.sub(v);const B=1/(x.x*M.y-M.x*x.y);isFinite(B)&&(w.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(B),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(B),h[z].add(w),h[P].add(w),h[A].add(w),f[z].add(S),f[P].add(S),f[A].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let z=0,P=L.length;z<P;++z){const A=L[z],B=A.start,ee=A.count;for(let K=B,le=B+ee;K<le;K+=3)y(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const C=new U,T=new U,N=new U,I=new U;function O(z){N.fromBufferAttribute(o,z),I.copy(N);const P=h[z];C.copy(P),C.sub(N.multiplyScalar(N.dot(P))).normalize(),T.crossVectors(I,P);const B=T.dot(f[z])<0?-1:1;c.setXYZW(z,C.x,C.y,C.z,B)}for(let z=0,P=L.length;z<P;++z){const A=L[z],B=A.start,ee=A.count;for(let K=B,le=B+ee;K<le;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const o=new U,l=new U,c=new U,h=new U,f=new U,d=new U,m=new U,g=new U;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),w=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,S),m.subVectors(c,l),g.subVectors(o,l),m.cross(g),h.fromBufferAttribute(i,M),f.fromBufferAttribute(i,w),d.fromBufferAttribute(i,S),h.add(m),f.add(m),d.add(m),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(w,f.x,f.y,f.z),i.setXYZ(S,d.x,d.y,d.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),g.subVectors(o,l),m.cross(g),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(h,f){const d=h.array,m=h.itemSize,g=h.normalized,v=new d.constructor(f.length*m);let x=0,M=0;for(let w=0,S=f.length;w<S;w++){h.isInterleavedBufferAttribute?x=f[w]*h.data.stride+h.offset:x=f[w]*m;for(let y=0;y<m;y++)v[M++]=d[x++]}return new oi(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,o=this.attributes;for(const h in o){const f=o[h],d=e(f,i);t.setAttribute(h,d)}const l=this.morphAttributes;for(const h in l){const f=[],d=l[h];for(let m=0,g=d.length;m<g;m++){const v=d[m],x=e(v,i);f.push(x)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,f=c.length;h<f;h++){const d=c[h];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(e[d]=f[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const d=i[f];e.data.attributes[f]=d.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],m=[];for(let g=0,v=d.length;g<v;g++){const x=d[g];m.push(x.toJSON(e.data))}m.length>0&&(o[f]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const d in o){const m=o[d];this.setAttribute(d,m.clone(t))}const l=e.morphAttributes;for(const d in l){const m=[],g=l[d];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,m=c.length;d<m;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const u0=new wt,os=new Dg,Jl=new bo,h0=new U,Ql=new U,ec=new U,tc=new U,Oh=new U,nc=new U,f0=new U,ic=new U;class Ue extends sn{constructor(e=new yn,t=new nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){nc.set(0,0,0);for(let f=0,d=l.length;f<d;f++){const m=h[f],g=l[f];m!==0&&(Oh.fromBufferAttribute(g,e),c?nc.addScaledVector(Oh,m):nc.addScaledVector(Oh.sub(t),m))}t.add(nc)}return t}raycast(e,t){const i=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(l),os.copy(e.ray).recast(e.near),!(Jl.containsPoint(os.origin)===!1&&(os.intersectSphere(Jl,h0)===null||os.origin.distanceToSquared(h0)>(e.far-e.near)**2))&&(u0.copy(l).invert(),os.copy(e.ray).applyMatrix4(u0),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,i){let o;const l=this.geometry,c=this.material,h=l.index,f=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(h!==null)if(Array.isArray(c))for(let M=0,w=v.length;M<w;M++){const S=v[M],y=c[S.materialIndex],L=Math.max(S.start,x.start),C=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let T=L,N=C;T<N;T+=3){const I=h.getX(T),O=h.getX(T+1),z=h.getX(T+2);o=rc(this,y,e,i,d,m,g,I,O,z),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),w=Math.min(h.count,x.start+x.count);for(let S=M,y=w;S<y;S+=3){const L=h.getX(S),C=h.getX(S+1),T=h.getX(S+2);o=rc(this,c,e,i,d,m,g,L,C,T),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,w=v.length;M<w;M++){const S=v[M],y=c[S.materialIndex],L=Math.max(S.start,x.start),C=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let T=L,N=C;T<N;T+=3){const I=T,O=T+1,z=T+2;o=rc(this,y,e,i,d,m,g,I,O,z),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),w=Math.min(f.count,x.start+x.count);for(let S=M,y=w;S<y;S+=3){const L=S,C=S+1,T=S+2;o=rc(this,c,e,i,d,m,g,L,C,T),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Cy(s,e,t,i,o,l,c,h){let f;if(e.side===Hn?f=i.intersectTriangle(c,l,o,!0,h):f=i.intersectTriangle(o,l,c,e.side===Hr,h),f===null)return null;ic.copy(h),ic.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(ic);return d<t.near||d>t.far?null:{distance:d,point:ic.clone(),object:s}}function rc(s,e,t,i,o,l,c,h,f,d){s.getVertexPosition(h,Ql),s.getVertexPosition(f,ec),s.getVertexPosition(d,tc);const m=Cy(s,e,t,i,Ql,ec,tc,f0);if(m){const g=new U;pi.getBarycoord(f0,Ql,ec,tc,g),o&&(m.uv=pi.getInterpolatedAttribute(o,h,f,d,g,new Ie)),l&&(m.uv1=pi.getInterpolatedAttribute(l,h,f,d,g,new Ie)),c&&(m.normal=pi.getInterpolatedAttribute(c,h,f,d,g,new U),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:h,b:f,c:d,normal:new U,materialIndex:0};pi.getNormal(Ql,ec,tc,v.normal),m.face=v,m.barycoord=g}return m}class Oi extends yn{constructor(e=1,t=1,i=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:l,depthSegments:c};const h=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const f=[],d=[],m=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,i,t,e,c,l,0),M("z","y","x",1,-1,i,t,-e,c,l,1),M("x","z","y",1,1,e,i,t,o,c,2),M("x","z","y",1,-1,e,i,-t,o,c,3),M("x","y","z",1,-1,e,t,i,o,l,4),M("x","y","z",-1,-1,e,t,-i,o,l,5),this.setIndex(f),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(m,3)),this.setAttribute("uv",new Gt(g,2));function M(w,S,y,L,C,T,N,I,O,z,P){const A=T/O,B=N/z,ee=T/2,K=N/2,le=I/2,he=O+1,ae=z+1;let ue=0,G=0;const ce=new U;for(let oe=0;oe<ae;oe++){const k=oe*B-K;for(let re=0;re<he;re++){const Oe=re*A-ee;ce[w]=Oe*L,ce[S]=k*C,ce[y]=le,d.push(ce.x,ce.y,ce.z),ce[w]=0,ce[S]=0,ce[y]=I>0?1:-1,m.push(ce.x,ce.y,ce.z),g.push(re/O),g.push(1-oe/z),ue+=1}}for(let oe=0;oe<z;oe++)for(let k=0;k<O;k++){const re=v+k+he*oe,Oe=v+k+he*(oe+1),Q=v+(k+1)+he*(oe+1),fe=v+(k+1)+he*oe;f.push(re,Oe,fe),f.push(Oe,Q,fe),G+=6}h.addGroup(x,G,P),x+=G,v+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function kn(s){const e={};for(let t=0;t<s.length;t++){const i=Co(s[t]);for(const o in i)e[o]=i[o]}return e}function Ry(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Og(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const by={clone:Co,merge:kn};var Py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Py,this.fragmentShader=Ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=Ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class kg extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new U,d0=new Ie,p0=new Ie;class Zn extends kg{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,d0,p0),t.subVectors(p0,d0)}setViewOffset(e,t,i,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,d=c.fullHeight;l+=c.offsetX*o/f,t-=c.offsetY*i/d,o*=c.width/f,i*=c.height/d}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const io=-90,ro=1;class Dy extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(io,ro,e,t);o.layers=this.layers,this.add(o);const l=new Zn(io,ro,e,t);l.layers=this.layers,this.add(l);const c=new Zn(io,ro,e,t);c.layers=this.layers,this.add(c);const h=new Zn(io,ro,e,t);h.layers=this.layers,this.add(h);const f=new Zn(io,ro,e,t);f.layers=this.layers,this.add(f);const d=new Zn(io,ro,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,l,c,h,f]=t;for(const d of t)this.remove(d);if(e===ir)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,h,f,d,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,l),e.setRenderTarget(i,1,o),e.render(t,c),e.setRenderTarget(i,2,o),e.render(t,h),e.setRenderTarget(i,3,o),e.render(t,f),e.setRenderTarget(i,4,o),e.render(t,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,o),e.render(t,m),e.setRenderTarget(g,v,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class zg extends bn{constructor(e,t,i,o,l,c,h,f,d,m){e=e!==void 0?e:[],t=t!==void 0?t:So,super(e,t,i,o,l,c,h,f,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Iy extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new zg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Oi(5,5,5),l=new lr({name:"CubemapFromEquirect",uniforms:Co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hn,blending:kr});l.uniforms.tEquirect.value=t;const c=new Ue(o,l),h=t.minFilter;return t.minFilter===ms&&(t.minFilter=Ni),new Dy(1,10,this).update(e,c),t.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(l)}}class sd{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ut(e),this.density=t}clone(){return new sd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ny extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Uy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hf,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[i+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new U;class Pc{constructor(e,t,i,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),o=Ot(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this}setXYZW(e,t,i,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),o=Ot(o,this.array),l=Ot(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new oi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const o=i*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bg extends ys{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let so;const da=new U,oo=new U,ao=new U,lo=new Ie,pa=new Ie,Hg=new wt,sc=new U,ma=new U,oc=new U,m0=new Ie,kh=new Ie,g0=new Ie;class Fy extends sn{constructor(e=new Bg){if(super(),this.isSprite=!0,this.type="Sprite",so===void 0){so=new yn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Uy(t,5);so.setIndex([0,1,2,0,2,3]),so.setAttribute("position",new Pc(i,3,0,!1)),so.setAttribute("uv",new Pc(i,2,3,!1))}this.geometry=so,this.material=e,this.center=new Ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oo.setFromMatrixScale(this.matrixWorld),Hg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ao.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oo.multiplyScalar(-ao.z);const i=this.material.rotation;let o,l;i!==0&&(l=Math.cos(i),o=Math.sin(i));const c=this.center;ac(sc.set(-.5,-.5,0),ao,c,oo,o,l),ac(ma.set(.5,-.5,0),ao,c,oo,o,l),ac(oc.set(.5,.5,0),ao,c,oo,o,l),m0.set(0,0),kh.set(1,0),g0.set(1,1);let h=e.ray.intersectTriangle(sc,ma,oc,!1,da);if(h===null&&(ac(ma.set(-.5,.5,0),ao,c,oo,o,l),kh.set(0,1),h=e.ray.intersectTriangle(sc,oc,ma,!1,da),h===null))return;const f=e.ray.origin.distanceTo(da);f<e.near||f>e.far||t.push({distance:f,point:da.clone(),uv:pi.getInterpolation(da,sc,ma,oc,m0,kh,g0,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ac(s,e,t,i,o,l){lo.subVectors(s,t).addScalar(.5).multiply(i),o!==void 0?(pa.x=l*lo.x-o*lo.y,pa.y=o*lo.x+l*lo.y):pa.copy(lo),s.copy(e),s.x+=pa.x,s.y+=pa.y,s.applyMatrix4(Hg)}class Oy extends bn{constructor(e=null,t=1,i=1,o,l,c,h,f,d=si,m=si,g,v){super(null,c,h,f,d,m,o,l,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class v0 extends oi{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const co=new wt,_0=new wt,lc=[],x0=new xs,ky=new wt,ga=new Ue,va=new bo;class Br extends Ue{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new v0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,ky)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,co),x0.copy(e.boundingBox).applyMatrix4(co),this.boundingBox.union(x0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,co),va.copy(e.boundingSphere).applyMatrix4(co),this.boundingSphere.union(va)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,l=i.length+1,c=e*l+1;for(let h=0;h<i.length;h++)i[h]=o[c+h]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(i),e.ray.intersectsSphere(va)!==!1))for(let l=0;l<o;l++){this.getMatrixAt(l,co),_0.multiplyMatrices(i,co),ga.matrixWorld=_0,ga.raycast(e,lc);for(let c=0,h=lc.length;c<h;c++){const f=lc[c];f.instanceId=l,f.object=this,t.push(f)}lc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new v0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new Oy(new Float32Array(o*this.count),o,this.count,ed,Ui));const l=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const h=this.geometry.morphTargetsRelative?1:1-c,f=o*e;l[f]=h,l.set(i,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const zh=new U,zy=new U,By=new ht;class us{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=zh.subVectors(i,t).cross(zy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zh),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(i,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||By.getNormalMatrix(e),o=this.coplanarPoint(zh).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new bo,cc=new U;class od{constructor(e=new us,t=new us,i=new us,o=new us,l=new us,c=new us){this.planes=[e,t,i,o,l,c]}set(e,t,i,o,l,c){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(i),h[3].copy(o),h[4].copy(l),h[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ir){const i=this.planes,o=e.elements,l=o[0],c=o[1],h=o[2],f=o[3],d=o[4],m=o[5],g=o[6],v=o[7],x=o[8],M=o[9],w=o[10],S=o[11],y=o[12],L=o[13],C=o[14],T=o[15];if(i[0].setComponents(f-l,v-d,S-x,T-y).normalize(),i[1].setComponents(f+l,v+d,S+x,T+y).normalize(),i[2].setComponents(f+c,v+m,S+M,T+L).normalize(),i[3].setComponents(f-c,v-m,S-M,T-L).normalize(),i[4].setComponents(f-h,v-g,S-w,T-C).normalize(),t===ir)i[5].setComponents(f+h,v+g,S+w,T+C).normalize();else if(t===Rc)i[5].setComponents(h,g,w,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(cc.x=o.normal.x>0?e.max.x:e.min.x,cc.y=o.normal.y>0?e.max.y:e.min.y,cc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vg extends ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const y0=new wt,Vf=new Dg,uc=new bo,hc=new U;class Gf extends sn{constructor(e=new yn,t=new Vg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(o),uc.radius+=l,e.ray.intersectsSphere(uc)===!1)return;y0.copy(o).invert(),Vf.copy(e.ray).applyMatrix4(y0);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,d=i.index,g=i.attributes.position;if(d!==null){const v=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let M=v,w=x;M<w;M++){const S=d.getX(M);hc.fromBufferAttribute(g,S),S0(hc,S,f,o,e,t,this)}}else{const v=Math.max(0,c.start),x=Math.min(g.count,c.start+c.count);for(let M=v,w=x;M<w;M++)hc.fromBufferAttribute(g,M),S0(hc,M,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function S0(s,e,t,i,o,l,c){const h=Vf.distanceSqToPoint(s);if(h<t){const f=new U;Vf.closestPointToPoint(s,f),f.applyMatrix4(i);const d=o.ray.origin.distanceTo(f);if(d<o.near||d>o.far)return;l.push({distance:d,distanceToRay:Math.sqrt(h),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Mt extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Gg extends bn{constructor(e,t,i,o,l,c,h,f,d){super(e,t,i,o,l,c,h,f,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wg extends bn{constructor(e,t,i,o,l,c,h,f,d,m=vo){if(m!==vo&&m!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===vo&&(i=gs),i===void 0&&m===wo&&(i=Eo),super(null,o,l,c,h,f,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:si,this.minFilter=f!==void 0?f:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),l+=i.distanceTo(o),t.push(l),o=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let o=0;const l=i.length;let c;t?c=t:c=e*i[l-1];let h=0,f=l-1,d;for(;h<=f;)if(o=Math.floor(h+(f-h)/2),d=i[o]-c,d<0)h=o+1;else if(d>0)f=o-1;else{f=o;break}if(o=f,i[o]===c)return o/(l-1);const m=i[o],v=i[o+1]-m,x=(c-m)/v;return(o+x)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),h=this.getPoint(l),f=t||(c.isVector2?new Ie:new U);return f.copy(h).sub(c).normalize(),f}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new U,o=[],l=[],c=[],h=new U,f=new wt;for(let x=0;x<=e;x++){const M=x/e;o[x]=this.getTangentAt(M,new U)}l[0]=new U,c[0]=new U;let d=Number.MAX_VALUE;const m=Math.abs(o[0].x),g=Math.abs(o[0].y),v=Math.abs(o[0].z);m<=d&&(d=m,i.set(1,0,0)),g<=d&&(d=g,i.set(0,1,0)),v<=d&&i.set(0,0,1),h.crossVectors(o[0],i).normalize(),l[0].crossVectors(o[0],h),c[0].crossVectors(o[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),c[x]=c[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const M=Math.acos(pt(o[x-1].dot(o[x]),-1,1));l[x].applyMatrix4(f.makeRotationAxis(h,M))}c[x].crossVectors(o[x],l[x])}if(t===!0){let x=Math.acos(pt(l[0].dot(l[e]),-1,1));x/=e,o[0].dot(h.crossVectors(l[0],l[e]))>0&&(x=-x);for(let M=1;M<=e;M++)l[M].applyMatrix4(f.makeRotationAxis(o[M],x*M)),c[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ad extends ki{constructor(e=0,t=0,i=1,o=1,l=0,c=Math.PI*2,h=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=h,this.aRotation=f}getPoint(e,t=new Ie){const i=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const h=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(h),d=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=f-this.aX,x=d-this.aY;f=v*m-x*g+this.aX,d=v*g+x*m+this.aY}return i.set(f,d)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hy extends ad{constructor(e,t,i,o,l,c){super(e,t,i,i,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function ld(){let s=0,e=0,t=0,i=0;function o(l,c,h,f){s=l,e=h,t=-3*l+3*c-2*h-f,i=2*l-2*c+h+f}return{initCatmullRom:function(l,c,h,f,d){o(c,h,d*(h-l),d*(f-c))},initNonuniformCatmullRom:function(l,c,h,f,d,m,g){let v=(c-l)/d-(h-l)/(d+m)+(h-c)/m,x=(h-c)/m-(f-c)/(m+g)+(f-h)/g;v*=m,x*=m,o(c,h,v,x)},calc:function(l){const c=l*l,h=c*l;return s+e*l+t*c+i*h}}}const fc=new U,Bh=new ld,Hh=new ld,Vh=new ld;class Vy extends ki{constructor(e=[],t=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=o}getPoint(e,t=new U){const i=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let h=Math.floor(c),f=c-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/l)+1)*l:f===0&&h===l-1&&(h=l-2,f=1);let d,m;this.closed||h>0?d=o[(h-1)%l]:(fc.subVectors(o[0],o[1]).add(o[0]),d=fc);const g=o[h%l],v=o[(h+1)%l];if(this.closed||h+2<l?m=o[(h+2)%l]:(fc.subVectors(o[l-1],o[l-2]).add(o[l-1]),m=fc),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(d.distanceToSquared(g),x),w=Math.pow(g.distanceToSquared(v),x),S=Math.pow(v.distanceToSquared(m),x);w<1e-4&&(w=1),M<1e-4&&(M=w),S<1e-4&&(S=w),Bh.initNonuniformCatmullRom(d.x,g.x,v.x,m.x,M,w,S),Hh.initNonuniformCatmullRom(d.y,g.y,v.y,m.y,M,w,S),Vh.initNonuniformCatmullRom(d.z,g.z,v.z,m.z,M,w,S)}else this.curveType==="catmullrom"&&(Bh.initCatmullRom(d.x,g.x,v.x,m.x,this.tension),Hh.initCatmullRom(d.y,g.y,v.y,m.y,this.tension),Vh.initCatmullRom(d.z,g.z,v.z,m.z,this.tension));return i.set(Bh.calc(f),Hh.calc(f),Vh.calc(f)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new U().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function M0(s,e,t,i,o){const l=(i-e)*.5,c=(o-t)*.5,h=s*s,f=s*h;return(2*t-2*i+l+c)*f+(-3*t+3*i-2*l-c)*h+l*s+t}function Gy(s,e){const t=1-s;return t*t*e}function Wy(s,e){return 2*(1-s)*s*e}function Xy(s,e){return s*s*e}function Ea(s,e,t,i){return Gy(s,e)+Wy(s,t)+Xy(s,i)}function jy(s,e){const t=1-s;return t*t*t*e}function Yy(s,e){const t=1-s;return 3*t*t*s*e}function qy(s,e){return 3*(1-s)*s*s*e}function $y(s,e){return s*s*s*e}function wa(s,e,t,i,o){return jy(s,e)+Yy(s,t)+qy(s,i)+$y(s,o)}class Xg extends ki{constructor(e=new Ie,t=new Ie,i=new Ie,o=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=o}getPoint(e,t=new Ie){const i=t,o=this.v0,l=this.v1,c=this.v2,h=this.v3;return i.set(wa(e,o.x,l.x,c.x,h.x),wa(e,o.y,l.y,c.y,h.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zy extends ki{constructor(e=new U,t=new U,i=new U,o=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=o}getPoint(e,t=new U){const i=t,o=this.v0,l=this.v1,c=this.v2,h=this.v3;return i.set(wa(e,o.x,l.x,c.x,h.x),wa(e,o.y,l.y,c.y,h.y),wa(e,o.z,l.z,c.z,h.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jg extends ki{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ky extends ki{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yg extends ki{constructor(e=new Ie,t=new Ie,i=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ie){const i=t,o=this.v0,l=this.v1,c=this.v2;return i.set(Ea(e,o.x,l.x,c.x),Ea(e,o.y,l.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jy extends ki{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){const i=t,o=this.v0,l=this.v1,c=this.v2;return i.set(Ea(e,o.x,l.x,c.x),Ea(e,o.y,l.y,c.y),Ea(e,o.z,l.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qg extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const i=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),h=l-c,f=o[c===0?c:c-1],d=o[c],m=o[c>o.length-2?o.length-1:c+1],g=o[c>o.length-3?o.length-1:c+2];return i.set(M0(h,f.x,d.x,m.x,g.x),M0(h,f.y,d.y,m.y,g.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new Ie().fromArray(o))}return this}}var E0=Object.freeze({__proto__:null,ArcCurve:Hy,CatmullRomCurve3:Vy,CubicBezierCurve:Xg,CubicBezierCurve3:Zy,EllipseCurve:ad,LineCurve:jg,LineCurve3:Ky,QuadraticBezierCurve:Yg,QuadraticBezierCurve3:Jy,SplineCurve:qg});class Qy extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new E0[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=i){const c=o[l]-i,h=this.curves[l],f=h.getLength(),d=f===0?0:1-c/f;return h.getPointAt(d,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,o=this.curves.length;i<o;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],h=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,f=c.getPoints(h);for(let d=0;d<f.length;d++){const m=f[d];i&&i.equals(m)||(t.push(m),i=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const o=e.curves[t];this.curves.push(new E0[o.type]().fromJSON(o))}return this}}class w0 extends Qy{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new jg(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,o){const l=new Yg(this.currentPoint.clone(),new Ie(e,t),new Ie(i,o));return this.curves.push(l),this.currentPoint.set(i,o),this}bezierCurveTo(e,t,i,o,l,c){const h=new Xg(this.currentPoint.clone(),new Ie(e,t),new Ie(i,o),new Ie(l,c));return this.curves.push(h),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new qg(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,o,l,c){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+h,t+f,i,o,l,c),this}absarc(e,t,i,o,l,c){return this.absellipse(e,t,i,i,o,l,c),this}ellipse(e,t,i,o,l,c,h,f){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+d,t+m,i,o,l,c,h,f),this}absellipse(e,t,i,o,l,c,h,f){const d=new ad(e,t,i,o,l,c,h,f);if(this.curves.length>0){const g=d.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(d);const m=d.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xo extends yn{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const l=[],c=[],h=[],f=[],d=new U,m=new Ie;c.push(0,0,0),h.push(0,0,1),f.push(.5,.5);for(let g=0,v=3;g<=t;g++,v+=3){const x=i+g/t*o;d.x=e*Math.cos(x),d.y=e*Math.sin(x),c.push(d.x,d.y,d.z),h.push(0,0,1),m.x=(c[v]/e+1)/2,m.y=(c[v+1]/e+1)/2,f.push(m.x,m.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bn extends yn{constructor(e=1,t=1,i=1,o=32,l=1,c=!1,h=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:f};const d=this;o=Math.floor(o),l=Math.floor(l);const m=[],g=[],v=[],x=[];let M=0;const w=[],S=i/2;let y=0;L(),c===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(m),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(x,2));function L(){const T=new U,N=new U;let I=0;const O=(t-e)/i;for(let z=0;z<=l;z++){const P=[],A=z/l,B=A*(t-e)+e;for(let ee=0;ee<=o;ee++){const K=ee/o,le=K*f+h,he=Math.sin(le),ae=Math.cos(le);N.x=B*he,N.y=-A*i+S,N.z=B*ae,g.push(N.x,N.y,N.z),T.set(he,O,ae).normalize(),v.push(T.x,T.y,T.z),x.push(K,1-A),P.push(M++)}w.push(P)}for(let z=0;z<o;z++)for(let P=0;P<l;P++){const A=w[P][z],B=w[P+1][z],ee=w[P+1][z+1],K=w[P][z+1];(e>0||P!==0)&&(m.push(A,B,K),I+=3),(t>0||P!==l-1)&&(m.push(B,ee,K),I+=3)}d.addGroup(y,I,0),y+=I}function C(T){const N=M,I=new Ie,O=new U;let z=0;const P=T===!0?e:t,A=T===!0?1:-1;for(let ee=1;ee<=o;ee++)g.push(0,S*A,0),v.push(0,A,0),x.push(.5,.5),M++;const B=M;for(let ee=0;ee<=o;ee++){const le=ee/o*f+h,he=Math.cos(le),ae=Math.sin(le);O.x=P*ae,O.y=S*A,O.z=P*he,g.push(O.x,O.y,O.z),v.push(0,A,0),I.x=he*.5+.5,I.y=ae*.5*A+.5,x.push(I.x,I.y),M++}for(let ee=0;ee<o;ee++){const K=N+ee,le=B+ee;T===!0?m.push(le,le+1,K):m.push(le+1,le,K),z+=3}d.addGroup(y,z,T===!0?1:2),y+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Or extends Bn{constructor(e=1,t=1,i=32,o=1,l=!1,c=0,h=Math.PI*2){super(0,e,t,i,o,l,c,h),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:o,openEnded:l,thetaStart:c,thetaLength:h}}static fromJSON(e){return new Or(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ia extends yn{constructor(e=[],t=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:o};const l=[],c=[];h(o),d(i),m(),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(l.slice(),3)),this.setAttribute("uv",new Gt(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(L){const C=new U,T=new U,N=new U;for(let I=0;I<t.length;I+=3)x(t[I+0],C),x(t[I+1],T),x(t[I+2],N),f(C,T,N,L)}function f(L,C,T,N){const I=N+1,O=[];for(let z=0;z<=I;z++){O[z]=[];const P=L.clone().lerp(T,z/I),A=C.clone().lerp(T,z/I),B=I-z;for(let ee=0;ee<=B;ee++)ee===0&&z===I?O[z][ee]=P:O[z][ee]=P.clone().lerp(A,ee/B)}for(let z=0;z<I;z++)for(let P=0;P<2*(I-z)-1;P++){const A=Math.floor(P/2);P%2===0?(v(O[z][A+1]),v(O[z+1][A]),v(O[z][A])):(v(O[z][A+1]),v(O[z+1][A+1]),v(O[z+1][A]))}}function d(L){const C=new U;for(let T=0;T<l.length;T+=3)C.x=l[T+0],C.y=l[T+1],C.z=l[T+2],C.normalize().multiplyScalar(L),l[T+0]=C.x,l[T+1]=C.y,l[T+2]=C.z}function m(){const L=new U;for(let C=0;C<l.length;C+=3){L.x=l[C+0],L.y=l[C+1],L.z=l[C+2];const T=S(L)/2/Math.PI+.5,N=y(L)/Math.PI+.5;c.push(T,1-N)}M(),g()}function g(){for(let L=0;L<c.length;L+=6){const C=c[L+0],T=c[L+2],N=c[L+4],I=Math.max(C,T,N),O=Math.min(C,T,N);I>.9&&O<.1&&(C<.2&&(c[L+0]+=1),T<.2&&(c[L+2]+=1),N<.2&&(c[L+4]+=1))}}function v(L){l.push(L.x,L.y,L.z)}function x(L,C){const T=L*3;C.x=e[T+0],C.y=e[T+1],C.z=e[T+2]}function M(){const L=new U,C=new U,T=new U,N=new U,I=new Ie,O=new Ie,z=new Ie;for(let P=0,A=0;P<l.length;P+=9,A+=6){L.set(l[P+0],l[P+1],l[P+2]),C.set(l[P+3],l[P+4],l[P+5]),T.set(l[P+6],l[P+7],l[P+8]),I.set(c[A+0],c[A+1]),O.set(c[A+2],c[A+3]),z.set(c[A+4],c[A+5]),N.copy(L).add(C).add(T).divideScalar(3);const B=S(N);w(I,A+0,L,B),w(O,A+2,C,B),w(z,A+4,T,B)}}function w(L,C,T,N){N<0&&L.x===1&&(c[C]=L.x-1),T.x===0&&T.z===0&&(c[C]=N/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function y(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.vertices,e.indices,e.radius,e.details)}}class Ra extends Ia{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,o=1/i,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-i,0,-o,i,0,o,-i,0,o,i,-o,-i,0,-o,i,0,o,-i,0,o,i,0,-i,0,-o,i,0,-o,-i,0,o,i,0,o],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,c,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ra(e.radius,e.detail)}}class cd extends w0{constructor(e){super(e),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,o=this.holes.length;i<o;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const o=e.holes[t];this.holes.push(new w0().fromJSON(o))}return this}}const e1={triangulate:function(s,e,t=2){const i=e&&e.length,o=i?e[0]*t:s.length;let l=$g(s,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let h,f,d,m,g,v,x;if(i&&(l=s1(s,e,l,t)),s.length>80*t){h=d=s[0],f=m=s[1];for(let M=t;M<o;M+=t)g=s[M],v=s[M+1],g<h&&(h=g),v<f&&(f=v),g>d&&(d=g),v>m&&(m=v);x=Math.max(d-h,m-f),x=x!==0?32767/x:0}return ba(l,c,t,h,f,x,0),c}};function $g(s,e,t,i,o){let l,c;if(o===g1(s,e,t,i)>0)for(l=e;l<t;l+=i)c=T0(l,s[l],s[l+1],c);else for(l=t-i;l>=e;l-=i)c=T0(l,s[l],s[l+1],c);return c&&Ic(c,c.next)&&(La(c),c=c.next),c}function _s(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(Ic(t,t.next)||Qt(t.prev,t,t.next)===0)){if(La(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ba(s,e,t,i,o,l,c){if(!s)return;!c&&l&&u1(s,i,o,l);let h=s,f,d;for(;s.prev!==s.next;){if(f=s.prev,d=s.next,l?n1(s,i,o,l):t1(s)){e.push(f.i/t|0),e.push(s.i/t|0),e.push(d.i/t|0),La(s),s=d.next,h=d.next;continue}if(s=d,s===h){c?c===1?(s=i1(_s(s),e,t),ba(s,e,t,i,o,l,2)):c===2&&r1(s,e,t,i,o,l):ba(_s(s),e,t,i,o,l,1);break}}}function t1(s){const e=s.prev,t=s,i=s.next;if(Qt(e,t,i)>=0)return!1;const o=e.x,l=t.x,c=i.x,h=e.y,f=t.y,d=i.y,m=o<l?o<c?o:c:l<c?l:c,g=h<f?h<d?h:d:f<d?f:d,v=o>l?o>c?o:c:l>c?l:c,x=h>f?h>d?h:d:f>d?f:d;let M=i.next;for(;M!==e;){if(M.x>=m&&M.x<=v&&M.y>=g&&M.y<=x&&po(o,h,l,f,c,d,M.x,M.y)&&Qt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function n1(s,e,t,i){const o=s.prev,l=s,c=s.next;if(Qt(o,l,c)>=0)return!1;const h=o.x,f=l.x,d=c.x,m=o.y,g=l.y,v=c.y,x=h<f?h<d?h:d:f<d?f:d,M=m<g?m<v?m:v:g<v?g:v,w=h>f?h>d?h:d:f>d?f:d,S=m>g?m>v?m:v:g>v?g:v,y=Wf(x,M,e,t,i),L=Wf(w,S,e,t,i);let C=s.prevZ,T=s.nextZ;for(;C&&C.z>=y&&T&&T.z<=L;){if(C.x>=x&&C.x<=w&&C.y>=M&&C.y<=S&&C!==o&&C!==c&&po(h,m,f,g,d,v,C.x,C.y)&&Qt(C.prev,C,C.next)>=0||(C=C.prevZ,T.x>=x&&T.x<=w&&T.y>=M&&T.y<=S&&T!==o&&T!==c&&po(h,m,f,g,d,v,T.x,T.y)&&Qt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;C&&C.z>=y;){if(C.x>=x&&C.x<=w&&C.y>=M&&C.y<=S&&C!==o&&C!==c&&po(h,m,f,g,d,v,C.x,C.y)&&Qt(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;T&&T.z<=L;){if(T.x>=x&&T.x<=w&&T.y>=M&&T.y<=S&&T!==o&&T!==c&&po(h,m,f,g,d,v,T.x,T.y)&&Qt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function i1(s,e,t){let i=s;do{const o=i.prev,l=i.next.next;!Ic(o,l)&&Zg(o,i,i.next,l)&&Pa(o,l)&&Pa(l,o)&&(e.push(o.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),La(i),La(i.next),i=s=l),i=i.next}while(i!==s);return _s(i)}function r1(s,e,t,i,o,l){let c=s;do{let h=c.next.next;for(;h!==c.prev;){if(c.i!==h.i&&d1(c,h)){let f=Kg(c,h);c=_s(c,c.next),f=_s(f,f.next),ba(c,e,t,i,o,l,0),ba(f,e,t,i,o,l,0);return}h=h.next}c=c.next}while(c!==s)}function s1(s,e,t,i){const o=[];let l,c,h,f,d;for(l=0,c=e.length;l<c;l++)h=e[l]*i,f=l<c-1?e[l+1]*i:s.length,d=$g(s,h,f,i,!1),d===d.next&&(d.steiner=!0),o.push(f1(d));for(o.sort(o1),l=0;l<o.length;l++)t=a1(o[l],t);return t}function o1(s,e){return s.x-e.x}function a1(s,e){const t=l1(s,e);if(!t)return e;const i=Kg(t,s);return _s(i,i.next),_s(t,t.next)}function l1(s,e){let t=e,i=-1/0,o;const l=s.x,c=s.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=l&&v>i&&(i=v,o=t.x<t.next.x?t:t.next,v===l))return o}t=t.next}while(t!==e);if(!o)return null;const h=o,f=o.x,d=o.y;let m=1/0,g;t=o;do l>=t.x&&t.x>=f&&l!==t.x&&po(c<d?l:i,c,f,d,c<d?i:l,c,t.x,t.y)&&(g=Math.abs(c-t.y)/(l-t.x),Pa(t,s)&&(g<m||g===m&&(t.x>o.x||t.x===o.x&&c1(o,t)))&&(o=t,m=g)),t=t.next;while(t!==h);return o}function c1(s,e){return Qt(s.prev,s,e.prev)<0&&Qt(e.next,s,s.next)<0}function u1(s,e,t,i){let o=s;do o.z===0&&(o.z=Wf(o.x,o.y,e,t,i)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,h1(o)}function h1(s){let e,t,i,o,l,c,h,f,d=1;do{for(t=s,s=null,l=null,c=0;t;){for(c++,i=t,h=0,e=0;e<d&&(h++,i=i.nextZ,!!i);e++);for(f=d;h>0||f>0&&i;)h!==0&&(f===0||!i||t.z<=i.z)?(o=t,t=t.nextZ,h--):(o=i,i=i.nextZ,f--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;t=i}l.nextZ=null,d*=2}while(c>1);return s}function Wf(s,e,t,i,o){return s=(s-t)*o|0,e=(e-i)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function f1(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function po(s,e,t,i,o,l,c,h){return(o-c)*(e-h)>=(s-c)*(l-h)&&(s-c)*(i-h)>=(t-c)*(e-h)&&(t-c)*(l-h)>=(o-c)*(i-h)}function d1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!p1(s,e)&&(Pa(s,e)&&Pa(e,s)&&m1(s,e)&&(Qt(s.prev,s,e.prev)||Qt(s,e.prev,e))||Ic(s,e)&&Qt(s.prev,s,s.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ic(s,e){return s.x===e.x&&s.y===e.y}function Zg(s,e,t,i){const o=pc(Qt(s,e,t)),l=pc(Qt(s,e,i)),c=pc(Qt(t,i,s)),h=pc(Qt(t,i,e));return!!(o!==l&&c!==h||o===0&&dc(s,t,e)||l===0&&dc(s,i,e)||c===0&&dc(t,s,i)||h===0&&dc(t,e,i))}function dc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function pc(s){return s>0?1:s<0?-1:0}function p1(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Zg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Pa(s,e){return Qt(s.prev,s,s.next)<0?Qt(s,e,s.next)>=0&&Qt(s,s.prev,e)>=0:Qt(s,e,s.prev)<0||Qt(s,s.next,e)<0}function m1(s,e){let t=s,i=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function Kg(s,e){const t=new Xf(s.i,s.x,s.y),i=new Xf(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,i.next=t,t.prev=i,l.next=i,i.prev=l,i}function T0(s,e,t,i){const o=new Xf(s,e,t);return i?(o.next=i.next,o.prev=i,i.next.prev=o,i.next=o):(o.prev=o,o.next=o),o}function La(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Xf(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function g1(s,e,t,i){let o=0;for(let l=e,c=t-i;l<t;l+=i)o+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return o}class Ta{static area(e){const t=e.length;let i=0;for(let o=t-1,l=0;l<t;o=l++)i+=e[o].x*e[l].y-e[l].x*e[o].y;return i*.5}static isClockWise(e){return Ta.area(e)<0}static triangulateShape(e,t){const i=[],o=[],l=[];A0(e),C0(i,e);let c=e.length;t.forEach(A0);for(let f=0;f<t.length;f++)o.push(c),c+=t[f].length,C0(i,t[f]);const h=e1.triangulate(i,o);for(let f=0;f<h.length;f+=3)l.push(h.slice(f,f+3));return l}}function A0(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function C0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class rr extends Ia{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,o=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rr(e.radius,e.detail)}}class ud extends Ia{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ud(e.radius,e.detail)}}class mi extends yn{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const l=e/2,c=t/2,h=Math.floor(i),f=Math.floor(o),d=h+1,m=f+1,g=e/h,v=t/f,x=[],M=[],w=[],S=[];for(let y=0;y<m;y++){const L=y*v-c;for(let C=0;C<d;C++){const T=C*g-l;M.push(T,-L,0),w.push(0,0,1),S.push(C/h),S.push(1-y/f)}}for(let y=0;y<f;y++)for(let L=0;L<h;L++){const C=L+d*y,T=L+d*(y+1),N=L+1+d*(y+1),I=L+1+d*y;x.push(C,T,I),x.push(T,N,I)}this.setIndex(x),this.setAttribute("position",new Gt(M,3)),this.setAttribute("normal",new Gt(w,3)),this.setAttribute("uv",new Gt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nc extends yn{constructor(e=new cd([new Ie(0,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],o=[],l=[],c=[];let h=0,f=0;if(Array.isArray(e)===!1)d(e);else for(let m=0;m<e.length;m++)d(e[m]),this.addGroup(h,f,m),h+=f,f=0;this.setIndex(i),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2));function d(m){const g=o.length/3,v=m.extractPoints(t);let x=v.shape;const M=v.holes;Ta.isClockWise(x)===!1&&(x=x.reverse());for(let S=0,y=M.length;S<y;S++){const L=M[S];Ta.isClockWise(L)===!0&&(M[S]=L.reverse())}const w=Ta.triangulateShape(x,M);for(let S=0,y=M.length;S<y;S++){const L=M[S];x=x.concat(L)}for(let S=0,y=x.length;S<y;S++){const L=x[S];o.push(L.x,L.y,0),l.push(0,0,1),c.push(L.x,L.y)}for(let S=0,y=w.length;S<y;S++){const L=w[S],C=L[0]+g,T=L[1]+g,N=L[2]+g;i.push(C,T,N),f+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return v1(t,e)}static fromJSON(e,t){const i=[];for(let o=0,l=e.shapes.length;o<l;o++){const c=t[e.shapes[o]];i.push(c)}return new Nc(i,e.curveSegments)}}function v1(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){const o=s[t];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}class sr extends yn{constructor(e=1,t=32,i=16,o=0,l=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:l,thetaStart:c,thetaLength:h},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(c+h,Math.PI);let d=0;const m=[],g=new U,v=new U,x=[],M=[],w=[],S=[];for(let y=0;y<=i;y++){const L=[],C=y/i;let T=0;y===0&&c===0?T=.5/t:y===i&&f===Math.PI&&(T=-.5/t);for(let N=0;N<=t;N++){const I=N/t;g.x=-e*Math.cos(o+I*l)*Math.sin(c+C*h),g.y=e*Math.cos(c+C*h),g.z=e*Math.sin(o+I*l)*Math.sin(c+C*h),M.push(g.x,g.y,g.z),v.copy(g).normalize(),w.push(v.x,v.y,v.z),S.push(I+T,1-C),L.push(d++)}m.push(L)}for(let y=0;y<i;y++)for(let L=0;L<t;L++){const C=m[y][L+1],T=m[y][L],N=m[y+1][L],I=m[y+1][L+1];(y!==0||c>0)&&x.push(C,T,I),(y!==i-1||f<Math.PI)&&x.push(T,N,I)}this.setIndex(x),this.setAttribute("position",new Gt(M,3)),this.setAttribute("normal",new Gt(w,3)),this.setAttribute("uv",new Gt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tr extends yn{constructor(e=1,t=.4,i=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:o,arc:l},i=Math.floor(i),o=Math.floor(o);const c=[],h=[],f=[],d=[],m=new U,g=new U,v=new U;for(let x=0;x<=i;x++)for(let M=0;M<=o;M++){const w=M/o*l,S=x/i*Math.PI*2;g.x=(e+t*Math.cos(S))*Math.cos(w),g.y=(e+t*Math.cos(S))*Math.sin(w),g.z=t*Math.sin(S),h.push(g.x,g.y,g.z),m.x=e*Math.cos(w),m.y=e*Math.sin(w),v.subVectors(g,m).normalize(),f.push(v.x,v.y,v.z),d.push(M/o),d.push(x/i)}for(let x=1;x<=i;x++)for(let M=1;M<=o;M++){const w=(o+1)*x+M-1,S=(o+1)*(x-1)+M-1,y=(o+1)*(x-1)+M,L=(o+1)*x+M;c.push(w,S,L),c.push(S,y,L)}this.setIndex(c),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class St extends ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cg,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jf extends St{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _1 extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class x1 extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Na extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class y1 extends Na{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Gh=new wt,R0=new U,b0=new U;class hd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new od,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;R0.setFromMatrixPosition(e.matrixWorld),t.position.copy(R0),b0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(b0),t.updateMatrixWorld(),Gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class S1 extends hd{constructor(){super(new Zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Ao*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(i!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=i,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class M1 extends Na{constructor(e,t,i=0,o=Math.PI/3,l=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=i,this.angle=o,this.penumbra=l,this.decay=c,this.map=null,this.shadow=new S1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const P0=new wt,_a=new U,Wh=new U;class E1 extends hd{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,o=this.matrix,l=e.distance||i.far;l!==i.far&&(i.far=l,i.updateProjectionMatrix()),_a.setFromMatrixPosition(e.matrixWorld),i.position.copy(_a),Wh.copy(i.position),Wh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Wh),i.updateMatrixWorld(),o.makeTranslation(-_a.x,-_a.y,-_a.z),P0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(P0)}}class Lc extends Na{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new E1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jg extends kg{constructor(e=-1,t=1,i=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=i-e,c=i+e,h=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,h-=m*this.view.offsetY,f=h-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,h,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class w1 extends hd{constructor(){super(new Jg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class L0 extends Na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new w1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class T1 extends Na{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class A1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class C1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=D0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=D0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function D0(){return performance.now()}function I0(s,e,t,i){const o=R1(i);switch(t){case Sg:return s*e;case Eg:return s*e;case wg:return s*e*2;case ed:return s*e/o.components*o.byteLength;case td:return s*e/o.components*o.byteLength;case Tg:return s*e*2/o.components*o.byteLength;case nd:return s*e*2/o.components*o.byteLength;case Mg:return s*e*3/o.components*o.byteLength;case Ci:return s*e*4/o.components*o.byteLength;case id:return s*e*4/o.components*o.byteLength;case xc:case yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Mc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:case _f:return Math.max(s,16)*Math.max(e,8)/4;case mf:case vf:return Math.max(s,8)*Math.max(e,8)/2;case xf:case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Af:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ec:case Ff:case Of:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ag:case kf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case zf:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R1(s){switch(s){case ar:case _g:return{byteLength:1,components:1};case Ca:case xg:case Da:return{byteLength:2,components:1};case Jf:case Qf:return{byteLength:2,components:4};case gs:case Kf:case Ui:return{byteLength:4,components:1};case yg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qg(){let s=null,e=!1,t=null,i=null;function o(l,c){t(l,c),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function b1(s){const e=new WeakMap;function t(h,f){const d=h.array,m=h.usage,g=d.byteLength,v=s.createBuffer();s.bindBuffer(f,v),s.bufferData(f,d,m),h.onUploadCallback();let x;if(d instanceof Float32Array)x=s.FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=s.SHORT;else if(d instanceof Uint32Array)x=s.UNSIGNED_INT;else if(d instanceof Int32Array)x=s.INT;else if(d instanceof Int8Array)x=s.BYTE;else if(d instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:g}}function i(h,f,d){const m=f.array,g=f.updateRanges;if(s.bindBuffer(d,h),g.length===0)s.bufferSubData(d,0,m);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],w=g[x];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++v,g[v]=w)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const w=g[x];s.bufferSubData(d,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(s.deleteBuffer(f.buffer),e.delete(h))}function c(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const m=e.get(h);(!m||m.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,t(h,f));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,h,f),d.version=h.version}}return{get:o,remove:l,update:c}}var P1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,D1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,G1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,W1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Q1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oS="gl_FragColor = linearToOutputTexel( gl_FragColor );",aS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ES=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_M=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:P1,alphahash_pars_fragment:L1,alphamap_fragment:D1,alphamap_pars_fragment:I1,alphatest_fragment:N1,alphatest_pars_fragment:U1,aomap_fragment:F1,aomap_pars_fragment:O1,batching_pars_vertex:k1,batching_vertex:z1,begin_vertex:B1,beginnormal_vertex:H1,bsdfs:V1,iridescence_fragment:G1,bumpmap_pars_fragment:W1,clipping_planes_fragment:X1,clipping_planes_pars_fragment:j1,clipping_planes_pars_vertex:Y1,clipping_planes_vertex:q1,color_fragment:$1,color_pars_fragment:Z1,color_pars_vertex:K1,color_vertex:J1,common:Q1,cube_uv_reflection_fragment:eS,defaultnormal_vertex:tS,displacementmap_pars_vertex:nS,displacementmap_vertex:iS,emissivemap_fragment:rS,emissivemap_pars_fragment:sS,colorspace_fragment:oS,colorspace_pars_fragment:aS,envmap_fragment:lS,envmap_common_pars_fragment:cS,envmap_pars_fragment:uS,envmap_pars_vertex:hS,envmap_physical_pars_fragment:MS,envmap_vertex:fS,fog_vertex:dS,fog_pars_vertex:pS,fog_fragment:mS,fog_pars_fragment:gS,gradientmap_pars_fragment:vS,lightmap_pars_fragment:_S,lights_lambert_fragment:xS,lights_lambert_pars_fragment:yS,lights_pars_begin:SS,lights_toon_fragment:ES,lights_toon_pars_fragment:wS,lights_phong_fragment:TS,lights_phong_pars_fragment:AS,lights_physical_fragment:CS,lights_physical_pars_fragment:RS,lights_fragment_begin:bS,lights_fragment_maps:PS,lights_fragment_end:LS,logdepthbuf_fragment:DS,logdepthbuf_pars_fragment:IS,logdepthbuf_pars_vertex:NS,logdepthbuf_vertex:US,map_fragment:FS,map_pars_fragment:OS,map_particle_fragment:kS,map_particle_pars_fragment:zS,metalnessmap_fragment:BS,metalnessmap_pars_fragment:HS,morphinstance_vertex:VS,morphcolor_vertex:GS,morphnormal_vertex:WS,morphtarget_pars_vertex:XS,morphtarget_vertex:jS,normal_fragment_begin:YS,normal_fragment_maps:qS,normal_pars_fragment:$S,normal_pars_vertex:ZS,normal_vertex:KS,normalmap_pars_fragment:JS,clearcoat_normal_fragment_begin:QS,clearcoat_normal_fragment_maps:eM,clearcoat_pars_fragment:tM,iridescence_pars_fragment:nM,opaque_fragment:iM,packing:rM,premultiplied_alpha_fragment:sM,project_vertex:oM,dithering_fragment:aM,dithering_pars_fragment:lM,roughnessmap_fragment:cM,roughnessmap_pars_fragment:uM,shadowmap_pars_fragment:hM,shadowmap_pars_vertex:fM,shadowmap_vertex:dM,shadowmask_pars_fragment:pM,skinbase_vertex:mM,skinning_pars_vertex:gM,skinning_vertex:vM,skinnormal_vertex:_M,specularmap_fragment:xM,specularmap_pars_fragment:yM,tonemapping_fragment:SM,tonemapping_pars_fragment:MM,transmission_fragment:EM,transmission_pars_fragment:wM,uv_pars_fragment:TM,uv_pars_vertex:AM,uv_vertex:CM,worldpos_vertex:RM,background_vert:bM,background_frag:PM,backgroundCube_vert:LM,backgroundCube_frag:DM,cube_vert:IM,cube_frag:NM,depth_vert:UM,depth_frag:FM,distanceRGBA_vert:OM,distanceRGBA_frag:kM,equirect_vert:zM,equirect_frag:BM,linedashed_vert:HM,linedashed_frag:VM,meshbasic_vert:GM,meshbasic_frag:WM,meshlambert_vert:XM,meshlambert_frag:jM,meshmatcap_vert:YM,meshmatcap_frag:qM,meshnormal_vert:$M,meshnormal_frag:ZM,meshphong_vert:KM,meshphong_frag:JM,meshphysical_vert:QM,meshphysical_frag:eE,meshtoon_vert:tE,meshtoon_frag:nE,points_vert:iE,points_frag:rE,shadow_vert:sE,shadow_frag:oE,sprite_vert:aE,sprite_frag:lE},Pe={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ii={basic:{uniforms:kn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:kn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ut(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:kn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:kn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:kn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ut(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:kn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:kn([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:kn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:kn([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:kn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:kn([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:kn([Pe.common,Pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:kn([Pe.lights,Pe.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ii.physical={uniforms:kn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const mc={r:0,b:0,g:0},ls=new Pn,cE=new wt;function uE(s,e,t,i,o,l,c){const h=new ut(0);let f=l===!0?0:1,d,m,g=null,v=0,x=null;function M(C){let T=C.isScene===!0?C.background:null;return T&&T.isTexture&&(T=(C.backgroundBlurriness>0?t:e).get(T)),T}function w(C){let T=!1;const N=M(C);N===null?y(h,f):N&&N.isColor&&(y(N,1),T=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(C,T){const N=M(T);N&&(N.isCubeTexture||N.mapping===Dc)?(m===void 0&&(m=new Ue(new Oi(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Co(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),ls.copy(T.backgroundRotation),ls.x*=-1,ls.y*=-1,ls.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.material.uniforms.envMap.value=N,m.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(cE.makeRotationFromEuler(ls)),m.material.toneMapped=Dt.getTransfer(N.colorSpace)!==Bt,(g!==N||v!==N.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,g=N,v=N.version,x=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Ue(new mi(2,2),new lr({name:"BackgroundMaterial",uniforms:Co(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.toneMapped=Dt.getTransfer(N.colorSpace)!==Bt,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||v!==N.version||x!==s.toneMapping)&&(d.material.needsUpdate=!0,g=N,v=N.version,x=s.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function y(C,T){C.getRGB(mc,Og(s)),i.buffers.color.setClear(mc.r,mc.g,mc.b,T,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return h},setClearColor:function(C,T=1){h.set(C),f=T,y(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,y(h,f)},render:w,addToRenderList:S,dispose:L}}function hE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=v(null);let l=o,c=!1;function h(A,B,ee,K,le){let he=!1;const ae=g(K,ee,B);l!==ae&&(l=ae,d(l.object)),he=x(A,K,ee,le),he&&M(A,K,ee,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,T(A,B,ee,K),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function f(){return s.createVertexArray()}function d(A){return s.bindVertexArray(A)}function m(A){return s.deleteVertexArray(A)}function g(A,B,ee){const K=ee.wireframe===!0;let le=i[A.id];le===void 0&&(le={},i[A.id]=le);let he=le[B.id];he===void 0&&(he={},le[B.id]=he);let ae=he[K];return ae===void 0&&(ae=v(f()),he[K]=ae),ae}function v(A){const B=[],ee=[],K=[];for(let le=0;le<t;le++)B[le]=0,ee[le]=0,K[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ee,attributeDivisors:K,object:A,attributes:{},index:null}}function x(A,B,ee,K){const le=l.attributes,he=B.attributes;let ae=0;const ue=ee.getAttributes();for(const G in ue)if(ue[G].location>=0){const oe=le[G];let k=he[G];if(k===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(k=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(k=A.instanceColor)),oe===void 0||oe.attribute!==k||k&&oe.data!==k.data)return!0;ae++}return l.attributesNum!==ae||l.index!==K}function M(A,B,ee,K){const le={},he=B.attributes;let ae=0;const ue=ee.getAttributes();for(const G in ue)if(ue[G].location>=0){let oe=he[G];oe===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(oe=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(oe=A.instanceColor));const k={};k.attribute=oe,oe&&oe.data&&(k.data=oe.data),le[G]=k,ae++}l.attributes=le,l.attributesNum=ae,l.index=K}function w(){const A=l.newAttributes;for(let B=0,ee=A.length;B<ee;B++)A[B]=0}function S(A){y(A,0)}function y(A,B){const ee=l.newAttributes,K=l.enabledAttributes,le=l.attributeDivisors;ee[A]=1,K[A]===0&&(s.enableVertexAttribArray(A),K[A]=1),le[A]!==B&&(s.vertexAttribDivisor(A,B),le[A]=B)}function L(){const A=l.newAttributes,B=l.enabledAttributes;for(let ee=0,K=B.length;ee<K;ee++)B[ee]!==A[ee]&&(s.disableVertexAttribArray(ee),B[ee]=0)}function C(A,B,ee,K,le,he,ae){ae===!0?s.vertexAttribIPointer(A,B,ee,le,he):s.vertexAttribPointer(A,B,ee,K,le,he)}function T(A,B,ee,K){w();const le=K.attributes,he=ee.getAttributes(),ae=B.defaultAttributeValues;for(const ue in he){const G=he[ue];if(G.location>=0){let ce=le[ue];if(ce===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){const oe=ce.normalized,k=ce.itemSize,re=e.get(ce);if(re===void 0)continue;const Oe=re.buffer,Q=re.type,fe=re.bytesPerElement,Ee=Q===s.INT||Q===s.UNSIGNED_INT||ce.gpuType===Kf;if(ce.isInterleavedBufferAttribute){const xe=ce.data,Ae=xe.stride,ke=ce.offset;if(xe.isInstancedInterleavedBuffer){for(let tt=0;tt<G.locationSize;tt++)y(G.location+tt,xe.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let tt=0;tt<G.locationSize;tt++)S(G.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let tt=0;tt<G.locationSize;tt++)C(G.location+tt,k/G.locationSize,Q,oe,Ae*fe,(ke+k/G.locationSize*tt)*fe,Ee)}else{if(ce.isInstancedBufferAttribute){for(let xe=0;xe<G.locationSize;xe++)y(G.location+xe,ce.meshPerAttribute);A.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<G.locationSize;xe++)S(G.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let xe=0;xe<G.locationSize;xe++)C(G.location+xe,k/G.locationSize,Q,oe,k*fe,k/G.locationSize*xe*fe,Ee)}}else if(ae!==void 0){const oe=ae[ue];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(G.location,oe);break;case 3:s.vertexAttrib3fv(G.location,oe);break;case 4:s.vertexAttrib4fv(G.location,oe);break;default:s.vertexAttrib1fv(G.location,oe)}}}}L()}function N(){z();for(const A in i){const B=i[A];for(const ee in B){const K=B[ee];for(const le in K)m(K[le].object),delete K[le];delete B[ee]}delete i[A]}}function I(A){if(i[A.id]===void 0)return;const B=i[A.id];for(const ee in B){const K=B[ee];for(const le in K)m(K[le].object),delete K[le];delete B[ee]}delete i[A.id]}function O(A){for(const B in i){const ee=i[B];if(ee[A.id]===void 0)continue;const K=ee[A.id];for(const le in K)m(K[le].object),delete K[le];delete ee[A.id]}}function z(){P(),c=!0,l!==o&&(l=o,d(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:z,resetDefaultState:P,dispose:N,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:S,disableUnusedAttributes:L}}function fE(s,e,t){let i;function o(d){i=d}function l(d,m){s.drawArrays(i,d,m),t.update(m,i,1)}function c(d,m,g){g!==0&&(s.drawArraysInstanced(i,d,m,g),t.update(m,i,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,i,1)}function f(d,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)c(d[M],m[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,m,0,v,0,g);let M=0;for(let w=0;w<g;w++)M+=m[w]*v[w];t.update(M,i,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function dE(s,e,t,i){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==Ci&&i.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const z=O===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ar&&i.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ui&&!z)}function f(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=f(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=M>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:C,maxFragmentUniforms:T,vertexTextures:N,maxSamples:I}}function pE(s){const e=this;let t=null,i=0,o=!1,l=!1;const c=new us,h=new ht,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||i!==0||o;return o=v,i=g.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,w=g.clipIntersection,S=g.clipShadows,y=s.get(g);if(!o||M===null||M.length===0||l&&!S)l?m(null):d();else{const L=l?0:i,C=L*4;let T=y.clippingState||null;f.value=T,T=m(M,v,C,x);for(let N=0;N!==C;++N)T[N]=t[N];y.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function d(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,v,x,M){const w=g!==null?g.length:0;let S=null;if(w!==0){if(S=f.value,M!==!0||S===null){const y=x+w*4,L=v.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let C=0,T=x;C!==w;++C,T+=4)c.copy(g[C]).applyMatrix4(L,h),c.normal.toArray(S,T),S[T+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function mE(s){let e=new WeakMap;function t(c,h){return h===ff?c.mapping=So:h===df&&(c.mapping=Mo),c}function i(c){if(c&&c.isTexture){const h=c.mapping;if(h===ff||h===df)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const d=new Iy(f.height);return d.fromEquirectangularTexture(s,c),e.set(c,d),c.addEventListener("dispose",o),t(d.texture,c.mapping)}else return null}}return c}function o(c){const h=c.target;h.removeEventListener("dispose",o);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function l(){e=new WeakMap}return{get:i,dispose:l}}const mo=4,N0=[.125,.215,.35,.446,.526,.582],ds=20,Xh=new Jg,U0=new ut;let jh=null,Yh=0,qh=0,$h=!1;const hs=(1+Math.sqrt(5))/2,uo=1/hs,F0=[new U(-hs,uo,0),new U(hs,uo,0),new U(-uo,0,hs),new U(uo,0,hs),new U(0,hs,-uo),new U(0,hs,uo),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class O0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){jh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jh,Yh,qh),this._renderer.xr.enabled=$h,e.scissorTest=!1,gc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===So||e.mapping===Mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Da,format:Ci,colorSpace:To,depthBuffer:!1},o=k0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k0(e,t,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gE(l)),this._blurMaterial=vE(l,e,t)}return o}_compileMaterial(e){const t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,Xh)}_sceneToCubeUV(e,t,i,o){const h=new Zn(90,1,t,i),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(U0),m.toneMapping=zr,m.autoClear=!1;const x=new nr({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),M=new Ue(new Oi,x);let w=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,w=!0):(x.color.copy(U0),w=!0);for(let y=0;y<6;y++){const L=y%3;L===0?(h.up.set(0,f[y],0),h.lookAt(d[y],0,0)):L===1?(h.up.set(0,0,f[y]),h.lookAt(0,d[y],0)):(h.up.set(0,f[y],0),h.lookAt(0,0,d[y]));const C=this._cubeSize;gc(o,L*C,y>2?C:0,C,C),m.setRenderTarget(o),w&&m.render(M,h),m.render(e,h)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===So||e.mapping===Mo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=B0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Ue(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=e;const f=this._cubeSize;gc(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Xh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=F0[(o-l-1)%F0.length];this._blur(e,l-1,l,c,h)}t.autoClear=i}_blur(e,t,i,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",l),this._halfBlur(c,e,i,i,o,"longitudinal",l)}_halfBlur(e,t,i,o,l,c,h){const f=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Ue(this._lodPlanes[o],d),v=d.uniforms,x=this._sizeLods[i]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ds-1),w=l/M,S=isFinite(l)?1+Math.floor(m*w):ds;S>ds&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ds}`);const y=[];let L=0;for(let O=0;O<ds;++O){const z=O/w,P=Math.exp(-z*z/2);y.push(P),O===0?L+=P:O<S&&(L+=2*P)}for(let O=0;O<y.length;O++)y[O]=y[O]/L;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=c==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:C}=this;v.dTheta.value=M,v.mipInt.value=C-i;const T=this._sizeLods[o],N=3*T*(o>C-mo?o-C+mo:0),I=4*(this._cubeSize-T);gc(t,N,I,3*T,2*T),f.setRenderTarget(t),f.render(g,Xh)}}function gE(s){const e=[],t=[],i=[];let o=s;const l=s-mo+1+N0.length;for(let c=0;c<l;c++){const h=Math.pow(2,o);t.push(h);let f=1/h;c>s-mo?f=N0[c-s+mo-1]:c===0&&(f=0),i.push(f);const d=1/(h-2),m=-d,g=1+d,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,w=3,S=2,y=1,L=new Float32Array(w*M*x),C=new Float32Array(S*M*x),T=new Float32Array(y*M*x);for(let I=0;I<x;I++){const O=I%3*2/3-1,z=I>2?0:-1,P=[O,z,0,O+2/3,z,0,O+2/3,z+1,0,O,z,0,O+2/3,z+1,0,O,z+1,0];L.set(P,w*M*I),C.set(v,S*M*I);const A=[I,I,I,I,I,I];T.set(A,y*M*I)}const N=new yn;N.setAttribute("position",new oi(L,w)),N.setAttribute("uv",new oi(C,S)),N.setAttribute("faceIndex",new oi(T,y)),e.push(N),o>mo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function k0(s,e,t){const i=new vs(s,e,t);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gc(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function vE(s,e,t){const i=new Float32Array(ds),o=new U(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function z0(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function B0(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function fd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _E(s){let e=new WeakMap,t=null;function i(h){if(h&&h.isTexture){const f=h.mapping,d=f===ff||f===df,m=f===So||f===Mo;if(d||m){let g=e.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return t===null&&(t=new O0(s)),g=d?t.fromEquirectangular(h,g):t.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const x=h.image;return d&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new O0(s)),g=d?t.fromEquirectangular(h):t.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",l),g.texture):null}}}return h}function o(h){let f=0;const d=6;for(let m=0;m<d;m++)h[m]!==void 0&&f++;return f===d}function l(h){const f=h.target;f.removeEventListener("dispose",l);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function xE(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&fo("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function yE(s,e,t,i){const o={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",c),delete o[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function h(g,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function f(g){const v=g.attributes;for(const x in v)e.update(v[x],s.ARRAY_BUFFER)}function d(g){const v=[],x=g.index,M=g.attributes.position;let w=0;if(x!==null){const L=x.array;w=x.version;for(let C=0,T=L.length;C<T;C+=3){const N=L[C+0],I=L[C+1],O=L[C+2];v.push(N,I,I,O,O,N)}}else if(M!==void 0){const L=M.array;w=M.version;for(let C=0,T=L.length/3-1;C<T;C+=3){const N=C+0,I=C+1,O=C+2;v.push(N,I,I,O,O,N)}}else return;const S=new(bg(v)?Fg:Ug)(v,1);S.version=w;const y=l.get(g);y&&e.remove(y),l.set(g,S)}function m(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&d(g)}else d(g);return l.get(g)}return{get:h,update:f,getWireframeAttribute:m}}function SE(s,e,t){let i;function o(v){i=v}let l,c;function h(v){l=v.type,c=v.bytesPerElement}function f(v,x){s.drawElements(i,x,l,v*c),t.update(x,i,1)}function d(v,x,M){M!==0&&(s.drawElementsInstanced(i,x,l,v*c,M),t.update(x,i,M))}function m(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,l,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,i,1)}function g(v,x,M,w){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)d(v[y]/c,x[y],w[y]);else{S.multiDrawElementsInstancedWEBGL(i,x,0,l,v,0,w,0,M);let y=0;for(let L=0;L<M;L++)y+=x[L]*w[L];t.update(y,i,1)}}this.setMode=o,this.setIndex=h,this.render=f,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function ME(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,h){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function EE(s,e,t){const i=new WeakMap,o=new Ht;function l(c,h,f){const d=c.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0;let v=i.get(h);if(v===void 0||v.count!==g){let A=function(){z.dispose(),i.delete(h),h.removeEventListener("dispose",A)};var x=A;v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let T=0;M===!0&&(T=1),w===!0&&(T=2),S===!0&&(T=3);let N=h.attributes.position.count*T,I=1;N>e.maxTextureSize&&(I=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const O=new Float32Array(N*I*4*g),z=new Lg(O,N,I,g);z.type=Ui,z.needsUpdate=!0;const P=T*4;for(let B=0;B<g;B++){const ee=y[B],K=L[B],le=C[B],he=N*I*4*B;for(let ae=0;ae<ee.count;ae++){const ue=ae*P;M===!0&&(o.fromBufferAttribute(ee,ae),O[he+ue+0]=o.x,O[he+ue+1]=o.y,O[he+ue+2]=o.z,O[he+ue+3]=0),w===!0&&(o.fromBufferAttribute(K,ae),O[he+ue+4]=o.x,O[he+ue+5]=o.y,O[he+ue+6]=o.z,O[he+ue+7]=0),S===!0&&(o.fromBufferAttribute(le,ae),O[he+ue+8]=o.x,O[he+ue+9]=o.y,O[he+ue+10]=o.z,O[he+ue+11]=le.itemSize===4?o.w:1)}}v={count:g,texture:z,size:new Ie(N,I)},i.set(h,v),h.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<d.length;S++)M+=d[S];const w=h.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",d)}f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function wE(s,e,t,i){let o=new WeakMap;function l(f){const d=i.render.frame,m=f.geometry,g=e.get(f,m);if(o.get(g)!==d&&(e.update(g),o.set(g,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==d&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return g}function c(){o=new WeakMap}function h(f){const d=f.target;d.removeEventListener("dispose",h),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:c}}const ev=new bn,H0=new Wg(1,1),tv=new Lg,nv=new vy,iv=new zg,V0=[],G0=[],W0=new Float32Array(16),X0=new Float32Array(9),j0=new Float32Array(4);function Po(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let l=V0[o];if(l===void 0&&(l=new Float32Array(o),V0[o]=l),e!==0){i.toArray(l,0);for(let c=1,h=0;c!==e;++c)h+=t,s[c].toArray(l,h)}return l}function hn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function fn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Uc(s,e){let t=G0[e];t===void 0&&(t=new Int32Array(e),G0[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function TE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function AE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2fv(this.addr,e),fn(t,e)}}function CE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;s.uniform3fv(this.addr,e),fn(t,e)}}function RE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4fv(this.addr,e),fn(t,e)}}function bE(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,i))return;j0.set(i),s.uniformMatrix2fv(this.addr,!1,j0),fn(t,i)}}function PE(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,i))return;X0.set(i),s.uniformMatrix3fv(this.addr,!1,X0),fn(t,i)}}function LE(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,i))return;W0.set(i),s.uniformMatrix4fv(this.addr,!1,W0),fn(t,i)}}function DE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function IE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2iv(this.addr,e),fn(t,e)}}function NE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3iv(this.addr,e),fn(t,e)}}function UE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4iv(this.addr,e),fn(t,e)}}function FE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function OE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2uiv(this.addr,e),fn(t,e)}}function kE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3uiv(this.addr,e),fn(t,e)}}function zE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4uiv(this.addr,e),fn(t,e)}}function BE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(H0.compareFunction=Rg,l=H0):l=ev,t.setTexture2D(e||l,o)}function HE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||nv,o)}function VE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||iv,o)}function GE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||tv,o)}function WE(s){switch(s){case 5126:return TE;case 35664:return AE;case 35665:return CE;case 35666:return RE;case 35674:return bE;case 35675:return PE;case 35676:return LE;case 5124:case 35670:return DE;case 35667:case 35671:return IE;case 35668:case 35672:return NE;case 35669:case 35673:return UE;case 5125:return FE;case 36294:return OE;case 36295:return kE;case 36296:return zE;case 35678:case 36198:case 36298:case 36306:case 35682:return BE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return VE;case 36289:case 36303:case 36311:case 36292:return GE}}function XE(s,e){s.uniform1fv(this.addr,e)}function jE(s,e){const t=Po(e,this.size,2);s.uniform2fv(this.addr,t)}function YE(s,e){const t=Po(e,this.size,3);s.uniform3fv(this.addr,t)}function qE(s,e){const t=Po(e,this.size,4);s.uniform4fv(this.addr,t)}function $E(s,e){const t=Po(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ZE(s,e){const t=Po(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function KE(s,e){const t=Po(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function JE(s,e){s.uniform1iv(this.addr,e)}function QE(s,e){s.uniform2iv(this.addr,e)}function ew(s,e){s.uniform3iv(this.addr,e)}function tw(s,e){s.uniform4iv(this.addr,e)}function nw(s,e){s.uniform1uiv(this.addr,e)}function iw(s,e){s.uniform2uiv(this.addr,e)}function rw(s,e){s.uniform3uiv(this.addr,e)}function sw(s,e){s.uniform4uiv(this.addr,e)}function ow(s,e,t){const i=this.cache,o=e.length,l=Uc(t,o);hn(i,l)||(s.uniform1iv(this.addr,l),fn(i,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||ev,l[c])}function aw(s,e,t){const i=this.cache,o=e.length,l=Uc(t,o);hn(i,l)||(s.uniform1iv(this.addr,l),fn(i,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||nv,l[c])}function lw(s,e,t){const i=this.cache,o=e.length,l=Uc(t,o);hn(i,l)||(s.uniform1iv(this.addr,l),fn(i,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||iv,l[c])}function cw(s,e,t){const i=this.cache,o=e.length,l=Uc(t,o);hn(i,l)||(s.uniform1iv(this.addr,l),fn(i,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||tv,l[c])}function uw(s){switch(s){case 5126:return XE;case 35664:return jE;case 35665:return YE;case 35666:return qE;case 35674:return $E;case 35675:return ZE;case 35676:return KE;case 5124:case 35670:return JE;case 35667:case 35671:return QE;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 36294:return iw;case 36295:return rw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return cw}}class hw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=WE(t.type)}}class fw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uw(t.type)}}class dw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const h=o[l];h.setValue(e,t[h.id],i)}}}const Zh=/(\w+)(\])?(\[|\.)?/g;function Y0(s,e){s.seq.push(e),s.map[e.id]=e}function pw(s,e,t){const i=s.name,o=i.length;for(Zh.lastIndex=0;;){const l=Zh.exec(i),c=Zh.lastIndex;let h=l[1];const f=l[2]==="]",d=l[3];if(f&&(h=h|0),d===void 0||d==="["&&c+2===o){Y0(t,d===void 0?new hw(h,s,e):new fw(h,s,e));break}else{let g=t.map[h];g===void 0&&(g=new dw(h),Y0(t,g)),t=g}}}class Tc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);pw(l,c,this)}}setValue(e,t,i,o){const l=this.map[t];l!==void 0&&l.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let l=0,c=t.length;l!==c;++l){const h=t[l],f=i[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function q0(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const mw=37297;let gw=0;function vw(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const h=c+1;i.push(`${h===e?">":" "} ${h}: ${t[c]}`)}return i.join(`
`)}const $0=new ht;function _w(s){Dt._getMatrix($0,Dt.workingColorSpace,s);const e=`mat3( ${$0.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(s)){case Cc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Z0(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(i&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+vw(s.getShaderSource(e),c)}else return o}function xw(s,e){const t=_w(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function yw(s,e){let t;switch(e){case bx:t="Linear";break;case Px:t="Reinhard";break;case Lx:t="Cineon";break;case gg:t="ACESFilmic";break;case Ix:t="AgX";break;case Nx:t="Neutral";break;case Dx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vc=new U;function Sw(){Dt.getLuminanceCoefficients(vc);const s=vc.x.toFixed(4),e=vc.y.toFixed(4),t=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function Ew(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ww(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const l=s.getActiveAttrib(e,o),c=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:h}}return t}function ya(s){return s!==""}function K0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(s){return s.replace(Tw,Cw)}const Aw=new Map;function Cw(s,e){let t=ft[e];if(t===void 0){const i=Aw.get(e);if(i!==void 0)t=ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yf(t)}const Rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(s){return s.replace(Rw,bw)}function bw(s,e,t,i){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function eg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===dg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===pg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function Lw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case So:case Mo:e="ENVMAP_TYPE_CUBE";break;case Dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mo:e="ENVMAP_MODE_REFRACTION";break}return e}function Iw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mg:e="ENVMAP_BLENDING_MULTIPLY";break;case Cx:e="ENVMAP_BLENDING_MIX";break;case Rx:e="ENVMAP_BLENDING_ADD";break}return e}function Nw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Uw(s,e,t,i){const o=s.getContext(),l=t.defines;let c=t.vertexShader,h=t.fragmentShader;const f=Pw(t),d=Lw(t),m=Dw(t),g=Iw(t),v=Nw(t),x=Mw(t),M=Ew(l),w=o.createProgram();let S,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ya).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ya).join(`
`),y.length>0&&(y+=`
`)):(S=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),y=[eg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zr?"#define TONE_MAPPING":"",t.toneMapping!==zr?ft.tonemapping_pars_fragment:"",t.toneMapping!==zr?yw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,xw("linearToOutputTexel",t.outputColorSpace),Sw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),c=Yf(c),c=K0(c,t),c=J0(c,t),h=Yf(h),h=K0(h,t),h=J0(h,t),c=Q0(c),h=Q0(h),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const C=L+S+c,T=L+y+h,N=q0(o,o.VERTEX_SHADER,C),I=q0(o,o.FRAGMENT_SHADER,T);o.attachShader(w,N),o.attachShader(w,I),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function O(B){if(s.debug.checkShaderErrors){const ee=o.getProgramInfoLog(w).trim(),K=o.getShaderInfoLog(N).trim(),le=o.getShaderInfoLog(I).trim();let he=!0,ae=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,N,I);else{const ue=Z0(o,N,"vertex"),G=Z0(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ee+`
`+ue+`
`+G)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(K===""||le==="")&&(ae=!1);ae&&(B.diagnostics={runnable:he,programLog:ee,vertexShader:{log:K,prefix:S},fragmentShader:{log:le,prefix:y}})}o.deleteShader(N),o.deleteShader(I),z=new Tc(o,w),P=ww(o,w)}let z;this.getUniforms=function(){return z===void 0&&O(this),z};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(w,mw)),A},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=I,this}let Fw=0;class Ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kw(e),t.set(e,i)),i}}class kw{constructor(e){this.id=Fw++,this.code=e,this.usedTimes=0}}function zw(s,e,t,i,o,l,c){const h=new Ig,f=new Ow,d=new Set,m=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return d.add(P),P===0?"uv":`uv${P}`}function S(P,A,B,ee,K){const le=ee.fog,he=K.geometry,ae=P.isMeshStandardMaterial?ee.environment:null,ue=(P.isMeshStandardMaterial?t:e).get(P.envMap||ae),G=ue&&ue.mapping===Dc?ue.image.height:null,ce=M[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const oe=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,k=oe!==void 0?oe.length:0;let re=0;he.morphAttributes.position!==void 0&&(re=1),he.morphAttributes.normal!==void 0&&(re=2),he.morphAttributes.color!==void 0&&(re=3);let Oe,Q,fe,Ee;if(ce){const Ct=Ii[ce];Oe=Ct.vertexShader,Q=Ct.fragmentShader}else Oe=P.vertexShader,Q=P.fragmentShader,f.update(P),fe=f.getVertexShaderID(P),Ee=f.getFragmentShaderID(P);const xe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),ke=K.isInstancedMesh===!0,tt=K.isBatchedMesh===!0,kt=!!P.map,yt=!!P.matcap,Wt=!!ue,V=!!P.aoMap,Ln=!!P.lightMap,_t=!!P.bumpMap,mt=!!P.normalMap,Ze=!!P.displacementMap,Ut=!!P.emissiveMap,qe=!!P.metalnessMap,D=!!P.roughnessMap,R=P.anisotropy>0,J=P.clearcoat>0,me=P.dispersion>0,ve=P.iridescence>0,de=P.sheen>0,je=P.transmission>0,Ce=R&&!!P.anisotropyMap,ze=J&&!!P.clearcoatMap,dt=J&&!!P.clearcoatNormalMap,Me=J&&!!P.clearcoatRoughnessMap,Ve=ve&&!!P.iridescenceMap,Je=ve&&!!P.iridescenceThicknessMap,nt=de&&!!P.sheenColorMap,Ge=de&&!!P.sheenRoughnessMap,gt=!!P.specularMap,at=!!P.specularColorMap,Nt=!!P.specularIntensityMap,j=je&&!!P.transmissionMap,Re=je&&!!P.thicknessMap,se=!!P.gradientMap,pe=!!P.alphaMap,De=P.alphaTest>0,Le=!!P.alphaHash,lt=!!P.extensions;let jt=zr;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(jt=s.toneMapping);const ln={shaderID:ce,shaderType:P.type,shaderName:P.name,vertexShader:Oe,fragmentShader:Q,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:tt,batchingColor:tt&&K._colorsTexture!==null,instancing:ke,instancingColor:ke&&K.instanceColor!==null,instancingMorph:ke&&K.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:To,alphaToCoverage:!!P.alphaToCoverage,map:kt,matcap:yt,envMap:Wt,envMapMode:Wt&&ue.mapping,envMapCubeUVHeight:G,aoMap:V,lightMap:Ln,bumpMap:_t,normalMap:mt,displacementMap:v&&Ze,emissiveMap:Ut,normalMapObjectSpace:mt&&P.normalMapType===kx,normalMapTangentSpace:mt&&P.normalMapType===Cg,metalnessMap:qe,roughnessMap:D,anisotropy:R,anisotropyMap:Ce,clearcoat:J,clearcoatMap:ze,clearcoatNormalMap:dt,clearcoatRoughnessMap:Me,dispersion:me,iridescence:ve,iridescenceMap:Ve,iridescenceThicknessMap:Je,sheen:de,sheenColorMap:nt,sheenRoughnessMap:Ge,specularMap:gt,specularColorMap:at,specularIntensityMap:Nt,transmission:je,transmissionMap:j,thicknessMap:Re,gradientMap:se,opaque:P.transparent===!1&&P.blending===go&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Le,combine:P.combine,mapUv:kt&&w(P.map.channel),aoMapUv:V&&w(P.aoMap.channel),lightMapUv:Ln&&w(P.lightMap.channel),bumpMapUv:_t&&w(P.bumpMap.channel),normalMapUv:mt&&w(P.normalMap.channel),displacementMapUv:Ze&&w(P.displacementMap.channel),emissiveMapUv:Ut&&w(P.emissiveMap.channel),metalnessMapUv:qe&&w(P.metalnessMap.channel),roughnessMapUv:D&&w(P.roughnessMap.channel),anisotropyMapUv:Ce&&w(P.anisotropyMap.channel),clearcoatMapUv:ze&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:dt&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&w(P.sheenRoughnessMap.channel),specularMapUv:gt&&w(P.specularMap.channel),specularColorMapUv:at&&w(P.specularColorMap.channel),specularIntensityMapUv:Nt&&w(P.specularIntensityMap.channel),transmissionMapUv:j&&w(P.transmissionMap.channel),thicknessMapUv:Re&&w(P.thicknessMap.channel),alphaMapUv:pe&&w(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(mt||R),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!he.attributes.uv&&(kt||pe),fog:!!le,useFog:P.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Ae,skinning:K.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:jt,decodeVideoTexture:kt&&P.map.isVideoTexture===!0&&Dt.getTransfer(P.map.colorSpace)===Bt,decodeVideoTextureEmissive:Ut&&P.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(P.emissiveMap.colorSpace)===Bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Kn,flipSided:P.side===Hn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:lt&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&P.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return ln.vertexUv1s=d.has(1),ln.vertexUv2s=d.has(2),ln.vertexUv3s=d.has(3),d.clear(),ln}function y(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)A.push(B),A.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(L(A,P),C(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function L(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function C(P,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),P.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reverseDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),P.push(h.mask)}function T(P){const A=M[P.type];let B;if(A){const ee=Ii[A];B=by.clone(ee.uniforms)}else B=P.uniforms;return B}function N(P,A){let B;for(let ee=0,K=m.length;ee<K;ee++){const le=m[ee];if(le.cacheKey===A){B=le,++B.usedTimes;break}}return B===void 0&&(B=new Uw(s,A,P,l),m.push(B)),B}function I(P){if(--P.usedTimes===0){const A=m.indexOf(P);m[A]=m[m.length-1],m.pop(),P.destroy()}}function O(P){f.remove(P)}function z(){f.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:T,acquireProgram:N,releaseProgram:I,releaseShaderCache:O,programs:m,dispose:z}}function Bw(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let h=s.get(c);return h===void 0&&(h={},s.set(c,h)),h}function i(c){s.delete(c)}function o(c,h,f){s.get(c)[h]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:l}}function Hw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function tg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ng(){const s=[];let e=0;const t=[],i=[],o=[];function l(){e=0,t.length=0,i.length=0,o.length=0}function c(g,v,x,M,w,S){let y=s[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:w,group:S},s[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=w,y.group=S),e++,y}function h(g,v,x,M,w,S){const y=c(g,v,x,M,w,S);x.transmission>0?i.push(y):x.transparent===!0?o.push(y):t.push(y)}function f(g,v,x,M,w,S){const y=c(g,v,x,M,w,S);x.transmission>0?i.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function d(g,v){t.length>1&&t.sort(g||Hw),i.length>1&&i.sort(v||tg),o.length>1&&o.sort(v||tg)}function m(){for(let g=e,v=s.length;g<v;g++){const x=s[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:o,init:l,push:h,unshift:f,finish:m,sort:d}}function Vw(){let s=new WeakMap;function e(i,o){const l=s.get(i);let c;return l===void 0?(c=new ng,s.set(i,[c])):o>=l.length?(c=new ng,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ut};break;case"SpotLight":t={position:new U,direction:new U,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function Ww(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Xw=0;function jw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Yw(s){const e=new Gw,t=Ww(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new U);const o=new U,l=new wt,c=new wt;function h(d){let m=0,g=0,v=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let x=0,M=0,w=0,S=0,y=0,L=0,C=0,T=0,N=0,I=0,O=0;d.sort(jw);for(let P=0,A=d.length;P<A;P++){const B=d[P],ee=B.color,K=B.intensity,le=B.distance,he=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=ee.r*K,g+=ee.g*K,v+=ee.b*K;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(B.sh.coefficients[ae],K);O++}else if(B.isDirectionalLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ue=B.shadow,G=t.get(B);G.shadowIntensity=ue.intensity,G.shadowBias=ue.bias,G.shadowNormalBias=ue.normalBias,G.shadowRadius=ue.radius,G.shadowMapSize=ue.mapSize,i.directionalShadow[x]=G,i.directionalShadowMap[x]=he,i.directionalShadowMatrix[x]=B.shadow.matrix,L++}i.directional[x]=ae,x++}else if(B.isSpotLight){const ae=e.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy(ee).multiplyScalar(K),ae.distance=le,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,i.spot[w]=ae;const ue=B.shadow;if(B.map&&(i.spotLightMap[N]=B.map,N++,ue.updateMatrices(B),B.castShadow&&I++),i.spotLightMatrix[w]=ue.matrix,B.castShadow){const G=t.get(B);G.shadowIntensity=ue.intensity,G.shadowBias=ue.bias,G.shadowNormalBias=ue.normalBias,G.shadowRadius=ue.radius,G.shadowMapSize=ue.mapSize,i.spotShadow[w]=G,i.spotShadowMap[w]=he,T++}w++}else if(B.isRectAreaLight){const ae=e.get(B);ae.color.copy(ee).multiplyScalar(K),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),i.rectArea[S]=ae,S++}else if(B.isPointLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){const ue=B.shadow,G=t.get(B);G.shadowIntensity=ue.intensity,G.shadowBias=ue.bias,G.shadowNormalBias=ue.normalBias,G.shadowRadius=ue.radius,G.shadowMapSize=ue.mapSize,G.shadowCameraNear=ue.camera.near,G.shadowCameraFar=ue.camera.far,i.pointShadow[M]=G,i.pointShadowMap[M]=he,i.pointShadowMatrix[M]=B.shadow.matrix,C++}i.point[M]=ae,M++}else if(B.isHemisphereLight){const ae=e.get(B);ae.skyColor.copy(B.color).multiplyScalar(K),ae.groundColor.copy(B.groundColor).multiplyScalar(K),i.hemi[y]=ae,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=v;const z=i.hash;(z.directionalLength!==x||z.pointLength!==M||z.spotLength!==w||z.rectAreaLength!==S||z.hemiLength!==y||z.numDirectionalShadows!==L||z.numPointShadows!==C||z.numSpotShadows!==T||z.numSpotMaps!==N||z.numLightProbes!==O)&&(i.directional.length=x,i.spot.length=w,i.rectArea.length=S,i.point.length=M,i.hemi.length=y,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=T+N-I,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=O,z.directionalLength=x,z.pointLength=M,z.spotLength=w,z.rectAreaLength=S,z.hemiLength=y,z.numDirectionalShadows=L,z.numPointShadows=C,z.numSpotShadows=T,z.numSpotMaps=N,z.numLightProbes=O,i.version=Xw++)}function f(d,m){let g=0,v=0,x=0,M=0,w=0;const S=m.matrixWorldInverse;for(let y=0,L=d.length;y<L;y++){const C=d[y];if(C.isDirectionalLight){const T=i.directional[g];T.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(S),g++}else if(C.isSpotLight){const T=i.spot[x];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(S),T.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(S),x++}else if(C.isRectAreaLight){const T=i.rectArea[M];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(S),c.identity(),l.copy(C.matrixWorld),l.premultiply(S),c.extractRotation(l),T.halfWidth.set(C.width*.5,0,0),T.halfHeight.set(0,C.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){const T=i.point[v];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(S),v++}else if(C.isHemisphereLight){const T=i.hemi[w];T.direction.setFromMatrixPosition(C.matrixWorld),T.direction.transformDirection(S),w++}}}return{setup:h,setupView:f,state:i}}function ig(s){const e=new Yw(s),t=[],i=[];function o(m){d.camera=m,t.length=0,i.length=0}function l(m){t.push(m)}function c(m){i.push(m)}function h(){e.setup(t)}function f(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:f,pushLight:l,pushShadow:c}}function qw(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let h;return c===void 0?(h=new ig(s),e.set(o,[h])):l>=c.length?(h=new ig(s),c.push(h)):h=c[l],h}function i(){e=new WeakMap}return{get:t,dispose:i}}const $w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kw(s,e,t){let i=new od;const o=new Ie,l=new Ie,c=new Ht,h=new _1({depthPacking:Ox}),f=new x1,d={},m=t.maxTextureSize,g={[Hr]:Hn,[Hn]:Hr,[Kn]:Kn},v=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:$w,fragmentShader:Zw}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new yn;M.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ue(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dg;let y=this.type;this.render=function(I,O,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(kr),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const K=y!==er&&this.type===er,le=y===er&&this.type!==er;for(let he=0,ae=I.length;he<ae;he++){const ue=I[he],G=ue.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const ce=G.getFrameExtents();if(o.multiply(ce),l.copy(G.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ce.x),o.x=l.x*ce.x,G.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ce.y),o.y=l.y*ce.y,G.mapSize.y=l.y)),G.map===null||K===!0||le===!0){const k=this.type!==er?{minFilter:si,magFilter:si}:{};G.map!==null&&G.map.dispose(),G.map=new vs(o.x,o.y,k),G.map.texture.name=ue.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const oe=G.getViewportCount();for(let k=0;k<oe;k++){const re=G.getViewport(k);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ee.viewport(c),G.updateMatrices(ue,k),i=G.getFrustum(),T(O,z,G.camera,ue,this.type)}G.isPointLightShadow!==!0&&this.type===er&&L(G,z),G.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(P,A,B)};function L(I,O){const z=e.update(w);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new vs(o.x,o.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,z,v,w,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,z,x,w,null)}function C(I,O,z,P){let A=null;const B=z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)A=B;else if(A=z.isPointLight===!0?f:h,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ee=A.uuid,K=O.uuid;let le=d[ee];le===void 0&&(le={},d[ee]=le);let he=le[K];he===void 0&&(he=A.clone(),le[K]=he,O.addEventListener("dispose",N)),A=he}if(A.visible=O.visible,A.wireframe=O.wireframe,P===er?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:g[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ee=s.properties.get(A);ee.light=z}return A}function T(I,O,z,P,A){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===er)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,I.matrixWorld);const K=e.update(I),le=I.material;if(Array.isArray(le)){const he=K.groups;for(let ae=0,ue=he.length;ae<ue;ae++){const G=he[ae],ce=le[G.materialIndex];if(ce&&ce.visible){const oe=C(I,ce,P,A);I.onBeforeShadow(s,I,O,z,K,oe,G),s.renderBufferDirect(z,null,K,oe,I,G),I.onAfterShadow(s,I,O,z,K,oe,G)}}}else if(le.visible){const he=C(I,le,P,A);I.onBeforeShadow(s,I,O,z,K,he,null),s.renderBufferDirect(z,null,K,he,I,null),I.onAfterShadow(s,I,O,z,K,he,null)}}const ee=I.children;for(let K=0,le=ee.length;K<le;K++)T(ee[K],O,z,P,A)}function N(I){I.target.removeEventListener("dispose",N);for(const z in d){const P=d[z],A=I.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const Jw={[sf]:of,[af]:uf,[lf]:hf,[yo]:cf,[of]:sf,[uf]:af,[hf]:lf,[cf]:yo};function Qw(s,e){function t(){let j=!1;const Re=new Ht;let se=null;const pe=new Ht(0,0,0,0);return{setMask:function(De){se!==De&&!j&&(s.colorMask(De,De,De,De),se=De)},setLocked:function(De){j=De},setClear:function(De,Le,lt,jt,ln){ln===!0&&(De*=jt,Le*=jt,lt*=jt),Re.set(De,Le,lt,jt),pe.equals(Re)===!1&&(s.clearColor(De,Le,lt,jt),pe.copy(Re))},reset:function(){j=!1,se=null,pe.set(-1,0,0,0)}}}function i(){let j=!1,Re=!1,se=null,pe=null,De=null;return{setReversed:function(Le){if(Re!==Le){const lt=e.get("EXT_clip_control");Re?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT);const jt=De;De=null,this.setClear(jt)}Re=Le},getReversed:function(){return Re},setTest:function(Le){Le?xe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Le){se!==Le&&!j&&(s.depthMask(Le),se=Le)},setFunc:function(Le){if(Re&&(Le=Jw[Le]),pe!==Le){switch(Le){case sf:s.depthFunc(s.NEVER);break;case of:s.depthFunc(s.ALWAYS);break;case af:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case lf:s.depthFunc(s.EQUAL);break;case cf:s.depthFunc(s.GEQUAL);break;case uf:s.depthFunc(s.GREATER);break;case hf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Le}},setLocked:function(Le){j=Le},setClear:function(Le){De!==Le&&(Re&&(Le=1-Le),s.clearDepth(Le),De=Le)},reset:function(){j=!1,se=null,pe=null,De=null,Re=!1}}}function o(){let j=!1,Re=null,se=null,pe=null,De=null,Le=null,lt=null,jt=null,ln=null;return{setTest:function(Ct){j||(Ct?xe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(Ct){Re!==Ct&&!j&&(s.stencilMask(Ct),Re=Ct)},setFunc:function(Ct,Gn,Dn){(se!==Ct||pe!==Gn||De!==Dn)&&(s.stencilFunc(Ct,Gn,Dn),se=Ct,pe=Gn,De=Dn)},setOp:function(Ct,Gn,Dn){(Le!==Ct||lt!==Gn||jt!==Dn)&&(s.stencilOp(Ct,Gn,Dn),Le=Ct,lt=Gn,jt=Dn)},setLocked:function(Ct){j=Ct},setClear:function(Ct){ln!==Ct&&(s.clearStencil(Ct),ln=Ct)},reset:function(){j=!1,Re=null,se=null,pe=null,De=null,Le=null,lt=null,jt=null,ln=null}}}const l=new t,c=new i,h=new o,f=new WeakMap,d=new WeakMap;let m={},g={},v=new WeakMap,x=[],M=null,w=!1,S=null,y=null,L=null,C=null,T=null,N=null,I=null,O=new ut(0,0,0),z=0,P=!1,A=null,B=null,ee=null,K=null,le=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ue=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(G)[1]),ae=ue>=1):G.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ae=ue>=2);let ce=null,oe={};const k=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Oe=new Ht().fromArray(k),Q=new Ht().fromArray(re);function fe(j,Re,se,pe){const De=new Uint8Array(4),Le=s.createTexture();s.bindTexture(j,Le),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<se;lt++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Re+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Le}const Ee={};Ee[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),xe(s.DEPTH_TEST),c.setFunc(yo),_t(!1),mt(Xm),xe(s.CULL_FACE),V(kr);function xe(j){m[j]!==!0&&(s.enable(j),m[j]=!0)}function Ae(j){m[j]!==!1&&(s.disable(j),m[j]=!1)}function ke(j,Re){return g[j]!==Re?(s.bindFramebuffer(j,Re),g[j]=Re,j===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Re),j===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function tt(j,Re){let se=x,pe=!1;if(j){se=v.get(Re),se===void 0&&(se=[],v.set(Re,se));const De=j.textures;if(se.length!==De.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,lt=De.length;Le<lt;Le++)se[Le]=s.COLOR_ATTACHMENT0+Le;se.length=De.length,pe=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,pe=!0);pe&&s.drawBuffers(se)}function kt(j){return M!==j?(s.useProgram(j),M=j,!0):!1}const yt={[fs]:s.FUNC_ADD,[ux]:s.FUNC_SUBTRACT,[hx]:s.FUNC_REVERSE_SUBTRACT};yt[fx]=s.MIN,yt[dx]=s.MAX;const Wt={[px]:s.ZERO,[mx]:s.ONE,[gx]:s.SRC_COLOR,[nf]:s.SRC_ALPHA,[Mx]:s.SRC_ALPHA_SATURATE,[yx]:s.DST_COLOR,[_x]:s.DST_ALPHA,[vx]:s.ONE_MINUS_SRC_COLOR,[rf]:s.ONE_MINUS_SRC_ALPHA,[Sx]:s.ONE_MINUS_DST_COLOR,[xx]:s.ONE_MINUS_DST_ALPHA,[Ex]:s.CONSTANT_COLOR,[wx]:s.ONE_MINUS_CONSTANT_COLOR,[Tx]:s.CONSTANT_ALPHA,[Ax]:s.ONE_MINUS_CONSTANT_ALPHA};function V(j,Re,se,pe,De,Le,lt,jt,ln,Ct){if(j===kr){w===!0&&(Ae(s.BLEND),w=!1);return}if(w===!1&&(xe(s.BLEND),w=!0),j!==cx){if(j!==S||Ct!==P){if((y!==fs||T!==fs)&&(s.blendEquation(s.FUNC_ADD),y=fs,T=fs),Ct)switch(j){case go:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jm:s.blendFunc(s.ONE,s.ONE);break;case Ym:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case go:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ym:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}L=null,C=null,N=null,I=null,O.set(0,0,0),z=0,S=j,P=Ct}return}De=De||Re,Le=Le||se,lt=lt||pe,(Re!==y||De!==T)&&(s.blendEquationSeparate(yt[Re],yt[De]),y=Re,T=De),(se!==L||pe!==C||Le!==N||lt!==I)&&(s.blendFuncSeparate(Wt[se],Wt[pe],Wt[Le],Wt[lt]),L=se,C=pe,N=Le,I=lt),(jt.equals(O)===!1||ln!==z)&&(s.blendColor(jt.r,jt.g,jt.b,ln),O.copy(jt),z=ln),S=j,P=!1}function Ln(j,Re){j.side===Kn?Ae(s.CULL_FACE):xe(s.CULL_FACE);let se=j.side===Hn;Re&&(se=!se),_t(se),j.blending===go&&j.transparent===!1?V(kr):V(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),l.setMask(j.colorWrite);const pe=j.stencilWrite;h.setTest(pe),pe&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ut(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(j){A!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),A=j)}function mt(j){j!==ax?(xe(s.CULL_FACE),j!==B&&(j===Xm?s.cullFace(s.BACK):j===lx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),B=j}function Ze(j){j!==ee&&(ae&&s.lineWidth(j),ee=j)}function Ut(j,Re,se){j?(xe(s.POLYGON_OFFSET_FILL),(K!==Re||le!==se)&&(s.polygonOffset(Re,se),K=Re,le=se)):Ae(s.POLYGON_OFFSET_FILL)}function qe(j){j?xe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function D(j){j===void 0&&(j=s.TEXTURE0+he-1),ce!==j&&(s.activeTexture(j),ce=j)}function R(j,Re,se){se===void 0&&(ce===null?se=s.TEXTURE0+he-1:se=ce);let pe=oe[se];pe===void 0&&(pe={type:void 0,texture:void 0},oe[se]=pe),(pe.type!==j||pe.texture!==Re)&&(ce!==se&&(s.activeTexture(se),ce=se),s.bindTexture(j,Re||Ee[j]),pe.type=j,pe.texture=Re)}function J(){const j=oe[ce];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function je(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ve(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Je(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function nt(j){Oe.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Oe.copy(j))}function Ge(j){Q.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Q.copy(j))}function gt(j,Re){let se=d.get(Re);se===void 0&&(se=new WeakMap,d.set(Re,se));let pe=se.get(j);pe===void 0&&(pe=s.getUniformBlockIndex(Re,j.name),se.set(j,pe))}function at(j,Re){const pe=d.get(Re).get(j);f.get(Re)!==pe&&(s.uniformBlockBinding(Re,pe,j.__bindingPointIndex),f.set(Re,pe))}function Nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ce=null,oe={},g={},v=new WeakMap,x=[],M=null,w=!1,S=null,y=null,L=null,C=null,T=null,N=null,I=null,O=new ut(0,0,0),z=0,P=!1,A=null,B=null,ee=null,K=null,le=null,Oe.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:xe,disable:Ae,bindFramebuffer:ke,drawBuffers:tt,useProgram:kt,setBlending:V,setMaterial:Ln,setFlipSided:_t,setCullFace:mt,setLineWidth:Ze,setPolygonOffset:Ut,setScissorTest:qe,activeTexture:D,bindTexture:R,unbindTexture:J,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Ve,texImage3D:Je,updateUBOMapping:gt,uniformBlockBinding:at,texStorage2D:dt,texStorage3D:Me,texSubImage2D:de,texSubImage3D:je,compressedTexSubImage2D:Ce,compressedTexSubImage3D:ze,scissor:nt,viewport:Ge,reset:Nt}}function e2(s,e,t,i,o,l,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Ie,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,R){return x?new OffscreenCanvas(D,R):bc("canvas")}function w(D,R,J){let me=1;const ve=qe(D);if((ve.width>J||ve.height>J)&&(me=J/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(me*ve.width),je=Math.floor(me*ve.height);g===void 0&&(g=M(de,je));const Ce=R?M(de,je):g;return Ce.width=de,Ce.height=je,Ce.getContext("2d").drawImage(D,0,0,de,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+je+")."),Ce}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function S(D){return D.generateMipmaps}function y(D){s.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(D,R,J,me,ve=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=R;if(R===s.RED&&(J===s.FLOAT&&(de=s.R32F),J===s.HALF_FLOAT&&(de=s.R16F),J===s.UNSIGNED_BYTE&&(de=s.R8)),R===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.R8UI),J===s.UNSIGNED_SHORT&&(de=s.R16UI),J===s.UNSIGNED_INT&&(de=s.R32UI),J===s.BYTE&&(de=s.R8I),J===s.SHORT&&(de=s.R16I),J===s.INT&&(de=s.R32I)),R===s.RG&&(J===s.FLOAT&&(de=s.RG32F),J===s.HALF_FLOAT&&(de=s.RG16F),J===s.UNSIGNED_BYTE&&(de=s.RG8)),R===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RG8UI),J===s.UNSIGNED_SHORT&&(de=s.RG16UI),J===s.UNSIGNED_INT&&(de=s.RG32UI),J===s.BYTE&&(de=s.RG8I),J===s.SHORT&&(de=s.RG16I),J===s.INT&&(de=s.RG32I)),R===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGB8UI),J===s.UNSIGNED_SHORT&&(de=s.RGB16UI),J===s.UNSIGNED_INT&&(de=s.RGB32UI),J===s.BYTE&&(de=s.RGB8I),J===s.SHORT&&(de=s.RGB16I),J===s.INT&&(de=s.RGB32I)),R===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),J===s.UNSIGNED_INT&&(de=s.RGBA32UI),J===s.BYTE&&(de=s.RGBA8I),J===s.SHORT&&(de=s.RGBA16I),J===s.INT&&(de=s.RGBA32I)),R===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),R===s.RGBA){const je=ve?Cc:Dt.getTransfer(me);J===s.FLOAT&&(de=s.RGBA32F),J===s.HALF_FLOAT&&(de=s.RGBA16F),J===s.UNSIGNED_BYTE&&(de=je===Bt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function T(D,R){let J;return D?R===null||R===gs||R===Eo?J=s.DEPTH24_STENCIL8:R===Ui?J=s.DEPTH32F_STENCIL8:R===Ca&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===gs||R===Eo?J=s.DEPTH_COMPONENT24:R===Ui?J=s.DEPTH_COMPONENT32F:R===Ca&&(J=s.DEPTH_COMPONENT16),J}function N(D,R){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==si&&D.minFilter!==Ni?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function I(D){const R=D.target;R.removeEventListener("dispose",I),z(R),R.isVideoTexture&&m.delete(R)}function O(D){const R=D.target;R.removeEventListener("dispose",O),A(R)}function z(D){const R=i.get(D);if(R.__webglInit===void 0)return;const J=D.source,me=v.get(J);if(me){const ve=me[R.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(D),Object.keys(me).length===0&&v.delete(J)}i.remove(D)}function P(D){const R=i.get(D);s.deleteTexture(R.__webglTexture);const J=D.source,me=v.get(J);delete me[R.__cacheKey],c.memory.textures--}function A(D){const R=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(R.__webglFramebuffer[me]))for(let ve=0;ve<R.__webglFramebuffer[me].length;ve++)s.deleteFramebuffer(R.__webglFramebuffer[me][ve]);else s.deleteFramebuffer(R.__webglFramebuffer[me]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[me])}else{if(Array.isArray(R.__webglFramebuffer))for(let me=0;me<R.__webglFramebuffer.length;me++)s.deleteFramebuffer(R.__webglFramebuffer[me]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let me=0;me<R.__webglColorRenderbuffer.length;me++)R.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[me]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const J=D.textures;for(let me=0,ve=J.length;me<ve;me++){const de=i.get(J[me]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),c.memory.textures--),i.remove(J[me])}i.remove(D)}let B=0;function ee(){B=0}function K(){const D=B;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),B+=1,D}function le(D){const R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function he(D,R){const J=i.get(D);if(D.isVideoTexture&&Ze(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(J,D,R);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+R)}function ae(D,R){const J=i.get(D);if(D.version>0&&J.__version!==D.version){Q(J,D,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+R)}function ue(D,R){const J=i.get(D);if(D.version>0&&J.__version!==D.version){Q(J,D,R);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+R)}function G(D,R){const J=i.get(D);if(D.version>0&&J.__version!==D.version){fe(J,D,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+R)}const ce={[Aa]:s.REPEAT,[ps]:s.CLAMP_TO_EDGE,[pf]:s.MIRRORED_REPEAT},oe={[si]:s.NEAREST,[Ux]:s.NEAREST_MIPMAP_NEAREST,[Vl]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[_h]:s.LINEAR_MIPMAP_NEAREST,[ms]:s.LINEAR_MIPMAP_LINEAR},k={[zx]:s.NEVER,[Xx]:s.ALWAYS,[Bx]:s.LESS,[Rg]:s.LEQUAL,[Hx]:s.EQUAL,[Wx]:s.GEQUAL,[Vx]:s.GREATER,[Gx]:s.NOTEQUAL};function re(D,R){if(R.type===Ui&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Ni||R.magFilter===_h||R.magFilter===Vl||R.magFilter===ms||R.minFilter===Ni||R.minFilter===_h||R.minFilter===Vl||R.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ce[R.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ce[R.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ce[R.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,oe[R.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,oe[R.minFilter]),R.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,k[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===si||R.minFilter!==Vl&&R.minFilter!==ms||R.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function Oe(D,R){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",I));const me=R.source;let ve=v.get(me);ve===void 0&&(ve={},v.set(me,ve));const de=le(R);if(de!==D.__cacheKey){ve[de]===void 0&&(ve[de]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ve[de].usedTimes++;const je=ve[D.__cacheKey];je!==void 0&&(ve[D.__cacheKey].usedTimes--,je.usedTimes===0&&P(R)),D.__cacheKey=de,D.__webglTexture=ve[de].texture}return J}function Q(D,R,J){let me=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(me=s.TEXTURE_3D);const ve=Oe(D,R),de=R.source;t.bindTexture(me,D.__webglTexture,s.TEXTURE0+J);const je=i.get(de);if(de.version!==je.__version||ve===!0){t.activeTexture(s.TEXTURE0+J);const Ce=Dt.getPrimaries(Dt.workingColorSpace),ze=R.colorSpace===Fr?null:Dt.getPrimaries(R.colorSpace),dt=R.colorSpace===Fr||Ce===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Me=w(R.image,!1,o.maxTextureSize);Me=Ut(R,Me);const Ve=l.convert(R.format,R.colorSpace),Je=l.convert(R.type);let nt=C(R.internalFormat,Ve,Je,R.colorSpace,R.isVideoTexture);re(me,R);let Ge;const gt=R.mipmaps,at=R.isVideoTexture!==!0,Nt=je.__version===void 0||ve===!0,j=de.dataReady,Re=N(R,Me);if(R.isDepthTexture)nt=T(R.format===wo,R.type),Nt&&(at?t.texStorage2D(s.TEXTURE_2D,1,nt,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,Ve,Je,null));else if(R.isDataTexture)if(gt.length>0){at&&Nt&&t.texStorage2D(s.TEXTURE_2D,Re,nt,gt[0].width,gt[0].height);for(let se=0,pe=gt.length;se<pe;se++)Ge=gt[se],at?j&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ge.width,Ge.height,Ve,Je,Ge.data):t.texImage2D(s.TEXTURE_2D,se,nt,Ge.width,Ge.height,0,Ve,Je,Ge.data);R.generateMipmaps=!1}else at?(Nt&&t.texStorage2D(s.TEXTURE_2D,Re,nt,Me.width,Me.height),j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Ve,Je,Me.data)):t.texImage2D(s.TEXTURE_2D,0,nt,Me.width,Me.height,0,Ve,Je,Me.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){at&&Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,nt,gt[0].width,gt[0].height,Me.depth);for(let se=0,pe=gt.length;se<pe;se++)if(Ge=gt[se],R.format!==Ci)if(Ve!==null)if(at){if(j)if(R.layerUpdates.size>0){const De=I0(Ge.width,Ge.height,R.format,R.type);for(const Le of R.layerUpdates){const lt=Ge.data.subarray(Le*De/Ge.data.BYTES_PER_ELEMENT,(Le+1)*De/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,Le,Ge.width,Ge.height,1,Ve,lt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Ge.width,Ge.height,Me.depth,Ve,Ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,nt,Ge.width,Ge.height,Me.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?j&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,Ge.width,Ge.height,Me.depth,Ve,Je,Ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,nt,Ge.width,Ge.height,Me.depth,0,Ve,Je,Ge.data)}else{at&&Nt&&t.texStorage2D(s.TEXTURE_2D,Re,nt,gt[0].width,gt[0].height);for(let se=0,pe=gt.length;se<pe;se++)Ge=gt[se],R.format!==Ci?Ve!==null?at?j&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,Ge.width,Ge.height,Ve,Ge.data):t.compressedTexImage2D(s.TEXTURE_2D,se,nt,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?j&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ge.width,Ge.height,Ve,Je,Ge.data):t.texImage2D(s.TEXTURE_2D,se,nt,Ge.width,Ge.height,0,Ve,Je,Ge.data)}else if(R.isDataArrayTexture)if(at){if(Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,nt,Me.width,Me.height,Me.depth),j)if(R.layerUpdates.size>0){const se=I0(Me.width,Me.height,R.format,R.type);for(const pe of R.layerUpdates){const De=Me.data.subarray(pe*se/Me.data.BYTES_PER_ELEMENT,(pe+1)*se/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Me.width,Me.height,1,Ve,Je,De)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ve,Je,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,Ve,Je,Me.data);else if(R.isData3DTexture)at?(Nt&&t.texStorage3D(s.TEXTURE_3D,Re,nt,Me.width,Me.height,Me.depth),j&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ve,Je,Me.data)):t.texImage3D(s.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,Ve,Je,Me.data);else if(R.isFramebufferTexture){if(Nt)if(at)t.texStorage2D(s.TEXTURE_2D,Re,nt,Me.width,Me.height);else{let se=Me.width,pe=Me.height;for(let De=0;De<Re;De++)t.texImage2D(s.TEXTURE_2D,De,nt,se,pe,0,Ve,Je,null),se>>=1,pe>>=1}}else if(gt.length>0){if(at&&Nt){const se=qe(gt[0]);t.texStorage2D(s.TEXTURE_2D,Re,nt,se.width,se.height)}for(let se=0,pe=gt.length;se<pe;se++)Ge=gt[se],at?j&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ve,Je,Ge):t.texImage2D(s.TEXTURE_2D,se,nt,Ve,Je,Ge);R.generateMipmaps=!1}else if(at){if(Nt){const se=qe(Me);t.texStorage2D(s.TEXTURE_2D,Re,nt,se.width,se.height)}j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ve,Je,Me)}else t.texImage2D(s.TEXTURE_2D,0,nt,Ve,Je,Me);S(R)&&y(me),je.__version=de.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function fe(D,R,J){if(R.image.length!==6)return;const me=Oe(D,R),ve=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+J);const de=i.get(ve);if(ve.version!==de.__version||me===!0){t.activeTexture(s.TEXTURE0+J);const je=Dt.getPrimaries(Dt.workingColorSpace),Ce=R.colorSpace===Fr?null:Dt.getPrimaries(R.colorSpace),ze=R.colorSpace===Fr||je===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const dt=R.isCompressedTexture||R.image[0].isCompressedTexture,Me=R.image[0]&&R.image[0].isDataTexture,Ve=[];for(let pe=0;pe<6;pe++)!dt&&!Me?Ve[pe]=w(R.image[pe],!0,o.maxCubemapSize):Ve[pe]=Me?R.image[pe].image:R.image[pe],Ve[pe]=Ut(R,Ve[pe]);const Je=Ve[0],nt=l.convert(R.format,R.colorSpace),Ge=l.convert(R.type),gt=C(R.internalFormat,nt,Ge,R.colorSpace),at=R.isVideoTexture!==!0,Nt=de.__version===void 0||me===!0,j=ve.dataReady;let Re=N(R,Je);re(s.TEXTURE_CUBE_MAP,R);let se;if(dt){at&&Nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,gt,Je.width,Je.height);for(let pe=0;pe<6;pe++){se=Ve[pe].mipmaps;for(let De=0;De<se.length;De++){const Le=se[De];R.format!==Ci?nt!==null?at?j&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,nt,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,gt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Le.width,Le.height,nt,Ge,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,gt,Le.width,Le.height,0,nt,Ge,Le.data)}}}else{if(se=R.mipmaps,at&&Nt){se.length>0&&Re++;const pe=qe(Ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,gt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){at?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ve[pe].width,Ve[pe].height,nt,Ge,Ve[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,gt,Ve[pe].width,Ve[pe].height,0,nt,Ge,Ve[pe].data);for(let De=0;De<se.length;De++){const lt=se[De].image[pe].image;at?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,lt.width,lt.height,nt,Ge,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,gt,lt.width,lt.height,0,nt,Ge,lt.data)}}else{at?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,nt,Ge,Ve[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,gt,nt,Ge,Ve[pe]);for(let De=0;De<se.length;De++){const Le=se[De];at?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,nt,Ge,Le.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,gt,nt,Ge,Le.image[pe])}}}S(R)&&y(s.TEXTURE_CUBE_MAP),de.__version=ve.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function Ee(D,R,J,me,ve,de){const je=l.convert(J.format,J.colorSpace),Ce=l.convert(J.type),ze=C(J.internalFormat,je,Ce,J.colorSpace),dt=i.get(R),Me=i.get(J);if(Me.__renderTarget=R,!dt.__hasExternalTextures){const Ve=Math.max(1,R.width>>de),Je=Math.max(1,R.height>>de);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,ze,Ve,Je,R.depth,0,je,Ce,null):t.texImage2D(ve,de,ze,Ve,Je,0,je,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),mt(R)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ve,Me.__webglTexture,0,_t(R)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ve,Me.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(D,R,J){if(s.bindRenderbuffer(s.RENDERBUFFER,D),R.depthBuffer){const me=R.depthTexture,ve=me&&me.isDepthTexture?me.type:null,de=T(R.stencilBuffer,ve),je=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=_t(R);mt(R)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,de,R.width,R.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,de,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,de,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,D)}else{const me=R.textures;for(let ve=0;ve<me.length;ve++){const de=me[ve],je=l.convert(de.format,de.colorSpace),Ce=l.convert(de.type),ze=C(de.internalFormat,je,Ce,de.colorSpace),dt=_t(R);J&&mt(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,ze,R.width,R.height):mt(R)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,ze,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,ze,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(R.depthTexture);me.__renderTarget=R,(!me.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),he(R.depthTexture,0);const ve=me.__webglTexture,de=_t(R);if(R.depthTexture.format===vo)mt(R)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(R.depthTexture.format===wo)mt(R)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ke(D){const R=i.get(D),J=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),me){const ve=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),R.__depthDisposeCallback=ve}R.__boundDepthTexture=me}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ae(R.__webglFramebuffer,D)}else if(J){R.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[me]),R.__webglDepthbuffer[me]===void 0)R.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(R.__webglDepthbuffer[me],D,!1);else{const ve=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=R.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,de)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),xe(R.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(D,R,J){const me=i.get(D);R!==void 0&&Ee(me.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&ke(D)}function kt(D){const R=D.texture,J=i.get(D),me=i.get(R);D.addEventListener("dispose",O);const ve=D.textures,de=D.isWebGLCubeRenderTarget===!0,je=ve.length>1;if(je||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=R.version,c.memory.textures++),de){J.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[Ce]=[];for(let ze=0;ze<R.mipmaps.length;ze++)J.__webglFramebuffer[Ce][ze]=s.createFramebuffer()}else J.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ce=0;Ce<R.mipmaps.length;Ce++)J.__webglFramebuffer[Ce]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(je)for(let Ce=0,ze=ve.length;Ce<ze;Ce++){const dt=i.get(ve[Ce]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&mt(D)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const ze=ve[Ce];J.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ce]);const dt=l.convert(ze.format,ze.colorSpace),Me=l.convert(ze.type),Ve=C(ze.internalFormat,dt,Me,ze.colorSpace,D.isXRRenderTarget===!0),Je=_t(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,Ve,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),re(s.TEXTURE_CUBE_MAP,R);for(let Ce=0;Ce<6;Ce++)if(R.mipmaps&&R.mipmaps.length>0)for(let ze=0;ze<R.mipmaps.length;ze++)Ee(J.__webglFramebuffer[Ce][ze],D,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ze);else Ee(J.__webglFramebuffer[Ce],D,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(R)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ce=0,ze=ve.length;Ce<ze;Ce++){const dt=ve[Ce],Me=i.get(dt);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),re(s.TEXTURE_2D,dt),Ee(J.__webglFramebuffer,D,dt,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),S(dt)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),re(Ce,R),R.mipmaps&&R.mipmaps.length>0)for(let ze=0;ze<R.mipmaps.length;ze++)Ee(J.__webglFramebuffer[ze],D,R,s.COLOR_ATTACHMENT0,Ce,ze);else Ee(J.__webglFramebuffer,D,R,s.COLOR_ATTACHMENT0,Ce,0);S(R)&&y(Ce),t.unbindTexture()}D.depthBuffer&&ke(D)}function yt(D){const R=D.textures;for(let J=0,me=R.length;J<me;J++){const ve=R[J];if(S(ve)){const de=L(D),je=i.get(ve).__webglTexture;t.bindTexture(de,je),y(de),t.unbindTexture()}}}const Wt=[],V=[];function Ln(D){if(D.samples>0){if(mt(D)===!1){const R=D.textures,J=D.width,me=D.height;let ve=s.COLOR_BUFFER_BIT;const de=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=i.get(D),Ce=R.length>1;if(Ce)for(let ze=0;ze<R.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let ze=0;ze<R.length;ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[ze]);const dt=i.get(R[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,J,me,0,0,J,me,ve,s.NEAREST),f===!0&&(Wt.length=0,V.length=0,Wt.push(s.COLOR_ATTACHMENT0+ze),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Wt.push(de),V.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let ze=0;ze<R.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,je.__webglColorRenderbuffer[ze]);const dt=i.get(R[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,dt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const R=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function _t(D){return Math.min(o.maxSamples,D.samples)}function mt(D){const R=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ze(D){const R=c.render.frame;m.get(D)!==R&&(m.set(D,R),D.update())}function Ut(D,R){const J=D.colorSpace,me=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==To&&J!==Fr&&(Dt.getTransfer(J)===Bt?(me!==Ci||ve!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),R}function qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=ee,this.setTexture2D=he,this.setTexture2DArray=ae,this.setTexture3D=ue,this.setTextureCube=G,this.rebindTextures=tt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=mt}function t2(s,e){function t(i,o=Fr){let l;const c=Dt.getTransfer(o);if(i===ar)return s.UNSIGNED_BYTE;if(i===Jf)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Qf)return s.UNSIGNED_SHORT_5_5_5_1;if(i===yg)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===_g)return s.BYTE;if(i===xg)return s.SHORT;if(i===Ca)return s.UNSIGNED_SHORT;if(i===Kf)return s.INT;if(i===gs)return s.UNSIGNED_INT;if(i===Ui)return s.FLOAT;if(i===Da)return s.HALF_FLOAT;if(i===Sg)return s.ALPHA;if(i===Mg)return s.RGB;if(i===Ci)return s.RGBA;if(i===Eg)return s.LUMINANCE;if(i===wg)return s.LUMINANCE_ALPHA;if(i===vo)return s.DEPTH_COMPONENT;if(i===wo)return s.DEPTH_STENCIL;if(i===ed)return s.RED;if(i===td)return s.RED_INTEGER;if(i===Tg)return s.RG;if(i===nd)return s.RG_INTEGER;if(i===id)return s.RGBA_INTEGER;if(i===xc||i===yc||i===Sc||i===Mc)if(c===Bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===xc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===xc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mf||i===gf||i===vf||i===_f)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===mf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_f)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xf||i===yf||i===Sf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===xf||i===yf)return c===Bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===Sf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mf||i===Ef||i===wf||i===Tf||i===Af||i===Cf||i===Rf||i===bf||i===Pf||i===Lf||i===Df||i===If||i===Nf||i===Uf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===Mf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ef)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Af)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Df)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===If)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uf)return c===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ec||i===Ff||i===Of)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===Ec)return c===Bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ff)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Of)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ag||i===kf||i===zf||i===Bf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===Ec)return l.COMPRESSED_RED_RGTC1_EXT;if(i===kf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const n2={type:"move"};class Kh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,l=null,c=null;const h=this._targetRay,f=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,i),y=this._getHandJoint(d,w);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,M=.005;d.inputState.pinching&&v>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(n2)))}return h!==null&&(h.visible=o!==null),f!==null&&(f.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Mt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const i2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class s2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new bn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new lr({vertexShader:i2,fragmentShader:r2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o2 extends Ro{constructor(e,t){super();const i=this;let o=null,l=1,c=null,h="local-floor",f=1,d=null,m=null,g=null,v=null,x=null,M=null;const w=new s2,S=t.getContextAttributes();let y=null,L=null;const C=[],T=[],N=new Ie;let I=null;const O=new Zn;O.viewport=new Ht;const z=new Zn;z.viewport=new Ht;const P=[O,z],A=new A1;let B=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=C[Q];return fe===void 0&&(fe=new Kh,C[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=C[Q];return fe===void 0&&(fe=new Kh,C[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=C[Q];return fe===void 0&&(fe=new Kh,C[Q]=fe),fe.getHandSpace()};function K(Q){const fe=T.indexOf(Q.inputSource);if(fe===-1)return;const Ee=C[fe];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,d||c),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function le(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",le),o.removeEventListener("inputsourceschange",he);for(let Q=0;Q<C.length;Q++){const fe=T[Q];fe!==null&&(T[Q]=null,C[Q].disconnect(fe))}B=null,ee=null,w.reset(),e.setRenderTarget(y),x=null,v=null,g=null,o=null,L=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",le),o.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(N),o.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new vs(x.framebufferWidth,x.framebufferHeight,{format:Ci,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,Ee=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?wo:vo,Ee=S.stencil?Eo:gs);const Ae={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Ae),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new vs(v.textureWidth,v.textureHeight,{format:Ci,type:ar,depthTexture:new Wg(v.textureWidth,v.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),d=null,c=await o.requestReferenceSpace(h),Oe.setContext(o),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function he(Q){for(let fe=0;fe<Q.removed.length;fe++){const Ee=Q.removed[fe],xe=T.indexOf(Ee);xe>=0&&(T[xe]=null,C[xe].disconnect(Ee))}for(let fe=0;fe<Q.added.length;fe++){const Ee=Q.added[fe];let xe=T.indexOf(Ee);if(xe===-1){for(let ke=0;ke<C.length;ke++)if(ke>=T.length){T.push(Ee),xe=ke;break}else if(T[ke]===null){T[ke]=Ee,xe=ke;break}if(xe===-1)break}const Ae=C[xe];Ae&&Ae.connect(Ee)}}const ae=new U,ue=new U;function G(Q,fe,Ee){ae.setFromMatrixPosition(fe.matrixWorld),ue.setFromMatrixPosition(Ee.matrixWorld);const xe=ae.distanceTo(ue),Ae=fe.projectionMatrix.elements,ke=Ee.projectionMatrix.elements,tt=Ae[14]/(Ae[10]-1),kt=Ae[14]/(Ae[10]+1),yt=(Ae[9]+1)/Ae[5],Wt=(Ae[9]-1)/Ae[5],V=(Ae[8]-1)/Ae[0],Ln=(ke[8]+1)/ke[0],_t=tt*V,mt=tt*Ln,Ze=xe/(-V+Ln),Ut=Ze*-V;if(fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ut),Q.translateZ(Ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const qe=tt+Ze,D=kt+Ze,R=_t-Ut,J=mt+(xe-Ut),me=yt*kt/D*qe,ve=Wt*kt/D*qe;Q.projectionMatrix.makePerspective(R,J,me,ve,qe,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ce(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let fe=Q.near,Ee=Q.far;w.texture!==null&&(w.depthNear>0&&(fe=w.depthNear),w.depthFar>0&&(Ee=w.depthFar)),A.near=z.near=O.near=fe,A.far=z.far=O.far=Ee,(B!==A.near||ee!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,ee=A.far),O.layers.mask=Q.layers.mask|2,z.layers.mask=Q.layers.mask|4,A.layers.mask=O.layers.mask|z.layers.mask;const xe=Q.parent,Ae=A.cameras;ce(A,xe);for(let ke=0;ke<Ae.length;ke++)ce(Ae[ke],xe);Ae.length===2?G(A,O,z):A.projectionMatrix.copy(O.projectionMatrix),oe(Q,A,xe)};function oe(Q,fe,Ee){Ee===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ao*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&x===null))return f},this.setFoveation=function(Q){f=Q,v!==null&&(v.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let k=null;function re(Q,fe){if(m=fe.getViewerPose(d||c),M=fe,m!==null){const Ee=m.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let xe=!1;Ee.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let ke=0;ke<Ee.length;ke++){const tt=Ee[ke];let kt=null;if(x!==null)kt=x.getViewport(tt);else{const Wt=g.getViewSubImage(v,tt);kt=Wt.viewport,ke===0&&(e.setRenderTargetTextures(L,Wt.colorTexture,v.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(L))}let yt=P[ke];yt===void 0&&(yt=new Zn,yt.layers.enable(ke),yt.viewport=new Ht,P[ke]=yt),yt.matrix.fromArray(tt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(tt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(kt.x,kt.y,kt.width,kt.height),ke===0&&(A.matrix.copy(yt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(yt)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const ke=g.getDepthInformation(Ee[0]);ke&&ke.isValid&&ke.texture&&w.init(e,ke,o.renderState)}}for(let Ee=0;Ee<C.length;Ee++){const xe=T[Ee],Ae=C[Ee];xe!==null&&Ae!==void 0&&Ae.update(xe,fe,d||c)}k&&k(Q,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),M=null}const Oe=new Qg;Oe.setAnimationLoop(re),this.setAnimationLoop=function(Q){k=Q},this.dispose=function(){}}}const cs=new Pn,a2=new wt;function l2(s,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function i(S,y){y.color.getRGB(S.fogColor.value,Og(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,L,C,T){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,T)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),w(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?f(S,y,L,C):y.isSpriteMaterial?d(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Hn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Hn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=e.get(y),C=L.envMap,T=L.envMapRotation;C&&(S.envMap.value=C,cs.copy(T),cs.x*=-1,cs.y*=-1,cs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),S.envMapRotation.value.setFromMatrix4(a2.makeRotationFromEuler(cs)),S.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function f(S,y,L,C){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=C*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function d(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Hn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function w(S,y){const L=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function c2(s,e,t,i){let o={},l={},c=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,C){const T=C.program;i.uniformBlockBinding(L,T)}function d(L,C){let T=o[L.id];T===void 0&&(M(L),T=m(L),o[L.id]=T,L.addEventListener("dispose",S));const N=C.program;i.updateUBOMapping(L,N);const I=e.render.frame;l[L.id]!==I&&(v(L),l[L.id]=I)}function m(L){const C=g();L.__bindingPointIndex=C;const T=s.createBuffer(),N=L.__size,I=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,N,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,T),T}function g(){for(let L=0;L<h;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const C=o[L.id],T=L.uniforms,N=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let I=0,O=T.length;I<O;I++){const z=Array.isArray(T[I])?T[I]:[T[I]];for(let P=0,A=z.length;P<A;P++){const B=z[P];if(x(B,I,P,N)===!0){const ee=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let le=0;for(let he=0;he<K.length;he++){const ae=K[he],ue=w(ae);typeof ae=="number"||typeof ae=="boolean"?(B.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,ee+le,B.__data)):ae.isMatrix3?(B.__data[0]=ae.elements[0],B.__data[1]=ae.elements[1],B.__data[2]=ae.elements[2],B.__data[3]=0,B.__data[4]=ae.elements[3],B.__data[5]=ae.elements[4],B.__data[6]=ae.elements[5],B.__data[7]=0,B.__data[8]=ae.elements[6],B.__data[9]=ae.elements[7],B.__data[10]=ae.elements[8],B.__data[11]=0):(ae.toArray(B.__data,le),le+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(L,C,T,N){const I=L.value,O=C+"_"+T;if(N[O]===void 0)return typeof I=="number"||typeof I=="boolean"?N[O]=I:N[O]=I.clone(),!0;{const z=N[O];if(typeof I=="number"||typeof I=="boolean"){if(z!==I)return N[O]=I,!0}else if(z.equals(I)===!1)return z.copy(I),!0}return!1}function M(L){const C=L.uniforms;let T=0;const N=16;for(let O=0,z=C.length;O<z;O++){const P=Array.isArray(C[O])?C[O]:[C[O]];for(let A=0,B=P.length;A<B;A++){const ee=P[A],K=Array.isArray(ee.value)?ee.value:[ee.value];for(let le=0,he=K.length;le<he;le++){const ae=K[le],ue=w(ae),G=T%N,ce=G%ue.boundary,oe=G+ce;T+=ce,oe!==0&&N-oe<ue.storage&&(T+=N-oe),ee.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=T,T+=ue.storage}}}const I=T%N;return I>0&&(T+=N-I),L.__size=T,L.__cache={},this}function w(L){const C={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(C.boundary=4,C.storage=4):L.isVector2?(C.boundary=8,C.storage=8):L.isVector3||L.isColor?(C.boundary=16,C.storage=12):L.isVector4?(C.boundary=16,C.storage=16):L.isMatrix3?(C.boundary=48,C.storage=48):L.isMatrix4?(C.boundary=64,C.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),C}function S(L){const C=L.target;C.removeEventListener("dispose",S);const T=c.indexOf(C.__bindingPointIndex);c.splice(T,1),s.deleteBuffer(o[C.id]),delete o[C.id],delete l[C.id]}function y(){for(const L in o)s.deleteBuffer(o[L]);c=[],o={},l={}}return{bind:f,update:d,dispose:y}}class u2{constructor(e={}){const{canvas:t=ly(),context:i=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const M=new Uint32Array(4),w=new Int32Array(4);let S=null,y=null;const L=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=zn,this.toneMapping=zr,this.toneMappingExposure=1;const T=this;let N=!1,I=0,O=0,z=null,P=-1,A=null;const B=new Ht,ee=new Ht;let K=null;const le=new ut(0);let he=0,ae=t.width,ue=t.height,G=1,ce=null,oe=null;const k=new Ht(0,0,ae,ue),re=new Ht(0,0,ae,ue);let Oe=!1;const Q=new od;let fe=!1,Ee=!1;const xe=new wt,Ae=new wt,ke=new U,tt=new Ht,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Wt(){return z===null?G:1}let V=i;function Ln(b,Y){return t.getContext(b,Y)}try{const b={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zf}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Le,!1),V===null){const Y="webgl2";if(V=Ln(Y,b),V===null)throw Ln(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let _t,mt,Ze,Ut,qe,D,R,J,me,ve,de,je,Ce,ze,dt,Me,Ve,Je,nt,Ge,gt,at,Nt,j;function Re(){_t=new xE(V),_t.init(),at=new t2(V,_t),mt=new dE(V,_t,e,at),Ze=new Qw(V,_t),mt.reverseDepthBuffer&&v&&Ze.buffers.depth.setReversed(!0),Ut=new ME(V),qe=new Bw,D=new e2(V,_t,Ze,qe,mt,at,Ut),R=new mE(T),J=new _E(T),me=new b1(V),Nt=new hE(V,me),ve=new yE(V,me,Ut,Nt),de=new wE(V,ve,me,Ut),nt=new EE(V,mt,D),Me=new pE(qe),je=new zw(T,R,J,_t,mt,Nt,Me),Ce=new l2(T,qe),ze=new Vw,dt=new qw(_t),Je=new uE(T,R,J,Ze,de,x,f),Ve=new Kw(T,de,mt),j=new c2(V,Ut,mt,Ze),Ge=new fE(V,_t,Ut),gt=new SE(V,_t,Ut),Ut.programs=je.programs,T.capabilities=mt,T.extensions=_t,T.properties=qe,T.renderLists=ze,T.shadowMap=Ve,T.state=Ze,T.info=Ut}Re();const se=new o2(T,V);this.xr=se,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=_t.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=_t.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(b){b!==void 0&&(G=b,this.setSize(ae,ue,!1))},this.getSize=function(b){return b.set(ae,ue)},this.setSize=function(b,Y,ne=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=b,ue=Y,t.width=Math.floor(b*G),t.height=Math.floor(Y*G),ne===!0&&(t.style.width=b+"px",t.style.height=Y+"px"),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(ae*G,ue*G).floor()},this.setDrawingBufferSize=function(b,Y,ne){ae=b,ue=Y,G=ne,t.width=Math.floor(b*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,b,Y)},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(k)},this.setViewport=function(b,Y,ne,ie){b.isVector4?k.set(b.x,b.y,b.z,b.w):k.set(b,Y,ne,ie),Ze.viewport(B.copy(k).multiplyScalar(G).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,Y,ne,ie){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,Y,ne,ie),Ze.scissor(ee.copy(re).multiplyScalar(G).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){Ze.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){oe=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(b=!0,Y=!0,ne=!0){let ie=0;if(b){let W=!1;if(z!==null){const Se=z.texture.format;W=Se===id||Se===nd||Se===td}if(W){const Se=z.texture.type,be=Se===ar||Se===gs||Se===Ca||Se===Eo||Se===Jf||Se===Qf,Fe=Je.getClearColor(),Be=Je.getClearAlpha(),it=Fe.r,rt=Fe.g,$e=Fe.b;be?(M[0]=it,M[1]=rt,M[2]=$e,M[3]=Be,V.clearBufferuiv(V.COLOR,0,M)):(w[0]=it,w[1]=rt,w[2]=$e,w[3]=Be,V.clearBufferiv(V.COLOR,0,w))}else ie|=V.COLOR_BUFFER_BIT}Y&&(ie|=V.DEPTH_BUFFER_BIT),ne&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Je.dispose(),ze.dispose(),dt.dispose(),qe.dispose(),R.dispose(),J.dispose(),de.dispose(),Nt.dispose(),j.dispose(),je.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ms),se.removeEventListener("sessionend",cr),zi.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const b=Ut.autoReset,Y=Ve.enabled,ne=Ve.autoUpdate,ie=Ve.needsUpdate,W=Ve.type;Re(),Ut.autoReset=b,Ve.enabled=Y,Ve.autoUpdate=ne,Ve.needsUpdate=ie,Ve.type=W}function Le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){const Y=b.target;Y.removeEventListener("dispose",lt),jt(Y)}function jt(b){ln(b),qe.remove(b)}function ln(b){const Y=qe.get(b).programs;Y!==void 0&&(Y.forEach(function(ne){je.releaseProgram(ne)}),b.isShaderMaterial&&je.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,ne,ie,W,Se){Y===null&&(Y=kt);const be=W.isMesh&&W.matrixWorld.determinant()<0,Fe=Oa(b,Y,ne,ie,W);Ze.setMaterial(ie,be);let Be=ne.index,it=1;if(ie.wireframe===!0){if(Be=ve.getWireframeAttribute(ne),Be===void 0)return;it=2}const rt=ne.drawRange,$e=ne.attributes.position;let ct=rt.start*it,bt=(rt.start+rt.count)*it;Se!==null&&(ct=Math.max(ct,Se.start*it),bt=Math.min(bt,(Se.start+Se.count)*it)),Be!==null?(ct=Math.max(ct,0),bt=Math.min(bt,Be.count)):$e!=null&&(ct=Math.max(ct,0),bt=Math.min(bt,$e.count));const Pt=bt-ct;if(Pt<0||Pt===1/0)return;Nt.setup(W,ie,Fe,ne,Be);let $t,Tt=Ge;if(Be!==null&&($t=me.get(Be),Tt=gt,Tt.setIndex($t)),W.isMesh)ie.wireframe===!0?(Ze.setLineWidth(ie.wireframeLinewidth*Wt()),Tt.setMode(V.LINES)):Tt.setMode(V.TRIANGLES);else if(W.isLine){let Ke=ie.linewidth;Ke===void 0&&(Ke=1),Ze.setLineWidth(Ke*Wt()),W.isLineSegments?Tt.setMode(V.LINES):W.isLineLoop?Tt.setMode(V.LINE_LOOP):Tt.setMode(V.LINE_STRIP)}else W.isPoints?Tt.setMode(V.POINTS):W.isSprite&&Tt.setMode(V.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Tt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Tt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ke=W._multiDrawStarts,en=W._multiDrawCounts,Et=W._multiDrawCount,vn=Be?me.get(Be).bytesPerElement:1,gi=qe.get(ie).currentProgram.getUniforms();for(let In=0;In<Et;In++)gi.setValue(V,"_gl_DrawID",In),Tt.render(Ke[In]/vn,en[In])}else if(W.isInstancedMesh)Tt.renderInstances(ct,Pt,W.count);else if(ne.isInstancedBufferGeometry){const Ke=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,en=Math.min(ne.instanceCount,Ke);Tt.renderInstances(ct,Pt,en)}else Tt.render(ct,Pt)};function Ct(b,Y,ne){b.transparent===!0&&b.side===Kn&&b.forceSinglePass===!1?(b.side=Hn,b.needsUpdate=!0,Es(b,Y,ne),b.side=Hr,b.needsUpdate=!0,Es(b,Y,ne),b.side=Kn):Es(b,Y,ne)}this.compile=function(b,Y,ne=null){ne===null&&(ne=b),y=dt.get(ne),y.init(Y),C.push(y),ne.traverseVisible(function(W){W.isLight&&W.layers.test(Y.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),b!==ne&&b.traverseVisible(function(W){W.isLight&&W.layers.test(Y.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights();const ie=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let be=0;be<Se.length;be++){const Fe=Se[be];Ct(Fe,ne,W),ie.add(Fe)}else Ct(Se,ne,W),ie.add(Se)}),C.pop(),y=null,ie},this.compileAsync=function(b,Y,ne=null){const ie=this.compile(b,Y,ne);return new Promise(W=>{function Se(){if(ie.forEach(function(be){qe.get(be).currentProgram.isReady()&&ie.delete(be)}),ie.size===0){W(b);return}setTimeout(Se,10)}_t.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Gn=null;function Dn(b){Gn&&Gn(b)}function Ms(){zi.stop()}function cr(){zi.start()}const zi=new Qg;zi.setAnimationLoop(Dn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(b){Gn=b,se.setAnimationLoop(b),b===null?zi.stop():zi.start()},se.addEventListener("sessionstart",Ms),se.addEventListener("sessionend",cr),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(Y),Y=se.getCamera()),b.isScene===!0&&b.onBeforeRender(T,b,Y,z),y=dt.get(b,C.length),y.init(Y),C.push(y),Ae.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Q.setFromProjectionMatrix(Ae),Ee=this.localClippingEnabled,fe=Me.init(this.clippingPlanes,Ee),S=ze.get(b,L.length),S.init(),L.push(S),se.enabled===!0&&se.isPresenting===!0){const Se=T.xr.getDepthSensingMesh();Se!==null&&Bi(Se,Y,-1/0,T.sortObjects)}Bi(b,Y,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(ce,oe),yt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,yt&&Je.addToRenderList(S,b),this.info.render.frame++,fe===!0&&Me.beginShadows();const ne=y.state.shadowsArray;Ve.render(ne,b,Y),fe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=S.opaque,W=S.transmissive;if(y.setupLights(),Y.isArrayCamera){const Se=Y.cameras;if(W.length>0)for(let be=0,Fe=Se.length;be<Fe;be++){const Be=Se[be];Gr(ie,W,b,Be)}yt&&Je.render(b);for(let be=0,Fe=Se.length;be<Fe;be++){const Be=Se[be];Vr(S,b,Be,Be.viewport)}}else W.length>0&&Gr(ie,W,b,Y),yt&&Je.render(b),Vr(S,b,Y);z!==null&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),b.isScene===!0&&b.onAfterRender(T,b,Y),Nt.resetDefaultState(),P=-1,A=null,C.pop(),C.length>0?(y=C[C.length-1],fe===!0&&Me.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Bi(b,Y,ne,ie){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){ie&&tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);const be=de.update(b),Fe=b.material;Fe.visible&&S.push(b,be,Fe,ne,tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const be=de.update(b),Fe=b.material;if(ie&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),tt.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),tt.copy(be.boundingSphere.center)),tt.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray(Fe)){const Be=be.groups;for(let it=0,rt=Be.length;it<rt;it++){const $e=Be[it],ct=Fe[$e.materialIndex];ct&&ct.visible&&S.push(b,be,ct,ne,tt.z,$e)}}else Fe.visible&&S.push(b,be,Fe,ne,tt.z,null)}}const Se=b.children;for(let be=0,Fe=Se.length;be<Fe;be++)Bi(Se[be],Y,ne,ie)}function Vr(b,Y,ne,ie){const W=b.opaque,Se=b.transmissive,be=b.transparent;y.setupLightsView(ne),fe===!0&&Me.setGlobalState(T.clippingPlanes,ne),ie&&Ze.viewport(B.copy(ie)),W.length>0&&ur(W,Y,ne),Se.length>0&&ur(Se,Y,ne),be.length>0&&ur(be,Y,ne),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Gr(b,Y,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ie.id]===void 0&&(y.state.transmissionRenderTarget[ie.id]=new vs(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Da:ar,minFilter:ms,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Se=y.state.transmissionRenderTarget[ie.id],be=ie.viewport||B;Se.setSize(be.z,be.w);const Fe=T.getRenderTarget();T.setRenderTarget(Se),T.getClearColor(le),he=T.getClearAlpha(),he<1&&T.setClearColor(16777215,.5),T.clear(),yt&&Je.render(ne);const Be=T.toneMapping;T.toneMapping=zr;const it=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),y.setupLightsView(ie),fe===!0&&Me.setGlobalState(T.clippingPlanes,ie),ur(b,ne,ie),D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se),_t.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let $e=0,ct=Y.length;$e<ct;$e++){const bt=Y[$e],Pt=bt.object,$t=bt.geometry,Tt=bt.material,Ke=bt.group;if(Tt.side===Kn&&Pt.layers.test(ie.layers)){const en=Tt.side;Tt.side=Hn,Tt.needsUpdate=!0,Ua(Pt,ne,ie,$t,Tt,Ke),Tt.side=en,Tt.needsUpdate=!0,rt=!0}}rt===!0&&(D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se))}T.setRenderTarget(Fe),T.setClearColor(le,he),it!==void 0&&(ie.viewport=it),T.toneMapping=Be}function ur(b,Y,ne){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let W=0,Se=b.length;W<Se;W++){const be=b[W],Fe=be.object,Be=be.geometry,it=ie===null?be.material:ie,rt=be.group;Fe.layers.test(ne.layers)&&Ua(Fe,Y,ne,Be,it,rt)}}function Ua(b,Y,ne,ie,W,Se){b.onBeforeRender(T,Y,ne,ie,W,Se),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(T,Y,ne,ie,b,Se),W.transparent===!0&&W.side===Kn&&W.forceSinglePass===!1?(W.side=Hn,W.needsUpdate=!0,T.renderBufferDirect(ne,Y,ie,W,b,Se),W.side=Hr,W.needsUpdate=!0,T.renderBufferDirect(ne,Y,ie,W,b,Se),W.side=Kn):T.renderBufferDirect(ne,Y,ie,W,b,Se),b.onAfterRender(T,Y,ne,ie,W,Se)}function Es(b,Y,ne){Y.isScene!==!0&&(Y=kt);const ie=qe.get(b),W=y.state.lights,Se=y.state.shadowsArray,be=W.state.version,Fe=je.getParameters(b,W.state,Se,Y,ne),Be=je.getProgramCacheKey(Fe);let it=ie.programs;ie.environment=b.isMeshStandardMaterial?Y.environment:null,ie.fog=Y.fog,ie.envMap=(b.isMeshStandardMaterial?J:R).get(b.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,it===void 0&&(b.addEventListener("dispose",lt),it=new Map,ie.programs=it);let rt=it.get(Be);if(rt!==void 0){if(ie.currentProgram===rt&&ie.lightsStateVersion===be)return Ri(b,Fe),rt}else Fe.uniforms=je.getUniforms(b),b.onBeforeCompile(Fe,T),rt=je.acquireProgram(Fe,Be),it.set(Be,rt),ie.uniforms=Fe.uniforms;const $e=ie.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&($e.clippingPlanes=Me.uniform),Ri(b,Fe),ie.needsLights=Fc(b),ie.lightsStateVersion=be,ie.needsLights&&($e.ambientLightColor.value=W.state.ambient,$e.lightProbe.value=W.state.probe,$e.directionalLights.value=W.state.directional,$e.directionalLightShadows.value=W.state.directionalShadow,$e.spotLights.value=W.state.spot,$e.spotLightShadows.value=W.state.spotShadow,$e.rectAreaLights.value=W.state.rectArea,$e.ltc_1.value=W.state.rectAreaLTC1,$e.ltc_2.value=W.state.rectAreaLTC2,$e.pointLights.value=W.state.point,$e.pointLightShadows.value=W.state.pointShadow,$e.hemisphereLights.value=W.state.hemi,$e.directionalShadowMap.value=W.state.directionalShadowMap,$e.directionalShadowMatrix.value=W.state.directionalShadowMatrix,$e.spotShadowMap.value=W.state.spotShadowMap,$e.spotLightMatrix.value=W.state.spotLightMatrix,$e.spotLightMap.value=W.state.spotLightMap,$e.pointShadowMap.value=W.state.pointShadowMap,$e.pointShadowMatrix.value=W.state.pointShadowMatrix),ie.currentProgram=rt,ie.uniformsList=null,rt}function Fa(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=Tc.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function Ri(b,Y){const ne=qe.get(b);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.batchingColor=Y.batchingColor,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.instancingMorph=Y.instancingMorph,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}function Oa(b,Y,ne,ie,W){Y.isScene!==!0&&(Y=kt),D.resetTextureUnits();const Se=Y.fog,be=ie.isMeshStandardMaterial?Y.environment:null,Fe=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:To,Be=(ie.isMeshStandardMaterial?J:R).get(ie.envMap||be),it=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,rt=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),$e=!!ne.morphAttributes.position,ct=!!ne.morphAttributes.normal,bt=!!ne.morphAttributes.color;let Pt=zr;ie.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Pt=T.toneMapping);const $t=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Tt=$t!==void 0?$t.length:0,Ke=qe.get(ie),en=y.state.lights;if(fe===!0&&(Ee===!0||b!==A)){const nn=b===A&&ie.id===P;Me.setState(ie,b,nn)}let Et=!1;ie.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==en.state.version||Ke.outputColorSpace!==Fe||W.isBatchedMesh&&Ke.batching===!1||!W.isBatchedMesh&&Ke.batching===!0||W.isBatchedMesh&&Ke.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ke.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ke.instancing===!1||!W.isInstancedMesh&&Ke.instancing===!0||W.isSkinnedMesh&&Ke.skinning===!1||!W.isSkinnedMesh&&Ke.skinning===!0||W.isInstancedMesh&&Ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ke.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ke.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ke.instancingMorph===!1&&W.morphTexture!==null||Ke.envMap!==Be||ie.fog===!0&&Ke.fog!==Se||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Me.numPlanes||Ke.numIntersection!==Me.numIntersection)||Ke.vertexAlphas!==it||Ke.vertexTangents!==rt||Ke.morphTargets!==$e||Ke.morphNormals!==ct||Ke.morphColors!==bt||Ke.toneMapping!==Pt||Ke.morphTargetsCount!==Tt)&&(Et=!0):(Et=!0,Ke.__version=ie.version);let vn=Ke.currentProgram;Et===!0&&(vn=Es(ie,Y,W));let gi=!1,In=!1,Wr=!1;const zt=vn.getUniforms(),Nn=Ke.uniforms;if(Ze.useProgram(vn.program)&&(gi=!0,In=!0,Wr=!0),ie.id!==P&&(P=ie.id,In=!0),gi||A!==b){Ze.buffers.depth.getReversed()?(xe.copy(b.projectionMatrix),uy(xe),hy(xe),zt.setValue(V,"projectionMatrix",xe)):zt.setValue(V,"projectionMatrix",b.projectionMatrix),zt.setValue(V,"viewMatrix",b.matrixWorldInverse);const Mn=zt.map.cameraPosition;Mn!==void 0&&Mn.setValue(V,ke.setFromMatrixPosition(b.matrixWorld)),mt.logarithmicDepthBuffer&&zt.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&zt.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,In=!0,Wr=!0)}if(W.isSkinnedMesh){zt.setOptional(V,W,"bindMatrix"),zt.setOptional(V,W,"bindMatrixInverse");const nn=W.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),zt.setValue(V,"boneTexture",nn.boneTexture,D))}W.isBatchedMesh&&(zt.setOptional(V,W,"batchingTexture"),zt.setValue(V,"batchingTexture",W._matricesTexture,D),zt.setOptional(V,W,"batchingIdTexture"),zt.setValue(V,"batchingIdTexture",W._indirectTexture,D),zt.setOptional(V,W,"batchingColorTexture"),W._colorsTexture!==null&&zt.setValue(V,"batchingColorTexture",W._colorsTexture,D));const Sn=ne.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&nt.update(W,ne,vn),(In||Ke.receiveShadow!==W.receiveShadow)&&(Ke.receiveShadow=W.receiveShadow,zt.setValue(V,"receiveShadow",W.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Nn.envMap.value=Be,Nn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&Y.environment!==null&&(Nn.envMapIntensity.value=Y.environmentIntensity),In&&(zt.setValue(V,"toneMappingExposure",T.toneMappingExposure),Ke.needsLights&&ka(Nn,Wr),Se&&ie.fog===!0&&Ce.refreshFogUniforms(Nn,Se),Ce.refreshMaterialUniforms(Nn,ie,G,ue,y.state.transmissionRenderTarget[b.id]),Tc.upload(V,Fa(Ke),Nn,D)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Tc.upload(V,Fa(Ke),Nn,D),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&zt.setValue(V,"center",W.center),zt.setValue(V,"modelViewMatrix",W.modelViewMatrix),zt.setValue(V,"normalMatrix",W.normalMatrix),zt.setValue(V,"modelMatrix",W.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const nn=ie.uniformsGroups;for(let Mn=0,Xr=nn.length;Mn<Xr;Mn++){const xt=nn[Mn];j.update(xt,vn),j.bind(xt,vn)}}return vn}function ka(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function Fc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(b,Y,ne){qe.get(b.texture).__webglTexture=Y,qe.get(b.depthTexture).__webglTexture=ne;const ie=qe.get(b);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,Y){const ne=qe.get(b);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(b,Y=0,ne=0){z=b,I=Y,O=ne;let ie=!0,W=null,Se=!1,be=!1;if(b){const Be=qe.get(b);if(Be.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(V.FRAMEBUFFER,null),ie=!1;else if(Be.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Be.__hasExternalTextures)D.rebindTextures(b,qe.get(b.texture).__webglTexture,qe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const $e=b.depthTexture;if(Be.__boundDepthTexture!==$e){if($e!==null&&qe.has($e)&&(b.width!==$e.image.width||b.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const it=b.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(be=!0);const rt=qe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(rt[Y])?W=rt[Y][ne]:W=rt[Y],Se=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?W=qe.get(b).__webglMultisampledFramebuffer:Array.isArray(rt)?W=rt[ne]:W=rt,B.copy(b.viewport),ee.copy(b.scissor),K=b.scissorTest}else B.copy(k).multiplyScalar(G).floor(),ee.copy(re).multiplyScalar(G).floor(),K=Oe;if(Ze.bindFramebuffer(V.FRAMEBUFFER,W)&&ie&&Ze.drawBuffers(b,W),Ze.viewport(B),Ze.scissor(ee),Ze.setScissorTest(K),Se){const Be=qe.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Be.__webglTexture,ne)}else if(be){const Be=qe.get(b.texture),it=Y||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Be.__webglTexture,ne||0,it)}P=-1},this.readRenderTargetPixels=function(b,Y,ne,ie,W,Se,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=qe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe){Ze.bindFramebuffer(V.FRAMEBUFFER,Fe);try{const Be=b.texture,it=Be.format,rt=Be.type;if(!mt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-ie&&ne>=0&&ne<=b.height-W&&V.readPixels(Y,ne,ie,W,at.convert(it),at.convert(rt),Se)}finally{const Be=z!==null?qe.get(z).__webglFramebuffer:null;Ze.bindFramebuffer(V.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,Y,ne,ie,W,Se,be){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=qe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe){const Be=b.texture,it=Be.format,rt=Be.type;if(!mt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=b.width-ie&&ne>=0&&ne<=b.height-W){Ze.bindFramebuffer(V.FRAMEBUFFER,Fe);const $e=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.bufferData(V.PIXEL_PACK_BUFFER,Se.byteLength,V.STREAM_READ),V.readPixels(Y,ne,ie,W,at.convert(it),at.convert(rt),0);const ct=z!==null?qe.get(z).__webglFramebuffer:null;Ze.bindFramebuffer(V.FRAMEBUFFER,ct);const bt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await cy(V,bt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$e),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Se),V.deleteBuffer($e),V.deleteSync(bt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,Y=null,ne=0){b.isTexture!==!0&&(fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1]);const ie=Math.pow(2,-ne),W=Math.floor(b.image.width*ie),Se=Math.floor(b.image.height*ie),be=Y!==null?Y.x:0,Fe=Y!==null?Y.y:0;D.setTexture2D(b,0),V.copyTexSubImage2D(V.TEXTURE_2D,ne,0,0,be,Fe,W,Se),Ze.unbindTexture()};const za=V.createFramebuffer(),Ba=V.createFramebuffer();this.copyTextureToTexture=function(b,Y,ne=null,ie=null,W=0,Se=null){b.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,b=arguments[1],Y=arguments[2],Se=arguments[3]||0,ne=null),Se===null&&(W!==0?(fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=W,W=0):Se=0);let be,Fe,Be,it,rt,$e,ct,bt,Pt;const $t=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(ne!==null)be=ne.max.x-ne.min.x,Fe=ne.max.y-ne.min.y,Be=ne.isBox3?ne.max.z-ne.min.z:1,it=ne.min.x,rt=ne.min.y,$e=ne.isBox3?ne.min.z:0;else{const Sn=Math.pow(2,-W);be=Math.floor($t.width*Sn),Fe=Math.floor($t.height*Sn),b.isDataArrayTexture?Be=$t.depth:b.isData3DTexture?Be=Math.floor($t.depth*Sn):Be=1,it=0,rt=0,$e=0}ie!==null?(ct=ie.x,bt=ie.y,Pt=ie.z):(ct=0,bt=0,Pt=0);const Tt=at.convert(Y.format),Ke=at.convert(Y.type);let en;Y.isData3DTexture?(D.setTexture3D(Y,0),en=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(D.setTexture2DArray(Y,0),en=V.TEXTURE_2D_ARRAY):(D.setTexture2D(Y,0),en=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Et=V.getParameter(V.UNPACK_ROW_LENGTH),vn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),gi=V.getParameter(V.UNPACK_SKIP_PIXELS),In=V.getParameter(V.UNPACK_SKIP_ROWS),Wr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,$t.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,$t.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,it),V.pixelStorei(V.UNPACK_SKIP_ROWS,rt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,$e);const zt=b.isDataArrayTexture||b.isData3DTexture,Nn=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const Sn=qe.get(b),nn=qe.get(Y),Mn=qe.get(Sn.__renderTarget),Xr=qe.get(nn.__renderTarget);Ze.bindFramebuffer(V.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ze.bindFramebuffer(V.DRAW_FRAMEBUFFER,Xr.__webglFramebuffer);for(let xt=0;xt<Be;xt++)zt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.get(b).__webglTexture,W,$e+xt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,qe.get(Y).__webglTexture,Se,Pt+xt)),V.blitFramebuffer(it,rt,be,Fe,ct,bt,be,Fe,V.DEPTH_BUFFER_BIT,V.NEAREST);Ze.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||qe.has(b)){const Sn=qe.get(b),nn=qe.get(Y);Ze.bindFramebuffer(V.READ_FRAMEBUFFER,za),Ze.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ba);for(let Mn=0;Mn<Be;Mn++)zt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Sn.__webglTexture,W,$e+Mn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Sn.__webglTexture,W),Nn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,nn.__webglTexture,Se,Pt+Mn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,nn.__webglTexture,Se),W!==0?V.blitFramebuffer(it,rt,be,Fe,ct,bt,be,Fe,V.COLOR_BUFFER_BIT,V.NEAREST):Nn?V.copyTexSubImage3D(en,Se,ct,bt,Pt+Mn,it,rt,be,Fe):V.copyTexSubImage2D(en,Se,ct,bt,it,rt,be,Fe);Ze.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Nn?b.isDataTexture||b.isData3DTexture?V.texSubImage3D(en,Se,ct,bt,Pt,be,Fe,Be,Tt,Ke,$t.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(en,Se,ct,bt,Pt,be,Fe,Be,Tt,$t.data):V.texSubImage3D(en,Se,ct,bt,Pt,be,Fe,Be,Tt,Ke,$t):b.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Se,ct,bt,be,Fe,Tt,Ke,$t.data):b.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Se,ct,bt,$t.width,$t.height,Tt,$t.data):V.texSubImage2D(V.TEXTURE_2D,Se,ct,bt,be,Fe,Tt,Ke,$t);V.pixelStorei(V.UNPACK_ROW_LENGTH,Et),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,gi),V.pixelStorei(V.UNPACK_SKIP_ROWS,In),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wr),Se===0&&Y.generateMipmaps&&V.generateMipmap(en),Ze.unbindTexture()},this.copyTextureToTexture3D=function(b,Y,ne=null,ie=null,W=0){return b.isTexture!==!0&&(fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,b=arguments[2],Y=arguments[3],W=arguments[4]||0),fo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,Y,ne,ie,W)},this.initRenderTarget=function(b){qe.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Ze.unbindTexture()},this.resetState=function(){I=0,O=0,z=null,Ze.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}const h2=new U(0,1,0),rv=s=>{let e=s>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}},At=(s,e,t=!0,i=!0)=>(e.castShadow=t,e.receiveShadow=i,s.add(e),e),Te=(s,e,t,i,o=!0,l=!0)=>{const c=new Ue(new Oi(...e),t);return c.position.set(...i),At(s,c,o,l)},Ft=(s,e,t,i,o,l,c)=>{const h=new Ue(new Bn(e,t,i,o),l);return h.position.set(...c),At(s,h)},Ac=(s,e,t,i,o,l,c=7)=>{const h=t.clone().sub(e),f=h.length(),d=new Ue(new Bn(o,i,f,c),l);return d.position.copy(e).add(t).multiplyScalar(.5),d.quaternion.setFromUnitVectors(h2,h.normalize()),d.castShadow=!0,d.receiveShadow=!0,s.add(d),d},f2=s=>s*s*(3-2*s),d2=(s,e,t,i,o)=>{const h=[],f=[],d=[];for(let g=0;g<=14;g+=1){const v=g/14;for(let x=0;x<=28;x+=1){const M=x/28*2-1,w=1-v*.1,S=M*(s/2)*w,y=i*(e/2)*(1-v),L=Math.pow(Math.abs(M),4.5)*(1-v)*o,C=f2(v)*t+L;h.push(S,C,y),f.push((M+1)/2,v)}}for(let g=0;g<14;g+=1)for(let v=0;v<28;v+=1){const x=g*29+v,M=x+1,w=x+28+2,S=x+28+1;i===1?d.push(x,M,w,x,w,S):d.push(x,w,M,x,S,w)}const m=new yn;return m.setAttribute("position",new Gt(h,3)),m.setAttribute("uv",new Gt(f,2)),m.setIndex(d),m.computeVertexNormals(),m},Jh=(s,{width:e,depth:t,rise:i,cornerLift:o=.58,ridgeLength:l=e*.74,showGable:c=!0})=>{const h=new Mt;h.name="CurvedChineseRoof";for(const d of[-1,1]){const m=new Ue(d2(e,t,i,d,o),s.roof);m.castShadow=!0,m.receiveShadow=!0,h.add(m);const g=Te(h,[e+.26,.18,.18],s.roofDark,[0,.03,d*(t/2+.01)]);g.rotation.x=d*.05;const v=new Bn(.095,.095,.16,8),x=Math.floor(e/.32),M=new Br(v,s.roofDark,x),w=new wt,S=new Vn().setFromEuler(new Pn(Math.PI/2,0,0)),y=new U(1,1,1);for(let L=0;L<x;L+=1){const C=x===1?0:L/(x-1),T=(C-.5)*(e-.16),N=Math.pow(Math.abs(C*2-1),4.5)*o;w.compose(new U(T,N+.055,d*(t/2+.08)),S,y),M.setMatrixAt(L,w)}M.castShadow=!0,M.receiveShadow=!0,h.add(M)}const f=Te(h,[l,.24,.32],s.roofDark,[0,i+.07,0]);f.castShadow=!0,Te(h,[l-.45,.08,.43],s.roof,[0,i+.21,0]);for(const d of[-1,1]){const m=d*(l/2+.08);Te(h,[.22,.38,.38],s.roofDark,[m,i+.18,0]);const g=new Ue(new Or(.2,.62,6),s.roofDark);g.position.set(m+d*.08,i+.55,0),g.rotation.z=d*-.24,At(h,g)}if(c){const d=new cd;d.moveTo(-t/2,0),d.lineTo(t/2,0),d.lineTo(0,i),d.closePath();for(const m of[-1,1]){const g=new Ue(new Nc(d),s.plaster);g.rotation.y=Math.PI/2,g.position.x=m*(e/2-.5),At(h,g),Ac(h,new U(m*(e/2-.48),.04,-t/2+.15),new U(m*(e/2-.48),i-.2,0),.055,.055,s.woodDark),Ac(h,new U(m*(e/2-.48),.04,t/2-.15),new U(m*(e/2-.48),i-.2,0),.055,.055,s.woodDark)}}for(const d of[-1,1])for(const m of[-1,1]){const g=d*(e/2-.04),v=m*(t/2-.04);Ac(h,new U(g,.02,v),new U(g+d*.55,o+.22,v+m*.14),.08,.04,s.roofDark)}return h},Qh=(s,e,t,i,o,l=1)=>{const c=new Mt;c.name="DougongBracketBand";const h=new Oi(1,1,1),f=new Br(h,s.woodDark,o*3),d=new Br(h,s.wood,o*4),m=new Br(h,s.gold,o*2),g=new wt,v=new Vn;let x=0,M=0,w=0;for(let S=0;S<o;S+=1){const L=((o===1?0:S/(o-1))-.5)*e,C=l*(.92+S%3*.025);g.compose(new U(L,t+.14*l,i+.03),v,new U(.2*C,.35*C,.22*C)),f.setMatrixAt(x++,g),g.compose(new U(L,t+.36*l,i),v,new U(.72*C,.13*C,.26*C)),d.setMatrixAt(M++,g),g.compose(new U(L,t+.51*l,i-.03),v,new U(1.04*C,.11*C,.24*C)),d.setMatrixAt(M++,g);for(const T of[-1,1])g.compose(new U(L+T*.36*C,t+.64*l,i-.05),new Vn().setFromEuler(new Pn(0,0,T*.32)),new U(.66*C,.1*C,.19*C)),d.setMatrixAt(M++,g),g.compose(new U(L+T*.62*C,t+.73*l,i-.075),new Vn().setFromEuler(new Pn(0,0,T*.6)),new U(.17*C,.13*C,.18*C)),m.setMatrixAt(w++,g);g.compose(new U(L,t+.81*l,i-.08),v,new U(.17*C,.17*C,.2*C)),f.setMatrixAt(x++,g),g.compose(new U(L,t+.96*l,i-.1),v,new U(.38*C,.1*C,.2*C)),d.setMatrixAt(M++,g),g.compose(new U(L,t+1.07*l,i-.12),v,new U(.12*C,.13*C,.17*C)),f.setMatrixAt(x++,g)}for(const S of[f,d,m])S.castShadow=!0,S.receiveShadow=!0,c.add(S);return c},_c=(s,{width:e,height:t,columns:i=6,rows:o=8,frame:l=.09,includePaper:c=!0,diagonal:h=!0})=>{const f=new Mt;if(f.name="LatticePanel",c){const M=new Ue(new mi(e-.08,t-.08),s.paper);M.position.z=-.035,M.receiveShadow=!0,f.add(M)}Te(f,[e,l,.1],s.woodDark,[0,t/2,0]),Te(f,[e,l,.1],s.woodDark,[0,-t/2,0]),Te(f,[l,t,.1],s.woodDark,[-e/2,0,0]),Te(f,[l,t,.1],s.woodDark,[e/2,0,0]);const d=new Oi(1,1,1),m=i+o+(h?i*2:0),g=new Br(d,s.wood,m),v=new wt;let x=0;for(let M=1;M<i;M+=1){const w=-e/2+e*M/i;v.compose(new U(w,0,.02),new Vn,new U(.038,t-.1,.075)),g.setMatrixAt(x++,v)}for(let M=1;M<o;M+=1){const w=-t/2+t*M/o;v.compose(new U(0,w,.022),new Vn,new U(e-.1,.036,.075)),g.setMatrixAt(x++,v)}if(h){const M=(e-.12)/i,w=(t-.12)/o,S=Math.sqrt(M*M+w*w)*.74,y=Math.atan2(w,M);for(let L=0;L<i;L+=1)for(const C of[-1,1]){const T=-e/2+M*(L+.5),N=0;v.compose(new U(T,N,.03),new Vn().setFromEuler(new Pn(0,0,C*y)),new U(.026,S,.06)),g.setMatrixAt(x++,v)}}return g.count=x,g.castShadow=!0,g.receiveShadow=!0,f.add(g),f},p2=(s,e=!1)=>{const t=document.createElement("canvas");t.width=e?256:768,t.height=e?768:256;const i=t.getContext("2d");if(!i)throw new Error("Canvas 2D context unavailable");const o=i.createLinearGradient(0,0,t.width,t.height);if(o.addColorStop(0,"#56311e"),o.addColorStop(.5,"#2b2118"),o.addColorStop(1,"#4b2b1b"),i.fillStyle=o,i.fillRect(0,0,t.width,t.height),i.strokeStyle="#9d7e47",i.lineWidth=11,i.strokeRect(13,13,t.width-26,t.height-26),i.strokeStyle="rgba(235, 211, 158, 0.35)",i.lineWidth=3,i.strokeRect(27,27,t.width-54,t.height-54),i.fillStyle="#d6b878",i.textAlign="center",i.textBaseline="middle",i.shadowColor="rgba(0,0,0,0.5)",i.shadowBlur=5,i.shadowOffsetY=3,e){i.font='700 142px "STKaiti", "KaiTi", "Microsoft YaHei", serif';const c=[...s],h=t.height/(c.length+1);c.forEach((f,d)=>{i.fillText(f,t.width/2,h*(d+1))})}else i.font='700 126px "STKaiti", "KaiTi", "Microsoft YaHei", serif',i.fillText(s,t.width/2,t.height/2+3);const l=new Gg(t);return l.colorSpace=zn,l.anisotropy=8,l},ef=(s,e,t,i,o=!1)=>{const l=new Mt;l.name=`Plaque-${e}`,Te(l,[t+.18,i+.18,.14],s.woodDark,[0,0,-.02]);const c=new Ue(new mi(t,i),new nr({map:p2(e,o)}));return c.position.z=.06,l.add(c),l},tf=(s,e=1,t=!1)=>{const i=new Mt;i.name="HangingLantern";const o=Ft(i,.022*e,.022*e,.72*e,6,s.woodDark,[0,.66*e,0]);o.castShadow=!1,Ft(i,.28*e,.25*e,.13*e,10,s.woodDark,[0,.3*e,0]);const l=new St({color:"#c47a36",emissive:"#ffb45b",emissiveIntensity:.8,roughness:.62}),c=new Ue(new Bn(.25*e,.3*e,.6*e,10),l);if(c.position.y=-.02*e,At(i,c),Ft(i,.22*e,.25*e,.11*e,10,s.woodDark,[0,-.36*e,0]),Ft(i,.04*e,.015*e,.3*e,5,s.redLacquer,[0,-.54*e,0]),t){const h=new Lc("#ffb561",3.2,5.4,2);h.position.y=-.02,i.add(h)}return i},m2=s=>{const e=new Mt;e.name="StoneLantern",Ft(e,.42,.5,.22,8,s.stoneDark,[0,.11,0]),Ft(e,.17,.22,1.05,8,s.stone,[0,.73,0]),Te(e,[.62,.15,.62],s.stone,[0,1.32,0]),Te(e,[.44,.46,.44],s.stoneLight,[0,1.6,0]),Te(e,[.24,.27,.46],s.black,[0,1.58,0]);const t=new Ue(new Or(.52,.38,4),s.stoneDark);return t.rotation.y=Math.PI/4,t.position.y=1.98,At(e,t),Ft(e,.05,.11,.28,6,s.stoneDark,[0,2.28,0]),e},g2=s=>{const e=new Mt;e.name="WishTree";const t=new Mt;t.name="WishRibbons";const i=rv(5201314),o=[],l=[];Ft(e,.72,.92,.38,10,s.stoneDark,[0,.19,0]),Ft(e,.53,.7,.08,10,s.moss,[0,.41,0]);const c=(x,M,w,S,y)=>{const L=x.clone().add(M.clone().normalize().multiplyScalar(w));if(Ac(e,x,L,S,Math.max(.025,S*.62),y<2?s.woodDark:s.wood,y<2?9:6),y>=3){const T=7+Math.floor(i()*7);for(let N=0;N<T;N+=1)o.push(new U(L.x+(i()-.5)*2.8,L.y+(i()-.3)*1.8,L.z+(i()-.5)*2.8));i()>.44&&l.push(new U(L.x+(i()-.5)*.6,L.y-.15,L.z+(i()-.5)*.6));return}const C=y===0?4:2+(i()>.45?1:0);for(let T=0;T<C;T+=1){const N=i()*Math.PI*2,I=.55+i()*.58,O=new U(Math.cos(N)*I,.55+i()*.85,Math.sin(N)*I).normalize(),z=M.clone().multiplyScalar(.48).add(O.multiplyScalar(.9)).normalize();c(L,z,w*(.57+i()*.13),S*.62,y+1)}};c(new U(0,.42,0),new U(.08,1,.02),4.2,.53,0);const h=new rr(.59,1),f=new Br(h,s.leaf,o.length),d=new wt;o.forEach((x,M)=>{const w=.55+i()*.75;d.compose(x,new Vn().setFromEuler(new Pn(i()*Math.PI,i()*Math.PI,i()*Math.PI)),new U(w*1.35,w*.7,w)),f.setMatrixAt(M,d)}),f.castShadow=!0,f.receiveShadow=!0,e.add(f);const m=new mi(.17,.94),g=new Br(m,s.ribbon,l.length),v=new wt;return l.forEach((x,M)=>{v.compose(x,new Vn().setFromEuler(new Pn(.08,i()*Math.PI,(i()-.5)*.3)),new U(.8,1,.8)),g.setMatrixAt(M,v)}),g.castShadow=!0,t.add(g),e.add(t),{root:e,ribbons:t}},v2=(s,e,t=11)=>{const i=new Mt;i.name="BambooCluster";const o=rv(e);for(let l=0;l<t;l+=1){const c=(o()-.5)*2.4,h=(o()-.5)*2.1,f=2.9+o()*3.2,d=(o()-.5)*.28,m=new Ue(new Bn(.035,.06,f,6),s.moss);m.position.set(c+d,f/2,h),m.rotation.z=d*.35,At(i,m);for(let g=0;g<4;g+=1){const v=new Ue(new mi(.58+o()*.42,.16),s.leafLight);v.position.set(c+d+(o()-.5)*.9,f*(.56+g*.1),h+(o()-.5)*.65),v.rotation.set(o()*.6-.3,o()*Math.PI,o()*.8-.4),v.castShadow=!0,i.add(v)}}return i},_2=()=>({robe:new St({color:"#56706a",roughness:.88,flatShading:!0}),robeLight:new St({color:"#bec4b2",roughness:.84,flatShading:!0}),trim:new St({color:"#91392f",roughness:.7}),skin:new St({color:"#c79a78",roughness:.92}),hair:new St({color:"#252321",roughness:.94}),shoe:new St({color:"#2b2823",roughness:.92}),sash:new St({color:"#a3814d",roughness:.55,metalness:.08})}),x2=s=>{const e=new Mt;e.name="PlayerAvatar";const t=new Mt;e.add(t);const i=_2(),o=new Mt;t.add(o);const l=new Ue(new Bn(.26,.48,1.13,9,2),i.robe);l.position.y=1.08,At(o,l);const c=new Ue(new mi(.38,.78),i.robeLight);c.position.set(0,1.08,.425),c.rotation.x=-.08,At(o,c),Te(o,[.56,.11,.32],i.sash,[0,1.28,.03]),Te(o,[.11,.58,.05],i.trim,[.13,1.5,.29]).rotation.z=-.43,Te(o,[.11,.58,.05],i.trim,[-.13,1.5,.29]).rotation.z=.43,Te(o,[.68,.13,.34],i.robe,[0,1.6,0]);for(const N of[-1,1]){const I=new Mt;I.position.set(N*.35,1.55,0),o.add(I);const O=new Ue(new Bn(.25,.18,.62,8),i.robe);O.position.y=-.28,O.rotation.z=N*.12,At(I,O);const z=new Ue(new Bn(.12,.16,.54,7),i.robeLight);z.position.set(N*.02,-.78,.04),At(I,z);const P=new Ue(new rr(.09,1),i.skin);P.position.set(N*.02,-1.08,.06),At(I,P),I.name=N<0?"ArmLeft":"ArmRight"}for(const N of[-1,1]){const I=new Mt;I.position.set(N*.17,.74,0),o.add(I);const O=new Ue(new Bn(.11,.13,.68,7),i.robe);O.position.y=-.34,At(I,O);const z=new Ue(new Oi(.2,.11,.34),i.shoe);z.position.set(0,-.7,.07),At(I,z),I.name=N<0?"LegLeft":"LegRight"}const h=new Ue(new Bn(.09,.1,.14,8),i.skin);h.position.y=1.72,At(o,h);const f=new Ue(new rr(.205,2),i.skin);f.scale.set(.9,1.07,.92),f.position.y=1.92,At(o,f);const d=new Ue(new sr(.215,12,8,0,Math.PI*2,0,Math.PI*.6),i.hair);d.scale.set(.91,1.03,.93),d.position.set(0,1.95,-.025),At(o,d);const m=new Mt;Ft(m,.09,.12,.24,7,i.hair,[0,2.2,-.02]),Te(m,[.23,.035,.035],i.sash,[0,2.28,-.02]),o.add(m);const g=new Mt,v=new Ue(new rr(.125,2),i.hair);v.scale.set(1.09,.92,1),v.position.set(0,2.17,-.1),At(g,v);for(let N=0;N<4;N+=1){const I=new Ue(new rr(.065-N*.008,1),i.hair);I.position.set(Math.sin(N*.8)*.025,1.86-N*.13,-.19),At(g,I)}const x=Ft(g,.018,.018,.36,5,i.sash,[.12,2.18,-.02]);x.rotation.z=Math.PI/2.6,x.rotation.y=.22,o.add(g);for(const N of[-1,1]){const I=new Ue(new sr(.018,5,4),i.hair);I.position.set(N*.075,1.94,.205),o.add(I)}const M=new Mt;M.position.set(.32,1.22,.26);for(let N=0;N<3;N+=1)Ft(M,.012,.006,.36,4,i.trim,[(N-1)*.035,-.22,0]);At(M,new Ue(new tr(.055,.012,4,8),i.sash)),o.add(M);const w=new Ue(new xo(.54,20),new nr({color:"#17201b",transparent:!0,opacity:.24,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.y=.015,e.add(w);const S=[o.getObjectByName("LegLeft"),o.getObjectByName("LegRight")],y=[o.getObjectByName("ArmLeft"),o.getObjectByName("ArmRight")],L=N=>{m.visible=N==="male",g.visible=N==="female",N==="female"?(i.robe.color.set("#687f78"),i.robeLight.color.set("#d7cdb8"),i.trim.color.set("#9d4037")):(i.robe.color.set("#405e59"),i.robeLight.color.set("#c4c8b8"),i.trim.color.set("#8f382e"))},C=(N,I)=>{const O=Math.min(1,I/3.2),z=N*(7.6+O*2.2),P=Math.sin(z)*.5*O;S.forEach((A,B)=>{A&&(A.rotation.x=B===0?P:-P)}),y.forEach((A,B)=>{A&&(A.rotation.x=B===0?-P*.74:P*.74,A.rotation.z=(B===0?-1:1)*(.09+O*.03))}),o.position.y=O>.02?Math.abs(Math.sin(z))*.025:0,o.rotation.z=Math.sin(N*1.3)*.004,M.rotation.z=Math.sin(N*3.3)*(.05+O*.16)},T=()=>{e.traverse(N=>{N instanceof Ue&&N.geometry.dispose()}),Object.values(i).forEach(N=>N.dispose()),w.material.dispose()};return L(s),{root:e,update:C,setPreset:L,dispose:T}},y2=s=>{let e=s>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}},Ss=(s,e,t,i=1,o=1,l=1)=>{const c=document.createElement("canvas");c.width=s,c.height=e;const h=c.getContext("2d");if(!h)throw new Error("Canvas 2D context unavailable");t(h,s,e,y2(l));const f=new Gg(c);return f.wrapS=Aa,f.wrapT=Aa,f.repeat.set(i,o),f.colorSpace=zn,f.anisotropy=8,f},S2=()=>Ss(512,512,(s,e,t,i)=>{s.fillStyle="#a7aaa1",s.fillRect(0,0,e,t);const o=128,l=96;for(let c=-1;c<7;c+=1){const h=c%2===0?0:o/2;for(let f=-1;f<6;f+=1){const d=f*o+h,m=c*l,g=145+Math.floor(i()*23),v=Math.floor(i()*7);s.fillStyle=`rgb(${g+v}, ${g+3}, ${g-1})`,s.fillRect(d+2,m+2,o-4,l-4),s.strokeStyle="rgba(52, 61, 57, 0.46)",s.lineWidth=3,s.strokeRect(d,m,o,l),s.strokeStyle="rgba(255, 255, 246, 0.12)",s.lineWidth=1,s.beginPath(),s.moveTo(d+5,m+5),s.lineTo(d+o-7,m+5),s.stroke()}}for(let c=0;c<650;c+=1){const h=.02+i()*.05;s.fillStyle=`rgba(45, 58, 48, ${h})`,s.beginPath(),s.ellipse(i()*e,i()*t,1+i()*9,.4+i()*2.8,i()*Math.PI,0,Math.PI*2),s.fill()}},5,6,9),M2=()=>Ss(256,256,(s,e,t,i)=>{s.fillStyle="#d8d0bf",s.fillRect(0,0,e,t);for(let l=0;l<700;l+=1){const c=i()>.45;s.fillStyle=c?`rgba(255,255,248,${.018+i()*.04})`:`rgba(74,69,58,${.012+i()*.028})`,s.beginPath(),s.arc(i()*e,i()*t,.8+i()*8,0,Math.PI*2),s.fill()}const o=s.createLinearGradient(0,0,e,t);o.addColorStop(0,"rgba(255,255,247,0.15)"),o.addColorStop(.55,"rgba(255,255,255,0)"),o.addColorStop(1,"rgba(83,73,57,0.1)"),s.fillStyle=o,s.fillRect(0,0,e,t)},2,2,33),E2=()=>Ss(256,512,(s,e,t,i)=>{const o=s.createLinearGradient(0,0,e,0);o.addColorStop(0,"#47211b"),o.addColorStop(.2,"#642d24"),o.addColorStop(.48,"#79372b"),o.addColorStop(.76,"#5b291f"),o.addColorStop(1,"#3d1c17"),s.fillStyle=o,s.fillRect(0,0,e,t);for(let l=0;l<72;l+=1){const c=i()*e;s.strokeStyle=`rgba(31, 12, 9, ${.04+i()*.14})`,s.lineWidth=.4+i()*1.8,s.beginPath(),s.moveTo(c,0),s.bezierCurveTo(c+i()*18-9,t*.3,c+i()*15-7.5,t*.7,c+i()*10-5,t),s.stroke()}for(let l=0;l<10;l+=1){const c=i()*e,h=i()*t;s.strokeStyle="rgba(30, 12, 9, 0.18)",s.lineWidth=2,s.beginPath(),s.ellipse(c,h,4+i()*8,12+i()*22,0,0,Math.PI*2),s.stroke()}},1,1,71),w2=()=>Ss(512,512,(s,e,t,i)=>{s.fillStyle="#303b3a",s.fillRect(0,0,e,t);for(let o=0;o<e;o+=32){const l=s.createLinearGradient(o,0,o+32,0);l.addColorStop(0,"rgba(17, 24, 23, 0.56)"),l.addColorStop(.18,"rgba(101, 111, 105, 0.38)"),l.addColorStop(.52,"rgba(67, 78, 74, 0.08)"),l.addColorStop(.8,"rgba(15, 21, 20, 0.4)"),l.addColorStop(1,"rgba(7, 12, 11, 0.68)"),s.fillStyle=l,s.fillRect(o,0,32,t),s.strokeStyle="rgba(8, 13, 12, 0.7)",s.lineWidth=3,s.beginPath(),s.moveTo(o+1,0),s.lineTo(o+1,t),s.stroke()}for(let o=20;o<t;o+=42)for(let l=0;l<e;l+=32){const c=s.createRadialGradient(l+16,o-10,2,l+16,o+4,35);c.addColorStop(0,"rgba(151, 158, 148, 0.2)"),c.addColorStop(.42,"rgba(53, 65, 61, 0.12)"),c.addColorStop(1,"rgba(7, 12, 11, 0.54)"),s.fillStyle=c,s.beginPath(),s.ellipse(l+16,o,17,29,0,0,Math.PI*2),s.fill()}for(let o=0;o<160;o+=1)s.fillStyle=`rgba(171, 178, 163, ${i()*.025})`,s.fillRect(i()*e,i()*t,2+i()*8,2)},5,4,5),T2=()=>Ss(128,256,(s,e,t,i)=>{s.fillStyle="#d8c89e",s.fillRect(0,0,e,t);for(let l=0;l<90;l+=1)s.strokeStyle=`rgba(106, 82, 45, ${.025+i()*.055})`,s.lineWidth=.45,s.beginPath(),s.moveTo(i()*e,i()*t),s.lineTo(i()*e,i()*t),s.stroke();const o=s.createRadialGradient(e*.5,t*.32,2,e*.5,t*.32,t*.7);o.addColorStop(0,"rgba(255,248,215,0.42)"),o.addColorStop(1,"rgba(96,72,41,0.12)"),s.fillStyle=o,s.fillRect(0,0,e,t)},1,1,19),A2=()=>Ss(256,256,(s,e,t,i)=>{s.fillStyle="#808080",s.fillRect(0,0,e,t);for(let o=0;o<180;o+=1){const l=i()*e,c=i()*t,h=3+i()*20,f=s.createRadialGradient(l,c,0,l,c,h);f.addColorStop(0,"rgba(255,255,255,0.3)"),f.addColorStop(.5,"rgba(128,128,128,0)"),f.addColorStop(1,"rgba(0,0,0,0.18)"),s.fillStyle=f,s.beginPath(),s.arc(l,c,h,0,Math.PI*2),s.fill()}},8,8,105),C2=()=>{const s=S2(),e=M2(),t=E2(),i=w2(),o=T2(),l=A2();return{stone:new St({map:s,color:"#b8b8ae",roughness:.93,metalness:0}),stoneDark:new St({color:"#666c65",roughness:.96}),stoneLight:new St({color:"#cbc9bd",roughness:.9}),plaster:new St({map:e,color:"#e6dece",roughness:.9}),plasterDark:new St({color:"#b8ad9a",roughness:.94}),wood:new St({map:t,color:"#71372a",roughness:.72}),woodDark:new St({map:t,color:"#4a241d",roughness:.79}),redLacquer:new jf({color:"#8f2f25",roughness:.38,clearcoat:.34,clearcoatRoughness:.48}),deepRed:new St({color:"#5e201b",roughness:.68}),roof:new St({map:i,color:"#4e5a56",roughness:.7,metalness:.04,side:Kn}),roofDark:new St({color:"#27312f",roughness:.74,metalness:.05}),bronze:new St({color:"#5f523d",roughness:.46,metalness:.56}),gold:new St({color:"#aa8751",roughness:.32,metalness:.68}),paper:new St({map:o,color:"#eadbb5",roughness:.82,emissive:"#6f491d",emissiveIntensity:.08}),leaf:new St({color:"#385443",roughness:.9,flatShading:!0}),leafLight:new St({color:"#55725a",roughness:.92,flatShading:!0}),moss:new St({color:"#57644a",roughness:1}),water:new jf({color:"#607f79",roughness:.15,metalness:0,transmission:.05,transparent:!0,opacity:.78,clearcoat:.7,clearcoatRoughness:.16,bumpMap:l,bumpScale:.035}),banner:new St({color:"#8b2d24",roughness:.78,side:Kn}),ribbon:new St({color:"#a5392a",roughness:.72,side:Kn}),black:new St({color:"#1f2422",roughness:.9})}},R2=s=>{let e=s>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}},Vt=R2(20261124);class b2{constructor(){ot(this,"root",new Mt);ot(this,"interactions",[]);ot(this,"obstacles",[]);ot(this,"circles",[]);ot(this,"materials");ot(this,"markers",new Map);ot(this,"smoke",[]);ot(this,"koi",[]);ot(this,"lanterns",[]);ot(this,"dust");ot(this,"treeSway");ot(this,"highlightedId",null);this.root.name="WishCourtyardWorld",this.materials=C2(),this.createGround(),this.createBoundaryWalls(),this.createGate(),this.createMainHall(),this.createWingHall(-1,"财神民俗展陈","财"),this.createWingHall(1,"还愿堂","愿");const e=this.createWishTreeLandscape();this.treeSway=e,this.createPond(),this.createCenser(),this.createCourtyardDetails(),this.dust=this.createDust(),this.createInteractionMarkers()}getGroundHeight(e,t){return t>=-30&&t<=-13&&Math.abs(e)<=13.1?1.15:t>-13&&t<-8.35&&Math.abs(e)<=6.3?(t+8.35)/-4.65*1.15:t>=28.8&&t<=32.5&&Math.abs(e)<9.3?.28:0}setHighlighted(e){this.highlightedId=e;for(const[t,i]of this.markers)i.userData.highlighted=t===e}update(e){const t=this.root.getObjectByName("PondWater");if(t&&t.material instanceof jf){const i=t.material.bumpMap;i&&(i.offset.x=e*.008,i.offset.y=e*.005),t.position.y=.135+Math.sin(e*.8)*.006}this.koi.forEach(i=>{const o=e*i.speed+i.phase;i.group.position.set(Math.cos(o)*i.radiusX,.17+Math.sin(e*1.7+i.phase)*.025,Math.sin(o)*i.radiusZ),i.group.rotation.y=-o+Math.PI/2,i.group.rotation.z=Math.sin(e*2.4+i.phase)*.045}),this.smoke.forEach((i,o)=>{const l=(e*.042+i.offset)%1;i.sprite.position.set(Math.sin(e*.34+o*.71)*(.08+l*.38),1.82+l*4.3,Math.cos(e*.21+o)*(.06+l*.3));const c=Math.sin(l*Math.PI)*.17;i.sprite.material.opacity=c;const h=.35+l*1.05;i.sprite.scale.set(h,h*1.7,1)}),this.lanterns.forEach(i=>{i.light.intensity=i.base*(.94+Math.sin(e*4.2+i.phase)*.06)}),this.treeSway.rotation.z=Math.sin(e*.45)*.008,this.treeSway.rotation.y=Math.sin(e*.6)*.018,this.dust&&(this.dust.rotation.y=e*.008,this.dust.position.y=Math.sin(e*.2)*.15),this.markers.forEach((i,o)=>{const l=o===this.highlightedId,c=1+Math.sin(e*2.7)*.055;i.scale.setScalar(l?c*1.08:.82),i.rotation.y=e*.25;const h=i.getObjectByName("MarkerRing"),f=i.getObjectByName("MarkerGem");h&&h.material instanceof nr&&(h.material.opacity=l?.82:.12),f&&f.material instanceof nr&&(f.material.opacity=l?.95:.2,f.position.y=1.18+Math.sin(e*2.2+o.length)*.08)})}dispose(){this.root.traverse(e=>{(e instanceof Ue||e instanceof Gf)&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.dispose()))}),Object.values(this.materials).forEach(e=>{e.map?.dispose(),e.bumpMap?.dispose(),e.dispose()})}createGround(){const e=new St({color:"#576052",roughness:1}),t=new Ue(new mi(90,100),e);t.rotation.x=-Math.PI/2,t.position.set(0,-.12,2),t.receiveShadow=!0,this.root.add(t);const i=new Ue(new mi(68,78),this.materials.stone);i.rotation.x=-Math.PI/2,i.position.set(0,-.01,1),i.receiveShadow=!0,this.root.add(i);const o=new Oi(1,1,1),l=new Br(o,this.materials.stoneLight,118),c=new wt;for(let f=0;f<118;f+=1){const d=Math.floor(f/2),m=f%2,g=32-d*.72,v=(m-.5)*2.05;c.compose(new U(v,.035,g),new Vn,new U(1.9+Vt()*.06,.07,.62)),l.setMatrixAt(f,c)}l.receiveShadow=!0,l.castShadow=!1,this.root.add(l);for(const f of[-2.28,2.28])Te(this.root,[.18,.08,41.6],this.materials.stoneDark,[f,.035,11.1],!1,!0);const h=new St({color:"#5b654d",roughness:1,transparent:!0,opacity:.54});for(let f=0;f<36;f+=1){const d=new Ue(new xo(.2+Vt()*.7,7),h);d.rotation.x=-Math.PI/2,d.position.set((Vt()>.5?1:-1)*(5.5+Vt()*22),.012,-5+Vt()*38),d.scale.y=.5+Vt()*.8,d.receiveShadow=!0,this.root.add(d)}for(const f of[-1,1])Te(this.root,[.75,.3,43],this.materials.stoneDark,[f*5.35,.04,10.5],!1,!0),Te(this.root,[.38,.06,43],this.materials.moss,[f*5.35,.16,10.5],!1,!0)}createBoundaryWalls(){for(const t of[-1,1])Te(this.root,[.72,3.8,72],this.materials.plaster,[t*34.2,3.8/2,0]),Te(this.root,[1.05,.26,72.3],this.materials.roofDark,[t*34.2,3.8+.13,0]),Te(this.root,[.45,.48,72.3],this.materials.stoneDark,[t*34.2,.22,0],!1,!0),this.obstacles.push({minX:t*34.2-.7,maxX:t*34.2+.7,minZ:-36,maxZ:37});Te(this.root,[68.5,3.8,.72],this.materials.plaster,[0,3.8/2,-35.2]),Te(this.root,[68.8,.27,1.05],this.materials.roofDark,[0,3.8+.13,-35.2]),this.obstacles.push({minX:-35,maxX:35,minZ:-35.8,maxZ:-34.5});for(const t of[-28,-21,-14,14,21,28])Te(this.root,[.68,4.5,.68],this.materials.stoneDark,[t,2.25,-34.75])}createGate(){const e=new Mt;e.name="TempleGate",e.position.z=30.6,this.root.add(e),Te(e,[25,.32,7.4],this.materials.stone,[0,.16,0]);for(let l=0;l<5;l+=1){const c=.28-l*.045;Te(e,[11-l*.22,c,.64],this.materials.stoneLight,[0,c/2,4.05+l*.54],!1,!0)}const t=[-10.2,-8.1,-4.9,4.9,8.1,10.2];for(const l of t)Ft(e,.29,.34,5.1,12,this.materials.redLacquer,[l,2.85,1.8]),Ft(e,.42,.46,.28,10,this.materials.stoneDark,[l,.45,1.8]);for(const[l,c]of[[-12.2,-10.2],[-8.1,-4.9],[4.9,8.1],[10.2,12.2]]){const h=c-l;Te(e,[h,2.9,.62],this.materials.plaster,[(l+c)/2,2.1,2.02])}Te(e,[24.5,2.2,.72],this.materials.plaster,[0,5.2,1.7]),Te(e,[24.9,.32,1.1],this.materials.woodDark,[0,4.1,1.75]),Te(e,[24.9,.25,.82],this.materials.wood,[0,6.18,1.72]);const i=Jh(this.materials,{width:27,depth:10,rise:3.15,cornerLift:.78,ridgeLength:18});i.position.y=6.35,e.add(i),e.add(Qh(this.materials,22.8,6.12,2.24,21,.82));const o=ef(this.materials,"愿庭",3.8,1.18);o.position.set(0,5.15,2.19),e.add(o);for(const l of[-1,1]){const c=tf(this.materials,1.08);c.position.set(l*5.7,4.6,2.3),e.add(c)}for(const[l,c]of[[-12.8,-4.8],[4.8,12.8]])this.obstacles.push({minX:l,maxX:c,minZ:30.2,maxZ:33});for(const l of[-12.6,-8.7,-5.4,5.4,8.7,12.6])this.circles.push({x:l,z:32.4,radius:.55})}createMainHall(){const e=new Mt;e.name="MainHall",e.position.z=-21.5,this.root.add(e),Te(e,[27,1.15,17],this.materials.stone,[0,.575,0]),Te(e,[27.45,.22,17.45],this.materials.stoneDark,[0,.11,0]),Te(e,[26.4,.12,16.4],this.materials.stoneLight,[0,1.18,0],!1,!0);for(let h=0;h<8;h+=1){const f=.14+h*.14,d=12.42-h*.56;Te(e,[12.2-h*.04,f,.61],h%2===0?this.materials.stone:this.materials.stoneLight,[0,f/2,d],!1,!0),Te(e,[.12,1.12,.085],this.materials.gold,[-6.08+h*.02,.61,d+.3],!1,!0),Te(e,[.12,1.12,.085],this.materials.gold,[6.08-h*.02,.61,d+.3],!1,!0)}for(const h of[-1,1]){Te(e,[.62,1.15,5.4],this.materials.stoneDark,[h*6.35,.58,10.8]);for(let f=0;f<4;f+=1)Te(e,[.95,.92,.42],this.materials.stone,[h*6.35,1.6+f*1.1,10.9]);Te(e,[.92,.16,.56],this.materials.stoneLight,[h*6.35,2.12,10.9])}Te(e,[21.2,.16,11.4],this.materials.woodDark,[0,1.26,1.8]),Te(e,[20.8,.08,10.9],this.materials.wood,[0,1.35,1.8],!1,!0);const t=[-10.2,-5.7,-1.25,1.25,5.7,10.2];for(const h of t)Ft(e,.27,.31,5.75,14,this.materials.redLacquer,[h,4.13,7.4]),Ft(e,.38,.42,.2,12,this.materials.stoneLight,[h,1.36,7.4]),Ft(e,.32,.32,.14,12,this.materials.gold,[h,1.52,7.4]);Te(e,[21.7,.38,.54],this.materials.woodDark,[0,6.9,7.35]),Te(e,[22.3,.24,.72],this.materials.wood,[0,7.18,7.27]),Te(e,[21.4,.2,.48],this.materials.deepRed,[0,6.55,7.32]),e.add(Qh(this.materials,20.6,7.27,7.42,19,1.05));const i=Te(e,[21.4,5.2,.55],this.materials.plaster,[0,3.85,-4.8]);i.castShadow=!0;for(const h of[-1,1])Te(e,[.58,5.2,10.2],this.materials.plaster,[h*10.65,3.85,1.55]);for(const h of[-7.95,-3.48,3.48,7.95]){const f=_c(this.materials,{width:3.35,height:4,columns:5,rows:7});f.position.set(h,4.25,7.12),e.add(f),Te(e,[3.76,.24,.34],this.materials.woodDark,[h,1.57,7.2]),Te(e,[3.55,.16,.25],this.materials.gold,[h,6.28,7.23])}const o=new Mt;o.name="MainHallDoors";for(const h of[-1,1]){const f=_c(this.materials,{width:1.66,height:3.76,columns:3,rows:6,diagonal:!1});f.position.set(h*.87,3.62,0),f.rotation.y=h*-.07,o.add(f);for(const d of[2.55,3.2,3.85,4.5])for(const m of[.32,.82,1.32]){const g=new Ue(new sr(.035,7,5),this.materials.gold);g.position.set(h>0?m:-m,d,.095),o.add(g)}}o.position.set(0,1.4,7.17),e.add(o),Te(e,[4.2,.24,.45],this.materials.woodDark,[0,1.55,7.17]);const l=ef(this.materials,"静心殿",4.3,1.22);l.position.set(0,7.05,7.5),e.add(l);for(const h of[-7.9,-3.5,3.5,7.9]){const f=tf(this.materials,.95,h===0);f.position.set(h,6.48,7.8),e.add(f)}for(const h of[-6.8,6.8]){const f=new Lc("#ffc16f",4.2,9,1.8);f.position.set(h,3.8,3.4),e.add(f),this.lanterns.push({light:f,base:4.2,phase:Vt()*8})}this.createMainHallInterior(e);const c=Jh(this.materials,{width:28.2,depth:20.2,rise:4.05,cornerLift:.92,ridgeLength:18.5});c.position.y=7.42,e.add(c);for(const[h,f]of[[-13.6,-2.15],[2.15,13.6]])this.obstacles.push({minX:h,maxX:f,minZ:-14.45,maxZ:-13.55});for(const h of[-1,1])this.obstacles.push({minX:h<0?-14.2:10.35,maxX:h<0?-10.35:14.2,minZ:-30.3,maxZ:-13.2}),this.obstacles.push({minX:h<0?-14.2:6.2,maxX:h<0?-6.2:14.2,minZ:-13.2,maxZ:-8.25})}createMainHallInterior(e){const t=new Mt;t.name="MeditationInstallation",t.position.set(0,1.24,-2.45),e.add(t),Te(t,[6.8,.38,2.75],this.materials.woodDark,[0,.19,0]),Te(t,[6.2,.18,2.2],this.materials.redLacquer,[0,.47,0]),Te(t,[4.8,.15,1.7],this.materials.wood,[0,.63,0]);const i=new Ue(new tr(2.2,.09,10,56),this.materials.gold);i.position.set(0,3.05,-.42),At(t,i);const o=new Ue(new tr(1.75,.026,8,48),this.materials.gold);o.position.set(0,3.05,-.4),At(t,o),Ft(t,.94,1.2,.7,10,this.materials.stoneDark,[0,.98,-.1]);const l=new Ue(new Or(.88,1.85,9),this.materials.bronze);l.position.set(0,2,-.1),At(t,l);const c=new Ue(new rr(.36,2),this.materials.bronze);c.position.set(0,3.12,-.03),c.scale.y=1.1,At(t,c);for(const f of[-1,1]){const d=new Ue(new Bn(.13,.16,.95,7),this.materials.bronze);d.position.set(f*.55,2.28,.2),d.rotation.z=f*.65,At(t,d)}for(const f of[-3.6,3.6])Ft(t,.14,.17,1.65,8,this.materials.bronze,[f,1.25,.2]),Ft(t,.32,.25,.18,8,this.materials.bronze,[f,2.08,.2]);for(const f of[-8.2,8.2]){const d=Te(e,[.78,5.2,.08],this.materials.banner,[f,3.9,-4.38]);d.castShadow=!1,Te(e,[.48,4.65,.06],this.materials.paper,[f,3.9,-4.31],!1,!0)}const h=new M1("#ffd493",16,13,Math.PI/6,.62,1.4);h.position.set(0,7.1,4.2),h.target.position.set(0,2.2,-2.3),h.castShadow=!1,e.add(h,h.target)}createWingHall(e,t,i){const o=new Mt;o.name=e<0?"FortuneCultureHall":"VowHall",o.position.set(e*26.2,0,1.5),o.rotation.y=e<0?Math.PI/2:-Math.PI/2,this.root.add(o),Te(o,[18.5,.55,9.2],this.materials.stone,[0,.275,0]),Te(o,[18.8,.16,9.5],this.materials.stoneDark,[0,.08,0]),Te(o,[17.7,.08,8.5],this.materials.woodDark,[0,.6,0],!1,!0);for(const v of[-7.5,-2.5,2.5,7.5])Ft(o,.24,.28,4.2,12,this.materials.redLacquer,[v,2.75,4.05]),Ft(o,.34,.37,.18,10,this.materials.stoneLight,[v,.67,4.05]);Te(o,[17.4,.32,.5],this.materials.woodDark,[0,4.78,4.03]),Te(o,[18,.22,.68],this.materials.wood,[0,5.02,3.98]),o.add(Qh(this.materials,16.2,5.1,4.12,15,.82)),Te(o,[17.6,4.2,.56],this.materials.plaster,[0,2.72,-3.5]);for(const v of[-8.65,8.65])Te(o,[.55,4.2,7.4],this.materials.plaster,[v,2.72,.15]);for(const v of[-7.5,7.5]){Te(o,[2.1,3.4,.48],this.materials.plaster,[v,2.55,3.9]);const x=_c(this.materials,{width:2.5,height:3.2,columns:4,rows:6});x.position.set(v,2.8,4.13),o.add(x)}Te(o,[2.7,3.65,.5],this.materials.plaster,[0,2.55,3.88]);const l=_c(this.materials,{width:2.45,height:3.4,columns:4,rows:6});l.position.set(0,2.77,4.16),o.add(l);const c=ef(this.materials,i,1.15,2.3,!0);c.position.set(0,4.18,4.28),o.add(c);const h=Jh(this.materials,{width:20.8,depth:12.2,rise:2.85,cornerLift:.68,ridgeLength:14.2});h.position.y=5.26,o.add(h);for(const v of[-4.2,4.2]){const x=tf(this.materials,.82);x.position.set(v,4.52,4.45),o.add(x)}const f=new Lc("#ffc274",5.8,9,1.9);f.position.set(0,3.1,.5),o.add(f),this.lanterns.push({light:f,base:5.8,phase:Vt()*8});const d=new Mt;d.name=t,d.position.set(0,.66,.25),o.add(d),Te(d,[5.8,.84,1.55],this.materials.woodDark,[0,.42,0]),Te(d,[5.45,.12,1.25],this.materials.redLacquer,[0,.92,0]);for(const v of[-4.8,4.8]){Te(d,[2.2,1.85,.95],this.materials.woodDark,[v,1.1,0]);for(let x=0;x<2;x+=1){Te(d,[1.95,.08,.78],this.materials.wood,[v,.65+x*.64,.08]);for(let M=0;M<3;M+=1){const w=new Ue(M===1?new tr(.15,.035,6,14):new Bn(.09,.12,.28,8),M===1?this.materials.gold:this.materials.bronze);w.position.set(v-.54+M*.54,.86+x*.64,.13),M===1&&(w.rotation.x=Math.PI/2),At(d,w)}}}const m=new Mt;m.position.set(0,1,.1),Ft(m,.35,.56,1.25,10,this.materials.redLacquer,[0,.62,0]),Ft(m,.22,.33,.5,8,this.materials.gold,[0,1.35,0]);const g=new Ue(new rr(.25,1),this.materials.gold);g.position.set(0,1.82,0),At(m,g),d.add(m),this.obstacles.push({minX:e<0?-32.4:20.6,maxX:e<0?-20.6:32.4,minZ:-6.2,maxZ:9.2})}createWishTreeLandscape(){const e=g2(this.materials);e.root.position.set(-12.5,0,9.4),e.root.scale.setScalar(1.08),this.root.add(e.root),Ft(e.root,2.65,2.95,.16,24,this.materials.moss,[0,.07,0]);for(let i=0;i<22;i+=1){const o=i/22*Math.PI*2,l=Te(e.root,[.75+Vt()*.32,.28+Vt()*.18,.48],i%3===0?this.materials.stoneDark:this.materials.stone,[Math.cos(o)*2.75,.18,Math.sin(o)*2.75]);l.rotation.y=o}for(const[i,o,l]of[[-18.2,17.4,.92],[-22.3,13.8,.82],[-17.1,-7.1,.8]]){const c=v2(this.materials,Math.floor(i*31+o*7),9);c.position.set(i,0,o),c.scale.setScalar(l),this.root.add(c)}const t=new Mt;t.position.set(-7.6,0,12.1),t.rotation.y=.2,Te(t,[2.5,.18,.62],this.materials.wood,[0,.52,0]);for(const i of[-.95,.95])Te(t,[.18,.5,.42],this.materials.stoneDark,[i,.25,0]);return this.root.add(t),this.circles.push({x:-12.5,z:9.4,radius:2.6}),e.ribbons}createPond(){const e=new Mt;e.name="WishPond",e.position.set(12.3,0,10.2),this.root.add(e);const t=new cd;t.absellipse(0,0,5.25,4.15,0,Math.PI*2,!1,0);const i=new Ue(new Nc(t,54),new St({color:"#35403b",roughness:.98,side:Kn}));i.rotation.x=-Math.PI/2,i.position.y=.045,i.receiveShadow=!0,e.add(i);const o=new Ue(new xo(4.72,48),this.materials.water);o.name="PondWater",o.rotation.x=-Math.PI/2,o.scale.set(1.08,.83,1),o.position.y=.135,o.receiveShadow=!0,e.add(o);for(let d=0;d<38;d+=1){const m=d/38*Math.PI*2,g=5.15+Vt()*.42,v=4.1+Vt()*.34,x=Te(e,[.65+Vt()*.48,.28+Vt()*.18,.52+Vt()*.2],d%4===0?this.materials.stoneDark:this.materials.stone,[Math.cos(m)*g,.16,Math.sin(m)*v]);x.rotation.y=-m}for(const[d,m,g]of[[-3.8,-1.2,1],[3.6,1.5,.85],[1.4,-2.7,.72]]){const v=new Ue(new Ra(.65*g,0),this.materials.stoneDark);v.scale.set(1.2,.65,1),v.position.set(d,.2,m),At(e,v);const x=new Ue(new sr(.46*g,8,4,0,Math.PI*2,0,Math.PI/2),this.materials.moss);x.position.set(d,.52*g,m),x.scale.set(1.15,.28,.9),e.add(x)}const l=new St({color:"#c76f35",roughness:.58,metalness:.04}),c=new St({color:"#e5d8bb",roughness:.7});for(let d=0;d<6;d+=1){const m=new Mt,g=new Ue(new sr(.16,9,6),l);g.scale.set(1.65,.52,.62),At(m,g);const v=new Ue(new Or(.13,.28,5),d%2===0?c:l);v.position.x=-.34,v.rotation.z=Math.PI/2,At(m,v);for(const x of[-1,1]){const M=new Ue(new Or(.07,.18,4),c);M.position.set(.02,-.01,x*.14),M.rotation.z=x*.6,At(m,M)}m.position.set(0,.17,0),e.add(m),this.koi.push({group:m,radiusX:1+Vt()*2.55,radiusZ:.65+Vt()*1.65,speed:.11+Vt()*.12,phase:Vt()*Math.PI*2})}const h=new St({color:"#4f704e",roughness:.8,side:Kn}),f=new St({color:"#b77c78",roughness:.72});for(let d=0;d<13;d+=1){const m=Vt()*Math.PI*2,g=1.2+Vt()*2.6,v=new Ue(new xo(.28+Vt()*.3,9),h);if(v.rotation.x=-Math.PI/2,v.position.set(Math.cos(m)*g,.165,Math.sin(m)*g*.7),e.add(v),d%4===0){const x=new Ue(new Or(.15,.22,6),f);x.position.set(v.position.x,.26,v.position.z),e.add(x)}}for(const d of[.2,1.8,3.35,4.75]){const m=Math.cos(d)*6.05,g=Math.sin(d)*4.95,v=Te(e,[.23,.85,.23],this.materials.stoneDark,[m,.43,g]);v.rotation.y=d,Ft(e,.15,.22,.22,8,this.materials.stone,[m,.94,g])}this.circles.push({x:12.3,z:10.2,radius:5.35})}createCenser(){const e=new Mt;e.name="CourtyardCenser",e.position.set(0,0,2.8),this.root.add(e),Te(e,[2.2,.24,2.2],this.materials.stoneDark,[0,.12,0]),Ft(e,.72,.86,.42,10,this.materials.bronze,[0,.37,0]),Ft(e,.82,.72,.62,12,this.materials.bronze,[0,.82,0]);const t=new Ue(new tr(.82,.075,8,28),this.materials.gold);t.rotation.x=Math.PI/2,t.position.y=1.12,At(e,t);for(const o of[-1,1]){const l=new Ue(new tr(.26,.045,7,22,Math.PI),this.materials.gold);l.position.set(o*.86,.83,0),l.rotation.z=o*Math.PI/2,At(e,l)}for(const o of[-.26,0,.26]){const l=Ft(e,.012,.012,.78,5,this.materials.deepRed,[o,1.5,0]);l.rotation.z=o*.9;const c=new Ue(new sr(.028,6,4),new nr({color:"#e09a4b"}));c.position.set(o+o*.35,1.9,0),e.add(c)}const i=Ss(128,256,(o,l,c)=>{o.clearRect(0,0,l,c);const h=o.createRadialGradient(l*.5,c*.56,2,l*.5,c*.55,l*.46);h.addColorStop(0,"rgba(230,232,222,0.5)"),h.addColorStop(.35,"rgba(210,216,208,0.18)"),h.addColorStop(1,"rgba(203,211,204,0)"),o.fillStyle=h,o.fillRect(0,0,l,c)},1,1,8);for(let o=0;o<24;o+=1){const l=new Bg({map:i,color:"#edf0e8",transparent:!0,opacity:0,depthWrite:!1}),c=new Fy(l);c.position.set(0,1.9,0),c.scale.set(.45,.8,1),e.add(c),this.smoke.push({sprite:c,offset:o/24,drift:Vt()*Math.PI*2})}this.circles.push({x:0,z:2.8,radius:1.25})}createCourtyardDetails(){for(const[e,t]of[[-8.4,-2.8],[8.4,-2.8],[-8.2,20],[8.2,20]]){const i=m2(this.materials);i.position.set(e,0,t),this.root.add(i),this.circles.push({x:e,z:t,radius:.6})}for(const e of[-1,1]){const t=Te(this.root,[1.2,5.6,.08],this.materials.banner,[e*11.8,4.9,-12.95]);t.rotation.z=e*.03,Te(this.root,[.78,4.95,.06],this.materials.paper,[e*11.8,4.9,-12.89],!1,!0);for(const i of[-.18,.18])Te(this.root,[.035,3.3,.055],this.materials.deepRed,[e*11.8+i,4.9,-12.84],!1,!0)}for(const e of[-1,1]){const t=new Mt;t.position.set(e*4.9,0,15.5),Te(t,[.25,2.4,.25],this.materials.woodDark,[-1.05,1.2,0]),Te(t,[.25,2.4,.25],this.materials.woodDark,[1.05,1.2,0]),Te(t,[2.5,.16,.22],this.materials.wood,[0,2.3,0]);for(let i=0;i<5;i+=1){const o=new Ue(new mi(.28,.52),i%2===0?this.materials.paper:this.materials.banner);o.position.set(-.78+i*.39,1.93-i%2*.06,.02),o.rotation.z=(i-2)*.03,t.add(o)}this.root.add(t),this.circles.push({x:e*4.9,z:15.5,radius:.75})}for(const[e,t,i]of[[-20.5,-19,.3],[19.4,-18.4,-.25],[-18.8,21,1.2],[19.2,21.5,-1.1]]){const o=new Ue(new Ra(1.25+Vt()*.55,1),this.materials.stoneDark);o.scale.set(1.15,.58,1.4),o.position.set(e,.3,t),o.rotation.set(.1,i,.05),At(this.root,o),this.circles.push({x:e,z:t,radius:1.5})}}createDust(){const t=new Float32Array(960);for(let c=0;c<320;c+=1)t[c*3]=(Vt()-.5)*44,t[c*3+1]=1+Vt()*11,t[c*3+2]=-28+Vt()*58;const i=new yn;i.setAttribute("position",new oi(t,3));const o=new Vg({color:"#e6dfc2",size:.045,transparent:!0,opacity:.34,depthWrite:!1,sizeAttenuation:!0}),l=new Gf(i,o);return this.root.add(l),l}createInteractionMarkers(){this.interactions.push({id:"gate",kind:"gate",title:"山门",detail:"回望来处，听风穿过门洞",position:[0,0,28.8],radius:4.2},{id:"censer",kind:"incense",title:"上香体验",detail:"游戏化文化演出 · 不承诺愿望结果",position:[0,0,2.8],radius:3.4},{id:"wish-tree",kind:"wish-tree",title:"许愿树",detail:"系一枚只保存在本机的愿望签",position:[-9.3,0,9.4],radius:4.8},{id:"pond",kind:"pond",title:"许愿池",detail:"记录此刻心绪，听一池水声",position:[7,0,10.2],radius:4.2},{id:"fortune",kind:"fortune",title:"财神民俗展陈",detail:"了解游戏化民俗展陈",position:[-19.1,0,1.5],radius:4.2},{id:"vow-hall",kind:"vow-hall",title:"还愿堂",detail:"以一段文字完成游戏中的还愿仪式",position:[19.1,0,1.5],radius:4.2},{id:"main-hall",kind:"main-hall",title:"静心殿",detail:"进入殿内，完成一段呼吸体验",position:[0,0,-8.1],radius:4.8});for(const e of this.interactions){const t=new Mt;t.name=`InteractionMarker-${e.id}`,t.position.set(e.position[0],this.getGroundHeight(e.position[0],e.position[2])+.04,e.position[2]);const i=new Ue(new tr(.78,.025,7,36),new nr({color:"#d9bf80",transparent:!0,opacity:.12,depthWrite:!1}));i.name="MarkerRing",i.rotation.x=Math.PI/2,t.add(i);const o=new Ue(new ud(.08,0),new nr({color:"#e5cf91",transparent:!0,opacity:.2,depthWrite:!1}));o.name="MarkerGem",o.position.y=1.18,t.add(o),this.markers.set(e.id,t),this.root.add(t)}}}const xa=.38,P2=1.68,ho=(s,e,t,i)=>wc.lerp(s,e,1-Math.exp(-t*i)),L2=()=>{const s=new sr(110,32,18),e=new lr({side:Hn,depthWrite:!1,uniforms:{topColor:{value:new ut("#7f9297")},horizonColor:{value:new ut("#c4c8bc")},bottomColor:{value:new ut("#d8d4c8")},sunDirection:{value:new U(-.45,.68,.58).normalize()}},vertexShader:`
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      uniform vec3 bottomColor;
      uniform vec3 sunDirection;
      varying vec3 vWorldPosition;
      void main() {
        vec3 direction = normalize(vWorldPosition);
        float heightMix = smoothstep(-0.08, 0.72, direction.y);
        vec3 color = mix(bottomColor, horizonColor, smoothstep(-0.18, 0.05, direction.y));
        color = mix(color, topColor, heightMix);
        float sunGlow = pow(max(dot(direction, sunDirection), 0.0), 18.0);
        color += vec3(0.19, 0.13, 0.07) * sunGlow;
        gl_FragColor = vec4(color, 1.0);
      }
    `}),t=new Ue(s,e);return t.name="SkyDome",t.frustumCulled=!1,t},D2=()=>{const s=new Mt;s.name="DistantScenery";const e=["#59655e","#4c5c58","#647069","#48554f"];return[[-48,-44,16,7,19],[-30,-62,22,11,24],[-6,-72,29,13,28],[20,-66,24,10,25],[44,-50,18,8,20],[58,-18,15,7,18],[-61,-9,17,8,20]].forEach(([i,o,l,c,h],f)=>{const d=new St({color:e[f%e.length],roughness:1,flatShading:!0}),m=new Ue(new Ra(1,1),d);m.position.set(i,-2.5,o),m.scale.set(l,c,h),m.rotation.set(.08,f*1.27,.04),s.add(m)}),s};class I2{constructor(e,t){ot(this,"container");ot(this,"callbacks");ot(this,"renderer");ot(this,"scene",new Ny);ot(this,"camera");ot(this,"world",new b2);ot(this,"avatar");ot(this,"keys",new Set);ot(this,"clock",new C1);ot(this,"velocity",new U);ot(this,"playerPosition",new U(0,0,24.5));ot(this,"resizeObserver");ot(this,"frameId",0);ot(this,"elapsedTime",0);ot(this,"yaw",0);ot(this,"pitch",-.045);ot(this,"verticalPosition",0);ot(this,"viewMode","first");ot(this,"preset","female");ot(this,"started",!1);ot(this,"inactive",!1);ot(this,"disposed",!1);ot(this,"nearest",null);ot(this,"lastZone","");ot(this,"lastNearestId",null);ot(this,"handleKeyDown",e=>{const t=e.key.toLowerCase();["w","a","s","d","e","v","shift"].includes(t)&&e.preventDefault(),this.keys.add(t),!e.repeat&&(t==="v"&&this.toggleView(),t==="e"&&this.started&&!this.inactive&&this.nearest&&this.callbacks.onInteract(this.nearest))});ot(this,"handleKeyUp",e=>{this.keys.delete(e.key.toLowerCase())});ot(this,"handleMouseMove",e=>{document.pointerLockElement!==this.renderer.domElement||!this.started||this.inactive||(this.yaw-=e.movementX*.00185,this.pitch=wc.clamp(this.pitch-e.movementY*.00162,-1.15,1.05))});ot(this,"handlePointerLockChange",()=>{const e=document.pointerLockElement===this.renderer.domElement;this.callbacks.onLockChange(e),this.started&&!e&&!this.inactive&&this.callbacks.onPauseChange(!0)});ot(this,"handleCanvasClick",()=>{this.started&&!this.inactive&&document.pointerLockElement!==this.renderer.domElement&&this.requestPointerLock()});ot(this,"handleBlur",()=>{this.keys.clear()});ot(this,"animate",()=>{if(this.disposed)return;this.frameId=requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.05);this.elapsedTime+=e,this.started&&!this.inactive&&(this.movePlayer(e),this.updateInteraction(),this.emitHud()),this.updateCamera(e),this.world.update(this.elapsedTime),this.renderer.render(this.scene,this.camera)});this.container=e,this.callbacks=t,this.renderer=new u2({antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.domElement.className="game-canvas",this.renderer.domElement.tabIndex=0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.outputColorSpace=zn,this.renderer.toneMapping=gg,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=pg,this.container.appendChild(this.renderer.domElement),this.camera=new Zn(58,1,.08,180),this.camera.rotation.order="YXZ",this.scene.background=new ut("#aeb9b3"),this.scene.fog=new sd("#aeb8b2",.0088),this.scene.add(L2()),this.scene.add(D2()),this.scene.add(this.world.root),this.avatar=x2(this.preset),this.scene.add(this.avatar.root),this.avatar.root.visible=!1,this.setupLighting(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(this.container),this.bindEvents(),this.resize(),this.syncPlayerToGround(0),this.updateCamera(0),this.callbacks.onReady(),this.animate()}start(e){this.preset=e,this.avatar.setPreset(e),this.started=!0,this.inactive=!1,this.playerPosition.set(0,0,24.5),this.yaw=0,this.pitch=-.045,this.syncPlayerToGround(0),this.emitHud(!0),this.requestPointerLock()}resume(){this.started&&(this.inactive=!1,this.callbacks.onPauseChange(!1),this.requestPointerLock())}setInactive(e){this.inactive=e,this.keys.clear(),e&&document.pointerLockElement&&document.exitPointerLock()}setPreset(e){this.preset=e,this.avatar.setPreset(e)}toggleView(){!this.started||this.inactive||(this.viewMode=this.viewMode==="first"?"third":"first",this.avatar.root.visible=this.viewMode==="third",this.emitHud(!0))}exitToMenu(){this.started=!1,this.inactive=!1,this.keys.clear(),document.pointerLockElement&&document.exitPointerLock(),this.avatar.root.visible=!1,this.callbacks.onInteraction(null),this.callbacks.onPauseChange(!1),this.callbacks.onHud({zone:"山门 · 入口",viewMode:this.viewMode,started:!1})}requestPointerLock(){!this.started||this.inactive||this.renderer.domElement.requestPointerLock()}teleportForTest(e,t){this.playerPosition.set(e,this.world.getGroundHeight(e,t),t),this.velocity.set(0,0,0),this.syncPlayerToGround(0),this.updateInteraction(),this.emitHud(!0)}getDebugState(){return{x:Number(this.playerPosition.x.toFixed(3)),y:Number(this.playerPosition.y.toFixed(3)),z:Number(this.playerPosition.z.toFixed(3)),zone:this.getZone(),viewMode:this.viewMode,started:this.started,inactive:this.inactive,nearest:this.nearest?.id??null}}dispose(){this.disposed=!0,cancelAnimationFrame(this.frameId),this.resizeObserver.disconnect(),this.unbindEvents(),this.world.dispose(),this.avatar.dispose(),this.renderer.dispose(),this.renderer.domElement.remove(),this.scene.traverse(e=>{(e instanceof Ue||e instanceof Gf)&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.dispose()))})}setupLighting(){const e=new y1("#e1e8e5","#52604f",2.35);this.scene.add(e),this.scene.add(new T1("#dce2dc",.42));const t=new L0("#f0ddbd",3.15);t.position.set(-15,23,17),t.target.position.set(0,2.8,-4),t.castShadow=!0,t.shadow.mapSize.set(3072,3072),t.shadow.camera.left=-38,t.shadow.camera.right=38,t.shadow.camera.top=38,t.shadow.camera.bottom=-28,t.shadow.camera.near=1,t.shadow.camera.far=72,t.shadow.bias=-18e-5,t.shadow.normalBias=.025,t.shadow.radius=3.5,this.scene.add(t,t.target);const i=new L0("#9cb7bd",.9);i.position.set(16,10,-13),i.target.position.set(0,2,-12),this.scene.add(i,i.target);const o=new Lc("#ffd6a0",2.2,22,2);o.position.set(0,5.5,7),this.scene.add(o)}bindEvents(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("pointerlockchange",this.handlePointerLockChange),this.renderer.domElement.addEventListener("click",this.handleCanvasClick),window.addEventListener("blur",this.handleBlur)}unbindEvents(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("pointerlockchange",this.handlePointerLockChange),this.renderer.domElement.removeEventListener("click",this.handleCanvasClick),window.removeEventListener("blur",this.handleBlur)}resize(){const e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}canOccupy(e,t){if(e<-33.1||e>33.1||t<-34.2||t>35.2)return!1;for(const i of this.world.obstacles)if(e+xa>i.minX&&e-xa<i.maxX&&t+xa>i.minZ&&t-xa<i.maxZ)return!1;for(const i of this.world.circles){const o=i.radius+xa,l=e-i.x,c=t-i.z;if(l*l+c*c<o*o)return!1}return!0}movePlayer(e){const t=(this.keys.has("w")?1:0)-(this.keys.has("s")?1:0),i=(this.keys.has("d")?1:0)-(this.keys.has("a")?1:0),o=new Ie(i,t);o.lengthSq()>1&&o.normalize();const c=this.keys.has("shift")?4.45:2.72,h=-Math.sin(this.yaw),f=-Math.cos(this.yaw),d=Math.cos(this.yaw),m=-Math.sin(this.yaw),g=(h*o.y+d*o.x)*c,v=(f*o.y+m*o.x)*c;this.velocity.x=ho(this.velocity.x,g,o.lengthSq()>0?11:8,e),this.velocity.z=ho(this.velocity.z,v,o.lengthSq()>0?11:8,e);const x=this.velocity.x*e,M=this.velocity.z*e,w=this.world.getGroundHeight(this.playerPosition.x,this.playerPosition.z),S=this.playerPosition.x+x;this.canOccupy(S,this.playerPosition.z)&&Math.abs(this.world.getGroundHeight(S,this.playerPosition.z)-w)<.32?this.playerPosition.x=S:this.velocity.x*=.15;const y=this.playerPosition.z+M;this.canOccupy(this.playerPosition.x,y)&&Math.abs(this.world.getGroundHeight(this.playerPosition.x,y)-w)<.32?this.playerPosition.z=y:this.velocity.z*=.15,this.syncPlayerToGround(e);const L=Math.hypot(this.velocity.x,this.velocity.z);this.avatar.root.position.set(this.playerPosition.x,this.playerPosition.y,this.playerPosition.z),this.avatar.root.rotation.y=this.yaw+Math.PI,this.avatar.update(this.elapsedTime,L)}syncPlayerToGround(e){const t=this.world.getGroundHeight(this.playerPosition.x,this.playerPosition.z);this.playerPosition.y=t;const i=t+P2;this.verticalPosition=e===0?i:ho(this.verticalPosition,i,15,e)}updateCamera(e){const t=Math.min(1,Math.hypot(this.velocity.x,this.velocity.z)/3.4),i=this.viewMode==="first"?Math.sin(this.elapsedTime*9.2)*.018*t:0;if(this.viewMode==="first"){this.camera.position.set(this.playerPosition.x,this.verticalPosition+i,this.playerPosition.z),this.camera.rotation.x=this.pitch,this.camera.rotation.y=this.yaw,this.camera.rotation.z=Math.sin(this.elapsedTime*4.8)*.0025*t;return}const o=new U(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch)),l=new U(this.playerPosition.x,this.verticalPosition+.02,this.playerPosition.z),c=l.clone().addScaledVector(o,-6.15).add(new U(0,1.26,0));c.x=wc.clamp(c.x,-33.2,33.2),c.z=wc.clamp(c.z,-34.3,34.7),c.y=Math.max(c.y,this.world.getGroundHeight(c.x,c.z)+.55),this.camera.position.distanceToSquared(c)>3600?this.camera.position.copy(c):(this.camera.position.x=ho(this.camera.position.x,c.x,14,e),this.camera.position.y=ho(this.camera.position.y,c.y,14,e),this.camera.position.z=ho(this.camera.position.z,c.z,14,e)),this.camera.lookAt(l.clone().addScaledVector(o,7).add(new U(0,.48,0)))}updateInteraction(){let e=null,t=Number.POSITIVE_INFINITY;for(const o of this.world.interactions){const l=this.playerPosition.x-o.position[0],c=this.playerPosition.z-o.position[2],h=Math.hypot(l,c);h<=o.radius&&h<t&&(e=o,t=h)}this.nearest=e;const i=e?.id??null;if(i!==this.lastNearestId){this.lastNearestId=i,this.world.setHighlighted(i);const o=e?{id:e.id,title:e.title,detail:e.detail}:null;this.callbacks.onInteraction(o)}}getZone(){const{x:e,z:t}=this.playerPosition;return t>24?"山门 · 入口":t<-10.5?"静心殿 · 前庭":e<-18.8?"财神民俗展陈":e>18.8?"还愿堂":e<-6.3&&t>2.5?"许愿树 · 西庭":e>6.3&&t>2.5?"许愿池 · 东庭":"中央庭院"}emitHud(e=!1){const t=this.getZone();if(e||t!==this.lastZone){this.lastZone=t;const i={zone:t,viewMode:this.viewMode,started:this.started};this.callbacks.onHud(i)}}}const rg="wish-courtyard-wishes-v1",sg="wish-courtyard-journal-v1",sv=(s,e)=>{try{const t=window.localStorage.getItem(s);return t?JSON.parse(t):e}catch{return e}},ov=(s,e)=>{try{window.localStorage.setItem(s,JSON.stringify(e))}catch{}};function N2(){const s=It.useRef(null),e=It.useRef(null),t=It.useRef(null),i=It.useRef(null),[o,l]=It.useState(!1),[c,h]=It.useState(!1),[f,d]=It.useState("female"),[m,g]=It.useState({zone:"山门 · 入口",viewMode:"first",started:!1}),[v,x]=It.useState(null),[M,w]=It.useState(null),[S,y]=It.useState(!1),[L,C]=It.useState(null);It.useEffect(()=>{const z=s.current;if(!z)return;const P=new I2(z,{onReady:()=>l(!0),onHud:A=>g(A),onInteraction:A=>x(A),onInteract:A=>{t.current=A,w(A),y(!1),P.setInactive(!0)},onPauseChange:A=>{t.current||y(A)},onLockChange:()=>{}});return e.current=P,new URLSearchParams(window.location.search).has("visual-test")&&(window.__wishCourtyardGame=P),()=>{P.dispose(),e.current=null,window.__wishCourtyardGame=void 0}},[]),It.useEffect(()=>()=>{i.current&&window.clearTimeout(i.current)},[]);const T=It.useCallback(z=>{C(z),i.current&&window.clearTimeout(i.current),i.current=window.setTimeout(()=>C(null),3200)},[]),N=()=>{t.current=null,w(null),y(!1),e.current?.setInactive(!1),e.current?.requestPointerLock()},I=()=>{h(!0),y(!1),e.current?.start(f)},O=()=>{t.current=null,w(null),h(!1),y(!1),x(null),e.current?.exitToMenu()};return $.jsxs("main",{className:"app-shell",children:[$.jsx("div",{className:"scene",ref:s}),$.jsx("div",{className:"scene-wash","aria-hidden":"true"}),$.jsx("div",{className:"film-grain","aria-hidden":"true"}),c?$.jsxs($.Fragment,{children:[$.jsx(F2,{hud:m,nearby:v,paused:S,hasModal:!!M,onView:()=>e.current?.toggleView(),onExit:O}),S&&!M?$.jsx(O2,{onResume:()=>{y(!1),e.current?.resume()},onExit:O}):null]}):$.jsx(U2,{ready:o,preset:f,onPreset:d,onStart:I}),M?$.jsx(k2,{interaction:M,onClose:N,onToast:T}):null,$.jsx("div",{className:"cultural-disclaimer",children:"游戏化文化演出 · 不提供真实宗教服务 · 不承诺愿望结果"}),L?$.jsxs("div",{className:"toast",role:"status",children:[$.jsx(cg,{size:16,"aria-hidden":"true"}),L]}):null]})}function U2({ready:s,preset:e,onPreset:t,onStart:i}){return $.jsxs("section",{className:"start-screen",children:[$.jsxs("header",{className:"start-header",children:[$.jsxs("div",{className:"brand-mark",children:[$.jsx("span",{className:"brand-seal",children:"愿"}),$.jsx("span",{className:"brand-wordmark",children:"WISH COURTYARD"})]}),$.jsx("span",{className:"edition-label",children:"文化漫游 · 第一卷"})]}),$.jsxs("div",{className:"start-copy",children:[$.jsx("p",{className:"eyebrow",children:"一座虚构庭院，一段可被安放的心绪"}),$.jsxs("h1",{children:["愿庭",$.jsx("span",{children:"WISH COURTYARD"})]}),$.jsx("p",{className:"start-lead",children:"穿过山门，在檐影、树声与水光之间缓行。所有礼佛、上香、财神与还愿内容均为游戏化文化演出。"}),$.jsxs("div",{className:"start-actions",children:[$.jsxs("div",{className:"preset-toggle",role:"group","aria-label":"角色预设",children:[$.jsxs("button",{type:"button",className:e==="female"?"is-active":"","aria-pressed":e==="female",onClick:()=>t("female"),children:[$.jsx(Wm,{size:18}),"青裳"]}),$.jsxs("button",{type:"button",className:e==="male"?"is-active":"","aria-pressed":e==="male",onClick:()=>t("male"),children:[$.jsx(Wm,{size:18}),"玄衣"]})]}),$.jsxs("button",{type:"button",className:"enter-button",onClick:i,disabled:!s,children:[s?"踏入愿庭":"庭院构筑中",$.jsx(lg,{size:18})]})]})]}),$.jsxs("footer",{className:"start-footer",children:[$.jsx("span",{children:"第一人称文化漫游"}),$.jsx("span",{children:"尺度研究 · 2026"}),$.jsx("span",{children:"桌面浏览器体验"})]})]})}function F2({hud:s,nearby:e,paused:t,hasModal:i,onView:o,onExit:l}){return $.jsxs($.Fragment,{children:[$.jsxs("header",{className:"game-hud",children:[$.jsxs("div",{className:"hud-brand",children:[$.jsx("span",{className:"hud-seal",children:"愿"}),$.jsxs("div",{children:[$.jsx("strong",{children:"愿庭"}),$.jsx("span",{children:s.zone})]})]}),$.jsxs("div",{className:"hud-tools",children:[$.jsx("button",{type:"button",className:"icon-button",title:s.viewMode==="first"?"切换第三人称":"切换第一人称","aria-label":s.viewMode==="first"?"切换第三人称":"切换第一人称",onClick:o,children:s.viewMode==="first"?$.jsx(ex,{size:18}):$.jsx(tx,{size:18})}),$.jsx("button",{type:"button",className:"icon-button",title:"离开庭院","aria-label":"离开庭院",onClick:l,children:$.jsx(ix,{size:18})})]})]}),$.jsx("div",{className:`reticle ${s.viewMode==="third"?"is-soft":""}`,"aria-hidden":"true",children:$.jsx("span",{})}),e&&!t&&!i?$.jsxs("div",{className:"interaction-prompt",children:[$.jsx("span",{className:"prompt-key",children:"E"}),$.jsxs("span",{className:"prompt-copy",children:[$.jsx("strong",{children:e.title}),$.jsx("small",{children:e.detail})]})]}):null,$.jsx("div",{className:"view-badge","aria-hidden":"true",children:s.viewMode==="first"?"第一人称":"第三人称"})]})}function O2({onResume:s,onExit:e}){return $.jsx("div",{className:"pause-backdrop",children:$.jsxs("section",{className:"pause-panel","aria-labelledby":"pause-title",children:[$.jsx("span",{className:"eyebrow",children:"庭院仍在风里"}),$.jsx("h2",{id:"pause-title",children:"漫游暂停"}),$.jsx("p",{children:"檐下光影会在这里等你。"}),$.jsxs("div",{className:"pause-actions",children:[$.jsxs("button",{type:"button",className:"paper-button primary",onClick:s,children:[$.jsx(rx,{size:17}),"继续漫游"]}),$.jsx("button",{type:"button",className:"paper-button",onClick:e,children:"回到入口"})]})]})})}function k2({interaction:s,onClose:e,onToast:t}){const i=(()=>{switch(s.kind){case"wish-tree":return fg;case"pond":return ug;case"fortune":return nx;case"vow-hall":return hg;case"main-hall":return $f;default:return sx}})();return $.jsx("div",{className:"modal-backdrop",onMouseDown:o=>{o.target===o.currentTarget&&e()},children:$.jsxs("section",{className:`interaction-modal modal-${s.kind}`,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:[$.jsx("button",{type:"button",className:"modal-close","aria-label":"关闭",onClick:e,children:$.jsx(ox,{size:18})}),$.jsxs("header",{className:"modal-header",children:[$.jsx("span",{className:"modal-icon",children:$.jsx(i,{size:21})}),$.jsxs("div",{children:[$.jsx("span",{className:"modal-kicker",children:"游戏化文化演出"}),$.jsx("h2",{id:"modal-title",children:s.title})]})]}),s.kind==="wish-tree"?$.jsx(z2,{onClose:e,onToast:t}):null,s.kind==="pond"?$.jsx(H2,{onClose:e,onToast:t}):null,s.kind==="incense"?$.jsx(V2,{onClose:e,onToast:t}):null,s.kind==="fortune"?$.jsx(G2,{onClose:e}):null,s.kind==="vow-hall"?$.jsx(W2,{onClose:e,onToast:t}):null,s.kind==="main-hall"?$.jsx(X2,{onClose:e,onToast:t}):null,s.kind==="gate"?$.jsx(j2,{onClose:e}):null,$.jsx("footer",{className:"modal-footer",children:"仅作为虚构场景中的文化互动，不构成现实承诺或宗教服务。"})]})})}function z2({onClose:s,onToast:e}){const[t,i]=It.useState(()=>sv(rg,[])),[o,l]=It.useState(""),c=()=>{const h=o.trim();if(!h)return;const f=[...t,{id:crypto.randomUUID(),text:h,createdAt:new Date().toISOString()}].slice(-10);i(f),ov(rg,f),l(""),e("愿望签已留在本机，不会上传。")};return $.jsxs("div",{className:"modal-body wish-layout",children:[$.jsxs("div",{className:"wish-form",children:[$.jsx("p",{className:"section-lead",children:"写下一句此刻想留住的话，把它系在虚构的枝头。"}),$.jsxs("label",{children:[$.jsx("span",{children:"愿望签"}),$.jsx("textarea",{maxLength:72,rows:4,value:o,onChange:h=>l(h.target.value),placeholder:"不必写得完整，一句话也可以。"}),$.jsxs("small",{children:[o.length," / 72"]})]}),$.jsxs("button",{type:"button",className:"paper-button primary",disabled:!o.trim(),onClick:c,children:[$.jsx(fg,{size:17}),"系上心愿签"]})]}),$.jsxs("aside",{className:"record-list","aria-label":"本机愿望签",children:[$.jsxs("div",{className:"record-list-head",children:[$.jsx("span",{children:"本机愿望签"}),$.jsxs("span",{children:[t.length," / 10"]})]}),t.length===0?$.jsx("p",{className:"empty-state",children:"枝头还没有自己的签。"}):$.jsx("ul",{children:t.slice().reverse().map((h,f)=>$.jsxs("li",{children:[$.jsx("span",{children:String(t.length-f).padStart(2,"0")}),$.jsx("p",{children:h.text})]},h.id))})]})]})}const B2=["澄明","平静","牵挂","疲惫","期待"];function H2({onClose:s,onToast:e}){const[t,i]=It.useState(()=>sv(sg,[])),[o,l]=It.useState("平静"),[c,h]=It.useState(""),f=()=>{const d=[...t,{id:crypto.randomUUID(),mood:o,text:c.trim(),createdAt:new Date().toISOString()}].slice(-40);i(d),ov(sg,d),e("心绪记录已保存在本机。"),s()};return $.jsxs("div",{className:"modal-body journal-layout",children:[$.jsxs("div",{className:"journal-main",children:[$.jsx("p",{className:"section-lead",children:"此刻更接近哪种心绪？"}),$.jsx("div",{className:"mood-row",role:"group","aria-label":"选择心绪",children:B2.map(d=>$.jsx("button",{type:"button",className:o===d?"is-selected":"","aria-pressed":o===d,onClick:()=>l(d),children:d},d))}),$.jsxs("label",{children:[$.jsx("span",{children:"写一点什么"}),$.jsx("textarea",{maxLength:120,rows:5,value:c,onChange:d=>h(d.target.value),placeholder:"一句话，或只留下一点痕迹。"}),$.jsxs("small",{children:[c.length," / 120"]})]}),$.jsxs("button",{type:"button",className:"paper-button primary",onClick:f,children:[$.jsx(hg,{size:17}),"存入本机"]})]}),$.jsxs("aside",{className:"journal-summary",children:[$.jsx("span",{children:"已记录"}),$.jsx("strong",{children:t.length}),$.jsx("small",{children:"条本机心绪"}),$.jsx("p",{children:"只保存在当前浏览器，不会同步或上传。"})]})]})}function V2({onClose:s,onToast:e}){return $.jsxs("div",{className:"modal-body ritual-layout",children:[$.jsxs("div",{className:"ritual-mark","aria-hidden":"true",children:[$.jsx("span",{}),$.jsx("span",{}),$.jsx("span",{})]}),$.jsx("p",{className:"section-lead",children:"香炉中的烟气只是场景演出。合十、停留或离开，都不会改变现实中的任何结果。"}),$.jsxs("div",{className:"ritual-actions",children:[$.jsxs("button",{type:"button",className:"paper-button primary",onClick:()=>{e("已听见檐风，香烟会继续在庭院里飘散。"),s()},children:[$.jsx($f,{size:17}),"完成一次合十"]}),$.jsx("button",{type:"button",className:"paper-button",onClick:s,children:"收起"})]})]})}const og=["把今天能做的一件小事，做得更从容一些。","先整理手边的一小片空间，再决定下一步。","不必急着回应所有声音，留一点时间给自己。","向可信赖的人说清楚一个具体需要。","把复杂的事分成三次完成，今天只做第一步。"];function G2({onClose:s}){const[e,t]=It.useState(null);return $.jsxs("div",{className:"modal-body fortune-layout",children:[$.jsx("p",{className:"section-lead",children:"财神民俗展陈以展签、木牌和纹样构成虚构民俗叙事，不提供祈福、占卜或任何现实承诺。"}),$.jsxs("div",{className:`fortune-plaque ${e?"is-open":""}`,children:[$.jsx("span",{className:"fortune-label",children:"今日民俗批注"}),$.jsx("p",{children:e??"抽一枚木牌，只把它当作今天可以开始的小行动，而不是对未来的判断。"})]}),$.jsxs("div",{className:"fortune-actions",children:[$.jsxs("button",{type:"button",className:"paper-button primary",onClick:()=>t(og[Math.floor(Math.random()*og.length)]),children:[$.jsx(ug,{size:17}),e?"再抽一枚":"抽一枚木牌"]}),$.jsx("button",{type:"button",className:"paper-button",onClick:s,children:"收好木牌"})]})]})}function W2({onClose:s,onToast:e}){const[t,i]=It.useState("");return $.jsxs("div",{className:"modal-body vow-layout",children:[$.jsx("p",{className:"section-lead",children:"还愿堂把“兑现一个承诺”改写为：为现实中已经发生的努力留下一句确认。"}),$.jsxs("label",{children:[$.jsx("span",{children:"写给自己的确认"}),$.jsx("textarea",{maxLength:100,rows:4,value:t,onChange:o=>i(o.target.value),placeholder:"例如：我认真完成了这段时间里最难的一步。"}),$.jsxs("small",{children:[t.length," / 100"]})]}),$.jsxs("button",{type:"button",className:"paper-button primary",disabled:!t.trim(),onClick:()=>{e("这句话只留在这一刻，没有产生任何现实承诺。"),s()},children:[$.jsx(cg,{size:17}),"完成游戏内仪式"]})]})}function X2({onClose:s,onToast:e}){const[t,i]=It.useState(!1),[o,l]=It.useState(20);It.useEffect(()=>{if(!t)return;const h=window.setInterval(()=>{l(f=>f<=1?(window.clearInterval(h),i(!1),e("二十秒的静心体验已经完成。"),0):f-1)},1e3);return()=>window.clearInterval(h)},[e,t]);const c=()=>{l(20),i(!0)};return $.jsxs("div",{className:"modal-body breathing-layout",children:[$.jsx("p",{className:"section-lead",children:"这是一段游戏中的安静时间。跟随圆环缓慢呼吸，没有奖励，也不预测任何结果。"}),$.jsxs("div",{className:`breathing-stage ${t?"is-running":""}`,children:[$.jsx("span",{className:"breathing-ring outer"}),$.jsx("span",{className:"breathing-ring inner"}),$.jsx("span",{className:"breathing-core",children:t?o:"静"})]}),$.jsxs("div",{className:"ritual-actions",children:[$.jsxs("button",{type:"button",className:"paper-button primary",onClick:c,children:[$.jsx($f,{size:17}),t?"重新开始":"开始二十秒"]}),$.jsx("button",{type:"button",className:"paper-button",onClick:s,children:"离开静心殿"})]})]})}function j2({onClose:s}){return $.jsxs("div",{className:"modal-body gate-layout",children:[$.jsx("p",{className:"section-lead",children:"愿庭是一处完全虚构的当代中式庭院。门、殿、树、池与所有仪式均为游戏场景的一部分。"}),$.jsx("blockquote",{children:"“入庭不必许愿，只消慢一点。”"}),$.jsxs("button",{type:"button",className:"paper-button primary",onClick:s,children:[$.jsx(lg,{size:17}),"回到院中"]})]})}const av=document.getElementById("root");if(!av)throw new Error("Root element not found");Z_.createRoot(av).render($.jsx(It.StrictMode,{children:$.jsx(N2,{})}));
