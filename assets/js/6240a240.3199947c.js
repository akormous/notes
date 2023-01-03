"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[4126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},i),{},{components:n})):r.createElement(f,s({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:a,s[1]=u;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},s="useRef",u={unversionedId:"react/state-management/useRef",id:"react/state-management/useRef",title:"useRef",description:"This hook allows you to persist values between renders.",source:"@site/docs/5-react/state-management/useRef.md",sourceDirName:"5-react/state-management",slug:"/react/state-management/useRef",permalink:"/notes/docs/react/state-management/useRef",draft:!1,editUrl:"https://github.com/akormous/notes/edit/master/docs/5-react/state-management/useRef.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useReducer",permalink:"/notes/docs/react/state-management/useReducer"},next:{title:"useState",permalink:"/notes/docs/react/state-management/useState"}},c={},l=[{value:"Code Example 1",id:"code-example-1",level:2},{value:"Code Example 2",id:"code-example-2",level:2}],i={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useref"},"useRef"),(0,a.kt)("p",null,"This hook allows you to persist values between renders."),(0,a.kt)("p",null,"It can be used to store a mutable value that does not cause a re-render when updated."),(0,a.kt)("p",null,"It can be used to access a DOM element directly."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useRef")," only returns one item which is an object called ",(0,a.kt)("inlineCode",{parentName:"p"},"current")),(0,a.kt)("h2",{id:"code-example-1"},"Code Example 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\nimport { useRef, useEffect, useState } from \'react\'\n\nfunction App() {\n  const [name, setName] = useState("");\n  const count = useRef(0);\n\n  useEffect(() => {\n    count.current = count.current + 1;\n  });\n  \n  return (\n    <div className="App">\n      <div>{name}</div>\n      <input type="text" onChange={(e) => setName(e.target.value)} />\n      <p>This component is rendered {count.current} times</p>\n    </div>\n  )\n}\n\nexport default App;\n\n\n')),(0,a.kt)("h2",{id:"code-example-2"},"Code Example 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\nimport { useRef, useEffect, useState } from \'react\'\n\nfunction App() {\n  const idRef = useRef(1);\n  const inputRef = useRef(null);\n\n  const [names, setNames] = useState([\n    {id: 69, alias: "duke"},\n    {id: 420, alias: "walter"},\n  ]);\n\n  const onAddName = () => {\n    setNames([...names, {\n      id: idRef.current++,\n      alias: inputRef.current.value\n    }]);\n    inputRef.current.value = "";\n  }\n\n  \n  useEffect(() => {\n    inputRef.current.focus();\n  }, []);\n\n  return (\n    <div className="App">\n      <ul>\n      {names.map((name) => (\n        <li>{name.id} - {name.alias}</li>\n      ))}\n      </ul>\n      <input type="text" ref={inputRef}/>\n      <button onClick={onAddName}>Add Name</button>\n    </div>\n  )\n}\n\nexport default App\n\n\n')))}p.isMDXComponent=!0}}]);