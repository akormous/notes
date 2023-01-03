"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[9279],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(f,s(s({ref:n},i),{},{components:t})):r.createElement(f,s({ref:n},i))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[m]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1872:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={},s="useMemo",c={unversionedId:"react/state-management/useMemoAndCallback",id:"react/state-management/useMemoAndCallback",title:"useMemo",description:"This hook returns a memoized value. It only runs when one of its dependencies update. This can improve performance.",source:"@site/docs/5-react/state-management/useMemoAndCallback.md",sourceDirName:"5-react/state-management",slug:"/react/state-management/useMemoAndCallback",permalink:"/notes/docs/react/state-management/useMemoAndCallback",draft:!1,editUrl:"https://github.com/akormous/notes/edit/master/docs/5-react/state-management/useMemoAndCallback.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useEffect",permalink:"/notes/docs/react/state-management/useEffect"},next:{title:"useReducer",permalink:"/notes/docs/react/state-management/useReducer"}},u={},l=[{value:"Code Example",id:"code-example",level:2},{value:"Code Example",id:"code-example-1",level:2}],i={toc:l};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usememo"},"useMemo"),(0,a.kt)("p",null,"This hook returns a memoized value. It only runs when one of its dependencies update. This can improve performance."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useMemo")," can be used to keep expensive, resource intensive functions from needlessly running."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"const result = useMemo(() => {expensiveCalculation}, [dependencies])")),(0,a.kt)("h2",{id:"code-example"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\nimport { useState, useMemo } from \'react\'\n\nfunction App() {\n  const [numbers, setNumbers] = useState([11,22,33]);\n\n  const total = useMemo(\n    () => numbers.reduce((acc, number) => acc + number, 0), \n    [numbers]);\n\n\n  const [names] = useState(["Reyna", "Jett", "Sova", "KAYO"]);\n  const sortedNames = useMemo(() => [...names].sort(), [names]);\n\n  return (\n    <div className="App">\n      <div>Total = {total}</div>\n      <div>Names = {names.join(", ")}</div>\n      <div>Sorted Names = {sortedNames.join(", ")}</div>\n\n    </div>\n  )\n}\n\nexport default App\n\n\n')),(0,a.kt)("h1",{id:"usecallback"},"useCallback"),(0,a.kt)("p",null,"This hook returns a memoized callback function. This allows us to isolate resource intensive functions so that they will not automatically run on every render. The ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," hook only runs when one of its dependcies update."),(0,a.kt)("p",null,"NOTE: The difference is that ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo")," returns a memoized value and ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," returns a memoized function."),(0,a.kt)("p",null,"This prevents a component from re-rendering unless its props have changed."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"const someFunc = useCallback(() => someIntructions, [dependencies])")),(0,a.kt)("h2",{id:"code-example-1"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\nimport { useState, useMemo, useCallback } from \'react\'\n\nfunction SortedList({ list, comparator }) {\n  console.log("Sorted List render");\n  const sortedList = useMemo(() => {\n    console.log("Running sort");\n    return [...list].sort(comparator);\n  }, [list]);\n  return (\n    <div>\n      {sortedList.join(", ")}\n    </div>\n  );\n}\n\nfunction App() {\n  const [numbers, setNumbers] = useState([11,22,33]);\n\n  const total = useMemo(\n    () => numbers.reduce((acc, number) => acc + number, 0), \n    [numbers]);\n\n\n  const [names] = useState(["Reyna", "Jett", "Sova", "KAYO"]);\n  const [count, setCount] = useState(0);\n  const descSort = useCallback((a, b) => a.localeCompare(b)*-1, []);\n  return (\n    <div className="App">\n      <div>Total = {total}</div>\n      <div>Names = {names.join(", ")}</div>\n      <SortedList list={names} comparator={descSort}/>\n      <button onClick={() => setCount(count+1)}>Count = {count}</button>\n    </div>\n  )\n}\n\nexport default App\n\n\n')))}m.isMDXComponent=!0}}]);