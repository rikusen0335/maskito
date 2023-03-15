"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[8958],{8958:(S,D,o)=>{o.r(D),o.d(D,{DateMaskDocModule:()=>Q});var x=o(6104),c=o(3738),M=o(5358),h=o(2905),s=o(9409),y=o(2847),l=o(6117),p=o(1673),u=o(7724),t=o(4788);const f=(0,u.tr)({mode:"yyyy/mm/dd",separator:"/"});var d=o(1620),_=o(9510),g=o(7258);let C=(()=>{class e{constructor(){this.value="2005/10/21",this.filler="yyyy/mm/dd",this.mask=f}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["date-mask-doc-example-1"]],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(a,n){1&a&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(r){return n.value=r}),t._uU(1," Localization "),t._UZ(2,"input",1),t.qZA()),2&a&&(t.Udp("max-width",30,"rem"),t.Q6J("tuiTextfieldFiller",n.filler)("ngModel",n.value),t.xp6(2),t.Q6J("maskito",n.mask))},directives:[p.K3,p.wU,l.B7,l.kD,c.JJ,c.On,d.MB,_.F,g.r],encapsulation:2,changeDetection:0}),e})();const T=(0,u.tr)({mode:"dd/mm/yyyy",min:new Date(2e3,0,1),max:new Date(2025,4,10)});let k=(()=>{class e{constructor(){this.value="20.01.2023",this.filler="dd.mm.yyyy",this.mask=T}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["date-mask-doc-example-2"]],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(a,n){1&a&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(r){return n.value=r}),t._uU(1," Date "),t._UZ(2,"input",1),t.qZA()),2&a&&(t.Udp("max-width",30,"rem"),t.Q6J("tuiTextfieldFiller",n.filler)("ngModel",n.value),t.xp6(2),t.Q6J("maskito",n.mask))},directives:[p.K3,p.wU,l.B7,l.kD,c.JJ,c.On,d.MB,_.F,g.r],encapsulation:2,changeDetection:0}),e})();function P(e,i){1&e&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"mode"),t.qZA(),t._uU(3," and "),t.TgZ(4,"code"),t._uU(5,"separator"),t.qZA(),t._uU(6," properties to get a mask with a locale specific representation of dates. "))}function Z(e,i){1&e&&(t._uU(0," Properties "),t.TgZ(1,"code"),t._uU(2,"min"),t.qZA(),t._uU(3," and "),t.TgZ(4,"code"),t._uU(5,"max"),t.qZA(),t._uU(6," allow you to set the earliest and the latest available dates. They accept native "),t.TgZ(7,"a",6),t._uU(8," Date "),t.qZA(),t._uU(9," . "))}function U(e,i){if(1&e&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"maskitoDateOptionsGenerator"),t.qZA(),t._uU(3," to create a mask for date input. "),t.TgZ(4,"tui-doc-example",2),t.YNc(5,P,7,0,"ng-template",null,3,t.W1O),t._UZ(7,"date-mask-doc-example-1"),t.qZA(),t.TgZ(8,"tui-doc-example",4),t.YNc(9,Z,10,0,"ng-template",null,5,t.W1O),t._UZ(11,"date-mask-doc-example-2"),t.qZA()),2&e){const a=t.MAs(6),n=t.MAs(10),m=t.oxw();t.xp6(4),t.Q6J("content",m.dateLocalization)("description",a),t.xp6(4),t.Q6J("content",m.dateMinMax)("description",n)}}function V(e,i){if(1&e&&(t.TgZ(0,"tui-input",12),t._uU(1," Input date "),t._UZ(2,"input",13),t.qZA()),2&e){const a=t.oxw(2);t.Q6J("formControl",a.apiPageControl),t.xp6(2),t.Q6J("maskito",a.maskitoOptions)}}function v(e,i){1&e&&t._uU(0," Date format mode ")}function O(e,i){1&e&&(t._uU(0," Symbol for separating date-segments (days, months, years) "),t.TgZ(1,"p",14),t.TgZ(2,"strong"),t._uU(3,"Default:"),t.qZA(),t.TgZ(4,"code"),t._uU(5,"."),t.qZA(),t._uU(6," (dot) "),t.qZA())}function J(e,i){1&e&&(t._uU(0," Earliest date "),t.TgZ(1,"p",14),t.TgZ(2,"strong"),t._uU(3,"Default:"),t.qZA(),t.TgZ(4,"code"),t._uU(5,"new Date('0001-01-01')"),t.qZA(),t.qZA())}function A(e,i){1&e&&(t._uU(0," Latest date "),t.TgZ(1,"p",14),t.TgZ(2,"strong"),t._uU(3,"Default:"),t.qZA(),t.TgZ(4,"code"),t._uU(5,"new Date('9999-12-31')"),t.qZA(),t.qZA())}function N(e,i){if(1&e){const a=t.EpF();t.TgZ(0,"tui-doc-demo",7),t.YNc(1,V,3,2,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,v,1,0,"ng-template",8),t.NdJ("documentationPropertyValueChange",function(m){return t.CHM(a),t.oxw().mode=m})("documentationPropertyValueChange",function(){return t.CHM(a),t.oxw().updateOptions()}),t.YNc(4,O,7,0,"ng-template",9),t.NdJ("documentationPropertyValueChange",function(m){return t.CHM(a),t.oxw().separator=m})("documentationPropertyValueChange",function(){return t.CHM(a),t.oxw().updateOptions()}),t.YNc(5,J,6,0,"ng-template",10),t.NdJ("documentationPropertyValueChange",function(m){return t.CHM(a),t.oxw().minStr=m})("documentationPropertyValueChange",function(){return t.CHM(a),t.oxw().updateDate()}),t.YNc(6,A,6,0,"ng-template",11),t.NdJ("documentationPropertyValueChange",function(m){return t.CHM(a),t.oxw().maxStr=m})("documentationPropertyValueChange",function(){return t.CHM(a),t.oxw().updateDate()}),t.qZA()}if(2&e){const a=t.oxw();t.Q6J("control",a.apiPageControl),t.xp6(3),t.Q6J("documentationPropertyValues",a.modeOptions)("documentationPropertyValue",a.mode),t.xp6(1),t.Q6J("documentationPropertyValues",a.separatorOptions)("documentationPropertyValue",a.separator),t.xp6(1),t.Q6J("documentationPropertyValues",a.minMaxOptions)("documentationPropertyValue",a.minStr),t.xp6(1),t.Q6J("documentationPropertyValues",a.minMaxOptions)("documentationPropertyValue",a.maxStr)}}let w=(()=>{class e{constructor(){this.apiPageControl=new c.NI(""),this.dateLocalization={MaskitoOptions:o.e(1465).then(o.t.bind(o,1465,17))},this.dateMinMax={MaskitoOptions:o.e(9899).then(o.t.bind(o,9899,17))},this.modeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd","mm/yy"],this.separatorOptions=[".","/","-"],this.minMaxOptions=["0001-01-01","9999-12-31","2000-01-01","2025-05-10"],this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.mode=this.modeOptions[0],this.separator=this.separatorOptions[0],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.maskitoOptions=(0,u.tr)(this)}updateDate(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}updateOptions(){this.maskitoOptions=(0,u.tr)(this)}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["date-mask-doc"]],decls:3,vars:0,consts:[["header","Date","package","KIT"],["pageTab",""],["id","date-localization","heading","Date localization",3,"content","description"],["dateLocalizationDescription",""],["id","min-max","heading","Min/Max",3,"content","description"],["minMaxDescription",""],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","target","_blank"],[3,"control"],["documentationPropertyName","mode","documentationPropertyMode","input","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","separator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",1,"input-date",3,"formControl"],["tuiTextfield","","inputmode","numeric",3,"maskito"],[1,"tui-space_bottom-0"]],template:function(a,n){1&a&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,U,12,4,"ng-template",1),t.YNc(2,N,7,9,"ng-template",1),t.qZA())},directives:[s.qo,s.nj,s.f2,C,k,y.V,s.FU,s.zb,s.B7,p.K3,p.wU,l.B7,c.JJ,c.oH,d.MB,_.F,g.r],styles:[".input-date[_ngcontent-%COMP%]{max-width:25rem}.input-date[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],changeDetection:0}),e})(),Q=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[x.ez,c.u5,c.UX,h.U5,s.fV,p.Qf,y.j,l.cn,M.Bz.forChild((0,s.Ve)(w))]]}),e})()}}]);