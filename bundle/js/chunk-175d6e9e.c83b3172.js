(window["webpackJsonp_user"]=window["webpackJsonp_user"]||[]).push([["chunk-175d6e9e"],{"00b4":function(t,e,a){"use strict";a("ac1f");var s=a("23e7"),r=a("da84"),i=a("c65b"),n=a("e330"),o=a("1626"),c=a("861d"),l=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),u=r.Error,p=n(/./.test);s({target:"RegExp",proto:!0,forced:!l},{test:function(t){var e=this.exec;if(!o(e))return p(this,t);var a=i(e,this,t);if(null!==a&&!c(a))throw new u("RegExp exec method returned something other than an Object or null");return!!a}})},"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("fb6a"),a("d3b7"),a("b0c0"),a("a630"),a("3ca3"),a("ac1f"),a("00b4");var s=a("6b75");function r(t,e){if(t){if("string"===typeof t)return Object(s["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(s["a"])(t,e):void 0}}},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var s=a("6b75");function r(t){if(Array.isArray(t))return Object(s["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var n=a("06c5");a("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||i(t)||Object(n["a"])(t)||o()}},"378f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popup-container layer-display",attrs:{id:"add-voucher"}},[t.user?a("div",{staticClass:"popup-item"},[a("span",{staticClass:"popup-item-label",staticStyle:{width:"94px"}},[t._v("客户账号：")]),a("div",{staticClass:"popup-item-content"},[a("div",{staticClass:"box flex-align-center"},[t._v(" "+t._s(t.user.email)+" ")])])]):t._e(),t.user?t._e():a("div",{staticClass:"popup-item"},[a("span",{staticClass:"popup-item-label",staticStyle:{width:"94px"}},[t._v("客户账号：")]),a("div",{staticClass:"popup-item-content"},[a("div",{staticClass:"box flex-align-center"},[a("select-user",{on:{userChange:function(e){return t.userChange(e)}}})],1)])]),a("div",{staticClass:"popup-item"},[a("div",{staticClass:"popup-item-label",staticStyle:{width:"94px"}},[t._v("代金券类型：")]),a("div",{staticClass:"popup-item-content box flex-column"},[a("div",{staticClass:"box "},[a("efly-checkbox",{staticStyle:{width:"145px","line-height":"34px"},attrs:{active:"故障补偿"===t.voucherType},on:{click:function(e){return t.chooseVoucher("故障补偿")}}},[t._v("故障补偿")]),a("efly-checkbox",{staticStyle:{width:"145px","line-height":"34px"},attrs:{active:"充值赠送"===t.voucherType},on:{click:function(e){return t.chooseVoucher("充值赠送")}}},[t._v("充值赠送")]),a("efly-checkbox",{staticStyle:{width:"145px","line-height":"34px"},attrs:{active:"内部使用测试"===t.voucherType},on:{click:function(e){return t.chooseVoucher("内部使用测试")}}},[t._v("内部使用测试")])],1),a("div",{staticClass:"box "},[a("efly-checkbox",{staticStyle:{width:"145px","line-height":"34px"},attrs:{active:"活动"===t.voucherType},on:{click:function(e){return t.chooseVoucher("活动")}}},[t._v("活动")]),a("efly-checkbox",{staticStyle:{width:"145px","line-height":"34px"},attrs:{active:"客户测试"===t.voucherType},on:{click:function(e){return t.chooseVoucher("客户测试")}}},[t._v("客户测试")]),a("efly-checkbox",{staticStyle:{width:"145px","line-height":"34px"},attrs:{active:"其他"===t.voucherType},on:{click:function(e){return t.chooseVoucher("其他")}}},[t._v("其他")])],1)])]),a("div",{staticClass:"popup-item"},[a("div",{staticClass:"popup-item-label",staticStyle:{width:"94px"}},[t._v("充值金额(元)：")]),a("efly-tooltip",{staticClass:"box flex-column flex",staticStyle:{width:"100%"},attrs:{content:t.inputMsg.couponMoney,trigger:t.inputMsg.couponMoney?"show":"hide",position:"relative",top:"2px",left:"-6px",type:"danger",placement:"bottom-left"}},[a("div",{staticClass:"popup-item-content box"},[a("efly-input",{attrs:{size:"small",width:"464px",placeholder:"必须为正数,小数不得超过2位"},on:{blur:function(e){return t.checkInput("couponMoney")}},model:{value:t.order.couponMoney,callback:function(e){t.$set(t.order,"couponMoney",e)},expression:"order.couponMoney"}}),a("span",{staticClass:"box flex-center color-danger font-default pad-lr-xs"},[t._v("*")])],1)])],1),a("div",{staticClass:"popup-item"},[a("div",{staticClass:"popup-item-label",staticStyle:{width:"94px"}},[t._v("备注：")]),a("div",{staticClass:"popup-item-content"},[a("div",[a("div",{staticClass:"box flex-align-center"},[a("efly-input",{attrs:{size:"small",width:"464px",type:"textarea",placeholder:"请输入备注（选填）"},model:{value:t.order.remark,callback:function(e){t.$set(t.order,"remark",e)},expression:"order.remark"}})],1)])])])])},r=[],i=a("d4ec"),n=a("bee2"),o=a("262e"),c=a("2caf"),l=(a("ac1f"),a("00b4"),a("9ab4")),u=a("1b40"),p=a("65a1"),d=function(t){Object(o["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.voucherType="",t.status={layerIndex:"0"},t.inputMsg={couponMoney:""},t.order={userID:"",couponMoney:"",about:"",remark:""},t}return Object(n["a"])(a,[{key:"childrenChange",value:function(t){}},{key:"getShow",value:function(t){var e=this;this.init(),!0===t&&(this.status.layerIndex=this.$layer.open({title:"添加代金券",id:"add-voucher",icon:"icon-voucher",area:{width:"700px"},btn:{confirm:"确定"},confirm:function(){e.submit()},cancel:function(){var t=e.$parent;t.component.addVoucher=!1}}))}},{key:"init",value:function(){this.voucherType="",this.order={userID:"",couponMoney:"",about:"",remark:""},this.user&&(this.order.userID=this.user.userID),this.inputMsg={couponMoney:""}}},{key:"chooseVoucher",value:function(t){this.voucherType=t}},{key:"checkInput",value:function(t){switch(t){case"couponMoney":var e=this.order.couponMoney;return""===e||null===e?(this.inputMsg.couponMoney="请输入金额",!1):!isNaN(e)&&e>0&&/^\d+(\.\d{1,2})?$/.test(e)?(this.inputMsg.couponMoney="",!0):(this.inputMsg.couponMoney="必须为正数,小数不得超过2位",!1);default:break}}},{key:"userChange",value:function(t){this.order.userID=t.userID}},{key:"addVoucher",value:function(){var t=this,e={userID:this.order.userID,couponMoney:this.order.couponMoney,about:this.voucherType,remark:this.order.remark},a=this.$layer.load({message:"正在进行代金券添加，请稍后..."});p["a"].request("/user/bill/backendAddCouponMoney",e,"token").then((function(e){t.$layer.close(a),2===+e.ret?(t.$layer.msg("添加成功",{type:"success"}),t.$layer.close(t.status.layerIndex),t.childrenChange("success")):t.$layer.msg(e.data.errorMsg,{error:"error"})})).catch((function(e){t.$layer.close(a),t.$layer.msg("添加失败",{type:"error"})}))}},{key:"submit",value:function(){this.checkInput("couponMoney")&&this.addVoucher()}}]),a}(u["d"]);Object(l["a"])([Object(u["c"])({default:function(){return!1}})],d.prototype,"show",void 0),Object(l["a"])([Object(u["c"])({default:function(){return""}})],d.prototype,"user",void 0),Object(l["a"])([Object(u["c"])()],d.prototype,"paramData",void 0),Object(l["a"])([Object(u["b"])("childrenChange")],d.prototype,"childrenChange",null),Object(l["a"])([Object(u["e"])("show",{immediate:!0})],d.prototype,"getShow",null),d=Object(l["a"])([u["a"]],d);var h=d,f=h,m=f,y=a("2877"),v=Object(y["a"])(m,s,r,!1,null,"5316b59e",null);e["a"]=v.exports},"3afb":function(t,e,a){"use strict";a("b71f")},"4df4":function(t,e,a){"use strict";var s=a("da84"),r=a("0366"),i=a("c65b"),n=a("7b0b"),o=a("9bdd"),c=a("e95a"),l=a("68ee"),u=a("07fa"),p=a("8418"),d=a("9a1f"),h=a("35a1"),f=s.Array;t.exports=function(t){var e=n(t),a=l(this),s=arguments.length,m=s>1?arguments[1]:void 0,y=void 0!==m;y&&(m=r(m,s>2?arguments[2]:void 0));var v,b,g,x,C,k,_=h(e),w=0;if(!_||this==f&&c(_))for(v=u(e),b=a?new this(v):f(v);v>w;w++)k=y?m(e[w],w):e[w],p(b,w,k);else for(x=d(e,_),C=x.next,b=a?new this:[];!(g=i(C,x)).done;w++)k=y?o(x,m,[g.value,w],!0):g.value,p(b,w,k);return b.length=w,b}},"6b75":function(t,e,a){"use strict";function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}a.d(e,"a",(function(){return s}))},"7e1f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"securityGroup-list-container"},[a("page-header",{attrs:{title:"代金券管理",titleIcon:"icon-coupon"}}),a("div",{staticClass:"list-tabs pad-lr-default"},[a("efly-tabs",{attrs:{value:t.tabs,type:"card"},on:{change:function(e){return t.changeTabs(e)}}},[a("efly-tabs-pane",{attrs:{value:"voucherManger"}},[t._v("代金券获取")]),a("efly-tabs-pane",{attrs:{value:"voucherRecovery"}},[t._v("代金券回收")])],1)],1),a("div",{staticClass:"list-content"},[a("div",{staticClass:"list-box"},["eap"===t.$platform?a("div",{staticClass:"mar-b-mini box flex-justify-between"},[a("div",{staticClass:"list-search-left"}),a("div",{staticClass:"list-search-right"},[a("div",{staticClass:"box"},[t._m(0),a("select-user",{attrs:{value:t.params.customerNameLike},on:{userChange:function(e){return t.userChange(e)}}})],1)])]):t._e(),a("div",{staticClass:"list-serach"},[a("div",{staticClass:"list-serach-left"},[t.$authority.EVoucher.add&&"eap"===t.$platform?a("efly-button",{staticClass:"btn-primary nowrap",attrs:{size:"small"},on:{click:function(e){return t.operateSelect("create")}}},[a("i",{staticClass:"icon icon-create"}),t._v(" 添加代金券 ")]):t._e(),a("efly-tooltip",{attrs:{content:"刷新",top:"-42px",left:"-6px",placement:"top",type:"white"}},[a("efly-button",{staticClass:"efly-button-icon btn-outline-primary",attrs:{size:"small"},on:{click:function(e){return t.getList()}}},[a("i",{staticClass:"icon icon-refresh font-default"})])],1)],1),a("div",{staticClass:"list-serach-right"},["eap"===t.$platform?a("efly-screen",{staticClass:"mar-l-xs"},[a("div",{attrs:{slot:"label"},slot:"label"},[a("efly-select",{attrs:{size:"small",width:"100px",type:"screen",value:"代金券类型"}})],1),t._t("default",(function(){return[a("efly-select",{attrs:{size:"small",width:"140px",data:t.chargeTypeList,type:"screen",value:t.chargeTypeList[0],height:"auto"},on:{change:function(e){return t.labelChange("chargeTypeList",e)}}})]}))],2):t._e(),a("select-time",{staticClass:"mar-l-xs",attrs:{label:"添加时间",startTimeID:"destory-time-start-true",endTimeID:"destory-time-end-true",startTime:t.params.createTimeStart,endTime:t.params.createTimeEnd},on:{change:function(e){return t.selectTimeChange(e)}}}),"eap"===t.$platform?a("efly-screen",{staticClass:"mar-l-xs"},[a("div",{attrs:{slot:"label"},slot:"label"},[a("efly-select",{attrs:{size:"small",width:"100px",type:"screen",value:"归属部门"}})],1),t._t("default",(function(){return[a("efly-input",{attrs:{size:"small",placeholder:"客户经理所在部门",width:"175px"},model:{value:t.params.departmentName,callback:function(e){t.$set(t.params,"departmentName",e)},expression:"params.departmentName"}})]}))],2):t._e(),a("efly-screen",{staticClass:"mar-l-xs"},[a("div",{attrs:{slot:"label"},slot:"label"},[a("efly-select",{attrs:{size:"small",width:"100px",type:"screen",value:"编号"}})],1),t._t("default",(function(){return[a("efly-input",{attrs:{size:"small",placeholder:"请输入编号",width:"150px"},model:{value:t.params.billCode,callback:function(e){t.$set(t.params,"billCode",e)},expression:"params.billCode"}})]}))],2),a("efly-button",{staticClass:"btn-primary mar-l-xs",attrs:{size:"small"},on:{click:function(e){return t.getList()}}},[t._v("搜索")]),a("efly-button",{staticClass:"btn-solid-primary mar-l-xs",attrs:{size:"small"},on:{click:function(e){return t.clearScreen()}}},[t._v("清除 ")]),a("efly-tooltip",{attrs:{content:"导出：若数据量较大，导出速度较慢，请耐心等待。",top:"-58px",left:"-138px",width:"150px",placement:"top-right",type:"white"}},[a("efly-button",{staticClass:"efly-button-icon mar-l-xs",attrs:{size:"small"},on:{click:function(e){return t.getList("export")}}},[a("i",{staticClass:"icon icon-download font-default"})])],1)],1)]),a("div",{staticClass:"box flex-justify-between"},[a("div",{staticClass:"list-search-left"},[a("div",{staticClass:"box flex-center mar-b-xs"},[a("span",[t._v("总金额 :")]),"loading"===t.status.moneyLoading?a("span",[a("i",{staticClass:"icon icon-loading"})]):a("span",{staticClass:"color-danger font-larger font-weight-700"},[t._v("￥"+t._s(t.money.couponMoney))])])]),a("div",{staticClass:"list-search-right"},["eap"===t.$platform?a("div",{staticClass:"box flex-justify-center"},[a("efly-checkbox",{attrs:{active:t.isBlock},on:{click:function(e){return t.changeCustomerType()}}},[t._v("屏蔽内部账号记录")])],1):t._e()])]),a("div",{staticClass:"list-data"},[a("efly-table",{attrs:{data:t.voucherList,status:t.status.data,loadingImg:t.$loadingImg,nodataIcon:"icon-nodata"}},[a("efly-table-column",{attrs:{prop:"createTime",header:"添加时间"}}),"eap"===t.$platform?a("efly-table-column",{attrs:{header:"客户账号(客户名)"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("span",[t._v(t._s(e.data.email?e.data.email:"-"))]),e.data.company?a("div",{staticClass:"box flex-justify-center"},[t._v("("+t._s(e.data.company)+", "+t._s(e.data.trueName)+") ")]):t._e()])}}],null,!1,703755006)}):t._e(),"eap"===t.$platform?a("efly-table-column",{attrs:{header:"归属部门"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t._v(" "+t._s(e.data.departmentName?e.data.departmentName:"-")+" ")])}}],null,!1,4038876405)}):t._e(),a("efly-table-column",{attrs:{header:"代金券类型"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t._v(" "+t._s(e.data.about?e.data.about:"-")+" ")])}}])}),a("efly-table-column",{attrs:{header:"金额(元)"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[a("span",{staticClass:"color-danger"},[t._v("+ "+t._s(e.data.couponMoney))])])}}])}),a("efly-table-column",{attrs:{header:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t._v(" "+t._s(e.data.remark?e.data.remark:"-")+" ")])}}])}),a("efly-table-column",{attrs:{header:"代金券编号"},scopedSlots:t._u([{key:"default",fn:function(e){return a("div",{},[t._v(" "+t._s(e.data.billCode)+" ")])}}])})],1)],1),a("div",{staticClass:"list-footer"},[a("div",{staticClass:"list-footer-left"}),a("div",{staticClass:"list-footer-right"},[a("efly-page",{attrs:{size:"small",list:[5,10,20,50],total:t.page.total,count:t.page.length},on:{change:function(e){return t.changePage(e)}}})],1)])])]),a("add-voucher",{attrs:{show:t.component.addVoucher},on:{childrenChange:function(e){return t.childrenCallback(e)}}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"line-height-34 mar-r-default text-color-secondary"},[a("i",{staticClass:"icon icon-log"}),t._v(" 客户账号")])}],i=a("2909"),n=a("d4ec"),o=a("bee2"),c=a("262e"),l=a("2caf"),u=a("9ab4"),p=a("1b40"),d=a("65a1"),h=a("378f"),f=a("bd30"),m=function(t){Object(c["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.tabs="voucherManger",t.voucherList=[],t.isBlock=!1,t.params={customerNameLike:"",customerType:"customer",departmentName:"",managerTrueName:"",about:"",order:"desc",orderFields:"createTime",billCode:"",createTimeStart:"",createTimeEnd:"",userID:""},t.page={total:0,start:0,length:10},t.startTime="",t.endTime="",t.status={data:"loading",moneyLoading:"loading"},t.chargeTypeList=["全部","故障补偿","充值赠送","内部使用测试","活动","客户测试","其他"],t.component={addVoucher:!1},t}return Object(o["a"])(a,[{key:"userChange",value:function(t){this.params.customerNameLike=t.email}},{key:"changeTabs",value:function(t){this.tabs=t,this.page.total=0,this.page.length=10,this.page.start=0,this.getList(),"voucherManger"===this.tabs||this.tabs}},{key:"changeCustomerType",value:function(){this.isBlock=!this.isBlock,this.params.customerType=this.isBlock?"customer":"",this.getList()}},{key:"labelChange",value:function(t,e){switch(t){case"chargeTypeList":this.params.about="全部"===e.value?"":e.value,this.getList();break}}},{key:"created",value:function(){this.params.userID=f["a"].getUserID(this.$platform),this.$route.params.query&&"customerNameLike"===this.$route.query.screen&&(this.params[this.$route.query.screen]=this.$route.params.query)}},{key:"mounted",value:function(){this.getList()}},{key:"changePage",value:function(t){this.page.length=t.length,this.page.start=t.start,this.getList()}},{key:"selectTimeChange",value:function(t){this.params.createTimeStart=t.startTime,this.params.createTimeEnd=t.endTime}},{key:"clearScreen",value:function(){this.params.createTimeStart="",this.params.createTimeEnd="",this.params.about="",this.params.managerTrueName="",this.params.departmentName="",this.params.billCode="",this.params.customerNameLike="",this.chargeTypeList=Object(i["a"])(this.chargeTypeList),this.getList()}},{key:"childrenCallback",value:function(t){switch(t){case"update":case"success":this.getList();break;case"error":break}}},{key:"operateSelect",value:function(t){switch(t){case"create":this.component.addVoucher=!0;break}}},{key:"getList",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"query",a=this.params,s={limitStart:this.page.start,limitCount:this.page.length,billType:"voucherManger"===this.tabs?"recharge":"refund"};"export"===e?d["a"].exportDoc("/user/bill/queryCouponBillList",a):(this.status.data="loading",Object.assign(a,s),d["a"].request("/user/bill/queryCouponBillList",a,"token").then((function(e){var a=e.data;t.page.total=a.count,t.voucherList=a.list,t.money=a.money,t.status.moneyLoading="complete",t.status.data=t.voucherList.length>0?"havedata":"nodata"})).catch((function(e){t.status.data="nodata"})))}}]),a}(p["d"]);m=Object(u["a"])([Object(p["a"])({components:{addVoucher:h["a"]}})],m);var y=m,v=y,b=v,g=(a("3afb"),a("2877")),x=Object(g["a"])(b,s,r,!1,null,"5f69fa9e",null);e["default"]=x.exports},"9bdd":function(t,e,a){var s=a("825a"),r=a("2a62");t.exports=function(t,e,a,i){try{return i?e(s(a)[0],a[1]):e(a)}catch(n){r(t,"throw",n)}}},a630:function(t,e,a){var s=a("23e7"),r=a("4df4"),i=a("1c7e"),n=!i((function(t){Array.from(t)}));s({target:"Array",stat:!0,forced:n},{from:r})},b0c0:function(t,e,a){var s=a("83ab"),r=a("5e77").EXISTS,i=a("e330"),n=a("9bf2").f,o=Function.prototype,c=i(o.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=i(l.exec),p="name";s&&!r&&n(o,p,{configurable:!0,get:function(){try{return u(l,c(this))[1]}catch(t){return""}}})},b71f:function(t,e,a){},fb6a:function(t,e,a){"use strict";var s=a("23e7"),r=a("da84"),i=a("e8b5"),n=a("68ee"),o=a("861d"),c=a("23cb"),l=a("07fa"),u=a("fc6a"),p=a("8418"),d=a("b622"),h=a("1dde"),f=a("f36a"),m=h("slice"),y=d("species"),v=r.Array,b=Math.max;s({target:"Array",proto:!0,forced:!m},{slice:function(t,e){var a,s,r,d=u(this),h=l(d),m=c(t,h),g=c(void 0===e?h:e,h);if(i(d)&&(a=d.constructor,n(a)&&(a===v||i(a.prototype))?a=void 0:o(a)&&(a=a[y],null===a&&(a=void 0)),a===v||void 0===a))return f(d,m,g);for(s=new(void 0===a?v:a)(b(g-m,0)),r=0;m<g;m++,r++)m in d&&p(s,r,d[m]);return s.length=r,s}})}}]);