var te=Object.defineProperty,ne=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var J=(n,e,t)=>e in n?te(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,D=(n,e)=>{for(var t in e||(e={}))oe.call(e,t)&&J(n,t,e[t]);if(Y)for(var t of Y(e))le.call(e,t)&&J(n,t,e[t]);return n},F=(n,e)=>ne(n,re(e));import{S as P,i as S,s as $,h as L,e as b,a as k,b as K,c as f,u as I,n as _,d as p,f as W,t as U,g as O,j as w,l as T,k as g,m as M,o as z,p as G,q as j,r as N}from"./vendor.d952fdf1.js";const ae=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}};ae();function ie(n){var o,l;let e,t=((l=(o=n[5])==null?void 0:o.message)!=null?l:n[5])+"",r;return{c(){e=U("An error occured: "),r=U(t)},m(a,i){f(a,e,i),f(a,r,i)},p(a,i){var s,c;i&1&&t!==(t=((c=(s=a[5])==null?void 0:s.message)!=null?c:a[5])+"")&&O(r,t)},d(a){a&&p(e),a&&p(r)}}}function se(n){let e,t,r,o,l,a,i,s,c,u={ctx:n,current:null,token:null,hasCatch:!0,pending:fe,then:ue,catch:ce,error:5};return L(l=n[1],u),{c(){e=b("textarea"),r=k(),o=b("div"),u.block.c(),a=k(),i=b("button"),i.textContent="Copy to clipboard",e.readOnly=!0,e.value=t=n[4],w(i,"type","button")},m(m,d){f(m,e,d),f(m,r,d),f(m,o,d),u.block.m(o,u.anchor=null),u.mount=()=>o,u.anchor=null,f(m,a,d),f(m,i,d),s||(c=T(i,"click",n[3]),s=!0)},p(m,d){n=m,d&1&&t!==(t=n[4])&&(e.value=t),u.ctx=n,d&2&&l!==(l=n[1])&&L(l,u)||I(u,n,d)},d(m){m&&p(e),m&&p(r),m&&p(o),u.block.d(),u.token=null,u=null,m&&p(a),m&&p(i),s=!1,c()}}}function ce(n){let e,t=n[2]&&Q(n);return{c(){t&&t.c(),e=K()},m(r,o){t&&t.m(r,o),f(r,e,o)},p(r,o){r[2]?t?t.p(r,o):(t=Q(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(r){t&&t.d(r),r&&p(e)}}}function Q(n){var o,l;let e,t=((l=(o=n[5])==null?void 0:o.message)!=null?l:n[5])+"",r;return{c(){e=U("An error occured: "),r=U(t)},m(a,i){f(a,e,i),f(a,r,i)},p(a,i){var s,c;i&2&&t!==(t=((c=(s=a[5])==null?void 0:s.message)!=null?c:a[5])+"")&&O(r,t)},d(a){a&&p(e),a&&p(r)}}}function ue(n){let e;return{c(){e=U("Copied to the clipboard!")},m(t,r){f(t,e,r)},p:_,d(t){t&&p(e)}}}function fe(n){let e;return{c(){e=U("Copying to the Clipboard\u2026")},m(t,r){f(t,e,r)},p:_,d(t){t&&p(e)}}}function pe(n){let e;return{c(){e=b("textarea"),e.readOnly=!0,e.value="Encrypting data\u2026 "},m(t,r){f(t,e,r)},p:_,d(t){t&&p(e)}}}function me(n){let e,t,r,o,l={ctx:n,current:null,token:null,hasCatch:!0,pending:pe,then:se,catch:ie,value:4,error:5};return L(o=n[0],l),{c(){e=b("summary"),e.textContent="Get encrypted ballot",t=k(),r=K(),l.block.c()},m(a,i){f(a,e,i),f(a,t,i),f(a,r,i),l.block.m(a,l.anchor=i),l.mount=()=>r.parentNode,l.anchor=r},p(a,[i]){n=a,l.ctx=n,i&1&&o!==(o=n[0])&&L(o,l)||I(l,n,i)},i:_,o:_,d(a){a&&p(e),a&&p(t),a&&p(r),l.block.d(a),l.token=null,l=null}}}function de(n,e,t){let{encryptDataPromise:r}=e,o,l;function a(i){t(1,o=r.then(s=>navigator.clipboard.writeText(s))),t(2,l=i!=null)}return W(a),n.$$set=i=>{"encryptDataPromise"in i&&t(0,r=i.encryptDataPromise)},[r,o,l,a]}class ye extends P{constructor(e){super();S(this,e,de,me,$,{encryptDataPromise:0})}}const X={name:"RSA-OAEP",hash:"SHA-256"},E={name:"AES-CBC",length:256,saltSize:8},A={name:"PBKDF2",hash:"SHA-256",iterations:1e5,keySize:32,ivSize:16};var be=crypto;const{subtle:R}=crypto;async function he(n,e,...t){const r=await R.importKey("raw",n,A.name,!1,["deriveBits"]),o=await R.deriveBits(F(D({},A),{salt:e}),r,8*(A.ivSize+A.keySize)),l=await R.importKey("raw",new Uint8Array(o,0,A.keySize),E,!1,t),a=new Uint8Array(o,A.keySize);return{key:l,iv:a}}const _e=new TextDecoder;function we(n){const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0,o=n.length;r<o;r++)t[r]=n.charCodeAt(r);return e}function ve(n,e,t){typeof e!="string"&&(e=_e.decode(e));const r=e.split("-----",3)[2].replace(/\s+/g,""),o=atob(r),l=we(o);return R.importKey(n,l,X,!0,t)}function ke(n,e){return ve(e?"pkcs8":"spki",n,[e?"decrypt":"encrypt"])}const B=[83,97,108,116,101,100,95,95];async function ge(n,e){const t=await R.exportKey("raw",await R.generateKey(E,!0,["encrypt"])),r=be.getRandomValues(new Uint8Array(E.saltSize)),o=await ke(e),l=await R.encrypt({name:X.name},o,t),{iv:a,key:i}=await he(t,r,"encrypt"),s=await R.encrypt(F(D({},E),{iv:a}),i,n),c=new Uint8Array(B.length+E.saltSize+s.byteLength);return c.set(B),c.set(r,B.length),c.set(new Uint8Array(s),B.length+E.saltSize),{encryptedSecret:l,data:c}}function Z(n){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=n.byteLength,o=r%3,l=r-o,a,i,s,c,u,m=0;m<l;m=m+3)u=n[m]<<16|n[m+1]<<8|n[m+2],a=(u&16515072)>>18,i=(u&258048)>>12,s=(u&4032)>>6,c=u&63,e+=t[a]+t[i]+t[s]+t[c];return o==1?(u=n[l],a=(u&252)>>2,i=(u&3)<<4,e+=t[a]+t[i]+"=="):o==2&&(u=n[l]<<8|n[l+1],a=(u&64512)>>10,i=(u&1008)>>4,s=(u&15)<<2,e+=t[a]+t[i]+t[s]+"="),e}const Ue=/^\/([^/]+)\/([^/]+)\/pull\/(\d+)\/?$/,Le=new URL("https://raw.githubusercontent.com/");async function Re(n){var s;const e=new URL(n);if(e.origin!=="https://github.com")throw new Error("Only GitHub PR URLs are supported on the web UI. Use the CLI instead.");const t=Ue.exec(e.pathname);if(t==null)throw new Error("Only GitHub PR URLs are supported on the web UI. Use the CLI instead.");const[,r,o,l]=t,i=(s=(await fetch(`https://api.github.com/repos/${r}/${o}/pulls/${l}/files`).then(c=>c.ok?c.json():Promise.reject(new Error(`Fetch error: ${c.status} ${c.statusText}`)))).find(c=>c.filename.endsWith("/vote.yml")))==null?void 0:s.raw_url;if(!i)throw new Error("Failed to find a vote.yml file in this PR");return new URL(new URL(i).pathname.replace("/raw/","/"),Le)}let H=new Map;async function Ce(n){const e=H.get(n);if(console.log({cachedRequest:e,url:n}),e!=null)return e;try{const t=Re(n);return H.set(n,t),t}catch(t){throw H.set(n,Promise.reject(t)),t}}async function Ee(n){try{const e=await Ce(n),t=new URL("./ballot.yml",e),r=new URL("./public.pem",e);return[fetch(t).then(o=>o.ok?o.text():Promise.reject(new Error(`Fetch error: ${o.status} ${o.statusText}`))),fetch(r).then(o=>o.ok?o.arrayBuffer():Promise.reject(new Error(`Fetch error: ${o.status} ${o.statusText}`)))]}catch(e){return e=Promise.reject(e),[e,e]}}let ee;function Ae(n,e){ee!==n&&(ee=n,Ee(n).then(e,e))}function Pe(n){var l,a;let e,t,r=((a=(l=n[7])==null?void 0:l.message)!=null?a:n[7])+"",o;return{c(){e=b("p"),t=U("An error occured: "),o=U(r)},m(i,s){f(i,e,s),g(e,t),g(e,o)},p(i,s){var c,u;s&1&&r!==(r=((u=(c=i[7])==null?void 0:c.message)!=null?u:i[7])+"")&&O(o,r)},d(i){i&&p(e)}}}function Se(n){let e,t,r,o,l,a,i,s={ctx:n,current:null,token:null,hasCatch:!1,pending:De,then:Be,catch:$e};return L(l=n[1],s),{c(){e=b("form"),t=b("textarea"),o=k(),s.block.c(),w(t,"name","ballot"),t.value=r=n[6]},m(c,u){f(c,e,u),g(e,t),g(e,o),s.block.m(e,s.anchor=null),s.mount=()=>e,s.anchor=null,a||(i=T(e,"submit",n[2]),a=!0)},p(c,u){n=c,u&1&&r!==(r=n[6])&&(t.value=r),s.ctx=n,u&2&&l!==(l=n[1])&&L(l,s)},d(c){c&&p(e),s.block.d(),s.token=null,s=null,a=!1,i()}}}function $e(n){return{c:_,m:_,d:_}}function Be(n){let e;return{c(){e=b("button"),e.textContent="Encrypt ballot",w(e,"type","submit")},m(t,r){f(t,e,r)},d(t){t&&p(e)}}}function De(n){let e;return{c(){e=b("button"),e.textContent="Loading public key\u2026",w(e,"type","submit"),e.disabled=!0},m(t,r){f(t,e,r)},d(t){t&&p(e)}}}function Fe(n){let e;return{c(){e=b("p"),e.textContent="...loading"},m(t,r){f(t,e,r)},p:_,d(t){t&&p(e)}}}function Ke(n){let e,t,r,o,l={ctx:n,current:null,token:null,hasCatch:!0,pending:Fe,then:Se,catch:Pe,value:6,error:7};return L(o=n[0],l),{c(){e=b("summary"),e.textContent="Fill in ballot",t=k(),r=K(),l.block.c()},m(a,i){f(a,e,i),f(a,t,i),f(a,r,i),l.block.m(a,l.anchor=i),l.mount=()=>r.parentNode,l.anchor=r},p(a,[i]){n=a,l.ctx=n,i&1&&o!==(o=n[0])&&L(o,l)||I(l,n,i)},i:_,o:_,d(a){a&&p(e),a&&p(t),a&&p(r),l.block.d(a),l.token=null,l=null}}}function Ie(n,e,t){let{url:r,registerEncrypedBallot:o}=e,l,a;const i=typeof TextEncoder=="undefined"?{encode(){}}:new TextEncoder;function s(c){c.preventDefault();const u=this.elements.namedItem("ballot");o((async()=>{const{encryptedSecret:m,data:d}=await ge(i.encode(u.value),await a);return JSON.stringify({encryptedSecret:Z(new Uint8Array(m)),data:Z(d)})})())}return l=a=Promise.reject("no data"),W(()=>{Ae(r,c=>{t(0,[l,a]=c,l,t(1,a))})}),n.$$set=c=>{"url"in c&&t(3,r=c.url),"registerEncrypedBallot"in c&&t(4,o=c.registerEncrypedBallot)},[l,a,s,r,o]}class Oe extends P{constructor(e){super();S(this,e,Ie,Ke,$,{url:3,registerEncrypedBallot:4})}}function Te(n){let e,t,r,o,l,a,i,s,c,u,m;return{c(){e=b("summary"),e.textContent="Get URL to load the data",t=k(),r=b("form"),o=b("div"),l=b("label"),a=U(`URL:
      `),i=b("input"),s=k(),c=b("input"),w(i,"type","url"),i.value=n[0],w(i,"name","url"),w(i,"class","svelte-xat9pf"),w(l,"class","svelte-xat9pf"),w(c,"type","submit"),c.value="Load data",w(o,"class","svelte-xat9pf"),w(r,"class","svelte-xat9pf")},m(d,v){f(d,e,v),f(d,t,v),f(d,r,v),g(r,o),g(o,l),g(l,a),g(l,i),g(o,s),g(o,c),u||(m=T(r,"submit",Me),u=!0)},p(d,[v]){v&1&&i.value!==d[0]&&(i.value=d[0])},i:_,o:_,d(d){d&&p(e),d&&p(t),d&&p(r),u=!1,m()}}}function Me(n){n.preventDefault(),globalThis.location.hash=this.elements.namedItem("url").value}function ze(n,e,t){let{url:r}=e;return n.$$set=o=>{"url"in o&&t(0,r=o.url)},[r]}class Ge extends P{constructor(e){super();S(this,e,ze,Te,$,{url:0})}}function je(n){let e,t,r,o,l,a,i,s,c,u,m,d,v,C;return o=new Ge({props:{url:n[1]}}),s=new Oe({props:{url:n[1],registerEncrypedBallot:n[3]}}),d=new ye({props:{encryptDataPromise:n[0]}}),{c(){e=b("h1"),e.textContent="Caritat",t=k(),r=b("details"),M(o.$$.fragment),a=k(),i=b("details"),M(s.$$.fragment),u=k(),m=b("details"),M(d.$$.fragment),r.open=l=n[2]===0,i.open=c=n[2]===1,m.open=v=n[2]===2},m(y,h){f(y,e,h),f(y,t,h),f(y,r,h),z(o,r,null),f(y,a,h),f(y,i,h),z(s,i,null),f(y,u,h),f(y,m,h),z(d,m,null),C=!0},p(y,[h]){const V={};h&2&&(V.url=y[1]),o.$set(V),(!C||h&4&&l!==(l=y[2]===0))&&(r.open=l);const q={};h&2&&(q.url=y[1]),s.$set(q),(!C||h&4&&c!==(c=y[2]===1))&&(i.open=c);const x={};h&1&&(x.encryptDataPromise=y[0]),d.$set(x),(!C||h&4&&v!==(v=y[2]===2))&&(m.open=v)},i(y){C||(G(o.$$.fragment,y),G(s.$$.fragment,y),G(d.$$.fragment,y),C=!0)},o(y){j(o.$$.fragment,y),j(s.$$.fragment,y),j(d.$$.fragment,y),C=!1},d(y){y&&p(e),y&&p(t),y&&p(r),N(o),y&&p(a),y&&p(i),N(s),y&&p(u),y&&p(m),N(d)}}}function Ne(n,e,t){var i;let r=new Promise(()=>{}),o=(i=globalThis.location)==null?void 0:i.hash.slice(1),l=o?1:0;addEventListener("hashchange",()=>{var s;t(1,o=(s=globalThis.location)==null?void 0:s.hash.slice(1)),t(2,l=o?Math.max(l,1):0)});function a(s){t(0,r=s),s.then(()=>{t(2,l=2)},()=>{t(2,l=Math.min(l,1))})}return[r,o,l,a]}class He extends P{constructor(e){super();S(this,e,Ne,je,$,{})}}new He({target:document.getElementById("app")});
