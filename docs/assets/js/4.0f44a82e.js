(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{68:function(s,t,e){"use strict";e.r(t);var n=e(0),a=Object(n.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[e("p",[e("a",{attrs:{href:"https://jenkins.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jenkins"),e("OutboundLink")],1),s._v(" 是一款功能强大的应用程序，允许持续集成和持续交付项目。这里记录一些 Jenkins 使用的方法。")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),e("p",[s._v("安装详见 官网 "),e("a",{attrs:{href:"https://jenkins.io/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jenkins 安装"),e("OutboundLink")],1),s._v(" 流程，各个系统如何安装均有说明。")]),s._v(" "),s._m(2),s._v(" "),e("p",[s._v("CentOS 下安装：")]),s._v(" "),s._m(3),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._m(10),s._v(" "),s._m(11),s._v(" "),s._m(12),s._m(13),s._v(" "),s._m(14),s._m(15),s._v(" "),s._m(16),s._v(" "),s._m(17),s._m(18),s._v(" "),s._m(19),s._m(20),s._v(" "),s._m(21),s._m(22),s._v(" "),s._m(23),s._m(24),s._v(" "),s._m(25),s._m(26),s._v(" "),e("p",[s._v("相关工具以及项目配置，都只是小问题而已...")])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("em",[this._v("以下基于 "),t("code",[this._v("CentOS")]),this._v(" 系统。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("环境依赖： "),t("code",[this._v("java")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat/jenkins.repo\n"),e("span",{attrs:{class:"token function"}},[s._v("sudo")]),s._v(" rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key\nyum "),e("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" jenkins\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[e("strong",[s._v("默认安装目录")]),s._v(" : "),e("code",[s._v("/var/lib/jenkins")])]),s._v(" "),e("li",[e("strong",[s._v("默认日志目录")]),s._v(" ："),e("code",[s._v("/var/log/jenkins")])]),s._v(" "),e("li",[e("strong",[s._v("默认缓存目录")]),s._v(" : "),e("code",[s._v("/var/cache/jenkins")])]),s._v(" "),e("li",[e("strong",[s._v("默认admin密码目录")]),s._v(" : "),e("code",[s._v("/var/lib/jenkins/secrets/initialAdminPassword")])]),s._v(" "),e("li",[e("strong",[s._v("配置文件")]),s._v(" : "),e("code",[s._v("/etc/sysconfig/jenkins")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token comment"}},[s._v("# 启动 Jenkins")]),s._v("\n"),e("span",{attrs:{class:"token function"}},[s._v("service")]),s._v(" jenkins start\n"),e("span",{attrs:{class:"token comment"}},[s._v("# 重启 Jenkins")]),s._v("\n"),e("span",{attrs:{class:"token function"}},[s._v("service")]),s._v(" jenkins restart\n"),e("span",{attrs:{class:"token comment"}},[s._v("# 停止 Jenkins")]),s._v("\n"),e("span",{attrs:{class:"token function"}},[s._v("service")]),s._v(" jenkins stop\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("默认运行在 "),t("code",[this._v("8080")]),this._v(" 端口， 本机可通过 "),t("code",[this._v("localhost:8080")]),this._v(" 访问。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"卸载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载","aria-hidden":"true"}},[this._v("#")]),this._v(" 卸载")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("service")]),s._v(" jenkiins stop\nyum clean all\nyum remove jenkins\n"),e("span",{attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/jenkins\n"),e("span",{attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/cache/jenkins\n"),e("span",{attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/log/jenkins\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"修改端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改端口","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改端口")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",[t("li",[this._v("打开"),t("code",[this._v("Jenkins")]),this._v(" 配置文件")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("vim /etc/sysconfig/jenkins\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("修改 "),t("code",[this._v("$HTTP_PORT")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token variable"}},[this._v("$HTTP_PORT")]),t("span",{attrs:{class:"token operator"}},[this._v("=")]),t("span",{attrs:{class:"token string"}},[this._v('"8080"')]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"获取root用户权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取root用户权限","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取root用户权限")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",[t("li",[this._v("打开"),t("code",[this._v("Jenkins")]),this._v(" 配置文件")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("vim /etc/sysconfig/jenkins\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("修改 "),t("code",[this._v("HTTP_PORT")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token variable"}},[this._v("$JENKINS_USER")]),t("span",{attrs:{class:"token operator"}},[this._v("=")]),t("span",{attrs:{class:"token string"}},[this._v('"root"')]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("修改"),t("code",[this._v("Jenkins")]),this._v(" 相关目录权限")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:root /var/lib/jenkins\n"),e("span",{attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:root /var/log/jenkins\n"),e("span",{attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:root /var/cache/jenkins\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",{attrs:{start:"4"}},[t("li",[this._v("重启"),t("code",[this._v("Jenkins")]),this._v("并验证")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("service")]),s._v(" jenkins restart\n"),e("span",{attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),e("span",{attrs:{class:"token operator"}},[s._v("|")]),e("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" jenkins\n"),e("span",{attrs:{class:"token comment"}},[s._v("# 若显示为root用户，则表示修改完成")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"开机自启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开机自启","aria-hidden":"true"}},[this._v("#")]),this._v(" 开机自启")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("chkconfig")]),this._v(" jenkins on\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他")])}],!1,null,null,null);a.options.__file="Jenkins.md";t.default=a.exports}}]);