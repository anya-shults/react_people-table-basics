(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{34:function(e,t,c){},36:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(25),a=c(8),r=c(3),s=(c(34),c(12)),j=c.n(s),i=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},l=c(2),o=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(a.c,{className:i,to:"..",children:"Home"}),Object(l.jsx)(a.c,{className:i,to:"people",children:"People"})]})})}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)(r.b,{})})]})},b=c(23),h=c(4),d=c(0),O=(c(36),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})});function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var u=function(e){var t=e.person;return Object(l.jsx)("td",{children:Object(l.jsx)(a.b,{to:t.slug,className:j()({"has-text-danger":"f"===t.sex}),children:t.name})})},p=function(e){var t=e.parent,c=e.parentName;return Object(l.jsx)(l.Fragment,{children:t?Object(l.jsx)(u,{person:t}):Object(l.jsx)("td",{children:c||"-"})})},m=function(e){var t=e.person,c=Object(r.r)().slug;return Object(l.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":t.slug===c}),children:[Object(l.jsx)(u,{person:t}),Object(l.jsx)("td",{children:t.sex}),Object(l.jsx)("td",{children:t.born}),Object(l.jsx)("td",{children:t.died}),Object(l.jsx)(p,{parent:t.mother,parentName:t.motherName}),Object(l.jsx)(p,{parent:t.father,parentName:t.fatherName})]})},f=function(e){var t=e.people;return Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(m,{person:e},e.slug)}))})},v=function(e){var t=e.people;return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)(f,{people:t})]})},g=function(){var e=Object(d.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(d.useState)(""),r=Object(h.a)(a,2),s=r[0],j=r[1],i=Object(d.useState)(!0),o=Object(h.a)(i,2),u=o[0],p=o[1];Object(d.useEffect)((function(){x().then(n).catch((function(){j("Something went wrong")})).finally((function(){p(!1)}))}),[]);var m=Object(d.useMemo)((function(){return c.map((function(e){var t=c.find((function(t){return t.name===e.motherName})),n=c.find((function(t){return t.name===e.fatherName}));return Object(b.a)(Object(b.a)({},e),{},{mother:t,father:n})}))}),[c]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[u&&Object(l.jsx)(O,{}),!!s&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!u&&!s&&0!==m.length&&Object(l.jsx)(v,{people:m}),!u&&!s&&!m.length&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})]})},N=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})},y=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:"title",children:"Home Page"})})},w=function(){return Object(l.jsx)(a.a,{children:Object(l.jsx)(r.e,{children:Object(l.jsxs)(r.c,{path:"/",element:Object(l.jsx)(o,{}),children:[Object(l.jsx)(r.c,{index:!0,element:Object(l.jsx)(y,{})}),Object(l.jsx)(r.c,{path:"people",element:Object(l.jsx)(g,{}),children:Object(l.jsx)(r.c,{path:":slug?",element:Object(l.jsx)(g,{})})}),Object(l.jsx)(r.c,{path:"home",element:Object(l.jsx)(r.a,{to:"..",replace:!0})}),Object(l.jsx)(r.c,{path:"*",element:Object(l.jsx)(N,{})})]})})})};c(37),c(38);Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(w,{}))}},[[39,1,2]]]);
//# sourceMappingURL=main.120a72a6.chunk.js.map