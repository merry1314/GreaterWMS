(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"689d":function(t,e){},b3f8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[e("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,filter:t.filter,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("q-btn-group",{attrs:{push:""}},[e("q-btn",{attrs:{label:t.$t("refresh"),icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n             "+t._s(t.$t("refreshtip"))+"\n           ")])],1),e("q-btn",{attrs:{label:t.$t("downloaddnlist"),icon:"cloud_download"},on:{click:function(e){return t.downloadlistData()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n            "+t._s(t.$t("downloaddnlisttip"))+"\n           ")])],1),e("q-btn",{attrs:{label:t.$t("downloaddndetail"),icon:"cloud_download"},on:{click:function(e){return t.downloaddetailData()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n             "+t._s(t.$t("downloaddndetailtip"))+"\n           ")])],1)],1),e("q-space"),e("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:t.$t("search")},on:{blur:function(e){return t.getSearchList()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getSearchList()}},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"search"},on:{click:function(e){return t.getSearchList()}}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"dn_code",attrs:{props:a}},[t._v("\n           "+t._s(a.row.dn_code)+"\n         ")]),e("q-td",{key:"dn_status",attrs:{props:a}},[t._v("\n           "+t._s(a.row.dn_status)+"\n         ")]),e("q-td",{key:"total_weight",attrs:{props:a}},[t._v("\n           "+t._s(a.row.total_weight)+"\n         ")]),e("q-td",{key:"total_volume",attrs:{props:a}},[t._v("\n           "+t._s(a.row.total_volume)+"\n         ")]),e("q-td",{key:"customer",attrs:{props:a}},[t._v("\n           "+t._s(a.row.customer)+"\n         ")]),e("q-td",{key:"creater",attrs:{props:a}},[t._v("\n           "+t._s(a.row.creater)+"\n         ")]),e("q-td",{key:"create_time",attrs:{props:a}},[t._v("\n           "+t._s(a.row.create_time)+"\n         ")]),e("q-td",{key:"update_time",attrs:{props:a}},[t._v("\n           "+t._s(a.row.update_time)+"\n         ")])],1)]}}])})],1),[e("div",{staticClass:"q-pa-md flex flex-center"},[e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("previous"),icon:"navigate_before"},on:{click:function(e){return t.getListPrevious()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          "+t._s(t.$t("previous"))+"\n        ")])],1),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("next"),"icon-right":"navigate_next"},on:{click:function(e){return t.getListNext()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          "+t._s(t.$t("next"))+"\n        ")])],1),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.pathname_previous&&!t.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)]],2)},o=[],s=a("3004"),i=a("bd4c"),r=a("a357"),l=a("18d6"),c={name:"Pagecustomerdnlist",data(){return{openid:"",login_name:"",authin:"0",pathname:"dn/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],viewprint_table:[],pickinglist_print_table:[],warehouse_detail:{},customer_list:[],driver_list:[],customer_detail:{},columns:[{name:"dn_code",required:!0,label:this.$t("outbound.view_dn.dn_code"),align:"left",field:"dn_code"},{name:"total_weight",label:this.$t("outbound.view_dn.total_weight"),field:"total_weight",align:"center"},{name:"total_volume",label:this.$t("outbound.view_dn.total_volume"),field:"total_volume",align:"center"},{name:"customer",label:this.$t("outbound.view_dn.customer"),field:"customer",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"}],filter:"",pagination:{page:1,rowsPerPage:"30"},newForm:!1,options:l["a"].getItem("goods_code_list"),driver_options:l["a"].getItem("driver_name_list"),newdn:{creater:""},newFormData:{dn_code:"",customer:"",goods_code:[],goods_qty:[],creater:""},goodsData1:{bin:"",code:"",qty:""},goodsData2:{bin:"",code:"",qty:""},editid:0,editFormData:{},editMode:!1,deleteForm:!1,deleteid:0,viewForm:!1,viewdn:"",viewid:0,podid:0,podForm:!1,podFormData:{dn_code:"",customer:"",goodsData:[]}}},methods:{getList(){var t=this;l["a"].has("auth")&&Object(s["f"])(t.pathname+"list/?customer="+t.login_name,{}).then((e=>{t.table_list=e.results,t.customer_list=e.customer_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getSearchList(){var t=this;l["a"].has("auth")&&Object(s["f"])(t.pathname+"list/?customer="+t.login_name+"&dn_code__icontains="+t.filter,{}).then((e=>{t.table_list=e.results,t.customer_list=e.customer_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;l["a"].has("auth")&&Object(s["f"])(t.pathname_previous,{}).then((e=>{t.table_list=e.results,t.customer_list=e.customer_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;l["a"].has("auth")&&Object(s["f"])(t.pathname_next,{}).then((e=>{t.table_list=e.results,t.customer_list=e.customer_list,t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.getList()},downloadlistData(){var t=this;Object(s["g"])(t.pathname+"filelist/?lang="+l["a"].getItem("lang")+"&customer="+t.login_name).then((e=>{var a=Date.now(),n=i["b"].formatDate(a,"YYYYMMDDHHmmssSSS");const o=Object(r["a"])(t.pathname+"list"+n+".csv","\ufeff"+e.data,"text/csv");!0!==o&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))},downloaddetailData(){var t=this;Object(s["g"])(t.pathname+"filedetail/?lang="+l["a"].getItem("lang")+"&customer="+t.login_name).then((e=>{var a=Date.now(),n=i["b"].formatDate(a,"YYYYMMDDHHmmssSSS");const o=Object(r["a"])(t.pathname+"detail"+n+".csv","\ufeff"+e.data,"text/csv");!0!==o&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))}},created(){var t=this;l["a"].has("openid")?t.openid=l["a"].getItem("openid"):(t.openid="",l["a"].set("openid","")),l["a"].has("login_name")?t.login_name=l["a"].getItem("login_name"):(t.login_name="",l["a"].set("login_name","")),l["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0",l["a"].has("goods_code_list")||l["a"].set("goods_code_list",[])},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},d=c,u=a("42e1"),p=a("e24e"),m=a("eaac"),_=a("e7a9"),h=a("9c40"),g=a("05c0"),f=a("2c91"),v=a("27f9"),b=a("0016"),w=a("bd08"),x=a("db86"),y=a("eebe"),q=a.n(y),k=Object(u["a"])(d,n,o,!1,null,null,null);"function"===typeof p["default"]&&Object(p["default"])(k);e["default"]=k.exports;q()(k,"components",{QTable:m["a"],QBtnGroup:_["a"],QBtn:h["a"],QTooltip:g["a"],QSpace:f["a"],QInput:v["a"],QIcon:b["a"],QTr:w["a"],QTd:x["a"]})},e24e:function(t,e,a){"use strict";var n=a("689d"),o=a.n(n);e["default"]=o.a}}]);