"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[1865],{1865:e=>{e.exports="```ts\nimport {Maskito, maskitoPipe} from '@maskito/core';\n\nconst maskedInput = new Maskito(element, {\n  mask: /^\\d+$/,\n  preprocessor: maskitoPipe(preprocessor1, preprocessor2),\n  postprocessor: ({value, selection}) => {\n    // ...\n  },\n  overwriteMode: 'shift',\n});\n\n// Call it when the element is destroyed\nmaskedInput.destroy();\n```\n"}}]);