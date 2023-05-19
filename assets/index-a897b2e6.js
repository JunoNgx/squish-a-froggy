(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function h(){}function j(e){return e()}function S(){return Object.create(null)}function k(e){e.forEach(j)}function q(e){return typeof e=="function"}function B(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function V(e){return Object.keys(e).length===0}const Y=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in Y;function $(e,t){e.appendChild(t)}function I(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function D(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function m(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function Q(){return G(" ")}function w(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function R(e){return Array.from(e.childNodes)}function f(e,t,n){e.classList[n?"add":"remove"](t)}let y;function v(e){y=e}function U(){if(!y)throw new Error("Function called outside component initialization");return y}function X(e){U().$$.on_mount.push(e)}const _=[],C=[];let g=[];const P=[],Z=Promise.resolve();let E=!1;function ee(){E||(E=!0,Z.then(F))}function M(e){g.push(e)}const x=new Set;let p=0;function F(){if(p!==0)return;const e=y;do{try{for(;p<_.length;){const t=_[p];p++,v(t),te(t.$$)}}catch(t){throw _.length=0,p=0,t}for(v(null),_.length=0,p=0;C.length;)C.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];x.has(n)||(x.add(n),n())}g.length=0}while(_.length);for(;P.length;)P.pop()();E=!1,x.clear(),v(e)}function te(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}function ne(e){const t=[],n=[];g.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),g=t}const b=new Set;let re;function O(e,t){e&&e.i&&(b.delete(e),e.i(t))}function H(e,t,n,r){if(e&&e.o){if(b.has(e))return;b.add(e),re.c.push(()=>{b.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const oe=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...oe];function le(e){e&&e.c()}function W(e,t,n,r){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,n),r||M(()=>{const i=e.$$.on_mount.map(j).filter(q);e.$$.on_destroy?e.$$.on_destroy.push(...i):k(i),e.$$.on_mount=[]}),s.forEach(M)}function z(e,t){const n=e.$$;n.fragment!==null&&(ne(n.after_update),k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){e.$$.dirty[0]===-1&&(_.push(e),ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function J(e,t,n,r,l,s,i,d=[-1]){const c=y;v(e);const o=e.$$={fragment:null,ctx:[],props:s,update:h,not_equal:l,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:S(),dirty:d,skip_bound:!1,root:t.target||c.$$.root};i&&i(o.root);let u=!1;if(o.ctx=n?n(e,t.props||{},(a,N,...T)=>{const A=T.length?T[0]:N;return o.ctx&&l(o.ctx[a],o.ctx[a]=A)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](A),u&&se(e,a)),N}):[],o.update(),u=!0,k(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const a=R(t.target);o.fragment&&o.fragment.l(a),a.forEach(L)}else o.fragment&&o.fragment.c();t.intro&&O(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),F()}v(c)}class K{$destroy(){z(this,1),this.$destroy=h}$on(t,n){if(!q(n))return h;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!V(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ie(e){let t;return{c(){t=m("section"),t.innerHTML=`<div class="frog__face svelte-54pcl7"><div class="frog__eyes-container svelte-54pcl7"><div class="frog__eye frog__eye--left svelte-54pcl7"><div class="frog__sclera frog__sclera--left svelte-54pcl7"><div class="frog__iris frog__iris--left svelte-54pcl7"></div></div></div> 
                <div class="frog__eye frog__eye--right svelte-54pcl7"><div class="frog__sclera frog__sclera--left svelte-54pcl7"><div class="frog__iris frog__iris--left svelte-54pcl7"></div></div></div></div> 

            <div class="frog__nose svelte-54pcl7"><div class="frog__nostril frog__nostril--left svelte-54pcl7"></div> 
                <div class="frog__nostril frog__nostril--right svelte-54pcl7"></div></div> 

            <div class="frog__mouth svelte-54pcl7"><div class="frog__tongue svelte-54pcl7"></div> 
                <div class="frog__lips svelte-54pcl7"></div></div> 

            <div class="frog__cheek-container svelte-54pcl7"><div class="frog__cheek frog__cheek--right svelte-54pcl7"></div> 
                <div class="frog__cheek frog__cheek--left svelte-54pcl7"></div></div></div>`,w(t,"class","frog svelte-54pcl7"),f(t,"cyan",e[0]==="cyan"),f(t,"green",e[0]==="green"),f(t,"blue",e[0]==="blue"),f(t,"yellow",e[0]==="yellow"),f(t,"purple",e[0]==="purple"),f(t,"pink",e[0]==="pink"),f(t,"orange",e[0]==="orange")},m(n,r){I(n,t,r)},p(n,[r]){r&1&&f(t,"cyan",n[0]==="cyan"),r&1&&f(t,"green",n[0]==="green"),r&1&&f(t,"blue",n[0]==="blue"),r&1&&f(t,"yellow",n[0]==="yellow"),r&1&&f(t,"purple",n[0]==="purple"),r&1&&f(t,"pink",n[0]==="pink"),r&1&&f(t,"orange",n[0]==="orange")},i:h,o:h,d(n){n&&L(t)}}}function ce(e,t,n){let r;const l=3e3+Math.random()*3e3,s=()=>{const i=["cyan","green","blue","yellow","purple","pink","orange"],d=Math.floor(Math.random()*i.length);n(0,r=i[d]),setTimeout(s,l)};return s(),[r]}class fe extends K{constructor(t){super(),J(this,t,ce,ie,B,{})}}function ae(e,t,n){const r=e.slice();return r[1]=t[n],r}function ue(e){let t,n;return t=new fe({}),{c(){le(t.$$.fragment)},m(r,l){W(t,r,l),n=!0},i(r){n||(O(t.$$.fragment,r),n=!0)},o(r){H(t.$$.fragment,r),n=!1},d(r){z(t,r)}}}function de(e){let t,n,r,l,s,i,d=Array(8),c=[];for(let o=0;o<d.length;o+=1)c[o]=ue(ae(e,d,o));return{c(){t=m("main"),n=m("section"),r=m("div");for(let o=0;o<c.length;o+=1)c[o].c();l=Q(),s=m("footer"),s.innerHTML=`<p>Inspired by <a href="https://codepen.io/parcon/full/xqVYmB" target="_blank" rel="noopener noreferrer">Hoonseok Park</a></p> 
        <p>Made by <a href="https://www.junongx.com/" target="_blank" rel="noopener noreferrer">Juno Nguyen</a> with love at work</p>`,w(r,"class","content svelte-1oerwgp"),w(n,"class","wrapper svelte-1oerwgp"),w(t,"class","svelte-1oerwgp")},m(o,u){I(o,t,u),$(t,n),$(n,r);for(let a=0;a<c.length;a+=1)c[a]&&c[a].m(r,null);$(t,l),$(t,s),i=!0},p:h,i(o){if(!i){for(let u=0;u<d.length;u+=1)O(c[u]);i=!0}},o(o){c=c.filter(Boolean);for(let u=0;u<c.length;u+=1)H(c[u]);i=!1},d(o){o&&L(t),D(c,o)}}}function pe(e){const t=()=>{const n=document.getElementsByClassName("frog");for(let r=0;r<n.length;r++)setTimeout(()=>{n[r].classList.add("active")},r*300),setTimeout(()=>{n[r].classList.remove("active")},r*300+300);setTimeout(t,2400)};return X(t),[]}class _e extends K{constructor(t){super(),J(this,t,pe,de,B,{})}}new _e({target:document.getElementById("app")});
