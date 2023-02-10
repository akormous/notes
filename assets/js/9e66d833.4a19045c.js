"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[9576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="Concurrency",l={unversionedId:"dsa/Concurrency",id:"dsa/Concurrency",title:"Concurrency",description:"Concurrency occurs when multiple copies of a program run simultaneously while communicating with each other.",source:"@site/docs/2-dsa/Concurrency.md",sourceDirName:"2-dsa",slug:"/dsa/Concurrency",permalink:"/notes/docs/dsa/Concurrency",draft:!1,editUrl:"https://github.com/akormous/notes/edit/master/docs/2-dsa/Concurrency.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bit Manipulation",permalink:"/notes/docs/dsa/BitManipulation"},next:{title:"Dynamic Programming",permalink:"/notes/docs/dsa/DynamicProgramming"}},c={},s=[{value:"Issues with concurrency",id:"issues-with-concurrency",level:2},{value:"Concurrency vs Parallelism",id:"concurrency-vs-parallelism",level:2},{value:"Terminologies",id:"terminologies",level:2},{value:"C++ Syntax - Parallelism and Concurrency",id:"c-syntax---parallelism-and-concurrency",level:2},{value:"std::thread",id:"stdthread",level:3},{value:"Mutex and Critical Section",id:"mutex-and-critical-section",level:3}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concurrency"},"Concurrency"),(0,a.kt)("p",null,"Concurrency occurs when multiple copies of a program run simultaneously while communicating with each other.\nA process can be executed by multiple different threads."),(0,a.kt)("h2",{id:"issues-with-concurrency"},"Issues with concurrency"),(0,a.kt)("p",null,"If you write multithreading programs like a crackhead, you can run into problems such as:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Data Race")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When two, or more threads in a single process access the same memory location concurrently"),(0,a.kt)("li",{parentName:"ul"},"at least one of the accesses is for writing"),(0,a.kt)("li",{parentName:"ul"},"the threads are not using any exclusive locks to control their accesses to that memory")),(0,a.kt)("p",null,"When three of these conditions hold, the order of accesses is non-deterministic"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Race Condition")),(0,a.kt)("p",null,"A race condition occurs when two or more threads can access shared data and they try to change it at the same time. Because the thread scheduling algorithm can swap threads at any time, you don't know the order in which the threads will attempt to access the shared data."),(0,a.kt)("h2",{id:"concurrency-vs-parallelism"},"Concurrency vs Parallelism"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parallelism")," - multiple copies of the same program run simultaneously, but they are executed on different data"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Concurrency")," - involves a shared memory location, and the different threads actually ",(0,a.kt)("em",{parentName:"p"},"read")," the information provided by the previous threads"),(0,a.kt)("h2",{id:"terminologies"},"Terminologies"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Thread Pool"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"collection of worker threads that efficiently execute asynchronous callbacks on behalf of the application"),(0,a.kt)("li",{parentName:"ul"},"It is primarily used to reduce the number of application threads and provide management of worker threads"),(0,a.kt)("li",{parentName:"ul"},"Application can queue work items, associate work with waitable handles, automatically queue based on a timer, and bind with I/O")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Which applications can benefit from thread pool?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"highly parallel applications that dispatch a large number of small work items asynchronously"),(0,a.kt)("li",{parentName:"ul"},"applications that create a large number of threads that each run for a short time"),(0,a.kt)("li",{parentName:"ul"},"applicaitons that require parallel processing (web browsers i.e. opening multiple tabs)"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Semaphores"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is a non-negative variable and shared between threads"),(0,a.kt)("li",{parentName:"ul"},"It is used in thread synchronization and solving the critical section problem"),(0,a.kt)("li",{parentName:"ul"},"Semaphores are of 2 types:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Binary Semaphore")," - aka ",(0,a.kt)("strong",{parentName:"li"},"Mutex lock"),", it can have only 2 values (0 or 1)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Counting Semaphore")," - its value can range over an unrestricted domain, it is used to control access to a resource that has multiple instances"))))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"c-syntax---parallelism-and-concurrency"},"C++ Syntax - Parallelism and Concurrency"),(0,a.kt)("h3",{id:"stdthread"},"std::thread"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"std::thread")," is used to create an execution thread instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include<iostream>\n#include<thread>\n\nint main() {\n    std::thread t([](){\n        std::cout << "hello world" << std::endl;\n    })\n    // join a thread i.e. blocks the calling thread until the thread whose join method is called has completed\n    t.join();\n    return 0;\n}\n')),(0,a.kt)("h3",{id:"mutex-and-critical-section"},"Mutex and Critical Section"),(0,a.kt)("p",null,"Create a mutex by instantiating ",(0,a.kt)("inlineCode",{parentName:"p"},"std::mutex")),(0,a.kt)("p",null,"Member functions - ",(0,a.kt)("inlineCode",{parentName:"p"},"lock()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"unlock()"),". Instead of using lock and unlock for every mutex, you can use a ",(0,a.kt)("inlineCode",{parentName:"p"},"lock_guard()")," which bounds the lifetime of the mutex lock to the lifetime of the object (",(0,a.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/language/raii"},"RAII"),")"),(0,a.kt)("p",null,"Moreover, ",(0,a.kt)("inlineCode",{parentName:"p"},"unique_lock")," is more flexible than ",(0,a.kt)("inlineCode",{parentName:"p"},"lock_guard")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unique_lock")," manages the locking and unlocking on a mutex object with exclusive ownership (no other ",(0,a.kt)("inlineCode",{parentName:"p"},"unique_lock")," objects owning the ownership of a mutex). So, it is recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"unique_lock")," in concurrent programming. Below example uses ",(0,a.kt)("inlineCode",{parentName:"p"},"unique_lock")),(0,a.kt)("p",null,"Code: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/akormous/dsa/tree/master/9_Concurrency/MutexBasics.cpp"},"Mutex Basics")))}m.isMDXComponent=!0}}]);