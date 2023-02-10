"use strict";(self.webpackChunkmy_notes=self.webpackChunkmy_notes||[]).push([[9806],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,i=t.originalType,m=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),s=o(n),d=l,h=s["".concat(m,".").concat(d)]||s[d]||k[d]||i;return n?a.createElement(h,r(r({ref:e},p),{},{components:n})):a.createElement(h,r({ref:e},p))}));function h(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var i=n.length,r=new Array(i);r[0]=d;var u={};for(var m in e)hasOwnProperty.call(e,m)&&(u[m]=e[m]);u.originalType=t,u[s]="string"==typeof t?t:l,r[1]=u;for(var o=2;o<i;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},682:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const i={},r="Bit Manipulation",u={unversionedId:"dsa/BitManipulation",id:"dsa/BitManipulation",title:"Bit Manipulation",description:"DISCLAIMER: If you don't know what a binary number is, then don't read the rest of this page.",source:"@site/docs/2-dsa/BitManipulation.md",sourceDirName:"2-dsa",slug:"/dsa/BitManipulation",permalink:"/notes/docs/dsa/BitManipulation",draft:!1,editUrl:"https://github.com/akormous/notes/edit/master/docs/2-dsa/BitManipulation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Structures and Algorithms",permalink:"/notes/docs/dsa/"},next:{title:"Concurrency",permalink:"/notes/docs/dsa/Concurrency"}},m={},o=[{value:"Basics",id:"basics",level:2},{value:"Tricks",id:"tricks",level:2},{value:"Brian Kernighan&#39;s Algorithm",id:"brian-kernighans-algorithm",level:2},{value:"How can we count the number of set bits?",id:"how-can-we-count-the-number-of-set-bits",level:3}],p={toc:o},s="wrapper";function k(t){let{components:e,...n}=t;return(0,l.kt)(s,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bit-manipulation"},"Bit Manipulation"),(0,l.kt)("p",null,"DISCLAIMER: If you don't know what a binary number is, then don't read the rest of this page."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"basics"},"Basics"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"1s Complement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flip all the bits of a binary number"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"2s Complement"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Calculate 1s Complement"),(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," to it"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"How are negative numbers stored in memory?"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/how-the-negative-numbers-are-stored-in-memory/"},"Read this")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A positive number is represented as itself while a negative number is represented as the 2s complement of its absolute value, with a 1 in its sign bit to indicate that a negative value"),(0,l.kt)("li",{parentName:"ul"},"In simple words, the binary representation of ",(0,l.kt)("inlineCode",{parentName:"li"},"-K")," as a N-bit number is ",(0,l.kt)("inlineCode",{parentName:"li"},"concat(1, 2^(N-1) - K)")),(0,l.kt)("li",{parentName:"ul"},"More simpler words, invert the bits in the positive representation and then add 1"),(0,l.kt)("li",{parentName:"ul"},"Example: +7 = 0 111"),(0,l.kt)("li",{parentName:"ul"},"Calculating -7 ?"),(0,l.kt)("li",{parentName:"ul"},"Flip the bits of +7 = 000"),(0,l.kt)("li",{parentName:"ul"},"Add 1 to it = 001"),(0,l.kt)("li",{parentName:"ul"},"Prefix with sign bit -7 = 1 001"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Rules"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Equation"),(0,l.kt)("th",{parentName:"tr",align:null},"Result"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x ^ 0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x ^ 1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"~x"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x ^ x")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x & 0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x & 1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x & x")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x \\| 0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x \\| 1")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1")))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Arithmetic vs. Logical Right Shift"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There are 2 types of right shift operators"),(0,l.kt)("li",{parentName:"ul"},"Arithmetic Right Shift essentially divides by 2 (shifts the bits to the right and fills the MSB with sign bit)"),(0,l.kt)("li",{parentName:"ul"},"Example, ",(0,l.kt)("inlineCode",{parentName:"li"},"-75 = 1 0110101")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-75 >> 1 = 1 1011010 = -38")),(0,l.kt)("li",{parentName:"ul"},"Logical Right Shift does exactly what we think right shifting means (shifts the bits to the right and fills the MSB with 0)"),(0,l.kt)("li",{parentName:"ul"},"Example, ",(0,l.kt)("inlineCode",{parentName:"li"},"-75 = 1 0110101")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-75 >>> 1 = 0 1011010 = 90")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"tricks"},"Tricks"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Multiplication by 2^x"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Lets calculate 0110 * 2"),(0,l.kt)("li",{parentName:"ul"},"which is 0110 + 0110 = 1100"),(0,l.kt)("li",{parentName:"ul"},"observe that all the bits are shifted by 1 bit to the left"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"binary_numer * 2")," is equivalent to ",(0,l.kt)("inlineCode",{parentName:"li"},"binary_number << 1")),(0,l.kt)("li",{parentName:"ul"},"Further results, what if I want to multiply binary number with 2^23 ?"),(0,l.kt)("li",{parentName:"ul"},"Simply, shift 23 bits to the left, which is ",(0,l.kt)("inlineCode",{parentName:"li"},"binary_number << 23")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"XOR with negated binary number"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1100 ^ (~1100) = 1111")),(0,l.kt)("li",{parentName:"ul"},"XORing with its negated value is a sequence of 1s"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Clearing bits from the right"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1011 & (~0 << 2)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~0")," is a sequence of 1s"),(0,l.kt)("li",{parentName:"ul"},"So, left shifting by ",(0,l.kt)("inlineCode",{parentName:"li"},"2")," will be 2 zeroes at the right, followed by 1s"),(0,l.kt)("li",{parentName:"ul"},"ANDing it with a number will clear the last 2 bits"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"}," = 1000")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Get Bit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Shift 1 over by i bits (i = which bit you wanna get), creating a value that looks like ",(0,l.kt)("inlineCode",{parentName:"li"},"00100000")),(0,l.kt)("li",{parentName:"ul"},"Then do logical AND with the number, and compare it with ",(0,l.kt)("inlineCode",{parentName:"li"},"0")),(0,l.kt)("li",{parentName:"ul"},"If the ith bit was set, then the result won't be ",(0,l.kt)("inlineCode",{parentName:"li"},"0")),(0,l.kt)("li",{parentName:"ul"},"Example, Check if 5th bit from right is set or not, ",(0,l.kt)("inlineCode",{parentName:"li"},"10110110")),(0,l.kt)("li",{parentName:"ul"},"We take ",(0,l.kt)("inlineCode",{parentName:"li"},"00000001"),", left shift by 5"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"00000001 << 5 = 00100000")),(0,l.kt)("li",{parentName:"ul"},"logical AND with given number, ",(0,l.kt)("inlineCode",{parentName:"li"},"00100000 & 10110110 = 00100000")),(0,l.kt)("li",{parentName:"ul"},"which is not equal to ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),", so the 5th bit from right was set")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"\n    bool getBit(int num, int i) {\n        return ((num & (1 << i)) != 0);\n    }\n\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Set Bit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Setting a bit is quite easy"),(0,l.kt)("li",{parentName:"ul"},"Just shift the 1 to the desired location and do a logical OR")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"\n    int setBit(int num, int i) {\n        return num | (1 << i);\n    }\n\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Clear Bit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Very similar to set bit, but here we negate the mask"),(0,l.kt)("li",{parentName:"ul"},"Create a number like ",(0,l.kt)("inlineCode",{parentName:"li"},"11011111"),", then do logical AND")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"\n    int clearBit(int num, int i) {\n        int mask = ~(1 << i);\n        return num & mask;\n    }\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Clearing bits from MSB to i (inclusive)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"\n    int clearBitMSBThroughI(int num, int i) {\n        int mask = (1 << i) - 1;\n        return num & mask;\n    }\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Clearing bits from i to 0 (inclusive)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"\n    int clearBitIThrough0(int num, int i) {\n        int mask = (-1 << (i + 1));\n        return num & mask;\n    }\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Update Bit"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It is a combination of clear bit and set bit")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"\n    int updateBit(int num, int i, bool bit) {\n        int val = bit ? 1 : 0;\n        int mask = ~(1 << i);\n        return (num & mask) | (value << i);\n    }\n"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"brian-kernighans-algorithm"},"Brian Kernighan's Algorithm"),(0,l.kt)("p",null,"A famous algorithm to find the number of set bits in a number."),(0,l.kt)("p",null,"The main idea behind this algorithm is that when we subtract one from any number, it inverts all the bits after the rightmost set bit.\nFor example."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Number"),(0,l.kt)("th",{parentName:"tr",align:null},"Binary Representation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"01010")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"01001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"01000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"00111")))),(0,l.kt)("p",null,"The rightmost set bit also gets inverted along with the numbers right to it."),(0,l.kt)("h3",{id:"how-can-we-count-the-number-of-set-bits"},"How can we count the number of set bits?"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"\n    int cnt = 0;\n    while(num) {\n        cnt++;\n        num = num & num-1;\n    }\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"num & num-1")," will reverse the rightmost ",(0,l.kt)("strong",{parentName:"p"},"set")," bit. So, when all of the set bits will be reversed, the loop will run till the number becomes 0, and we get the count."))}k.isMDXComponent=!0}}]);