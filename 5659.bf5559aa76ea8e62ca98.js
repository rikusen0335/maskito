"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5659],{5659:(M,p,n)=>{n.r(p),n.d(p,{CypressDocPageModule:()=>D});var d=n(6104),l=n(3738),g=n(5358),f=n(2905),r=n(5208),u=n(5974),i=n(1673),e=n(4788),C=n(7258);let y=(()=>{class t{constructor(){this.value={number:"",name:""},this.cardMask={mask:[...Array(4).fill(/\d/)," ",...Array(4).fill(/\d/)," ",...Array(4).fill(/\d/)," ",...Array(4).fill(/\d/)]},this.nameMask={mask:/^[a-zA-Z\s]+$/,postprocessor:({value:a,selection:o})=>({value:a.toUpperCase(),selection:o})},this.cardPredicate=a=>a.querySelectorAll("input")[0],this.namePredicate=a=>a.querySelectorAll("input")[1]}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["test-doc-example-1"]],decls:6,vars:4,consts:[["tuiGroup","",3,"maskito","maskitoElement"],[3,"ngModel","ngModelChange"],["card",""]],template:function(a,o){if(1&a&&(e.TgZ(0,"div",0),e.TgZ(1,"tui-input",1,2),e.NdJ("ngModelChange",function(m){return o.value.number=m}),e._uU(3," Card number "),e.qZA(),e.TgZ(4,"tui-input",1),e.NdJ("ngModelChange",function(m){return o.value.name=m}),e._uU(5,"Name"),e.qZA(),e.qZA()),2&a){const c=e.MAs(2);e.Q6J("maskito",c.focused?o.cardMask:o.nameMask)("maskitoElement",c.focused?o.cardPredicate:o.namePredicate),e.xp6(1),e.Q6J("ngModel",o.value.number),e.xp6(3),e.Q6J("ngModel",o.value.name)}},directives:[u.gZ,C.r,i.K3,i.wU,l.JJ,l.On],encapsulation:2,changeDetection:0}),t})();function v(t,s){1&t&&e._UZ(0,"test-doc-example-1",2)}let h=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["cypress-doc-page"]],decls:2,vars:0,consts:[["header","Cypress"],["pageTab","Tests"],["id","predicate"]],template:function(a,o){1&a&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,v,1,0,"ng-template",1),e.qZA())},directives:[r.qo,r.nj,y],encapsulation:2,changeDetection:0}),t})(),D=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,l.u5,f.U5,i.Qf,u.n6,r.fV,g.Bz.forChild((0,r.Ve)(h))]]}),t})()}}]);