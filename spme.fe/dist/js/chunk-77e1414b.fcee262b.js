(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77e1414b"],{"268f":function(t,e,n){t.exports=n("fde4")},"2fa0":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-page"},[n("h1",[t._v(t._s(t._f("formatName")(t.$route.params.lab)))]),n("a-popconfirm",{attrs:{title:"确认发布成绩？",placement:"left",okText:"确认",cancelText:"取消"},on:{confirm:t.handOutScores}},[n("a-button",{staticClass:"hand-out-score",attrs:{type:"primary"}},[n("a-icon",{attrs:{type:"notification"}}),t._v("发布成绩\n    ")],1)],1),n("a-spin",{attrs:{size:"large",spinning:t.loading}},[n("a-icon",{attrs:{slot:"indicator",type:"loading-3-quarters",spin:!0},slot:"indicator"}),n("a-table",{attrs:{columns:t.columns,dataSource:t.data,rowKey:function(t){return t.uid}},scopedSlots:t._u([{key:"status",fn:function(e){return n("span",{},[n("a-badge",{attrs:{status:e.status?"success":"default"}}),t._v("\n        "+t._s(e.status?"已批阅":"未批阅")+"\n      ")],1)}},{key:"action",fn:function(e){return n("span",{},[e.status?n("span",[n("a-button",{attrs:{type:"primary",icon:"eye"},on:{click:function(n){return t.review(e)}}},[t._v("查看")])],1):n("span",[n("a-button",{attrs:{type:"primary",icon:"edit"},on:{click:function(n){return t.review(e)}}},[t._v("批阅")])],1),n("a-divider",{attrs:{type:"vertical"}}),n("a-button",{attrs:{icon:"download"},on:{click:function(n){return t.downloadPDF(e)}}},[t._v("下载")])],1)}}])})],1),n("a",{ref:"downloadHref",attrs:{href:t.url,download:t.disposition}})],1)},r=[],o=(n("28a5"),n("a481"),n("cebc")),i=n("2f62"),c=[{title:"TSO ID",dataIndex:"uid"},{title:"实验状态",key:"status",scopedSlots:{customRender:"status"}},{title:"评分",dataIndex:"score"},{title:"评语",dataIndex:"comment"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],s={data:function(){return{data:[],loading:!1,columns:c,numPages:void 0,disposition:"",url:""}},computed:{lab:function(){return this.$route.params.lab.toUpperCase()}},created:function(){this.fetch()},mounted:function(){},watch:{$route:function(){this.fetch()}},methods:Object(o["a"])({},Object(i["b"])("report",["save"]),{fetch:function(){var t=this;this.loading=!0,this.$http.get("/api/db/submitted",{params:{lab:this.lab.toUpperCase()}}).then(function(e){t.loading=!1,t.data=e.body})},getPDF:function(t){var e=this;return new Promise(function(n){e.$http.post("/api/db/downloadPDF",{uid:t.uid,lab:e.lab.toUpperCase()},{responseType:"arraybuffer"}).then(function(a){e.disposition=a.headers.map["content-disposition"][0].split("=")[1].replace(/"/g,"");var r=[];r.push(a.body),e.url=window.URL.createObjectURL(new Blob(r,{type:"application/pdf"})),e.save(Object(o["a"])({},t,{lab:e.lab,url:e.url})),n()})})},review:function(t){var e=this;this.getPDF(t).then(function(){e.$router.push("".concat(e.lab.toLowerCase(),"/").concat(t.uid.toLowerCase()))})},downloadPDF:function(t){var e=this;this.getPDF(t).then(function(){e.$refs.downloadHref.click()})},handOutScores:function(){var t=this;this.$http.post("/api/db/reScore",{lab:this.lab.toUpperCase()}).then(function(){t.$message.success("发布成功")}).catch(function(){t.$message.error("发布失败")})}}),filters:{formatName:function(t){var e="";switch(t){case"racf":e="安全管理（RACF）";break;case"sms":e="存储管理（SMS）";break;case"catalog":e="目录管理（Catalog）";break;case"mvs":e="系统命令（MVS）";break;case"rexx":e="脚本语言（REXX）";break;default:break}return e}}},u=s,f=(n("74de"),n("2877")),l=Object(f["a"])(u,a,r,!1,null,"3960c809",null);e["default"]=l.exports},"74de":function(t,e,n){"use strict";var a=n("dae8"),r=n.n(a);r.a},"85f2":function(t,e,n){t.exports=n("454f")},a481:function(t,e,n){"use strict";var a=n("cb7c"),r=n("4bf8"),o=n("9def"),i=n("4588"),c=n("0390"),s=n("5f1b"),u=Math.max,f=Math.min,l=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,b=function(t){return void 0===t?t:String(t)};n("214f")("replace",2,function(t,e,n,h){return[function(a,r){var o=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,o,r):n.call(String(o),a,r)},function(t,e){var r=h(n,t,this,e);if(r.done)return r.value;var l=a(t),d=String(this),p="function"===typeof e;p||(e=String(e));var g=l.global;if(g){var m=l.unicode;l.lastIndex=0}var w=[];while(1){var y=s(l,d);if(null===y)break;if(w.push(y),!g)break;var k=String(y[0]);""===k&&(l.lastIndex=c(d,o(l.lastIndex),m))}for(var x="",S=0,$=0;$<w.length;$++){y=w[$];for(var O=String(y[0]),_=u(f(i(y.index),d.length),0),P=[],C=1;C<y.length;C++)P.push(b(y[C]));var D=y.groups;if(p){var j=[O].concat(P,_,d);void 0!==D&&j.push(D);var F=String(e.apply(void 0,j))}else F=v(O,d,_,P,D,e);_>=S&&(x+=d.slice(S,_)+F,S=_+O.length)}return x+d.slice(S)}];function v(t,e,a,o,i,c){var s=a+t.length,u=o.length,f=p;return void 0!==i&&(i=r(i),f=d),n.call(c,f,function(n,r){var c;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(s);case"<":c=i[r.slice(1,-1)];break;default:var f=+r;if(0===f)return n;if(f>u){var d=l(f/10);return 0===d?n:d<=u?void 0===o[d-1]?r.charAt(1):o[d-1]+r.charAt(1):n}c=o[f-1]}return void 0===c?"":c})}})},a4bb:function(t,e,n){t.exports=n("8aae")},bf90:function(t,e,n){var a=n("36c3"),r=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return r(a(t),e)}})},cebc:function(t,e,n){"use strict";var a=n("268f"),r=n.n(a),o=n("e265"),i=n.n(o),c=n("a4bb"),s=n.n(c),u=n("85f2"),f=n.n(u);function l(t,e,n){return e in t?f()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=s()(n);"function"===typeof i.a&&(a=a.concat(i()(n).filter(function(t){return r()(n,t).enumerable}))),a.forEach(function(e){l(t,e,n[e])})}return t}n.d(e,"a",function(){return d})},dae8:function(t,e,n){},e265:function(t,e,n){t.exports=n("ed33")},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(t,e,n){n("bf90");var a=n("584a").Object;t.exports=function(t,e){return a.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-77e1414b.fcee262b.js.map