"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[7198],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},c="The Factory Method Pattern",s={unversionedId:"design-patterns/creational/FactoryPattern",id:"design-patterns/creational/FactoryPattern",title:"The Factory Method Pattern",description:"C++ Project Example",source:"@site/docs/1-design-patterns/creational/FactoryPattern.md",sourceDirName:"1-design-patterns/creational",slug:"/design-patterns/creational/FactoryPattern",permalink:"/notes/docs/design-patterns/creational/FactoryPattern",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/1-design-patterns/creational/FactoryPattern.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creational Patterns",permalink:"/notes/docs/design-patterns/creational/"},next:{title:"The Singleton pattern",permalink:"/notes/docs/design-patterns/creational/SingletonPattern"}},i={},l=[{value:"C++ Project Example",id:"c-project-example",level:2},{value:"Theory",id:"theory",level:2},{value:"Dependency Inversion Principle",id:"dependency-inversion-principle",level:2},{value:"Guidelines to follow the principle",id:"guidelines-to-follow-the-principle",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-factory-method-pattern"},"The Factory Method Pattern"),(0,a.kt)("h2",{id:"c-project-example"},"C++ Project Example"),(0,a.kt)("p",null,"Link: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/akormous/design-patterns/tree/main/Code/FactoryPattern/"},"Pizza Business")),(0,a.kt)("h2",{id:"theory"},"Theory"),(0,a.kt)("p",null,"The Factory Method Pattern defines an interface for creating an object, but lets subclasses ",(0,a.kt)("strong",{parentName:"p"},"decide")," which class to instantiate. Factory Methods lets a class defer instantiation to subclasses."),(0,a.kt)("p",null,"This pattern gives us a way to encapsulate the instantiations of concrete types. A general class diasgram is given below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Creator is a class that contains the implementations for all of the methods to manipulate products, except for the ",(0,a.kt)("strong",{parentName:"li"},"factory method")),(0,a.kt)("li",{parentName:"ul"},"All products must implement the same interface so that the classes which use the products can refer to the interface, not the concrete class"),(0,a.kt)("li",{parentName:"ul"},"The abstract ",(0,a.kt)("strong",{parentName:"li"},"factoryMethod()")," is what all Creator subclasses must implement"),(0,a.kt)("li",{parentName:"ul"},"The ConcreteCreator implements the ",(0,a.kt)("strong",{parentName:"li"},"factoryMethod()"),", which is the method that actually produces products"),(0,a.kt)("li",{parentName:"ul"},"The ConcreteCreator is responsible for creating one or more concrete products. it is the only class that has the knowledge of how to create these products")),(0,a.kt)("mermaid",{value:"classDiagram\n\nclass Product {\n    <<interface>>\n}\n\n\nclass Creator {\n    +abstract factoryMethod()\n    +anOperation()\n}\n\nclass ConcreteProduct {\n    +attributes\n}\n\nclass ConcreteCreator {\n    +factoryMethod()\n}\n\n\nCreator <|-- ConcreteCreator\nProduct <|-- ConcreteProduct\n\nConcreteCreator --\x3e ConcreteProduct\n\n\n\n"}),(0,a.kt)("h2",{id:"dependency-inversion-principle"},"Dependency Inversion Principle"),(0,a.kt)("p",null,"Depend upon Abstractions, do not depend upon Concrete Classes."),(0,a.kt)("h2",{id:"guidelines-to-follow-the-principle"},"Guidelines to follow the principle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No variable should hold a reference to a concrete class"),(0,a.kt)("li",{parentName:"ul"},"No class should derive from a concrete class"),(0,a.kt)("li",{parentName:"ul"},"No method should override an implemented  method of its base classes")),(0,a.kt)("h1",{id:"abstract-factory-pattern"},"Abstract Factory Pattern"),(0,a.kt)("p",null,"The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes."),(0,a.kt)("p",null,"Abstract Factory allows a client to use an abstract interface to create a set of related products without knowing (or caring) about the concrete products that are actually produced."),(0,a.kt)("mermaid",{value:"classDiagram\n\nclass AbstractFactory {\n    <<interface>>\n    +CreateProductA()\n    +CreateProductB()\n}\n\nclass ConcreteFactory1 {\n    +CreateProductA()\n    +CreateProductB()\n}\n\nclass ConcreteFactory2 {\n    +CreateProductA()\n    +CreateProductB()\n}\n\nAbstractFactory <|.. ConcreteFactory1\nAbstractFactory <|.. ConcreteFactory2\n\nclass AbstractProductA {\n    <<interface>>\n}\nclass ProductA1 \nclass ProductA2 \n\nAbstractProductA <|.. ProductA1\nAbstractProductA <|.. ProductA2\n\nclass AbstractProductB {\n    <<interface>>\n}\nclass ProductB1 \nclass ProductB2 \n\nAbstractProductB <|.. ProductB1\nAbstractProductB <|.. ProductB2\n\nProductA1 <|--  ConcreteFactory1 \nProductB1 <|--  ConcreteFactory1 \n\nProductA2 <|--  ConcreteFactory2 \nProductB2 <|--  ConcreteFactory2 \n\nclass Client\nClient --|> AbstractFactory\nClient --|> AbstractProductA\nClient --|> AbstractProductB\n"}))}p.isMDXComponent=!0}}]);