// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint32array@esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.13-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cos@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-two-pi@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@esm/index.mjs";function v(t){var e,s;return e=!0,function(){var n,r,i,o;if(e){do{n=t(),r=t()}while(0===n);return i=j(-2*c(n)),s=i*f(o=g*r),e=!1,i*u(o)}return e=!0,s}}var y=f(b);function x(t){return j(-2*c(t))*y}function w(t){return j(-2*c(t))*f(g*t)}function N(j){var c,u,f,g;if(g={copy:!0},arguments.length){if(!n(j))throw new TypeError(h("0Ou4K",j));if(o(j,"copy")&&(g.copy=j.copy,!i(j.copy)))throw new TypeError(h("0Ou30","copy",j.copy));if(o(j,"prng")){if(!r(j.prng))throw new TypeError(h("0Ou7M","prng",j.prng));c=j.prng}else if(o(j,"state")){if(g.state=j.state,!d(j.state))throw new TypeError(h("0Ou7I","state",j.state))}else if(o(j,"seed")&&(g.seed=j.seed,void 0===j.seed))throw new TypeError(h("0Ou7N","seed",j.seed))}return void 0===g.state?void 0===c?c=(f=m(g)).normalized:g.seed=null:c=(f=m(g)).normalized,u=v(c),t(u,"NAME","box-muller"),null===g.seed?(t(u,"seed",null),t(u,"seedLength",null)):(e(u,"seed",b),e(u,"seedLength",y)),j&&j.prng?(s(u,"state",l(null),p),t(u,"stateLength",null),t(u,"byteLength",null),t(u,"toJSON",l(null))):(s(u,"state",L,E),e(u,"stateLength",N),e(u,"byteLength",M),t(u,"toJSON",O)),t(u,"PRNG",c),o(c,"MIN")?(t(u,"MIN",x(c.MIN)),t(u,"MAX",w(c.MIN))):(t(u,"MIN",null),t(u,"MAX",null)),u;function b(){return f.seed}function y(){return f.seedLength}function N(){return f.stateLength}function M(){return f.byteLength}function L(){return f.state}function E(t){f.state=t}function O(){var t={type:"PRNG"};return t.name=u.NAME,t.state=a(f.state),t.params=[],t}}var M=N();t(M,"factory",N);export{M as default,N as factory};
//# sourceMappingURL=index.mjs.map
