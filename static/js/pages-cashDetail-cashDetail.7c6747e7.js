(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-cashDetail-cashDetail"],{"380e":function(t,i,a){"use strict";(function(t){var n=a("4ea4");a("e25e"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(a("f5ba")),s=n(a("dedf")),c=n(a("77c1")),o=n(a("f2c9")),r=n(a("6a36")),v={data:function(){return{qrtxt:"FTE0028",qrcode:"",barOpations:{displayValue:!1,textPosition:"top",textAlign:"left"}}},components:{tkiBarcode:s.default,uniPopup:c.default,uniPopupMessage:o.default,uniPopupDialog:r.default},onLoad:function(){},mounted:function(){this.creatQrCode()},methods:{creatQrCode:function(){var t=e.default.createQrCodeImg(this.qrtxt,{size:parseInt(140)});this.qrcode=t},creatBarCode:function(t){},deleteCoupon:function(){this.$refs.popup.open()},deleteCouponConfirm:function(i,a){i(),t.log("輸入的核銷密碼",a)},toCouponList:function(){uni.navigateTo({url:"/pages/couponList/couponList"})}}};i.default=v}).call(this,a("5a52")["default"])},"49f1":function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return n}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"swiper-box"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:!0,"indicator-active-color":"#104178","indicator-color":"#919BA9",interval:"5000"}},[a("v-uni-swiper-item",{staticStyle:{height:"328rpx"}},[a("v-uni-view",{staticClass:"swiper-item "},[a("v-uni-image",{attrs:{src:"/static/banner2.png"}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"bg-f5",staticStyle:{padding:"0 20rpx",overflow:"hidden"}},[a("v-uni-view",{staticClass:"c-title fz32"},[t._v("購物滿$100或以上即送$21現金券（不預設消費額）只限3天")]),a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("有效期 03/01/2021")])],1),a("v-uni-view",{staticClass:"c-store flex-wrap"},[a("v-uni-image",{attrs:{src:"/static/stroe2.png"}}),a("v-uni-view",{staticClass:"flex-con",staticStyle:{"padding-left":"30rpx",overflow:"hidden"}},[a("v-uni-view",{staticClass:"fz36",staticStyle:{"margin-bottom":"20rpx"}},[t._v("九道茶餐廳")]),a("v-uni-view",{staticClass:"ellipsis fz24 color-666"},[t._v("免費領取2份籠子包")])],1),a("v-uni-button",{staticClass:"btn-focus"},[t._v("關注")])],1),a("v-uni-view",{staticClass:"c-info-list"},[a("v-uni-view",{staticClass:"m-title flex-wrap"},[a("v-uni-view",{staticClass:"m-t-icon"}),t._v("優惠詳情")],1),a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("只限週一至週五使用，週末無法使用")])],1),a("v-uni-view",{staticClass:"c-info-list"},[a("v-uni-view",{staticClass:"m-title flex-wrap"},[a("v-uni-view",{staticClass:"m-t-icon"}),t._v("條款及細則")],1),a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("滿20減5")])],1),a("v-uni-view",{staticClass:"c-info-list"},[a("v-uni-view",{staticClass:"m-title flex-wrap"},[a("v-uni-view",{staticClass:"m-t-icon"}),t._v("有效期限")],1),a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("2020/12/08-2021/02/08")])],1),a("v-uni-view",{staticClass:"c-info-list"},[a("v-uni-view",{staticClass:"m-title flex-wrap"},[a("v-uni-view",{staticClass:"m-t-icon"}),t._v("商戶資訊")],1),a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("商戶名稱：阿信便利店")]),a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("聯繫電話： +852 8888 9999"),a("v-uni-view",{staticClass:"icon"},[a("v-uni-image",{attrs:{src:"/static/icon-photo.png"}})],1)],1),a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("地址：九龍旺角彌敦道雅蘭中心1樓1101"),a("v-uni-view",{staticClass:"icon"},[a("v-uni-image",{attrs:{src:"/static/icon-address.png"}})],1)],1)],1),a("v-uni-view",{staticClass:"c-info-list"},[a("v-uni-view",{staticClass:"m-title flex-wrap"},[a("v-uni-view",{staticClass:"m-t-icon"}),t._v("其他適用分店")],1),a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("商戶名稱：阿信便利店")]),a("v-uni-view",{staticClass:"c-txt fz24 color-999 flex-wrap"},[t._v("聯繫電話： +852 8888 9999"),a("v-uni-view",{staticClass:"icon"},[a("v-uni-image",{attrs:{src:"/static/icon-photo.png"}})],1)],1),a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("地址：九龍旺角彌敦道雅蘭中心1樓1101"),a("v-uni-view",{staticClass:"icon"},[a("v-uni-image",{attrs:{src:"/static/icon-address.png"}})],1)],1)],1),a("v-uni-view",{staticClass:"c-info-list"},[a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("商戶名稱：阿信便利店")]),a("v-uni-view",{staticClass:"c-txt fz24 color-999 flex-wrap"},[t._v("聯繫電話： +852 8888 9999"),a("v-uni-view",{staticClass:"icon"},[a("v-uni-image",{attrs:{src:"/static/icon-photo.png"}})],1)],1),a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("地址：九龍旺角彌敦道雅蘭中心1樓1101"),a("v-uni-view",{staticClass:"icon"},[a("v-uni-image",{attrs:{src:"/static/icon-address.png"}})],1)],1)],1),a("v-uni-view",{staticClass:"c-info-list"},[a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("商戶名稱：阿信便利店")]),a("v-uni-view",{staticClass:"c-txt fz24 color-999 flex-wrap"},[t._v("聯繫電話： +852 8888 9999"),a("v-uni-view",{staticClass:"icon"},[a("v-uni-image",{attrs:{src:"/static/icon-photo.png"}})],1)],1),a("v-uni-view",{staticClass:"c-txt fz24 color-999"},[t._v("地址：九龍旺角彌敦道雅蘭中心1樓1101"),a("v-uni-view",{staticClass:"icon"},[a("v-uni-image",{attrs:{src:"/static/icon-address.png"}})],1)],1)],1),a("v-uni-view",{staticClass:"flex-wrap c-btn-box"},[a("v-uni-button",{attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toCouponList.apply(void 0,arguments)}}},[t._v("立即領取")]),a("v-uni-button",{attrs:{type:"default"}},[t._v("轉贈")])],1)],1)],1)},s=[]},"6e5d":function(t,i,a){"use strict";var n=a("ef00"),e=a.n(n);e.a},"721b":function(t,i,a){"use strict";a.r(i);var n=a("380e"),e=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);i["default"]=e.a},bc38:function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-c655104c]{padding:%?20?% %?40?% %?40?%;box-sizing:border-box}.main[data-v-c655104c]{\r\n  /* 輪播 */}.main .swiper[data-v-c655104c]{height:%?280?%;margin-top:%?10?%}.main .swiper-item[data-v-c655104c]{width:100%;height:100%}.main .swiper-item uni-image[data-v-c655104c]{width:100%;height:%?280?%}.main .c-store[data-v-c655104c]{margin-top:%?25?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?30?%}.main .c-store uni-image[data-v-c655104c]{width:%?180?%;height:%?150?%}.main .c-store .btn-focus[data-v-c655104c]{width:%?150?%;height:%?52?%;text-align:center;line-height:%?52?%;background-color:#00a5dd;font-size:%?32?%;border-radius:%?30?%;color:#fff}.main .pic-coupon[data-v-c655104c]{height:%?320?%;border-radius:%?12?%;overflow:hidden}.main .c-title[data-v-c655104c]{margin-top:%?14?%;margin-bottom:%?20?%}.main .c-txt[data-v-c655104c]{margin-bottom:%?10?%;padding-left:1.2em;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.main .c-txt .icon[data-v-c655104c]{width:%?30?%;height:%?30?%;margin-left:auto}.main .c-txt .icon uni-image[data-v-c655104c]{width:100%;height:100%}.main .c-info-list[data-v-c655104c]{margin-bottom:%?30?%;overflow:hidden}.main .m-title[data-v-c655104c]{padding-bottom:%?6?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?48?%}.main .m-title .m-t-icon[data-v-c655104c]{width:%?12?%;height:%?12?%;border-radius:50%;border:%?4?% solid #00a5dd;margin-right:%?14?%}.main .m-space-line[data-v-c655104c]{background-color:#f2f2f2;height:%?2?%;margin-top:%?30?%;margin-bottom:%?20?%}.main .qr-box[data-v-c655104c]{padding-top:%?30?%;padding-bottom:%?35?%;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.main .qr-box .qrcode[data-v-c655104c]{width:%?280?%;height:%?280?%;background-color:#00f}.main .qr-box .barcode[data-v-c655104c]{margin-top:%?50?%;margin-bottom:%?20?%}.main .c-btn-box[data-v-c655104c]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?36?%;overflow:hidden}.main .c-btn-box uni-button[data-v-c655104c]{width:46%;border-radius:%?50?%;font-size:%?34?%}',""]),t.exports=i},e15a:function(t,i,a){"use strict";a.r(i);var n=a("49f1"),e=a("721b");for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);a("6e5d");var c,o=a("f0c5"),r=Object(o["a"])(e["default"],n["b"],n["c"],!1,null,"c655104c",null,!1,n["a"],c);i["default"]=r.exports},ef00:function(t,i,a){var n=a("bc38");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=a("4f06").default;e("761bf2ba",n,!0,{sourceMap:!1,shadowMode:!1})}}]);