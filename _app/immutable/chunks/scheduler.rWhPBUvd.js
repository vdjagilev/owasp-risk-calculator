function k(){}const et=t=>t;function T(t,e){for(const n in e)t[n]=e[n];return t}function P(t){return t()}function nt(){return Object.create(null)}function H(t){t.forEach(P)}function q(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ct(t){return Object.keys(t).length===0}function B(t,...e){if(t==null){for(const i of e)i(void 0);return k}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function rt(t,e,n){t.$$.on_destroy.push(B(e,n))}function st(t,e,n,i){if(t){const c=N(t,e,n,i);return t[0](c)}}function N(t,e,n,i){return t[1]&&i?T(n.ctx.slice(),t[1](i(e))):n.ctx}function ot(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const l=[],r=Math.max(e.dirty.length,c.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|c[o];return l}return e.dirty|c}return e.dirty}function lt(t,e,n,i,c,l){if(c){const r=N(e,n,i,l);t.p(r,c)}}function ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function at(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ft(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function _t(t){const e={};for(const n in t)e[n]=!0;return e}function dt(t){return t&&q(t.destroy)?t.destroy:k}let p=!1;function ht(){p=!0}function mt(){p=!1}function L(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function M(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(c>0&&e[n[c]].claim_order<=u?c+1:L(1,c,O=>e[n[O]].claim_order,u))-1;i[s]=n[a]+1;const v=a+1;n[v]=s,c=Math.max(v,c)}const l=[],r=[];let o=e.length-1;for(let s=n[c]+1;s!=0;s=i[s-1]){for(l.push(e[s-1]);o>=s;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<r.length;s++){for(;u<l.length&&r[s].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(r[s],a)}}function R(t,e){t.appendChild(e)}function I(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=A("style");return e.textContent="/* empty */",z(I(t),e),e.sheet}function z(t,e){return R(t.head||t,e),e.sheet}function F(t,e){if(p){for(M(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){p&&!n?F(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function bt(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function A(t){return document.createElement(t)}function U(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function xt(){return w(" ")}function wt(){return w("")}function vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Et(t){return function(e){return e.preventDefault(),t.call(this,e)}}function kt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function C(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const W=["width","height"];function G(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&W.indexOf(i)===-1?t[i]=e[i]:C(t,i,e[i])}function J(t,e){Object.keys(e).forEach(n=>{K(t,n,e[n])})}function K(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:C(t,e,n)}function Nt(t){return/-/.test(t)?J:G}function At(t){return t.dataset.svelteH}function Ct(t){return Array.from(t.childNodes)}function Q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,i,c=!1){Q(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const s=n(o);return s===void 0?t.splice(r,1):t[r]=s,c||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const s=n(o);return s===void 0?t.splice(r,1):t[r]=s,c?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function j(t,e,n,i){return D(t,c=>c.nodeName===e,c=>{const l=[];for(let r=0;r<c.attributes.length;r++){const o=c.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>c.removeAttribute(r))},()=>i(e))}function Dt(t,e,n){return j(t,e,n,A)}function jt(t,e,n){return j(t,e,n,U)}function V(t,e){return D(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(e),!0)}function St(t){return V(t," ")}function Ot(t,e){e=""+e,t.data!==e&&(t.data=e)}function Tt(t,e){t.value=e??""}function Pt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Ht(t,e,n){for(let i=0;i<t.options.length;i+=1){const c=t.options[i];if(c.__value===e){c.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function qt(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];i.selected=~e.indexOf(i.__value)}}function Bt(t){const e=t.querySelector(":checked");return e&&e.__value}function X(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Lt(t,e){const n=[];let i=0;for(const c of e.childNodes)if(c.nodeType===8){const l=c.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(c)):l===`HEAD_${t}_START`&&(i+=1,n.push(c))}else i>0&&n.push(c);return n}function Mt(t,e){return new t(e)}let m;function y(t){m=t}function d(){if(!m)throw new Error("Function called outside component initialization");return m}function Rt(t){d().$$.on_mount.push(t)}function It(t){d().$$.after_update.push(t)}function zt(t){d().$$.on_destroy.push(t)}function Ft(){const t=d();return(e,n,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[e];if(c){const l=X(e,n,{cancelable:i});return c.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Ut(t,e){return d().$$.context.set(t,e),e}function Wt(t){return d().$$.context.get(t)}function Gt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],E=[];let _=[];const g=[],S=Promise.resolve();let x=!1;function Y(){x||(x=!0,S.then($))}function Jt(){return Y(),S}function Z(t){_.push(t)}function Kt(t){g.push(t)}const b=new Set;let f=0;function $(){if(f!==0)return;const t=m;do{try{for(;f<h.length;){const e=h[f];f++,y(e),tt(e.$$)}}catch(e){throw h.length=0,f=0,e}for(y(null),h.length=0,f=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];b.has(n)||(b.add(n),n())}_.length=0}while(h.length);for(;g.length;)g.pop()();x=!1,b.clear(),y(t)}function tt(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function Qt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{Wt as $,ut as A,ot as B,ft as C,at as D,vt as E,Gt as F,Ut as G,I as H,pt as I,H as J,q as K,Z as L,X as M,et as N,nt as O,$ as P,ct as Q,Qt as R,m as S,y as T,P as U,h as V,Y as W,ht as X,mt as Y,Nt as Z,dt as _,xt as a,U as a0,jt as a1,Lt as a2,At as a3,d as a4,_t as a5,Tt as a6,qt as a7,Ht as a8,gt as a9,Bt as aa,Ft as ab,Et as ac,kt as ad,zt as ae,Kt as af,Ct as b,Dt as c,V as d,A as e,bt as f,St as g,F as h,yt as i,Ot as j,rt as k,wt as l,It as m,k as n,Rt as o,C as p,Pt as q,E as r,it as s,w as t,Mt as u,Jt as v,st as w,T as x,G as y,lt as z};
