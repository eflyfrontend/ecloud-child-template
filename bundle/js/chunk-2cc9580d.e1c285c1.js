(window["webpackJsonp_user"]=window["webpackJsonp_user"]||[]).push([["chunk-2cc9580d"],{"00b4":function(t,e,a){"use strict";a("ac1f");var n=a("23e7"),i=a("da84"),s=a("c65b"),r=a("e330"),c=a("1626"),o=a("861d"),l=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),d=i.Error,u=r(/./.test);n({target:"RegExp",proto:!0,forced:!l},{test:function(t){var e=this.exec;if(!c(e))return u(this,t);var a=s(e,this,t);if(null!==a&&!o(a))throw new d("RegExp exec method returned something other than an Object or null");return!!a}})},"06c5":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("fb6a"),a("d3b7"),a("b0c0"),a("a630"),a("3ca3"),a("ac1f"),a("00b4");var n=a("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n["a"])(t,e):void 0}}},"38d8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"system-mandate-container"},[a("page-header",{attrs:{title:"全局设置",titleIcon:"icon-vm"}}),a("div",{staticClass:"detail-container"},[a("div",{staticClass:"detail-content",staticStyle:{background:"#fff"}},[a("div",{staticClass:"detail-box",staticStyle:{width:"100%",padding:"10px 20px 0 20px"}},[t._m(0),a("div",{staticClass:"popup-container pad-b-default",staticStyle:{"padding-left":"25px"}},[a("div",{staticClass:"box flex-align-center mar-b-default"},[a("span",{staticClass:"min-width-120"},[t._v("磁盘容量上限：")]),a("efly-input",{attrs:{size:"small"},on:{change:function(e){return t.checkDisk()}},model:{value:t.disk,callback:function(e){t.disk=e},expression:"disk"}}),a("span",{staticClass:"mar-l-xs"},[t._v("GB")])],1),a("div",{staticClass:"box flex-align-center"},[a("span",{staticClass:"min-width-120"},[t._v("带宽上限：")]),a("efly-input",{attrs:{size:"small"},model:{value:t.bandwidth,callback:function(e){t.bandwidth=e},expression:"bandwidth"}}),a("span",{staticClass:"mar-l-xs"},[t._v("Mbps")])],1)])])])]),a("div",{staticClass:"detail-container pad-t-0"},[a("div",{staticClass:"detail-content",staticStyle:{background:"#fff"}},[a("div",{staticClass:"detail-box",staticStyle:{width:"100%",padding:"10px 20px 0 20px"}},[t._m(1),a("div",{staticClass:"popup-container pad-b-default",staticStyle:{"padding-left":"25px"}},[a("div",{staticClass:"box flex-align-center"},[a("span",{staticClass:"min-width-120"},[t._v("资源管理员：")]),a("select-data",{attrs:{status:t.showselect,errorMsg:"暂无可用资源管理员"}},[a("efly-select",{attrs:{size:"small",width:"300px",type:"search",searchType:"front",value:t.selectArrs,data:t.adminArr,multi:"",placeholder:"请输入资源管理员名称",main:"decribe"},on:{change:function(e){return t.inputCall(e)}}})],1),a("efly-tooltip",{staticClass:"mar-l-xs",attrs:{placement:"right",content:"资源出现到期、销毁、资源使用率过高情况时，系统额外通知的用户集",top:"-14px",left:"16px"}},[a("i",{staticClass:"icon color-primary icon-help"})])],1)])])])]),a("div",{staticClass:"detail-container pad-t-0"},[a("div",{staticClass:"detail-content pad-default",staticStyle:{background:"#fff"}},[a("efly-button",{staticClass:"btn-primary",attrs:{disabled:!t.statusbtn,size:"small"},on:{click:function(e){return t.setSystemInfo()}}},[t._v("保存")])],1)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-header"},[a("div",{staticClass:"detail-header-title"},[a("i",{staticClass:"icon icon-yuzhi"}),t._v(" 阈值设置 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-header"},[a("div",{staticClass:"detail-header-title"},[a("i",{staticClass:"icon icon-tongzhi"}),t._v(" 通知设置 ")])])}],s=(a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("d9e2"),a("06c5"));function r(t,e){var a="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=Object(s["a"])(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,o=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return c=t.done,t},e:function(t){o=!0,r=t},f:function(){try{c||null==a["return"]||a["return"]()}finally{if(o)throw r}}}}var c=a("d4ec"),o=a("bee2"),l=a("262e"),d=a("2caf"),u=(a("159b"),a("fb6a"),a("ac1f"),a("1276"),a("99af"),a("a9e3"),a("e9c4"),a("9ab4")),f=a("1b40"),h=a("65a1"),v=a("bd30"),b=function(t){Object(l["a"])(a,t);var e=Object(d["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.disk=1e3,t.bandwidth=1e3,t.adminArr=[],t.selectAdmins="",t.selectArrs=[],t.statusbtn=!0,t.showselect="loading",t}return Object(o["a"])(a,[{key:"created",value:function(){this.getUserAdmin()}},{key:"inputCall",value:function(t){this.selectAdmins="";var e="";t.forEach((function(t){e+=t.userID+","})),this.selectAdmins=e.slice(0,e.length-1)}},{key:"getAdmin",value:function(){var t=this,e={userID:v["a"].getCookie("userID")};h["a"].request("/system/config/getSystemInfo",e).then((function(e){t.selectArrs=[],t.disk=e.data.maxDiskSize,t.bandwidth=e.data.maxBandWidthCount;var a=e.data.resourceAdmin&&e.data.resourceAdmin.split(",");t.adminArr.forEach((function(e){a.forEach((function(a){a===e.userID&&t.selectArrs.push(e)}))})),t.selectAdmins=e.data.resourceAdmin,t.showselect=t.adminArr.length>0?"havedata":"nodata"})).catch((function(e){t.showselect=t.adminArr.length>0?"havedata":"nodata"}))}},{key:"getUserAdmin",value:function(){var t=this,e={};this.showselect="loading",h["a"].request("/user/query",e).then((function(e){t.adminArr=t.initList(e.data.list),t.getAdmin()})).catch((function(e){t.showselect="nodata"}))}},{key:"initList",value:function(t){var e,a={decribe:""},n=r(t);try{for(n.s();!(e=n.n()).done;){var i=e.value;a.decribe="".concat(i.accountName," (").concat(i.trueName?i.trueName:"-",")"),Object.assign(i,a)}}catch(s){n.e(s)}finally{n.f()}return t}},{key:"checkDisk",value:function(){Number(this.disk)<50?this.statusbtn=!1:this.statusbtn=!0}},{key:"setSystemInfo",value:function(){var t=this;if(!1!==this.statusbtn){var e={maxDiskSize:this.disk,maxBandWidthCount:this.bandwidth,resourceAdmin:this.selectAdmins},a={userID:v["a"].getCookie("userID"),systemLimitInfo:JSON.stringify(e)},n=this.$layer.load({message:"修改系统限制设置中..."});h["a"].request("/system/config/setSystemInfo",a).then((function(e){t.$layer.close(n),t.$layer.msg("修改成功",{type:"success"})})).catch((function(e){t.$layer.close(n),t.$layer.msg(e.errorMsg,{type:"error"})}))}}},{key:"checkParams",value:function(){}}]),a}(f["d"]);b=Object(u["a"])([f["a"]],b);var m=b,p=m,y=p,g=(a("59de"),a("2877")),x=Object(g["a"])(y,n,i,!1,null,"cc54b73e",null);e["default"]=x.exports},"4df4":function(t,e,a){"use strict";var n=a("da84"),i=a("0366"),s=a("c65b"),r=a("7b0b"),c=a("9bdd"),o=a("e95a"),l=a("68ee"),d=a("07fa"),u=a("8418"),f=a("9a1f"),h=a("35a1"),v=n.Array;t.exports=function(t){var e=r(t),a=l(this),n=arguments.length,b=n>1?arguments[1]:void 0,m=void 0!==b;m&&(b=i(b,n>2?arguments[2]:void 0));var p,y,g,x,w,C,A=h(e),k=0;if(!A||this==v&&o(A))for(p=d(e),y=a?new this(p):v(p);p>k;k++)C=m?b(e[k],k):e[k],u(y,k,C);else for(x=f(e,A),w=x.next,y=a?new this:[];!(g=s(w,x)).done;k++)C=m?c(x,b,[g.value,k],!0):g.value,u(y,k,C);return y.length=k,y}},"59de":function(t,e,a){"use strict";a("d95e")},"6b75":function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}a.d(e,"a",(function(){return n}))},"9bdd":function(t,e,a){var n=a("825a"),i=a("2a62");t.exports=function(t,e,a,s){try{return s?e(n(a)[0],a[1]):e(a)}catch(r){i(t,"throw",r)}}},a630:function(t,e,a){var n=a("23e7"),i=a("4df4"),s=a("1c7e"),r=!s((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:r},{from:i})},b0c0:function(t,e,a){var n=a("83ab"),i=a("5e77").EXISTS,s=a("e330"),r=a("9bf2").f,c=Function.prototype,o=s(c.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=s(l.exec),u="name";n&&!i&&r(c,u,{configurable:!0,get:function(){try{return d(l,o(this))[1]}catch(t){return""}}})},d95e:function(t,e,a){},fb6a:function(t,e,a){"use strict";var n=a("23e7"),i=a("da84"),s=a("e8b5"),r=a("68ee"),c=a("861d"),o=a("23cb"),l=a("07fa"),d=a("fc6a"),u=a("8418"),f=a("b622"),h=a("1dde"),v=a("f36a"),b=h("slice"),m=f("species"),p=i.Array,y=Math.max;n({target:"Array",proto:!0,forced:!b},{slice:function(t,e){var a,n,i,f=d(this),h=l(f),b=o(t,h),g=o(void 0===e?h:e,h);if(s(f)&&(a=f.constructor,r(a)&&(a===p||s(a.prototype))?a=void 0:c(a)&&(a=a[m],null===a&&(a=void 0)),a===p||void 0===a))return v(f,b,g);for(n=new(void 0===a?p:a)(y(g-b,0)),i=0;b<g;b++,i++)b in f&&u(n,i,f[b]);return n.length=i,n}})}}]);