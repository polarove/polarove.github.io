import{n as m,o as t,c as s,F as p,p as d,a as c,b as a,q as u,s as h,_ as f,w as x,u as $,t as l}from"./CYRqbXn_.js";const y={class:"p-0"},k={class:"inline-block mx-12"},v=m({__name:"v-theme",setup(n){const r=[{name:"light",icon:"mdi:white-balance-sunny"},{name:"dark",icon:"mdi:weather-night"},{name:"sephia",icon:"mdi:palette"},{name:"system",icon:"mdi:monitor"}];return(e,i)=>{const _=h;return t(),s("ul",y,[(t(),s(p,null,d(r,(o,B)=>c("li",k,[a(_,{name:o.icon,class:u(["text-8xl cursor-pointer hover:color-$primary",{"color-$primary":e.$colorMode.preference===o.name}]),onClick:F=>e.$colorMode.preference=o.name},null,8,["name","class","onClick"])])),64))])}}}),C={},g={class:"flex flex-col items-center justify-center h-100vh"},w={class:"text-12"},M={class:"text-12"};function b(n,r){const e=v,i=$;return t(),s("section",g,[a(i,null,{default:x(()=>[a(e),c("p",w,"颜色模式： "+l(n.$colorMode.value),1),c("p",M,"主题偏好： "+l(n.$colorMode.preference),1)]),_:1})])}const V=f(C,[["render",b]]);export{V as default};
