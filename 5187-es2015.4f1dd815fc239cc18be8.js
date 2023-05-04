"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5187],{25187:function(t,e,n){n.r(e),n.d(e,{DateRangeMaskDocModule:function(){return S}});var o=n(12057),a=n(23738),i=n(55358),r=n(42905),u=n(7476),m=n(48681),d=n(82847),l=n(16117),c=n(21673),s=n(64762),p=n(14707),g=n(81929),h=n(33770),y=n(44358),x=n(74788),f=(0,g.n9)({mode:"mm/dd/yyyy",separator:"/"}),P=n(81620),C=n(49510),M=n(47258);let U=(()=>{class t{constructor(){this.usDateFormatter=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}),this.value="09/20/2020\xa0\u2013\xa002/06/2023",this.filler="mm/dd/yyyy\xa0\u2013\xa0mm/dd/yyyy",this.mask=f}get hint(){return this.value.length<this.filler.length?"Complete the date range!":this.value.split("\xa0\u2013\xa0").map(t=>this.usDateFormatter.format(new Date(t))).join("\xa0\u2013\xa0")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=x.Xpm({type:t,selectors:[["date-range-mask-doc-example-1"]],decls:3,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","tuiHintContent","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(t,e){1&t&&(x.TgZ(0,"tui-input",0),x.NdJ("ngModelChange",function(t){return e.value=t}),x._uU(1," US format "),x._UZ(2,"input",1),x.qZA()),2&t&&(x.Udp("max-width",30,"rem"),x.Q6J("tuiTextfieldFiller",e.filler)("tuiHintContent",e.hint)("ngModel",e.value),x.xp6(2),x.Q6J("maskito",e.mask))},directives:[c.K3,c.wU,l.B7,l.kD,m.bZ,a.JJ,a.On,P.MB,C.F,M.r],encapsulation:2,changeDetection:0}),t})();var T=(0,g.n9)({mode:"dd/mm/yyyy",min:new Date("1711-11-19"),max:new Date("1765-04-15")});let Z=(()=>{class t{constructor(){this.value="19.11.1711\xa0\u2013\xa015.04.1765",this.filler="dd.mm.yyyy\xa0\u2013\xa0dd.mm.yyyy",this.mask=T}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=x.Xpm({type:t,selectors:[["date-range-mask-doc-example-2"]],decls:2,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldLabelOutside","tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(t,e){1&t&&(x.TgZ(0,"tui-input",0),x.NdJ("ngModelChange",function(t){return e.value=t}),x._UZ(1,"input",1),x.qZA()),2&t&&(x.Udp("max-width",30,"rem"),x.Q6J("tuiTextfieldLabelOutside",!0)("tuiTextfieldFiller",e.filler)("ngModel",e.value),x.xp6(1),x.Q6J("maskito",e.mask))},directives:[c.K3,c.wU,l.B7,l.xT,l.kD,a.JJ,a.On,P.MB,C.F,M.r],encapsulation:2,changeDetection:0}),t})();var k=(0,g.n9)({mode:"dd/mm/yyyy",minLength:{day:3},maxLength:{month:1}});let V=(()=>{class t{constructor(){this.value="01.01.2023\xa0\u2013\xa005.01.2023",this.filler="dd.mm.yyyy\xa0\u2013\xa0dd.mm.yyyy",this.mask=k,this.hint="The right date must be at least 3 days after the left one.\nAlso, the difference between the dates must not exceed 1 month."}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=x.Xpm({type:t,selectors:[["date-range-mask-doc-example-3"]],decls:2,vars:7,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiHintContent","tuiTextfieldLabelOutside","tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfield","","inputmode","decimal",3,"maskito"]],template:function(t,e){1&t&&(x.TgZ(0,"tui-input",0),x.NdJ("ngModelChange",function(t){return e.value=t}),x._UZ(1,"input",1),x.qZA()),2&t&&(x.Udp("max-width",30,"rem"),x.Q6J("tuiHintContent",e.hint)("tuiTextfieldLabelOutside",!0)("tuiTextfieldFiller",e.filler)("ngModel",e.value),x.xp6(1),x.Q6J("maskito",e.mask))},directives:[c.K3,c.wU,l.B7,m.bZ,l.xT,l.kD,a.JJ,a.On,P.MB,C.F,M.r],encapsulation:2,changeDetection:0}),t})();function w(t,e){1&t&&(x._uU(0," Use "),x.TgZ(1,"code"),x._uU(2,"mode"),x.qZA(),x._uU(3," and "),x.TgZ(4,"code"),x._uU(5,"separator"),x.qZA(),x._uU(6," parameters to get a mask with a locale specific representation of dates. "))}function _(t,e){1&t&&(x._uU(0," Parameters "),x.TgZ(1,"code"),x._uU(2,"min"),x.qZA(),x._uU(3," and "),x.TgZ(4,"code"),x._uU(5,"max"),x.qZA(),x._uU(6," allow you to set the earliest and the latest available dates. They accept native "),x.TgZ(7,"a",8),x._uU(8," Date "),x.qZA(),x._uU(9," . "))}function D(t,e){1&t&&(x._uU(0," Use "),x.TgZ(1,"code"),x._uU(2,"minLength"),x.qZA(),x._uU(3," and "),x.TgZ(4,"code"),x._uU(5,"maxLength"),x.qZA(),x._uU(6," parameters to set minimal and maximal length of the date range. "))}function J(t,e){if(1&t&&(x._uU(0," Use "),x.TgZ(1,"code"),x._uU(2,"maskitoDateRangeOptionsGenerator"),x.qZA(),x._uU(3," to create a mask to input a range of dates. "),x.TgZ(4,"tui-doc-example",2),x.YNc(5,w,7,0,"ng-template",null,3,x.W1O),x._UZ(7,"date-range-mask-doc-example-1"),x.qZA(),x.TgZ(8,"tui-doc-example",4),x.YNc(9,_,10,0,"ng-template",null,5,x.W1O),x._UZ(11,"date-range-mask-doc-example-2"),x.qZA(),x.TgZ(12,"tui-doc-example",6),x.YNc(13,D,7,0,"ng-template",null,7,x.W1O),x._UZ(15,"date-range-mask-doc-example-3"),x.qZA()),2&t){const t=x.MAs(6),e=x.MAs(10),n=x.MAs(14),o=x.oxw();x.xp6(4),x.Q6J("content",o.dateLocalizationExample1)("description",t),x.xp6(4),x.Q6J("description",e)("content",o.minMaxExample2),x.xp6(4),x.Q6J("description",n)("content",o.minMaxLengthExample3)}}function O(t,e){if(1&t&&(x.TgZ(0,"tui-input",16),x._uU(1," Enter dates "),x._UZ(2,"input",17),x.qZA()),2&t){const t=x.oxw(2);x.Q6J("tuiTextfieldFiller",t.getPlaceholder(t.mode,t.separator))("formControl",t.apiPageControl),x.xp6(2),x.Q6J("maskito",t.maskitoOptions)}}function L(t,e){1&t&&x._uU(0," Date format mode ")}function N(t,e){1&t&&(x._uU(0," Separator "),x.TgZ(1,"p"),x.TgZ(2,"strong"),x._uU(3,"Default:"),x.qZA(),x.TgZ(4,"code"),x._uU(5,"."),x.qZA(),x._uU(6," (dot). "),x.qZA())}function v(t,e){1&t&&x._uU(0," Earliest date ")}function A(t,e){1&t&&x._uU(0," Latest date ")}function b(t,e){1&t&&x._uU(0," Minimal length of the range ")}function q(t,e){1&t&&x._uU(0," Maximal length of the range ")}function Q(t,e){if(1&t){const t=x.EpF();x.TgZ(0,"tui-doc-demo",9),x.YNc(1,O,3,3,"ng-template"),x.qZA(),x.TgZ(2,"tui-doc-documentation"),x.YNc(3,L,1,0,"ng-template",10),x.NdJ("documentationPropertyValueChange",function(e){return x.CHM(t),x.oxw().mode=e})("documentationPropertyValueChange",function(){return x.CHM(t),x.oxw().updateOptions()}),x.YNc(4,N,7,0,"ng-template",11),x.NdJ("documentationPropertyValueChange",function(e){return x.CHM(t),x.oxw().separator=e})("documentationPropertyValueChange",function(){return x.CHM(t),x.oxw().updateOptions()}),x.YNc(5,v,1,0,"ng-template",12),x.NdJ("documentationPropertyValueChange",function(e){return x.CHM(t),x.oxw().minStr=e})("documentationPropertyValueChange",function(){return x.CHM(t),x.oxw().updateDate()}),x.YNc(6,A,1,0,"ng-template",13),x.NdJ("documentationPropertyValueChange",function(e){return x.CHM(t),x.oxw().maxStr=e})("documentationPropertyValueChange",function(){return x.CHM(t),x.oxw().updateDate()}),x.YNc(7,b,1,0,"ng-template",14),x.NdJ("documentationPropertyValueChange",function(e){return x.CHM(t),x.oxw().minLength=e})("documentationPropertyValueChange",function(){return x.CHM(t),x.oxw().updateOptions()}),x.YNc(8,q,1,0,"ng-template",15),x.NdJ("documentationPropertyValueChange",function(e){return x.CHM(t),x.oxw().maxLength=e})("documentationPropertyValueChange",function(){return x.CHM(t),x.oxw().updateOptions()}),x.qZA()}if(2&t){const t=x.oxw();x.Q6J("control",t.apiPageControl),x.xp6(3),x.Q6J("documentationPropertyValues",t.modeOptions)("documentationPropertyValue",t.mode),x.xp6(1),x.Q6J("documentationPropertyValue",t.separator),x.xp6(1),x.Q6J("documentationPropertyValues",t.minMaxOptions)("documentationPropertyValue",t.minStr),x.xp6(1),x.Q6J("documentationPropertyValues",t.minMaxOptions)("documentationPropertyValue",t.maxStr),x.xp6(1),x.Q6J("documentationPropertyValues",t.minLengthOptions)("documentationPropertyValue",t.minLength),x.xp6(1),x.Q6J("documentationPropertyValues",t.maxLengthOptions)("documentationPropertyValue",t.maxLength)}}class F{constructor(){this.dateLocalizationExample1={[p.C.MaskitoOptions]:n.e(2049).then(n.t.bind(n,82049,17))},this.minMaxExample2={[p.C.MaskitoOptions]:n.e(6901).then(n.t.bind(n,16901,17))},this.minMaxLengthExample3={[p.C.MaskitoOptions]:n.e(6880).then(n.t.bind(n,6880,17))},this.apiPageControl=new a.NI(""),this.modeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd"],this.minMaxOptions=["0001-01-01","9999-12-31","2000-01-01","2025-05-10"],this.minLengthOptions=[{day:3},{day:15}],this.maxLengthOptions=[{day:5},{month:1},{year:1}],this.mode=this.modeOptions[0],this.separator=".",this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.minLength={},this.maxLength={},this.maskitoOptions=(0,g.n9)(this)}getPlaceholder(t,e){const n=`${h.f$}${h.F}${h.f$}`;return`${t.replace(/\//g,e)}${n}${t.replace(/\//g,e)}`}updateOptions(){this.maskitoOptions=(0,g.n9)(this)}updateDate(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}}F.\u0275fac=function(t){return new(t||F)},F.\u0275cmp=x.Xpm({type:F,selectors:[["date-range-mask-doc"]],decls:3,vars:0,consts:[["header","DateRange","package","KIT"],["pageTab",""],["id","date-localization","heading","Date localization",3,"content","description"],["dateLocalizationDescription",""],["id","min-max","heading","Min and max dates",3,"description","content"],["minMaxDescription",""],["id","min-max-length","heading","Min and max length of range",3,"description","content"],["minMaxLengthDescription",""],["tuiLink","","href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","target","_blank"],[3,"control"],["documentationPropertyName","mode","documentationPropertyMode","input","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","separator","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","minLength","documentationPropertyMode","input","documentationPropertyType","MaskitoDateSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","MaskitoDateSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","formControl"],["tuiTextfield","","inputmode","numeric",3,"maskito"]],template:function(t,e){1&t&&(x.TgZ(0,"tui-doc-page",0),x.YNc(1,J,16,6,"ng-template",1),x.YNc(2,Q,9,12,"ng-template",1),x.qZA())},directives:[u.qo,u.nj,u.f2,U,Z,V,d.V,u.FU,u.zb,u.B7,c.K3,c.wU,l.B7,l.kD,a.JJ,a.oH,P.MB,C.F,M.r],encapsulation:2,changeDetection:0}),(0,s.gn)([y.UM],F.prototype,"getPlaceholder",null);let S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=x.oAB({type:t}),t.\u0275inj=x.cJS({imports:[[o.ez,a.u5,a.UX,r.U5,u.fV,m.go,c.Qf,d.j,l.cn,i.Bz.forChild((0,u.Ve)(F))]]}),t})()}}]);