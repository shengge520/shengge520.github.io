(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{366:function(t,s,a){"use strict";a.r(s);var r=a(12),l=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"组件懒加载和路由懒加载底层原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件懒加载和路由懒加载底层原理"}},[t._v("#")]),t._v(" 组件懒加载和路由懒加载底层原理?")]),t._v(" "),s("ol",[s("li",[t._v("是什么？")])]),t._v(" "),s("p",[t._v("路由懒加载就是使用到该页面的时候才会去加载这个页面")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("原理？")])]),t._v(" "),s("p",[t._v("webpack按需加载路由组件(Webpack编译打包后，会把每个路由组件的代码分割成一一个js文件，初始化时不会加载这些js文件，只当激活路由组件才会去加载对应的js文件。 )")]),t._v(" "),s("p",[t._v("扩展：")]),t._v(" "),s("h1",{attrs:{id:"图片懒加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载"}},[t._v("#")]),t._v(" 图片懒加载")]),t._v(" "),s("ol",[s("li",[t._v("判断图片是否达到可视化区域，如果达到可视化区域的话就给img设置src属性。然后再进行绑定 window 的 scroll 事件对其进行监听，在页面初始化的时候，图片的src实际上是放在data-src属性上的，当元素处于可视范围内的时候，就把data-src赋值给src属性，完成图片加载。")])])])}),[],!1,null,null,null);s.default=l.exports}}]);