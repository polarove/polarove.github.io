import{d,M as f,f as l,N as p,O as m,J as v,L as i}from"./CMkNwC5I.js";import{a as g,u as h}from"./Dq0EfJkT.js";import{f as _}from"./71hZt4jh.js";import{_ as y}from"./CYdpmeu_.js";import"./BpsAjrQ0.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(s){const{query:t}=f(s),n=l(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=g();return{navigation:a}}const{data:o}=await h(`content-navigation-${m(n.value)}`,()=>_(n.value));return{navigation:o}},render(s){const t=v(),{navigation:n}=s,o=e=>i(y,{to:e._path},()=>e.title),a=(e,u)=>i("ul",u?{"data-level":u}:null,e.map(r=>r.children?i("li",null,[o(r),a(r.children,u+1)]):i("li",null,o(r)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),D=C;export{D as default};
