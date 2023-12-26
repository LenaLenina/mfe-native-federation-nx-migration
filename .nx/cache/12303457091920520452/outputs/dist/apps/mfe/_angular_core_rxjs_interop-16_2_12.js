import{assertInInjectionContext as l,inject as d,DestroyRef as i,Injector as v,effect as h,untracked as a,signal as f,computed as g}from"@angular/core";import{Observable as y,ReplaySubject as C}from"rxjs";import{takeUntil as N}from"rxjs/operators";function S(r){r||(l(S),r=d(i));let e=new y(n=>r.onDestroy(n.next.bind(n)));return n=>n.pipe(N(e))}function I(r,e){!e?.injector&&l(I);let n=e?.injector??d(v),o=new C(1),u=h(()=>{let t;try{t=r()}catch(s){a(()=>o.error(s));return}a(()=>o.next(t))},{injector:n,manualCleanup:!0});return n.get(i).onDestroy(()=>{u.destroy(),o.complete()}),o.asObservable()}var c=class extends Error{constructor(e,n){super(R(e,n)),this.code=e}};function R(r,e){return`${`NG0${Math.abs(r)}`}${e?": "+e:""}`}var p=null;function m(r){let e=p;return p=r,e}function O(r){let e=m(null);try{return r()}finally{m(e)}}function x(r,e){let n=!e?.manualCleanup;n&&!e?.injector&&l(x);let o=n?e?.injector?.get(i)??d(i):null,u;return e?.requireSync?u=f({kind:0}):u=f({kind:1,value:e?.initialValue}),O(()=>{let t=r.subscribe({next:s=>u.set({kind:1,value:s}),error:s=>u.set({kind:2,error:s})});o?.onDestroy(t.unsubscribe.bind(t))}),g(()=>{let t=u();switch(t.kind){case 1:return t.value;case 2:throw t.error;case 0:throw new c(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}export{S as takeUntilDestroyed,I as toObservable,x as toSignal};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v16.2.12
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
