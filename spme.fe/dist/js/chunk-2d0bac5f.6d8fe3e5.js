(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bac5f"],{3947:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"teacher-home"},[a("h1",[t._v("实验总览")]),a("a-spin",{attrs:{size:"large",spinning:t.isLoading}},[a("a-icon",{attrs:{slot:"indicator",type:"loading-3-quarters",spin:!0},slot:"indicator"}),a("a-list",{staticClass:"overview-list",attrs:{itemLayout:"horizontal",dataSource:t.data},scopedSlots:t._u([{key:"renderItem",fn:function(e){return a("a-list-item",{},[a("a-button",{attrs:{slot:"actions",type:"primary"},on:{click:function(a){return t.$router.push("/administration/"+e.path)}},slot:"actions"},[t._v("查看详情")]),a("a-list-item-meta",{attrs:{description:"已有 "+e.submit+" 人提交"}},[a("a",{attrs:{slot:"title",href:"/administration/"+e.path},slot:"title"},[t._v("\n            "+t._s(e.name)+"\n          ")])])],1)}}])})],1)],1)},i=[],r=(a("96cf"),a("3b8d")),s={data:function(){return{isLoading:!0,data:[{name:"安全管理（RACF）",path:"racf",submit:"x",review:5},{name:"存储管理（SMS）",path:"sms",submit:"x",review:5},{name:"目录管理（Catalog）",path:"catalog",submit:"x",review:5},{name:"系统命令（MVS）",path:"mvs",submit:"x",review:5},{name:"脚本语言（REXX）",path:"rexx",submit:"x",review:5}]}},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.data.map(function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(a){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/api/db/submitted",{params:{lab:a.path.toUpperCase()}});case 2:n=t.sent,200===n.status&&(a.submit=n.body.length);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());case 3:this.isLoading=!1;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},o=s,u=a("2877"),c=Object(u["a"])(o,n,i,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0bac5f.6d8fe3e5.js.map