(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-couponList-couponList"],{"27fe":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tabs flex-wrap"},[i("v-uni-view",{staticClass:"scroll-h flex-wrap"},[t._l(t.tabBars,(function(e,a){return i("v-uni-view",{key:e.id,staticClass:"uni-tab-item flex-con",attrs:{id:e.id,"data-current":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabtap.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-tab-item-title fz28",class:t.tabIndex==a?"uni-tab-item-title-active":""},[t._v(t._s(e.name))])],1)})),i("v-uni-view",{staticClass:"tab-bar-line"})],2),i("v-uni-swiper",{staticClass:"swiper-box",staticStyle:{flex:"1",padding:"0 20rpx"},attrs:{current:t.tabIndex,duration:300},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabchange.apply(void 0,arguments)}}},t._l(t.newsList,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"swiper-item"},[i("v-uni-scroll-view",{staticClass:"scroll-v list",attrs:{enableBackToTop:"true","scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore(a)}}},[t._l(e.data,(function(e){return i("v-uni-view",{key:e.id,staticClass:"c-box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toCouponDetail(e.id)}}},[i("v-uni-view",{staticClass:"title flex-wrap"},[i("v-uni-view",{staticClass:"name"},[t._v("購物滿或以上即送現金券（不預設消費額）只限3天")]),i("v-uni-view",{staticClass:"pic"},[i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"/static/stroe2.png"}})],1)],1),i("v-uni-view",{staticClass:"c-info flex-wrap"},[i("v-uni-view",[i("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("有效期 03/01/2021")]),i("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("領取時間  2020/12/23 09:00")])],1),i("v-uni-button",{staticClass:"btn-to fz28"},[t._v("轉贈")])],1)],1)})),e.isLoading||e.data.length>4?i("v-uni-view",{staticClass:"loading-more"},[i("v-uni-text",{staticClass:"loading-more-text"},[t._v(t._s(e.loadingText))])],1):t._e()],2)],1)})),1)],1)},r=[]},"2ec2":function(t,e,i){var a=i("f023");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("d0c949f6",a,!0,{sourceMap:!1,shadowMode:!1})},"308f":function(t,e,i){"use strict";i.r(e);var a=i("fcc2"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"4a13":function(t,e,i){"use strict";var a=i("2ec2"),n=i.n(a);n.a},d481:function(t,e,i){"use strict";i.r(e);var a=i("27fe"),n=i("308f");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("4a13");var o,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"38a0de78",null,!1,a["a"],o);e["default"]=c.exports},f023:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-38a0de78]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.tabs[data-v-38a0de78]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;background-color:#fafafa}.scroll-h[data-v-38a0de78]{width:%?750?%;width:100%;padding-top:%?44?%;padding-bottom:%?30?%;white-space:nowrap\r\n  /* flex-wrap: nowrap; */\r\n  /* border-color: #cccccc;\r\n\t\tborder-bottom-style: solid;\r\n\t\tborder-bottom-width: 1px; */}.c-box[data-v-38a0de78]{padding:%?40?%;background-color:#fff;border-radius:10px;margin-bottom:%?30?%;overflow:hidden;position:relative}.c-box[data-v-38a0de78]:before{content:"";position:absolute;left:%?-30?%;top:50%;z-index:9;width:%?60?%;height:%?60?%;border-radius:50%;background-color:#fafafa;-webkit-transform:translate(-2px,-62%);transform:translate(-2px,-62%)}.c-box[data-v-38a0de78]:after{content:"";position:absolute;right:%?-30?%;top:50%;z-index:9;width:%?60?%;height:%?60?%;border-radius:50%;background-color:#fafafa;-webkit-transform:translate(2px,-62%);transform:translate(2px,-62%)}.c-box .title[data-v-38a0de78]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?20?%;border-bottom:%?2?% dashed #e6e6e6}.c-box .title .name[data-v-38a0de78]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.c-box .title .pic[data-v-38a0de78]{width:%?148?%;height:%?72?%;margin-left:%?44?%}.c-box .c-info[data-v-38a0de78]{padding:%?30?% 0 0;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.c-box .c-info .c-txt[data-v-38a0de78]:not(:last-child){margin-bottom:%?16?%}.c-box .c-info .btn-to[data-v-38a0de78]{width:%?154?%;height:%?50?%;line-height:%?50?%;text-align:center;border-radius:15px 3px 15px 3px;margin-right:0;background-color:#87d106}.line-h[data-v-38a0de78]{height:%?1?%;background-color:#ccc}.uni-tab-item[data-v-38a0de78]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:%?30?%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;text-align:center;border-right:%?3?% solid #e6e6e6}.scroll-h .uni-tab-item[data-v-38a0de78]:nth-child(3){border-right:none}.uni-tab-item-title[data-v-38a0de78]{color:#555;font-size:%?30?%;height:%?80?%;line-height:%?80?%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;white-space:nowrap}.uni-tab-item-title-active[data-v-38a0de78]{color:#00a5dd}.swiper-box[data-v-38a0de78]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.swiper-item[data-v-38a0de78]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.scroll-v[data-v-38a0de78]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?750?%;width:100%;height:100%}.update-tips[data-v-38a0de78]{position:absolute;left:0;top:41px;right:0;padding-top:5px;padding-bottom:5px;background-color:#fddd9b;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.update-tips-text[data-v-38a0de78]{font-size:14px;color:#fff}.refresh[data-v-38a0de78]{width:%?750?%;width:100%;height:64px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.refresh-view[data-v-38a0de78]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.refresh-icon[data-v-38a0de78]{width:30px;height:30px;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:15px 15px;transform-origin:15px 15px}.refresh-icon-active[data-v-38a0de78]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.loading-icon[data-v-38a0de78]{width:20px;height:20px;margin-right:5px;color:#999}.loading-text[data-v-38a0de78]{margin-left:2px;font-size:16px;color:#999}.loading-more[data-v-38a0de78]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:10px;padding-bottom:10px;text-align:center}.loading-more-text[data-v-38a0de78]{font-size:%?28?%;color:#999}',""]),t.exports=e},fcc2:function(t,e,i){"use strict";(function(t){i("99af"),i("c975"),i("a434"),i("d3b7"),i("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=100,n=3,r={data0:{datetime:"40分钟前",article_type:0,title:"uni-app行业峰会频频亮相，开发者反响热烈!",source:"DCloud",comment_count:639},data1:{datetime:"一天前",article_type:1,title:"DCloud完成B2轮融资，uni-app震撼发布!",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data2:{datetime:"一天前",article_type:2,title:"中国技术界小奇迹：HBuilder开发者突破200万",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:11395},data3:{article_type:3,image_list:[{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",width:563,height:316},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90",width:641,height:360},{url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90",width:640,height:360}],datetime:"5分钟前",title:"uni-app 支持使用 npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11},data4:{datetime:"2小时前",article_type:4,title:"uni-app 支持原生小程序自定义组件，更开放、更自由",image_url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90",source:"DCloud",comment_count:69}},o={data:function(){return{newsList:[{data:[{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1}],isLoading:!1,refreshText:"",loadingText:"加载更多..."},{data:[{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1}],isLoading:!1,refreshText:"",loadingText:"加载更多..."},{data:[{a:1}],isLoading:!1,refreshText:"",loadingText:"加载更多..."}],cacheTab:[],tabIndex:0,tabBars:[{name:"待使用",id:"i1"},{name:"已使用",id:"i2"},{name:"已失效",id:"i3"}],scrollInto:"",showTips:!1,navigateFlag:!1,pulling:!1,refreshIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="}},onLoad:function(){},methods:{toCouponDetail:function(e){t.log(e),uni.navigateTo({url:"/pages/couponDetail/couponDetail?id="+e})},getList:function(t){for(var e=this.newsList[t],i=[],a=1;a<=10;a++){var n=Object.assign({},r["data"+Math.floor(5*Math.random())]);n.id=this.newGuid(),i.push(n)}e.data=e.data.concat(i)},goDetail:function(t){var e=this;this.navigateFlag||(this.navigateFlag=!0,uni.navigateTo({url:"./detail/detail?title="+t.title}),setTimeout((function(){e.navigateFlag=!1}),200))},close:function(t,e){var i=this;uni.showModal({content:"是否删除本条信息？",success:function(a){a.confirm&&i.newsList[t].data.splice(e,1)}})},loadMore:function(e){t.log(e)},ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(e)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},switchTab:function(t){if(0===this.newsList[t].data.length&&this.getList(t),this.tabIndex!==t){if(this.newsList[this.tabIndex].data.length>a){var e=this.cacheTab.indexOf(this.tabIndex);e<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto=this.tabBars[t].id,this.cacheTab.length>n){var i=this.cacheTab[0];this.clearTabData(i),this.cacheTab.splice(0,1)}}},clearTabData:function(t){this.newsList[t].data.length=0,this.newsList[t].loadingText="加载更多..."},refreshData:function(){},onrefresh:function(t){var e=this,i=this.newsList[this.tabIndex];i.refreshFlag&&(i.refreshing=!0,i.refreshText="正在刷新...",setTimeout((function(){e.refreshData(),e.pulling=!0,i.refreshing=!1,i.refreshFlag=!1,i.refreshText="已刷新",setTimeout((function(){e.pulling=!1}),500)}),2e3))},onpullingdown:function(t){var e=this.newsList[this.tabIndex];e.refreshing||this.pulling||(Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(e.refreshFlag=!0,e.refreshText="释放立即刷新"):(e.refreshFlag=!1,e.refreshText="下拉可以刷新"))},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()}}};e.default=o}).call(this,i("5a52")["default"])}}]);