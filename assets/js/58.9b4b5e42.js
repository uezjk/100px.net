(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{999:function(v,_,a){"use strict";a.r(_);var s=a(48),t=Object(s.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"关于这个抽奖插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于这个抽奖插件"}},[v._v("#")]),v._v(" 关于这个抽奖插件")]),v._v(" "),a("ul",[a("li",[v._v("文档太简洁了, 我看不懂")])]),v._v(" "),a("p",[v._v("目前是比较精简, 后续我写详细点, 不过大部分人都是直接去示例下面复制代码, 我提供了很多小 demo, 你直接复制就能看到效果")]),v._v(" "),a("ul",[a("li",[v._v("关于稳定性方面")])]),v._v(" "),a("p",[v._v("这个不用担心, 这个插件从 19年 开始一直在持续不断地维护, 遇到 bug 基本上都是立刻修复, 属性和功能也是向后兼容, 如果你还是担心作者可能出现失误, 那你可以锁死当前的小版本号")]),v._v(" "),a("ul",[a("li",[v._v("关于开发进度")])]),v._v(" "),a("p",[v._v("目前就我一个人在开发, 很多功能还在持续完善中, 所以不要催, 我会尽可能的先把核心功能开发出来, 然后再去开发一些额外的需求")]),v._v(" "),a("ul",[a("li",[v._v("关于跨端适配情况")])]),v._v(" "),a("p",[v._v("浏览器端目前比较完美, 唯一比较难受的就是小程序了, canvas 在小程序端是使用原生组件来渲染的, 所以他会浮在顶层, 这个我还在思考该如何优化")]),v._v(" "),a("ul",[a("li",[v._v("小程序里canvas的层级太高了，把弹窗挡住了怎么办")])]),v._v(" "),a("p",[v._v("小程序内 canvas 是原生组件，所以默认就是顶层渲染，我特意对此进行了优化，"),a("strong",[v._v("在第一次开始游戏之后: 每次结束游戏都会切换成图片来显示")]),v._v(", 但是当游戏开始时, 抽奖组件还是会切换到 canvas 来渲染")]),v._v(" "),a("p",[v._v("目前好像就微信小程序自带的弹窗也是原生组件实现的, 可以盖住 canvas")]),v._v(" "),a("p",[v._v("其余方案也就是使用 cover 组件重构弹窗, 或者你可以选择套一个 webview")]),v._v(" "),a("ul",[a("li",[v._v("小程序端为什么不用 css 去做?")])]),v._v(" "),a("p",[v._v("还是为了多端一致性, 因为我的源码只有一套, 无论是小程序端还是浏览器端, 这样做的好处是我在新增功能和修复 bug 的时候, 只需要更新 lucky-canvas 这个核心依赖即可")]),v._v(" "),a("p",[v._v("再加上不同端的标签还不一样, 还得考虑到 css 的属性兼容问题, 反而更费劲, 代码量更加巨大, 难以掌控")]),v._v(" "),a("p",[v._v("而且 canvas 可以使用 GPU 渲染, 再加上流畅的帧动画, 可以做到毫秒级的控制和渲染")]),v._v(" "),a("p",[v._v("其实单纯的只是小程序本身做的烂而已, 18 年的 bug 拖到现在也不修复, 又不是一个两个了")])])}),[],!1,null,null,null);_.default=t.exports}}]);