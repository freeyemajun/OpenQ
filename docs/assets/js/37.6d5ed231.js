(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{226:function(t,a,s){"use strict";s.r(a);var r=s(6),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"本地数据迁移-cos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地数据迁移-cos"}},[t._v("#")]),t._v(" 本地数据迁移 COS")]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("本文将指导您如何通过 COS 回源方式将 Discuz! Q 本地数据迁移至腾讯云 COS 对象存储。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("若您使用 Discuz! Q 中途开启对象存储，您可参考本文进行操作。")])]),t._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),a("ul",[a("li",[t._v("已成功创建并配置腾讯云服务对象存储。详情参见："),a("a",{attrs:{href:"https://discuz.com/docs/%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E8%AE%BE%E7%BD%AE.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("对象存储设置"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"操作指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作指南"}},[t._v("#")]),t._v(" 操作指南")]),t._v(" "),a("h3",{attrs:{id:"步骤1-配置对象存储-cos-回源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤1-配置对象存储-cos-回源"}},[t._v("#")]),t._v(" 步骤1：配置对象存储 COS 回源")]),t._v(" "),a("ol",[a("li",[t._v("登录 "),a("a",{attrs:{href:"https://console.cloud.tencent.com/cos5/bucket",target:"_blank",rel:"noopener noreferrer"}},[t._v("对象存储控制台"),a("OutboundLink")],1),t._v(" 存储桶列表页。")]),t._v(" "),a("li",[t._v("在对象存储列表中选择您在 "),a("a",{attrs:{href:"https://discuz.com/docs/%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E8%AE%BE%E7%BD%AE.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置腾讯云服务对象存储"),a("OutboundLink")],1),t._v(" 时的存储桶并单击【配置管理】。如下图所示：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://main.qcloudimg.com/raw/41484744bff56af0189c5e26f621092b.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在存储桶设置页，依次单击【基础配置】>【回源设置】进入回源设置页。")]),t._v(" "),a("li",[t._v("单击【添加回源规则】。如下图所示：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://main.qcloudimg.com/raw/76edcfc40e65b5e6f9135705d462caea.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("在弹出的“添加回源规则”窗口中，勾选并填写以下信息,并单击【下一步】。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://main.qcloudimg.com/raw/a6281aa08a153f5a18f93b3a734c2a73.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("回源条件")]),t._v("：请勾选【文件名前缀】并输入 "),a("code",[t._v("storage/")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("回源协议")]),t._v("：请勾选【跟随请求协议】。")]),t._v(" "),a("li",[a("strong",[t._v("请求参数")]),t._v("：勾选【不透传】。")]),t._v(" "),a("li",[a("strong",[t._v("透传指定请求头部")]),t._v("：默认不输入。")]),t._v(" "),a("li",[a("strong",[t._v("新增请求头部")]),t._v("：默认不输入。")])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("在源站设置处，勾选并填写以下信息,并单击【下一步】。如下图所示:")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://main.qcloudimg.com/raw/6aa4404116aa5feccc91091a5110e105.png",alt:""}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("回源地址")]),t._v("：填写您的网站域名地址。如："),a("code",[t._v("discuz.com")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("备份回源地址")]),t._v("：不开启。")]),t._v(" "),a("li",[a("strong",[t._v("同步回源")]),t._v("：请勾选【关闭】。")]),t._v(" "),a("li",[a("strong",[t._v("3xx跟随策略")]),t._v("：请勾选【开启】。")])]),t._v(" "),a("p",[t._v("7.确认信息无问题后，单击【下一步】即可完成配置对象存储 COS 回源操作。如下图所示:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://main.qcloudimg.com/raw/58668758d469275b1c5ffcfd522896ac.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"步骤2-修改-discuz-q-站点数据库数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤2-修改-discuz-q-站点数据库数据"}},[t._v("#")]),t._v(" 步骤2：修改 Discuz! Q 站点数据库数据")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("本文以宝塔终端修改数据库数据方式为例。")])]),t._v(" "),a("ol",[a("li",[t._v("使用终端登录 MySQL  服务。您可以通过以下命令进行登录。")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mysql -u <数据库用户名> -p <数据库密码> \n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("登录成功后，您可使用 "),a("code",[t._v("use <Discuz! Q 站点数据库名>")]),t._v(" 操作 Discuz! Q 站点数据库。如您的 Discuz! Q 站点数据库名为 "),a("code",[t._v("study")]),t._v(" 。则为："),a("code",[t._v("use study")]),t._v("。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://main.qcloudimg.com/raw/ccb8b85ead22a5156e1d50d6ed61ab78.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("使用以下命令修改数据库 "),a("code",[t._v("attachments")]),t._v(" 表，即可完成修改 Discuz! Q 站点数据库数据操作。如下图所示:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("update `<表前缀_>attachments` set file_path=replace(file_path,'public','storage') where is_remote=0; \nupdate `<表前缀_>attachments` set is_remote=1;\n")])])]),a("p",[t._v(":::\n若是您在安装部署 Discuz! Q 设置了表前缀，请替换为您的表前缀名称。若无，请直接删除<表前缀_>。\n:::")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://main.qcloudimg.com/raw/fe18ed2fe8b6c5977ddc83313f4d94a7.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"步骤3-清除-discuz-q-站点后台缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤3-清除-discuz-q-站点后台缓存"}},[t._v("#")]),t._v(" 步骤3：清除 Discuz! Q 站点后台缓存")]),t._v(" "),a("ol",[a("li",[t._v("登录您的 Discuz! Q 站点后台。")]),t._v(" "),a("li",[t._v("在后台首页，单击【清除缓存】。如下图所示：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://main.qcloudimg.com/raw/3fee50b6e64a44a552391d7e75cc5001.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("弹出如下提示框即代表清除缓存成功。如下图所示：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://main.qcloudimg.com/raw/36966b2456ef6e6726c0335f7a07e0cf.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"步骤4-访问-discuz-q-站点回源数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤4-访问-discuz-q-站点回源数据"}},[t._v("#")]),t._v(" 步骤4：访问 Discuz! Q 站点回源数据")]),t._v(" "),a("p",[t._v("配置完成以上步骤后，请用浏览器访问一次您的Discuz! Q 站点进行回源数据。")]),t._v(" "),a("h3",{attrs:{id:"步骤5-确认是否回源迁移-cos-成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤5-确认是否回源迁移-cos-成功"}},[t._v("#")]),t._v(" 步骤5：确认是否回源迁移 COS 成功")]),t._v(" "),a("p",[t._v("登录 "),a("a",{attrs:{href:"https://console.cloud.tencent.com/cos5/bucket",target:"_blank",rel:"noopener noreferrer"}},[t._v("对象存储控制台"),a("OutboundLink")],1),t._v(" 存储桶的文件列表页。查看是否已创建 "),a("code",[t._v("storage")]),t._v("文件目录。若已创建则代表回源迁移 COS 成功，若无请查看以上步骤是否设置正确，或前往 "),a("a",{attrs:{href:"https://discuz.chat/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discuz! Q 社区"),a("OutboundLink")],1),t._v(" 进行提问。")])])}),[],!1,null,null,null);a.default=e.exports}}]);