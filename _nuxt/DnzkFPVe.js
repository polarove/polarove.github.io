import{d as D,u as I,c as b,w as n,o as d,a as e,b as t,t as o,j as m,h as v,g as y,r as f,F as _,_ as C,y as x,q as F,x as N}from"./BgiEJgDV.js";import{_ as Y}from"./CGIyCyp3.js";import{_ as B}from"./5-DWYNfg.js";import{_ as M}from"./0emTC0vg.js";import{u as T}from"./C3X2yLmH.js";const A={class:"text-center"},P={class:"text-center"},R={class:"mx-1"},V={class:"mx-1"},E={class:"mx-1"},J={class:"mx-1"},S={class:"mx-1"},q={class:"text-center"},H={class:"mx-1"},L={class:"mx-1"},O={class:"text-center"},W={class:"position-absolute top-3 right-3 opacity-33 hover:opacity-100 cursor-pointer"},G={class:"vertical-mid"},Q={class:"md:flex justify-between lt-md:grid lt-md:grid-cols-[2fr_2fr] lt-md:gap-4"},U={class:"vertical-mid"},X={class:"md:flex justify-between lt-md:grid lt-md:grid-cols-[2fr_2fr] lt-md:gap-4"},Z={class:"vertical-mid"},tt={class:"grid grid-cols-[3fr_3fr_3fr] items-center"},et={class:"text-center"},at={class:"text-end"},st=D({__name:"index",setup(ot){const{ts:u}=I();T({title:u("title",{name:u("name")}),description:u("description")});const $=new Date("2001-11-16"),k=new Date("2023-07-01"),g=s=>{const a=new Date,l=s.getFullYear(),i=s.getMonth(),c=a.getFullYear(),h=a.getMonth();return(((c-l)*12+(h-i))/12).toFixed(1)},w=[{translateKey:"ability.project.warframe-team",url:"https://warframe.team"},{translateKey:"ability.project.fissure-clock",url:"http://warframe.team:3001"},{translateKey:"ability.project.yaoren",url:"http://warframe.team:3002"},{translateKey:"ability.project.stylized",url:"http://warframe.team:4001"}],K=[{translateKey:"cz-translated-changelog",url:"https://github.com/polarove/cz-translated-changelog-zh-cn"},{translateKey:"cz-translated-lint",url:"https://github.com/polarove/translated-lint-zh-cn"}],z=[{company:"ability.company.tukun",url:"https://gtesim.cn",incumbency:!0,position:"ability.position.Front-end-engineer",start:"2023/11",until:"Now"},{company:"ability.company.renshu",url:"http://fjrcsz.com/",incumbency:!1,position:"ability.position.Java-engineer",start:"2023/06",until:"2023/07"}],j=[{path:"/",translateKey:"home",icon:"mdi:home"},{path:"/resume",translateKey:"resume",icon:"mdi:script-text"},{path:"/projects",translateKey:"project",icon:"mdi:file-code-outline"},{path:"/articles",translateKey:"article",icon:"mdi:file-document-edit-outline"}];return(s,a)=>{const l=C,i=Y,c=B,h=M;return d(),b(h,{routes:j},{default:n(()=>[e(c,{class:"mt-32 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4"},{default:n(()=>[t("h1",A,o(s.$t("name")),1),t("p",P,[t("span",R,o(s.$t("gender")),1),a[0]||(a[0]=m("/ ")),t("span",V,o(s.$t("age.value",{age:g(v($))})),1),a[1]||(a[1]=m("/ ")),t("span",E,o(s.$t("major.value")),1),a[2]||(a[2]=m("/ ")),t("span",J,o(s.$t("education.value")),1),a[3]||(a[3]=m("/ ")),t("span",S,o(s.$t("political.value")),1)]),t("p",q,[t("span",H,o(s.$t("working.time",{year:"2023-07"})),1),t("span",L,o(s.$t("working.value",{value:g(v(k))})),1)]),t("p",O,[e(i,{to:"https://github.com/polarove",class:"color-inherit"},{default:n(()=>[e(l,{name:"mdi:github",class:"text-3xl mx-2"})]),_:1}),e(i,{to:"https://steamcommunity.com/id/AnibeRzzzz/",class:"color-inherit"},{default:n(()=>[e(l,{name:"mdi:steam",class:"text-3xl mx-2"})]),_:1}),e(i,{to:"https://space.bilibili.com/471857522",class:"color-inherit"},{default:n(()=>[e(l,{name:"pv:bilibili-filled",class:"text-3xl mx-2 color-#fb7299"})]),_:1})]),t("div",W,[e(l,{name:"mdi:download",class:"text-2xl vertical-mid"}),t("span",G,o(s.$t("pdf")),1)])]),_:1}),e(c,{class:"mt-8 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4"},{default:n(()=>[t("h2",null,o(s.$t("ability.index")),1),t("p",null,o(s.$t("ability.p0")),1),t("p",null,o(s.$t("ability.p1")),1),t("div",Q,[(d(),y(_,null,f(w,(r,p)=>e(i,{key:p,class:"inline-block flex-1 text-inherit decoration-none md:mx-4",to:r.url,target:"_blank"},{default:n(()=>[e(c,{class:"b-solid py-4 px-6 hover:b-[--primary] cursor-pointer"},{default:n(()=>[e(l,{name:"mdi:web",class:"vertical-mid text-xl mr-1"}),t("span",U,o(s.$t(r.translateKey)),1),e(l,{name:"mdi:arrow-top-right"})]),_:2},1024)]),_:2},1032,["to"])),64))]),t("p",null,o(s.$t("ability.p2")),1),t("p",null,o(s.$t("ability.p3")),1),t("p",null,o(s.$t("ability.p4")),1),t("p",null,o(s.$t("ability.p5")),1),e(i,{class:"inline-block flex-1 text-inherit decoration-none md:mx-4",to:"https://api.warframe.team/swagger/index.html",target:"_blank"},{default:n(()=>[e(c,{class:"py-4 px-6 hover:b-[--primary] cursor-pointer"},{default:n(()=>[a[4]||(a[4]=t("span",null," Swagger page ",-1)),e(l,{name:"mdi:arrow-top-right"})]),_:1})]),_:1}),t("p",null,[t("span",null,o(s.$t("ability.p6"))+" ",1),e(i,{class:"color-inherit hover:color-[--primary]",to:"http://warframe.team:8080/"},{default:n(()=>[a[5]||(a[5]=m("Jenkins")),e(l,{name:"mdi:arrow-top-right"})]),_:1}),a[7]||(a[7]=m(" / ")),e(i,{class:"color-inherit hover:color-[--primary]",to:"https://coding.net/"},{default:n(()=>[a[6]||(a[6]=m("Tencent Coding")),e(l,{name:"mdi:arrow-top-right"})]),_:1})]),t("p",null,[t("span",null,o(s.$t("ability.p7.seg0")),1),a[9]||(a[9]=m(" ")),e(i,{class:"color-inherit hover:color-[--primary]",to:"https://developer.android.google.cn/courses/pathways/compose"},{default:n(()=>[a[8]||(a[8]=m("Jetpack compose")),e(l,{name:"mdi:arrow-top-right"})]),_:1}),a[10]||(a[10]=m(" ")),t("span",null,o(s.$t("ability.p7.seg1")),1)]),t("p",null,o(s.$t("ability.p8")),1),t("div",X,[(d(),y(_,null,f(K,(r,p)=>e(i,{key:p,class:"inline-block flex-1 text-inherit decoration-none md:mx-4",to:r.url,target:"_blank"},{default:n(()=>[e(c,{class:x([[p!=0&&p!=w.length?"mx-4":""],"py-4 px-6 hover:b-[--primary] cursor-pointer"])},{default:n(()=>[e(l,{name:"mdi:github",class:"vertical-mid text-xl mr-2"}),t("span",Z,o(r.translateKey),1),e(l,{name:"mdi:arrow-top-right"})]),_:2},1032,["class"])]),_:2},1032,["to"])),64))])]),_:1}),e(c,{class:"my-8 ma-auto xl:w-45vw md:w-67vw sm:w-82vw lt-sm:w-82vw p-4"},{default:n(()=>[a[11]||(a[11]=t("h2",null,"工作经历",-1)),(d(),y(_,null,f(z,(r,p)=>e(c,{key:p,class:x([[r.incumbency?"b-[--primary]":""],"py-4 px-6 hover:b-[--primary] cursor-pointer not-first:mt-4"])},{default:n(()=>[t("div",tt,[t("h2",null,[r.incumbency?(d(),b(l,{key:0,name:"mdi:star",class:"text-2xl vertical-mid color-orange"})):F("",!0),e(i,{class:"text-inherit decoration-none hover:color-[--primary] vertical-mid",to:r.url,target:"_blank"},{default:n(()=>[t("span",null,o(s.$t(r.company)),1),e(l,{name:"mdi:arrow-top-right"})]),_:2},1032,["to"])]),t("h2",et,o(r.start)+" - "+o(r.until),1),t("h2",at,o(s.$t(r.position)),1)])]),_:2},1032,["class"])),64))]),_:1})]),_:1})}}}),ct=N(st,[["__scopeId","data-v-869ee80b"]]);export{ct as default};
