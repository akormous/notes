"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[4757],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||k[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Docker",l={unversionedId:"docker-kubernetes/Docker",id:"docker-kubernetes/Docker",title:"Docker",description:"Containers",source:"@site/docs/3-docker-kubernetes/Docker.md",sourceDirName:"3-docker-kubernetes",slug:"/docker-kubernetes/Docker",permalink:"/notes/docs/docker-kubernetes/Docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3-docker-kubernetes/Docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI - epic cheat sheet",permalink:"/notes/docs/docker-kubernetes/CLI"},next:{title:"Kubernetes",permalink:"/notes/docs/docker-kubernetes/Kubernetes"}},s={},c=[{value:"Containers",id:"containers",level:2},{value:"Why Containers?",id:"why-containers",level:2},{value:"Virtual Machines vs Containers",id:"virtual-machines-vs-containers",level:2},{value:"How Containers work?",id:"how-containers-work",level:3},{value:"How VMs work?",id:"how-vms-work",level:3},{value:"Container Registry",id:"container-registry",level:2},{value:"Orchestrator",id:"orchestrator",level:2},{value:"What is Docker?",id:"what-is-docker",level:2},{value:"Docker compose?",id:"docker-compose",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker"},"Docker"),(0,a.kt)("h2",{id:"containers"},"Containers"),(0,a.kt)("p",null,"It is a unit of software/deployment."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Container",src:r(315).Z,width:"848",height:"540"})),(0,a.kt)("h2",{id:"why-containers"},"Why Containers?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Move faster by deploying smaller units"),(0,a.kt)("li",{parentName:"ul"},"Use fewer resources"),(0,a.kt)("li",{parentName:"ul"},"Fit more into the same host"),(0,a.kt)("li",{parentName:"ul"},"Faster automation"),(0,a.kt)("li",{parentName:"ul"},"Portability - run them anywhere"),(0,a.kt)("li",{parentName:"ul"},"Isolation - if one fails, it won't take the system down")),(0,a.kt)("h2",{id:"virtual-machines-vs-containers"},"Virtual Machines vs Containers"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Container",src:r(4055).Z,width:"1064",height:"596"})),(0,a.kt)("h3",{id:"how-containers-work"},"How Containers work?"),(0,a.kt)("p",null,"Containers work by creating \u201cnamespaces\u201d, which are a Linux feature that group shared resources together. For example, if you had five processes running together within a Docker container, they\u2019d still be running within Linux itself."),(0,a.kt)("h3",{id:"how-vms-work"},"How VMs work?"),(0,a.kt)("p",null,"If the idea of containers was to provide a \u201cfake\u201d version of Linux, the idea for VMs is to provide \u201cfake\u201d versions of the CPU, RAM, disk and devices. That is, VMs are \u201cfaking\u201d one level deeper."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Virtual Machines"),(0,a.kt)("th",{parentName:"tr",align:null},"Containers"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Large Footprint"),(0,a.kt)("td",{parentName:"tr",align:null},"Lightweight")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Slow to boot"),(0,a.kt)("td",{parentName:"tr",align:null},"Quick to start (it does not have to boot)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ideal for long running tasks"),(0,a.kt)("td",{parentName:"tr",align:null},"Ideal for short lived tasks")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Not so portable"),(0,a.kt)("td",{parentName:"tr",align:null},"Portable")))),(0,a.kt)("h2",{id:"container-registry"},"Container Registry"),(0,a.kt)("p",null,"It is centralized container repository, like GitHub but for containers. Docker has DockerHub (",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com"},"https://hub.docker.com"),"). All major cloud providers have their own Container Registry."),(0,a.kt)("h2",{id:"orchestrator"},"Orchestrator"),(0,a.kt)("p",null,"It is a thing that manages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Infrastructure"),(0,a.kt)("li",{parentName:"ul"},"Containers"),(0,a.kt)("li",{parentName:"ul"},"Deployment"),(0,a.kt)("li",{parentName:"ul"},"Scaling"),(0,a.kt)("li",{parentName:"ul"},"Failover"),(0,a.kt)("li",{parentName:"ul"},"Health Monitoring"),(0,a.kt)("li",{parentName:"ul"},"App upgrades, Zero-Downtime deployments")),(0,a.kt)("p",null,"Example, ",(0,a.kt)("strong",{parentName:"p"},"Kubernetes"),", Swarm, Service Fabric\nThere are some orchestrator as a service, like, Azure Kubernetes Service, Service Fabric"),(0,a.kt)("h2",{id:"what-is-docker"},"What is Docker?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An open source ",(0,a.kt)("strong",{parentName:"li"},"container runtime")),(0,a.kt)("li",{parentName:"ul"},"Runs on Mac, Windows and Linux"),(0,a.kt)("li",{parentName:"ul"},"Command line tool to create containers"),(0,a.kt)("li",{parentName:"ul"},'"Dockerfile" format for building container images')),(0,a.kt)("h2",{id:"docker-compose"},"Docker compose?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Define and run multi-containers applications"),(0,a.kt)("li",{parentName:"ul"},"Define using YAML file"),(0,a.kt)("li",{parentName:"ul"},"Run using the docker CLI with the compose plugin (docker compose)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"https://docs.docker.com/compose/"))))}p.isMDXComponent=!0},315:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Container-5d96b8e619e431d9811c2d405dfd8e25.png"},4055:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/VMvsContainers-04758dc074b5e657f12a469f3ba2a3cd.png"}}]);