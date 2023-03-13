"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[2856],{2856:(d,i,t)=>{t.r(i),t.d(i,{ProcessorsDocPageModule:()=>Z});var l=t(6104),c=t(5358),r=t(9409),p=t(2847),u=t(885),e=t(4788);let g=(()=>{class o{constructor(){this.preprocessorFirstArgDemo=t.e(2391).then(t.t.bind(t,2391,17)),this.preprocessorsSecondArgDemo=t.e(3245).then(t.t.bind(t,3245,17)),this.preprocessorInActionDemo=t.e(2092).then(t.t.bind(t,2092,17)),this.postprocessorInActionDemo=t.e(7681).then(t.t.bind(t,7681,17)),this.maskitoPipeDemo=t.e(9743).then(t.t.bind(t,9743,17)),this.maskExpressionDocPage="/core-concepts/mask-expression",this.overwriteModeDocPage="/core-concepts/overwrite-mode",this.elementStateDocPage="/core-concepts/element-state"}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["processors-doc-page"]],decls:118,vars:8,consts:[["header","Processors"],[1,"tui-space_bottom-6"],[1,"tui-space_top-0"],["href","https://github.com/Tinkoff/maskito/blob/main/projects/core/src/lib/types/mask-options.ts","target","_blank","tuiLink",""],["href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event","target","_blank","tuiLink",""],["href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event","target","_blank","tuiLink",""],[1,"tui-list"],[1,"tui-list__item"],[1,"tui-space_bottom-12"],["tuiLink","",3,"routerLink"],[1,"tui-list","tui-list_ordered"],[1,"tui-space_top-1",3,"code"],[3,"code"],[1,"tui-space_bottom-0"],["status","warning",1,"tui-space_bottom-4"],[1,"tui-space_top-0","tui-space_bottom-0"]],template:function(n,s){1&n&&(e.TgZ(0,"tui-doc-page",0),e.TgZ(1,"section",1),e.TgZ(2,"p",2),e.TgZ(3,"a",3),e.TgZ(4,"code"),e._uU(5,"MaskitoOptions"),e.qZA(),e.qZA(),e._uU(6," have optional parameters "),e.TgZ(7,"code"),e._uU(8,"preprocessors"),e.qZA(),e._uU(9," and "),e.TgZ(10,"code"),e._uU(11,"postprocessors"),e.qZA(),e._uU(12," . These are functions triggered on every user's input ( "),e.TgZ(13,"a",4),e._uU(14," beforeinput "),e.qZA(),e._uU(15," and "),e.TgZ(16,"a",5),e._uU(17," input "),e.qZA(),e._uU(18," events). They provide an opportunity to modify value before\xa0/\xa0after the mask is applied. "),e.qZA(),e.TgZ(19,"section"),e.TgZ(20,"p"),e._uU(21," Preprocessors and postprocessors accept different types of arguments but they have two important similarities: "),e.qZA(),e.TgZ(22,"ul",6),e.TgZ(23,"li",7),e._uU(24," The first argument always contains object with information that you can change. Object with the same properties and updated values can be returned from the processor. It means that you can keep all properties untouched or you can change any or all of these properties. The returned value will be passed into the mask. "),e.qZA(),e.TgZ(25,"li",7),e._uU(26," The rest arguments contain information that can be useful to build some complex logic, but you cannot change it. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"tui-notification",8),e._uU(28," Before you learn more about processors, you should learn a single prerequisite \u2014 meaning of the term "),e.TgZ(29,"a",9),e._uU(30,' "Element\xa0state" '),e.qZA(),e._uU(31," . "),e.qZA(),e.TgZ(32,"section",8),e.TgZ(33,"h2"),e._uU(34,"Preprocessor"),e.qZA(),e.TgZ(35,"p"),e._uU(36," It is a function that is called "),e.TgZ(37,"strong"),e._uU(38,"before"),e.qZA(),e._uU(39," mask is applied. "),e.qZA(),e.TgZ(40,"p"),e._uU(41," For example, if user types a new character, preprocessor will be called first, and only then value that it returned will be passed into the mask, and finally the mask will accept or reject new typed character and update actual value of the text field. "),e.qZA(),e.TgZ(42,"section",1),e.TgZ(43,"p"),e._uU(44,"Preprocessor accepts two arguments:"),e.qZA(),e.TgZ(45,"ol",10),e.TgZ(46,"li",7),e.TgZ(47,"strong"),e._uU(48," Object with two properties: "),e.TgZ(49,"code"),e._uU(50,"elementState"),e.qZA(),e._uU(51," and "),e.TgZ(52,"code"),e._uU(53,"data"),e.qZA(),e._uU(54," . "),e.qZA(),e._uU(55," Object of the same interface with updated or unchanged properties can be returned from the preprocessor. "),e._UZ(56,"tui-doc-code",11),e.qZA(),e.TgZ(57,"li",7),e._uU(58," Name of the action which triggers current execution. It can be one of the following possible values: "),e._UZ(59,"tui-doc-code",12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(60,"p"),e._uU(61," Preprocessor returns an objects of the same interface as the first argument. "),e.qZA(),e._UZ(62,"tui-doc-code",12),e.qZA(),e.TgZ(63,"section",8),e.TgZ(64,"h2"),e._uU(65,"Postprocessor"),e.qZA(),e.TgZ(66,"p",13),e._uU(67," It is a function that is called "),e.TgZ(68,"strong"),e._uU(69,"after"),e.qZA(),e._uU(70," the mask is applied. When the preprocessor is already called, all mask operations happened and the input's value is about to be updated. You can change everything manually inside a postprocessor. "),e.qZA(),e.TgZ(71,"section",1),e.TgZ(72,"p"),e._uU(73,"Postprocessor accepts two arguments:"),e.qZA(),e.TgZ(74,"ol",10),e.TgZ(75,"li",7),e.TgZ(76,"strong"),e._uU(77,"Element state after mask had been applied."),e.qZA(),e._uU(78," Postprocessor can return updated element state which would then be reflected by the actual text field. "),e.qZA(),e.TgZ(79,"li",7),e.TgZ(80,"strong"),e._uU(81," Initial element state before preprocessors and mask execution. "),e.qZA(),e._uU(82," It is a readonly argument, the past cannot be changed... "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(83,"p"),e._uU(84," Postprocessor returns an objects of the same interface as the first argument. "),e.qZA(),e.TgZ(85,"tui-notification",14),e.TgZ(86,"p",15),e.TgZ(87,"strong"),e._uU(88,"With great power comes great responsibility!"),e.qZA(),e.qZA(),e.TgZ(89,"p",13),e._uU(90," Postprocessor is the final step before input's value update which gives a lot of flexibility. Use postprocessor wisely and return a valid value! "),e.qZA(),e.qZA(),e._UZ(91,"tui-doc-code",12),e.qZA(),e.TgZ(92,"section",8),e.TgZ(93,"h2"),e._uU(94,"maskitoPipe"),e.qZA(),e.TgZ(95,"p"),e._uU(96," The "),e.TgZ(97,"strong"),e._uU(98,"Maskito"),e.qZA(),e._uU(99," team likes code decomposition and promotes it! Don't put all complex logic inside a single processor. Break it into the several independent processors so that each processor implements only a single task. "),e.qZA(),e.TgZ(100,"p"),e._uU(101," Use the built-in "),e.TgZ(102,"code"),e._uU(103,"maskitoPipe"),e.qZA(),e._uU(104," to stack multiple processors of the same type: "),e.qZA(),e._UZ(105,"tui-doc-code",12),e.qZA(),e.TgZ(106,"section"),e.TgZ(107,"h2"),e._uU(108,"Next steps"),e.qZA(),e.TgZ(109,"p"),e._uU(110," The following sections are recommended to explore core concepts further: "),e.qZA(),e.TgZ(111,"ul",6),e.TgZ(112,"li",7),e.TgZ(113,"a",9),e._uU(114," Mask expression "),e.qZA(),e.qZA(),e.TgZ(115,"li",7),e.TgZ(116,"a",9),e._uU(117," Overwrite mode "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(29),e.Q6J("routerLink",s.elementStateDocPage),e.xp6(27),e.Q6J("code",s.preprocessorFirstArgDemo),e.xp6(3),e.Q6J("code",s.preprocessorsSecondArgDemo),e.xp6(3),e.Q6J("code",s.preprocessorInActionDemo),e.xp6(29),e.Q6J("code",s.postprocessorInActionDemo),e.xp6(14),e.Q6J("code",s.maskitoPipeDemo),e.xp6(8),e.Q6J("routerLink",s.maskExpressionDocPage),e.xp6(3),e.Q6J("routerLink",s.overwriteModeDocPage))},directives:[r.qo,p.V,u.Ls,c.yS,r.c0],encapsulation:2,changeDetection:0}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.ez,r.fV,p.j,u.Hi,c.Bz.forChild((0,r.Ve)(g))]]}),o})()}}]);