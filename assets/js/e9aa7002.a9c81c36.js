"use strict";(self.webpackChunkbirt_website=self.webpackChunkbirt_website||[]).push([[699],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5407:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"t_data-sets",title:"Data Sets",sidebar_label:"Data Sets"},s=void 0,p={unversionedId:"t_data-sets",id:"t_data-sets",isDocsHomePage:!1,title:"Data Sets",description:"Build a Data Set",source:"@site/docs/t_data-sets.md",sourceDirName:".",slug:"/t_data-sets",permalink:"/birt-website/docs/t_data-sets",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/t_data-sets.md",tags:[],version:"current",frontMatter:{id:"t_data-sets",title:"Data Sets",sidebar_label:"Data Sets"},sidebar:"someSidebar",previous:{title:"Data Sources",permalink:"/birt-website/docs/t_data-sources"},next:{title:"Data Properties",permalink:"/birt-website/docs/t_data-properties"}},u=[{value:"Build a Data Set",id:"build-a-data-set",children:[],level:2},{value:"Data Set Editor Pages",id:"data-set-editor-pages",children:[],level:2},{value:"Database Browser",id:"database-browser",children:[],level:2},{value:"Test the Query",id:"test-the-query",children:[],level:2},{value:"Edit a Data Set",id:"edit-a-data-set",children:[],level:2}],d={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"build-a-data-set"},"Build a Data Set"),(0,i.kt)("p",null,"Now we're ready to build and test our data set."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Find or open the Data Explorer view.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select the Data Sets node in the tree view.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Right-click to open the context menu. (We\'ll just say "open the context menu" or "choose x from the context menu" from now on.)')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select New Data Set. The New Data Set dialog will appear.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Enter "Customers" for the Data Set Name field.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ensure that the Data Source field shows the Sample data source created above.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Ensure that the Data Set Type field shows "SQL Select Query".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click Next.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter the following Query: SELECT *")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"FROM CUSTOMERS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"WHERE COUNTRY = 'USA'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click Finish."))),(0,i.kt)("h2",{id:"data-set-editor-pages"},"Data Set Editor Pages"),(0,i.kt)("p",null,"The data set editor now opens. Let's take a look at the pages within this editor. The data set editor provides the following pages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Query - Displays your SQL SELECT statement. This is where you create and change your SQL query. Once you have the basic query, you can add a WHERE clause, adjust the set of selected columns, and more. Use the SQL editor to add computed columns that are to be calculated by the database engine. Give such columns a name using the SQL ALIAS clause.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data Source - Displays the name of the data source for this data set so you can view or change it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Preview Results - Lets you test your query and see the output. Very handy to make sure that the data is right before you proceed with report design.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Computed Columns - Computed columns are calculated by BIRT and appear to the rest of the report just like any other column. You can use JavaScript expressions, and even call into Java for advanced business logic.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Parameters - SQL SELECT statements can include input parameters that pass data into the query. They are marked using the SQL "?" symbol in the query. This page lets you give the parameters a name, a default value, and so on. There must be a one-to-one correspondence between entries on this page and the "?" symbols in your query.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Filters - Additional filters that BIRT applies to your data. Filters restrict the data passed to the report. The WHERE clause is also a filter: one executed by the database. This tab lets you define additional filters using BIRT (JavaScript) scripting.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Output Columns - Shows the columns within the query, and lets you define a column alias for use in the report. Note that this view shows the columns as the report will see them. The Query page shows the columns as selected from the database."))),(0,i.kt)("h2",{id:"database-browser"},"Database Browser"),(0,i.kt)("p",null,"Switch to the Query page if you're not already there. This page provides a simple database browser."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Expand the Sample data source to see the schemas within this database. There is only one: "CLASSICMODELS".')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Expand "CLASSICMODELS" to see the list of tables in the database.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Expand a table to see its columns.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"This editor supports drag and drop."))),(0,i.kt)("h2",{id:"test-the-query"},"Test the Query"),(0,i.kt)("p",null,"With the data set editor open, do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the Preview Results item.")),(0,i.kt)("p",null,"The preview page appears. This page shows the columns selected in your query listed across the top. The actual rows in your query appear down the page."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify that the list of customers appears.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click OK to close the data set editor."))),(0,i.kt)("p",null,"If an error dialog appears, check the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Your Eclipse is installed in a directory without spaces.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You have typed the SQL statement as shown above.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You have not put a semi-colon at the end of your statement."))),(0,i.kt)("h2",{id:"edit-a-data-set"},"Edit a Data Set"),(0,i.kt)("p",null,"Your new data set appears in the Data Explorer along with your data source. We can use the data set editor to change the data set, and to test it to make sure it returns the correct data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Find or open the Data Explorer.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open the Data Sets node.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Double-click the Customers data set. The Data Set editor opens."))))}c.isMDXComponent=!0}}]);