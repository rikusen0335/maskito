!function(){"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(a=r.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"))?o:String(o)),r)}var a,o}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5659],{85659:function(t,n,o){o.r(n),o.d(n,{CypressDocPageModule:function(){return k}});var i,u=o(12057),c=o(23738),l=o(55358),s=o(42905),f=o(70997),p=o(44427),m=o(95974),d=o(21673),y=o(74788),v=o(75453),g=o(47258),b=((i=r(function t(){a(this,t),this.value={number:"",name:""},this.cardMask={mask:[].concat(e(Array(4).fill(/\d/)),[" "],e(Array(4).fill(/\d/)),[" "],e(Array(4).fill(/\d/)),[" "],e(Array(4).fill(/\d/)))},this.nameMask={mask:/^[a-zA-Z\s]+$/,postprocessor:function(e){var t=e.value,n=e.selection;return{value:t.toUpperCase(),selection:n}}},this.cardPredicate=function(e){return e.querySelectorAll("input")[0]},this.namePredicate=function(e){return e.querySelectorAll("input")[1]}})).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=y.Xpm({type:i,selectors:[["test-doc-example-1"]],decls:6,vars:4,consts:[["tuiGroup","",3,"maskito","maskitoElement"],[3,"ngModel","ngModelChange"],["card",""]],template:function(e,t){if(1&e&&(y.TgZ(0,"div",0),y.TgZ(1,"tui-input",1,2),y.NdJ("ngModelChange",function(e){return t.value.number=e}),y._uU(3," Card number "),y.qZA(),y.TgZ(4,"tui-input",1),y.NdJ("ngModelChange",function(e){return t.value.name=e}),y._uU(5,"Name"),y.qZA(),y.qZA()),2&e){var n=y.MAs(2);y.Q6J("maskito",n.focused?t.cardMask:t.nameMask)("maskitoElement",n.focused?t.cardPredicate:t.namePredicate),y.xp6(1),y.Q6J("ngModel",t.value.number),y.xp6(3),y.Q6J("ngModel",t.value.name)}},directives:[m.gZ,g.r,d.K3,d.wU,c.JJ,c.On],encapsulation:2,changeDetection:0}),i);function h(e,t){1&e&&y._UZ(0,"test-doc-example-1",2)}var A=function(){var e=r(function e(){a(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=y.Xpm({type:e,selectors:[["cypress-doc-page"]],decls:2,vars:0,consts:[["header","Cypress"],["pageTab","Tests"],["id","predicate"]],template:function(e,t){1&e&&(y.TgZ(0,"tui-doc-page",0),y.YNc(1,h,1,0,"ng-template",1),y.qZA())},directives:[v.qo,v.nj,b],encapsulation:2,changeDetection:0}),e}(),k=function(){var e=r(function e(){a(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y.oAB({type:e}),e.\u0275inj=y.cJS({imports:[[u.ez,c.u5,s.U5,d.Qf,m.n6,f.fV,l.Bz.forChild((0,p.Ve)(A))]]}),e}()}}])}();