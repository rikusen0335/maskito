"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6988],{6988:n=>{n.exports="import {MaskitoOptions} from '@maskito/core';\n\nexport default {\n    mask: ({value}) => {\n        const digitsMask = Array.from(value.replace(/%/g, '')).map(() => /\\d/);\n\n        if (!digitsMask.length) {\n            return [/\\d/];\n        }\n\n        return [...digitsMask, '%'];\n    },\n} as MaskitoOptions;\n"}}]);