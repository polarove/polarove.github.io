import{e as x,m as y,p as v,q as p,s as h,o as a,f as d,w as i,l as z,d as g,k as c,v as $,x as k,c as _,F as S,r as b,y as w,b as u,a as N,t as B,z as T,T as A,A as C,_ as R}from"./B8YhEB9P.js";import{_ as V}from"./Uj1lYJV8.js";const D=x({__name:"i18n-link",props:{to:{},activeStyle:{}},setup(m){const{$localeRoute:s}=y(),e=m,n=v(),l=p(()=>{const t=s(e.to);return typeof t=="string"?n.path===h().resolve(t).path:n.path===t.path}),r=p(()=>l.value?{fontWeight:"bold",...e.activeStyle}:{});return(t,o)=>{const f=V;return a(),d(f,{to:c(s)(t.to),style:$(c(r))},{default:i(()=>[z(t.$slots,"default",{},()=>[o[0]||(o[0]=g("Go to Page"))])]),_:3},8,["to","style"])}}}),F={class:"mt-1 xl:text-size-$text-xl lg:text-size-$text-lg md:text-size-$text-md sm:text-size-$text-sm lt-sm:text-size-$text-lt-sm"},G=x({__name:"index",props:{routes:{}},setup(m){const s=k(!1);return setTimeout(()=>s.value=!0),(e,n)=>{const l=C,r=D;return a(),d(A,{name:"fade",tag:"ul",class:"p-0"},{default:i(()=>[(a(!0),_(S,null,b(e.routes,(t,o)=>w((a(),_("li",{class:"inline-block text-center sm:px-$px-sm py-$py",key:o,style:$([{"transition-delay":`${o*67}ms`}])},[u(r,{class:"decoration-none color-inherit hover:color-$primary","aria-label":e.$t(t.translateKey),activeClass:"color-$primary!",to:t.path,prefetch:!0},{default:i(()=>[u(l,{name:t.icon,class:"vertical-middle xl:text-size-$icon-xl lg:text-size-$icon-lg md:text-size-$icon-md sm:text-size-$icon-sm lt-sm:text-size-$icon-lt-sm"},null,8,["name"]),N("div",F,B(e.$t(t.translateKey)),1)]),_:2},1032,["aria-label","to"])],4)),[[T,c(s)]])),128))]),_:1})}}}),L=R(G,[["__scopeId","data-v-f52ec191"]]);export{L as _};
