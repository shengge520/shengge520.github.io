(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{386:function(a,r,n){"use strict";n.r(r);var t=n(12),e=Object(t.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"第二题-找出下列正数组的最大差值"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第二题-找出下列正数组的最大差值"}},[a._v("#")]),a._v(" 第二题：找出下列正数组的最大差值")]),a._v(" "),r("p",[a._v("输入 [10,5,11,7,8,9]\n输出 6")]),a._v(" "),r("ul",[r("li",[a._v("方法一：")])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function getGapValue(arr){\n    var max=arr[0];\n    var min=arr[0];\n    var res=0;\n    for (var i = 1; i < arr.length; i++) {\n        if(arr[i]>max){\n            max=arr[i];\n        }\n        if(arr[i]<min){\n            min=arr[i]\n        }\n        res=max-min;\n    }\n    return res;\n}\n")])])]),r("ul",[r("li",[a._v("方法二：")])]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("function getGapValue(arr){\n    const item1 = Math.max.apply(null,arr);\n    const item2 = Math.min.apply(null,arr);\n    return item1 - item2; \n}\n")])])])])}),[],!1,null,null,null);r.default=e.exports}}]);