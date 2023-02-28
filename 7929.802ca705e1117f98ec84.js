"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[7929],{7929:(Z,s,o)=>{o.r(s),o.d(s,{AngularDocPageModule:()=>m});var p=o(6104),u=o(5358),a=o(6250),c=o(2847),l=o(885),t=o(4788);function d(e,i){if(1&e&&(t.TgZ(0,"code"),t._uU(1,"@maskito/angular"),t.qZA(),t._uU(2," is a light-weighted library to use "),t.TgZ(3,"strong"),t._uU(4,"Maskito"),t.qZA(),t._uU(5," in an Angular-way. "),t.TgZ(6,"tui-notification",3),t.TgZ(7,"strong"),t._uU(8,"Prerequisites"),t.qZA(),t.TgZ(9,"p",4),t._uU(10," To get the most out of this guide, you should review the topic "),t.TgZ(11,"a",5),t._uU(12,' "Core\xa0Concepts" '),t.qZA(),t._uU(13," first. "),t.qZA(),t.qZA(),t.TgZ(14,"section",6),t.TgZ(15,"h2"),t._uU(16,"Write less code"),t.qZA(),t.TgZ(17,"ul",7),t.TgZ(18,"li",8),t.TgZ(19,"u"),t._uU(20,"No need to query element from DOM."),t.qZA(),t._uU(21," Just pass all required options to "),t.TgZ(22,"code"),t._uU(23,"[maskito]"),t.qZA(),t._uU(24," -directive. "),t.qZA(),t.TgZ(25,"li",8),t.TgZ(26,"u"),t._uU(27,"No need to worry about clean-ups."),t.qZA(),t._uU(28," All created event listeners are automatically removed after element is detached from DOM. "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"section",6),t.TgZ(30,"h2"),t._uU(31,"Basic directive approach"),t.qZA(),t.TgZ(32,"p"),t._uU(33," It is the most classic approach that every Angular-developer is used to. Use it when you have direct access to native input element. "),t.qZA(),t._UZ(34,"tui-doc-code",9),t.qZA(),t.TgZ(35,"section",6),t.TgZ(36,"h2"),t._uU(37,"Dependency Injection approach"),t.qZA(),t.TgZ(38,"p"),t._uU(39," It is a more advanced approach that can be useful for UI Kit developers. "),t.qZA(),t.TgZ(40,"p"),t._uU(41," Let's imagine that you have a fancy-looking input component that satisfies your design system: "),t.qZA(),t._UZ(42,"tui-doc-code",10),t.TgZ(43,"p"),t._uU(44," This solution causes props drilling. You should pass "),t.TgZ(45,"code"),t._uU(46,"maskitoOptions"),t.qZA(),t._uU(47," through all components (which don't even requires these options) until we reached native input. This example is very simple, but in real life you can have a lot of nested components inside custom input. "),t.qZA(),t.TgZ(48,"p"),t._uU(49," Use Dependency Injection approach for the such case. Just put empty "),t.TgZ(50,"code"),t._uU(51,"maskito"),t.qZA(),t._uU(52," -attribute on native input inside your custom input component. "),t.qZA(),t._UZ(53,"tui-doc-code",10),t.TgZ(54,"p"),t._uU(55," And now users of your UI Kit can put any options they want to your custom input: "),t._UZ(56,"tui-doc-code",11),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(11),t.Q6J("routerLink",n.coreConceptsOverviewDocPage),t.xp6(23),t.Q6J("code",n.basicDirectiveApproach),t.xp6(8),t.Q6J("code",n.customInputExample),t.xp6(11),t.Q6J("code",n.customInputDiApproachExample),t.xp6(3),t.Q6J("code",n.diApproachInAction)}}function r(e,i){if(1&e&&(t.TgZ(0,"section"),t.TgZ(1,"ol",12),t.TgZ(2,"li",8),t._uU(3," Install libraries "),t._UZ(4,"tui-doc-code",13),t.qZA(),t.TgZ(5,"li",14),t._uU(6," Import "),t.TgZ(7,"code"),t._uU(8,"MaskitoModule"),t.qZA(),t._uU(9," to your module "),t._UZ(10,"tui-doc-code",15),t.qZA(),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(10),t.Q6J("code",n.importMaskitoModuleExample)}}let g=(()=>{class e{constructor(){this.coreConceptsOverviewDocPage="/core-concepts/overview",this.importMaskitoModuleExample=o.e(9201).then(o.t.bind(o,9201,17)),this.basicDirectiveApproach=o.e(257).then(o.t.bind(o,257,17)),this.customInputExample=o.e(3953).then(o.t.bind(o,3953,17)),this.customInputDiApproachExample=o.e(1999).then(o.t.bind(o,1999,17)),this.diApproachInAction=o.e(6532).then(o.t.bind(o,6532,17))}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["angular-doc-page"]],decls:3,vars:0,consts:[["header","Angular"],["pageTab","Overview"],["pageTab","Setup"],["status","warning",1,"tui-space_top-6"],[1,"tui-space_bottom-0"],["tuiLink","",3,"routerLink"],[1,"tui-space_top-12"],[1,"tui-list"],[1,"tui-list__item"],["filename","your.component.ts",3,"code"],["filename","custom-input.component.ts",3,"code"],[3,"code"],[1,"tui-list","tui-list_ordered"],["code","npm install @maskito/{core,angular}","filename","/your/project/path>"],[1,"tui-list__item","tui-space_top-8"],["filename","your.module.ts",3,"code"]],template:function(n,h){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,d,57,5,"ng-template",1),t.YNc(2,r,11,1,"ng-template",2),t.qZA())},directives:[a.qo,a.nj,l.Ls,c.V,u.yS,a.c0],encapsulation:2,changeDetection:0}),e})(),m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,a.fV,c.j,l.Hi,u.Bz.forChild((0,a.Ve)(g))]]}),e})()}}]);