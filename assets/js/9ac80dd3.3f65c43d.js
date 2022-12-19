"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[5455],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},s="The Observer Pattern",l={unversionedId:"design-patterns/behavioral/ObserverPattern",id:"design-patterns/behavioral/ObserverPattern",title:"The Observer Pattern",description:"C++ Project Example",source:"@site/docs/1-design-patterns/behavioral/ObserverPattern.md",sourceDirName:"1-design-patterns/behavioral",slug:"/design-patterns/behavioral/ObserverPattern",permalink:"/notes/docs/design-patterns/behavioral/ObserverPattern",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1-design-patterns/behavioral/ObserverPattern.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Command Pattern",permalink:"/notes/docs/design-patterns/behavioral/CommandPattern"},next:{title:"Creational Patterns",permalink:"/notes/docs/design-patterns/creational/"}},i={},c=[{value:"C++ Project Example",id:"c-project-example",level:2},{value:"Theory",id:"theory",level:2},{value:"Some key points to remember",id:"some-key-points-to-remember",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-observer-pattern"},"The Observer Pattern"),(0,a.kt)("h2",{id:"c-project-example"},"C++ Project Example"),(0,a.kt)("p",null,"Link: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/akormous/design-patterns/tree/main/Code/ObserverPattern/"},"The Weather Station")),(0,a.kt)("h2",{id:"theory"},"Theory"),(0,a.kt)("p",null,"It defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically."),(0,a.kt)("p",null,"The relationship between subject and observers is one-to-many. Whenever the state of the subject changes, all the observers are notified."),(0,a.kt)("p",null,"This pattern is also known as, "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Subject-Observer"),(0,a.kt)("li",{parentName:"ul"},"Publisher-Subscriber")),(0,a.kt)("p",null,"The general class diagram is given below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There are 2 interfaces, one for Subject and one for Observer"),(0,a.kt)("li",{parentName:"ul"},"The class that will implement the Subject interface need to define the functions for registering observer, removing observer and notifying observers"),(0,a.kt)("li",{parentName:"ul"},"There are 2 ways to get updated state in the observers",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Either the subject ",(0,a.kt)("em",{parentName:"li"},"pushes")," the state to observers"),(0,a.kt)("li",{parentName:"ul"},"Or the observers ",(0,a.kt)("em",{parentName:"li"},"pull")," the data from the subject state"),(0,a.kt)("li",{parentName:"ul"},"pull is considered more correct as it allows observers to only fetch the data that they need."))),(0,a.kt)("li",{parentName:"ul"},"Meanwhile, the classes implementing observer interface need to define the update method"),(0,a.kt)("li",{parentName:"ul"},"In this way, the two objects are loosely coupled, they can interact, but have very little knowledge of each other."),(0,a.kt)("li",{parentName:"ul"},"Changes to either the subject or an observer will not affect the other")),(0,a.kt)("mermaid",{value:'classDiagram\n\nclass Subject {\n    <<interface>>\n    +registerObserver()\n    +removeObserver()\n    +notify()\n}\n\nclass Observer {\n    <<interface>>\n    +update()\n}\nObserver "*" <-- "1" Subject\n\nclass ConcreteSubject {\n    +registerObserver()\n    +removeObserver()\n    +notify()\n}\nSubject <|.. "implements" ConcreteSubject\n\nclass ConcreteObserver {\n    +update()\n}\nObserver <|.. "implements" ConcreteObserver\nConcreteObserver "subscribe" --|> ConcreteSubject\n'}),(0,a.kt)("h2",{id:"some-key-points-to-remember"},"Some key points to remember"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Strive for loosely coupled designs between objects that interact"),(0,a.kt)("li",{parentName:"ul"},"Loosely coupled designs allow us to build flexible OO systems that can handle change because they minimize the interdependency between objects"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Publishers + Subscribers = Observer Pattern"))))}u.isMDXComponent=!0}}]);