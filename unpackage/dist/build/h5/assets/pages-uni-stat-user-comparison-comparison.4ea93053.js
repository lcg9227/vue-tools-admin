import{_ as a,L as t,o as e,c as s,w as r,i,a as n,d as l,X as o,e as u,r as d,F as c,f as _,g as m,t as p,aC as h}from"./index-1840daf0.js";import{_ as f}from"./uni-stat-breadcrumb.de45d9d7.js";import{_ as y}from"./uni-data-select.cd3809bc.js";import{_ as g}from"./qiun-data-charts.71de60b1.js";import{g as b,d as v,s as D}from"./util.c0ea891f.js";const w=a({data:()=>({query:{dimension:"day",appid:"",version_id:"",start_time:b(0)},platforms:[],dayChartsData:[],monChartsData:[]}),created(){this.debounceGet=v((()=>{this.getChartData(this.query),this.getRangeCountData(this.query,"month")}),300)},watch:{query:{deep:!0,handler(a){this.debounceGet()}}},computed:{chartsData(){return[...this.dayChartsData,...this.monChartsData]},versionQuery(){const{appid:a}=this.query;return D({appid:a})}},methods:{getChartData(a,e="day"){a=JSON.parse(JSON.stringify(a));const s=b(0);if(a.start_time>=s){const t=(new Date).getTime();a.start_time=[s,t],a=D(a,!0)}else a=D(a);t.database().collection("uni-stat-result").where(a).field("active_user_count,new_user_count,total_users,platform_id").groupBy("platform_id").groupField(`sum(active_user_count) as ${e}_active_user_count, sum(new_user_count) as ${e}_new_user_count, max(total_users) as ${e}_total_users`).get().then((a=>{const t=a.result.data;this.initChartOption(t,"dayChartsData")}))},getRangeCountData(a,e){a=D(a);t.database().collection("uni-stat-result").where(a).field(`active_user_count, new_user_count, platform_id, ${e}(add(new Date(0),start_time), "Asia/Shanghai") as ${e},year(add(new Date(0),start_time), "Asia/Shanghai") as year`).groupBy(`year, ${e?e+",":""}platform_id`).groupField(`sum(active_user_count) as ${e}_active_user_count, sum(new_user_count) as ${e}_new_user_count`).orderBy(`year asc, ${e} asc`).get().then((a=>{const t=a.result.data;this.initChartOption(t,"monChartsData","month")}))},initChartOption(a,e,s="day"){t.database().collection("uni-stat-app-platforms").get().then((t=>{const r=[{field:`${s}_new_user_count`,title:("day"===s?"日":"月")+"新增用户对比",series:[{data:[]}]},{field:`${s}_active_user_count`,title:("day"===s?"日":"月")+"活跃用户对比",series:[{data:[]}]}];"day"===s&&r.unshift({field:"day_total_users",title:"总用户数对比",series:[{data:[]}]}),this[e]=r;const i=t.result.data,n={};i.forEach((a=>{n[a._id]=a.name}));for(const s of this[e]){const t=s.series[0].data,e=JSON.parse(JSON.stringify(n));for(const r of a)for(const a in r)if(s.field===a){const s=r.platform_id,i={name:e[s],value:r[a]};t.push(i),delete e[s]}for(const a in e){const s={name:e[a],value:0};t.push(s)}}}))}}},[["render",function(a,t,b,v,D,w){const x=_(m("uni-stat-breadcrumb"),f),q=i,C=_(m("uni-data-select"),y),$=_(m("uni-datetime-picker"),h),V=_(m("qiun-data-charts"),g);return e(),s(q,{class:"fix-top-window"},{default:r((()=>[n(q,{class:"uni-header"},{default:r((()=>[n(x,{class:"uni-stat-breadcrumb-on-phone"}),n(q,{class:"uni-group hide-on-phone"},{default:r((()=>[n(q,{class:"uni-sub-title"},{default:r((()=>[l("多个指标在不同平台数据的占比，可以直观看出各个平台引流的效果")])),_:1})])),_:1})])),_:1}),n(q,{class:"uni-container"},{default:r((()=>[n(q,{class:"uni-stat--x flex mb-m",style:{padding:"0 15px"}},{default:r((()=>[n(C,{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",modelValue:D.query.appid,"onUpdate:modelValue":t[0]||(t[0]=a=>D.query.appid=a),clear:!1},null,8,["modelValue"]),n(C,{collection:"opendb-app-versions",where:w.versionQuery,class:"ml-m",field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择",modelValue:D.query.version_id,"onUpdate:modelValue":t[1]||(t[1]=a=>D.query.version_id=a)},null,8,["where","modelValue"]),n(q,{class:"flex"},{default:r((()=>[n(q,{class:"ml-m label-text hide-on-phone"},{default:r((()=>[l("日期选择:")])),_:1}),n($,{type:"date",modelValue:D.query.start_time,"onUpdate:modelValue":t[2]||(t[2]=a=>D.query.start_time=a),returnType:"timestamp",clearIcon:!1,class:o(["uni-stat-datetime-picker",{"uni-stat__actived":!!D.query.start_time}])},null,8,["modelValue","class"])])),_:1})])),_:1}),n(q,{class:"dispaly-grid"},{default:r((()=>[(e(!0),u(c,null,d(w.chartsData,((a,t)=>(e(),s(q,{key:t,class:"uni-stat--x uni-charts-box1"},{default:r((()=>[n(q,{class:"label-text",style:{margin:"5px 0 20px 0"}},{default:r((()=>[l(p(w.chartsData[t].title),1)])),_:2},1024),n(V,{type:"ring",chartData:w.chartsData[t],echartsH5:"",echartsApp:""},null,8,["chartData"])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-edc2efa9"]]);export{w as default};
