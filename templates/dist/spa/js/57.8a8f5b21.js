(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{"1b98":function(e,t){},7614:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             "+e._s(e.$t("refreshtip"))+"\n           ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:e.$t("search")},on:{blur:function(t){return e.getSearchList()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getSearchList()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"},on:{click:function(t){return e.getSearchList()}}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"staff_name",attrs:{props:t}},[e._v("\n             "+e._s(t.row.staff_name)+"\n           ")]),a("q-td",{key:"staff_type",attrs:{props:t}},[e._v("\n             "+e._s(t.row.staff_type)+"\n           ")]),a("q-td",{key:"check_code",attrs:{props:t}},[e._v("\n           "+e._s(t.row.check_code)+"\n         ")]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.create_time)+"\n         ")]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.update_time)+"\n         ")])],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("previous"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("next"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)]],2)},s=[],o=a("3004"),i=a("18d6"),r={name:"Pagestafflistcheckcode",data(){return{openid:"",login_name:"",authin:"0",pathname:"staff/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],staff_type_list:["Manager","Inbound","Outbound","Supervisor","StockControl","Customer","Supplier"],columns:[{name:"staff_name",required:!0,label:this.$t("staff.view_staff.staff_name"),align:"left",field:"staff_name"},{name:"staff_type",label:this.$t("staff.view_staff.staff_type"),field:"staff_type",align:"center"},{name:"check_code",label:this.$t("staff.check_code"),field:"check_code",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"}],filter:"",pagination:{page:1,rowsPerPage:"30"}}},methods:{getList(){var e=this;i["a"].has("auth")&&Object(o["e"])(e.pathname,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;i["a"].has("auth")&&Object(o["e"])(e.pathname+"?staff_name__icontains="+e.filter,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;i["a"].has("auth")&&Object(o["e"])(e.pathname_previous,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;i["a"].has("auth")&&Object(o["e"])(e.pathname_next,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()}},created(){var e=this;i["a"].has("openid")?e.openid=i["a"].getItem("openid"):(e.openid="",i["a"].set("openid","")),i["a"].has("login_name")?e.login_name=i["a"].getItem("login_name"):(e.login_name="",i["a"].set("login_name","")),i["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-290)+"px":e.height=e.$q.screen.height-290+"px"},updated(){document.getElementById("chat_scroll")&&(document.getElementById("chat_scroll").scrollTop=document.getElementById("chat_scroll").scrollHeight)},destroyed(){}},l=r,c=a("42e1"),p=a("8b7c"),h=a("eaac"),u=a("e7a9"),f=a("9c40"),d=a("05c0"),_=a("2c91"),m=a("27f9"),g=a("0016"),b=a("bd08"),v=a("db86"),y=a("eebe"),x=a.n(y),k=Object(c["a"])(l,n,s,!1,null,null,null);"function"===typeof p["default"]&&Object(p["default"])(k);t["default"]=k.exports;x()(k,"components",{QTable:h["a"],QBtnGroup:u["a"],QBtn:f["a"],QTooltip:d["a"],QSpace:_["a"],QInput:m["a"],QIcon:g["a"],QTr:b["a"],QTd:v["a"]})},"8b7c":function(e,t,a){"use strict";var n=a("1b98"),s=a.n(n);t["default"]=s.a}}]);