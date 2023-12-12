"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[169],{169:(Y,y,o)=>{o.r(y),o.d(y,{CypressDocPageModule:()=>V});var u=o(8692),d=o(9900),M=o(3178),P=o(997),k=o(4427),x=o(5974),f=o(1673),t=o(4537),T=o(9439),A=o(4911),l=o(7258);let Z=(()=>{class e{constructor(){this.value={number:"",name:""},this.cardMask={mask:[...new Array(4).fill(/\d/)," ",...new Array(4).fill(/\d/)," ",...new Array(4).fill(/\d/)," ",...new Array(4).fill(/\d/)]},this.nameMask={mask:/^[a-zA-Z\s]+$/,postprocessors:[({value:a,selection:n})=>({value:a.toUpperCase(),selection:n})]},this.cardPredicate=a=>a.querySelectorAll("input")[0],this.namePredicate=a=>a.querySelectorAll("input")[1],this.asyncPredicate=a=>(0,A.mG)(this,void 0,void 0,function*(){return Promise.resolve(a.querySelectorAll("input")[0])})}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["test-doc-example-1"]],decls:9,vars:7,consts:[["tuiGroup","",3,"maskito","maskitoElement"],[3,"ngModel","ngModelChange"],["card",""],["id","async-predicate","tuiGroup","",3,"maskito","maskitoElement"]],template:function(a,n){if(1&a&&(t.TgZ(0,"div",0)(1,"tui-input",1,2),t.NdJ("ngModelChange",function(p){return n.value.number=p}),t._uU(3," Card number "),t.qZA(),t.TgZ(4,"tui-input",1),t.NdJ("ngModelChange",function(p){return n.value.name=p}),t._uU(5,"Name"),t.qZA()(),t.TgZ(6,"div",3)(7,"tui-input",1),t.NdJ("ngModelChange",function(p){return n.value.number=p}),t._uU(8,"Card number"),t.qZA()()),2&a){const r=t.MAs(2);t.Q6J("maskito",r.focused?n.cardMask:n.nameMask)("maskitoElement",r.focused?n.cardPredicate:n.namePredicate),t.xp6(1),t.Q6J("ngModel",n.value.number),t.xp6(3),t.Q6J("ngModel",n.value.name),t.xp6(2),t.Q6J("maskito",n.cardMask)("maskitoElement",n.asyncPredicate),t.xp6(1),t.Q6J("ngModel",n.value.number)}},dependencies:[d.JJ,d.On,l.r,f.K3,f.wU,x.gZ],encapsulation:2,changeDetection:0}),e})();var i=o(3358),m=o(9510);let J=(()=>{class e{constructor(){this.numberMask=(0,i.f8)({thousandSeparator:" "}),this.hexColorMask={mask:/^[A-F\d]*$/gi,overwriteMode:"replace",postprocessors:[({value:a,selection:n})=>({selection:n,value:a.toUpperCase()})]}}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["test-doc-example-2"]],decls:2,vars:2,consts:[["maxlength","3",3,"maskito"],["maxlength","6",3,"maskito"]],template:function(a,n){1&a&&t._UZ(0,"input",0)(1,"input",1),2&a&&(t.Q6J("maskito",n.numberMask),t.xp6(1),t.Q6J("maskito",n.hexColorMask))},dependencies:[l.r,m.X],encapsulation:2,changeDetection:0}),e})(),j=(()=>{class e{constructor(){this.numberMask=(0,i.f8)({prefix:"$ ",postfix:" per day"})}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["test-doc-example-3"]],decls:1,vars:1,consts:[["value","$ 100 per day",3,"maskito"]],template:function(a,n){1&a&&t._UZ(0,"input",0),2&a&&t.Q6J("maskito",n.numberMask)},dependencies:[l.r,m.X],encapsulation:2,changeDetection:0}),e})();const U=["inputRef"];let Q=(()=>{class e{transform(a){return(0,i.f8)({postfix:a,precision:2,thousandSeparator:" "})}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275pipe=t.Yjl({name:"calculateMask",type:e,pure:!0}),e})(),F=(()=>{class e{constructor(){this.pluralize={one:" year",few:" years",many:" years",other:" years"}}get parsedValue(){return(0,i.vZ)(this.inputRef.nativeElement.value)}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["test-doc-example-4"]],viewQuery:function(a,n){if(1&a&&t.Gf(U,7,t.SBq),2&a){let r;t.iGM(r=t.CRH())&&(n.inputRef=r.first)}},decls:4,vars:6,consts:[["placeholder","Enter number","value","1 year",3,"maskito"],["inputRef",""]],template:function(a,n){1&a&&(t._UZ(0,"input",0,1),t.ALo(2,"calculateMask"),t.ALo(3,"i18nPlural")),2&a&&t.Q6J("maskito",t.lcZ(2,1,t.xi3(3,3,n.parsedValue,n.pluralize)))},dependencies:[l.r,m.X,u.Gx,Q],encapsulation:2,changeDetection:0}),e})();var c=o(9537),R=o(4448),v=o(321),g=o(8139);const h=(0,i.rC)({mode:"HH:MM"}),D=e=>e.querySelector(".real-input"),X=e=>new Promise(s=>{setTimeout(()=>{s(D(e))},2e3)}),w=e=>new Promise(s=>{setTimeout(()=>s((e=>e.querySelector("input"))(e)),7e3)}),N=e=>new Promise(s=>{setTimeout(()=>s(D(e)),500)}),C={display:"none"},E=(0,g.forwardRef)((e,s)=>(0,c.jsxs)("div",Object.assign({ref:s},{children:[(0,c.jsx)("input",{style:C}),(0,c.jsx)("input",Object.assign({className:"real-input"},e)),(0,c.jsx)("input",{style:C})]}))),G=()=>{const[e,s]=(0,g.useState)(!1),a=(0,v.I)({options:h,elementPredicate:X}),n=(0,v.I)({options:h,elementPredicate:e?N:w});return(0,g.useEffect)(()=>{setTimeout(()=>{s(!0)},2e3)},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(E,{ref:a,id:"async-predicate-2s-resolves",placeholder:"Async predicate (2s)"}),(0,c.jsx)(E,{ref:n,id:"race-condition-check",placeholder:"Race condition check"})]})};let z=(()=>{class e{constructor(a,n){(0,u.NF)(n)&&(0,R.s)(a.nativeElement).render((0,c.jsx)(G,{}))}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(t.SBq),t.Y36(t.Lbi))},e.\u0275cmp=t.Xpm({type:e,selectors:[["test-doc-example-5"]],decls:0,vars:0,template:function(a,n){},encapsulation:2,changeDetection:0}),e})(),I=(()=>{class e{constructor(){this.numberMask=(0,i.f8)({prefix:"EUR "})}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["test-doc-example-6"]],decls:1,vars:1,consts:[["placeholder","Type 'E', 'U' or 'R' character","value","",3,"maskito"]],template:function(a,n){1&a&&t._UZ(0,"input",0),2&a&&t.Q6J("maskito",n.numberMask)},dependencies:[l.r,m.X],encapsulation:2,changeDetection:0}),e})();function B(e,s){1&e&&(t.TgZ(0,"div",2),t._UZ(1,"test-doc-example-1",3)(2,"test-doc-example-2",4)(3,"test-doc-example-3",5)(4,"test-doc-example-4",6)(5,"test-doc-example-5",7)(6,"test-doc-example-6",8),t.qZA())}let O=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["cypress-doc-page"]],decls:2,vars:0,consts:[["header","Cypress"],["pageTab","Tests"],[1,"tests-wrapper"],["id","predicate"],["id","maxlength"],["id","mirrored-prefix-postfix"],["id","runtime-postfix-changes"],["id","react-async-predicate"],["id","multi-character-prefix"]],template:function(a,n){1&a&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,B,7,0,"ng-template",1),t.qZA())},dependencies:[T.qo,T.nj,Z,J,j,F,z,I],styles:[".tests-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3rem}"],changeDetection:0}),e})(),V=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,d.u5,f.Qf,x.n6,P.TuiAddonDocModule,M.Bz.forChild((0,k.Ve)(O))]}),e})()}}]);