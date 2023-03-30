import{_ as s,L as o,u as a,v as e,x as r,y as t,o as d,c as l,w as n,i as u,a as i,d as m,m as w,p as f,f as c,g as p,q as P}from"./index-1840daf0.js";import{_}from"./uni-match-media.4afde5e4.js";import{_ as h}from"./uni-easyinput.d81ce094.js";import{_ as g}from"./uni-forms-item.9c81628b.js";import{_ as y}from"./uni-forms.506a0a8f.js";import{m as b}from"./login-page.mixin.465c5476.js";import{p as x}from"./password.2f1f10a9.js";const D=o.importObject("uni-id-co",{customUI:!0});const V=s({mixins:[b],data:()=>({focusOldPassword:!1,focusNewPassword:!1,focusNewPassword2:!1,formData:{oldPassword:"",newPassword:"",newPassword2:""},rules:{oldPassword:{rules:[{required:!0,errorMessage:"请输入新密码"},{pattern:/^.{6,20}$/,errorMessage:"密码为6 - 20位"}]},...x.getPwdRules("newPassword","newPassword2")},logo:"/static/logo.png"}),onReady(){this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=s=>{var o=s||window.event;o&&13==o.keyCode&&this.submit()}},methods:{submit(){this.$refs.form.validate().then((s=>{let{oldPassword:o,newPassword:d}=this.formData;D.updatePwd({oldPassword:o,newPassword:d}).then((s=>{a("uni_id_token"),e("uni_id_token_expired",0),r({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})})).catch((s=>{t({content:s.message,showCancel:!1})}))})).catch((s=>{let o=s[0].key;o=o.replace(o[0],o[0].toUpperCase()),this["focus"+o]=!0}))}}},[["render",function(s,o,a,e,r,t){const b=w,x=u,D=f,V=c(p("uni-match-media"),_),j=c(p("uni-easyinput"),h),k=c(p("uni-forms-item"),g),v=P,B=c(p("uni-forms"),y);return d(),l(x,{class:"uni-content"},{default:n((()=>[i(V,{"min-width":690},{default:n((()=>[i(x,{class:"login-logo"},{default:n((()=>[i(b,{src:r.logo},null,8,["src"])])),_:1}),i(D,{class:"title title-box"},{default:n((()=>[m("修改密码")])),_:1})])),_:1}),i(B,{ref:"form",value:r.formData,"err-show-type":"toast"},{default:n((()=>[i(k,{name:"oldPassword"},{default:n((()=>[i(j,{focus:r.focusOldPassword,onBlur:o[0]||(o[0]=s=>r.focusOldPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.oldPassword,"onUpdate:modelValue":o[1]||(o[1]=s=>r.formData.oldPassword=s),placeholder:"请输入旧密码"},null,8,["focus","modelValue"])])),_:1}),i(k,{name:"newPassword"},{default:n((()=>[i(j,{focus:r.focusNewPassword,onBlur:o[2]||(o[2]=s=>r.focusNewPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.newPassword,"onUpdate:modelValue":o[3]||(o[3]=s=>r.formData.newPassword=s),placeholder:"请输入新密码"},null,8,["focus","modelValue"])])),_:1}),i(k,{name:"newPassword2"},{default:n((()=>[i(j,{focus:r.focusNewPassword2,onBlur:o[4]||(o[4]=s=>r.focusNewPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.newPassword2,"onUpdate:modelValue":o[5]||(o[5]=s=>r.formData.newPassword2=s),placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),i(v,{class:"uni-btn send-btn-box",type:"primary",onClick:t.submit},{default:n((()=>[m("提交")])),_:1},8,["onClick"])])),_:1},8,["value"])])),_:1})}],["__scopeId","data-v-310f3ac4"]]);export{V as default};