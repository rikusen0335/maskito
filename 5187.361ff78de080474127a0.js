"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5187],{5187:($,D,i)=>{i.r(D),i.d(D,{DateRangeMaskDocModule:()=>z});var M=i(6104),r=i(3738),C=i(5358),T=i(2905),s=i(9409),x=i(8681),f=i(2847),c=i(6117),p=i(1673),P=i(4762),d=i(7724),y=i(548),k=i(4358),t=i(4788);const U=(0,d.n9)({mode:"mm/dd/yyyy",separator:"/"});var g=i(1620),_=i(9510),h=i(7258);let V=(()=>{class n{constructor(){this.usDateFormatter=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}),this.value="09/20/2020\xa0\u2013\xa002/06/2023",this.filler="mm/dd/yyyy\xa0\u2013\xa0mm/dd/yyyy",this.mask=U}get hint(){return this.value.length<this.filler.length?"Complete the date range!":this.value.split("\xa0\u2013\xa0").map(e=>this.usDateFormatter.format(new Date(e))).join("\xa0\u2013\xa0")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["date-range-mask-doc-example-1"]],decls:3,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","tuiHintContent","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(e,a){1&e&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(l){return a.value=l}),t._uU(1," US format "),t._UZ(2,"input",1),t.qZA()),2&e&&(t.Udp("max-width",30,"rem"),t.Q6J("tuiTextfieldFiller",a.filler)("tuiHintContent",a.hint)("ngModel",a.value),t.xp6(2),t.Q6J("maskito",a.mask))},directives:[p.K3,p.wU,c.B7,c.kD,x.bZ,r.JJ,r.On,g.MB,_.F,h.r],encapsulation:2,changeDetection:0}),n})();const Z=(0,d.n9)({mode:"dd/mm/yyyy",min:new Date("1711-11-19"),max:new Date("1765-04-15")});let R=(()=>{class n{constructor(){this.value="19.11.1711\xa0\u2013\xa015.04.1765",this.filler="dd.mm.yyyy\xa0\u2013\xa0dd.mm.yyyy",this.mask=Z}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["date-range-mask-doc-example-2"]],decls:2,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldLabelOutside","tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(e,a){1&e&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(l){return a.value=l}),t._UZ(1,"input",1),t.qZA()),2&e&&(t.Udp("max-width",30,"rem"),t.Q6J("tuiTextfieldLabelOutside",!0)("tuiTextfieldFiller",a.filler)("ngModel",a.value),t.xp6(1),t.Q6J("maskito",a.mask))},directives:[p.K3,p.wU,c.B7,c.xT,c.kD,r.JJ,r.On,g.MB,_.F,h.r],encapsulation:2,changeDetection:0}),n})();const v=(0,d.n9)({mode:"dd/mm/yyyy",minLength:{day:3},maxLength:{month:1}});let J=(()=>{class n{constructor(){this.value="01.01.2023\xa0\u2013\xa005.01.2023",this.filler="dd.mm.yyyy\xa0\u2013\xa0dd.mm.yyyy",this.mask=v,this.hint="The right date must be at least 3 days after the left one.\nAlso, the difference between the dates must not exceed 1 month."}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["date-range-mask-doc-example-3"]],decls:2,vars:7,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiHintContent","tuiTextfieldLabelOutside","tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(e,a){1&e&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(l){return a.value=l}),t._UZ(1,"input",1),t.qZA()),2&e&&(t.Udp("max-width",30,"rem"),t.Q6J("tuiHintContent",a.hint)("tuiTextfieldLabelOutside",!0)("tuiTextfieldFiller",a.filler)("ngModel",a.value),t.xp6(1),t.Q6J("maskito",a.mask))},directives:[p.K3,p.wU,c.B7,x.bZ,c.xT,c.kD,r.JJ,r.On,g.MB,_.F,h.r],encapsulation:2,changeDetection:0}),n})();function O(n,o){1&n&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"mode"),t.qZA(),t._uU(3," and "),t.TgZ(4,"code"),t._uU(5,"separator"),t.qZA(),t._uU(6," parameters to get a mask with a locale specific representation of dates. "))}function L(n,o){1&n&&(t._uU(0," Parameters "),t.TgZ(1,"code"),t._uU(2,"min"),t.qZA(),t._uU(3," and "),t.TgZ(4,"code"),t._uU(5,"max"),t.qZA(),t._uU(6," allow you to set the earliest and the latest available dates. They accept native "),t.TgZ(7,"a",8),t._uU(8," Date "),t.qZA(),t._uU(9," . "))}function N(n,o){1&n&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"minLength"),t.qZA(),t._uU(3," and "),t.TgZ(4,"code"),t._uU(5,"maxLength"),t.qZA(),t._uU(6," parameters to set minimal and maximal length of the date range. "))}function A(n,o){if(1&n&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"maskitoDateRangeOptionsGenerator"),t.qZA(),t._uU(3," to create a mask to input a range of dates. "),t.TgZ(4,"tui-doc-example",2),t.YNc(5,O,7,0,"ng-template",null,3,t.W1O),t._UZ(7,"date-range-mask-doc-example-1"),t.qZA(),t.TgZ(8,"tui-doc-example",4),t.YNc(9,L,10,0,"ng-template",null,5,t.W1O),t._UZ(11,"date-range-mask-doc-example-2"),t.qZA(),t.TgZ(12,"tui-doc-example",6),t.YNc(13,N,7,0,"ng-template",null,7,t.W1O),t._UZ(15,"date-range-mask-doc-example-3"),t.qZA()),2&n){const e=t.MAs(6),a=t.MAs(10),m=t.MAs(14),l=t.oxw();t.xp6(4),t.Q6J("content",l.dateLocalizationExample1)("description",e),t.xp6(4),t.Q6J("description",a)("content",l.minMaxExample2),t.xp6(4),t.Q6J("description",m)("content",l.minMaxLengthExample3)}}function E(n,o){if(1&n&&(t.TgZ(0,"tui-input",16),t._uU(1," Enter dates "),t._UZ(2,"input",17),t.qZA()),2&n){const e=t.oxw(2);t.Q6J("tuiTextfieldFiller",e.getPlaceholder(e.mode,e.separator))("formControl",e.apiPageControl),t.xp6(2),t.Q6J("maskito",e.maskitoOptions)}}function F(n,o){1&n&&t._uU(0," Date format mode ")}function Q(n,o){1&n&&(t._uU(0," Separator "),t.TgZ(1,"p"),t.TgZ(2,"strong"),t._uU(3,"Default:"),t.qZA(),t.TgZ(4,"code"),t._uU(5,"."),t.qZA(),t._uU(6," (dot). "),t.qZA())}function S(n,o){1&n&&t._uU(0," Earliest date ")}function w(n,o){1&n&&t._uU(0," Latest date ")}function H(n,o){1&n&&t._uU(0," Minimal length of the range ")}function Y(n,o){1&n&&t._uU(0," Maximal length of the range ")}function B(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tui-doc-demo",9),t.YNc(1,E,3,3,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,F,1,0,"ng-template",10),t.NdJ("documentationPropertyValueChange",function(m){return t.CHM(e),t.oxw().mode=m})("documentationPropertyValueChange",function(){return t.CHM(e),t.oxw().updateOptions()}),t.YNc(4,Q,7,0,"ng-template",11),t.NdJ("documentationPropertyValueChange",function(m){return t.CHM(e),t.oxw().separator=m})("documentationPropertyValueChange",function(){return t.CHM(e),t.oxw().updateOptions()}),t.YNc(5,S,1,0,"ng-template",12),t.NdJ("documentationPropertyValueChange",function(m){return t.CHM(e),t.oxw().minStr=m})("documentationPropertyValueChange",function(){return t.CHM(e),t.oxw().updateDate()}),t.YNc(6,w,1,0,"ng-template",13),t.NdJ("documentationPropertyValueChange",function(m){return t.CHM(e),t.oxw().maxStr=m})("documentationPropertyValueChange",function(){return t.CHM(e),t.oxw().updateDate()}),t.YNc(7,H,1,0,"ng-template",14),t.NdJ("documentationPropertyValueChange",function(m){return t.CHM(e),t.oxw().minLength=m})("documentationPropertyValueChange",function(){return t.CHM(e),t.oxw().updateOptions()}),t.YNc(8,Y,1,0,"ng-template",15),t.NdJ("documentationPropertyValueChange",function(m){return t.CHM(e),t.oxw().maxLength=m})("documentationPropertyValueChange",function(){return t.CHM(e),t.oxw().updateOptions()}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("control",e.apiPageControl),t.xp6(3),t.Q6J("documentationPropertyValues",e.modeOptions)("documentationPropertyValue",e.mode),t.xp6(1),t.Q6J("documentationPropertyValue",e.separator),t.xp6(1),t.Q6J("documentationPropertyValues",e.minMaxOptions)("documentationPropertyValue",e.minStr),t.xp6(1),t.Q6J("documentationPropertyValues",e.minMaxOptions)("documentationPropertyValue",e.maxStr),t.xp6(1),t.Q6J("documentationPropertyValues",e.minLengthOptions)("documentationPropertyValue",e.minLength),t.xp6(1),t.Q6J("documentationPropertyValues",e.maxLengthOptions)("documentationPropertyValue",e.maxLength)}}class u{constructor(){this.dateLocalizationExample1={MaskitoOptions:i.e(2049).then(i.t.bind(i,2049,17))},this.minMaxExample2={MaskitoOptions:i.e(6901).then(i.t.bind(i,6901,17))},this.minMaxLengthExample3={MaskitoOptions:i.e(6880).then(i.t.bind(i,6880,17))},this.apiPageControl=new r.NI(""),this.modeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd"],this.minMaxOptions=["0001-01-01","9999-12-31","2000-01-01","2025-05-10"],this.minLengthOptions=[{day:3},{day:15}],this.maxLengthOptions=[{day:5},{month:1},{year:1}],this.mode=this.modeOptions[0],this.separator=".",this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.minLength={},this.maxLength={},this.maskitoOptions=(0,d.n9)(this)}getPlaceholder(o,e){const a=`${y.f$}${y.F}${y.f$}`;return`${o.replace(/\//g,e)}${a}${o.replace(/\//g,e)}`}updateOptions(){this.maskitoOptions=(0,d.n9)(this)}updateDate(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}}u.\u0275fac=function(o){return new(o||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["date-range-mask-doc"]],decls:3,vars:0,consts:[["header","DateRange","package","KIT"],["pageTab",""],["id","date-localization","heading","Date localization",3,"content","description"],["dateLocalizationDescription",""],["id","min-max","heading","Min and max dates",3,"description","content"],["minMaxDescription",""],["id","min-max-length","heading","Min and max length of range",3,"description","content"],["minMaxLengthDescription",""],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","target","_blank"],[3,"control"],["documentationPropertyName","mode","documentationPropertyMode","input","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","separator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLength","documentationPropertyMode","input","documentationPropertyType","MaskitoDateSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","MaskitoDateSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","formControl"],["tuiTextfield","","inputmode","numeric",3,"maskito"]],template:function(o,e){1&o&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,A,16,6,"ng-template",1),t.YNc(2,B,9,12,"ng-template",1),t.qZA())},directives:[s.qo,s.nj,s.f2,V,R,J,f.V,s.FU,s.zb,s.B7,p.K3,p.wU,c.B7,c.kD,r.JJ,r.oH,g.MB,_.F,h.r],encapsulation:2,changeDetection:0}),(0,P.gn)([k.UM],u.prototype,"getPlaceholder",null);let z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[M.ez,r.u5,r.UX,T.U5,s.fV,x.go,p.Qf,f.j,c.cn,C.Bz.forChild((0,s.Ve)(u))]]}),n})()}}]);