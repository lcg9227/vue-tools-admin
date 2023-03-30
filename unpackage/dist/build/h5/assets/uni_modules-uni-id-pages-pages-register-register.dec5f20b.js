import{_ as a,L as e,s,A as o,n as t,o as r,c as l,w as i,i as u,a as n,d as m,m as d,p as c,f as p,g as f,q as h}from"./index-1840daf0.js";import{_ as g}from"./uni-match-media.4afde5e4.js";import{_ as w}from"./uni-easyinput.d81ce094.js";import{_}from"./uni-forms-item.9c81628b.js";import{_ as k}from"./uni-captcha.b75bfb3d.js";import{_ as b}from"./uni-id-pages-agreements.c385da94.js";import{_ as V}from"./uni-forms.506a0a8f.js";import{r as D}from"./validator.df3ca405.js";import{m as y}from"./login-page.mixin.465c5476.js";import"./uni-popup-dialog.38c2e6df.js";import"./password.2f1f10a9.js";const j=e.importObject("uni-id-co");const x=a({mixins:[y],data:()=>({formData:{username:"",nickname:"",password:"",password2:"",captcha:""},rules:D,focusUsername:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}),onReady(){this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=a=>{var e=a||window.event;e&&13==e.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((a=>4!=this.formData.captcha.length?(this.$refs.captcha.focusCaptchaInput=!0,s({title:"请输入验证码",icon:"none",duration:3e3})):this.needAgreements&&!this.agree?this.$refs.agreements.popup((()=>{this.submitForm(a)})):void this.submitForm(a))).catch((a=>{let e=a[0].key;e=e.replace(e[0],e[0].toUpperCase()),this["focus"+e]=!0}))},submitForm(a){j.registerUser(this.formData).then((a=>{this.loginSuccess(a)})).catch((a=>{console.log(a.message),this.$refs.captcha.getImageCaptcha()}))},navigateBack(){o()},toLogin(){t({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByEmail(){t({url:"/uni_modules/uni-id-pages/pages/register/register-by-email"})}}},[["render",function(a,e,s,o,t,D){const y=d,j=u,x=c,B=p(f("uni-match-media"),g),C=p(f("uni-easyinput"),w),U=p(f("uni-forms-item"),_),v=p(f("uni-captcha"),k),P=p(f("uni-id-pages-agreements"),b),$=h,q=p(f("uni-forms"),V);return r(),l(j,{class:"uni-content"},{default:i((()=>[n(B,{"min-width":690},{default:i((()=>[n(j,{class:"login-logo"},{default:i((()=>[n(y,{src:t.logo},null,8,["src"])])),_:1}),n(x,{class:"title title-box"},{default:i((()=>[m("用户名密码注册")])),_:1})])),_:1}),n(q,{ref:"form",value:t.formData,rules:t.rules,"validate-trigger":"submit","err-show-type":"toast"},{default:i((()=>[n(U,{name:"username",required:""},{default:i((()=>[n(C,{inputBorder:!1,focus:t.focusUsername,onBlur:e[0]||(e[0]=a=>t.focusUsername=!1),class:"input-box",placeholder:"请输入用户名",modelValue:t.formData.username,"onUpdate:modelValue":e[1]||(e[1]=a=>t.formData.username=a),trim:"both"},null,8,["focus","modelValue"])])),_:1}),n(U,{name:"nickname"},{default:i((()=>[n(C,{inputBorder:!1,focus:t.focusNickname,onBlur:e[2]||(e[2]=a=>t.focusNickname=!1),class:"input-box",placeholder:"请输入用户昵称",modelValue:t.formData.nickname,"onUpdate:modelValue":e[3]||(e[3]=a=>t.formData.nickname=a),trim:"both"},null,8,["focus","modelValue"])])),_:1}),n(U,{name:"password",modelValue:t.formData.password,"onUpdate:modelValue":e[6]||(e[6]=a=>t.formData.password=a),required:""},{default:i((()=>[n(C,{inputBorder:!1,focus:t.focusPassword,onBlur:e[4]||(e[4]=a=>t.focusPassword=!1),class:"input-box",maxlength:"20",placeholder:"请输入"+("weak"==a.config.passwordStrength?"6":"8")+"-16位密码",type:"password",modelValue:t.formData.password,"onUpdate:modelValue":e[5]||(e[5]=a=>t.formData.password=a),trim:"both"},null,8,["focus","placeholder","modelValue"])])),_:1},8,["modelValue"]),n(U,{name:"password2",modelValue:t.formData.password2,"onUpdate:modelValue":e[9]||(e[9]=a=>t.formData.password2=a),required:""},{default:i((()=>[n(C,{inputBorder:!1,focus:t.focusPassword2,onBlur:e[7]||(e[7]=a=>t.focusPassword2=!1),class:"input-box",placeholder:"再次输入密码",maxlength:"20",type:"password",modelValue:t.formData.password2,"onUpdate:modelValue":e[8]||(e[8]=a=>t.formData.password2=a),trim:"both"},null,8,["focus","modelValue"])])),_:1},8,["modelValue"]),n(U,null,{default:i((()=>[n(v,{ref:"captcha",scene:"register",modelValue:t.formData.captcha,"onUpdate:modelValue":e[10]||(e[10]=a=>t.formData.captcha=a)},null,8,["modelValue"])])),_:1}),n(P,{scope:"register",ref:"agreements"},null,512),n($,{class:"uni-btn",type:"primary",onClick:D.submit},{default:i((()=>[m("注册")])),_:1},8,["onClick"]),n($,{onClick:D.navigateBack,class:"register-back"},{default:i((()=>[m("返回")])),_:1},8,["onClick"]),n(B,{"min-width":690},{default:i((()=>[n(j,{class:"link-box"},{default:i((()=>[n(x,{class:"link",onClick:D.registerByEmail},{default:i((()=>[m("邮箱验证码注册")])),_:1},8,["onClick"]),n(x,{class:"link",onClick:D.toLogin},{default:i((()=>[m("已有账号？点此登录")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["value","rules"])])),_:1})}],["__scopeId","data-v-7ae85e3a"]]);export{x as default};
