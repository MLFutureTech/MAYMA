/*! For license information please see 215.f318aab7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkMagueyesAncestralesYMezcalesArtesanales=self.webpackChunkMagueyesAncestralesYMezcalesArtesanales||[]).push([[215],{5215:function(e,t,n){n.r(t),n.d(t,{startTapClick:function(){return o}});var i=n(1811),o=function(e){var t,n,o,f,v=10*-l,p=0,m=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),L=new WeakMap,h=function(e){v=(0,i.u)(e),g(e)},E=function(){clearTimeout(f),f=void 0,n&&(b(!1),n=void 0)},w=function(e){n||void 0!==t&&null!==t.parentElement||(t=void 0,k(a(e),e))},g=function(e){k(void 0,e)},k=function(e,t){if(!e||e!==n){clearTimeout(f),f=void 0;var o=(0,i.q)(t),a=o.x,s=o.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(c)||S(n,a,s),b(!0)}if(e){var d=L.get(e);d&&(clearTimeout(d),L.delete(e));var l=r(e)?0:u;e.classList.remove(c),f=setTimeout((function(){S(e,a,s),f=void 0}),l)}n=e}},S=function(e,t,n){p=Date.now(),e.classList.add(c);var i=m&&s(e);i&&i.addRipple&&(T(),o=i.addRipple(t,n))},T=function(){void 0!==o&&(o.then((function(e){return e()})),o=void 0)},b=function(e){T();var t=n;if(t){var i=d-Date.now()+p;if(e&&i>0&&!r(t)){var o=setTimeout((function(){t.classList.remove(c),L.delete(t)}),d);L.set(t,o)}else t.classList.remove(c)}},y=document;y.addEventListener("ionScrollStart",(function(e){t=e.target,E()})),y.addEventListener("ionScrollEnd",(function(){t=void 0})),y.addEventListener("ionGestureCaptured",E),y.addEventListener("touchstart",(function(e){v=(0,i.u)(e),w(e)}),!0),y.addEventListener("touchcancel",h,!0),y.addEventListener("touchend",h,!0),y.addEventListener("mousedown",(function(e){var t=(0,i.u)(e)-l;v<t&&w(e)}),!0),y.addEventListener("mouseup",(function(e){var t=(0,i.u)(e)-l;v<t&&g(e)}),!0),y.addEventListener("contextmenu",(function(e){g(e)}),!0)},a=function(e){if(!e.composedPath)return e.target.closest(".ion-activatable");for(var t=e.composedPath(),n=0;n<t.length-2;n++){var i=t[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},r=function(e){return e.classList.contains("ion-activatable-instant")},s=function(e){if(e.shadowRoot){var t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",u=200,d=200,l=2500}}]);
//# sourceMappingURL=215.f318aab7.chunk.js.map