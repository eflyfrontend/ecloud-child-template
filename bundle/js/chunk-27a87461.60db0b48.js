(window["webpackJsonp_user"]=window["webpackJsonp_user"]||[]).push([["chunk-27a87461"],{"30a2":function(e,t,s){"use strict";s("b1f0"),s("fb24");function a(e){switch(e){case"customer":return"客户";case"admin":return"管理员"}}function i(e){var t=e;if(e)switch(e.toString()){case"1":t="云主机";break;case"2":t="云磁盘";break;case"3":t="云IP";break;case"4":t="云快照";break;case"5":t="账号管理";break;case"6":t="财务管理";break;case"7":t="NAT网关";break;case"8":t="VPC路由";break;case"9":t="VPC虚拟私有云";break;case"10":t="虚拟交换机";break;case"11":t="独立带宽包";break;case"12":t="共享带宽包";break;case"13":t="VPC带宽";break;case"14":t="镜像";break;case"15":t="安全组";break;case"16":t="负载均衡";break;case"17":t="RDS云数据库";break;case"18":t="弹性网卡";break;case"19":t="平台管理";break;case"20":t="客户管理";break;case"21":t="市场活动";break;case"22":t="合同业务";break;case"":t="全部";break}return t}function r(e){var t={destroy:"销毁提醒",expire:"到期提醒",opt:"操作提醒",balanceLess:"财务消息",security:"安全消息"};return t[e]}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label",s={MESSAGE_CONFIG_DESTROY:{label:"销毁提醒",id:"destroy"},MESSAGE_CONFIG_EXPIRE:{label:"到期提醒",id:"expire"},MESSAGE_CONFIG_BALANCE_LESS:{label:"余额不足",id:"balanceLess"},MESSAGE_CONFIG_MONEY:{label:"余额预警",id:"money"},MESSAGE_CONFIG_RDS_STORAGE:{label:"RDS存储容量提醒",id:"rdsStorage"}};return s[e][t]}function n(e,t){var s;switch(t){case"set":s=e?e.length>12?e.substr(0,5)+"***"+e.substr(e.length-6,6):e.length>5?e.substr(0,2)+"***"+e.substr(e.length-3,3):e.length>3?e.substr(0,1)+"***"+e.substr(e.length-1,1):e.substr(0,1)+"***":"-";break;case"name":s=e?e.length>2?e.substr(0,1)+"*"+e.substr(e.length-1,1):e.substr(0,1)+"*":"-";break;default:s="admin"===e?e:e?e.length>5?e.substr(0,2)+"***"+e.substr(e.length-3,3):e.length>3?e.substr(0,1)+"***"+e.substr(e.length-1,1):e.substr(0,1)+"***":"-";break}return s}t["a"]={userType:a,optLogType:i,messageType:r,messageSetType:l,desensitization:n}},4342:function(e,t,s){"use strict";s("82d0")},"82d0":function(e,t,s){},a434:function(e,t,s){"use strict";var a=s("23e7"),i=s("da84"),r=s("23cb"),l=s("5926"),n=s("07fa"),u=s("7b0b"),c=s("65f0"),o=s("8418"),f=s("1dde"),m=f("splice"),d=i.TypeError,h=Math.max,v=Math.min,b=9007199254740991,p="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var s,a,i,f,m,k,g=u(this),N=n(g),y=r(e,N),C=arguments.length;if(0===C?s=a=0:1===C?(s=0,a=N-y):(s=C-2,a=v(h(l(t),0),N-y)),N+s-a>b)throw d(p);for(i=c(g,a),f=0;f<a;f++)m=y+f,m in g&&o(i,f,g[m]);if(i.length=a,s<a){for(f=y;f<N-a;f++)m=f+a,k=f+s,m in g?g[k]=g[m]:delete g[k];for(f=N;f>N-a+s;f--)delete g[f-1]}else if(s>a)for(f=N-a;f>y;f--)m=f+a-1,k=f+s-1,m in g?g[k]=g[m]:delete g[k];for(f=0;f<s;f++)g[f+y]=arguments[f+2];return g.length=N-a+s,i}})},a9f9:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"info-container"},[s("page-header",{attrs:{title:"账号信息",isBack:!0}}),s("div",{staticClass:"info-content"},[s("div",{staticClass:"info-box"},[s("div",{staticClass:"info-detail"},[e._m(0),s("div",{staticClass:"info-detail-content"},[s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-item-label"},[e._v("用户账号:")]),s("div",{staticClass:"info-item-value"},[s("efly-input",{attrs:{size:"small",disabled:"",width:"370px"},model:{value:e.user.accountName,callback:function(t){e.$set(e.user,"accountName",t)},expression:"user.accountName"}})],1)]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-item-label"},[e._v("用户类型:")]),s("div",{staticClass:"info-item-value"},[s("efly-input",{attrs:{size:"small",disabled:"",width:"370px",value:e._f("userType")(e.user.userType)}})],1)]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-item-label"},[e._v("注册时间:")]),s("div",{staticClass:"info-item-value"},[s("efly-input",{attrs:{size:"small",disabled:"",width:"370px"},model:{value:e.user.createTime,callback:function(t){e.$set(e.user,"createTime",t)},expression:"user.createTime"}})],1)]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-item-label"},[e._v("手机号码:")]),s("div",{staticClass:"info-item-value"},[s("efly-input",{attrs:{size:"small",disabled:"",width:"370px"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1)]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-item-label"},[e._v("邮箱:")]),s("div",{staticClass:"info-item-value"},[s("efly-input",{attrs:{size:"small",disabled:"",width:"370px"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)]),s("div",{staticClass:"info-item"},[s("div",{staticClass:"info-item-label"},[e._v("备注:")]),s("div",{staticClass:"info-item-value"},[s("efly-input",{attrs:{size:"small",type:"textarea",placeholder:"请输入备注",width:"370px"},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)])])])])]),s("admin-footer",[s("div",{attrs:{slot:"left"},slot:"left"},[s("efly-button",{staticClass:"btn-primary layer-btn mar-r-default",attrs:{size:"small"},on:{click:function(t){return e.submit()}}},[e._v("确定")])],1)])],1)},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"info-title"},[s("i",{staticClass:"icon icon-user-info mar-r-mini"}),s("span",[e._v("基本信息")])])}],r=s("5530"),l=s("d4ec"),n=s("bee2"),u=s("262e"),c=s("2caf"),o=(s("ac1f"),s("1276"),s("a434"),s("9ab4")),f=s("1b40"),m=s("65a1"),d=s("30a2"),h=function(e){Object(u["a"])(s,e);var t=Object(c["a"])(s);function s(){var e;return Object(l["a"])(this,s),e=t.apply(this,arguments),e.list={fullName:[],shortName:[]},e.userID="",e.email="",e.user={},e.internalAccount=!1,e.remark="",e.status={data:"loading"},e}return Object(n["a"])(s,[{key:"created",value:function(){this.email=this.$route.params.email,this.getUser()}},{key:"getUser",value:function(){var e=this;this.status.data="loading";var t={customerNameLike:this.email};m["a"].request("/user/query",t).then((function(t){if(e.user=t.data.list[0],e.internalAccount=0!==e.user.isTest,e.remark=e.user.remark,e.status.data=0===t.data.count?"nodata":"havedata",""!==e.user.fullNames){var s=e.user.fullNames.split(",");for(var a in s)e.list.fullName.push({value:s[a],errorMsg:""})}if(""!==e.user.simpleNames){var i=e.user.simpleNames.split(",");for(var r in i)e.list.shortName.push({value:i[r],errorMsg:""})}})).catch((function(t){console.log(t),e.status.data="error"}))}},{key:"selectOption",value:function(e,t){this[t]=e}},{key:"checkShortName",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1?arguments[1]:void 0;return e&&(this.list.shortName[t].value=e.target.value),""===this.list.shortName[t].value?(this.list.shortName[t].errorMsg="请输入客户简称。",!1):(this.list.shortName[t].errorMsg="",!0)}},{key:"checkFullName",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1?arguments[1]:void 0;return e&&(this.list.fullName[t].value=e.target.value),""===this.list.fullName[t].value?(this.list.fullName[t].errorMsg="请输入客户全称。",!1):(this.list.fullName[t].errorMsg="",!0)}},{key:"addName",value:function(e){this.list[e].push({value:"",errorMsg:""})}},{key:"deleteInput",value:function(e,t){this.list[e].splice(t,1)}},{key:"checkBtnStatus",value:function(){var e,t=!0,s=!0;for(var a in this.list.fullName)t=!!this.checkFullName(void 0,a)&&t;for(var i in this.list.shortName)s=!!this.checkShortName(void 0,i)&&s;return e=t,e=s&&e,console.log(e),e}},{key:"submit",value:function(){var e=this;if(this.checkBtnStatus()){var t=this.$layer.load({message:"修改信息中..."}),s={isTest:this.internalAccount?1:0,fullNames:"",simpleNames:"",remark:this.remark,userID:this.user.userID};for(var a in this.list.fullName)s.fullNames+="0"===a?this.list.fullName[a].value:","+this.list.fullName[a].value;for(var i in this.list.shortName)s.simpleNames+="0"===i?this.list.shortName[i].value:","+this.list.shortName[i].value;m["a"].request("/user/updateUser",s).then((function(s){e.$layer.close(t),e.$layer.msg("修改成功",{type:"success"}),e.$router.push({path:"/user/list"})})).catch((function(s){e.$layer.close(t),e.$layer.msg(s.errorMsg,{type:"error"})}))}}},{key:"goback",value:function(){this.$router.go(-1)}}]),s}(f["d"]);h=Object(o["a"])([Object(f["a"])({filters:Object(r["a"])({},d["a"])})],h);var v=h,b=v,p=b,k=(s("4342"),s("2877")),g=Object(k["a"])(p,a,i,!1,null,"7b49810d",null);t["default"]=g.exports}}]);