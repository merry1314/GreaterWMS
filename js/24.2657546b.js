(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"758b":function(t,e,a){"use strict";a.d(e,"c",(function(){return h})),a.d(e,"e",(function(){return p})),a.d(e,"d",(function(){return f})),a.d(e,"b",(function(){return _})),a.d(e,"g",(function(){return g})),a.d(e,"f",(function(){return m})),a.d(e,"a",(function(){return r}));a("551c"),a("06db");var o=a("2b0e"),i=a("bc3a"),n=a.n(i),s=a("18d6"),r="http://127.0.0.1:8000/",c=n.a.create({baseURL:r,timeout:5e3}),l=n.a.create({baseURL:r,timeout:5e3}),u=n.a.create({baseURL:r,timeout:5e3}),d=n.a.create({baseURL:r,timeout:5e3});function h(t,e){return c.get(t,{params:e})}function p(t,e,a){return c.post(t,a,{params:e})}function g(t,e){return l.post(t,e)}function m(t,e){return u.post(t,e)}function f(t,e,a){return c.patch(t,a,{params:e})}function _(t,e,a){return d.delete(t,a,{params:e})}u.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.request.use((function(t){var e=s["a"].getItem("authid");return t.params={openid:e},t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),d.interceptors.request.use((function(t){var e=s["a"].getItem("openid");return t.params={openid:e},t}),(function(t){return Promise.reject(t)})),d.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),o["a"].prototype.$axios=c},9669:function(t,e){},a047:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","margin-top":"-20px"}},[a("q-table",{attrs:{title:"Treats",dense:"",data:t.data,columns:t.columns,"row-key":"t_code",separator:t.separator,filter:t.filter,loading:t.loading,"selected-rows-label":t.getSelectedString,selection:"multiple",selected:t.selected,"hide-bottom":"",pagination:t.pagination,"no-data-label":"没有找到任何数据","no-results-label":"没有找到您想要的数据","table-style":{height:t.height}},on:{"update:selected":function(e){t.selected=e},"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:"清点确认",icon:"assignment_turned_in"},on:{click:function(e){return t.Sorted()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          确认一张订单的清点结束\n        ")]),a("q-dialog",{model:{value:t.sortForm,callback:function(e){t.sortForm=e},expression:"sortForm"}},[a("q-card",{staticClass:"shadow-24",staticStyle:{width:"600px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[t._v("入库单号："+t._s(t.po_number))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[t._v("关闭")])],1)],1),a("q-markup-table",{staticStyle:{"max-height":"400px",height:"400px"}},[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("序号")]),a("th",{staticClass:"text-left"},[t._v("商品编码")]),a("th",{staticClass:"text-left"},[t._v("商品名称")]),a("th",{staticClass:"text-left"},[t._v("订单数量")]),a("th",{staticClass:"text-left"},[t._v("实际到货")]),a("th",{staticClass:"text-left"},[t._v("破损数量")])])]),a("tbody",t._l(t.sortFormData,(function(e,o){return a("tr",{key:e.index},[a("td",{staticClass:"text-left",staticStyle:{width:"10%"}},[t._v(t._s(o+1))]),a("td",{staticClass:"text-left"},[t._v("\n              "+t._s(e.goods_code)+"\n            ")]),a("td",{staticClass:"text-left"},[t._v("\n              "+t._s(e.goods_name)+"\n            ")]),a("td",{staticClass:"text-left"},[t._v("\n              "+t._s(e.po_qty)+"\n            ")]),a("td",{staticClass:"text-right",staticStyle:{width:"10%"}},[a("q-input",{attrs:{type:"number",dense:""},model:{value:t.sortFormData[o].actual_qty,callback:function(e){t.$set(t.sortFormData[o],"actual_qty",e)},expression:"sortFormData[i].actual_qty"}})],1),a("td",{staticClass:"text-right",staticStyle:{width:"10%"}},[a("q-input",{attrs:{type:"number",dense:""},model:{value:t.sortFormData[o].damage_qty,callback:function(e){t.$set(t.sortFormData[o],"damage_qty",e)},expression:"sortFormData[i].damage_qty"}})],1)])})),0)]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.sortFormDataCheckCancel()}}},[t._v("取消提交")]),a("q-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.sortFormDataCheck()}}},[t._v("确认提交\n          "),a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          提交清点后的数据不可逆\n        ")]),a("q-dialog",{model:{value:t.sortDataCheckDialog,callback:function(e){t.sortDataCheckDialog=e},expression:"sortDataCheckDialog"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[t._v("确认清点")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[t._v("关闭")])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"500px"}},[t._v("\n            确认清点结果后，数据不可逆\n        ")]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.sortFormDataCancel()}}},[t._v("取消提交")]),a("q-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.sortFormDataSubmit()}}},[t._v("确认提交")])],1)],1)],1)],1)],1)],1)],1)],1),a("q-btn",{attrs:{label:"刷新",icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          刷新页面\n        ")])],1),a("q-btn",{attrs:{label:"下载",icon:"cloud_download"},on:{click:function(e){return t.downloadexample()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          将选中的数据下载下来\n        ")])],1),a("q-btn-dropdown",{attrs:{"menu-anchor":"bottom right",label:"日期筛选"}},[a("div",{staticClass:"row no-wrap q-pa-md"},[a("div",{staticClass:"column"},[a("div",{staticClass:"text-h6"},[t._v("起始日期")]),a("q-date",{attrs:{"today-btn":""},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}})],1),a("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),a("div",{staticClass:"column"},[a("div",{staticClass:"text-h6"},[t._v("结束日期")]),a("q-date",{attrs:{"today-btn":""},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1)],1)]),a("q-btn",{attrs:{label:"日期查询",icon:"search"},on:{click:function(e){return t.DatereFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          确认以日期查询数据\n        ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:"本页关键字搜索"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"no-data",fn:function(e){var o=e.icon,i=e.message,n=e.filter;return[a("div",{staticClass:"full-width row flex-center text-accent q-gutter-sm"},[a("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),a("span",[t._v("\n            Well this is sad... "+t._s(i)+"\n          ")]),a("q-icon",{attrs:{size:"2em",name:n?"filter_b_and_w":o}})],1)]}}])}),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-pagination",{staticStyle:{"z-index":"1000"},attrs:{color:"purple",max:t.totlepage,"max-pages":7,"boundary-links":!0,"direction-links":!0,"boundary-numbers":!0},on:{click:function(e){return t.pageChange()}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)]],2)},i=[],n=(a("7f7f"),a("758b")),s=a("b06b"),r={name:"Pagepresort",data:function(){return{pathname:"polist/",authorization_get:!1,authorization_post:!1,authorization_getfile:!1,authorization_delete:!1,authorization_patch:!1,separator:"cell",loading:!1,filter:"",selected:[],totlepage:1,current:1,height:"",columns:[{name:"name",required:!0,label:"入库单号",align:"left",field:"name"},{name:"po_status",label:"订单状态",field:"po_status"},{name:"supplier",label:"供应商名称",field:"supplier"},{name:"create_name",label:"创建人",field:"create_name"},{name:"create_time",label:"创建时间",field:"create_time"},{name:"last_update_time",label:"最后修改时间",field:"last_update_time"}],data:[],pagination:{sortBy:"create_time",descending:!0,page:1,rowsPerPage:50},po_number:"10086",sortForm:!1,sortFormData:[],sortFormDataconfirm:[],sortDataCheckDialog:!1,status_check:0,date1:"",date2:""}},methods:{authCheck:function(){var t=this,e=this.$q.localStorage.getItem("openid");this.$axios.get(n["a"]+"userauth/",{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,authorization:"1"},data:{}}).then((function(e){"200"===e.data.results.code?0===e.data.results.data.length?(t.authorization_get=!0,t.authorization_post=!0,t.authorization_getfile=!0,t.authorization_delete=!0,t.authorization_patch=!0,t.getList()):1===e.data.results.data.length?(0===e.data.results.data[0].aut1?(t.authorization_get=!0,t.getList()):t.authorization_get=!1,0===e.data.results.data[0].aut2?t.authorization_getfile=!0:t.authorization_getfile=!1,0===e.data.results.data[0].aut3?t.authorization_post=!0:t.authorization_post=!1,0===e.data.results.data[0].aut4?t.authorization_patch=!0:t.authorization_patch=!1,0===e.data.results.data[0].aut5?t.authorization_delete=!0:t.authorization_delete=!1):(t.authorization=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})):(t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500}))})).catch((function(e){t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,console.log(e)}))},getList:function(){var t=this;if(this.authorization_get)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.get(n["a"]+this.pathname,{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,page:this.current,max_page:50,po_status:3,date1:this.date1,date2:this.date2},data:{}}).then((function(e){"200"===e.data.results.code?(t.data=e.data.results.data,t.totlepage=e.data.results.totlepage):t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有查询权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},getSelectedString:function(){return 0===this.selected.length?"":"".concat(this.selected.length," record").concat(this.selected.length>1?"s":""," selected of ").concat(this.data.length)},pageChange:function(){this.getList()},reFresh:function(){this.current=1,this.date1="",this.date2="",this.getList()},DatereFresh:function(){this.current=1,this.getList()},Sorted:function(){var t=this;if(this.authorization_post)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.get(n["a"]+"podetail/",{headers:{"Content-Type":"application/json; charset=utf-8"},params:{openid:e,page:1,max_page:50,po_status:3,po_number:this.selected[0].name,date1:this.date1,date2:this.date2}}).then((function(e){"200"===e.data.results.code?(t.po_number=t.selected[0].name,t.sortFormData=e.data.results.data,t.sortForm=!0):t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.sortFormDataCancel(),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有添加数据权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},sortFormDataCheck:function(){var t=this;this.sortFormData.forEach((function(e){var a={t_code:e.t_code,actual_qty:e.actual_qty,damage_qty:e.damage_qty};t.sortFormDataconfirm.push(a)})),console.log(this.sortFormDataconfirm),this.sortDataCheckDialog=!0},sortFormDataCheckCancel:function(){this.po_number="",this.sortFormData=[],this.sortFormDataconfirm=[],this.sortDataCheckDialog=!1,this.sortForm=!1},sortFormDataSubmit:function(){var t=this;if(this.authorization_patch)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.patch(n["a"]+"podetail/",{data:this.sortFormDataconfirm},{headers:{"Content-Type":"application/json; charset=utf-8"},params:{openid:e}}).then((function(e){"200"===e.data.code?(t.$q.notify({message:e.data.msg,icon:"check",color:"positive",position:"right",timeout:2500}),t.sortFormDataCancel(),t.getList()):t.$q.notify({message:e.data.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.sortFormDataCancel(),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有添加数据权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},sortFormDataCancel:function(){this.po_number="",this.sortFormData=[],this.sortFormDataconfirm=[],this.sortDataCheckDialog=!1,this.sortForm=!1,this.getList()},downloadexample:function(){this.authorization_getfile?this.$q.localStorage.has("openid")?Object(s["a"])(n["a"]+this.pathname+"?openid="+this.$q.localStorage.getItem("openid")+"&getfile=1"):this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500}):this.$q.notify({message:"您没有下载权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})}},created:function(){},mounted:function(){this.$q.localStorage.has("openid")&&this.authCheck(),this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"},updated:function(){}},c=r,l=a("2877"),u=a("b281"),d=a("eebe"),h=a.n(d),p=a("eaac"),g=a("e7a9"),m=a("9c40"),f=a("05c0"),_=a("24e8"),b=a("f09f"),q=a("d847"),v=a("2c91"),x=a("2bb1"),y=a("27f9"),C=a("a370"),k=a("f20b"),D=a("52ee"),z=a("eb85"),F=a("0016"),S=a("3b16"),$=a("7f67"),w=Object(l["a"])(c,o,i,!1,null,null,null);"function"===typeof u["default"]&&Object(u["default"])(w);e["default"]=w.exports;h()(w,"components",{QTable:p["a"],QBtnGroup:g["a"],QBtn:m["a"],QTooltip:f["a"],QDialog:_["a"],QCard:b["a"],QBar:q["a"],QSpace:v["a"],QMarkupTable:x["a"],QInput:y["a"],QCardSection:C["a"],QBtnDropdown:k["a"],QDate:D["a"],QSeparator:z["a"],QIcon:F["a"],QPagination:S["a"]}),h()(w,"directives",{ClosePopup:$["a"]})},b281:function(t,e,a){"use strict";var o=a("9669"),i=a.n(o);e["default"]=i.a}}]);