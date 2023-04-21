"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[1929],{81929:function(e,t,n){n.d(t,{tr:function(){return F},n9:function(){return I},H$:function(){return J},f8:function(){return ce},A7:function(){return W},jX:function(){return B},rC:function(){return de}});var a=n(7383);const r=new Date("0001-01-01"),l=new Date("9999-12-31"),i={hours:23,minutes:59,seconds:59,milliseconds:999},o="\u2013",s="\u2014",c="-",u="\u2212",d=[c,o,s,u],m=[","," "],p=[":","."],g={hours:2,minutes:2,seconds:2,milliseconds:3};function f(e,t,n){const a=Math.min(Number(n),Math.max(Number(t),Number(e)));return e instanceof Date?new Date(a):a}function S(e,{day:t,month:n,year:a}={}){const r=new Date(e);return t&&r.setDate(r.getDate()+t),n&&r.setMonth(r.getMonth()+n),a&&r.setFullYear(r.getFullYear()+a),r}function h(e){return{day:String(e.getDate()).padStart(2,"0"),month:String(e.getMonth()+1).padStart(2,"0"),year:String(e.getFullYear()).padStart(4,"0"),hours:String(e.getHours()).padStart(2,"0"),minutes:String(e.getMinutes()).padStart(2,"0"),seconds:String(e.getSeconds()).padStart(2,"0"),milliseconds:String(e.getMilliseconds()).padStart(3,"0")}}function v(e,t){return!(e.length<t.length)&&e.split(/\D/).every(e=>!e.match(/^0+$/))}function x(e,t,n){const a=t.replace(/\W/g,"").length;return e.replace(n,"").match(new RegExp(`(\\D*\\d[^\\d\\s]*){1,${a}}`,"g"))||[]}function $(e){return e.reduce((e,[t,n])=>Object.assign(Object.assign({},e),{[t]:n}),{})}function M(e,t){const n=t.replace(/[^dmy]/g,""),a=e.replace(/\D+/g,""),r={day:a.slice(n.indexOf("d"),n.lastIndexOf("d")+1),month:a.slice(n.indexOf("m"),n.lastIndexOf("m")+1),year:a.slice(n.indexOf("y"),n.lastIndexOf("y")+1)};return $(Object.entries(r).filter(([e,t])=>Boolean(t)).sort(([e],[n])=>t.toLowerCase().indexOf(e[0])>t.toLowerCase().indexOf(n[0])?1:-1))}function b(e,t){var n,a,r,l,i,o,s;const c=2===(null===(n=e.year)||void 0===n?void 0:n.length)?`20${e.year}`:e.year,u=new Date(Number(null!=c?c:"0"),Number(null!==(a=e.month)&&void 0!==a?a:"1")-1,Number(null!==(r=e.day)&&void 0!==r?r:"1"),Number(null!==(l=null==t?void 0:t.hours)&&void 0!==l?l:"0"),Number(null!==(i=null==t?void 0:t.minutes)&&void 0!==i?i:"0"),Number(null!==(o=null==t?void 0:t.seconds)&&void 0!==o?o:"0"),Number(null!==(s=null==t?void 0:t.milliseconds)&&void 0!==s?s:"0"));return u.setFullYear(Number(null!=c?c:"0")),u}const y=", ";function w({day:e,month:t,year:n,hours:a,minutes:r,seconds:l,milliseconds:i},o,s){var c;const u=2===(null===(c=o.match(/y/g))||void 0===c?void 0:c.length)?null==n?void 0:n.slice(-2):n;return(o+(s?y+s:"")).replace(/d+/g,null!=e?e:"").replace(/m+/g,null!=t?t:"").replace(/y+/g,null!=u?u:"").replace(/H+/g,null!=a?a:"").replace(/MSS/g,null!=i?i:"").replace(/M+/g,null!=r?r:"").replace(/S+/g,null!=l?l:"").replace(/^\D+/g,"").replace(/\D+$/g,"")}function N(e,t,n=0){return Number(e.padEnd(t.length,"0"))<=Number(t)?{validatedSegmentValue:e,prefixedZeroesCount:n}:e.endsWith("0")?N(`0${e.slice(0,t.length-1)}`,t,n+1):N(`${e.slice(0,t.length-1)}0`,t,n)}const O=e=>{var t,n,a;return{day:(null===(t=e.match(/d/g))||void 0===t?void 0:t.length)||0,month:(null===(n=e.match(/m/g))||void 0===n?void 0:n.length)||0,year:(null===(a=e.match(/y/g))||void 0===a?void 0:a.length)||0}},j={day:31,month:12,year:9999};function T({dateString:e,dateModeTemplate:t,offset:n,selection:[a,r]}){const l=M(e,t),i=Object.entries(l),o={};let s=0;for(const[d,m]of i){const e=w(o,t),l=j[d],i=n+e.length+(e.length&&1)+O(t)[d],c=i>=a&&i<=r;if(c&&Number(m)>Number(l))return{validatedDateString:"",updatedSelection:[a,r]};if(c&&Number(m)<1)return{validatedDateString:"",updatedSelection:[a,r]};const{validatedSegmentValue:u,prefixedZeroesCount:p}=N(m,`${l}`);s+=p,o[d]=u}const c=w(o,t),u=c.length-e.length;return{validatedDateString:c,updatedSelection:[a+s+u,r+s+u]}}const D=/[\\^$.*+?()[\]{}|]/g,E=RegExp(D.source);function k(e){return e&&E.test(e)?e.replace(D,"\\$&"):e}function A(e){return!e||"object"==typeof e&&0===Object.keys(e).length}function R(e,t){const n=O(t);return $(Object.entries(e).map(([e,t])=>{const a=n[e];return[e,t.length===a&&t.match(/^0+$/)?"1".padStart(a,"0"):t]}))}function Z({dateModeTemplate:e,min:t=r,max:n=l,datesSeparator:a="",dateSegmentSeparator:i="."}){return({value:r,selection:l})=>{const o=a&&r.endsWith(a),s=x(r,e,a);let c="";for(const u of s){c+=c?a:"";const r=M(u,e);v(u,e)?c+=w(h(f(b(r),t,n)),e):c+=w(R(r,e),e)+(u.endsWith(i)?i:"")}return{selection:l,value:c+(o?a:"")}}}function W(e){return({value:t,selection:n},a)=>t.endsWith(e)||!t&&!a.value.endsWith(e)?{value:t,selection:n}:t.endsWith(e)||a.value.endsWith(e)?{selection:n,value:Array.from(e).reverse().reduce((e,t,n)=>{const a=e.length-1-n;return e[a]!==t?e.slice(0,a+1)+t+e.slice(a+1):e},t)}:{selection:n,value:t+e}}function B(e){return({value:t,selection:n},a)=>{if(t.startsWith(e)||!t&&!a.value.startsWith(e))return{value:t,selection:n};const[r,l]=n,i=Array.from(e).reduce((e,n,a)=>(e+t)[a]===n?e:e+n,"");return{selection:[r+i.length,l+i.length],value:i+t}}}function C({dateModeTemplate:e,dateSegmentsSeparator:t,datesSeparator:n=""}){return({elementState:a,data:r})=>{const{value:l,selection:i}=a;if(r===t)return{elementState:a,data:i[0]===l.length?r:""};if(d.includes(r))return{elementState:a,data:n};const o=r.replace(new RegExp(`[^\\d${k(t)}${n}]`,"g"),"");if(!o)return{elementState:a,data:""};const[s,c]=i;let u=c+r.length;const m=l.slice(0,s)+o+l.slice(u),p=x(m,e,n);let g="";const f=Boolean(n)&&m.includes(n);for(const t of p){const{validatedDateString:r,updatedSelection:l}=T({dateString:t,dateModeTemplate:e,offset:g?g.length+n.length:0,selection:[s,u]});if(t&&!r)return{elementState:a,data:""};u=l[1],g+=f&&g?n+r:r}const S=g.slice(s,u);return{elementState:{selection:i,value:g.slice(0,s)+S.split(t).map(e=>"0".repeat(e.length)).join(t)+g.slice(u)},data:S}}}function F({mode:e,separator:t=".",max:n,min:r}){const l=e.split("/").join(t);return{mask:Array.from(l).map(e=>e===t?e:/\d/),overwriteMode:"replace",preprocessor:(0,a.Zu)(({elementState:e},t)=>{const{value:n,selection:a}=e;if(!n||function(e,[t,n]){return n===e.length}(n,a))return{elementState:e};const[r,l]=a,i=n.slice(r,l).replace(/\d/g,"0"),o=n.slice(0,r)+i+n.slice(l);return"validation"===t||"insert"===t&&r===l?{elementState:{selection:a,value:o}}:{elementState:{selection:"deleteBackward"===t||"insert"===t?[r,r]:[l,l],value:o}}},C({dateModeTemplate:l,dateSegmentsSeparator:t})),postprocessor:Z({min:r,max:n,dateModeTemplate:l,dateSegmentSeparator:t})}}function L({dateModeTemplate:e,datesSeparator:t,minLength:n,maxLength:a,max:r=l}){return A(n)&&A(a)?e=>e:({value:l,selection:i})=>{const o=x(l,e,t);if(2!==o.length||o.some(t=>!v(t,e)))return{value:l,selection:i};const[s,c]=o.map(t=>b(M(t,e))),u=S(s,Object.assign(Object.assign({},n),{day:(null==n?void 0:n.day)&&n.day-1})),d=A(a)?r:S(s,Object.assign(Object.assign({},a),{day:(null==a?void 0:a.day)&&a.day-1})),m=f(c,u,r);return{selection:i,value:o[0]+t+w(h(m>d?d:m),e)}}}function V({dateModeTemplate:e,datesSeparator:t}){return({value:n,selection:a})=>{const r=x(n,e,t),l=2===r.length&&r.every(t=>v(t,e)),[i,o]=a;if(!((i>=n.length||0===i&&o>=n.length)&&l))return{value:n,selection:a};const[s,c]=r.map(t=>b(M(t,e)));return{selection:a,value:s>c?r.reverse().join(t):n}}}const P=`\xa0${o}\xa0`;function I({mode:e,separator:t=".",min:n,max:r,minLength:l,maxLength:i}){const o=e.split("/").join(t),s=Array.from(o).map(e=>e===t?e:/\d/);return{mask:[...s,...Array.from(P),...s],overwriteMode:"replace",preprocessor:(0,a.Zu)(({elementState:e},t)=>{const{value:n,selection:a}=e;if(!n||function(e,[t,n]){return n===e.length}(n,a))return{elementState:e};const[r,l]=a,i=n.slice(r,l).replace(/\d/g,"0"),o=n.slice(0,r)+i+n.slice(l);return"validation"===t||"insert"===t&&r===l?{elementState:{selection:a,value:o}}:{elementState:{selection:"deleteBackward"===t||"insert"===t?[r,r]:[l,l],value:o}}},C({dateModeTemplate:o,dateSegmentsSeparator:t,datesSeparator:P})),postprocessor:(0,a.Zu)(Z({min:n,max:r,dateModeTemplate:o,datesSeparator:P,dateSegmentSeparator:t}),L({dateModeTemplate:o,minLength:l,maxLength:i,max:r,datesSeparator:P}),V({dateModeTemplate:o,datesSeparator:P}))}}function Y(e){return $(Object.entries(e).map(([e,t])=>[e,`${t}`.padEnd(g[e],"0")]))}function H(e){const t=e.replace(/\D+/g,""),n={hours:t.slice(0,2),minutes:t.slice(2,4),seconds:t.slice(4,6),milliseconds:t.slice(6,9)};return $(Object.entries(n).filter(([e,t])=>Boolean(t)))}function X({hours:e="",minutes:t="",seconds:n="",milliseconds:a=""}){return`${e}${t&&`:${t}`}${n&&`:${n}`}${a&&`.${a}`}`}function _({timeString:e,paddedMaxValues:t,offset:n,selection:[a,r]}){const l=H(e),i=Object.entries(l),o={};let s=0;for(const[d,m]of i){const e=X(o),l=t[d],i=n+e.length+(e.length&&1)+g[d];if(i>=a&&i<=r&&Number(m)>Number(l))return{validatedTimeString:"",updatedTimeSelection:[a,r]};const{validatedSegmentValue:c,prefixedZeroesCount:u}=N(m,`${l}`);s+=u,o[d]=c}const c=X(o),u=c.length-e.length;return{validatedTimeString:c,updatedTimeSelection:[a+s+u,r+s+u]}}function G(e,t){const n=e.includes(y);return[e.slice(0,t.length),e.slice(n?t.length+y.length:t.length)]}function q({dateModeTemplate:e,timeMode:t,min:n=r,max:a=l}){return({value:r,selection:l})=>{const[i,o]=G(r,e),s=M(i,e),c=H(o);if(!function(e,t,n){return e.length>=t.length+n.length+y.length&&e.split(y)[0].split(/\D/).every(e=>!e.match(/^0+$/))}(r,e,t)){const n=R(s,e),a=w(Object.assign(Object.assign({},n),c),e,t);return{selection:l,value:a+r.slice(a.length)}}return{selection:l,value:w(h(f(b(s,c),n,a)),e,t)}}}function z({dateModeTemplate:e,dateSegmentsSeparator:t}){return({elementState:n,data:a})=>{const{value:r,selection:l}=n;if(a===t)return{elementState:n,data:l[0]===r.length?a:""};if(m.includes(a))return{elementState:n,data:y};const o=a.replace(new RegExp(`[^\\d${k(t)}]`,"g"),"");if(!o)return{elementState:n,data:""};const[s,c]=l;let u=c+a.length;const d=r.slice(0,s)+o+r.slice(u),[p,g]=G(d,e);let f="";const S=d.includes(y),{validatedDateString:h,updatedSelection:v}=T({dateString:p,dateModeTemplate:e,offset:0,selection:[s,u]});if(p&&!h)return{elementState:n,data:""};u=v[1],f+=h;const x=Y(i),{validatedTimeString:$,updatedTimeSelection:M}=_({timeString:g,paddedMaxValues:x,offset:f.length+y.length,selection:[s,u]});if(g&&!$)return{elementState:n,data:""};u=M[1],f+=S?y+$:$;const b=f.slice(s,u);return{elementState:{selection:l,value:f.slice(0,s)+b.split(t).map(e=>"0".repeat(e.length)).join(t)+f.slice(u)},data:b}}}function J({dateMode:e,timeMode:t,dateSeparator:n=".",min:r,max:l}){const i=e.split("/").join(n);return{mask:[...Array.from(i).map(e=>e===n?e:/\d/),...y.split(""),...Array.from(t).map(e=>p.includes(e)?e:/\d/)],overwriteMode:"replace",preprocessor:(0,a.Zu)(({elementState:e},t)=>{const{value:n,selection:a}=e;if(!n||function(e,[t,n]){return n===e.length}(n,a))return{elementState:e};const[r,l]=a,i=n.slice(r,l).replace(/\d/g,"0"),o=n.slice(0,r)+i+n.slice(l);return"validation"===t||"insert"===t&&r===l?{elementState:{selection:a,value:o}}:{elementState:{selection:"deleteBackward"===t||"insert"===t?[r,r]:[l,l],value:o}}},z({dateModeTemplate:i,dateSegmentsSeparator:n})),postprocessor:q({min:r,max:l,dateModeTemplate:i,timeMode:t})}}function K({decimalSeparator:e,precision:t,decimalZeroPadding:n}){return t<=0||!n?e=>e:({value:n,selection:a})=>{const[r,l=""]=n.split(e);return n.includes(e)||r?{value:r+e+l.padEnd(t,"0"),selection:a}:{value:n,selection:a}}}function Q(e){return({value:t,selection:n})=>{const[a,r]=n,l=t.includes(e),[i,o=""]=t.split(e),s=U(i);if(i===s)return{value:t,selection:n};const c=!s||s===u,d=c?`${s}0`:s,m=a-ee(t,a)+Number(c),p=r-ee(t,r)+Number(c);return{value:d+(l?e:"")+o,selection:[Math.max(m,0),Math.max(p,0)]}}}function U(e){return e.replace(new RegExp("^(\u2212)?0+"),"$1")}function ee(e,t){const n=e.slice(0,t);return n.length-U(n).length}function te({decimalSeparator:e,isNegativeAllowed:t,precision:n,thousandSeparator:a}){const r=t?"\u2212?":"",l=a?`[\\d${k(a)}]*`:"[\\d]*",i=`(${k(e)}\\d{0,${Number.isFinite(n)?n:""}})?`;return n>0?new RegExp(`^${r}${l}${i}$`):new RegExp(`^${r}${l}$`)}function ne(e,t){return","===e||"."===e?[".",",","\u0431","\u044e"].filter(n=>n!==t&&n!==e):[]}function ae({max:e,decimalSeparator:t}){return({value:n,selection:a})=>{if(function(e,t="."){const n=e.match(new RegExp(`^[\u2212\\${c}${o}${s}]`));return Number((n?c:"")+e.replace(new RegExp(`[^\\d${k(t)}]`,"g"),"").replace(t,"."))}(n,t)>e){const n=`${e}`.replace(".",t);return{value:n,selection:[n.length,n.length]}}return{value:n,selection:a}}}function re({decimalSeparator:e,thousandSeparator:t,decimalZeroPadding:n}){return({elementState:a,data:r},l)=>{const{value:i,selection:o}=a,[s,c]=o,u=i.slice(s,c),d=n?[e,t]:[t],m=n&&s>i.indexOf(e)&&Boolean(u.match(/^0+$/gi));return"deleteBackward"!==l&&"deleteForward"!==l||!d.includes(u)&&!m?{elementState:a,data:r}:{elementState:{value:i,selection:"deleteForward"===l?[c,c]:[s,s]},data:r}}}function le({decimalSeparator:e,precision:t}){const n=new RegExp(`^\\D*${k(e)}`);return({elementState:a,data:r})=>{const{value:l,selection:i}=a,[o]=i;if(t<=0||l.includes(e)||!r.match(n))return{elementState:a,data:r};const s=l.slice(0,o);return{elementState:a,data:s&&s!==u?r:`0${r}`}}}function ie(e,t){const n=new RegExp(`[${t.join("")}]`,"gi");return({elementState:t,data:a})=>{const{value:r,selection:l}=t;return{elementState:{selection:l,value:r.replace(n,e)},data:a.replace(n,e)}}}function oe({thousandSeparator:e,decimalSeparator:t}){return e?({value:n,selection:a})=>{const[r,l=""]=n.split(t),[i,o]=a;let[s,c]=a;const d=Array.from(r.replace(new RegExp("^\u2212"),"")).reduceRight((t,n,a)=>{const r=t.length&&(t.length+1)%4==0;return n===e&&r?n+t:n!==e||r?r?(a<=i&&s++,a<=o&&c++,n+e+t):n+t:(a<=i&&s--,a<=o&&c--,t)},"");return{value:(n.startsWith(u)?u:"")+d+(n.includes(t)?t:"")+l,selection:[s,c]}}:e=>e}function se(e,t){if(e>0)return e=>e;const n=new RegExp(`${k(t)}.*$`,"g");return({elementState:e,data:t})=>{const{value:a,selection:r}=e,[l,i]=r,o=a.replace(n,"");return{elementState:{selection:[Math.min(l,o.length),Math.min(i,o.length)],value:o},data:t.replace(n,"")}}}function ce({max:e=Number.MAX_SAFE_INTEGER,isNegativeAllowed:t=!0,precision:n=0,thousandSeparator:r="\xa0",decimalSeparator:l=".",decimalPseudoSeparators:i=ne(l,r),decimalZeroPadding:d=!1}={}){const m=[c,o,s].filter(e=>e!==r&&e!==l);return{mask:te({decimalSeparator:l,precision:n,thousandSeparator:r,isNegativeAllowed:t}),preprocessor:(0,a.Zu)(ie(u,m),ie(l,i),le({decimalSeparator:l,precision:n}),re({decimalSeparator:l,decimalZeroPadding:d,thousandSeparator:r}),se(n,l)),postprocessor:(0,a.Zu)(Q(l),ae({decimalSeparator:l,max:e}),oe({decimalSeparator:l,thousandSeparator:r}),K({decimalSeparator:l,decimalZeroPadding:d,precision:n})),overwriteMode:d?({value:e,selection:[t]})=>t<=e.indexOf(l)?"shift":"replace":"shift"}}function ue(e){const t=Y(e);return({elementState:e,data:n})=>{const a=n.replace(/\D+/g,"");if(!a)return{elementState:e,data:""};const{value:r,selection:l}=e,[i,o]=l;let s=o+a.length;const c=r.slice(0,i)+a+r.slice(s),{validatedTimeString:u,updatedTimeSelection:d}=_({timeString:c,paddedMaxValues:t,offset:0,selection:[i,s]});if(c&&!u)return{elementState:e,data:""};s=d[1];const m=u.slice(i,s);return{elementState:{selection:l,value:u.slice(0,i)+"0".repeat(m.length)+u.slice(s)},data:m}}}function de({mode:e,timeSegmentMaxValues:t={}}){const n=Object.assign(Object.assign({},i),t);return{mask:Array.from(e).map(e=>p.includes(e)?e:/\d/),preprocessor:(0,a.Zu)(({elementState:e},t)=>{const{value:n,selection:a}=e;if(!n||function(e,[t,n]){return n===e.length}(n,a))return{elementState:e};const[r,l]=a,i=n.slice(r,l).replace(/\d/g,"0"),o=n.slice(0,r)+i+n.slice(l);return"validation"===t||"insert"===t&&r===l?{elementState:{selection:a,value:o}}:{elementState:{selection:"deleteBackward"===t||"insert"===t?[r,r]:[l,l],value:o}}},ue(n)),overwriteMode:"replace"}}}}]);