(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{84:function(e,a,t){"use strict";var n=t(13),c=t(14),r=t(16),i=t(15),s=t(17),l=t(0),o=t.n(l),m=(t(85),t(10)),d=t(25),u=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(i.a)(a).call(this,e))).checkDefault=function(){console.log(t.state.receive.default),t.setState({receive:Object.assign({},t.state.receive,{default:!t.state.receive.default})})},t.changePhone=function(e){t.setState({receive:Object.assign({},t.state.receive,{phone:e.target.value})})},t.handleName=function(e){t.setState({receive:Object.assign({},t.state.receive,{name:e.target.value})})},t.handleAreaCode=function(e){t.setState({receive:Object.assign({},t.state.receive,{areaCode:e.target.value})})},t.handleLandLine=function(e){t.setState({receive:Object.assign({},t.state.receive,{landLine:e.target.value})})},t.handleAdd=function(e){t.setState({receive:Object.assign({},t.state.receive,{add:e.target.value})})},t.inspectPhone=function(){""===t.state.receive.phone.trim()||/^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/.test(t.state.receive.phone)||t.setState({phoneError:!0})},t.setPhoneError=function(){t.setState({phoneError:!1})},t.handleProvince=function(e){var a=e.target.value,n="",c=t.props.addList.filter(function(a){return parseInt(e.target.value)===a.get("area_id")&&(n=a.get("area_name")),parseInt(e.target.value)===a.get("area_id")}).toJS()[0];t.setState(function(){return{cityList:c.city_list,receive:Object.assign({},t.state.receive,{provinceId:a,province:n})}})},t.handleCity=function(e){var a=e.target.value,n="",c=t.state.cityList.filter(function(a){return parseInt(e.target.value)===a.area_id&&(n=a.area_name),parseInt(e.target.value)===a.area_id})[0];t.setState({countyList:c.county_list,receive:Object.assign({},t.state.receive,{cityId:a,city:n})})},t.handleCounty=function(e){var a="",n=e.target.value;t.state.countyList.forEach(function(e){e.area_id===parseInt(n)&&(a=e.area_name)}),t.setState({receive:Object.assign({},t.state.receive,{countyId:n,county:a})})},t.handleSave=function(){t.props.addAddress(t.state.receive),t.props.closePop(!1)},t.state={receive:{id:"",name:"",phone:"",areaCode:"",landLine:"",provinceId:0,province:"",cityId:0,city:"",countyId:0,county:"",add:"",default:!1},phoneError:!1,cityList:[],countyList:[]},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.getlist()}},{key:"render",value:function(){var e=this.props,a=e.closePop,t=e.addList,n=this.state,c=n.receive,r=n.phoneError,i=n.cityList,s=n.countyList;return o.a.createElement("div",{id:"pop"},o.a.createElement("div",{className:"module-dialog-layer",style:{display:"block"}}),o.a.createElement("div",{className:"module-dialog clear module-dialog-address module-dialog-show"},o.a.createElement("div",{className:"dialog-panel"},o.a.createElement("div",{className:"topbar"},o.a.createElement("div",{className:"dialog-tit clear"},o.a.createElement("h4",{className:"js-dialog-title"},"\u7ba1\u7406\u6536\u8d27\u5730\u5740")),o.a.createElement("span",{className:"dialog-close",onClick:function(){a(!1)}},"x")),o.a.createElement("div",{className:"dialog-con js-dialog-container"},o.a.createElement("div",{className:"animate-layer"},o.a.createElement("div",{className:"dialog-inner js-address-add"},o.a.createElement("div",{className:"save-address-box"},o.a.createElement("div",{className:"address-form"},o.a.createElement("div",{className:"module-form-row"},o.a.createElement("div",{className:"form-item-v3"},o.a.createElement("input",{type:"text",placeholder:"\u6536\u8d27\u4eba\u59d3\u540d",className:"js-verify",value:c.name,onChange:this.handleName}),o.a.createElement("div",{className:"verify-error"}))),o.a.createElement("div",{className:"module-form-row"},o.a.createElement("div",{className:r?"form-item-v3 form-invalid-item":"form-item-v3"},o.a.createElement("input",{type:"text",placeholder:"\u624b\u673a\u53f7",className:"js-verify",value:c.phone,onChange:this.changePhone,onBlur:this.inspectPhone,onFocus:this.setPhoneError}),r&&o.a.createElement("div",{className:"verify-error"},"\u624b\u673a\u53f7\u4e0d\u5408\u6cd5"))),o.a.createElement("div",{className:"module-form-row clear"},o.a.createElement("div",{className:"form-item-v3 area-code-w fn-left form-valid-item"},o.a.createElement("input",{type:"text",placeholder:"\u533a\u53f7\uff08\u53ef\u9009\uff09",className:"js-verify js-address-area-code",value:c.areaCode,onChange:this.handleAreaCode}),o.a.createElement("div",{className:"verify-error"})),o.a.createElement("div",{className:"form-item-v3 telephone-w fn-right form-valid-item"},o.a.createElement("input",{type:"text",placeholder:"\u56fa\u5b9a\u7535\u8bdd\uff08\u53ef\u9009\uff09",className:"js-verify js-address-telephone",value:c.landLine,onChange:this.handleLandLine}),o.a.createElement("div",{className:"verify-error"}))),o.a.createElement("div",{className:"module-form-row clear"},o.a.createElement("div",{className:"form-item-v3 select-item province-wrapper"},o.a.createElement("select",{name:"province_code",value:c.provinceId,className:"province select-province js-form-province js-verify",onChange:this.handleProvince},o.a.createElement("option",{value:"0"},"\u8bf7\u9009\u62e9\u7701\u4efd"),t.map(function(e){return o.a.createElement("option",{key:e.get("area_id"),value:e.get("area_id")},e.get("area_name"))})))),o.a.createElement("div",{className:"module-form-row clear"},o.a.createElement("div",{className:"form-item-v3 select-item city-wrapper fn-left form-focus-item"},o.a.createElement("select",{className:"city select-city js-form-city js-verify",value:c.cityId,onChange:this.handleCity},o.a.createElement("option",{value:"0"},"\u8bf7\u9009\u62e9\u57ce\u5e02"),i.map(function(e){return o.a.createElement("option",{key:e.area_id,value:e.area_id},e.area_name)}))),o.a.createElement("div",{className:"form-item-v3 select-item district-wrapper fn-right form-focus-item"},o.a.createElement("select",{className:"city select-city js-form-city js-verify",value:c.countyId,onChange:this.handleCounty},o.a.createElement("option",{value:"0"},"\u8bf7\u9009\u62e9\u533a\u53bf"),s.map(function(e){return o.a.createElement("option",{key:e.area_id,value:e.area_id},e.area_name)})))),o.a.createElement("div",{className:"module-form-row"},o.a.createElement("div",{className:"form-item-v3"},o.a.createElement("input",{type:"text",className:"js-verify",placeholder:"\u8be6\u7ec6\u5730\u5740\uff0c\u5982\u8857\u9053\u540d\u79f0\uff0c\u697c\u5c42\uff0c\u95e8\u724c\u53f7\u7801\u7b49",value:c.add,onChange:this.handleAdd}),o.a.createElement("div",{className:"verify-error"}))),o.a.createElement("div",{className:"module-form-row fn-clear"},o.a.createElement("input",{type:"checkbox",className:"hide"}),o.a.createElement("span",{className:c.default?"blue-checkbox blue-checkbox-on":"blue-checkbox",onClick:this.checkDefault}),"\u8bbe\u4e3a\u9ed8\u8ba4"),o.a.createElement("div",{className:"dialog-blue-btn big-main-btn js-verify-address",onClick:this.handleSave},o.a.createElement("a",null,"\u4fdd\u5b58"))))))))))}}]),a}(l.Component);a.a=Object(m.b)(function(e){return{addList:e.getIn(["Checkout","addList"])}},function(e){return{getlist:function(){e(d.a.getAddList())},addAddress:function(a){e(d.a.addAddress(a))}}})(u)},85:function(e,a,t){},86:function(e,a,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,i=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,o=Object.getPrototypeOf,m=o&&o(Object);e.exports=function e(a,t,d){if("string"!==typeof t){if(m){var u=o(t);u&&u!==m&&e(a,u,d)}var v=i(t);s&&(v=v.concat(s(t)));for(var p=0;p<v.length;++p){var h=v[p];if(!n[h]&&!c[h]&&(!d||!d[h])){var f=l(t,h);try{r(a,h,f)}catch(E){}}}return a}return a}},90:function(e,a,t){},95:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(1),i=t.n(r),s=t(86),l=t.n(s),o=t(26),m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};var d=function(e){var a=function(a){var t=a.wrappedComponentRef,n=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(a,["wrappedComponentRef"]);return c.a.createElement(o.a,{children:function(a){return c.a.createElement(e,m({},n,a,{ref:t}))}})};return a.displayName="withRouter("+(e.displayName||e.name)+")",a.WrappedComponent=e,a.propTypes={wrappedComponentRef:i.a.func},l()(a,e)};a.a=d},98:function(e,a,t){"use strict";t.r(a);var n=t(13),c=t(14),r=t(16),i=t(15),s=t(17),l=t(0),o=t.n(l),m=t(10),d=function(e){var a=e.receiveIndex,t=e.receiveInfo,n=e.changeIndex,c=e.closePop;return o.a.createElement("div",{className:"js-checkout-address-box"},o.a.createElement("div",{className:"gray-box clear"},o.a.createElement("div",{className:"title columns-title pre-title"},o.a.createElement("h2",null,"\u6536\u8d27\u4fe1\u606f")),o.a.createElement("div",{className:"box-inner js-checkout-address-panel "},o.a.createElement("div",{className:"address-common-table js-multiple-address-panel"},o.a.createElement("ul",{className:"address-item-list clear js-address-item-list"},t.map(function(e,t){return o.a.createElement("li",{className:a===t?"js-choose-address selected-address-item":"js-choose-address",key:t,onClick:function(){n(t)}},o.a.createElement("div",{className:"address-item"},o.a.createElement("div",{className:"name-section"},e.name),o.a.createElement("div",{className:"mobile-section"},e.phone),o.a.createElement("div",{className:"detail-section"},e.province," ",e.city," ",e.county," ",o.a.createElement("br",null),e.add)),o.a.createElement("div",{className:"operation-section"},o.a.createElement("span",{className:"update-btn js-edit-address"},"\u4fee\u6539"),o.a.createElement("span",{className:"delete-btn js-delete-address"},"\u5220\u9664")))}),o.a.createElement("li",{className:"add-address-item js-add-address",onClick:function(){c(!0)}},o.a.createElement("p",null,"\u4f7f\u7528\u65b0\u5730\u5740")))))))},u=function(e){var a=e.invoice,t=e.checkedInvoice,n=e.handleChangeName;return o.a.createElement("div",{className:"gray-box"},o.a.createElement("div",{className:"title"},o.a.createElement("h2",null,"\u53d1\u7968\u4fe1\u606f")),o.a.createElement("div",{className:"box-inner invoice-box js-invoice-box"},o.a.createElement("p",{className:"invoice-detail"}," \u53d1\u7968\u7c7b\u578b\uff1a\u7535\u5b50\u53d1\u7968 "),o.a.createElement("div",{className:"invoice-detail"},"\u53d1\u7968\u62ac\u5934\uff1a",o.a.createElement("div",{className:"radio-box"},o.a.createElement("label",null,o.a.createElement("input",{type:"radio",className:"hide"}),o.a.createElement("span",{className:a.personal?"blue-radio blue-radio-on":"blue-radio",onClick:function(){t(!0)}},o.a.createElement("a",null)),"\u4e2a\u4eba"),o.a.createElement("label",null,o.a.createElement("input",{type:"radio",className:"hide"}),o.a.createElement("span",{className:a.personal?"blue-radio":"blue-radio blue-radio-on",onClick:function(){t(!1)}},o.a.createElement("a",null)),"\u5355\u4f4d")),!a.personal&&o.a.createElement("div",{className:"module-form-row form-item fn-hide js-invoice-title"},o.a.createElement("div",{className:"module-form-item-wrapper no-icon small-item"},!a.name&&o.a.createElement("i",null,"\u8bf7\u586b\u5199\u516c\u53f8\u53d1\u7968\u62ac\u5934"),o.a.createElement("input",{type:"text",className:"js-verify",value:a.name,onChange:n}),!a.name&&o.a.createElement("div",{className:"verify-error"},"\u5fc5\u586b")))),o.a.createElement("p",{className:"invoice-detail"},"\u53d1\u7968\u5185\u5bb9\uff1a\u8d2d\u4e70\u5546\u54c1\u660e\u7ec6"),o.a.createElement("p",{className:"invoice-label"},"\u7535\u5b50\u53d1\u7968\u662f\u7a0e\u52a1\u5c40\u8ba4\u53ef\u7684\u6709\u6548\u6536\u4ed8\u6b3e\u51ed\u8bc1\uff0c\u53ef\u4f5c\u4e3a\u552e\u540e\u670d\u52a1\u51ed\u636e\u3002\u7535\u5b50\u53d1\u7968\u6253\u5370\u540e\u53ef\u4ee5\u7528\u4e8e\u4f01\u4e1a\u62a5\u9500\u3002")))},v=function(e){var a=e.checkedcommodity,t=e.checkPrice,n=e.freight,c=e.submitOrder;return o.a.createElement("div",{className:"gray-box"},o.a.createElement("div",{className:"title pre-title"},o.a.createElement("h2",null,"\u8d2d\u7269\u6e05\u5355")),o.a.createElement("div",{className:"box-inner ui-goods-cart"},o.a.createElement("div",{className:"gray-sub-title cart-table-title"},o.a.createElement("span",{className:"name"},"\u5546\u54c1\u540d\u79f0"),o.a.createElement("span",{className:"subtotal"},"\u5c0f\u8ba1"),o.a.createElement("span",{className:"num"},"\u6570\u91cf"),o.a.createElement("span",{className:"price"},"\u5355\u4ef7")),o.a.createElement("div",{className:"cart-table"},o.a.createElement("div",{className:"cart-group js-cart-group"},a.map(function(e){return o.a.createElement("div",{className:"cart-items",key:e.sku_id},o.a.createElement("div",{className:"items-thumb"},o.a.createElement("a",{href:"javascript:;"},o.a.createElement("img",{alt:"",src:e.ali_image}))),o.a.createElement("div",{className:"name hide-row"},o.a.createElement("div",{className:"name-cell"},o.a.createElement("a",{href:"javascript:;",title:"".concat(e.title,"(").concat(e.spec_json.show_name,")")},e.title," (",e.spec_json.show_name,")"))),o.a.createElement("div",{className:"subtotal"},o.a.createElement("div",{className:"subtotal-cell"},"\xa5 ",e.count*e.price)),o.a.createElement("div",{className:"goods-num"},e.count),o.a.createElement("div",{className:"price"},"\xa5 ",e.price))})))),o.a.createElement("div",{className:"box-inner"},o.a.createElement("div",{className:"order-discount-line"},o.a.createElement("p",null,"\u5546\u54c1\u603b\u8ba1\uff1a",o.a.createElement("span",null,"\xa5 ",t)),o.a.createElement("p",null,"\u8fd0\u8d39\uff1a",o.a.createElement("span",null,"\xa5 ",n)),o.a.createElement("p",{className:"discount-line js-discount-cash"},o.a.createElement("em",null,"\u73b0\u91d1\u5238"),"\uff1a",o.a.createElement("span",null,"0")))),o.a.createElement("div",{className:"box-inner"},o.a.createElement("div",{className:"last-payment clear"},o.a.createElement("span",{className:"jianguo-blue-main-btn big-main-btn payment-blue-bt fn-right js-checkout",onClick:c},o.a.createElement("a",null,"\u63d0\u4ea4\u8ba2\u5355")),o.a.createElement("span",{className:"prices fn-right"},"\u5e94\u4ed8\u91d1\u989d\uff1a",o.a.createElement("em",null,"\xa5 ",t+n)))))},p=t(25),h=t(8),f=t(84),E=t(95),g=(t(90),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(i.a)(a).call(this,e))).changeReceiveIndex=function(e){t.setState({receiveIndex:e})},t.checkedInvoice=function(e){t.setState({invoice:Object.assign({},t.state.invoice,{personal:e})})},t.handleChangeName=function(e){t.setState({invoice:Object.assign({},t.state.invoice,{name:e.target.value})})},t.closePop=function(e){t.setState({popShow:e})},t.handleSubmitOrder=function(){var e=t.state,a=e.invoice,n=e.receiveIndex,c=t.props,r=c.receiveInfo,i=c.checkedcommodity,s=c.checkPrice,l=c.freight,o=c.submitOrder,m=c.history;if(a.personal||a.name){var d=r[n];a.personal&&t.setState({invoice:Object.assign({},a,{name:"\u4e2a\u4eba"})});var u=new Date,v=u.getMonth()+1,p=u.getDate();v>=1&&v<=9&&(v="0"+v),p>=1&&p<=9&&(p="0"+p);var h={orderId:u.getTime(),goodsData:i,price:s,freight:l,invoiceName:a.name,iDate:u.getFullYear()+"-"+v+"-"+p,receiveInfo:d,isPay:!1};m.push("/payment/".concat(h.orderId)),o(h)}},t.state={receiveIndex:0,invoice:{personal:!0,name:""},popShow:!1},t}return Object(s.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.receiveInfo.forEach(function(a,t){a.default&&e.changeReceiveIndex(t)})}},{key:"render",value:function(){var e=this.state,a=e.receiveIndex,t=e.invoice,n=e.popShow,c=this.props,r=c.receiveInfo,i=c.checkedcommodity,s=c.checkPrice,l=c.freight;return o.a.createElement("div",{id:"main"},o.a.createElement("div",{className:"content page-order-checkout checkout"},o.a.createElement(d,{receiveIndex:a,changeIndex:this.changeReceiveIndex,receiveInfo:r,closePop:this.closePop}),o.a.createElement(u,{checkedInvoice:this.checkedInvoice,handleChangeName:this.handleChangeName,invoice:t}),o.a.createElement(v,{checkedcommodity:i,checkPrice:s,freight:l,submitOrder:this.handleSubmitOrder})),n?o.a.createElement(f.a,{closePop:this.closePop}):"")}}]),a}(l.Component));a.default=Object(E.a)(Object(m.b)(function(e){return{receiveInfo:e.getIn(["Checkout","receiveInfo"]).toJS(),checkedcommodity:h.c.checkedcommodity(e),checkPrice:h.c.checkPrice(e),freight:h.c.freight(e)}},function(e){return{addAddress:function(a){e(p.a.addAddress(a))},submitOrder:function(a){e(p.a.submitOrder(a)),e(h.a.delCheckAll())}}})(g))}}]);
//# sourceMappingURL=4.a30411e3.chunk.js.map