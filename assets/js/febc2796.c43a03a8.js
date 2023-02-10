"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[2436],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=i,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={},o="RAII - Resource Acquisition is Initialization",l={unversionedId:"miscellaneous/RAII",id:"miscellaneous/RAII",title:"RAII - Resource Acquisition is Initialization",description:"Funny acronym for a small job.",source:"@site/docs/98-miscellaneous/RAII.md",sourceDirName:"98-miscellaneous",slug:"/miscellaneous/RAII",permalink:"/notes/docs/miscellaneous/RAII",draft:!1,editUrl:"https://github.com/akormous/notes/edit/master/docs/98-miscellaneous/RAII.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JSON Web Token",permalink:"/notes/docs/miscellaneous/JWT"},next:{title:"Condensed Books",permalink:"/notes/docs/condensed-books/"}},s={},u=[{value:"Code Example",id:"code-example",level:2}],c={toc:u},m="wrapper";function d(e){let{components:n,...a}=e;return(0,i.kt)(m,(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"raii---resource-acquisition-is-initialization"},"RAII - Resource Acquisition is Initialization"),(0,i.kt)("p",null,"Funny acronym for a small job."),(0,i.kt)("p",null,"It is a C++ programming technique which binds the life cycle of a resource that must be acquired before use, to the lifetime of an object.\nResource could be heap memory, thread of execution, open file, lock mutex - anything that exists in limited supply."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"&quot;RAII&quot;",src:t(7145).Z,width:"1593",height:"1073"})),(0,i.kt)("p",null,"RAII can be summarized as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"encapsulate each resource into a class, where",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the constructor acquires the resource and establishes all class invariants or throws an exception if that cannot be done"),(0,i.kt)("li",{parentName:"ul"},"the destructor releases the resource and never throws exceptions;"))),(0,i.kt)("li",{parentName:"ul"},"always use the resource via an instance of a RAII-class that either",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"has automatic storage duration or temporary lifetime itself, or"),(0,i.kt)("li",{parentName:"ul"},"has lifetime that is bounded by the lifetime of an automatic or temporary object")))),(0,i.kt)("p",null,"Some STL RAII classes are :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"std::string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"std::vector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"std::jthread")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"std::lock_guard"))),(0,i.kt)("h2",{id:"code-example"},"Code Example"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Dynamic Array"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'\n#include<iostream>\n\nusing namespace std;\n\nclass CustomArray {\npublic:\n    CustomArray(int size) {\n        arr = new int(size); // allocating memory\n    }\n    ~CustomArray() {\n        delete arr; // deallocating memory\n    }\n\n    bool set(int index, int val) {\n        if(index >= size or index < 0) return false; // failed to set value\n        arr[index] = val;\n        return true;\n    }\n\n    int get(int index) {\n        if(index >= size or index < 0) return -1; // failed to get value\n        return arr[index];\n    }\n\n    int getSize() {\n        return this->size;\n    }\n\n    int front() {\n        if(size > 0)    return arr[0];\n    }\n\n    int back() {\n        if(size > 0)    return arr[size-1];\n    }\nprivate:\n    int *arr;\n    int size;\n};\n\n\nvoid arrayDemoGood() {\n    CustomArray myArr(10);\n    for(int i = 0; i < 10; i++) {\n        cout << myArr.set(i, i*i) << endl;\n    }\n\n    for(int i = 0; i < 10; i++) {\n        cout << myArr.get(i) << endl;\n    }\n    // when arr goes out of scope, the memory is freed by the destructor\n}\n\n\nvoid arrayDemoBad() {\n    int* arr = new int(10);\n\n    for(int i = 0; i < 10; i++) arr[i] = i;\n\n    for(int i = 0; i < 10; i++) cout << arr[i] << endl;\n\n    // memory leak - not deallocating memory used by arr\n}\n\n\n\nint main() {\n    arrayDemoBad();\n    cout << "----------------------------------------\\n";\n    arrayDemoGood();\n    return 0;\n}\n\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Mutex lock"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'\n#include<iostream>\n#include<mutex>\n\nusing namespace std;\n\nstd::mutex globalMutex;\n\nvoid criticalSection(int n) {\n    cout << "CRITICAL CODE" << endl;\n    if(n%69 == 0) throw "Not allowed";\n}\n\nvoid mutexDemoGood() {\n    lock_guard<mutex> lk(globalMutex);\n    criticalSection(69*4 + 1);\n}\n\nvoid mutexDemoBad() {\n    globalMutex.lock();\n    criticalSection(69*3 + 1); // if this function throws an exception, then mutex lock is never released - bad situation\n    globalMutex.unlock();\n}\n\nint main() {\n    mutexDemoBad();\n    mutexDemoGood();\n    return 0;\n}\n\n'))))}d.isMDXComponent=!0},7145:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/raii-04335d9fc5db51068fb5dec03c83752a.png"}}]);