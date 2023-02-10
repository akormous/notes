"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[4449],{3905:(A,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var e=t(7294);function r(A,n,t){return n in A?Object.defineProperty(A,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[n]=t,A}function o(A,n){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(A);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(A,n).enumerable}))),t.push.apply(t,e)}return t}function i(A){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(A,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(A,n,Object.getOwnPropertyDescriptor(t,n))}))}return A}function a(A,n){if(null==A)return{};var t,e,r=function(A,n){if(null==A)return{};var t,e,r={},o=Object.keys(A);for(e=0;e<o.length;e++)t=o[e],n.indexOf(t)>=0||(r[t]=A[t]);return r}(A,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(e=0;e<o.length;e++)t=o[e],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(r[t]=A[t])}return r}var c=e.createContext({}),g=function(A){var n=e.useContext(c),t=n;return A&&(t="function"==typeof A?A(n):i(i({},n),A)),t},s=function(A){var n=g(A.components);return e.createElement(c.Provider,{value:n},A.children)},I="mdxType",l={inlineCode:"code",wrapper:function(A){var n=A.children;return e.createElement(e.Fragment,{},n)}},C=e.forwardRef((function(A,n){var t=A.components,r=A.mdxType,o=A.originalType,c=A.parentName,s=a(A,["components","mdxType","originalType","parentName"]),I=g(t),C=r,p=I["".concat(c,".").concat(C)]||I[C]||l[C]||o;return t?e.createElement(p,i(i({ref:n},s),{},{components:t})):e.createElement(p,i({ref:n},s))}));function p(A,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof A||r){var o=t.length,i=new Array(o);i[0]=C;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=A,a[I]="string"==typeof A?A:r,i[1]=a;for(var g=2;g<o;g++)i[g]=t[g];return e.createElement.apply(null,i)}return e.createElement.apply(null,t)}C.displayName="MDXCreateElement"},9958:(A,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>g});var e=t(7462),r=(t(7294),t(3905));const o={},i="Monotonic stack",a={unversionedId:"dsa/MonotonicStack",id:"dsa/MonotonicStack",title:"Monotonic stack",description:"A monotonic stack is a stack whose elements are monotonically increasing or decreasing.",source:"@site/docs/2-dsa/MonotonicStack.md",sourceDirName:"2-dsa",slug:"/dsa/MonotonicStack",permalink:"/notes/docs/dsa/MonotonicStack",draft:!1,editUrl:"https://github.com/akormous/notes/edit/master/docs/2-dsa/MonotonicStack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Math and Logic Puzzles",permalink:"/notes/docs/dsa/MathAndLogic"},next:{title:"Sorting Algorithms",permalink:"/notes/docs/dsa/SortingAlgorithms"}},c={},g=[{value:"Definition of monotonically increasing:",id:"definition-of-monotonically-increasing",level:3},{value:"Applications of Monotonic stack",id:"applications-of-monotonic-stack",level:2},{value:"Example",id:"example",level:2}],s={toc:g},I="wrapper";function l(A){let{components:n,...o}=A;return(0,r.kt)(I,(0,e.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"monotonic-stack"},"Monotonic stack"),(0,r.kt)("p",null,"A monotonic stack is a stack whose elements are monotonically increasing or decreasing."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"definition-of-monotonically-increasing"},"Definition of monotonically increasing:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"monotonic increasing (not comparable) (mathematics, of a function) always increasing or remaining constant, and never decreasing; contrast this with strictly increasing.")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Monotonic Increasing function",src:t(7159).Z,width:"384",height:"371"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"applications-of-monotonic-stack"},"Applications of Monotonic stack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Finding next greater/smaller element")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/akormous/dsa/tree/master/4_Stacks_and_Queues/NextGreaterElement.cpp"},"Next Greater Element")))}l.isMDXComponent=!0},7159:(A,n,t)=>{t.d(n,{Z:()=>e});const e="data:image/png;base64,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kTvvtAUx3njDmWZAL0a6/36Rr76yFUAKIgAAc8UVznH600+3BS7vv+98B6ATi+mphkA6IAAQenpGi84LM2uWLYgxeLDISSc5FxYB6YQAQKgddZTI2rXOef2xPv7YOef/5ZdtAZBmCACElt4CUC8m8jq988orRbp29b57FJAuCACE0owZIn/+szUuusPv2FHkqadsAZDGCACEzocfiowZY42LBkL79kwVjPAgABAajRs788gcf7wtcLnhBmduH53iGAgLAgCh0KuXc3hHZ+t002kZuncXeeQRWwCECAGAtNe3r8i77zqTmbnpjJI6dbMeEgLCiABAWhs92pmnJ9aCBSJNmvx6JywgjAgApK177hGZOdMalylTRM47zxogxAgApKVrrhGZONEaF52/5447rAFCjgBA2rn7bpEnnrDG5dJLRX77W2sAEABIL7//vcjtt1vjctppIs8/bw2AKAIAaePqq53z+WMNGiSyZIk1AH5BACAtTJgg8uST1rj07Cny6qvWADgIAYCUd9NNzpe7sbp0EVm+3BoABRAASGm9ezs3bI+lc/jrDdkBFI4AQMrq0cP72L7etYs5/IHiEQBISTqH/+LF1rjoO3+9by+A4hEASEkrV4pUq2aNmTqVd/5AaRAASDmrVokceqg1RmfzvPlmawCUCAGAlKJz++itGt1eecX7/H8ARSMAkDKuuMKZ3dNt2zaRiy6yBkCpEABICfql76xZ1pidO0WOPNIaAKVGACDw6tYVWbrUGpczzhD58UdrAJQaAYDA06kc9H6+bjrvD3fyAsqHAECgzZ4tcuqp1pi5c0WmT7cGQJkRAAisPn1ERo60xvzjH87sngDKjwBAINWsKfLmm9a4nHOOSCRiDYByIQAQSH/7m0jlytaYk08W2bjRGgDlRgAgcCZNKnixlx7z9zoTCEDZEQAIlPr1RaZMscZkZztn/QCILwIAgZKVZYWL3tULQPwRAAiMJ54QadLEGnPVVSLffGMNgLgiABAIenOXa66xxnz0kciMGdYAiDsCAIGwbJkVRuf5OfFEawD4ggBA0j32mBUuw4aJ7NljDQBfEABIquOOE7nuOmvMvHneF4EBiC8CAEn1zjtWuFxwgRUAfEUAIGmefrrgrR2HDrUCgO8IACRF06Yil19ujVm0SGTOHGsA+I4AQFLEnvWze7fIWWdZAyAhCAAk3E03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"}}]);