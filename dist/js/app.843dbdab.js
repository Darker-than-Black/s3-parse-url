(function(t){function e(e){for(var n,c,u=e[0],i=e[1],s=e[2],p=0,f=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("e37d"),o=r("5f5b"),c=r("b1e0"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{id:"app",fluid:""}},[r("b-row",[r("b-col",{staticClass:"mt-2",attrs:{cols:"12",sm:"10"}},[r("b-form-input",{attrs:{type:"email",placeholder:"Url"},on:{input:t.debounceMethod},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1),r("b-col",{staticClass:"mt-2",attrs:{cols:"12",sm:"2"}},[r("copy-to-clipboard",{attrs:{content:t.url}},[t._v(" Копіювати посилання ")])],1)],1),r("b-row",{staticClass:"mt-4"},t._l(t.data,(function(e,n){return r("b-col",{key:e.name+"-"+n,attrs:{cols:"12",md:"4",lg:"3"}},[r("b-card",{staticClass:"mb-2",attrs:{"img-src":e.url,"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",[r("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.name))])]),r("copy-to-clipboard",{attrs:{content:e.url}},[t._v(" Копіювати посилання на зображення ")])],1)],1)})),1)],1)},i=[],s=r("1da1"),l=(r("96cf"),r("d81d"),r("b0c0"),r("99af"),r("f7fe")),p=r.n(l),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dark-tooltip"},[r("b-button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{shown:t.shown,container:".dark-tooltip",content:t.popupText,triggers:["click"]},expression:"{\n      shown,\n      container: '.dark-tooltip',\n      content: popupText,\n      triggers: ['click'],\n    }"}],attrs:{variant:"outline-primary"},on:{click:t.copyToClipboard}},[t._t("default")],2)],1)},d=[],b=function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!navigator.clipboard){t.next=3;break}return t.next=3,navigator.clipboard.writeText(e);case 3:r=document.createElement("textarea"),r.value=e,document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=1e3,h={name:"CopyToClipboard",props:{content:{type:String,required:!0},popupText:{type:String,default:"URL зкопійовано"}},data:function(){return{shown:!1}},methods:{copyToClipboard:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.shown=!0,e.next=3,b(t.content);case 3:setTimeout((function(){return t.shown=!1}),m);case 4:case"end":return e.stop()}}),e)})))()}}},v=h,g=r("2877"),y=Object(g["a"])(v,f,d,!1,null,null,null),w=y.exports,x=r("d4ec"),k=r("bee2"),O=(r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("9861"),r("ac1f"),r("841c"),r("c1f9"),function(){function t(e){Object(x["a"])(this,t),this.param=e}return Object(k["a"])(t,[{key:"setQueryParam",value:function(t){var e=new URL(location.href);e.searchParams.set(this.param,t),history.pushState(null,"",e)}},{key:"getQueryParam",value:function(){var t=new URLSearchParams(window.location.search),e=Object.fromEntries(t.entries()),r=e[this.param],n=void 0===r?"":r;return n}}]),t}()),j=r("bc3a"),_=r.n(j),C=function(){function t(){Object(x["a"])(this,t)}return Object(k["a"])(t,[{key:"getJson",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_.a.get(e);case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),P="url",T=new O(P),R=new C,S=500,M={name:"App",components:{CopyToClipboard:w},data:function(){return{url:"",data:[]}},created:function(){this.url=T.getQueryParam(),this._getApiData()},methods:{debounceMethod:p()((function(){T.setQueryParam(this.url),this._getApiData()}),S),_getApiData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.url){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,R.getJson(t.url);case 5:r=e.sent,n=r.objects,t.data=n.map((function(e){var r=e.name;return{name:r,url:"".concat(t.url).concat(r)}})),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))()}}},A=M,E=(r("5c0b"),Object(g["a"])(A,u,i,!1,null,null,null)),J=E.exports;r("f9e3"),r("2dd8");n["default"].use(a["a"]),n["default"].use(o["a"]),n["default"].use(c["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(J)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.843dbdab.js.map