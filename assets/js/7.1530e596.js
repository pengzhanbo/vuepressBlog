(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{64:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("hr"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("从模板的定义中，我们可以发现，“避免在每次使用格式的时候重复创建”，从这句话来看，模板可以让我们避免重复的工作。那么，web平台有没有提供原生支持呢？")]),t._v(" "),a("p",[t._v("答案是，有，在 "),a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/scripting.html#the-template-element",target:"_blank",rel:"noopener noreferrer"}},[t._v("WhatWG HTML 模板规范"),a("OutboundLink")],1),t._v("中，它定义了一个新的"),a("code",[t._v("<template>")]),t._v(" 元素，用于描述一个标准的以DOM为基础的方案来实现客户端模板。该模板允许你定义一段可以被转为 HTML 的标记，在页面加载时不生效，但可以在后续进行动态实例化。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),a("p",[t._v("模板中的资源，比如图片资源，只有被激活后，才会发出请求。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),a("p",[t._v("从目前来看，IE13+开始支持，低于此版本的IE均无法使用，如果有项目只需要考虑 webkit内核的浏览器，template标签还是可以一用。")]),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("如果浏览器不支持template标签，那么就会认为是一个普通的自定义元素，内部的标签会被作为一般的标签被渲染。")]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("HTML 模板标准化进程耗时十分长久。从过去到现在，出现了很多各种各样的方法去创建可重用的模板。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),a("p",[t._v("使用这种方式，有利有弊：")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),a("p",[t._v("这种方法是对方法一的一种改进，但也有新的利弊：")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),a("p",[t._v("利弊：")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("模板标准化，使得我们在做web开发整个过程更加健全，更容易维护。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"webcomponent——template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webcomponent——template","aria-hidden":"true"}},[this._v("#")]),this._v(" WebComponent——template")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("em",[this._v("pengzhanbo")]),this._v(" |\n"),s("em",[this._v("2018-03-19")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"template-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template-简介","aria-hidden":"true"}},[this._v("#")]),this._v(" template 简介")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在web开发领域中，模板并不少见。从服务器端的模板语言，如"),s("code",[this._v("Django")]),this._v("、"),s("code",[this._v("jsp")]),this._v("等，应用十分广泛，存在了很长时间。又如前端，早期例如"),s("code",[this._v("art(artTemplate)")]),this._v("，以及近年来，大多数的MV*框架涌现，绝大多数在展现层使用了同样的渲染机制：模板。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("strong",[this._v("定义")]),s("br"),this._v("\n模板，一个拥有预制格式的文档或者文件，可作为特定应用的出发点，这样就避免在每次使用格式的时候都重复创建。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#声明","aria-hidden":"true"}},[this._v("#")]),this._v(" 声明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("跟普通的html标签一样，"),s("code",[this._v("template")]),this._v("标签包含的内容，即是声明的模板内容。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("content"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("“模板内容”本质上，是 "),s("strong",[this._v("一大块的惰性可复制DOM")]),this._v("。在这个例子中，标签内的元素并不会被渲染，图片资源也不会发出请求。模板可以理解为单个零件，在整个应用的生命周期中，你都可以使用、以及重用它。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[this._v("#")]),this._v(" 特性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用"),s("code",[this._v("<template>")]),this._v("标签包裹我们的内容，可以为我们提供一下几个重要的特性。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("strong",[t._v("它的内容在激活前都是惰性的。")]),t._v(" template标签默认是隐藏的，它的内容也是不可见的，同时也不会被渲染。")]),t._v(" "),a("li",[a("strong",[t._v("处于模板中的内容不会产生副作用。")]),t._v(" 放在模板中的脚本、音频、视频、图片资源不会被加载，不会被播放，直到模板中的内容被使用。")]),t._v(" "),a("li",[a("strong",[t._v("内容不在文档中。")]),t._v(" 在主页面使用"),a("code",[t._v("document.getElementById()")]),t._v("，不会返回模板子节点。")]),t._v(" "),a("li",[a("strong",[t._v("模板能够放置在任何位置。")]),t._v(" 你可以把"),a("code",[t._v("<template>")]),t._v(" 放置在"),a("code",[t._v("<head>")]),t._v("、"),a("code",[t._v("<body>")]),t._v("、"),a("code",[t._v("<frameset>")]),t._v("，并且任何能够出现在以上元素的内容，都可以放置在模板中。"),a("strong",[t._v("“任何位置”")]),t._v(" 意味着"),a("code",[t._v("<template>")]),t._v("标签可以出现在HTML解析器不允许出现的位置 "),a("em",[t._v("(必须是在"),a("code",[t._v("<html>")]),t._v("标签内)")]),t._v("，几乎可以作为任何元素的子节点。它也可以作为"),a("code",[t._v("<table>")]),t._v("、"),a("code",[t._v("<select>")]),t._v("的子节点。当然，如果写在声明"),a("code",[t._v('type="text/javascript"')]),t._v("的"),a("code",[t._v("<script>")]),t._v("标签中，绝对报错，原因我就不说了。（同时实测发现，如果"),a("code",[t._v("<template>")]),t._v("标签放在"),a("code",[t._v("<head>")]),t._v("、"),a("code",[t._v("<body>")]),t._v("同级，放在"),a("code",[t._v("<body>")]),t._v("前面，都会被解析到"),a("code",[t._v("<head>")]),t._v("标签内，放在"),a("code",[t._v("<body>")]),t._v("后，会被解析到"),a("code",[t._v("<body>")]),t._v("内）。"),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("templete")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("content"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("templete")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用模板","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用模板")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("想要使用模板，首先需要激活模板，否则它的内容将无法被渲染。模板对象包含了一个"),a("code",[t._v("content")]),t._v("属性，该属性是只读属性，关联一个包含模板内容的"),a("code",[t._v("DocumentFragment")]),t._v("，\n我们可以使用"),a("code",[t._v("document.importNode()")]),t._v("对模板的"),a("code",[t._v(".content")]),t._v("进行深拷贝。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("template1"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("content"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tmp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#template1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 可以在获取模板的时候，对内容进行填充")]),t._v("\ntmp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'img'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'logo.png'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" clone "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("importNode")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clone"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"浏览器支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器支持","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器支持")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("想要检测浏览器是否支持该标签，需要创建一个template元素，并检查它是否拥有"),s("code",[this._v(".content")]),this._v("属性。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("supportTemplate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'content'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createElement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'template'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("supportsTemplate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 浏览器支持 template 元素")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 浏览器不支持template元素")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://ou399mhno.bkt.clouddn.com/canIuseTemplateTag.png",alt:"canIuseTemplateTag"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"模板标准之路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模板标准之路","aria-hidden":"true"}},[this._v("#")]),this._v(" 模板标准之路")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("方法一：使用隐藏的DOM元素，将模板内容放在某个标签内，使用"),s("code",[this._v("display:none")]),this._v("隐藏元素。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("√ 使用DOM，浏览器能够很好的处理DOM结构，我们可以方便的复制、使用DOM。")]),t._v(" "),a("li",[t._v("√ 没有内容渲染，"),a("code",[t._v("display: none")]),t._v(" 阻止了内容渲染。")]),t._v(" "),a("li",[t._v("× 非惰性， 图片资源依然会发出请求。")]),t._v(" "),a("li",[t._v("x 难以设置样式和主题，需要为所有CSS增加规则。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("方法二：使用textarea 标签，并使用"),s("code",[this._v("display:none")]),this._v("隐藏元素。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("textarea")]),a("span",{attrs:{class:"token style-attr language-css"}},[a("span",{attrs:{class:"token attr-name"}},[t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("textarea")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("√ 没有内容渲染，"),s("code",[this._v("display: none")]),this._v(" 阻止了内容渲染。")]),this._v(" "),s("li",[this._v("√ 惰性，由于模板内容是字符串，图片资源不会发出请求。")]),this._v(" "),s("li",[this._v("x 模板内容是字符串，需要进一步将其转为DOM。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("方法三： 重载脚本")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/x-handlebars-template"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("√ 没有内容渲染，script 标签默认"),a("code",[t._v("display:none")]),t._v("。")]),t._v(" "),a("li",[t._v("√ 惰性，脚本类型不为 "),a("code",[t._v("text/javascript")]),t._v("，浏览器不会认为是脚本，不会将其作为JS解析。")]),t._v(" "),a("li",[t._v("x 安全问题，由于使用 "),a("code",[t._v("innerHTML")]),t._v("获取内容，对用户提供的字符串进行运行时解析，很容易倒是 XSS漏洞。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])}],!1,null,null,null);e.options.__file="WebComponent——template.md";s.default=e.exports}}]);