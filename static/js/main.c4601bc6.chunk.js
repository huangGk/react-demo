(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"addAddress",function(){return l}),a.d(n,"getAddList",function(){return i}),a.d(n,"submitOrder",function(){return u}),a.d(n,"isPay",function(){return o}),a.d(n,"delAddress",function(){return d});var r={};a.r(r),a.d(r,"addAddress",function(){return v}),a.d(r,"AddList",function(){return p}),a.d(r,"getAddList",function(){return E}),a.d(r,"submitOrder",function(){return g}),a.d(r,"payNow",function(){return b}),a.d(r,"delAddress",function(){return j});var c=a(2),l="checkout/addAddress",i="checkout/getAddList",u="checkout/submitOrder",o="checkout/isPay",d="checkout/delAddress",s=Object(c.fromJS)({receiveInfo:[{id:"1553160754",name:"\u738b\u67d0\u67d0",phone:"13811111111",areaCode:"010",landLine:"64627856",provinceId:11e4,province:"\u5317\u4eac\u5e02",cityId:110100,city:"\u5e02\u8f96\u533a",countyId:110106,county:"\u6d77\u6dc0\u533a",add:"\u4e0a\u5730\u5341\u8857\u8f89\u714c\u56fd\u9645\u897f6\u53f7\u697c319\u5ba4",default:!1},{id:"1553160778",name:"\u674e\u67d0\u67d0",phone:"13811111111",areaCode:"010",landLine:"64627856",provinceId:11e4,province:"\u5317\u4eac\u5e02",cityId:110100,city:"\u5e02\u8f96\u533a",countyId:110106,county:"\u6d77\u6dc0\u533a",add:"\u4e0a\u5730\u5341\u8857\u8f89\u714c\u56fd\u9645\u4e1c6\u53f7\u697c350\u5ba4",default:!0}],addList:[],orderInfo:[]}),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return e.set("receiveInfo",e.get("receiveInfo").push(t.data));case i:return e.set("addList",t.data);case u:return e.set("orderInfo",e.get("orderInfo").unshift(t.data));case o:return e.set("orderInfo",e.get("orderInfo").map(function(e){return e.get("orderId")===t.orderId?e.set("isPay",!0):e}));case d:return console.log(t),e.set("receiveInfo",e.get("receiveInfo").filter(function(e){return e.get("id")!==t.id}));default:return e}},f=a(11),h=a.n(f),v=function(e){return e.id=(new Date).getTime(),{type:n.addAddress,data:Object(c.fromJS)(e)}},p=function(e){return{type:n.getAddList,data:Object(c.fromJS)(e)}},E=function(){return function(e){h.a.get("/api/addList.json").then(function(t){0===t.data.code&&e(p(t.data.data))}).catch(function(e){console.log(e)})}},g=function(e){return{type:n.submitOrder,data:Object(c.fromJS)(e)}},b=function(e){return{type:n.isPay,orderId:e}},j=function(e){return{type:n.delAddress,id:e}};a.d(t,"c",function(){return m}),a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r})},35:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"getSkuId",function(){return u}),a.d(n,"getList",function(){return o});var r={};a.r(r),a.d(r,"descItem",function(){return f});var c=a(2),l=a(11),i=a.n(l),u=function(e){return{type:"Item/getSku_id",id:String(e)}},o=function(){return function(e){i.a.get("/api/item.json").then(function(t){var a;0===t.data.code&&e((a=t.data.data,{type:"Item/detail",data:Object(c.fromJS)(a)}))}).catch(function(e){console.log(e)})}},d=Object(c.fromJS)({List:[],sku_id:String}),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Item/detail":return e.set("List",t.data);case"Item/getSku_id":return e.set("sku_id",t.id);default:return e}},m=a(7),f=Object(m.a)([function(e){return e.getIn(["Item","List"])},function(e){return e.getIn(["Item","sku_id"])}],function(e,t){return e.filter(function(e){return e.get("sku_id")===t})});a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s}),a.d(t,"c",function(){return r})},36:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"getList",function(){return o});var r=a(2),c=Object(r.fromJS)({shopList:[]}),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"shop/getList":return e.set("shopList",t.data);default:return e}},i=a(11),u=a.n(i),o=function(){return function(e){u.a.get("shopList.json").then(function(t){var a;0===t.data.code&&e((a=t.data.data,{type:"shop/getList",data:Object(r.fromJS)(a)}))}).catch(function(e){console.log(e)})}};a.d(t,"b",function(){return l}),a.d(t,"a",function(){return n})},42:function(e,t,a){e.exports=a(77)},51:function(e,t,a){},52:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),l=a.n(c),i=a(13),u=a(14),o=a(16),d=a(15),s=a(17),m=a(78),f=a(10),h=a(8),v=function(){return r.a.createElement("div",{className:"empty"},r.a.createElement("h3",null,"\u8d2d\u7269\u8f66\u4e3a\u7a7a"),r.a.createElement("p",null,"\u60a8\u8fd8\u6ca1\u6709\u9009\u8d2d\u4efb\u4f55\u5546\u54c1\uff0c\u73b0\u5728\u524d\u5f80\u5546\u57ce\u9009\u8d2d\u5427!"))},p=function(e){var t=e.totlePrice,a=e.totleCount,n=e.carPanelData,c=e.delCarPanelHandle;return r.a.createElement("div",{className:"full"},r.a.createElement("div",{className:"nav-cart-items"},r.a.createElement("ul",null,n.map(function(e){return r.a.createElement("li",{className:"clear",key:e.get("sku_id")},r.a.createElement("div",{className:"cart-item js-cart-item cart-item-sell"},r.a.createElement("div",{className:"cart-item-inner"},r.a.createElement("div",{className:"item-thumb"},r.a.createElement("img",{alt:"",src:e.get("ali_image")})),r.a.createElement("div",{className:"item-desc"},r.a.createElement("div",{className:"cart-cell"},r.a.createElement("h4",null,r.a.createElement(m.a,{to:"/item/".concat(e.get("sku_id"))},e.get("title"))),r.a.createElement("p",{className:"attrs"},r.a.createElement("span",null,e.getIn(["spec_json","show_name"]))),r.a.createElement("h6",null,r.a.createElement("span",{className:"price-icon"},"\xa5"),r.a.createElement("span",{className:"price-num"},e.get("price"),"x"),r.a.createElement("span",{className:"item-num"},e.get("count"))))),r.a.createElement("div",{className:"del-btn",onClick:function(){c(e.get("sku_id"))}},"\u5220\u9664"))))}))),r.a.createElement("div",{className:"nav-cart-total"},r.a.createElement("p",null,"\u5171 ",r.a.createElement("strong",{className:"ng-binding"},a),"\u4ef6\u5546\u54c1"),r.a.createElement("h5",null,"\u5408\u8ba1\uff1a",r.a.createElement("span",{className:"price-icon"},"\xa5"),r.a.createElement("span",{className:"price-num ng-binding","ng-bind":"cartMenu.totalPrice"},t)),r.a.createElement("h6",null,r.a.createElement(m.a,{className:"nav-cart-btn",to:"/cart"},"\u53bb\u8d2d\u7269\u8f66"))))},E=function(e){var t=e.count,a=e.totlePrice,n=e.carPanelData,c=e.delCarPanelHandle;return r.a.createElement("div",{className:"nav-cart-wrapper"},r.a.createElement("div",{className:"nav-cart-list"},t?r.a.createElement(p,{totleCount:t,totlePrice:a,carPanelData:n,delCarPanelHandle:c}):r.a.createElement(v,null)))},g=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.count,a=e.cartShow,n=e.totlePrice,c=e.carPanelData,l=e.delCarPanelHandle,i=e.showCarHandle,u=e.hideCarHandle;return r.a.createElement("li",{className:"nav-cart",onMouseEnter:i,onMouseLeave:u},r.a.createElement("a",{href:"javascript:;",className:"ball-rect"},"\u8d2d\u7269\u8f66"),r.a.createElement("span",{className:t?"cart-num cart-empty-num":"cart-empty-num"},r.a.createElement("i",null,t)),a?r.a.createElement(E,{count:t,totlePrice:n,carPanelData:c,delCarPanelHandle:l}):null)}}]),t}(n.Component),b=Object(f.b)(function(e){return{cartShow:e.getIn(["Header","cartShow"]),count:h.c.totleCount(e),totlePrice:h.c.totlePrice(e),carPanelData:e.getIn(["Header","carPanelData"])}},function(e){return{delCarPanelHandle:function(t){e(h.a.delCarPanelItem(t))},showCarHandle:function(){e(h.a.showCarHandle())},hideCarHandle:function(){e(h.a.hideCarHandle())}}})(g),j=(a(51),Object(f.b)(null,null)(function(){return r.a.createElement("div",{id:"header"},r.a.createElement("div",{className:"nav-global"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"nav-logo"},r.a.createElement("a",{href:"javascript:void(0)"})),r.a.createElement("ul",{className:"nav-aside"},r.a.createElement("li",{className:"nav-user"},r.a.createElement("a",{href:"javascript:void(0)"},"\u4e2a\u4eba\u4e2d\u5fc3"),r.a.createElement("div",{className:"nav-user-wrapper"},r.a.createElement("div",{className:"nav-user-list"},r.a.createElement("dl",{className:"nav-user-avatar"},r.a.createElement("dd",null,r.a.createElement("span",{className:"ng-scope"})),r.a.createElement("dt",{className:"ng-binding"},"+86 138****9453")),r.a.createElement("ul",null,r.a.createElement("li",{className:"order"},r.a.createElement(m.a,{className:"order",tag:"li",to:"/account"},"\u6211\u7684\u8ba2\u5355")),r.a.createElement("li",{className:"support"},r.a.createElement("a",{href:"javascript:void(0)"},"\u552e\u540e\u670d\u52a1")),r.a.createElement("li",{className:"coupon"},r.a.createElement("a",{href:"javascript:void(0)"},"\u6211\u7684\u4f18\u60e0")),r.a.createElement("li",{className:"information"},r.a.createElement("a",{href:"javascript:void(0)"},"\u8d26\u6237\u8d44\u6599")),r.a.createElement("li",{className:"address"},r.a.createElement(m.a,{to:"/account/address"},"\u6536\u8d27\u5730\u5740")),r.a.createElement("li",{className:"logout"},r.a.createElement("a",{href:"javascript:void(0)"},"\u9000\u51fa")))))),r.a.createElement(b,null)),r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"\u5728\u7ebf\u5546\u57ce")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"\u575a\u679c Pro")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"Smartisan M1 / M1L")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"Smartisan OS")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"\u6b22\u559c\u4e91")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"\u5e94\u7528\u4e0b\u8f7d")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"\u5b98\u65b9\u8bba\u575b"))))),r.a.createElement("div",{className:"nav-sub"},r.a.createElement("div",{className:"nav-sub-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"\u9996\u9875")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"\u624b\u673a")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"\u201c\u8db3\u8ff9\u7cfb\u5217\u201d\u624b\u611f\u819c")),r.a.createElement("li",{className:"active"},r.a.createElement(m.a,{to:"/"},"\u5b98\u65b9\u914d\u4ef6")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"\u5468\u8fb9\u4ea7\u54c1")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"\u7b2c\u4e09\u65b9\u914d\u4ef6")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"\u5168\u90e8\u5546\u54c1")),r.a.createElement("li",null,r.a.createElement("a",{href:"javascript:void(0)"},"\u670d\u52a1")))))))})),k=(a(52),a(80)),P=a(81),N=a(79),O=a(9),y=a.n(O),C=function(e){return e.error?r.a.createElement("div",null,"Error!"):e.pastDelay?r.a.createElement("div",null,"\u6b63\u5728\u52a0\u8f7d......."):null},H=a(12),I=a(39),S=a(36),w=a(35),_=a(25),D=Object(I.combineReducers)({Shop:S.b,Header:h.b,Item:w.b,Checkout:_.c}),J=a(40),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.c,A=Object(H.d)(D,L(Object(H.a)(J.a))),x=y()({loader:function(){return a.e(6).then(a.bind(null,101))},loading:C}),F=y()({loader:function(){return a.e(5).then(a.bind(null,96))},loading:C}),M=y()({loader:function(){return a.e(8).then(a.bind(null,99))},loading:C}),T=y()({loader:function(){return a.e(4).then(a.bind(null,98))},loading:C}),B=y()({loader:function(){return a.e(7).then(a.bind(null,97))},loading:C}),R=y()({loader:function(){return a.e(3).then(a.bind(null,100))},loading:C}),W=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{store:A},r.a.createElement("div",{className:"App"},r.a.createElement(k.a,null,r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(P.a,null,r.a.createElement(N.a,{path:"/",exact:!0,component:x}),r.a.createElement(N.a,{path:"/item/:id",component:F}),r.a.createElement(N.a,{path:"/cart",component:M}),r.a.createElement(N.a,{path:"/checkout",component:T}),r.a.createElement(N.a,{path:"/payment/:orderId",component:B}),r.a.createElement(N.a,{path:"/account",component:R}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"addcarPanel",function(){return u}),a.d(n,"subCarPanel",function(){return o}),a.d(n,"plusCarPanelData",function(){return d}),a.d(n,"delCarPanelItem",function(){return s}),a.d(n,"hideCarHandle",function(){return m}),a.d(n,"showCarHandle",function(){return f}),a.d(n,"closePrompt",function(){return h}),a.d(n,"checkItem",function(){return v}),a.d(n,"checkAll",function(){return p}),a.d(n,"delCheckAll",function(){return E});var r={};a.r(r),a.d(r,"totleCount",function(){return j}),a.d(r,"totlePrice",function(){return k}),a.d(r,"checkPrice",function(){return P}),a.d(r,"checkedcommodity",function(){return N}),a.d(r,"checkCount",function(){return O}),a.d(r,"freight",function(){return y}),a.d(r,"allChecked",function(){return C});var c=a(2),l=Object(c.fromJS)({carPanelData:[],cartShow:!1,maxOff:!1}),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Header/delcarPanel":var a=e.get("carPanelData").toJS();return e.set("carPanelData",Object(c.fromJS)(a.filter(function(e){return e.sku_id!==t.sku_id})));case"Header/addcarPanel":t.data=t.data.toJS();var n=e.get("carPanelData").toJS(),r=!0,i=!1;return n.forEach(function(e){e.sku_id===t.data.sku_id&&(e.count+=t.data.count,r=!1,e.count>e.limit_num&&(e.count-=t.data.count,i=!0))}),r?(n.push(t.data),e.merge({carPanelData:Object(c.fromJS)(n),cartShow:!0})):e.merge({carPanelData:Object(c.fromJS)(n),cartShow:!0,maxOff:i});case"Header/showCarHandle":return e.set("cartShow",!0);case"Header/hideCarHandle":return e.set("cartShow",!1);case"Header/closeDialog":return e.set("maxOff",!1);case"Header/subCarPanel":var u=e.get("carPanelData").toJS().map(function(e){if(e.sku_id===t.sku_id){if(e.count<=1)return e;e.count--}return e});return e.set("carPanelData",Object(c.fromJS)(u));case"Header/plusCarPanelData":var o=e.get("carPanelData").toJS().map(function(e){if(e.sku_id===t.sku_id){if(e.count>=e.limit_num)return e;e.count++}return e});return e.set("carPanelData",Object(c.fromJS)(o));case"Header/checkItem":var d=e.get("carPanelData").toJS();return d.forEach(function(e){e.sku_id===t.sku_id&&(e.checked=!e.checked)}),e.set("carPanelData",Object(c.fromJS)(d));case"Header/delCheckAll":return e.set("carPanelData",e.get("carPanelData").filter(function(e){return!e.get("checked")}));case"Header/checkAll":return e.set("carPanelData",e.get("carPanelData").map(function(e){return e.set("checked",!t.isChecked)}));default:return e}},u=function(e){return{type:"Header/addcarPanel",data:e}},o=function(e){return{type:"Header/subCarPanel",sku_id:e}},d=function(e){return{type:"Header/plusCarPanelData",sku_id:e}},s=function(e){return{type:"Header/delcarPanel",sku_id:e}},m=function(){return{type:"Header/hideCarHandle"}},f=function(){return{type:"Header/showCarHandle"}},h=function(){return{type:"Header/closeDialog"}},v=function(e){return{type:"Header/checkItem",sku_id:e}},p=function(e){return{type:"Header/checkAll",isChecked:e}},E=function(){return{type:"Header/delCheckAll"}},g=a(7),b=function(e){return e.getIn(["Header","carPanelData"])},j=Object(g.a)(b,function(e){var t=0;return e.forEach(function(e){t+=parseFloat(e.get("count"))}),t}),k=Object(g.a)(b,function(e){var t=0;return e.forEach(function(e){t+=parseFloat(e.get("price"))*parseFloat(e.get("count"))}),t}),P=Object(g.a)(b,function(e){var t=0;return e.forEach(function(e){e.get("checked")&&(t+=parseFloat(e.get("price"))*parseFloat(e.get("count")))}),t}),N=Object(g.a)(b,function(e){var t=[];return e.forEach(function(e){e.get("checked")&&t.push(e.toJS())}),t}),O=Object(g.a)(b,function(e){var t=0;return e.forEach(function(e){e.get("checked")&&(t+=parseFloat(e.get("count")))}),t}),y=Object(g.a)([P,O],function(e,t){var a=8;return(e>88||!t)&&(a=0),a}),C=Object(g.a)(b,function(e){var t=!0;return e.forEach(function(e){e.get("checked")||(t=!1)}),t});a.d(t,"b",function(){return i}),a.d(t,"a",function(){return n}),a.d(t,"c",function(){return r})}},[[42,1,2]]]);
//# sourceMappingURL=main.c4601bc6.chunk.js.map