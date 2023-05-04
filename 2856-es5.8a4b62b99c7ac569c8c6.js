!function(){"use strict";function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(s=r.key,i=void 0,"symbol"==typeof(i=function(e,t){if("object"!=typeof e||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(s,"string"))?i:String(i)),r)}var s,i}function t(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[2856],{32856:function(e,r,s){s.r(r),s.d(r,{ProcessorsDocPageModule:function(){return g}});var i,n=s(12057),a=s(55358),c=s(7476),p=s(82847),u=s(60885),l=s(74788),Z=((i=t(function e(){o(this,e),this.preprocessorFirstArgDemo=s.e(2391).then(s.t.bind(s,62391,17)),this.preprocessorsSecondArgDemo=s.e(3245).then(s.t.bind(s,3245,17)),this.preprocessorInActionDemo=s.e(2092).then(s.t.bind(s,82092,17)),this.postprocessorInActionDemo=s.e(7681).then(s.t.bind(s,87681,17)),this.maskitoPipeDemo=s.e(9743).then(s.t.bind(s,99743,17)),this.maskExpressionDocPage="/core-concepts/mask-expression",this.overwriteModeDocPage="/core-concepts/overwrite-mode",this.elementStateDocPage="/core-concepts/element-state"})).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=l.Xpm({type:i,selectors:[["processors-doc-page"]],decls:118,vars:8,consts:[["header","Processors"],[1,"tui-space_bottom-6"],[1,"tui-space_top-0"],["href","https://github.com/Tinkoff/maskito/blob/main/projects/core/src/lib/types/mask-options.ts","target","_blank","tuiLink",""],["href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event","target","_blank","tuiLink",""],["href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event","target","_blank","tuiLink",""],[1,"tui-list"],[1,"tui-list__item"],[1,"tui-space_bottom-12"],["tuiLink","",3,"routerLink"],[1,"tui-list","tui-list_ordered"],[1,"tui-space_top-1",3,"code"],[3,"code"],[1,"tui-space_bottom-0"],["status","warning",1,"tui-space_bottom-4"],[1,"tui-space_top-0","tui-space_bottom-0"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-doc-page",0),l.TgZ(1,"section",1),l.TgZ(2,"p",2),l.TgZ(3,"a",3),l.TgZ(4,"code"),l._uU(5,"MaskitoOptions"),l.qZA(),l.qZA(),l._uU(6," have optional parameters "),l.TgZ(7,"code"),l._uU(8,"preprocessors"),l.qZA(),l._uU(9," and "),l.TgZ(10,"code"),l._uU(11,"postprocessors"),l.qZA(),l._uU(12," . These are functions triggered on every user's input ( "),l.TgZ(13,"a",4),l._uU(14," beforeinput "),l.qZA(),l._uU(15," and "),l.TgZ(16,"a",5),l._uU(17," input "),l.qZA(),l._uU(18," events). They provide an opportunity to modify value before\xa0/\xa0after the mask is applied. "),l.qZA(),l.TgZ(19,"section"),l.TgZ(20,"p"),l._uU(21," Preprocessors and postprocessors accept different types of arguments but they have two important similarities: "),l.qZA(),l.TgZ(22,"ul",6),l.TgZ(23,"li",7),l._uU(24," The first argument always contains object with information that you can change. Object with the same properties and updated values can be returned from the processor. It means that you can keep all properties untouched or you can change any or all of these properties. "),l.qZA(),l.TgZ(25,"li",7),l._uU(26," The rest arguments contain information that can be useful to build some complex logic, but you cannot change it. "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(27,"tui-notification",8),l._uU(28," Before you learn more about processors, you should learn a single prerequisite \u2014 meaning of the term "),l.TgZ(29,"a",9),l._uU(30,' "Element\xa0state" '),l.qZA(),l._uU(31," . "),l.qZA(),l.TgZ(32,"section",8),l.TgZ(33,"h2"),l._uU(34,"Preprocessor"),l.qZA(),l.TgZ(35,"p"),l._uU(36," It is a function that is called "),l.TgZ(37,"strong"),l._uU(38,"before"),l.qZA(),l._uU(39," mask is applied. "),l.qZA(),l.TgZ(40,"p"),l._uU(41," For example, if user types a new character, preprocessor will be called first, and only then value that it returned will be passed into the mask, and finally the mask will accept or reject new typed character and update actual value of the text field. "),l.qZA(),l.TgZ(42,"section",1),l.TgZ(43,"p"),l._uU(44,"Preprocessor accepts two arguments:"),l.qZA(),l.TgZ(45,"ol",10),l.TgZ(46,"li",7),l.TgZ(47,"strong"),l._uU(48," Object with two properties: "),l.TgZ(49,"code"),l._uU(50,"elementState"),l.qZA(),l._uU(51," and "),l.TgZ(52,"code"),l._uU(53,"data"),l.qZA(),l._uU(54," . "),l.qZA(),l._uU(55," Object of the same interface with updated or unchanged properties can be returned from the preprocessor. "),l._UZ(56,"tui-doc-code",11),l.qZA(),l.TgZ(57,"li",7),l._uU(58," Name of the action which triggers current execution. It can be one of the following possible values: "),l._UZ(59,"tui-doc-code",12),l.qZA(),l.qZA(),l.qZA(),l.TgZ(60,"p"),l._uU(61," Preprocessor returns an objects of the same interface as the first argument. "),l.qZA(),l._UZ(62,"tui-doc-code",12),l.qZA(),l.TgZ(63,"section",8),l.TgZ(64,"h2"),l._uU(65,"Postprocessor"),l.qZA(),l.TgZ(66,"p",13),l._uU(67," It is a function that is called "),l.TgZ(68,"strong"),l._uU(69,"after"),l.qZA(),l._uU(70," the mask is applied. When the preprocessor is already called, all mask operations happened and the input's value is about to be updated. You can change everything manually inside a postprocessor. "),l.qZA(),l.TgZ(71,"section",1),l.TgZ(72,"p"),l._uU(73,"Postprocessor accepts two arguments:"),l.qZA(),l.TgZ(74,"ol",10),l.TgZ(75,"li",7),l.TgZ(76,"strong"),l._uU(77,"Element state after mask had been applied."),l.qZA(),l._uU(78," Postprocessor can return updated element state which would then be reflected by the actual text field. "),l.qZA(),l.TgZ(79,"li",7),l.TgZ(80,"strong"),l._uU(81," Initial element state before preprocessors and mask execution. "),l.qZA(),l._uU(82," It is a readonly argument, the past cannot be changed... "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(83,"p"),l._uU(84," Postprocessor returns an objects of the same interface as the first argument. "),l.qZA(),l.TgZ(85,"tui-notification",14),l.TgZ(86,"p",15),l.TgZ(87,"strong"),l._uU(88,"With great power comes great responsibility!"),l.qZA(),l.qZA(),l.TgZ(89,"p",13),l._uU(90," Postprocessor is the final step before input's value update which gives a lot of flexibility. Use postprocessor wisely and return a valid value! "),l.qZA(),l.qZA(),l._UZ(91,"tui-doc-code",12),l.qZA(),l.TgZ(92,"section",8),l.TgZ(93,"h2"),l._uU(94,"maskitoPipe"),l.qZA(),l.TgZ(95,"p"),l._uU(96," The "),l.TgZ(97,"strong"),l._uU(98,"Maskito"),l.qZA(),l._uU(99," team likes code decomposition and promotes it! Don't put all complex logic inside a single processor. Break it into the several independent processors so that each processor implements only a single task. "),l.qZA(),l.TgZ(100,"p"),l._uU(101," Use the built-in "),l.TgZ(102,"code"),l._uU(103,"maskitoPipe"),l.qZA(),l._uU(104," to stack multiple processors of the same type: "),l.qZA(),l._UZ(105,"tui-doc-code",12),l.qZA(),l.TgZ(106,"section"),l.TgZ(107,"h2"),l._uU(108,"Next steps"),l.qZA(),l.TgZ(109,"p"),l._uU(110," The following sections are recommended to explore core concepts further: "),l.qZA(),l.TgZ(111,"ul",6),l.TgZ(112,"li",7),l.TgZ(113,"a",9),l._uU(114," Mask expression "),l.qZA(),l.qZA(),l.TgZ(115,"li",7),l.TgZ(116,"a",9),l._uU(117," Overwrite mode "),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(29),l.Q6J("routerLink",t.elementStateDocPage),l.xp6(27),l.Q6J("code",t.preprocessorFirstArgDemo),l.xp6(3),l.Q6J("code",t.preprocessorsSecondArgDemo),l.xp6(3),l.Q6J("code",t.preprocessorInActionDemo),l.xp6(29),l.Q6J("code",t.postprocessorInActionDemo),l.xp6(14),l.Q6J("code",t.maskitoPipeDemo),l.xp6(8),l.Q6J("routerLink",t.maskExpressionDocPage),l.xp6(3),l.Q6J("routerLink",t.overwriteModeDocPage))},directives:[c.qo,p.V,u.Ls,a.yS,c.c0],encapsulation:2,changeDetection:0}),i),g=function(){var e=t(function e(){o(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[n.ez,c.fV,p.j,u.Hi,a.Bz.forChild((0,c.Ve)(Z))]]}),e}()}}])}();