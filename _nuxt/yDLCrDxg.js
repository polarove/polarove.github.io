import{n as _,o,c as t,F as m,p,a as i,b as s,q as d,s as u,_ as h,w as f,u as x,t as $}from"./CmcVtmQt.js";const y={class:"p-0"},k={class:"inline-block mx-12"},v=_({__name:"v-theme",setup(c){const a=[{name:"light",icon:"mdi:white-balance-sunny"},{name:"dark",icon:"mdi:weather-night"},{name:"sephia",icon:"mdi:palette"},{name:"system",icon:"mdi:monitor"}];return(e,r)=>{const l=u;return o(),t("ul",y,[(o(),t(m,null,p(a,(n,B)=>i("li",k,[s(l,{name:n.icon,class:d(["text-8xl cursor-pointer hover:color-$primary",{"color-$primary":e.$colorMode.preference===n.name}]),onClick:M=>e.$colorMode.preference=n.name},null,8,["name","class","onClick"])])),64))])}}}),C={},g={class:"flex flex-col items-center justify-center h-100vh"},w={class:"text-12"};function b(c,a){const e=v,r=x;return o(),t("section",g,[s(r,null,{default:f(()=>[s(e),i("p",w,$(c.$colorMode.value),1)]),_:1})])}const N=h(C,[["render",b]]);export{N as default};
