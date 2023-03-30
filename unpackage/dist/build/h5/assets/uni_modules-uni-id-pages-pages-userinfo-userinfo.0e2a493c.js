import{_ as e,L as t,o as i,c as s,w as o,C as a,b as l,m as n,i as c,T as d,U as r,V as u,n as h,W as p,H as g,J as f,f as m,g as y,G as b,X as w,Y as k,Z as _,x as S,$ as x,a as C,a0 as v,d as I,t as B,p as T,N as M,a1 as L,a2 as P,q as $,s as F,e as A,F as j}from"./index-1840daf0.js";import{_ as U}from"./uni-popup-dialog.38c2e6df.js";const z=e({name:"cloud-image",emits:["click"],props:{mode:{type:String,default:()=>"widthFix"},src:{default:()=>""},width:{type:String,default:()=>"100rpx"},height:{type:String,default:()=>"100rpx"}},watch:{src:{handler(e){e&&"cloud://"==e.substring(0,8)?t.getTempFileURL({fileList:[e]}).then((e=>{this.cSrc=e.fileList[0].tempFileURL})):this.cSrc=e},immediate:!0}},methods:{onClick(){this.$emit("click")}},data:()=>({cSrc:!1})},[["render",function(e,t,d,r,u,h){const p=n,g=c;return i(),s(g,{onClick:h.onClick,style:a([{width:d.width,height:d.height},{"justify-content":"center"}])},{default:o((()=>[u.cSrc?(i(),s(p,{key:0,style:a({width:d.width,height:d.height}),src:u.cSrc,mode:d.mode},null,8,["style","src","mode"])):l("",!0)])),_:1},8,["onClick","style"])}]]);const O=e({data:()=>({isPC:!1}),props:{width:{type:String,default:()=>"50px"},height:{type:String,default:()=>"50px"},border:{type:Boolean,default:()=>!1}},async mounted(){this.isPC=!["ios","android"].includes(d().platform)},computed:{hasLogin:()=>r.hasLogin,userInfo:()=>r.userInfo,avatar_file:()=>r.userInfo.avatar_file},methods:{setAvatarFile(e){u.updateUserInfo({avatar_file:e})},uploadAvatarImg(e){if(!this.hasLogin)return h({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"});const i={quality:100,width:600,height:600,resize:!0};p({count:1,crop:i,success:async e=>{let s=e.tempFiles[0],o={extname:s.name.split(".")[s.name.split(".").length-1]},a=e.tempFilePaths[0];a=await new Promise((e=>{this.isPC||h({url:"/uni_modules/uni-id-pages/pages/userinfo/cropImage/cropImage?path="+a+`&options=${JSON.stringify(i)}`,animationType:"fade-in",events:{success:t=>{e(t)}},complete(e){}})}));let l=this.userInfo._id+""+Date.now();o.name=l,g({title:"更新中",mask:!0});let{fileID:n}=await t.uploadFile({filePath:a,cloudPath:l,fileType:"image"});o.url=n,f(),this.setAvatarFile(o)}})}}},[["render",function(e,t,l,n,d,r){const u=m(y("cloud-image"),z),h=m(y("uni-icons"),b),p=c;return i(),s(p,{onClick:r.uploadAvatarImg,class:w(["box",{showBorder:l.border}]),style:a({width:l.width,height:l.height,lineHeight:l.height})},{default:o((()=>[r.avatar_file?(i(),s(u,{key:0,src:r.avatar_file.url,width:l.width,height:l.height},null,8,["src","width","height"])):(i(),s(h,{key:1,style:a({width:l.width,height:l.height,lineHeight:l.height}),class:"chooseAvatar",type:"plusempty",size:"30",color:"#dddddd"},null,8,["style"]))])),_:1},8,["onClick","class","style"])}],["__scopeId","data-v-9650e156"]]);const N=e({name:"UniListItem",emits:["click","switchChange"],props:{direction:{type:String,default:"row"},title:{type:String,default:""},note:{type:String,default:""},ellipsis:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},clickable:{type:Boolean,default:!1},showArrow:{type:[Boolean,String],default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:{type:String,default:""},badgeType:{type:String,default:"success"},badgeStyle:{type:Object,default:()=>({})},rightText:{type:String,default:""},thumb:{type:String,default:""},thumbSize:{type:String,default:"base"},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:()=>({type:"",color:"#000000",size:20,customPrefix:""})},border:{type:Boolean,default:!0},customStyle:{type:Object,default:()=>({padding:"",backgroundColor:"#FFFFFF"})},keepScrollPosition:{type:Boolean,default:!1}},watch:{"customStyle.padding":{handler(e){"number"==typeof e&&(e+="");let t=e.split(" ");1===t.length?this.padding={top:e,right:e,bottom:e,left:e}:2===t.length?this.padding={top:e[0],right:e[1],bottom:e[0],left:e[1]}:4===t.length&&(this.padding={top:e[0],right:e[1],bottom:e[2],left:e[3]})},immediate:!0}},data:()=>({isFirstChild:!1,padding:{top:"",right:"",bottom:"",left:""}}),mounted(){this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0))},methods:{getForm(e="uniList"){let t=this.$parent,i=t.$options.name;for(;i!==e;){if(t=t.$parent,!t)return!1;i=t.$options.name}return t},onClick(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},onSwitchChange(e){this.$emit("switchChange",e.detail)},openPage(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi(e){let t={url:this.to,success:e=>{this.$emit("click",{data:e})},fail:e=>{this.$emit("click",{data:e})}};switch(e){case"navigateTo":default:h(t);break;case"redirectTo":S(t);break;case"reLaunch":_(t);break;case"switchTab":k(t)}}}},[["render",function(e,t,d,r,u,h){const p=c,g=n,f=m(y("uni-icons"),b),k=T,_=m(y("uni-badge"),x),S=M;return i(),s(p,{class:w([{"uni-list-item--disabled":d.disabled},"uni-list-item"]),style:a({"background-color":d.customStyle.backgroundColor}),"hover-class":!d.clickable&&!d.link||d.disabled||d.showSwitch?"":"uni-list-item--hover",onClick:h.onClick},{default:o((()=>[u.isFirstChild?l("",!0):(i(),s(p,{key:0,class:w(["border--left",{"uni-list--border":d.border}])},null,8,["class"])),C(p,{class:w(["uni-list-item__container",{"container--right":d.showArrow||d.link,"flex--direction":"column"===d.direction}]),style:a({paddingTop:u.padding.top,paddingLeft:u.padding.left,paddingRight:u.padding.right,paddingBottom:u.padding.bottom})},{default:o((()=>[v(e.$slots,"header",{},(()=>[C(p,{class:"uni-list-item__header"},{default:o((()=>[d.thumb?(i(),s(p,{key:0,class:"uni-list-item__icon"},{default:o((()=>[C(g,{src:d.thumb,class:w(["uni-list-item__icon-img",["uni-list--"+d.thumbSize]])},null,8,["src","class"])])),_:1})):d.showExtraIcon?(i(),s(p,{key:1,class:"uni-list-item__icon"},{default:o((()=>[C(f,{customPrefix:d.extraIcon.customPrefix,color:d.extraIcon.color,size:d.extraIcon.size,type:d.extraIcon.type},null,8,["customPrefix","color","size","type"])])),_:1})):l("",!0)])),_:1})]),!0),v(e.$slots,"body",{},(()=>[C(p,{class:w(["uni-list-item__content",{"uni-list-item__content--center":d.thumb||d.showExtraIcon||d.showBadge||d.showSwitch}])},{default:o((()=>[d.title?(i(),s(k,{key:0,class:w(["uni-list-item__content-title",[0!==d.ellipsis&&d.ellipsis<=2?"uni-ellipsis-"+d.ellipsis:""]])},{default:o((()=>[I(B(d.title),1)])),_:1},8,["class"])):l("",!0),d.note?(i(),s(k,{key:1,class:"uni-list-item__content-note"},{default:o((()=>[I(B(d.note),1)])),_:1})):l("",!0)])),_:1},8,["class"])]),!0),v(e.$slots,"footer",{},(()=>[d.rightText||d.showBadge||d.showSwitch?(i(),s(p,{key:0,class:w(["uni-list-item__extra",{"flex--justify":"column"===d.direction}])},{default:o((()=>[d.rightText?(i(),s(k,{key:0,class:"uni-list-item__extra-text"},{default:o((()=>[I(B(d.rightText),1)])),_:1})):l("",!0),d.showBadge?(i(),s(_,{key:1,type:d.badgeType,text:d.badgeText,"custom-style":d.badgeStyle},null,8,["type","text","custom-style"])):l("",!0),d.showSwitch?(i(),s(S,{key:2,disabled:d.disabled,checked:d.switchChecked,onChange:h.onSwitchChange},null,8,["disabled","checked","onChange"])):l("",!0)])),_:1},8,["class"])):l("",!0)]),!0)])),_:3},8,["class","style"]),d.showArrow||d.link?(i(),s(f,{key:1,size:16,class:"uni-icon-wrapper",color:"#bbb",type:"arrowright"})):l("",!0)])),_:3},8,["class","style","hover-class","onClick"])}],["__scopeId","data-v-68b438a7"]]);const q=e({name:"uniList","mp-weixin":{options:{multipleSlots:!1}},props:{stackFromEnd:{type:Boolean,default:!1},enableBackToTop:{type:[Boolean,String],default:!1},scrollY:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!0},renderReverse:{type:Boolean,default:!1}},created(){this.firstChildAppend=!1},methods:{loadMore(e){this.$emit("scrolltolower")},scroll(e){this.$emit("scroll",e)}}},[["render",function(e,t,a,n,d,r){const u=c;return i(),s(u,{class:"uni-list uni-border-top-bottom"},{default:o((()=>[a.border?(i(),s(u,{key:0,class:"uni-list--border-top"})):l("",!0),v(e.$slots,"default",{},void 0,!0),a.border?(i(),s(u,{key:1,class:"uni-list--border-bottom"})):l("",!0)])),_:3})}],["__scopeId","data-v-c1d7c358"]]);t.database().collection("uni-id-users");const G=t.importObject("uni-id-co");const R=e({emits:["success"],computed:{},data:()=>({}),methods:{beforeGetphonenumber:async()=>await new Promise(((e,i)=>{g({mask:!0}),wx.checkSession({success(){e(),f()},fail(){L({success({code:s}){t.importObject("uni-id-co",{customUI:!0}).loginByWeixin({code:s}).then((t=>{e()})).catch((e=>{console.log(e),i()})).finally((e=>{f()}))},fail:e=>{console.error(e),i()}})}})})),async bindMobileByMpWeixin(e){"getPhoneNumber:ok"==e.detail.errMsg?(await this.beforeGetphonenumber(),G.bindMobileByMpWeixin(e.detail).then((e=>{this.$emit("success")})).finally((e=>{this.closeMe()}))):this.closeMe()},async open(){this.$refs.popup.open()},closeMe(e){this.$refs.popup.close()}}},[["render",function(e,t,a,l,n,d){const r=T,u=$,h=c,p=m(y("uni-popup"),P);return i(),s(p,{ref:"popup",type:"bottom"},{default:o((()=>[C(h,{class:"box"},{default:o((()=>[C(r,{class:"headBox"},{default:o((()=>[I("绑定资料")])),_:1}),C(r,{class:"tip"},{default:o((()=>[I("将一键获取你的手机号码绑定你的个人资料")])),_:1}),C(h,{class:"btnBox"},{default:o((()=>[C(r,{onClick:d.closeMe,class:"close"},{default:o((()=>[I("关闭")])),_:1},8,["onClick"]),C(u,{class:"agree uni-btn",type:"primary","open-type":"getPhoneNumber",onGetphonenumber:d.bindMobileByMpWeixin},{default:o((()=>[I("获取")])),_:1},8,["onGetphonenumber"])])),_:1})])),_:1})])),_:1},512)}],["__scopeId","data-v-1edc5089"]]),W=t.importObject("uni-id-co");const E=e({computed:{userInfo:()=>r.userInfo},data:()=>({univerifyStyle:{authButton:{title:"本机号码一键绑定"},otherLoginButton:{title:"其他号码绑定"}},hasPwd:!1,showLoginManage:!1}),async onShow(){this.univerifyStyle.authButton.title="本机号码一键绑定",this.univerifyStyle.otherLoginButton.title="其他号码绑定"},async onLoad(e){e.showLoginManage&&(this.showLoginManage=!0);let t=await W.getAccountInfo();this.hasPwd=t.isPasswordSet},methods:{login(){h({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd",complete:e=>{}})},logout(){u.logout()},bindMobileSuccess(){u.updateUserInfo()},changePassword(){h({url:"/uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd",complete:e=>{}})},bindMobile(){this.bindMobileBySmsCode()},univerify(){L({provider:"univerify",univerifyStyle:this.univerifyStyle,success:async e=>{W.bindMobileByUniverify(e.authResult).then((e=>{u.updateUserInfo()})).catch((e=>{console.log(e)})).finally((e=>{uni.closeAuthView()}))},fail:e=>{console.log(e),"30002"!=e.code&&"30001"!=e.code||this.bindMobileBySmsCode()}})},bindMobileBySmsCode(){h({url:"./bind-mobile/bind-mobile"})},setNickname(e){e?(u.updateUserInfo({nickname:e}),this.$refs.dialog.close()):this.$refs.dialog.open()},deactivate(){h({url:"/uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate"})},async bindThirdAccount(e){const i=t.importObject("uni-id-co"),s={weixin:"wx_openid",alipay:"ali_openid",apple:"apple_openid",qq:"qq_openid"}[e.toLowerCase()];this.userInfo[s]?(await i["unbind"+e](),await u.updateUserInfo()):L({provider:e.toLowerCase(),onlyAuthorize:!0,success:async t=>{const s=await i["bind"+e]({code:t.code});s.errCode&&F({title:s.errMsg||"绑定失败",duration:3e3}),await u.updateUserInfo()},fail:async e=>{console.log(e),f()}})}}},[["render",function(e,t,a,n,d,r){const u=m(y("uni-id-pages-avatar"),O),h=c,p=m(y("uni-list-item"),N),g=m(y("uni-list"),q),f=m(y("uni-popup-dialog"),U),b=m(y("uni-popup"),P),w=m(y("uni-id-pages-bind-mobile"),R),k=$;return i(),s(h,{class:"uni-content"},{default:o((()=>[C(h,{class:"avatar"},{default:o((()=>[C(u,{width:"260rpx",height:"260rpx"})])),_:1}),C(g,null,{default:o((()=>[C(p,{class:"item",onClick:t[0]||(t[0]=e=>r.setNickname("")),title:"昵称",rightText:r.userInfo.nickname||"未设置",link:""},null,8,["rightText"]),C(p,{class:"item",onClick:r.bindMobile,title:"手机号",rightText:r.userInfo.mobile||"未绑定",link:""},null,8,["onClick","rightText"]),r.userInfo.email?(i(),s(p,{key:0,class:"item",title:"电子邮箱",rightText:r.userInfo.email},null,8,["rightText"])):l("",!0),d.hasPwd?(i(),s(p,{key:1,class:"item",onClick:r.changePassword,title:"修改密码",link:""},null,8,["onClick"])):l("",!0)])),_:1}),C(g,{class:"mt10"},{default:o((()=>[C(p,{onClick:r.deactivate,title:"注销账号",link:"navigateTo"},null,8,["onClick"])])),_:1}),C(b,{ref:"dialog",type:"dialog"},{default:o((()=>[C(f,{mode:"input",value:r.userInfo.nickname,onConfirm:r.setNickname,title:"设置昵称",placeholder:"请输入要设置的昵称"},null,8,["value","onConfirm"])])),_:1},512),C(w,{ref:"bind-mobile-by-sms",onSuccess:r.bindMobileSuccess},null,8,["onSuccess"]),d.showLoginManage?(i(),A(j,{key:0},[r.userInfo._id?(i(),s(k,{key:0,onClick:r.logout},{default:o((()=>[I("退出登录")])),_:1},8,["onClick"])):(i(),s(k,{key:1,onClick:r.login},{default:o((()=>[I("去登录")])),_:1},8,["onClick"]))],64)):l("",!0)])),_:1})}],["__scopeId","data-v-3ac98ea6"]]);export{E as default};