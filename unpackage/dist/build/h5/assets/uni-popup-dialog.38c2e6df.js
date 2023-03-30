import{ao as e,_ as t,o,c as l,w as i,a,X as p,d as u,t as n,a0 as s,p as c,i as d,I as r}from"./index-1840daf0.js";const h={data:()=>({}),created(){this.popup=this.getParent()},methods:{getParent(e="uniPopup"){let t=this.$parent,o=t.$options.name;for(;o!==e;){if(t=t.$parent,!t)return!1;o=t.$options.name}return t}}},f={en:{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"},"zh-Hans":{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"},"zh-Hant":{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}},{t:g}=e(f);const m=t({name:"uniPopupDialog",mixins:[h],emits:["confirm","close"],props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:()=>({dialogType:"error",focus:!1,val:""}),computed:{okText(){return this.confirmText||g("uni-popup.ok")},closeText(){return this.cancelText||g("uni-popup.cancel")},placeholderText(){return this.placeholder||g("uni-popup.placeholder")},titleText(){return this.title||g("uni-popup.title")}},watch:{type(e){this.dialogType=e},mode(e){"input"===e&&(this.dialogType="info")},value(e){this.val=e}},created(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted(){this.focus=!0},methods:{onOk(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog(){this.$emit("close"),this.beforeClose||this.popup.close()},close(){this.popup.close()}}},[["render",function(e,t,h,f,g,m){const y=c,T=d,x=r;return o(),l(T,{class:"uni-popup-dialog"},{default:i((()=>[a(T,{class:"uni-dialog-title"},{default:i((()=>[a(y,{class:p(["uni-dialog-title-text",["uni-popup__"+g.dialogType]])},{default:i((()=>[u(n(m.titleText),1)])),_:1},8,["class"])])),_:1}),"base"===h.mode?(o(),l(T,{key:0,class:"uni-dialog-content"},{default:i((()=>[s(e.$slots,"default",{},(()=>[a(y,{class:"uni-dialog-content-text"},{default:i((()=>[u(n(h.content),1)])),_:1})]),!0)])),_:3})):(o(),l(T,{key:1,class:"uni-dialog-content"},{default:i((()=>[s(e.$slots,"default",{},(()=>[a(x,{class:"uni-dialog-input",modelValue:g.val,"onUpdate:modelValue":t[0]||(t[0]=e=>g.val=e),type:"text",placeholder:m.placeholderText,focus:g.focus},null,8,["modelValue","placeholder","focus"])]),!0)])),_:3})),a(T,{class:"uni-dialog-button-group"},{default:i((()=>[a(T,{class:"uni-dialog-button",onClick:m.closeDialog},{default:i((()=>[a(y,{class:"uni-dialog-button-text"},{default:i((()=>[u(n(m.closeText),1)])),_:1})])),_:1},8,["onClick"]),a(T,{class:"uni-dialog-button uni-border-left",onClick:m.onOk},{default:i((()=>[a(y,{class:"uni-dialog-button-text uni-button-color"},{default:i((()=>[u(n(m.okText),1)])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:3})}],["__scopeId","data-v-fcded7e8"]]);export{m as _};