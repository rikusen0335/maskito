"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[608],{60608:function(e){e.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {maskitoNumberOptionsGenerator} from '@maskito/kit';\n\n@Component({\n    selector: 'pipe-doc-example-4',\n    templateUrl: './template.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PipeDocExample4 {\n    value = 12345.67;\n\n    readonly options = maskitoNumberOptionsGenerator({precision: 2});\n}\n"}}]);