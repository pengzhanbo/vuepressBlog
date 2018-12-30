(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{68:function(t,s,a){"use strict";a.r(s);var n=a(0),v=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p",[a("em",[t._v("本文正则表达式基于"),a("code",[t._v("javascript")]),t._v("，不同的计算机语言对正则表达式的支持情况以及实现，语法不尽相同，不一定适用于其他语言。")])]),t._v(" "),a("h3",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[a("code",[t._v("正则表达式")]),t._v("，是一种文本模式（Regular Expression），是对字符串的一种匹配查找规则。可以方便的在某一文本字符串中，查找、定位、替换符合某种规则的字符串。")]),t._v(" "),a("p",[t._v("比如说，我们想要找出一段文本中的手机号码，文本内容如下：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("name:Mark  tel:13800138000\nname:Jhon  tel:13800138888\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("很明显，在这段文本中，手机号码是以 "),a("code",[t._v("tel:")]),t._v("开头，这符合一定的规则，这样我们可以通过正则表达式来书写这个规则，然后去查找匹配：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" text "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`name:Mark  tel:13800138000\nname:Jhon  tel:13800138888`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" text"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/tel:(1\\d{10})/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('// ["tel:13800138000", "13800138000", index: 0, input: "tel:13800138000", groups: undefined]')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tel "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 13800138000")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[a("code",[t._v("/tel:(1\\d{10})/")]),t._v(" 便是所说的正则表达式。")]),t._v(" "),a("h3",{attrs:{id:"regexp与字面量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexp与字面量","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("RegExp")]),t._v("与字面量")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("javascript")]),t._v("中，我们可以使用构造函数"),a("code",[t._v("RegExp")]),t._v(" 创建正则表达式。")]),t._v(" "),a("p",[a("code",[t._v("new RegExp(pattern[, flags])")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" regExp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'\\\\d'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'g'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("也可以通过 字面量的方式：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" regExp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\d/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("两种创建正则表达式适用的场景有些细微的不同，一般使用"),a("code",[t._v("new RegExp()")]),t._v("来创建动态的正则表达式，使用字面量创建静态的正则表达式。")]),t._v(" "),a("p",[t._v("正则表达式字面量是提供了对正则表达式的编译，当正则表达式保持不变时，用字面量的方式创建正则表达式可以获得更好的性能。")]),t._v(" "),a("p",[a("em",[t._v("以下讨论以正则表达式字面量来创建正则表达式")])]),t._v(" "),a("p",[a("code",[t._v("正则表达式")]),t._v("一般由"),a("code",[t._v("元字符")]),t._v("和普通字符组成。")]),t._v(" "),a("h3",{attrs:{id:"元字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元字符","aria-hidden":"true"}},[t._v("#")]),t._v(" 元字符")]),t._v(" "),a("p",[t._v("元字符也叫特殊字符，是正则表达式规定的，对符合特定的单一的规则的字符的描述。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("字符")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\")]),t._v(" "),a("td",[t._v("在非特殊字符的前面加反斜杠，表示这个字符是特殊的，不能从字面上解释。比如在"),a("code",[t._v("\\d")]),t._v("描述的不是一个普通的字符"),a("code",[t._v("d")]),t._v(",而是正则表达式中的数值"),a("code",[t._v("0-9")]),t._v("。"),a("br"),t._v("如果在特殊字符前面加反斜杠，这表示将这个字符转义为普通字符，比如"),a("code",[t._v("?")]),t._v("在正则中有其特殊含义，前面加反斜杠?，这可以将其转为普通的"),a("code",[t._v("?")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("^")]),t._v(" "),a("td",[t._v("匹配文本开始的位置，如果开启了多行标志，也会匹配换行符后紧跟的位置。"),a("br"),t._v("比如"),a("code",[t._v("^a")]),t._v("会匹配"),a("code",[t._v("abc")]),t._v("，但不会匹配到"),a("code",[t._v("bac")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("$")]),t._v(" "),a("td",[t._v("匹配文本结束的位置，如果开启了多行标志，也会匹配换行符前紧跟的位置。"),a("br"),t._v("比如"),a("code",[t._v("b$")]),t._v("会匹配"),a("code",[t._v("acb")]),t._v(",但不会匹配到"),a("code",[t._v("abc")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("*")]),t._v(" "),a("td",[t._v("匹配前一个表达式0次到多次。"),a("br"),t._v("比如，"),a("code",[t._v("ab*")]),t._v("会匹配到"),a("code",[t._v("abbbbbbc")]),t._v("中的"),a("code",[t._v("abbbbbb")]),t._v(",以及"),a("code",[t._v("acbbbbb")]),t._v("中的"),a("code",[t._v("a")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),a("td",[t._v("匹配前一个表达式1次到多次。"),a("br"),t._v("比如，"),a("code",[t._v("ab+")]),t._v("会匹配到"),a("code",[t._v("abbbbbbc")]),t._v("中的"),a("code",[t._v("abbbbbb")]),t._v(",但不会匹配"),a("code",[t._v("acbbbbb")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",[t._v("匹配前一个表达式0次到1次。"),a("br"),t._v("比如，"),a("code",[t._v("ab*")]),t._v("会匹配到"),a("code",[t._v("abbbbbbc")]),t._v("中的"),a("code",[t._v("ab")]),t._v(",以及"),a("code",[t._v("acbbbbb")]),t._v("中的"),a("code",[t._v("a")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v(".")]),t._v(" "),a("td",[t._v("匹配除换行符之外的任何单个字符。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("x|y")]),t._v(" "),a("td",[t._v("匹配 x或者y。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("[xyz]")]),t._v(" "),a("td",[t._v("表示一个字符的集合。匹配集合中的任意一个字符。可以使用破折号"),a("code",[t._v("-")]),t._v("来指定一个字符范围。"),a("br"),t._v("比如，"),a("code",[t._v("[0-4]")]),t._v("和"),a("code",[t._v("[01234]")]),t._v("，都可以匹配"),a("code",[t._v("4567")]),t._v("中的"),a("code",[t._v("4")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("[^xyz]")]),t._v(" "),a("td",[t._v("表示一个方向字符集合。匹配任意一个不包括在集合中的字符。可以使用破折号"),a("code",[t._v("-")]),t._v("来指定一个字符范围。"),a("br"),t._v("比如，"),a("code",[t._v("[0-4]")]),t._v("和"),a("code",[t._v("[01234]")]),t._v("，都可以匹配"),a("code",[t._v("2345")]),t._v("中的"),a("code",[t._v("5")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("{n}")]),t._v(" "),a("td",[t._v("n为一个整数，表示匹配前一个匹配项n次。"),a("br"),t._v("比如"),a("code",[t._v("a{2}")]),t._v("不会匹配"),a("code",[t._v("abc")]),t._v("中的"),a("code",[t._v("a")]),t._v("，但会匹配"),a("code",[t._v("aaaabc")]),t._v("中的"),a("code",[t._v("aa")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("{m,n}")]),t._v(" "),a("td",[t._v("m,n都是一个整数，匹配前一个匹配项至少发生了m次，最多发生了n次。"),a("br"),t._v("当m，n值为0时，这个值被忽略，当n值不写，如"),a("code",[t._v("{1,}")]),t._v("表示1次到多次。当m值不写时，如"),a("code",[t._v("{,1}")]),t._v("表示0次到1次。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("(x)")]),t._v(" "),a("td",[t._v("匹配"),a("code",[t._v("x")]),t._v("并且捕获该匹配项。称为捕获括号，括号中的匹配项也称作子表达式。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("(?:x)")]),t._v(" "),a("td",[t._v("匹配"),a("code",[t._v("x")]),t._v("但不捕获该匹配项。称为非捕获括号。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("x(?=y)")]),t._v(" "),a("td",[t._v("匹配"),a("code",[t._v("x")]),t._v("且当"),a("code",[t._v("x")]),t._v("后面跟着"),a("code",[t._v("y")]),t._v("。称为正向肯定查找（正向前瞻）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("x(?!y)")]),t._v(" "),a("td",[t._v("匹配"),a("code",[t._v("x")]),t._v("且当"),a("code",[t._v("x")]),t._v("后面不跟着"),a("code",[t._v("y")]),t._v("。称为正向否定查找（负向前瞻）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("[\\b]")]),t._v(" "),a("td",[t._v("匹配一个退格(U+0008)。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\b")]),t._v(" "),a("td",[t._v("匹配一个词的边界。匹配的值的边界并不包含在匹配的内容中。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\B")]),t._v(" "),a("td",[t._v("匹配一个非单词的边界。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\d")]),t._v(" "),a("td",[t._v("匹配一个数字。等价于"),a("code",[t._v("[0-9]")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\D")]),t._v(" "),a("td",[t._v("匹配一个非数字。等价于"),a("code",[t._v("[^0-9]")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\n")]),t._v(" "),a("td",[t._v("匹配一个换行符 (U+000A)。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\r")]),t._v(" "),a("td",[t._v("匹配一个回车符 (U+000D)。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\s")]),t._v(" "),a("td",[t._v("匹配一个空白字符，包括空格、制表符、换页符和换行符。"),a("br"),t._v("等价于"),a("code",[t._v("[ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\S")]),t._v(" "),a("td",[t._v("匹配一个非空白字符。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\t")]),t._v(" "),a("td",[t._v("匹配一个水平制表符 (U+0009)。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\w")]),t._v(" "),a("td",[t._v("匹配一个单字字符（字母、数字或者下划线）。"),a("br"),t._v(" 等价于"),a("code",[t._v("[A-Za-z0-9_]")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\W")]),t._v(" "),a("td",[t._v("匹配一个非单字字符。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\xhh")]),t._v(" "),a("td",[t._v("与代码 hh 匹配字符（两个十六进制数字）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("\\uhhhh")]),t._v(" "),a("td",[t._v("与代码 hhhh 匹配字符（四个十六进制数字）。")])])])]),t._v(" "),a("p",[t._v("上表在多数文章都会提及，但有一些注意的细节，下面我单独拎出来说说。")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[a("code",[t._v("[xyz]")]),t._v(" 匹配集合中的任意一个字符")]),t._v(" "),a("br"),t._v("\n这个字符集的元素，可以是普通字符，也可以是特殊字符，也可以用破折号"),a("code",[t._v("-")]),t._v("规定一个字符集范围。"),a("br"),t._v("\n以匹配数字为例，可以写成"),a("code",[t._v("[0123456789]")]),t._v(" ，也可以写成"),a("code",[t._v("[\\d]")]),t._v(",也可以写成"),a("code",[t._v("[0-9]")]),t._v("。"),a("br"),t._v("\n类似于"),a("code",[t._v("()")]),t._v("等特殊字符，在"),a("code",[t._v("[]")]),t._v("中有其作用，都特殊字符的作用一致，不能直接当做普通字符来使用，所以我们需要使用反斜杠"),a("code",[t._v("\\")]),t._v("将其转义为普通字符，值得注意的是，上表的特殊字符中，星号"),a("code",[t._v("*")]),t._v("、小数点"),a("code",[t._v(".")]),t._v("在"),a("code",[t._v("[]")]),t._v("中并没有特殊用途，所以不需要做转义处理，当然，即使做了转义，也不会出现问题；而破折号"),a("code",[t._v("-")]),t._v("在"),a("code",[t._v("[]")]),t._v("中有其特殊作用，所以作为普通字符使用时，需要转义。")])]),t._v(" "),a("li",[a("p",[a("strong",[a("code",[t._v("?")]),t._v("：匹配前一个表达式0次到1次。")]),a("br"),t._v("\n其实这里准确描述来说，匹配前一个表达式，且该表达式 "),a("strong",[t._v("非任何量词 "),a("code",[t._v("*")]),t._v("、 "),a("code",[t._v("+")]),t._v("、"),a("code",[t._v("?")]),t._v(" 或 "),a("code",[t._v("{}")])]),t._v(" ，匹配前一个表达式0次到1次。"),a("br"),t._v("\n如果紧跟在 "),a("strong",[t._v("非任何量词 "),a("code",[t._v("*")]),t._v("、 "),a("code",[t._v("+")]),t._v("、"),a("code",[t._v("?")]),t._v(" 或 "),a("code",[t._v("{}")])]),t._v(" 的后面，将会使量词变为非贪婪的（匹配尽量少的字符）"),a("br"),t._v(" "),a("em",[t._v("贪婪与非贪婪匹配，我们在下文细说。")])])])]),t._v(" "),a("h3",{attrs:{id:"等价字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#等价字符","aria-hidden":"true"}},[t._v("#")]),t._v(" 等价字符")]),t._v(" "),a("p",[t._v("正则表达式中，有不少特殊字符的写法，是等价的，也可以说是简写形式，下表的左右两边，都是等价的。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("regExp")]),t._v(" "),a("th",[t._v("regExp")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("*")]),t._v(" "),a("td",[t._v("{0,}")])]),t._v(" "),a("tr",[a("td",[t._v("+")]),t._v(" "),a("td",[t._v("{1,}")])]),t._v(" "),a("tr",[a("td",[t._v("?")]),t._v(" "),a("td",[t._v("{0,1}")])]),t._v(" "),a("tr",[a("td",[t._v("\\d")]),t._v(" "),a("td",[t._v("[0-9]")])]),t._v(" "),a("tr",[a("td",[t._v("\\D")]),t._v(" "),a("td",[t._v("[^0-9]")])]),t._v(" "),a("tr",[a("td",[t._v("\\w")]),t._v(" "),a("td",[t._v("[a-zA-Z_]")])]),t._v(" "),a("tr",[a("td",[t._v("\\W")]),t._v(" "),a("td",[t._v("[^a-zA-Z_]")])]),t._v(" "),a("tr",[a("td",[t._v("\\s")]),t._v(" "),a("td",[t._v("[ \\f\\n\\r\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000\\ufeff]")])])])]),t._v(" "),a("h3",{attrs:{id:"贪婪模式与非贪婪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贪婪模式与非贪婪","aria-hidden":"true"}},[t._v("#")]),t._v(" 贪婪模式与非贪婪")]),t._v(" "),a("p",[a("strong",[t._v("什么是贪婪模式？")])]),t._v(" "),a("p",[t._v("贪婪是指正则表达式匹配时，是贪心的，会尽可能的匹配多的字符，主要体现在"),a("code",[t._v("量词特殊字符")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 匹配一个到多个数字")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" r "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\d+/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" t1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'12a'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" t2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'1234a'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" t3 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'a12b345'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 12")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t2"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 1234")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t3"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 12")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("code",[t._v("非贪婪")]),t._v("，即是让正则表达式匹配尽量少的字符。那么如何改变正则表达式的贪婪模式？")]),t._v(" "),a("p",[a("strong",[t._v("在量词特殊字符后面紧跟使用"),a("code",[t._v("?")])])]),t._v(" "),a("p",[t._v("我们说说的量词包括"),a("code",[t._v("*")]),t._v(", "),a("code",[t._v("+")]),t._v(", "),a("code",[t._v("?")]),t._v(", "),a("code",[t._v("{m,n}")]),t._v("。那么紧跟了"),a("code",[t._v("?")]),t._v("，会有什么不同的表现呢？")]),t._v(" "),a("p",[t._v("我们从例子来分析：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" r1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/<div>.*<\\/div>/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" r2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/<div>.*?<\\/div>/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div>aaa</div>bbb<div></div>ccc'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("变量"),a("code",[t._v("r1")]),t._v("是贪婪匹配，得到的结果会是什么呢？")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// <div>aaa</div>bbb<div></div>")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("在这段字符串中，有两个"),a("code",[t._v("</div>")]),t._v("的匹配字符串，正则表达式在遇到第一个"),a("code",[t._v("</div>")]),t._v("匹配字符项时，同时满足了"),a("code",[t._v("/.*/")]),t._v("和"),a("code",[t._v("/<\\/div>/")]),t._v("的匹配条件，优先作为"),a("code",[t._v("/.*/")]),t._v("的匹配值，在遇到第二个时，同样还是优先作为"),a("code",[t._v("/.*/")]),t._v("的匹配值，直到匹配的字符串"),a("code",[t._v("str")]),t._v("的结束，没有满足条件的匹配字符串，再把第二个"),a("code",[t._v("</div>")]),t._v("作为"),a("code",[t._v("/<\\/div>/")]),t._v("的匹配值。最终得到了"),a("code",[t._v("<div>aaa</div>bbb<div></div>")]),t._v("的匹配结果。")]),t._v(" "),a("p",[t._v("变量"),a("code",[t._v("r2")]),t._v("这是非贪婪匹配，得到的结果又会有所不同：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// <div>aaa</div>")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("同样，两个"),a("code",[t._v("</div>")]),t._v("的匹配字符串，但实际非贪婪匹配模式，在匹配到第一个"),a("code",[t._v("</div>")]),t._v("，就不会再继续向下匹配字符串了。")]),t._v(" "),a("p",[a("strong",[t._v("也就是说，贪婪匹配是，在满足规则下，尽可能多的匹配更多的字符串，直到字符串结束或没有满足规则的字符串了；非贪婪匹配是，在满足规则下，尽可能少的匹配最少的字符串，一旦得到满足规则的字符串，就不再向下匹配。")])]),t._v(" "),a("ol",[a("li",[a("code",[t._v("x*?")]),t._v("：尽可能少的匹配"),a("code",[t._v("x")]),t._v("，匹配的结果可以是0个"),a("code",[t._v("x")]),t._v("；")]),t._v(" "),a("li",[a("code",[t._v("x+?")]),t._v("：尽可能少的匹配"),a("code",[t._v("x")]),t._v("，但匹配的结果至少有1个"),a("code",[t._v("x")]),t._v("；")]),t._v(" "),a("li",[a("code",[t._v("x??")]),t._v("：尽可能少的匹配"),a("code",[t._v("x")]),t._v(", 匹配的结果可以是0个"),a("code",[t._v("x")]),t._v("，但最多可以有一个"),a("code",[t._v("x")]),t._v("；")]),t._v(" "),a("li",[a("code",[t._v("x{m,n}?")]),t._v("：尽可能少的匹配"),a("code",[t._v("x")]),t._v("，但匹配的结果至少有m个"),a("code",[t._v("x")]),t._v("，最多可以有n个"),a("code",[t._v("x")]),t._v("；")])]),t._v(" "),a("p",[t._v("可能从字面来说，不好理解 "),a("code",[t._v("x??")]),t._v(", "),a("code",[t._v("x{m,n}?")]),t._v(" ，来看一个例子就可以明白了：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div>aa</div>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div>a</div>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s3 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div></div>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" r1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/<div>a??<\\/div>/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// false ")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s3"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div>aaa</div>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div>aa</div>'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s3 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div>aaaa</div>'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" r1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/<div>a{2,3}?<\\/div>/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" r2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/<div>a{2,3}?/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s3"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// <div>aa")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s2"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// <div>aa")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s3"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// <div>aa")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"正则表达式标志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式标志","aria-hidden":"true"}},[t._v("#")]),t._v(" 正则表达式标志")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("标志")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("g")]),t._v(" "),a("td",[t._v("全局搜索")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("i")]),t._v(" "),a("td",[t._v("不区分大小写搜索")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),a("td",[t._v("多行搜索")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),a("td",[t._v("执行“粘性”搜索,匹配从目标字符串的当前位置开始")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("u")]),t._v(" "),a("td",[t._v("Unicode模式。用来正确处理大于 \\uFFFF 的Unicode字符")])])])])])}],!1,null,null,null);v.options.__file="正则表达式.md";s.default=v.exports}}]);