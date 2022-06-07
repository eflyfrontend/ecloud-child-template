(window["webpackJsonp_user"]=window["webpackJsonp_user"]||[]).push([["chunk-4c537052"],{"62c7":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"system-set-container"},[r("page-header",{attrs:{title:"计价设置"}}),r("div",{staticClass:"detail-container"},[r("div",{staticClass:"detail-content"},[e.$authority.ESystemSet.module?r("div",{staticClass:"detail-box",staticStyle:{width:"100%"}},[e._m(0),r("div",{staticClass:"detail-info "},[r("div",{staticClass:"popup-container"},[r("div",{staticClass:"popup-item"},[r("div",{staticClass:"popup-item-label"},[e._v("启动计价模块:")]),r("div",{staticClass:"popup-item-content flex-align-center"},[r("efly-switch",{attrs:{active:e.priceSwitch},on:{click:function(t){return e.changeSwicth()}}})],1)])])])]):e._e(),e.$authority.ESystemSet.pricing?r("div",{staticClass:"detail-box mar-t-default",staticStyle:{width:"100%"}},[e._m(1),r("div",{staticClass:"detail-info pad-default"},[r("efly-tip",{staticClass:"popup-item",attrs:{icon:"icon-cycel-exclamation",type:"primary"}},[e._v(" 注:产品默认定价系数为1.00（最终面向客户实际价格计算公式：产品ListPrice*当前定价系数） ")]),r("efly-table",{staticClass:"mar-t-default",attrs:{data:e.list.data,status:e.status.data,loadingImg:e.$loadingImg,nodataIcon:"icon-nodata"}},[r("efly-table-column",{attrs:{header:"产品名称",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return r("div",{staticClass:"box flex-justify-center"},[e._v(" "+e._s(e._f("resourceNamePipe")(t.data.label))+" ")])}}],null,!1,3062961522)}),r("efly-table-column",{attrs:{width:"180",header:"产品定价系数"},scopedSlots:e._u([{key:"default",fn:function(t){return r("div",{staticClass:"box flex-justify-center"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.data.value,expression:"scope.data.value"}],staticClass:"text-align-center",staticStyle:{border:"1px solid #d3d3d3"},attrs:{type:"number"},domProps:{value:t.data.value},on:{change:function(r){return e.checkError(t.data.label)},input:function(r){r.target.composing||e.$set(t.data,"value",r.target.value)}}}),r("efly-button",{staticClass:"btn-primary mar-l-xs",attrs:{size:"mini"},on:{click:function(t){return e.saveDiscount()}}},[e._v("保存")])],1)}}],null,!1,249570171)})],1)],1)]):e._e()])])],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"detail-header"},[r("div",{staticClass:"detail-header-title"},[e._v(" 计价模块 ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"detail-header"},[r("div",{staticClass:"detail-header-title"},[e._v(" 产品定价 ")])])}],s=r("5530"),i=r("d4ec"),c=r("bee2"),o=r("262e"),u=r("2caf"),l=(r("e9c4"),r("9ab4")),d=r("1b40"),f=r("65a1"),h=r("bd30"),b=r("151b"),v=r("cb7b"),g=r("84dc"),p=function(e){Object(o["a"])(r,e);var t=Object(u["a"])(r);function r(){var e;return Object(i["a"])(this,r),e=t.apply(this,arguments),e.list={data:[]},e.status={switch:"loading",data:"loading"},e.priceSwitch=!0,e}return Object(c["a"])(r,[{key:"created",value:function(){this.userID=h["a"].getAdminUserID(),this.getSwitch(),this.getDiscount()}},{key:"getSwitch",value:function(){var e=this,t={userID:this.userID,module:"MODULE_PRICE_ENABLE"};f["a"].request("/system/config/getModuleEnable",t).then((function(t){e.priceSwitch=1===t.data.enable})).catch((function(e){}))}},{key:"changeSwicth",value:function(){var e=this;this.priceSwitch=!this.priceSwitch;var t={userID:this.userID,module:"MODULE_PRICE_ENABLE",enable:this.priceSwitch?1:0};f["a"].request("/system/config/setModuleEnable",t).then((function(e){console.log(e)})).catch((function(t){e.status.version="error"}))}},{key:"getDiscount",value:function(){var e=this;this.list.data=[];var t={userID:this.userID};this.status.data="loading",f["a"].request("/system/config/getProductDiscount",t).then((function(t){for(var r in b["a"].PRICE_ORDER)for(var a in t.data)b["a"].PRICE_ORDER[r]===a&&e.list.data.push({label:a,value:t.data[a],error:""});e.status.data="havedata"})).catch((function(t){e.status.data="error"}))}},{key:"checkError",value:function(e){for(var t in this.list.data)this.list.data[t].label===e&&(""===this.list.data[t].value?this.list.data[t].error="请输入"+v["a"].resourceNamePipe(this.list.data[t].label)+"的价格系数。":0===this.list.data[t].value?this.list.data[t].error=v["a"].resourceNamePipe(this.list.data[t].label)+"的价格系数不能为0。":g["a"].money(this.list.data[t].value)?this.list.data[t].error="":this.list.data[t].error=v["a"].resourceNamePipe(this.list.data[t].label)+"的价格系数必须为正整数且最多两位小数。",this.list.data[t].error&&this.$layer.msg(this.list.data[t].error,{type:"error"}))}},{key:"saveDiscount",value:function(e){var t=this,r=!0;if(this.priceSwitch){for(var a in this.list.data)if(this.list.data[a].error){this.$layer.msg(this.list.data[a].error,{type:"error"}),r=!1;break}if(r){var n=this.$layer.load({message:"正在保存折扣中"}),s={userID:this.userID,resourceDiscountInfo:{}};for(var i in this.list.data)s.resourceDiscountInfo[this.list.data[i].label]=this.list.data[i].value;s.resourceDiscountInfo=JSON.stringify(s.resourceDiscountInfo),f["a"].request("/system/config/setProductDiscount",s).then((function(e){t.$layer.close(n),t.$layer.msg("设置成功",{type:"success"}),t.getDiscount()})).catch((function(e){t.$layer.msg(e.errorMsg,{type:"error"})}))}}else this.$layer.msg("请先开启计价模块。",{type:"error"})}}]),r}(d["d"]);p=Object(l["a"])([Object(d["a"])({filters:Object(s["a"])({},v["a"])})],p);var m=p,y=m,k=y,w=r("2877"),D=Object(w["a"])(k,a,n,!1,null,"4c97bb7f",null);t["default"]=D.exports},"84dc":function(e,t,r){"use strict";r("410a"),r("0814"),r("33fd"),r("6f78"),r("e3df"),r("fe82"),r("fd3a");function a(e){var t=/^\d{4,6}$/;return t.test(e)}function n(e){var t=/^[a-zA-Z0-9]{4}/;return t.test(e)&&4===e.length}function s(e){var t=/^\+?[1-9]\d*$/;return t.test(e)}function i(e){return-1!=e.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)}function c(e){var t=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/;return t.test(e)}function o(e){if(!e)return!1;var t=e.split("/");if(!c(t[0])||2!==t.length)return!1;var r=/^(0|[1-9][0-9]{0,1})$/;if(2===t.length&&!r.test(t[1])||2===t.length&&t[1]<0||2===t.length&&t[1]>32)return!1;if(2===t.length)for(var a=t[0].split("."),n=0;n<a.length;n++)if(!u(a[n],n+1,t[1]))return!1;return!0}function u(e,t,r){var a=Math.floor(r/8),n=r%8,s=/^[0-9]*$/;if(!s.test(e)||e<0||e>255)return!1;if(e=Number(e),a>=t)return!0;var i=Math.pow(2,8-n);return e%i===0}function l(e){var t=/^[a-zA-Z0-9\u4E00-\u9FA5\(\)\（\）\s]+$/;return t.test(e)}function d(e){return f(e)||h(e)}function f(e){if(""!=e){var t=e.split("-"),r=[3,7,9,10,5,8,4,2],a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",n=/^([0-9A-Z]){8}-[0-9|X]$/;if(!n.test(e))return!1;for(var s=0,i=0;i<8;i++)s+=a.indexOf(t[0].charAt(i))*r[i];var c=11-s%11+"",o=t[1]+"";return"11"==c?c="0":"10"==c?c="X":c+="",o==c}}function h(e){var t=/^(11|12|13|19|51|52|53|59|91|92|93|Y1)\d{6}[0-9A-Z]{10}$/;if(18!==e.length||!t.test(e))return!1;var r=e.substring(8,16)+"-"+e.substring(16,17);if(!f(r))return!1;for(var a=[1,3,9,27,19,26,16,17,20,29,25,13,8,24,10,30,28],n="0123456789ABCDEFGHJKLMNPQRTUWXY",s=0,i=0;i<17;i++)s+=n.indexOf(e.charAt(i))*a[i];var c=31-s%31;31===c&&(c=0);var o=n.substring(c,c+1),u=e.substring(17,18);return u===o}function b(e){var t=/^[1-9][0-9]{5}$/;return t.test(e)}function v(e){var t=/^[0-9]*$/,r=e?e.replace(/\s+/g,""):e;return!!r&&!t.test(r)}function g(e){var t=/^[\u4E00-\u9FA5]+$/;return t.test(e)}function p(e){var t=/^[a-zA-Z0-9]{5,17}$/;return t.test(e)}function m(e){var t=/^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/;return t.test(e)}function y(e){var t=/(?!^([0-9]+|[a-zA-Z]+|[()`~!@#$%^&*\\-_+=|{}\[\]:;'<>,.?\/]+)$)^[\w()`~!@#$%^&*\\-_+=|{}\[\]:;'<>,.?\/]{8,32}$/g;return t.test(e)}function k(e){var t=/^(?!^([0-9]+|[a-zA-Z]+|[!@#$%^&*()_+-=]+)$)(?![a-zA-Z0-9]+$)(?![a-z0-9!@#$%^&*()_+-=]+$)(?![A-Z0-9!@#$%^&*()_+-=]+$)[a-zA-Z0-9!@#$%^&*()_+-=]{8,32}$/g;return t.test(e)}function w(e){var t=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;return t.test(e)}function D(e,t){return JSON.stringify(e)===JSON.stringify(t)}function S(e){var t=/^[0-9]*$/;return!(!t.test(e)||e<=0||e>100)}function E(e){var t=/^[0-9]*$/;return!(!t.test(e)||e<1||e>65535)}t["a"]={captcha:a,imageCode:n,positiveInteger:s,email:i,ip:c,companyName:l,institutionCode:d,postalCode:b,address:v,name:g,passport:p,phone:m,password:y,fourPassword:k,objEqual:D,checkNetwork:o,checkNetByByte:u,money:w,weight:S,port:E}},cb7b:function(e,t,r){"use strict";var a=r("53ca"),n=(r("410a"),r("6f78"),r("b1f0"),r("3c64"),r("f454"),r("fe82"),r("e3df"),r("fb24"),r("151b"));function s(e,t,r){if(!e)return"-";var n=e.split("/");if("string"===typeof t)return i(n,t,r);if("object"===Object(a["a"])(t)){var s="";return t.forEach((function(e,a){s+=i(n,e,r),a!==t.length-1&&(s+=" | ")})),s}}function i(e,t,r){var a="";switch(t){case"house":a=e[0];break;case"groudId":a=e[1];break;case"poolCode":a=e[2];break;case"config":a=e[3];break;case"node":a=e[4];break;case"driver":a=String(r).toLocaleUpperCase();break;default:a="-"}return"NA"===a?"-":a}function c(e,t){var r;switch(t){case"set":r=e?e.length>12?e.substr(0,5)+"***"+e.substr(e.length-6,6):e.length>5?e.substr(0,2)+"***"+e.substr(e.length-3,3):e.length>3?e.substr(0,1)+"***"+e.substr(e.length-1,1):e.substr(0,1)+"***":"—";break;case"name":r=e?e.length>2?e.substr(0,1)+"*"+e.substr(e.length-1,1):e.substr(0,1)+"*":"—";break;default:r=e?e.length>5?e.substr(0,2)+"***"+e.substr(e.length-3,3):e.length>3?e.substr(0,1)+"***"+e.substr(e.length-1,1):e.substr(0,1)+"***":"-";break}return r}function o(e){return"0"==e?e="等待执行":"1"==e?e="正在执行":"2"==e?e="执行成功":("-1"==e||"-2"==e||"-1,-2"==e)&&(e="执行失败"),e}function u(e){if(!e)return"全部";var t={basic:"单节点",highavailability:"双节点",finance:"三节点"};return t[e]}function l(e,t){var r=e?e+" "+t:"无";if(e>=1024&&e/1024<1024){var a=(e/1024).toFixed(2);r=a?a+" K"+t:"无"}else if(e/1024>=1024&&e/1024/1024<1024){var n=(e/1024/1024).toFixed(2);r=n?n+" M"+t:"无"}else if(e/1024/1024>=1024){var s=(e/1024/1024/1024).toFixed(2);r=s?s+" G"+t:"无"}return r}function d(e){var t={low:"低级配置",middle:"中级配置",high:"高级配置",standard:"标准版",professional:"专业版","标准版":"standard","专业版":"professional","低级配置":"low","中级配置":"middle","高级配置":"high"};return e?t[e]:" "}function f(e){return n["a"].bandDescMap[e]?n["a"].bandDescMap[e]:e?e.replace("IP","").replace("VM_",""):"-"}function h(e){switch(e){case"ElasticByDay":return"弹性计费";case"ElasticByDayFree":return"弹性计费（免费）";case"Package":return"包年包月";case"PackageFree":return"包年包月（免费）";case"FlowByHour":return"按流量计费";case"Bandwitch":return"按带宽计费";default:return"弹性计费"}}function b(e){switch(e){case"FlowByHour":return"按流量计费";case"ElasticByDay":return"按带宽计费";default:return"按带宽计费"}}function v(e,t){var r="";switch(t){case"phone":r=e.substring(0,2)+"****"+e.substring(8);break}return r}function g(e){if(e){var t="";switch(e){case"RBD_HDD":t="中心存储";break;case"RBD_SSD":t="SSD存储";break}return t}}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"icon",r="",a="";if(!e)return"";switch(t){case"icon":r=-1!==e.indexOf("CentOS")?"icon-centos":-1!==e.indexOf("Debian")?"icon-debian":-1!==e.indexOf("Ubuntu")?"icon-ubuntu":"icon-windows",a=r;break;case"name":a=e.split("Template_")[1]}return a}function m(e){if(!e)return"";var t="";return t="vpc"===e?"VPC网络":"经典网络",t}function y(e){if(!e)return"";var t="";return"fixed"===e?t="固定带宽":"dynamic"===e&&(t="动态带宽"),t}function k(e){switch(e){case"vm":return"云主机";case"image":return"镜像";case"disk":return"云磁盘";case"snap":return"云快照";case"ip":return"云IP";case"nat":return"NAT网关";case"slb":return"SLB负载均衡";case"rds":return"云数据库RDS";case"securityGroup":return"安全组";case"securityRule":return"安全组规则";case"bandWidth":return"带宽"}return""}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",r="",a="";switch(e){case"normal":r="正常",a="icon-circle-success color-success";break;case null:case"expired":r="欠费",a="icon-forbidden color-danger";break;case"arrears":r="到期",a="icon-forbidden color-danger";break;default:return""}return"name"===t?r:a}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",r="",a="";switch(e){case"enable":r="可用",a="icon-circle-success color-success";break;case null:case"disable":r="不可用",a="icon-forbidden color-danger";break;default:return"-"}return"name"===t?r:a}function S(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",r="",a="";switch(e){case 1:r="未处理",a="icon-forbidden color-danger";break;case 2:r="已忽略",a="icon-forbidden color-info";break;case 3:r="已处理",a="icon-circle-success color-success";break;default:return""}return"name"===t?r:a}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",r="",a="",n="",s="";switch(e){case 0:r="普通",a="color: #009FEF",s="background: #009FEF",n="background: #EDF8FE";break;case 1:r="故障",a="color: #EC0000",s="background: #EC0000",n="background: #FFE0E0";break;case 2:r="严重",a="color: #F63C52",s="background: #F63C52",n="background: #FFE9EB";break;case 3:r="告警",a="color: #FE9901",s="background: #FE9901",n="background: #FFF4ED";break;case 4:r="轻微",a="color: #009FEF",s="background: #009FEF",n="background: #EDF8FE";break;case 5:r="信息",a="color: #04c55f",s="background: #04c55f",n="background: #e3fff9";break;case 6:r="关注",a="color: #16CA8D",s="background: #16CA8D",n="background: #DEF8EF";break;case 7:r="追踪",a="color: #00CDF2",s="background: #00CDF2",n="background: #EDFBFE";break;default:return r="普通",a="color: #00CDF2",s="background: #00CDF2",n="background: #EDFBFE",""}return"name"===t?r:"bgcolor"===t?n:"colorbg"===t?s:a}function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",r="",a="",n="";switch(e){case"enable":r="告警恢复",a="background: #009FEF","background: #EDF8FE",n="icon-circle-success color-success";break;case"disable":r="正在告警",a="background: #FE9901","background: #FFF4ED",n="icon-forbidden color-danger";break;default:return r="沉默通道周期",a="background: #009FEF","background: #EDF8FE",n="icon-forbidden color-info",""}return"name"===t?r:"icon"===t?n:a}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",r="",a="";switch(e){case"true":case!0:case 1:case"1":r="已开启",a="icon-enabled color-success";break;case null:case!1:case"false":case"0":case 0:r="未开启",a="icon-forbidden color-info";break;default:return""}return"name"===t?r:a}function $(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name",a="",n="";switch(e){case"expired":a="欠费停用",n="icon-forbidden color-danger";break;case"normal":1===Number(t)?(a="运行中",n="icon-enabled color-success"):(a="已停用",n="icon-forbidden color-info");break;default:return"-"}return"name"===r?a:n}function _(e){switch(e){case"rr":return"轮询";case"wrr":return"加权轮询";case"wlc":return"加权最小连接数"}}function x(e){switch(e){case"normal":case"1":return"空闲";case"used":case"0":return"已使用";default:return""}}function A(e){switch(e){case"system":case"SYS":return"系统盘";case"data":case"DATA":return"数据盘";default:return"系统盘"}}function B(e){switch(e){case"RBD_HDD":case"iSCSI_SATA":return"中心存储";case"RBD_SSD":case"iSCSI_SSD":return"SSD存储";case"LVM_SSD":return"本地SSD存储";case"LVM_HDD":return"本地中心存储"}}function I(e){var t={theDayBeforeYesterday:"前天",yesterday:"昨天",today:"今天",lastWeek:"上周",thisWeek:"本周",theMonthBeforeLastMonth:"上两月",lastMonth:"上月",thisMonth:"本月",theYearBeforeLastYear:"前年",lastYear:"去年",thisYear:"今年",nearlyFourHours:"最近四小时",nearlyDay:"最近一天",nearlyWeek:"最近一周",nearlyTwoMonth:"近两月",nearlyMonth:"最近一月",nearlyHalfYear:"最近半年",nearlyYear:"最近一年",nearlyTwelveMonth:"最近十二月",custom:"自定义"};return t[e]||e}function P(e){if(!e)return"全部";var t={fixed:"固定快照",auto:"自动快照"};return t[e]}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",r="",a="";switch(e){case"init":r="初始化",a="icon-vm-status-loading";break;case"halted":r="已关机",a="icon-halted color-info";break;case"running":r="运行中",a="icon-enabled color-success";break;case"unavailable":r="暂不可用",a="icon-forbidden color-danger";break;case"stop":r="到期停机",a="icon-forbidden color-danger";break;case"arrears":r="欠费停机",a="icon-forbidden color-danger";break}return"name"===t?r:a}function O(e){e=+e;var t=e.toFixed(2);return"¥ "+t}function N(e){return O(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ElasticByDay",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=O(e/t/a)+"/"+("ElasticByDay"===r?"天":"月");return n}function R(e){return e=+e,e=(10*e).toFixed(1),e}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return+e?Number(e).toFixed(t):e}function j(e){switch(+e){case 0:return"未生效";case 1:return"已生效";case 2:return"已取消";case 3:return"生效失败"}return e}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",r="",a="";switch(e){case"success":a="成功",r="icon-circle-success color-success";break;case"error":a="失败",r="icon-deep-error color-danger"}return"text"===t?a:r}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name";switch(e){case"enable":return"name"===t?"可用":"icon-circle-success color-success";case"disable":return"name"===t?"不可用":"icon-forbidden color-danger";default:return"-"}}t["a"]={desensitization:v,locationPipe:s,ipTypePipe:f,billingMethodPipe:h,diskMediumType:g,system:p,network:m,bandwidthModel:y,resourceNamePipe:k,resourceBillingState:w,monitorActiveState:D,monitorOperaState:S,monitorState:E,monitorHistoryState:F,resourceUseState:x,diskType:A,vmPowerStatus:M,unitPrice:T,priceFormat:O,bwBillingMethodPipe:b,StarInfoPipe:c,asyncTaskStatus:o,discount:R,wafType:d,storageType:B,snapType:P,unitBwPipe:l,getRdsCategory:u,taskStatus:j,resourceStartState:C,slbState:$,toFixed:Z,abnormalErrorTimeType:I,balanceType:_,optStatus:z,money:N,monitorGroupStatus:L}}}]);