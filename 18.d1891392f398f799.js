"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[18],{997:(k,r,n)=>{n.d(r,{TuiAddonDocModule:()=>M});var g=n(9724),m=n(1243);let M=(()=>{class u{}return u.\u0275fac=function(l){return new(l||u)},u.\u0275mod=g.oAB({type:u}),u.\u0275inj=g.cJS({imports:[m.JF,m.mG,m.Lx,m.Lq,m.u4]}),u})()},18:(k,r,n)=>{n.r(r),n.d(r,{TimeMaskDocModule:()=>F});var g=n(1048),m=n(2552),M=n(3238),C=n(1516),u=n(997),_=n(4427),l=n(6409),c=n(1673),D=n(4707),T=n(3358),e=n(9724),x=n(7258),f=n(9510),d=n(1243),h=n(5640);const Z=(0,T.rC)({mode:"HH:MM:SS"});let y=(()=>{class t{constructor(){this.mask=Z,this.value="23:59:59"}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["time-mask-doc-example-1"]],decls:3,vars:4,consts:[["tuiTextfieldCustomContent","tuiIconClockLarge","tuiTextfieldFiller","hh:mm:ss",3,"ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(o,a){1&o&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(p){return a.value=p}),e._uU(1," HH:MM:SS "),e._UZ(2,"input",1),e.qZA()),2&o&&(e.Udp("max-width",20,"rem"),e.Q6J("ngModel",a.value),e.xp6(2),e.Q6J("maskito",a.mask))},dependencies:[m.JJ,m.On,x.r,f.F,c.K3,c.wU,h.MB,l.B7,l.kD],encapsulation:2,changeDetection:0}),t})();const v=(0,T.rC)({mode:"HH:MM",timeSegmentMaxValues:{hours:12}});let U=(()=>{class t{constructor(){this.value="11:59",this.mask=v}onBlur(){const[o,a=""]=this.value.split(":");this.value=[o,a].map(s=>s.padEnd(2,"0")).join(":")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["time-mask-doc-example-2"]],decls:2,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconClockLarge","tuiTextfieldFiller","hh:mm",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito","blur"]],template:function(o,a){1&o&&(e.TgZ(0,"tui-input",0),e.NdJ("ngModelChange",function(p){return a.value=p}),e.TgZ(1,"input",1),e.NdJ("blur",function(){return a.onBlur()}),e.qZA()()),2&o&&(e.Udp("max-width",20,"rem"),e.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",a.value),e.xp6(1),e.Q6J("maskito",a.mask))},dependencies:[m.JJ,m.On,x.r,f.F,c.K3,c.wU,h.MB,l.B7,l.xT,l.kD],encapsulation:2,changeDetection:0}),t})();function P(t,i){1&t&&(e.TgZ(0,"p",6),e._uU(1," Use "),e.TgZ(2,"code"),e._uU(3,"mode"),e.qZA(),e._uU(4," property to set time format. "),e.qZA(),e.TgZ(5,"p",7)(6,"strong"),e._uU(7,"Available options"),e.qZA(),e._uU(8," : "),e.TgZ(9,"code"),e._uU(10,"HH:MM"),e.qZA(),e._uU(11," , "),e.TgZ(12,"code"),e._uU(13,"HH:MM:SS"),e.qZA(),e._uU(14," or "),e.TgZ(15,"code"),e._uU(16,"HH:MM:SS.MSS"),e.qZA(),e._uU(17," . "),e.qZA())}function A(t,i){1&t&&(e.TgZ(0,"p",6),e._uU(1," Property "),e.TgZ(2,"code"),e._uU(3,"timeSegmentMaxValues"),e.qZA(),e._uU(4," allows you to set max value for every time segment. "),e.qZA(),e.TgZ(5,"p",7)(6,"strong"),e._uU(7,"Time segments"),e.qZA(),e._uU(8," are units of the time which form time string. For example, "),e.TgZ(9,"code"),e._uU(10,"HH:MM"),e.qZA(),e._uU(11," consists of two time segments: hours and minutes. "),e.qZA())}function S(t,i){if(1&t&&(e._uU(0," Use "),e.TgZ(1,"code"),e._uU(2,"maskitoTimeOptionsGenerator"),e.qZA(),e._uU(3," to create a mask for time input. "),e.TgZ(4,"tui-doc-example",2),e.YNc(5,P,18,0,"ng-template",null,3,e.W1O),e._UZ(7,"time-mask-doc-example-1"),e.qZA(),e.TgZ(8,"tui-doc-example",4),e.YNc(9,A,12,0,"ng-template",null,5,e.W1O),e._UZ(11,"time-mask-doc-example-2"),e.qZA()),2&t){const o=e.MAs(6),a=e.MAs(10),s=e.oxw();e.xp6(4),e.Q6J("content",s.modeExample1)("description",o),e.xp6(4),e.Q6J("content",s.modeExample2)("description",a)}}function V(t,i){if(1&t&&(e.TgZ(0,"tui-input",11),e._uU(1," Enter time "),e._UZ(2,"input",12),e.qZA()),2&t){const o=e.oxw(2);e.Q6J("formControl",o.apiPageControl)("tuiTextfieldFiller",o.mode.toLowerCase()),e.xp6(2),e.Q6J("maskito",o.maskitoOptions)}}function H(t,i){1&t&&e._uU(0," Time format mode ")}function O(t,i){1&t&&e._uU(0," Max value for every time segment ")}function J(t,i){if(1&t){const o=e.EpF();e.TgZ(0,"tui-doc-demo",8),e.YNc(1,V,3,3,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,H,1,0,"ng-template",9),e.NdJ("documentationPropertyValueChange",function(s){e.CHM(o);const p=e.oxw();return e.KtG(p.mode=s)})("documentationPropertyValueChange",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.updateOptions())}),e.YNc(4,O,1,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(s){e.CHM(o);const p=e.oxw();return e.KtG(p.timeSegmentMaxValues=s)})("documentationPropertyValueChange",function(){e.CHM(o);const s=e.oxw();return e.KtG(s.updateOptions())}),e.qZA()}if(2&t){const o=e.oxw();e.Q6J("control",o.apiPageControl),e.xp6(3),e.Q6J("documentationPropertyValues",o.modeOptions)("documentationPropertyValue",o.mode),e.xp6(1),e.Q6J("documentationPropertyValues",o.timeSegmentMaxValuesOptions)("documentationPropertyValue",o.timeSegmentMaxValues)}}let E=(()=>{class t{constructor(){this.modeExample1={[D.C.MaskitoOptions]:n.e(2921).then(n.t.bind(n,2921,17))},this.modeExample2={[D.C.MaskitoOptions]:n.e(8729).then(n.t.bind(n,8729,17))},this.apiPageControl=new m.NI(""),this.modeOptions=["HH:MM","HH:MM:SS","HH:MM:SS.MSS","HH"],this.timeSegmentMaxValuesOptions=[{hours:23,minutes:59,seconds:59,milliseconds:999},{hours:11}],this.mode=this.modeOptions[0],this.timeSegmentMaxValues=this.timeSegmentMaxValuesOptions[0],this.maskitoOptions=(0,T.rC)(this)}updateOptions(){this.maskitoOptions=(0,T.rC)(this)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["time-mask-doc"]],decls:3,vars:0,consts:[["header","Time","package","KIT"],["pageTab",""],["id","mode","heading","Mode",3,"content","description"],["modeDescription",""],["id","twelve-hours","heading","12-hours format",3,"content","description"],["timeSegmentMaxValuesDescription",""],[1,"tui-space_top-0","tui-space_bottom-1"],[1,"tui-space_top-0"],[3,"control"],["documentationPropertyMode","input","documentationPropertyName","mode","documentationPropertyType","MaskitoTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","timeSegmentMaxValues","documentationPropertyType","MaskitoTimeSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconClockLarge",1,"input-time",3,"formControl","tuiTextfieldFiller"],["inputmode","numeric","tuiTextfield","",3,"maskito"]],template:function(o,a){1&o&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,S,12,4,"ng-template",1),e.YNc(2,J,5,5,"ng-template",1),e.qZA())},dependencies:[m.JJ,m.oH,x.r,f.F,d.FU,d.zb,d.B7,d.qo,d.nj,d.f2,c.K3,c.wU,h.MB,l.B7,l.kD,y,U],styles:[".input-time[_ngcontent-%COMP%]{max-width:25rem}.input-time[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],changeDetection:0}),t})(),F=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.ez,m.u5,m.UX,C.U5,u.TuiAddonDocModule,c.Qf,l.cn,M.Bz.forChild((0,_.Ve)(E))]}),t})()}}]);