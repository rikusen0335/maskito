"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[2362],{92362:function(n){n.exports='<form\n    tuiGroup\n    autocomplete="on"\n    class="wrapper"\n    [formGroup]="form"\n>\n    <tui-input\n        formControlName="cardNumber"\n        class="number"\n    >\n        Card number\n        <input\n            tuiTextfield\n            inputmode="numeric"\n            placeholder="0000 0000 0000 0000"\n            autocomplete="cc-number"\n            [maskito]="cardMask"\n        />\n    </tui-input>\n    <tui-input\n        formControlName="expire"\n        class="expired"\n    >\n        EXP\n        <input\n            tuiTextfield\n            inputmode="numeric"\n            placeholder="mm/yy"\n            autocomplete="cc-exp"\n            [maskito]="expiredMask"\n        />\n    </tui-input>\n    <tui-input\n        formControlName="cvv"\n        class="cvv"\n    >\n        CVV\n        <input\n            tuiTextfield\n            inputmode="numeric"\n            placeholder="000"\n            autocomplete="cc-csc"\n            [maskito]="cvvMask"\n        />\n    </tui-input>\n</form>\n'}}]);