import{f as _,o as i,c as s,F as $,r as v,a as l,b as c,n as m,g as f,h as k,i as y,p as g,_ as x,t as p,w as b}from"./cHOcdirH.js";const C={class:"p-0"},w={class:"inline-block mx-12"},L=_({__name:"v-theme",setup(n){const e=[{name:"light",icon:"mdi:white-balance-sunny"},{name:"dark",icon:"mdi:weather-night"},{name:"sephia",icon:"mdi:palette"},{name:"system",icon:"mdi:monitor"}];return(a,r)=>{const o=f;return i(),s("ul",C,[(i(),s($,null,v(e,(t,h)=>l("li",w,[c(o,{name:t.icon,class:m(["text-8xl cursor-pointer hover:color-$primary",{"color-$primary":a.$colorMode.preference===t.name}]),onClick:u=>a.$colorMode.preference=t.name},null,8,["name","class","onClick"])])),64))])}}}),T=Symbol.for("nuxt:client-only"),S=_({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(n,{slots:e,attrs:a}){const r=k(!1);return y(()=>{r.value=!0}),g(T,!0),o=>{var d;if(r.value)return(d=e.default)==null?void 0:d.call(e);const t=e.fallback||e.placeholder;if(t)return t();const h=o.fallback||o.placeholder||"",u=o.fallbackTag||o.placeholderTag||"span";return s(u,a,h)}}}),z={},B={class:"ma-auto xl:mt-30vh lg:mt-25vh md:mt-20vh sm:mt-15vh xs:mt-10vh lt-xs:mt-10vh"},M={class:"text-center self-center"},F={class:"text-center"};function I(n,e){const a=f,r=L,o=S;return i(),s("div",B,[l("section",M,[l("h1",null,p(n.$t("hello")),1),l("h1",null,p(n.$t("whoami")),1),l("h1",null,[c(a,{name:"mdi:alphabetical-variant",class:m(["text-6xl cursor-pointer hover:color-$primary",n.$getLocale()==="en"?"color-$primary":"color-$inherit"]),onClick:e[0]||(e[0]=t=>n.$switchLocale("en"))},null,8,["class"]),c(a,{name:"mdi:ideogram-chinese-japanese-korean-variant",class:m(["text-6xl cursor-pointer hover:color-$primary",n.$getLocale()==="zh"?"color-$primary":"color-$inherit"]),onClick:e[1]||(e[1]=t=>n.$switchLocale("zh"))},null,8,["class"])])]),l("section",F,[c(o,null,{default:b(()=>[c(r)]),_:1})])])}const O=x(z,[["render",I]]);export{O as default};
