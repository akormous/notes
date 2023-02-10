"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[236],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>k});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=o.createContext({}),m=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=m(e.components);return o.createElement(u.Provider,{value:n},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=m(t),d=a,k=l["".concat(u,".").concat(d)]||l[d]||p[d]||r;return t?o.createElement(k,s(s({ref:n},i),{},{components:t})):o.createElement(k,s({ref:n},i))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[l]="string"==typeof e?e:a,s[1]=c;for(var m=2;m<r;m++)s[m]=t[m];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9145:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var o=t(7462),a=(t(7294),t(3905));const r={},s="Context and Custom Hooks",c={unversionedId:"react/state-management/ContextAndCustomHooks",id:"react/state-management/ContextAndCustomHooks",title:"Context and Custom Hooks",description:"React context allows us to pass down and consume data in any component without using props. Makes it easy to share data across components.",source:"@site/docs/5-react/state-management/ContextAndCustomHooks.md",sourceDirName:"5-react/state-management",slug:"/react/state-management/ContextAndCustomHooks",permalink:"/notes/docs/react/state-management/ContextAndCustomHooks",draft:!1,editUrl:"https://github.com/akormous/notes/edit/master/docs/5-react/state-management/ContextAndCustomHooks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React State Management",permalink:"/notes/docs/react/state-management/"},next:{title:"useEffect",permalink:"/notes/docs/react/state-management/useEffect"}},u={},m=[{value:"When to use?",id:"when-to-use",level:2},{value:"How to use?",id:"how-to-use",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Code Example",id:"code-example-1",level:2}],i={toc:m},l="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"context-and-custom-hooks"},"Context and Custom Hooks"),(0,a.kt)("h1",{id:"context"},"Context"),(0,a.kt)("p",null,"React context allows us to pass down and consume data in any component without using props. Makes it easy to share data across components."),(0,a.kt)("p",null,"It is the equivalent of global variables for our React components."),(0,a.kt)("p",null,"It avoid prop drilling."),(0,a.kt)("h2",{id:"when-to-use"},"When to use?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Theme data (light or dark)"),(0,a.kt)("li",{parentName:"ul"},"User data (currently authenticated user)"),(0,a.kt)("li",{parentName:"ul"},"Location-specific data (user language or locale)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"For data that does not need to be updated often"))),(0,a.kt)("h2",{id:"how-to-use"},"How to use?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create context using ",(0,a.kt)("inlineCode",{parentName:"li"},"createContext")," method"),(0,a.kt)("li",{parentName:"ol"},"Wrap the context provider around the component tree"),(0,a.kt)("li",{parentName:"ol"},"Put any value on your context provider with the ",(0,a.kt)("inlineCode",{parentName:"li"},"value")," prop"),(0,a.kt)("li",{parentName:"ol"},"Read the value using ",(0,a.kt)("inlineCode",{parentName:"li"},"useContext"))),(0,a.kt)("h2",{id:"code-example"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\nimport { useEffect, useState, createContext, useContext } from \'react\';\n\ninterface Pokemon {\n  "id": number,\n  "name": string,\n  "type": string[],\n  "hp": number,\n  "attack": number,\n  "defense": number,\n  "special_attack": number,\n  "special_defense": number,\n  "speed": number\n}\n\nconst PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(\n  {} as unknown as ReturnType<typeof usePokemonSource>\n);\n\nfunction usePokemonSource() {\n  const [pokemon, setPokemon] = useState<Pokemon[]>([]);\n\n  useEffect(() => {\n    fetch("/pokemon.json")\n    .then((response) => response.json())\n    .then((data) => setPokemon(data))\n  }, [])\n\n  return {pokemon};\n}\n\nexport function usePokemon() {\n  return useContext(PokemonContext);\n}\n\nexport function PokemonProvider({\n    children,\n}: {\n    children: React.ReactNode;\n}) {\n    return (\n        <PokemonContext.Provider value={usePokemonSource()}>\n            {children}\n        </PokemonContext.Provider>\n    );\n}\n\n')),(0,a.kt)("h1",{id:"custom-hooks"},"Custom Hooks"),(0,a.kt)("p",null,"When you have component logic that needs to be used by multiple components, we can extract that logic to a custom hook."),(0,a.kt)("p",null,"Simply, extract the data fetching logic to a different file and export the function that returns the data and use it in your components."),(0,a.kt)("h2",{id:"code-example-1"},"Code Example"),(0,a.kt)("p",null,"In this example, the function ",(0,a.kt)("inlineCode",{parentName:"p"},"usePokemon")," can be termed as a custom hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\nimport { useEffect, useState, createContext, useContext, useReducer, useCallback, useMemo } from \'react\';\n\ninterface Pokemon {\n  "id": number,\n  "name": string,\n  "type": string[],\n  "hp": number,\n  "attack": number,\n  "defense": number,\n  "special_attack": number,\n  "special_defense": number,\n  "speed": number\n}\n\nconst PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(\n  {} as unknown as ReturnType<typeof usePokemonSource>\n);\n\nfunction usePokemonSource(): {\n  pokemon: Pokemon[];\n  search: string;\n  setSearch: (search: string) => void;\n} {\n  //const [pokemon, setPokemon] = useState<Pokemon[]>([]);\n  //const [search, setSearch] = useState("");\n  type PokemonState = {\n    pokemon: Pokemon[],\n    search: string;\n  }\n  type PokemonAction = { type: "setPokemon"; payload: Pokemon[] } | \n  { type: "setSearch"; payload: string };\n\n  const [ {pokemon, search}, dispatch ] = useReducer((state: PokemonState, action: PokemonAction) => {\n    switch(action.type) {\n      case "setPokemon":\n        return { ...state, pokemon: action.payload };\n      case "setSearch":\n        return { ...state, search: action.payload };\n    }\n  }, {\n    pokemon: [],\n    search: ""\n  })\n  useEffect(() => {\n    fetch("/pokemon.json")\n    .then((response) => response.json())\n    .then((data) => dispatch({\n      type: "setPokemon",\n      payload: data\n    }))\n  }, []);\n\n  const setSearch = useCallback((search: string) => {\n    dispatch({\n      type: "setSearch",\n      payload: search,\n    });\n  }, []);\n\n  const filteredPokemon = useMemo(\n    () => pokemon.filter((p) => p.name.toLowerCase().includes(search)).slice(0, 20),\n    [pokemon, search]\n  )\n  \n  const sortedPokemon = useMemo(() => \n  [...filteredPokemon].sort((a, b) => a.name.localeCompare(b.name)), [filteredPokemon]);\n\n  return { pokemon: sortedPokemon, search, setSearch };\n}\n\nexport function usePokemon() {\n  return useContext(PokemonContext);\n}\n\nexport function PokemonProvider({\n    children,\n}: {\n    children: React.ReactNode;\n}) {\n    return (\n        <PokemonContext.Provider value={usePokemonSource()}>\n            {children}\n        </PokemonContext.Provider>\n    );\n}\n\n')))}p.isMDXComponent=!0}}]);