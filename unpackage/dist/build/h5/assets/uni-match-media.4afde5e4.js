import{_ as t,ag as i,K as e,O as a,o as h,c as n,w as s,a0 as d,i as r}from"./index-1840daf0.js";let m;const o=t({name:"UniMatchMedia",props:{width:{type:[Number,String],default:""},minWidth:{type:[Number,String],default:""},maxWidth:{type:[Number,String],default:""},height:{type:[Number,String],default:""},minHeight:{type:[Number,String],default:""},maxHeight:{type:[Number,String],default:""},orientation:{type:String,default:""}},data:()=>({matches:!0}),mounted(){m=i(this),m.observe({width:this.width,maxWidth:this.maxWidth,minWidth:this.minWidth,height:this.height,minHeight:this.minHeight,maxHeight:this.maxHeight,orientation:this.orientation},(t=>{this.matches=t}))},destroyed(){m.disconnect()}},[["render",function(t,i,m,o,u,g){const l=r;return e((h(),n(l,null,{default:s((()=>[d(t.$slots,"default",{},void 0,!0)])),_:3},512)),[[a,u.matches]])}],["__scopeId","data-v-7c2f3829"]]);export{o as _};