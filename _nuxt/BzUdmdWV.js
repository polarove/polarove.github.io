import{d as $,C as h,D as v,f as u,i as g,o,c as f,w as c,B as n,j as z,h as p,n as x,k,g as _,r as S,F as b,E as w,m as B,b as d,A as N,P,a as C,t as K,v as R,q as A,s as D}from"./CMkNwC5I.js";import{_ as T}from"./CYdpmeu_.js";const V=$({__name:"i18n-link",props:{to:{},activeStyle:{}},setup(m){const{$localeRoute:a}=h(),e=m,l=v(),r=u(()=>{const t=a(e.to);return typeof t=="string"?l.path===g().resolve(t).path:l.path===t.path}),i=u(()=>r.value?{fontWeight:"bold",...e.activeStyle}:{});return(t,s)=>{const y=T;return o(),f(y,{to:p(a)(t.to),style:x(p(i))},{default:c(()=>[n(t.$slots,"default",{},()=>[s[0]||(s[0]=z("Go to Page"))])]),_:3},8,["to","style"])}}}),E={class:"mt-1 xl:text-size-$text-xl lg:text-size-$text-lg md:text-size-$text-md sm:text-size-$text-sm lt-sm:text-size-$text-lt-sm"},F=$({__name:"index",props:{routes:{}},setup(m){const a=k(!1);return setTimeout(()=>a.value=!0),(e,l)=>{const r=A,i=V;return o(),f(w,{name:"fade",tag:"ul",class:"p-0"},{default:c(()=>[(o(!0),_(b,null,S(e.routes,(t,s)=>B((o(),_("li",{class:"inline-block text-center sm:px-$px-sm py-$py",key:s,style:x([{"transition-delay":`${s*67}ms`}])},[n(e.$slots,"link",{prop:{route:t,index:s}},()=>[d(i,{class:N(["decoration-none color-inherit hover:color-$primary",[e.$localePath(t.path)==(e._.provides[P]||e.$route).path?"color-$primary!":""]]),"aria-label":e.$t(t.translateKey),to:t.path,prefetch:!0},{default:c(()=>[n(e.$slots,"icon",{icon:t.icon},()=>[d(r,{name:t.icon,class:"vertical-middle xl:text-size-$icon-xl lg:text-size-$icon-lg md:text-size-$icon-md sm:text-size-$icon-sm lt-sm:text-size-$icon-lt-sm"},null,8,["name"])],!0),n(e.$slots,"translation",{prop:{index:s,translateKey:t.translateKey}},()=>[C("div",E,K(e.$t(t.translateKey)),1)],!0)]),_:2},1032,["aria-label","class","to"])],!0)],4)),[[R,p(a)]])),128))]),_:3})}}}),L=D(F,[["__scopeId","data-v-4dff340f"]]);export{L as _,V as a};
