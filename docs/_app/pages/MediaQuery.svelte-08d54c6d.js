import{S as h,i as q,s as g,W as y,Y as p,Z as L,_ as w,q as M,o as S,v as b}from"../chunks/index-24028e44.js";const v=s=>({matches:s&1}),_=s=>({matches:s[0]});function A(s){let n;const a=s[4].default,t=y(a,s,s[3],_);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,o){t&&t.m(e,o),n=!0},p(e,[o]){t&&t.p&&(!n||o&9)&&p(t,a,e,e[3],n?w(a,e[3],o,v):L(e[3]),_)},i(e){n||(M(t,e),n=!0)},o(e){S(t,e),n=!1},d(e){t&&t.d(e)}}}function C(s,n,a){let{$$slots:t={},$$scope:e}=n,{query:o}=n,i,u,l=!1,f=!1;b(()=>(a(2,l=!0),()=>{c()}));function m(r){i=window.matchMedia(r),u=d=>a(0,f=d.matches),i.addListener(u),a(0,f=i.matches)}function c(){i&&u&&i.removeListener(u)}return s.$$set=r=>{"query"in r&&a(1,o=r.query),"$$scope"in r&&a(3,e=r.$$scope)},s.$$.update=()=>{s.$$.dirty&6&&l&&(c(),m(o))},[f,o,l,e,t]}class Q extends h{constructor(n){super(),q(this,n,C,A,g,{query:1})}}export{Q as default};