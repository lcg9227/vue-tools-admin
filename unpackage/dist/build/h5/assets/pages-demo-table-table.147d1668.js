import{_ as e,o as a,c as d,w as t,i as s,a as n,d as l,t as o,e as u,r as c,F as r,I as i,q as m,f as D,g as h,h as g,j as p,k as f,l as _}from"./index-1840daf0.js";import{_ as b}from"./uni-pagination.904e9ef3.js";const C=[{date:"2020-09-01",name:"Dcloud1",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-02",name:"Dcloud2",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-03",name:"Dcloud3",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-04",name:"Dcloud4",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-05",name:"Dcloud5",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-06",name:"Dcloud6",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-07",name:"Dcloud7",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-08",name:"Dcloud8",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-09",name:"Dcloud9",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-10",name:"Dcloud10",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-11",name:"Dcloud11",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-12",name:"Dcloud12",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-13",name:"Dcloud13",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-14",name:"Dcloud14",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-15",name:"Dcloud15",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-16",name:"Dcloud16",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-01",name:"Dcloud17",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-02",name:"Dcloud18",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-03",name:"Dcloud19",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-04",name:"Dcloud20",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-05",name:"Dcloud21",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-06",name:"Dcloud22",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-07",name:"Dcloud23",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-08",name:"Dcloud24",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-09",name:"Dcloud25",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-10",name:"Dcloud26",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-11",name:"Dcloud27",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-12",name:"Dcloud28",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-13",name:"Dcloud29",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-14",name:"Dcloud30",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-15",name:"Dcloud31",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-16",name:"Dcloud32",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-01",name:"Dcloud33",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-02",name:"Dcloud34",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-03",name:"Dcloud35",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-04",name:"Dcloud36",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-05",name:"Dcloud37",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-06",name:"Dcloud38",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-07",name:"Dcloud39",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-08",name:"Dcloud40",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-09",name:"Dcloud41",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-10",name:"Dcloud42",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-11",name:"Dcloud43",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-12",name:"Dcloud44",address:"上海市普陀区金沙江路 1516 弄"},{date:"2020-09-13",name:"Dcloud45",address:"上海市普陀区金沙江路 1518 弄"},{date:"2020-09-14",name:"Dcloud46",address:"上海市普陀区金沙江路 1517 弄"},{date:"2020-09-15",name:"Dcloud47",address:"上海市普陀区金沙江路 1519 弄"},{date:"2020-09-16",name:"Dcloud48",address:"上海市普陀区金沙江路 1516 弄"}];const y=e({data:()=>({searchVal:"",tableData:[],pageSize:10,pageCurrent:1,total:0,loading:!1}),onLoad(){this.selectedIndexs=[],this.getData(1)},methods:{selectedItems(){return this.selectedIndexs.map((e=>this.tableData[e]))},selectionChange(e){this.selectedIndexs=e.detail.index},delTable(){this.selectedItems()},change(e){this.getData(e.current)},search(){this.getData(1,this.searchVal)},getData(e,a=""){this.loading=!0,this.pageCurrent=e,this.request({pageSize:this.pageSize,pageCurrent:e,value:a,success:e=>{this.tableData=e.data,this.total=e.total,this.loading=!1}})},request(e){const{pageSize:a,pageCurrent:d,success:t,value:s}=e;let n=C.length,l=C.filter(((e,t)=>{const s=t-(d-1)*a;return s<a&&s>=0}));s&&(l=[],C.forEach((e=>{-1!==e.name.indexOf(s)&&l.push(e)})),n=l.length),setTimeout((()=>{"function"==typeof t&&t({data:l,total:n})}),500)}}},[["render",function(e,C,y,z,x,$){const w=s,S=i,V=m,k=D(h("uni-th"),g),I=D(h("uni-tr"),p),T=D(h("uni-td"),f),q=D(h("uni-table"),_),j=D(h("uni-pagination"),b);return a(),d(w,null,{default:t((()=>[n(w,{class:"uni-header"},{default:t((()=>[n(w,{class:"uni-group hide-on-phone"},{default:t((()=>[n(w,{class:"uni-title"},{default:t((()=>[l(o(e.$t("demo.table.title")),1)])),_:1})])),_:1}),n(w,{class:"uni-group"},{default:t((()=>[n(S,{class:"uni-search",type:"text",modelValue:x.searchVal,"onUpdate:modelValue":C[0]||(C[0]=e=>x.searchVal=e),onConfirm:$.search,placeholder:e.$t("common.placeholder.query")},null,8,["modelValue","onConfirm","placeholder"]),n(V,{class:"uni-button",type:"default",size:"mini",onClick:$.search},{default:t((()=>[l(o(e.$t("common.button.search")),1)])),_:1},8,["onClick"]),n(V,{class:"uni-button",type:"primary",size:"mini"},{default:t((()=>[l(o(e.$t("common.button.add")),1)])),_:1}),n(V,{class:"uni-button",type:"warn",size:"mini",onClick:$.delTable},{default:t((()=>[l(o(e.$t("common.button.batchDelete")),1)])),_:1},8,["onClick"])])),_:1})])),_:1}),n(w,{class:"uni-container"},{default:t((()=>[n(q,{loading:x.loading,border:"",stripe:"",type:"selection",emptyText:e.$t("common.empty"),onSelectionChange:$.selectionChange},{default:t((()=>[n(I,null,{default:t((()=>[n(k,{width:"150",align:"center"},{default:t((()=>[l("日期")])),_:1}),n(k,{width:"150",align:"center"},{default:t((()=>[l("姓名")])),_:1}),n(k,{align:"center"},{default:t((()=>[l("地址")])),_:1}),n(k,{width:"204",align:"center"},{default:t((()=>[l("设置")])),_:1})])),_:1}),(a(!0),u(r,null,c(x.tableData,((s,u)=>(a(),d(I,{key:u},{default:t((()=>[n(T,null,{default:t((()=>[l(o(s.date),1)])),_:2},1024),n(T,null,{default:t((()=>[n(w,{class:"name"},{default:t((()=>[l(o(s.name),1)])),_:2},1024)])),_:2},1024),n(T,null,{default:t((()=>[l(o(s.address),1)])),_:2},1024),n(T,null,{default:t((()=>[n(w,{class:"uni-group"},{default:t((()=>[n(V,{class:"uni-button",size:"mini",type:"primary"},{default:t((()=>[l(o(e.$t("common.button.edit")),1)])),_:1}),n(V,{class:"uni-button",size:"mini",type:"warn"},{default:t((()=>[l(o(e.$t("common.button.delete")),1)])),_:1})])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1},8,["loading","emptyText","onSelectionChange"]),n(w,{class:"uni-pagination-box"},{default:t((()=>[n(j,{"show-icon":"","page-size":x.pageSize,current:x.pageCurrent,total:x.total,onChange:$.change},null,8,["page-size","current","total","onChange"])])),_:1})])),_:1})])),_:1})}]]);export{y as default};