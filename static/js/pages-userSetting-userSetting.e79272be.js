(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-userSetting-userSetting"],{"0fd6":function(t,e,i){"use strict";i.r(e);var n=i("fe20"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},1365:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.text?i("v-uni-text",{staticClass:"uni-badge",class:t.inverted?"uni-badge--"+t.type+" uni-badge--"+t.size+" uni-badge--"+t.type+"-inverted":"uni-badge--"+t.type+" uni-badge--"+t.size,style:t.badgeStyle,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._v(t._s(t.text))]):t._e()},r=[]},"1fcc":function(t,e,i){var n=i("cff7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("e81bf3b6",n,!0,{sourceMap:!1,shadowMode:!1})},"232f":function(t,e,i){"use strict";i.r(e);var n=i("710f"),a=i("0fd6");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("343a");var o,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"67ca22c9",null,!1,n["a"],o);e["default"]=l.exports},"343a":function(t,e,i){"use strict";var n=i("3a4e"),a=i.n(n);a.a},"3a4e":function(t,e,i){var n=i("b0ff");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("37e79a33",n,!0,{sourceMap:!1,shadowMode:!1})},"4ee8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-badge[data-v-fe4056fe]{display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;overflow:hidden;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:20px;line-height:20px;color:#333;border-radius:100px;background-color:#f1f1f1;background-color:initial;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;padding:0 6px}.uni-badge--inverted[data-v-fe4056fe]{padding:0 5px 0 0;color:#f1f1f1}.uni-badge--default[data-v-fe4056fe]{color:#333;background-color:#f1f1f1}.uni-badge--default-inverted[data-v-fe4056fe]{color:#999;background-color:initial}.uni-badge--primary[data-v-fe4056fe]{color:#fff;background-color:#007aff}.uni-badge--primary-inverted[data-v-fe4056fe]{color:#007aff;background-color:initial}.uni-badge--success[data-v-fe4056fe]{color:#fff;background-color:#4cd964}.uni-badge--success-inverted[data-v-fe4056fe]{color:#4cd964;background-color:initial}.uni-badge--warning[data-v-fe4056fe]{color:#fff;background-color:#f0ad4e}.uni-badge--warning-inverted[data-v-fe4056fe]{color:#f0ad4e;background-color:initial}.uni-badge--error[data-v-fe4056fe]{color:#fff;background-color:#dd524d}.uni-badge--error-inverted[data-v-fe4056fe]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-fe4056fe]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}',""]),t.exports=e},"59d4":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=n},6914:function(t,e,i){var n=i("4ee8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("49e663f6",n,!0,{sourceMap:!1,shadowMode:!1})},"710f":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniListItem:i("ba3e").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"flex-wrap",staticStyle:{padding:"40rpx","box-sizing":"border-box","min-height":"100%"}},[i("v-uni-view",{staticClass:"sec-form flex-con"},[i("v-uni-view",{staticClass:"list-item"},[i("uni-list-item",{attrs:{to:"/pages/userInfo/userInfo",showArrow:!0,title:"基礎信息"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPage("/pages/index/index")}}})],1),i("v-uni-view",{staticClass:"list-item"},[i("uni-list-item",{attrs:{to:"/pages/userEmail/userEmail",showArrow:!0,title:"更改電郵地址"}})],1),i("v-uni-view",{staticClass:"list-item"},[i("uni-list-item",{attrs:{to:"/pages/userPhone/userPhone",showArrow:!0,title:"更改手機號"}})],1),i("v-uni-view",{staticClass:"list-item"},[i("uni-list-item",{attrs:{to:"/pages/FAQ/FAQ",showArrow:!0,title:"常見問題"}})],1),i("v-uni-view",{staticClass:"list-item"},[i("uni-list-item",{attrs:{to:"/pages/aboutMe/aboutMe",showArrow:!0,title:"關於我們"}})],1)],1)],1)},r=[]},"75a8":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("e4aa").default,uniBadge:i("d626").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-list-item",class:{"uni-list-item--disabled":t.disabled},attrs:{"hover-class":!t.clickable&&!t.link||t.disabled||t.showSwitch?"":"uni-list-item--hover"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isFirstChild?t._e():i("v-uni-view",{staticClass:"border--left",class:{"uni-list--border":t.border}}),i("v-uni-view",{staticClass:"uni-list-item__container",class:{"container--right":t.showArrow||t.link,"flex--direction":"column"===t.direction}},[t._t("header",[i("v-uni-view",{staticClass:"uni-list-item__header"},[t.thumb?i("v-uni-view",{staticClass:"uni-list-item__icon"},[i("v-uni-image",{staticClass:"uni-list-item__icon-img",class:["uni-list--"+t.thumbSize],attrs:{src:t.thumb}})],1):t.showExtraIcon?i("v-uni-view",{staticClass:"uni-list-item__icon"},[i("uni-icons",{attrs:{color:t.extraIcon.color,size:t.extraIcon.size,type:t.extraIcon.type}})],1):t._e()],1)]),t._t("body",[i("v-uni-view",{staticClass:"uni-list-item__content",class:{"uni-list-item__content--center":t.thumb||t.showExtraIcon||t.showBadge||t.showSwitch}},[t.title?i("v-uni-text",{staticClass:"uni-list-item__content-title",class:[0!==t.ellipsis&&t.ellipsis<=2?"uni-ellipsis-"+t.ellipsis:""]},[t._v(t._s(t.title))]):t._e(),t.note?i("v-uni-text",{staticClass:"uni-list-item__content-note"},[t._v(t._s(t.note))]):t._e()],1)]),t._t("footer",[t.rightText||t.showBadge||t.showSwitch?i("v-uni-view",{staticClass:"uni-list-item__extra",class:{"flex--justify":"column"===t.direction}},[t.rightText?i("v-uni-text",{staticClass:"uni-list-item__extra-text"},[t._v(t._s(t.rightText))]):t._e(),t.showBadge?i("uni-badge",{attrs:{type:t.badgeType,text:t.badgeText}}):t._e(),t.showSwitch?i("v-uni-switch",{attrs:{disabled:t.disabled,checked:t.switchChecked},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onSwitchChange.apply(void 0,arguments)}}}):t._e()],1):t._e()])],2),t.showArrow||t.link?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:16,color:"#bbb",type:"arrowright"}}):t._e()],1)},r=[]},b0ff:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-67ca22c9]{background-color:#f5f5f9;min-height:100%;height:100%;width:100%}.sec-form[data-v-67ca22c9]{background-color:#fff;border-radius:%?16?%;padding:%?20?% %?40?%}.sec-form[data-v-67ca22c9] .uni-list--border{bottom:0;top:auto}.sec-form[data-v-67ca22c9] .uni-list--border:after{bottom:0;top:auto}.form-item[data-v-67ca22c9]{margin-bottom:%?20?%}.form-item .title[data-v-67ca22c9]{font-size:%?30?%;padding-bottom:%?20?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.form-item .item-txt[data-v-67ca22c9]{margin:%?20?% 0;padding:0 %?10?%}body.?%PAGE?%[data-v-67ca22c9]{background-color:#f5f5f9}',""]),t.exports=e},ba3e:function(t,e,i){"use strict";i.r(e);var n=i("75a8"),a=i("bfec");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("c9dd");var o,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"92f34746",null,!1,n["a"],o);e["default"]=l.exports},bfec:function(t,e,i){"use strict";i.r(e);var n=i("ebd9"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},c9dd:function(t,e,i){"use strict";var n=i("1fcc"),a=i.n(n);a.a},cff7:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-list-item[data-v-92f34746]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%;position:relative;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-list-item--disabled[data-v-92f34746]{opacity:.3}.uni-list-item--hover[data-v-92f34746]{background-color:#f1f1f1}.uni-list-item__container[data-v-92f34746]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?24?% %?30?%;padding-left:%?30?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.container--right[data-v-92f34746]{padding-right:0}.uni-list--border[data-v-92f34746]{position:absolute;top:0;right:0;left:0}.uni-list--border[data-v-92f34746]:after{position:absolute;top:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-list-item__content[data-v-92f34746]{display:-webkit-box;display:-webkit-flex;display:flex;padding-right:8px;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3b4144;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;overflow:hidden}.uni-list-item__content--center[data-v-92f34746]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-list-item__content-title[data-v-92f34746]{font-size:%?28?%;color:#3b4144;overflow:hidden}.uni-list-item__content-note[data-v-92f34746]{margin-top:%?6?%;color:#999;font-size:%?24?%;overflow:hidden}.uni-list-item__extra[data-v-92f34746]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-item__header[data-v-92f34746]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-item__icon[data-v-92f34746]{margin-right:%?18?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-list-item__icon-img[data-v-92f34746]{display:block;height:%?52?%;width:%?52?%}.uni-icon-wrapper[data-v-92f34746]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px}.flex--direction[data-v-92f34746]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:initial;-webkit-align-items:initial;align-items:normal}.flex--justify[data-v-92f34746]{-webkit-box-pack:initial;-webkit-justify-content:initial;justify-content:normal}.uni-list--lg[data-v-92f34746]{height:%?80?%;width:%?80?%}.uni-list--base[data-v-92f34746]{height:%?52?%;width:%?52?%}.uni-list--sm[data-v-92f34746]{height:%?40?%;width:%?40?%}.uni-list-item__extra-text[data-v-92f34746]{color:#999;font-size:%?24?%}.uni-ellipsis-1[data-v-92f34746]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.uni-ellipsis-2[data-v-92f34746]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}',""]),t.exports=e},d626:function(t,e,i){"use strict";i.r(e);var n=i("1365"),a=i("e419");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("fcf2");var o,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"fe4056fe",null,!1,n["a"],o);e["default"]=l.exports},e419:function(t,e,i){"use strict";i.r(e);var n=i("59d4"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},ebd9:function(t,e,i){"use strict";(function(t){var n=i("4ea4");i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("e4aa")),r=n(i("d626")),o={name:"UniListItem",components:{uniIcons:a.default,uniBadge:r.default},props:{direction:{type:String,default:"row"},title:{type:String,default:""},note:{type:String,default:""},ellipsis:{type:[Number],default:0},disabled:{type:[Boolean,String],default:!1},clickable:{type:Boolean,default:!1},showArrow:{type:[Boolean,String],default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:{type:String,default:""},badgeType:{type:String,default:"success"},rightText:{type:String,default:""},thumb:{type:String,default:""},thumbSize:{type:String,default:"base"},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:function(){return{type:"contact",color:"#000000",size:20}}},border:{type:Boolean,default:!0}},data:function(){return{isFirstChild:!1}},mounted:function(){this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0))},methods:{getForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniList",e=this.$parent,i=e.$options.name;while(i!==t){if(e=e.$parent,!e)return!1;i=e.$options.name}return e},onClick:function(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},onSwitchChange:function(t){this.$emit("switchChange",t.detail)},openPage:function(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi:function(e){var i=this;uni[e]({url:this.to,success:function(t){i.$emit("click",{data:t})},fail:function(e){i.$emit("click",{data:e}),t.error(e.errMsg)}})}}};e.default=o}).call(this,i("5a52")["default"])},fcf2:function(t,e,i){"use strict";var n=i("6914"),a=i.n(n);a.a},fe20:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},mounted:function(){},methods:{toPage:function(e){t.log(e),uni.showToast({title:"我點了啊"})}}};e.default=i}).call(this,i("5a52")["default"])}}]);