"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5439],{70997:function(t,e,o){o.d(e,{fV:function(){return i}});var n=o(74788),a=o(41823);let i=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[a.JF,a.mG,a.Lx,a.Lq,a.u4]}),t})()},15439:function(t,e,o){o.r(e),o.d(e,{DateTimeMaskDocModule:function(){return v}});var n=o(12057),a=o(87862),i=o(86561),r=o(52494),u=o(70997),d=o(44427),m=o(82847),c=o(79588),p=o(21673),s=o(97582),l=o(14707),y=o(64916),M=o(33770),h=o(44358),g=o(74788),f=o(41823),x=(0,y.H$)({dateMode:"mm/dd/yyyy",timeMode:"HH:MM",dateSeparator:"/"}),P=o(94853),T=o(49510),C=o(47258);let U=(()=>{class t{constructor(){this.value="09/20/2020, 15:30",this.filler="mm/dd/yyyy, hh:mm",this.mask=x}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g.Xpm({type:t,selectors:[["date-time-mask-doc-example-1"]],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(t,e){1&t&&(g.TgZ(0,"tui-input",0),g.NdJ("ngModelChange",function(t){return e.value=t}),g._uU(1," Localization "),g._UZ(2,"input",1),g.qZA()),2&t&&(g.Udp("max-width",30,"rem"),g.Q6J("tuiTextfieldFiller",e.filler)("ngModel",e.value),g.xp6(2),g.Q6J("maskito",e.mask))},directives:[p.K3,p.wU,c.B7,c.kD,a.JJ,a.On,P.MB,T.F,C.r],encapsulation:2,changeDetection:0}),t})();var Z=(0,y.H$)({dateMode:"dd/mm/yyyy",timeMode:"HH:MM",dateSeparator:"-",min:new Date(2010,1,15,12,30,0),max:new Date(2020,8,15,18,30,0)});let k=(()=>{class t{constructor(){this.value="09-01-2018,\xa015:30",this.filler="dd-mm-yyyy,\xa0hh:mm",this.mask=Z}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g.Xpm({type:t,selectors:[["date-time-mask-doc-example-2"]],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(t,e){1&t&&(g.TgZ(0,"tui-input",0),g.NdJ("ngModelChange",function(t){return e.value=t}),g._uU(1," Min-max "),g._UZ(2,"input",1),g.qZA()),2&t&&(g.Udp("max-width",30,"rem"),g.Q6J("tuiTextfieldFiller",e.filler)("ngModel",e.value),g.xp6(2),g.Q6J("maskito",e.mask))},directives:[p.K3,p.wU,c.B7,c.kD,a.JJ,a.On,P.MB,T.F,C.r],encapsulation:2,changeDetection:0}),t})();function V(t,e){1&t&&(g._uU(0," Use "),g.TgZ(1,"code"),g._uU(2,"dateMode"),g.qZA(),g._uU(3," , "),g.TgZ(4,"code"),g._uU(5,"timeMode"),g.qZA(),g._uU(6," and "),g.TgZ(7,"code"),g._uU(8,"dateSeparator"),g.qZA(),g._uU(9," parameters to get a mask with a locale specific representation of dates. "))}function _(t,e){1&t&&(g._uU(0," Parameters "),g.TgZ(1,"code"),g._uU(2,"min"),g.qZA(),g._uU(3," and "),g.TgZ(4,"code"),g._uU(5,"max"),g.qZA(),g._uU(6," allow to set the earliest and the latest available dates. They accept native "),g.TgZ(7,"a",6),g._uU(8," Date "),g.qZA(),g._uU(9," . "))}function w(t,e){if(1&t&&(g._uU(0," Use "),g.TgZ(1,"code"),g._uU(2,"maskitoDateTimeOptionsGenerator"),g.qZA(),g._uU(3," to create a mask to input both date and time. "),g.TgZ(4,"tui-doc-example",2),g.YNc(5,V,10,0,"ng-template",null,3,g.W1O),g._UZ(7,"date-time-mask-doc-example-1"),g.qZA(),g.TgZ(8,"tui-doc-example",4),g.YNc(9,_,10,0,"ng-template",null,5,g.W1O),g._UZ(11,"date-time-mask-doc-example-2"),g.qZA()),2&t){const t=g.MAs(6),e=g.MAs(10),o=g.oxw();g.xp6(4),g.Q6J("content",o.dateTimeLocalization)("description",t),g.xp6(4),g.Q6J("content",o.dateTimeMinMax)("description",e)}}function J(t,e){if(1&t&&(g.TgZ(0,"tui-input",13),g._uU(1," Enter date and time "),g._UZ(2,"input",14),g.qZA()),2&t){const t=g.oxw(2);g.Q6J("formControl",t.apiPageControl)("tuiTextfieldFiller",t.getPlaceholder(t.dateMode,t.timeMode,t.dateSeparator)),g.xp6(2),g.Q6J("maskito",t.maskitoOptions)}}function D(t,e){1&t&&g._uU(0," Date format mode ")}function S(t,e){1&t&&g._uU(0," Time format mode ")}function O(t,e){1&t&&(g._uU(0," Date separator "),g.TgZ(1,"p"),g.TgZ(2,"strong"),g._uU(3,"Default:"),g.qZA(),g.TgZ(4,"code"),g._uU(5,"."),g.qZA(),g._uU(6," (dot). "),g.qZA())}function H(t,e){1&t&&g._uU(0," Earliest date ")}function N(t,e){1&t&&g._uU(0," Latest date ")}function A(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"tui-doc-demo",7),g.YNc(1,J,3,3,"ng-template"),g.qZA(),g.TgZ(2,"tui-doc-documentation"),g.YNc(3,D,1,0,"ng-template",8),g.NdJ("documentationPropertyValueChange",function(e){return g.CHM(t),g.oxw().dateMode=e})("documentationPropertyValueChange",function(){return g.CHM(t),g.oxw().updateOptions()}),g.YNc(4,S,1,0,"ng-template",9),g.NdJ("documentationPropertyValueChange",function(e){return g.CHM(t),g.oxw().timeMode=e})("documentationPropertyValueChange",function(){return g.CHM(t),g.oxw().updateOptions()}),g.YNc(5,O,7,0,"ng-template",10),g.NdJ("documentationPropertyValueChange",function(e){return g.CHM(t),g.oxw().dateSeparator=e})("documentationPropertyValueChange",function(){return g.CHM(t),g.oxw().updateOptions()}),g.YNc(6,H,1,0,"ng-template",11),g.NdJ("documentationPropertyValueChange",function(e){return g.CHM(t),g.oxw().minStr=e})("documentationPropertyValueChange",function(){return g.CHM(t),g.oxw().updateDate()}),g.YNc(7,N,1,0,"ng-template",12),g.NdJ("documentationPropertyValueChange",function(e){return g.CHM(t),g.oxw().maxStr=e})("documentationPropertyValueChange",function(){return g.CHM(t),g.oxw().updateDate()}),g.qZA()}if(2&t){const t=g.oxw();g.Q6J("control",t.apiPageControl),g.xp6(3),g.Q6J("documentationPropertyValues",t.dateModeOptions)("documentationPropertyValue",t.dateMode),g.xp6(1),g.Q6J("documentationPropertyValues",t.timeModeOptions)("documentationPropertyValue",t.timeMode),g.xp6(1),g.Q6J("documentationPropertyValue",t.dateSeparator),g.xp6(1),g.Q6J("documentationPropertyValues",t.minMaxOptions)("documentationPropertyValue",t.minStr),g.xp6(1),g.Q6J("documentationPropertyValues",t.minMaxOptions)("documentationPropertyValue",t.maxStr)}}class q{constructor(){this.dateTimeLocalization={[l.C.MaskitoOptions]:o.e(4338).then(o.t.bind(o,24338,17))},this.dateTimeMinMax={[l.C.MaskitoOptions]:o.e(6793).then(o.t.bind(o,6793,17))},this.apiPageControl=new a.NI(""),this.dateModeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd"],this.timeModeOptions=["HH:MM","HH:MM:SS","HH:MM:SS.MSS"],this.minMaxOptions=["0001-01-01T00:00:00","9999-12-31T23:59:59","2000-01-01T12:30","2025-05-10T18:30"],this.dateMode=this.dateModeOptions[0],this.timeMode=this.timeModeOptions[0],this.dateSeparator=".",this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.maskitoOptions=(0,y.H$)(this)}getPlaceholder(t,e,o){const n=`,${M.f$}`;return`${t.replace(/\//g,o)}${n}${e}`}updateOptions(){this.maskitoOptions=(0,y.H$)(this)}updateDate(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}}q.\u0275fac=function(t){return new(t||q)},q.\u0275cmp=g.Xpm({type:q,selectors:[["date-time-mask-doc"]],decls:3,vars:0,consts:[["header","DateTime","package","KIT"],["pageTab",""],["id","localization","heading","Localization",3,"content","description"],["localizationDescription",""],["id","min-max","heading","Min and max",3,"content","description"],["minMaxDescription",""],["href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","rel","noreferrer","target","_blank","tuiLink",""],[3,"control"],["documentationPropertyMode","input","documentationPropertyName","dateMode","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","timeMode","documentationPropertyType","MaskitoTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","dateSeparator","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"formControl","tuiTextfieldFiller"],["inputmode","numeric","tuiTextfield","",3,"maskito"]],template:function(t,e){1&t&&(g.TgZ(0,"tui-doc-page",0),g.YNc(1,w,12,4,"ng-template",1),g.YNc(2,A,8,10,"ng-template",1),g.qZA())},directives:[f.qo,f.nj,f.f2,U,k,m.V,f.FU,f.zb,f.B7,p.K3,p.wU,c.B7,a.JJ,a.oH,c.kD,P.MB,T.F,C.r],encapsulation:2,changeDetection:0}),(0,s.gn)([h.UM],q.prototype,"getPlaceholder",null);let v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[n.ez,a.u5,a.UX,r.U5,u.fV,p.Qf,m.j,c.cn,i.Bz.forChild((0,d.Ve)(q))]]}),t})()}}]);