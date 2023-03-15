"use strict";(self.webpackChunkbirt_website=self.webpackChunkbirt_website||[]).push([[8444],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(r),b=i,d=g["".concat(p,".").concat(b)]||g[b]||c[b]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6065:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={id:"integrating",title:"Integrating BIRT",sidebar_label:"Integrating BIRT"},p=void 0,l={unversionedId:"integrating/integrating",id:"integrating/integrating",isDocsHomePage:!1,title:"Integrating BIRT",description:"Integration Points",source:"@site/docs/integrating/integrating.md",sourceDirName:"integrating",slug:"/integrating/integrating",permalink:"/birt-website/docs/integrating/integrating",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/integrating/integrating.md",tags:[],version:"current",frontMatter:{id:"integrating",title:"Integrating BIRT",sidebar_label:"Integrating BIRT"},sidebar:"someSidebar",previous:{title:"Visual Properties",permalink:"/birt-website/docs/t_visual-properties"},next:{title:"Viewer Setup",permalink:"/birt-website/docs/integrating/viewer-setup"}},u=[{value:"Integration Points",id:"integration-points",children:[],level:3},{value:"Example Report Viewer (Java EE App/Plugin)",id:"example-report-viewer-java-ee-appplugin",children:[{value:"Web Viewer Links",id:"web-viewer-links",children:[],level:4}],level:3}],c={toc:u};function g(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"integration-points"},"Integration Points"),(0,a.kt)("p",null,"BIRT supplies several APIs and an Example Java EE application for generating and viewing reports. The major APIs are the Design Engine API(DE API), Report Engine API(RE API) and the Chart Engine API (CE API). These pages describe the various APIs and illustrate examples on their usage. In addition to the APIs, BIRT supports scripting using Rhino within report designs. A primer is available to get started scripting."),(0,a.kt)("h3",{id:"example-report-viewer-java-ee-appplugin"},"Example Report Viewer (Java EE App/Plugin)"),(0,a.kt)("p",null,"The BIRT Viewer can be used in a variety of ways:\nNote that the BIRT Viewer requires that cookies be enabled."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As a stand-alone, pre-built web application for running and viewing reports."),(0,a.kt)("li",{parentName:"ul"},"As a starter web application that you can customize to your needs."),(0,a.kt)("li",{parentName:"ul"},"Called through the BIRT tag library."),(0,a.kt)("li",{parentName:"ul"},"As a plugin in existing RCP applications.")),(0,a.kt)("h4",{id:"web-viewer-links"},"Web Viewer Links"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/birt-website/docs/integrating/viewer-setup"},"Integrating the BIRT Viewer")," explains how to deploy the BIRT viewer onto your own application server. The explanation uses Apache Jakarta Tomcat as the sample deployment target."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/birt-website/docs/integrating/viewer-usage"},"Using the BIRT Viewer")," discusses the viewer operation URLs, parameters and settings."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/birt-website/docs/integrating/using-php"},"Using the Viewer from PHP")," discusses how to run BIRT reports from a non-Java scripting environment such as PHP."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/birt-website/docs/integrating/viewer-usage"},"Viewer Tag Library")," discusses how to integrate BIRT using the Tag Libraries."),(0,a.kt)("p",null,"The viewer code is available in the BIRT source repository in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse/birt/tree/master/viewer/org.eclipse.birt.report.viewer"},"org.eclipse.birt.report.viewer")," project. See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse/birt/blob/master/README.md"},"BIRT build instructions")," for information on how to access the sources and build the viewer."))}g.isMDXComponent=!0}}]);