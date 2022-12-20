"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[4194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},591:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="The Decorator Pattern",c={unversionedId:"design-patterns/structural/DecoratorPattern",id:"design-patterns/structural/DecoratorPattern",title:"The Decorator Pattern",description:"C++ Project Example",source:"@site/docs/1-design-patterns/structural/DecoratorPattern.md",sourceDirName:"1-design-patterns/structural",slug:"/design-patterns/structural/DecoratorPattern",permalink:"/notes/docs/design-patterns/structural/DecoratorPattern",draft:!1,editUrl:"https://github.com/akormous/notes/edit/master/docs/1-design-patterns/structural/DecoratorPattern.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Adapter Pattern",permalink:"/notes/docs/design-patterns/structural/AdapterPattern"},next:{title:"The Facade Pattern",permalink:"/notes/docs/design-patterns/structural/FacadePattern"}},s={},l=[{value:"C++ Project Example",id:"c-project-example",level:2},{value:"Theory",id:"theory",level:2},{value:"What do we get if we accomplish this?",id:"what-do-we-get-if-we-accomplish-this",level:3},{value:"Definition",id:"definition",level:2},{value:"Key points to remember",id:"key-points-to-remember",level:2},{value:"Class Diagram",id:"class-diagram",level:2},{value:"Decorating a coffee",id:"decorating-a-coffee",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-decorator-pattern"},"The Decorator Pattern"),(0,a.kt)("h2",{id:"c-project-example"},"C++ Project Example"),(0,a.kt)("p",null,"Link: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/akormous/design-patterns/tree/main/Code/DecoratorPattern/"},"Starbucks Order System")),(0,a.kt)("h2",{id:"theory"},"Theory"),(0,a.kt)("p",null,"The goal is to allow classes to be easily extended to incorporate new behavior without modifying existing code. This is also known as ",(0,a.kt)("span",{style:{color:"cyan"}},(0,a.kt)("strong",{parentName:"p"},"Open-Closed Principle"))," (the 'O' in SOLID principles)."),(0,a.kt)("h3",{id:"what-do-we-get-if-we-accomplish-this"},"What do we get if we accomplish this?"),(0,a.kt)("p",null,"Designs that are resilient to change and flexible enough to take on new functionality to meet changing requirements."),(0,a.kt)("h2",{id:"definition"},"Definition"),(0,a.kt)("p",null,"The Decorator Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality."),(0,a.kt)("h2",{id:"key-points-to-remember"},"Key points to remember"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Decorators have the same supertype as the objects they decorate"),(0,a.kt)("li",{parentName:"ul"},"One or more decorators can be used to wrap an object"),(0,a.kt)("li",{parentName:"ul"},"Given that the decorator has the same supertype as the object it decorates, we can pass around a decorated object in place of the original (wrapped) object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{style:{color:"orange"}},"The decorator adds its own behavior either before and/or after delegating to the object it decorates to do the rest of the job")),(0,a.kt)("li",{parentName:"ul"},"We can decorate objects dynamically at runtime with as many decorators as we like")),(0,a.kt)("h2",{id:"class-diagram"},"Class Diagram"),(0,a.kt)("mermaid",{value:"classDiagram\n\nclass Component {\n    +A()\n    +B()\n}\n\nclass ConcreteComponent {\n    +A()\n    +B()\n}\n\nclass Decorator {\n    +A()\n    +B()\n}\n\nComponent <|-- ConcreteComponent\nComponent <|-- Decorator\n\nclass ConcreteDecoratorA {\n    +Component c\n    +A()\n    +B()\n    +Object newState\n}\n\nclass ConcreteDecoratorB {\n    +Component c\n    +A()\n    +B()\n    +newBehavior()\n}\n\nDecorator <|-- ConcreteDecoratorA\nDecorator <|-- ConcreteDecoratorB"}),(0,a.kt)("h2",{id:"decorating-a-coffee"},"Decorating a coffee"),(0,a.kt)("p",null,"Imagine you are Starbucks and you order:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"an iced, Ristretto, 10 shot, venti, with breve, 5 pump vanilla, 7 pump caramel, 4 Splenda, ","[and]"," poured, not shaken")),(0,a.kt)("p",null,"You deserve to be dragged out from the shop."),(0,a.kt)("p",null,"For this example, we will consider a simpler order"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"double mocha triple steamed milk espresso")),(0,a.kt)("p",null,"(idk if this is even a thing but anyway)"),(0,a.kt)("p",null,"The cost will be calculated in this way:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Decorating Coffee",src:r(6735).Z,width:"3364",height:"2528"})))}d.isMDXComponent=!0},6735:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/DecoratingCoffee-4bc91bf04636a5020d75677b0282349b.png"}}]);