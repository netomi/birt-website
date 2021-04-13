(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{130:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(f,l(l({ref:t},c),{},{components:r})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(130)),i={id:"t_cascading-styles",title:"Cascading Styles",sidebar_label:"Cascading Styles"},l={unversionedId:"t_cascading-styles",id:"t_cascading-styles",isDocsHomePage:!1,title:"Cascading Styles",description:"About Style Cascade",source:"@site/docs/t_cascading-styles.md",slug:"/t_cascading-styles",permalink:"/docs/t_cascading-styles",editUrl:"https://github.com/eclipse/birt-website/docs/docs/t_cascading-styles.md",version:"current",sidebar_label:"Cascading Styles",sidebar:"someSidebar",previous:{title:"Data Properties",permalink:"/docs/t_data-properties"},next:{title:"Create a Report",permalink:"/docs/t_create-a-report"}},s=[{value:"About Style Cascade",id:"about-style-cascade",children:[]},{value:"Other Default Styles",id:"other-default-styles",children:[]}],c={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"about-style-cascade"},"About Style Cascade"),Object(o.b)("p",null,'We\'ve mentioned that BIRT uses CSS to define the styles for report items, and we saw how to define and apply our own style. BIRT also follows the "cascade" part of Cascading Style Sheets: you can set a property once for the report, or a container, and have that value cascade down through the contents of the container.'),Object(o.b)("p",null,"In BIRT, Grid, List and Table items are containers: they can hold other report items. The report itself is the ultimate container for all report items.\nSetting Report-Wide Properties"),Object(o.b)("p",null,"Our report currently uses the default font: a serif style. (Actually, by default BIRT uses the font set in your browser. Many browsers use a serif style by default, but if you've changed your default browser font, that is how the report will appear.)"),Object(o.b)("p",null,"Let's use a sans-serif style instead. We do this by using a pre-defined BIRT style called report, which specifies the default style for report items. If you are familiar with CSS, this is like defining a style that selects the HTML body tag."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Open or locate the Outline view.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Scroll down to the bottom to find the Styles node.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Open the Styles node.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Right-click and select New Style.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'From the General page, check the Predefined Style radio button and select "report" from the associated drop down list.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click OK")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Go to the Styles node in the Outline view and find the style named "report". Double-click it to open the Style editor.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'In the Font page, choose "sans serif" as the font type.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click OK."))),Object(o.b)("p",null,"All items in your report will change to sans-serif font."),Object(o.b)("p",null,'The names "serif" and "sans-serif" are defined by CSS: they are generic font styles that don\'t depend on the specific fonts installed on a machine. CSS generic font names avoid dependencies on specific fonts installed on the browser machine; something that is important if your reports will be appear as part of a public web site. You can also use font lists as in CSS. For example: "Helvetica, Arial, sans-serif".'),Object(o.b)("h2",{id:"other-default-styles"},"Other Default Styles"),Object(o.b)("p",null,"BIRT defines default styles for most report items and for list and table bands. See the ROM Styles Specification for the complete list."),Object(o.b)("p",null,"The Styles node displays the styles that apply to each of the report items. However, there are additional styles that apply to grouping levels and other contexts. If you wish to use one of these, simply create a style with the required name.\nCheck the Reporte"),Object(o.b)("p",null,"Let's click the preview tab to see how our report looks after the formatting. Not bad, but we still need a better report heading."))}p.isMDXComponent=!0}}]);