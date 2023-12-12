"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4701],{997:(k,x,i)=>{i.d(x,{TuiAddonDocModule:()=>M});var D=i(4537),l=i(9439);let M=(()=>{class d{}return d.\u0275fac=function(f){return new(f||d)},d.\u0275mod=D.oAB({type:d}),d.\u0275inj=D.cJS({imports:[l.JF,l.mG,l.Lx,l.Lq,l.u4]}),d})()},4701:(k,x,i)=>{i.r(x),i.d(x,{DateRangeMaskDocModule:()=>$});var D=i(8692),l=i(9900),M=i(3178),P=i(997),d=i(4427),_=i(8089),f=i(2847),u=i(8940),p=i(1673),U=i(4911),C=i(4707),c=i(3358),Z=i(4358),e=i(4537),y=i(7258),s=i(9439),h=i(5640);const R=(0,c.n9)({mode:"mm/dd/yyyy",dateSeparator:"/"});let V=(()=>{class t{constructor(){this.usDateFormatter=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}),this.value="09/20/2020\xa0\u2013\xa002/06/2023",this.filler="mm/dd/yyyy\xa0\u2013\xa0mm/dd/yyyy",this.mask=R}get hint(){return this.value.length<this.filler.length?"Complete the date range!":this.value.split("\xa0\u2013\xa0").map(n=>this.usDateFormatter.format(new Date(n))).join("\xa0\u2013\xa0")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["date-range-mask-doc-example-1"]],decls:3,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiHintContent","tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(n,a){1&n&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(r){return a.value=r}),e._uU(1," US format "),e._UZ(2,"input",1),e.qZA()),2&n&&(e.Udp("max-width",30,"rem"),e.Q6J("tuiHintContent",a.hint)("tuiTextfieldFiller",a.filler)("ngModel",a.value),e.xp6(2),e.Q6J("maskito",a.mask))},dependencies:[l.JJ,l.On,y.r,_.bZ,p.K3,p.wU,h.MB,u.B7,u.kD],encapsulation:2,changeDetection:0}),t})();const v=(0,c.n9)({mode:"dd/mm/yyyy",min:new Date("1711-11-19"),max:new Date("1765-04-15")});let J=(()=>{class t{constructor(){this.value="19.11.1711\xa0\u2013\xa015.04.1765",this.filler="dd.mm.yyyy\xa0\u2013\xa0dd.mm.yyyy",this.mask=v}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["date-range-mask-doc-example-2"]],decls:2,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","tuiTextfieldLabelOutside","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(n,a){1&n&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(r){return a.value=r}),e._UZ(1,"input",1),e.qZA()),2&n&&(e.Udp("max-width",30,"rem"),e.Q6J("tuiTextfieldFiller",a.filler)("tuiTextfieldLabelOutside",!0)("ngModel",a.value),e.xp6(1),e.Q6J("maskito",a.mask))},dependencies:[l.JJ,l.On,y.r,p.K3,p.wU,h.MB,u.B7,u.xT,u.kD],encapsulation:2,changeDetection:0}),t})();const A=(0,c.n9)({mode:"dd/mm/yyyy",minLength:{day:3},maxLength:{month:1}});let O=(()=>{class t{constructor(){this.value="01.01.2023\xa0\u2013\xa005.01.2023",this.filler="dd.mm.yyyy\xa0\u2013\xa0dd.mm.yyyy",this.mask=A,this.hint="The right date must be at least 3 days after the left one.\nAlso, the difference between the dates must not exceed 1 month."}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["date-range-mask-doc-example-3"]],decls:2,vars:7,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiHintContent","tuiTextfieldFiller","tuiTextfieldLabelOutside","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(n,a){1&n&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(r){return a.value=r}),e._UZ(1,"input",1),e.qZA()),2&n&&(e.Udp("max-width",30,"rem"),e.Q6J("tuiHintContent",a.hint)("tuiTextfieldFiller",a.filler)("tuiTextfieldLabelOutside",!0)("ngModel",a.value),e.xp6(1),e.Q6J("maskito",a.mask))},dependencies:[l.JJ,l.On,y.r,_.bZ,p.K3,p.wU,h.MB,u.B7,u.xT,u.kD],encapsulation:2,changeDetection:0}),t})();const L=(0,c.n9)({mode:"dd/mm/yyyy",rangeSeparator:" ~ "});let E=(()=>{class t{constructor(){this.value="01.01.2023 ~ 05.01.2023",this.filler="dd.mm.yyyy ~ dd.mm.yyyy",this.mask=L}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["date-range-mask-doc-example-4"]],decls:2,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","tuiTextfieldLabelOutside","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(n,a){1&n&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(r){return a.value=r}),e._UZ(1,"input",1),e.qZA()),2&n&&(e.Udp("max-width",30,"rem"),e.Q6J("tuiTextfieldFiller",a.filler)("tuiTextfieldLabelOutside",!0)("ngModel",a.value),e.xp6(1),e.Q6J("maskito",a.mask))},dependencies:[l.JJ,l.On,y.r,p.K3,p.wU,h.MB,u.B7,u.xT,u.kD],encapsulation:2,changeDetection:0}),t})();function N(t,m){1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"mode"),e.qZA(),e._uU(3," and "),e.TgZ(4,"code"),e._uU(5,"separator"),e.qZA(),e._uU(6," parameters to get a mask with a locale specific representation of dates. "))}function S(t,m){1&t&&(e._uU(0," Parameters "),e.TgZ(1,"code"),e._uU(2,"min"),e.qZA(),e._uU(3," and "),e.TgZ(4,"code"),e._uU(5,"max"),e.qZA(),e._uU(6," allow you to set the earliest and the latest available dates. They accept native "),e.TgZ(7,"a",10),e._uU(8," Date "),e.qZA(),e._uU(9," . "))}function Q(t,m){1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"minLength"),e.qZA(),e._uU(3," and "),e.TgZ(4,"code"),e._uU(5,"maxLength"),e.qZA(),e._uU(6," parameters to set minimal and maximal length of the date range. "))}function F(t,m){1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"rangeSeparator"),e.qZA(),e._uU(3," parameter to customize separator between dates of the date range. "))}function K(t,m){if(1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"maskitoDateRangeOptionsGenerator"),e.qZA(),e._uU(3," to create a mask to input a range of dates. "),e.TgZ(4,"tui-doc-example",2),e.YNc(5,N,7,0,"ng-template",null,3,e.W1O),e._UZ(7,"date-range-mask-doc-example-1"),e.qZA(),e.TgZ(8,"tui-doc-example",4),e.YNc(9,S,10,0,"ng-template",null,5,e.W1O),e._UZ(11,"date-range-mask-doc-example-2"),e.qZA(),e.TgZ(12,"tui-doc-example",6),e.YNc(13,Q,7,0,"ng-template",null,7,e.W1O),e._UZ(15,"date-range-mask-doc-example-3"),e.qZA(),e.TgZ(16,"tui-doc-example",8),e.YNc(17,F,4,0,"ng-template",null,9,e.W1O),e._UZ(19,"date-range-mask-doc-example-4"),e.qZA()),2&t){const n=e.MAs(6),a=e.MAs(10),o=e.MAs(14),r=e.MAs(18),T=e.oxw();e.xp6(4),e.Q6J("content",T.dateLocalizationExample1)("description",n),e.xp6(4),e.Q6J("content",T.minMaxExample2)("description",a),e.xp6(4),e.Q6J("content",T.minMaxLengthExample3)("description",o),e.xp6(4),e.Q6J("content",T.customRangeExample4)("description",r)}}function w(t,m){if(1&t&&(e.TgZ(0,"tui-input",20),e._uU(1," Enter dates "),e._UZ(2,"input",21),e.qZA()),2&t){const n=e.oxw(2);e.Q6J("formControl",n.apiPageControl)("tuiTextfieldFiller",n.getPlaceholder(n.mode,n.dateSeparator,n.rangeSeparator)),e.xp6(2),e.Q6J("maskito",n.maskitoOptions)}}function G(t,m){1&t&&e._uU(0," Date format mode ")}function H(t,m){1&t&&(e._uU(0," Separator between date segments (days, months and years). "),e.TgZ(1,"p")(2,"strong"),e._uU(3,"Default:"),e.qZA(),e.TgZ(4,"code"),e._uU(5,"."),e.qZA(),e._uU(6," (dot). "),e.qZA())}function B(t,m){1&t&&(e._uU(0," Separator between dates of the date range. "),e.TgZ(1,"p")(2,"strong"),e._uU(3,"Default:"),e.qZA(),e.TgZ(4,"code"),e._uU(5,"\xa0\u2013\xa0"),e.qZA()())}function Y(t,m){1&t&&e._uU(0," Earliest date ")}function z(t,m){1&t&&e._uU(0," Latest date ")}function I(t,m){1&t&&e._uU(0," Minimal length of the range ")}function W(t,m){1&t&&e._uU(0," Maximal length of the range ")}function j(t,m){1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"dateSeparator"),e.qZA(),e._uU(3," instead. "),e.TgZ(4,"p")(5,"strong"),e._uU(6,"Default:"),e.qZA(),e.TgZ(7,"code"),e._uU(8,"."),e.qZA(),e._uU(9," (dot). "),e.qZA())}function X(t,m){if(1&t){const n=e.EpF();e.TgZ(0,"tui-doc-demo",11),e.YNc(1,w,3,3,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,G,1,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(o){e.CHM(n);const r=e.oxw();return e.KtG(r.mode=o)})("documentationPropertyValueChange",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.updateOptions())}),e.YNc(4,H,7,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(o){e.CHM(n);const r=e.oxw();return e.KtG(r.dateSeparator=o)})("documentationPropertyValueChange",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.updateOptions())}),e.YNc(5,B,6,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(o){e.CHM(n);const r=e.oxw();return e.KtG(r.rangeSeparator=o)})("documentationPropertyValueChange",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.updateOptions())}),e.YNc(6,Y,1,0,"ng-template",15),e.NdJ("documentationPropertyValueChange",function(o){e.CHM(n);const r=e.oxw();return e.KtG(r.minStr=o)})("documentationPropertyValueChange",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.updateDate())}),e.YNc(7,z,1,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(o){e.CHM(n);const r=e.oxw();return e.KtG(r.maxStr=o)})("documentationPropertyValueChange",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.updateDate())}),e.YNc(8,I,1,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(o){e.CHM(n);const r=e.oxw();return e.KtG(r.minLength=o)})("documentationPropertyValueChange",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.updateOptions())}),e.YNc(9,W,1,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(o){e.CHM(n);const r=e.oxw();return e.KtG(r.maxLength=o)})("documentationPropertyValueChange",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.updateOptions())}),e.YNc(10,j,10,0,"ng-template",19),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("control",n.apiPageControl),e.xp6(3),e.Q6J("documentationPropertyValues",n.modeOptions)("documentationPropertyValue",n.mode),e.xp6(1),e.Q6J("documentationPropertyValue",n.dateSeparator),e.xp6(1),e.Q6J("documentationPropertyValue",n.rangeSeparator),e.xp6(1),e.Q6J("documentationPropertyValues",n.minMaxOptions)("documentationPropertyValue",n.minStr),e.xp6(1),e.Q6J("documentationPropertyValues",n.minMaxOptions)("documentationPropertyValue",n.maxStr),e.xp6(1),e.Q6J("documentationPropertyValues",n.minLengthOptions)("documentationPropertyValue",n.minLength),e.xp6(1),e.Q6J("documentationPropertyValues",n.maxLengthOptions)("documentationPropertyValue",n.maxLength),e.xp6(1),e.Q6J("documentationPropertyDeprecated",!0)}}class g{constructor(){this.dateLocalizationExample1={[C.C.MaskitoOptions]:i.e(2049).then(i.t.bind(i,2049,17))},this.minMaxExample2={[C.C.MaskitoOptions]:i.e(6901).then(i.t.bind(i,6901,17))},this.minMaxLengthExample3={[C.C.MaskitoOptions]:i.e(6880).then(i.t.bind(i,6880,17))},this.customRangeExample4={[C.C.MaskitoOptions]:i.e(6990).then(i.t.bind(i,6990,17))},this.apiPageControl=new l.NI(""),this.modeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd","mm/yy","mm/yyyy","yyyy/mm","yyyy"],this.minMaxOptions=["0001-01-01","9999-12-31","2000-01-01","2025-05-10"],this.minLengthOptions=[{day:3},{day:15}],this.maxLengthOptions=[{day:5},{month:1},{year:1}],this.mode=this.modeOptions[0],this.separator=".",this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.minLength={},this.maxLength={},this.dateSeparator=".",this.rangeSeparator="\xa0\u2013\xa0",this.maskitoOptions=(0,c.n9)(this)}getPlaceholder(m,n,a){const o=m.replace(/\//g,n);return`${o}${a}${o}`}updateOptions(){this.maskitoOptions=(0,c.n9)(this)}updateDate(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}}g.\u0275fac=function(m){return new(m||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["date-range-mask-doc"]],decls:3,vars:0,consts:[["header","DateRange","package","KIT"],["pageTab",""],["id","date-localization","heading","Date localization",3,"content","description"],["dateLocalizationDescription",""],["id","min-max","heading","Min and max dates",3,"content","description"],["minMaxDescription",""],["id","min-max-length","heading","Min and max length of range",3,"content","description"],["minMaxLengthDescription",""],["id","custom-range-separator","heading","Custom range separator",3,"content","description"],["customRangeSeparatorDescription",""],["href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","rel","noreferrer","target","_blank","tuiLink",""],[3,"control"],["documentationPropertyMode","input","documentationPropertyName","mode","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","dateSeparator","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","rangeSeparator","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","minLength","documentationPropertyType","MaskitoDateSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxLength","documentationPropertyType","MaskitoDateSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","separator",3,"documentationPropertyDeprecated"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"formControl","tuiTextfieldFiller"],["inputmode","numeric","tuiTextfield","",3,"maskito"]],template:function(m,n){1&m&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,K,20,8,"ng-template",1),e.YNc(2,X,11,14,"ng-template",1),e.qZA())},dependencies:[l.JJ,l.oH,y.r,s.FU,s.zb,s.B7,s.qo,s.nj,s.f2,p.K3,p.wU,h.MB,f.V,u.B7,u.kD,V,J,O,E],encapsulation:2,changeDetection:0}),(0,U.gn)([Z.UM],g.prototype,"getPlaceholder",null);let $=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[D.ez,l.u5,l.UX,P.TuiAddonDocModule,_.go,p.Qf,f.j,u.cn,M.Bz.forChild((0,d.Ve)(g))]}),t})()}}]);