"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5564],{997:(k,_,n)=>{n.d(_,{TuiAddonDocModule:()=>M});var g=n(9724),d=n(1243);let M=(()=>{class l{}return l.\u0275fac=function(T){return new(T||l)},l.\u0275mod=g.oAB({type:l}),l.\u0275inj=g.cJS({imports:[d.JF,d.mG,d.Lx,d.Lq,d.u4]}),l})()},5564:(k,_,n)=>{n.r(_),n.d(_,{DateTimeMaskDocModule:()=>z});var g=n(1048),d=n(2552),M=n(3238),C=n(1516),l=n(997),y=n(4427),T=n(2847),c=n(6409),p=n(1673),U=n(4911),P=n(4707),D=n(3358),V=n(3770),v=n(4358),t=n(9724),x=n(7258),h=n(9510),u=n(1243),f=n(5640);const Z=(0,D.H$)({dateMode:"mm/dd/yyyy",timeMode:"HH:MM",dateSeparator:"/"});let J=(()=>{class o{constructor(){this.value="09/20/2020, 15:30",this.filler="mm/dd/yyyy, hh:mm",this.mask=Z}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["date-time-mask-doc-example-1"]],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(e,m){1&e&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(r){return m.value=r}),t._uU(1," Localization "),t._UZ(2,"input",1),t.qZA()),2&e&&(t.Udp("max-width",30,"rem"),t.Q6J("tuiTextfieldFiller",m.filler)("ngModel",m.value),t.xp6(2),t.Q6J("maskito",m.mask))},dependencies:[d.JJ,d.On,x.r,h.F,p.K3,p.wU,f.MB,c.B7,c.kD],encapsulation:2,changeDetection:0}),o})();const O=(0,D.H$)({dateMode:"dd/mm/yyyy",timeMode:"HH:MM",dateSeparator:"-",min:new Date(2010,1,15,12,30,0),max:new Date(2020,8,15,18,30,0)});let A=(()=>{class o{constructor(){this.value="09-01-2018,\xa015:30",this.filler="dd-mm-yyyy,\xa0hh:mm",this.mask=O}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["date-time-mask-doc-example-2"]],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(e,m){1&e&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(r){return m.value=r}),t._uU(1," Min-max "),t._UZ(2,"input",1),t.qZA()),2&e&&(t.Udp("max-width",30,"rem"),t.Q6J("tuiTextfieldFiller",m.filler)("ngModel",m.value),t.xp6(2),t.Q6J("maskito",m.mask))},dependencies:[d.JJ,d.On,x.r,h.F,p.K3,p.wU,f.MB,c.B7,c.kD],encapsulation:2,changeDetection:0}),o})();function S(o,i){1&o&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"dateMode"),t.qZA(),t._uU(3," , "),t.TgZ(4,"code"),t._uU(5,"timeMode"),t.qZA(),t._uU(6," and "),t.TgZ(7,"code"),t._uU(8,"dateSeparator"),t.qZA(),t._uU(9," parameters to get a mask with a locale specific representation of dates. "))}function H(o,i){1&o&&(t._uU(0," Parameters "),t.TgZ(1,"code"),t._uU(2,"min"),t.qZA(),t._uU(3," and "),t.TgZ(4,"code"),t._uU(5,"max"),t.qZA(),t._uU(6," allow to set the earliest and the latest available dates. They accept native "),t.TgZ(7,"a",6),t._uU(8," Date "),t.qZA(),t._uU(9," . "))}function N(o,i){if(1&o&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"maskitoDateTimeOptionsGenerator"),t.qZA(),t._uU(3," to create a mask to input both date and time. "),t.TgZ(4,"tui-doc-example",2),t.YNc(5,S,10,0,"ng-template",null,3,t.W1O),t._UZ(7,"date-time-mask-doc-example-1"),t.qZA(),t.TgZ(8,"tui-doc-example",4),t.YNc(9,H,10,0,"ng-template",null,5,t.W1O),t._UZ(11,"date-time-mask-doc-example-2"),t.qZA()),2&o){const e=t.MAs(6),m=t.MAs(10),a=t.oxw();t.xp6(4),t.Q6J("content",a.dateTimeLocalization)("description",e),t.xp6(4),t.Q6J("content",a.dateTimeMinMax)("description",m)}}function E(o,i){if(1&o&&(t.TgZ(0,"tui-input",13),t._uU(1," Enter date and time "),t._UZ(2,"input",14),t.qZA()),2&o){const e=t.oxw(2);t.Q6J("formControl",e.apiPageControl)("tuiTextfieldFiller",e.getPlaceholder(e.dateMode,e.timeMode,e.dateSeparator)),t.xp6(2),t.Q6J("maskito",e.maskitoOptions)}}function F(o,i){1&o&&t._uU(0," Date format mode ")}function K(o,i){1&o&&t._uU(0," Time format mode ")}function G(o,i){1&o&&(t._uU(0," Date separator "),t.TgZ(1,"p")(2,"strong"),t._uU(3,"Default:"),t.qZA(),t.TgZ(4,"code"),t._uU(5,"."),t.qZA(),t._uU(6," (dot). "),t.qZA())}function Q(o,i){1&o&&t._uU(0," Earliest date ")}function L(o,i){1&o&&t._uU(0," Latest date ")}function B(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tui-doc-demo",7),t.YNc(1,E,3,3,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,F,1,0,"ng-template",8),t.NdJ("documentationPropertyValueChange",function(a){t.CHM(e);const r=t.oxw();return t.KtG(r.dateMode=a)})("documentationPropertyValueChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.updateOptions())}),t.YNc(4,K,1,0,"ng-template",9),t.NdJ("documentationPropertyValueChange",function(a){t.CHM(e);const r=t.oxw();return t.KtG(r.timeMode=a)})("documentationPropertyValueChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.updateOptions())}),t.YNc(5,G,7,0,"ng-template",10),t.NdJ("documentationPropertyValueChange",function(a){t.CHM(e);const r=t.oxw();return t.KtG(r.dateSeparator=a)})("documentationPropertyValueChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.updateOptions())}),t.YNc(6,Q,1,0,"ng-template",11),t.NdJ("documentationPropertyValueChange",function(a){t.CHM(e);const r=t.oxw();return t.KtG(r.minStr=a)})("documentationPropertyValueChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.updateDate())}),t.YNc(7,L,1,0,"ng-template",12),t.NdJ("documentationPropertyValueChange",function(a){t.CHM(e);const r=t.oxw();return t.KtG(r.maxStr=a)})("documentationPropertyValueChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.updateDate())}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("control",e.apiPageControl),t.xp6(3),t.Q6J("documentationPropertyValues",e.dateModeOptions)("documentationPropertyValue",e.dateMode),t.xp6(1),t.Q6J("documentationPropertyValues",e.timeModeOptions)("documentationPropertyValue",e.timeMode),t.xp6(1),t.Q6J("documentationPropertyValue",e.dateSeparator),t.xp6(1),t.Q6J("documentationPropertyValues",e.minMaxOptions)("documentationPropertyValue",e.minStr),t.xp6(1),t.Q6J("documentationPropertyValues",e.minMaxOptions)("documentationPropertyValue",e.maxStr)}}class s{constructor(){this.dateTimeLocalization={[P.C.MaskitoOptions]:n.e(4338).then(n.t.bind(n,4338,17))},this.dateTimeMinMax={[P.C.MaskitoOptions]:n.e(6793).then(n.t.bind(n,6793,17))},this.apiPageControl=new d.NI(""),this.dateModeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd"],this.timeModeOptions=["HH:MM","HH:MM:SS","HH:MM:SS.MSS"],this.minMaxOptions=["0001-01-01T00:00:00","9999-12-31T23:59:59","2000-01-01T12:30","2025-05-10T18:30"],this.dateMode=this.dateModeOptions[0],this.timeMode=this.timeModeOptions[0],this.dateSeparator=".",this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.maskitoOptions=(0,D.H$)(this)}getPlaceholder(i,e,m){const a=`,${V.f$}`;return`${i.replace(/\//g,m)}${a}${e}`}updateOptions(){this.maskitoOptions=(0,D.H$)(this)}updateDate(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}}s.\u0275fac=function(i){return new(i||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["date-time-mask-doc"]],decls:3,vars:0,consts:[["header","DateTime","package","KIT"],["pageTab",""],["id","localization","heading","Localization",3,"content","description"],["localizationDescription",""],["id","min-max","heading","Min and max",3,"content","description"],["minMaxDescription",""],["href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","rel","noreferrer","target","_blank","tuiLink",""],[3,"control"],["documentationPropertyMode","input","documentationPropertyName","dateMode","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","timeMode","documentationPropertyType","MaskitoTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","dateSeparator","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"formControl","tuiTextfieldFiller"],["inputmode","numeric","tuiTextfield","",3,"maskito"]],template:function(i,e){1&i&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,N,12,4,"ng-template",1),t.YNc(2,B,8,10,"ng-template",1),t.qZA())},dependencies:[d.JJ,d.oH,x.r,h.F,u.FU,u.zb,u.B7,u.qo,u.nj,u.f2,p.K3,p.wU,f.MB,T.V,c.B7,c.kD,J,A],encapsulation:2,changeDetection:0}),(0,U.gn)([v.UM],s.prototype,"getPlaceholder",null);let z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,d.u5,d.UX,C.U5,l.TuiAddonDocModule,p.Qf,T.j,c.cn,M.Bz.forChild((0,y.Ve)(s))]}),o})()}}]);