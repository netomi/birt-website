"use strict";(self.webpackChunkbirt_website=self.webpackChunkbirt_website||[]).push([[8235],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6967:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],u={id:"t_data-sources",title:"Data Sources",sidebar_label:"Data Sources"},l=void 0,c={unversionedId:"t_data-sources",id:"t_data-sources",isDocsHomePage:!1,title:"Data Sources",description:"About Data Sources and Data Sets",source:"@site/docs/t_data-sources.md",sourceDirName:".",slug:"/t_data-sources",permalink:"/birt-website/docs/t_data-sources",editUrl:"https://github.com/eclipse-birt/birt-website/tree/main/docs/t_data-sources.md",tags:[],version:"current",frontMatter:{id:"t_data-sources",title:"Data Sources",sidebar_label:"Data Sources"},sidebar:"someSidebar",previous:{title:"Grids",permalink:"/birt-website/docs/t_grids"},next:{title:"Data Sets",permalink:"/birt-website/docs/t_data-sets"}},s=[{value:"About Data Sources and Data Sets",id:"about-data-sources-and-data-sets",children:[],level:2},{value:"Build a Data Source",id:"build-a-data-source",children:[],level:2},{value:"Edit a Data Source",id:"edit-a-data-source",children:[],level:2}],p={toc:s};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about-data-sources-and-data-sets"},"About Data Sources and Data Sets"),(0,o.kt)("p",null,"BIRT reports use a data source element to connect to a database or other data provider. BIRT uses a data set element to retrieve data from the data provider. Think of the data source as a connection, and the data set as a query."),(0,o.kt)("h2",{id:"build-a-data-source"},"Build a Data Source"),(0,o.kt)("p",null,"Let's build our data source:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open the Data Explorer View, if it is not already visible.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the Data Sources node within the tree view.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Right-click to open the context menu.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose New Data Source. The New Data Source dialog appears.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Choose Classic Models Inc. Sample Database.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'In the Data Source Name field, enter "Sample".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click Next.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click Finish."))),(0,o.kt)("p",null,"Your new data source appears within the Data Sources node in the Data Explorer."),(0,o.kt)("h2",{id:"edit-a-data-source"},"Edit a Data Source"),(0,o.kt)("p",null,"For future reference, let's review how you would go about changing the data source:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Find or open the Data Explorer View.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open the Data Sources node.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Double-click the data source.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Data Source editor opens. You can make any needed changes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click OK to save your changes."))),(0,o.kt)("p",null,"BIRT reports use a data source element to connect to a database or other data provider. BIRT uses a data set element to retrieve data from the data provider. Think of the data source as a connection, and the data set as a query."))}d.isMDXComponent=!0}}]);