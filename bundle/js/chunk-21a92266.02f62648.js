(window["webpackJsonp_user"]=window["webpackJsonp_user"]||[]).push([["chunk-21a92266"],{"3ff0":function(t,s,a){"use strict";a("d844")},b0c0:function(t,s,a){var i=a("83ab"),e=a("5e77").EXISTS,r=a("e330"),n=a("9bf2").f,o=Function.prototype,l=r(o.toString),c=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,d=r(c.exec),u="name";i&&!e&&n(o,u,{configurable:!0,get:function(){try{return d(c,l(this))[1]}catch(t){return""}}})},d844:function(t,s,a){},fa55:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("page-header",{attrs:{title:("create"===t.status.operate?"新增":"修改")+"角色",titleIcon:"icon-create"}}),a("div",{staticClass:"create-container"},[a("div",{staticClass:"create-content popup-container flex-column"},[a("efly-tip",{staticClass:"popup-item",attrs:{icon:"icon-cycel-exclamation",width:"100%",type:"primary"}},[t._v(" 修改权限类型名的时候，对应账户权限名也会同步修改 ")]),a("div",{staticClass:"popup-item"},[a("div",{staticClass:"popup-item-label"},[t._v("角色名称：")]),a("efly-tooltip",{staticClass:"box flex-column",attrs:{content:t.errorMsg.name,trigger:""!==t.errorMsg.name?"show":"hide",position:"relative",top:"2px",left:"-6px",placement:"bottom-left"}},[a("div",{staticClass:"popup-item-content box"},[a("efly-input",{attrs:{size:"small",width:"300px",placeholder:"请输入权限类型，128字符以内",maxLenght:"128"},on:{change:function(s){return t.checkName()}},model:{value:t.name,callback:function(s){t.name=s},expression:"name"}}),a("span",{staticClass:"box flex-center color-danger font-default pad-lr-xs"},[t._v("*")])],1)])],1),a("div",{staticClass:"popup-item"},[a("div",{staticClass:"popup-item-label"},[t._v("备注：")]),a("div",{staticClass:"popup-item-content"},[a("efly-input",{attrs:{size:"small",width:"300px",placeholder:"128字符以内(选填)",maxLenght:"128"},model:{value:t.remark,callback:function(s){t.remark=s},expression:"remark"}})],1)]),a("div",{staticClass:"popup-item"},[a("div",{staticClass:"popup-item-label"},[t._v("系统模块选择：")]),a("div",{staticClass:"popup-item-content"},[a("efly-select",{attrs:{size:"small",width:"300px",data:t.list.permission,value:t.permission,main:"label"},on:{change:function(s){return t.selectOption(s,"permission")}}})],1)]),a("div",{staticClass:"popup-item"},[a("div",{staticClass:"popup-item-label"},[t._v("系统权限设置：")]),a("div",{staticClass:"popup-item-content box flex-column"},[a("div",{staticClass:"box flex-justify-start flex-align-center",staticStyle:{height:"34px"}},[a("efly-checkbox",{attrs:{active:t.checkAll},on:{click:function(s){return t.selectCheckAll(!t.checkAll)}}},[t._v("全选")])],1),a("div",{staticClass:"permission-container"},t._l(t.permission.data,(function(s,i){return a("div",{staticClass:"permission-content"},[a("div",{staticClass:"permission-header"},[a("div",{staticClass:"permission-title"},[a("efly-checkbox",{attrs:{active:s.status},on:{click:function(a){return t.selectContent(i,!s.status)}}},[t._v(t._s(s.label)+" ")])],1),a("i",{staticClass:"icon pointer",class:{"icon-top-arrow":s.show,"icon-down-arrow":!s.show},on:{click:function(s){return t.showPermission(i)}}})]),t._l(s.data,(function(e,r){return s.show?a("div",{staticClass:"permission-box"},[a("div",{staticClass:"permission-box-header"},[a("efly-checkbox",{staticClass:"color-primary",attrs:{active:e.status},on:{click:function(s){return t.selectBox(i,r,!e.status)}}},[t._v(" "+t._s(e.label)+" ")])],1),a("div",{staticClass:"permission-detail permission-detail-four",class:{"mar-b-default":e.data&&r==s.data.length-1}},t._l(e.data,(function(s,e){return a("div",{staticClass:"permission-item",on:{click:function(a){return t.selectItem(i,r,e,!s.status)}}},[a("efly-checkbox",{attrs:{active:s.status},on:{click:function(a){return t.selectItem(i,r,e,!s.status)}}},[t._v(" "+t._s(s.label)+" ")])],1)})),0)]):t._e()}))],2)})),0)])])],1)]),a("admin-footer",[a("div",{attrs:{slot:"left"},slot:"left"},[a("efly-button",{staticClass:"btn-primary mar-r-mini",attrs:{size:"small"},on:{click:function(s){return t.submit()}}},[t._v("确定")]),a("efly-button",{staticClass:"btn-outline-primary",attrs:{size:"small"},on:{click:function(s){return t.back()}}},[t._v("取消")])],1)])],1)},e=[],r=a("d4ec"),n=a("bee2"),o=a("262e"),l=a("2caf"),c=(a("b0c0"),a("e9c4"),a("9ab4")),d=a("1b40"),u=a("89c2"),p=a("65a1"),h=a("bd30"),m=function(t){Object(o["a"])(a,t);var s=Object(l["a"])(a);function a(){var t;return Object(r["a"])(this,a),t=s.apply(this,arguments),t.list={permission:u["a"].permission},t.name="",t.remark="",t.checkAll=!1,t.errorMsg={name:""},t.status={operate:"create"},t}return Object(n["a"])(a,[{key:"created",value:function(){this.userID=h["a"].getUserID(),u["a"].initPermission(),this.list.permission=u["a"].permission,this.permission=this.list.permission.systemSetup,this.$route.params.id&&(this.status.operate="modify",this.getRole())}},{key:"getRole",value:function(){var t=this,s={userID:this.userID,id:this.$route.params.id};p["a"].request("/user/privilege/getRoleInfoByID",s).then((function(s){for(var a in t.role=s.data,t.name=t.role.name,t.remark=t.role.remark,t.$forceUpdate(),t.role.list)t.getPermission(t.role.list[a])})).catch((function(s){t.status.data="error"}))}},{key:"getPermission",value:function(t){for(var s in this.list.permission)for(var a in this.list.permission[s].data)if(this.list.permission[s].data[a].data)for(var i in this.list.permission[s].data[a].data)if(this.list.permission[s].data[a].data[i].data)for(var e in this.list.permission[s].data[a].data[i].data)this.list.permission[s].data[a].data[i].data[e].id===t.id&&this.list.permission[s].data[a].data[i].data[e].oam===t.oam&&(this.list.permission[s].data[a].data[i].data[e].status=!0);else this.list.permission[s].data[a].data[i].id===t.id&&this.list.permission[s].data[a].data[i].oam===t.oam&&(this.list.permission[s].data[a].data[i].status=!0);this.checkAllSelect()}},{key:"selectOption",value:function(t,s){switch(this[s]=t,s){case"permission":this.checkAllSelect();break}this.$forceUpdate()}},{key:"showPermission",value:function(t){this.permission.data[t].show=!this.permission.data[t].show}},{key:"selectItem",value:function(t,s,a,i){this.permission.data[t].data[s].data[a].status=i,this.checkAllSelect()}},{key:"selectBox",value:function(t,s,a){this.permission.data[t].data[s].status=a,this.setBox(t,s,a)}},{key:"setBox",value:function(t,s,a){if(this.permission.data[t].data[s].data)for(var i in this.permission.data[t].data[s].data)this.selectItem(t,s,i,a);else this.checkAllSelect()}},{key:"selectContent",value:function(t,s){this.permission.data[t].status=s,this.setContent(t,s)}},{key:"setContent",value:function(t,s){if(this.permission.data[t].data)for(var a in this.permission.data[t].data)this.permission.data[t].data[a].status=s,this.selectBox(t,a,s);else this.checkAllSelect()}},{key:"selectCheckAll",value:function(t){for(var s in this.permission.data)this.selectContent(s,t);2===this.permission.id&&this.selectContent(5,!0)}},{key:"checkAllSelect",value:function(){var t={checkAll:!0,content:!0,box:!0};for(var s in this.permission.data){for(var a in t.content=!!this.permission.data[s].data||this.permission.data[s].status,this.permission.data[s].data){for(var i in t.box=!!this.permission.data[s].data[a].data||this.permission.data[s].data[a].status,this.permission.data[s].data[a].data)this.permission.data[s].data[a].data[i],this.permission.data[s].data[a].data[i].status||(t.box=!1);this.permission.data[s].data[a].status=t.box,this.permission.data[s].data[a].status||(t.content=!1)}this.permission.data[s].status=t.content,this.permission.data[s].status||(t.checkAll=!1)}this.checkAll=t.checkAll}},{key:"checkName",value:function(){return""===this.name?(this.errorMsg.name="请输入角色名称。",!1):(this.errorMsg.name="",!0)}},{key:"checkBtnStatus",value:function(){var t=this.checkName();return t}},{key:"submit",value:function(){this.checkBtnStatus()&&("create"===this.status.operate?this.create():this.modify())}},{key:"create",value:function(){var t=this,s=this.$layer.load({message:"创建角色中..."}),a={name:this.name,remark:this.remark,authorityList:[]};for(var i in this.list.permission)for(var e in this.list.permission[i].data)if(this.list.permission[i].data[e].data)for(var r in this.list.permission[i].data[e].data)if(this.list.permission[i].data[e].data[r].data)for(var n in this.list.permission[i].data[e].data[r].data)this.list.permission[i].data[e].data[r].data[n].status&&a.authorityList.push(this.list.permission[i].data[e].data[r].data[n]);else this.list.permission[i].data[e].data[r].status&&a.authorityList.push(this.list.permission[i].data[e].data[r]);a.authorityList=JSON.stringify(a.authorityList),p["a"].request("/user/privilege/addRole",a).then((function(a){t.$layer.close(s),t.$layer.msg("创建成功",{type:"success"}),t.$router.back(),t.$emit("success")})).catch((function(a){t.$layer.close(s),t.$layer.msg(a.errorMsg,{type:"error"})}))}},{key:"modify",value:function(){var t=this,s=this.$layer.load({message:"修改权限中..."}),a={name:this.name,remark:this.remark,authorityList:[],id:this.$route.params.id};for(var i in this.list.permission)for(var e in this.list.permission[i].data)if(this.list.permission[i].data[e].data)for(var r in this.list.permission[i].data[e].data)if(this.list.permission[i].data[e].data[r].data)for(var n in this.list.permission[i].data[e].data[r].data)this.list.permission[i].data[e].data[r].data[n].status&&a.authorityList.push(this.list.permission[i].data[e].data[r].data[n]);else this.list.permission[i].data[e].data[r].status&&a.authorityList.push(this.list.permission[i].data[e].data[r]);a.authorityList=JSON.stringify(a.authorityList),p["a"].request("/user/privilege/updateRole",a).then((function(a){t.$layer.close(s),t.$layer.msg("修改成功",{type:"success"}),t.$router.back(),t.$emit("success")})).catch((function(a){t.$layer.close(s),t.$layer.msg(a.errorMsg,{type:"error"})}))}},{key:"back",value:function(){this.$router.go(-1)}}]),a}(d["d"]);m=Object(c["a"])([d["a"]],m);var f=m,v=f,y=v,k=(a("3ff0"),a("2877")),b=Object(k["a"])(y,i,e,!1,null,"2bec4b19",null);s["default"]=b.exports}}]);