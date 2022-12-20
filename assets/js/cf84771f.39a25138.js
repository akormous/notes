"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[5282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="Math and Logic Puzzles",l={unversionedId:"dsa/MathAndLogic",id:"dsa/MathAndLogic",title:"Math and Logic Puzzles",description:"Math Concepts",source:"@site/docs/2-dsa/MathAndLogic.md",sourceDirName:"2-dsa",slug:"/dsa/MathAndLogic",permalink:"/notes/docs/dsa/MathAndLogic",draft:!1,editUrl:"https://github.com/akormous/notes/edit/master/docs/2-dsa/MathAndLogic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamic Programming",permalink:"/notes/docs/dsa/DynamicProgramming"},next:{title:"Monotonic stack",permalink:"/notes/docs/dsa/MonotonicStack"}},c={},s=[{value:"Math Concepts",id:"math-concepts",level:2},{value:"Probability",id:"probability",level:2}],u={toc:s};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"math-and-logic-puzzles"},"Math and Logic Puzzles"),(0,a.kt)("h2",{id:"math-concepts"},"Math Concepts"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Prime Number Law"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Every positive integer can be decomposed into a product of primes"),(0,a.kt)("li",{parentName:"ul"},"In order for a number ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," to divide a number ",(0,a.kt)("inlineCode",{parentName:"li"},"y"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"(y/x)")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"y%x = 0"),",",(0,a.kt)("br",null),"all primes in `x`'s prime factorization must be in `y`'s prime factorization"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Sieve of Eratosthenes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Highly efficient way to generate a list of primes"),(0,a.kt)("li",{parentName:"ul"},"It works by recognizing that all non-prime numbers are divisible by a prime number"))),(0,a.kt)("h2",{id:"probability"},"Probability"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Bayes' Theorem"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BayesTheorem",src:n(9649).Z,width:"601",height:"254"}))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Independence"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If A and B are independent, then ",(0,a.kt)("inlineCode",{parentName:"li"},"P(A and B) = P(A) * P(B)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"If one event tells nothing about the other event.")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Mutual Exclusivity"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If A and B are mutually exclusive, then ",(0,a.kt)("inlineCode",{parentName:"li"},"P(A or B) = P(A) + P(B)")),(0,a.kt)("li",{parentName:"ul"},"and ",(0,a.kt)("inlineCode",{parentName:"li"},"P(A and B) = 0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"If one event occurs, then the other cannot occur.")))))}m.isMDXComponent=!0},9649:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/BayesTheorem-be423ffd16cf2b8abc496227bd6d2f55.png"}}]);