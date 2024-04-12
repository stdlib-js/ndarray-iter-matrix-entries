// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-read-only@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-shape@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.2.1-esm/index.mjs";import{assign as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-next-cartesian-index@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function v(f){var b,c,y,u,g,x,w,E,P,T,F;if(!t(f))throw new TypeError(h("1lP4f",f));if(u={writable:!1},arguments.length>1){if(!r(b=arguments[1]))throw new TypeError(h("1lP2V",b));if(i(b,"readonly")){if(!s(b.readonly))throw new TypeError(h("1lP2o","readonly",b.readonly));if(u.writable=!b.readonly,u.writable&&n(f))throw new Error(h("1lPF4"))}}if((y=(c=l(f)).length)<3)throw new TypeError(h("1lPFA"));return 0===(T=m(c))&&(x=!0),T/=c[y-1]*c[y-2],P=c[E=y-3],F=-1,(w=o(y))[y-1]=null,w[y-2]=null,e(g={},"next",(function(){var e,r,s;if(F+=1,x||F>=T)return{done:!0};e=w.slice(),r=p(w),s=(w[E]+1)%P,w[E]=s,0===s&&(w=j(c,"row-major",w,E-1,w));return{value:[e,a(f,r,!0,u.writable)],done:!1}})),e(g,"return",(function(e){if(x=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),d&&e(g,d,(function(){return v(f,u)})),g}export{v as default};
//# sourceMappingURL=index.mjs.map
