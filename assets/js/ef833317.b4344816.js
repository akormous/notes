"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[1459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,k=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},l="Sorting Algorithms",o={unversionedId:"dsa/SortingAlgorithms",id:"dsa/SortingAlgorithms",title:"Sorting Algorithms",description:"Bubble Sort",source:"@site/docs/2-dsa/SortingAlgorithms.md",sourceDirName:"2-dsa",slug:"/dsa/SortingAlgorithms",permalink:"/notes/docs/dsa/SortingAlgorithms",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2-dsa/SortingAlgorithms.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Monotonic stack",permalink:"/notes/docs/dsa/MonotonicStack"},next:{title:"Trees and Graphs",permalink:"/notes/docs/dsa/TreesAndGraphs"}},s={},u=[],m={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sorting-algorithms"},"Sorting Algorithms"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Bubble Sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TIME COMPLEXITY - ",(0,a.kt)("inlineCode",{parentName:"li"},"O(n^2)")),(0,a.kt)("li",{parentName:"ul"},"SPACE COMPLEXITY - ",(0,a.kt)("inlineCode",{parentName:"li"},"O(1)")),(0,a.kt)("li",{parentName:"ul"},"Start from the beginning of the array and swap the first two elements if the first is greater than the second."),(0,a.kt)("li",{parentName:"ul"},"Then, go to the next pair, and so on."),(0,a.kt)("li",{parentName:"ul"},'The bigger item slowly "bubble" up to the end of the list'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Selection Sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TIME COMPLEXITY - ",(0,a.kt)("inlineCode",{parentName:"li"},"O(n^2)")),(0,a.kt)("li",{parentName:"ul"},"SPACE COMPLEXITY - ",(0,a.kt)("inlineCode",{parentName:"li"},"O(1)")),(0,a.kt)("li",{parentName:"ul"},"Find the smallest element using a linear scan and move it to the front (swapping it with the front element)"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Merge Sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TIME COMPLEXITY - ",(0,a.kt)("inlineCode",{parentName:"li"},"O(n log(n))")),(0,a.kt)("li",{parentName:"ul"},"SPACE COMPLEXITY - ",(0,a.kt)("inlineCode",{parentName:"li"},"O(n)")),(0,a.kt)("li",{parentName:"ul"},"It divides the array in half, sorts each of those halves, and then merges them back together."),(0,a.kt)("li",{parentName:"ul"},"Recursively call for the left part and right part"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Quick Sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TIME COMPLEXITY",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"O(n log(n))")," (Average)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"O(n^2)"),"      (Worst Case)"))),(0,a.kt)("li",{parentName:"ul"},"SPACE COMPLEXITY - ",(0,a.kt)("inlineCode",{parentName:"li"},"O(log (n))")),(0,a.kt)("li",{parentName:"ul"},"Pick a random element aka pivot and partition the array, such that all numbers that are less than the pivot come before all the elements that are greater than it."),(0,a.kt)("li",{parentName:"ul"},"The partitioning can be performed efficiently through a series of swaps"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Counting Sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TIME COMPLEXITY - ",(0,a.kt)("inlineCode",{parentName:"li"},"O(n + k)")," "),(0,a.kt)("li",{parentName:"ul"},"SPACE COMPLEXITY - ",(0,a.kt)("inlineCode",{parentName:"li"},"O(n + k)")),(0,a.kt)("li",{parentName:"ul"},"where ",(0,a.kt)("inlineCode",{parentName:"li"},"k")," is the range of the input "),(0,a.kt)("li",{parentName:"ul"},"It is based on keys between a specific range."),(0,a.kt)("li",{parentName:"ul"},"It works by counting the number of objects having distinct key values ( ",(0,a.kt)("inlineCode",{parentName:"li"},"freq[]")," )"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Radix Sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TIME COMPLEXITY - ",(0,a.kt)("inlineCode",{parentName:"li"},"O((n + b) * logb(k))")),(0,a.kt)("li",{parentName:"ul"},"SPACE COMPLEXITY - ",(0,a.kt)("inlineCode",{parentName:"li"},"O(n + 2^d)")),(0,a.kt)("li",{parentName:"ul"},"b = the base (for decimal b = 10)"),(0,a.kt)("li",{parentName:"ul"},"n = number of elements in the array"),(0,a.kt)("li",{parentName:"ul"},"k = maximum value in the array"),(0,a.kt)("li",{parentName:"ul"},"The idea of Radix Sort is to do digit by digit sort starting from the least significant digit to the most significant digit"),(0,a.kt)("li",{parentName:"ul"},"It uses counting sort subroutine to sort"))))}p.isMDXComponent=!0}}]);