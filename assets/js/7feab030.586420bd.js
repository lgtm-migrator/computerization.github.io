"use strict";(self.webpackChunkcomputerization_website=self.webpackChunkcomputerization_website||[]).push([[9232],{2897:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(6687);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,g=m["".concat(u,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3591:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(9149),o=r(8332),i=(r(6687),r(2897)),a=["components"],c={title:"Git \u4f7f\u7528\u6307\u5357\uff1a\u7406\u89e3 Git \u5de5\u4f5c\u539f\u7406",authors:"josh-cena",tags:["git","guide"]},u=void 0,l={permalink:"/blog/2020/09/23/git-usage",source:"@site/blog/2020-09-23-git-usage.md",title:"Git \u4f7f\u7528\u6307\u5357\uff1a\u7406\u89e3 Git \u5de5\u4f5c\u539f\u7406",description:"\u8fd9\u7bc7\u6587\u7ae0\u662f\u4eceC \u793e\u7684\u65b0\u6210\u5458\u7ec3\u624b repo \u7684 README.md \u7684\u7b2c\u4e00\u8282\u8f6c\u79fb\u8fc7\u6765\u7684\uff0c\u6dfb\u52a0\u4e86\u4e00\u4e9b\u5185\u5bb9\uff0c\u5e76\u505a\u4e86\u76f8\u5e94\u7684\u7ffb\u8bd1\u3002\uff08\u539f\u6587\u7528\u82f1\u6587\u7684\u539f\u56e0\uff0c\u5e94\u8be5\u662f sy \u5927\u4f6c\u548c\u6211\u90fd\u66f4\u4e60\u60ef\u7528\u82f1\u8bed\u5199\u6280\u672f\u76f8\u5173\u7684\u5185\u5bb9\u5427\u2026\u2026\uff09",date:"2020-09-23T00:00:00.000Z",formattedDate:"2020\u5e749\u670823\u65e5",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"guide",permalink:"/blog/tags/guide"}],readingTime:11.615,truncated:!0,authors:[{name:"Josh Cena",title:"\u4fe1\u606f\u5316\u793e 2022 \u5c4a\u793e\u957f",url:"https://github.com/Josh-Cena",imageURL:"https://github.com/Josh-Cena.png",key:"josh-cena"}],frontMatter:{title:"Git \u4f7f\u7528\u6307\u5357\uff1a\u7406\u89e3 Git \u5de5\u4f5c\u539f\u7406",authors:"josh-cena",tags:["git","guide"]},prevItem:{title:"\u6590\u6ce2\u90a3\u5951\u6570\u5217",permalink:"/blog/2020/10/10/algorithm1"},nextItem:{title:"Welcome",permalink:"/blog/2020/09/02/welcome"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u7bc7\u6587\u7ae0\u662f\u4ece",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Computerization/New-member-practice-commit"},"C \u793e\u7684\u65b0\u6210\u5458\u7ec3\u624b repo")," \u7684 README.md \u7684\u7b2c\u4e00\u8282\u8f6c\u79fb\u8fc7\u6765\u7684\uff0c\u6dfb\u52a0\u4e86\u4e00\u4e9b\u5185\u5bb9\uff0c\u5e76\u505a\u4e86\u76f8\u5e94\u7684\u7ffb\u8bd1\u3002\uff08\u539f\u6587\u7528\u82f1\u6587\u7684\u539f\u56e0\uff0c\u5e94\u8be5\u662f sy \u5927\u4f6c\u548c\u6211\u90fd\u66f4\u4e60\u60ef\u7528\u82f1\u8bed\u5199\u6280\u672f\u76f8\u5173\u7684\u5185\u5bb9\u5427\u2026\u2026\uff09")),(0,i.kt)("p",null,"\u6dfb\u52a0\u6587\u4ef6\u65f6\uff0c\u4f60\u65e2\u53ef\u4ee5\u7528\u5e26\u56fe\u5f62\u7528\u6237\u754c\u9762\uff08GUI\uff09\u7684 GitHub Desktop\uff0c\u4e5f\u53ef\u4ee5\u7528\u547d\u4ee4\u884c\u3002\u4f60\u53ef\u4ee5\u4ece GUI \u5165\u624b\uff0c\u4f46\u4f60\u4f1a\u6709\u4e00\u5929\u610f\u8bc6\u5230\u547d\u4ee4\u884c\u529f\u80fd\u7684\u5f3a\u5927\uff0c\u5f00\u59cb\u7528\u5b83\u7684\u3002\u53e6\u5916\uff0cVisual Studio Code \u7684\u7528\u6237\u4eec\u4e5f\u53ef\u4ee5\u8bd5\u8bd5\u5176\u81ea\u5e26\u7684\u6e90\u4ee3\u7801\u7ba1\u7406\u5de5\u5177\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u89c9\u5f97\u6709\u5fc5\u8981\u7ed9\u4f60\u89e3\u91ca\u4f60\u6bcf\u4e00\u6b65\u7a76\u7adf\u5728\u505a\u4ec0\u4e48\uff0c\u800c\u4e0d\u662f\u8ba9\u4f60\u673a\u68b0\u5730\u91cd\u590d\u6211\u4eec\u5199\u597d\u7684\u6559\u7a0b\u3002\u8fd9\u5bf9\u4f60\u5c24\u5176\u6709\u5e2e\u52a9\uff0c\u56e0\u4e3a\u6559\u7a0b\u901a\u5e38\u90fd\u628a\u4e8b\u60c5\u60f3\u5f97\u5f88\u5b8c\u7f8e\uff0c\u4f46\u73b0\u5b9e\u5219\u5145\u6ee1\u4e86\u5404\u79cd\u610f\u5916\u548c\u53d8\u6570\u3002\u9605\u8bfb\u65f6\uff0c\u6211\u4eec\u5e76\u4e0d\u8981\u6c42\u4f60\u4e8b\u5148\u61c2\u5f97\u4efb\u4f55 Git \u64cd\u4f5c\u3002"))}f.isMDXComponent=!0}}]);