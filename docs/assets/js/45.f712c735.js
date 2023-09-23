(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{233:function(t,r,e){"use strict";e.r(r);var a=e(6),s=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"腾讯云安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云安装"}},[t._v("#")]),t._v(" 腾讯云安装")]),t._v(" "),r("h2",{attrs:{id:"云服务器-cvm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#云服务器-cvm"}},[t._v("#")]),t._v(" 云服务器 CVM")]),t._v(" "),r("h3",{attrs:{id:"镜像-推荐"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像-推荐"}},[t._v("#")]),t._v(" 镜像（推荐）")]),t._v(" "),r("h4",{attrs:{id:"操作场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#操作场景"}},[t._v("#")]),t._v(" 操作场景")]),t._v(" "),r("p",[t._v("本文档将指导如何基于腾讯云（CVM）服务器镜像安装部署 Discuz! Q。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("基于官方提供的腾讯云镜像，可实现快速安装，简洁部署。")])]),t._v(" "),r("h4",{attrs:{id:"前提条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),r("p",[t._v("已 "),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/1263/46191",target:"_blank",rel:"noopener noreferrer"}},[t._v("注册腾讯云"),r("OutboundLink")],1),t._v("账号并完成 "),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/378/3629",target:"_blank",rel:"noopener noreferrer"}},[t._v("实名认证"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h4",{attrs:{id:"操作步骤"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),r("h4",{attrs:{id:"步骤一-新购或配置已有云服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-新购或配置已有云服务器"}},[t._v("#")]),t._v(" 步骤一：新购或配置已有云服务器")]),t._v(" "),r("h4",{attrs:{id:"新购腾讯云服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新购腾讯云服务器"}},[t._v("#")]),t._v(" 新购腾讯云服务器")]),t._v(" "),r("ol",[r("li",[t._v("登录 "),r("a",{attrs:{href:"https://market.cloud.tencent.com/products/19943",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云云市场"),r("OutboundLink")],1),t._v(" 官方 Discuz! Q 镜像页面。")]),t._v(" "),r("li",[t._v("在 "),r("a",{attrs:{href:"https://market.cloud.tencent.com/products/19943",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云云市场"),r("OutboundLink")],1),t._v(" 官方 Discuz! Q 镜像页面中，单击 【立即购买】。如下图所示：\n"),r("img",{attrs:{src:"https://main.qcloudimg.com/raw/1174ace28bd8b5c144064ac888331d19.png",alt:""}})]),t._v(" "),r("li",[t._v("在自定义购买页，请根据您的实际需求，选择存储介质、带宽、设置安全组等其他配置，并完成支付操作。自定义配置说明详情请查看："),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/213/8036",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义配置"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("div",{staticClass:"custom-block danger"},[r("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),r("p",[t._v("镜像选项请勿修改，保持选择【镜像市场】、【Discuz! Q官方镜像 v2.0】。")])]),t._v(" "),r("h4",{attrs:{id:"已有腾讯云服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#已有腾讯云服务器"}},[t._v("#")]),t._v(" 已有腾讯云服务器")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("已购买腾讯云（CVM）服务器，并使用此方式进行镜像安装，会导致原服务器中的数据全部丢失。请做好数据备份或使用 "),r("a",{attrs:{href:"https://discuz.com/docs/%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%89%E8%A3%85.html#%E5%85%B6%E5%AE%83%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("其它安装方式"),r("OutboundLink")],1),t._v(" 进行安装。")])]),t._v(" "),r("ol",[r("li",[t._v("登录 "),r("a",{attrs:{href:"https://console.cloud.tencent.com/cvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云服务器控制台"),r("OutboundLink")],1),t._v("，在实例的管理页面，找到需要部署安装的云服务器实例。")]),t._v(" "),r("li",[t._v("单击【更多】，在展开的下拉框中，单击【重装系统】。如下图所示：\n"),r("img",{attrs:{src:"https://main.qcloudimg.com/raw/075771fb9a02f116578b42a5e52f7fa8.png",alt:""}})]),t._v(" "),r("li",[t._v("在弹出的重装系统须知中，单击【确认，开始重装】。")]),t._v(" "),r("li",[t._v("在重装系统的窗口中，选择 Discuz! Q 官方镜像。如下图所示：")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://main.qcloudimg.com/raw/330e68f6b9ca9292ed257cbaf2116916.png",alt:""}})]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("镜像来源")]),t._v("：勾选【服务市场】。")]),t._v(" "),r("li",[r("strong",[t._v("镜像")]),t._v("：勾选【建站系统】。并在下拉框中选择【Discuz! Q官方镜像】。")])]),t._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[t._v("设置密码后，点击【开始重装】即可。")])]),t._v(" "),r("h4",{attrs:{id:"步骤二-系统管理与配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-系统管理与配置"}},[t._v("#")]),t._v(" 步骤二：系统管理与配置")]),t._v(" "),r("ol",[r("li",[t._v("安装完成后，您可以打开本地浏览器，访问 "),r("code",[t._v("http://<您的服务器外网 IP 地址>")]),t._v(" 查看您的 Discuz! Q 网站。并且您可以登录您的云服务器终端。在终端中使用 "),r("code",[t._v("dzqinfo")]),t._v(" 命令，查看 Discuz! Q 和宝塔相关信息进行管理与配置。")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("ul",[r("li",[t._v("Discuz! Q 镜像基于宝塔面板搭建制作，您可以浏览器访问 "),r("code",[t._v("http://<服务器外网 IP 地址>:8888")]),t._v(" 进入宝塔面板控制台。")]),t._v(" "),r("li",[t._v("如果宝塔面板或 Discuz! Q  无法访问，请检查您的 "),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/213/15377",target:"_blank",rel:"noopener noreferrer"}},[t._v("安全组设置"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("li",[t._v("如果您需要修改 Discuz! Q 的配置域名，请参考 "),r("a",{attrs:{href:"https://discuz.com/docs/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html#%E5%A6%82%E4%BD%95%E6%9B%B4%E6%94%B9%E5%9F%9F%E5%90%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见问题"),r("OutboundLink")],1),t._v("。")])])]),t._v(" "),r("h3",{attrs:{id:"其它安装方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其它安装方式"}},[t._v("#")]),t._v(" 其它安装方式")]),t._v(" "),r("p",[t._v("详情请查看："),r("a",{attrs:{href:"https://discuz.com/docs/Windows%20%E4%B8%BB%E6%9C%BA.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 主机安装"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://discuz.com/docs/Linux%20%E4%B8%BB%E6%9C%BA.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux主机安装"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"轻量云服务器-lighthouse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#轻量云服务器-lighthouse"}},[t._v("#")]),t._v(" 轻量云服务器 Lighthouse")]),t._v(" "),r("h3",{attrs:{id:"镜像-推荐-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像-推荐-2"}},[t._v("#")]),t._v(" 镜像（推荐）")]),t._v(" "),r("h4",{attrs:{id:"操作场景-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#操作场景-2"}},[t._v("#")]),t._v(" 操作场景")]),t._v(" "),r("p",[t._v("本文档将指导您如何基于腾讯云轻量云服务器 （Lighthouse）镜像安装部署 Discuz! Q。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("基于官方提供的腾讯云镜像，可实现快速安装，简洁部署。")])]),t._v(" "),r("h4",{attrs:{id:"前提条件-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前提条件-2"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),r("p",[t._v("已注册腾讯云账号并完成实名认证。")]),t._v(" "),r("h4",{attrs:{id:"操作步骤-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤-2"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),r("h4",{attrs:{id:"新购腾讯轻量云服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新购腾讯轻量云服务器"}},[t._v("#")]),t._v(" 新购腾讯轻量云服务器")]),t._v(" "),r("h4",{attrs:{id:"步骤一-购买腾讯轻量云-lighthouse-服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤一-购买腾讯轻量云-lighthouse-服务器"}},[t._v("#")]),t._v(" 步骤一：购买腾讯轻量云（Lighthouse）服务器")]),t._v(" "),r("ol",[r("li",[t._v("登录 "),r("a",{attrs:{href:"https://buy.cloud.tencent.com/lighthouse?buy_from=lh-console",target:"_blank",rel:"noopener noreferrer"}},[t._v("轻量应用服务器购买页"),r("OutboundLink")],1),t._v(" 。")]),t._v(" "),r("li",[t._v("在 "),r("a",{attrs:{href:"https://market.cloud.tencent.com/products/19943",target:"_blank",rel:"noopener noreferrer"}},[t._v("轻量应用服务器购买页"),r("OutboundLink")],1),t._v(" 页中，勾选相关配置信息。如下图所示：")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://main.qcloudimg.com/raw/b0973cd570bad2c0d1591ffeba58201f.png",alt:""}})]),t._v(" "),r("p",[t._v("镜像：勾选【应用镜像】并选择 【Discuz! Q v1.0】。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("请根据您的实际需求，选择实例套餐、购买时长、地域、购买数量等其他配置。")])]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("单击【立即购买】。完成支付操作。")])]),t._v(" "),r("h4",{attrs:{id:"已有腾讯轻量云-lighthouse-服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#已有腾讯轻量云-lighthouse-服务器"}},[t._v("#")]),t._v(" 已有腾讯轻量云（Lighthouse）服务器")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("已购买腾讯轻量云（Lighthouse）服务器，并使用此方式进行镜像安装，会导致原服务器中的数据全部丢失。请做好数据备份或使用 "),r("a",{attrs:{href:"https://discuz.com/docs/%E8%85%BE%E8%AE%AF%E4%BA%91%E5%AE%89%E8%A3%85.html#%E5%85%B6%E5%AE%83%E5%AE%89%E8%A3%85%E6%96%B9%E5%BC%8F-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("其它安装方式"),r("OutboundLink")],1),t._v(" 进行安装。")])]),t._v(" "),r("ol",[r("li",[t._v("登录 "),r("a",{attrs:{href:"https://console.cloud.tencent.com/lighthouse/instance/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("轻量应用服务器控制台"),r("OutboundLink")],1),t._v("，在实例的管理页面，找到需要部署安装的轻量应用服务器实例。")]),t._v(" "),r("li",[t._v("单击【更多】，在展开的下拉框中，单击【管理】。")]),t._v(" "),r("li",[t._v("在管理页中，单击并选择【应用管理】>【重置应用】。如下图所示：")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://main.qcloudimg.com/raw/6843f82100f3c394c4a25062a3207713.png",alt:""}})]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("在重置应用的窗口中，选择 Discuz! Q 官方镜像。如下图所示：")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://main.qcloudimg.com/raw/80c9920368c649953ad50963757e7dfc.png",alt:""}})]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("镜像类型")]),t._v("：勾选【应用镜像】。")]),t._v(" "),r("li",[r("strong",[t._v("选择镜像")]),t._v("：勾选【Discuz! Q v1.0】。")])]),t._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[t._v("勾选【确认已了解以上内容，我确定已备份完成】，并单击【确实】即可完成已有腾讯轻量云（Lighthouse）服务器部署操作。")])]),t._v(" "),r("h4",{attrs:{id:"步骤二-系统管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#步骤二-系统管理"}},[t._v("#")]),t._v(" 步骤二：系统管理")]),t._v(" "),r("p",[t._v("安装完成后，您可以进入腾讯云轻量应用服务器实例的管理页【应用管理】，在【应用内软件信息】卡片中查看相关信息并进行管理。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("ul",[r("li",[t._v("Discuz! Q 镜像基于宝塔面板搭建制作，您可以浏览器访问 "),r("code",[t._v("http://<服务器外网 IP 地址>:8888")]),t._v(" 进入宝塔面板控制台。")]),t._v(" "),r("li",[t._v("您可以登录您的服务器，在终端中执行命令 "),r("code",[t._v("dzqinfo")]),t._v(" 查看 Discuz! Q 和宝塔的管理员用户名与密码等相关信息。")]),t._v(" "),r("li",[t._v("如果您需要修改 Discuz! Q 的配置域名，请参考 "),r("a",{attrs:{href:"https://discuz.com/docs/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html#%E5%A6%82%E4%BD%95%E6%9B%B4%E6%94%B9%E5%9F%9F%E5%90%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见问题"),r("OutboundLink")],1),t._v("。")])])]),t._v(" "),r("h3",{attrs:{id:"其它安装方式-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其它安装方式-2"}},[t._v("#")]),t._v(" 其它安装方式")]),t._v(" "),r("p",[t._v("详情请查看："),r("a",{attrs:{href:"https://discuz.com/docs/Windows%20%E4%B8%BB%E6%9C%BA.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 主机安装"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://discuz.com/docs/Linux%20%E4%B8%BB%E6%9C%BA.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux主机安装"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"部署异常"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署异常"}},[t._v("#")]),t._v(" 部署异常")]),t._v(" "),r("p",[t._v("安装过程中可能遇到一些异常，请根据异常提示查看以下解决方案进行解决。如果遇到无法解决的问题，请 "),r("a",{attrs:{href:"https://console.cloud.tencent.com/workorder/category",target:"_blank",rel:"noopener noreferrer"}},[t._v("提交工单"),r("OutboundLink")],1),t._v(" 联系我们，我们将协助您解决问题。\n"),r("img",{attrs:{src:"https://main.qcloudimg.com/raw/1e8022496f7c221a6f84fa02ddd5859e.png",alt:"安装异常"}})]),t._v(" "),r("h4",{attrs:{id:"账户余额不足"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#账户余额不足"}},[t._v("#")]),t._v(" 账户余额不足")]),t._v(" "),r("p",[t._v("Discuz!Q 应用创建时，会一同创建云数据库 CynosDB for Mysql。创建数据库资源会预先扣1个小时的费用，为了保证服务的可用，推荐先 "),r("a",{attrs:{href:"https://console.cloud.tencent.com/expense/recharge",target:"_blank",rel:"noopener noreferrer"}},[t._v("充值腾讯云账户"),r("OutboundLink")],1),t._v(" 5元钱。")]),t._v(" "),r("h4",{attrs:{id:"云接入根路径已经被占用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#云接入根路径已经被占用"}},[t._v("#")]),t._v(" 云接入根路径已经被占用")]),t._v(" "),r("p",[t._v("Discuz! Q 将会占用根路径，如果当前环境被占用，推荐再创建一个按量计费环境进行安装。")]),t._v(" "),r("h4",{attrs:{id:"cynosdb-被隔离"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cynosdb-被隔离"}},[t._v("#")]),t._v(" CynosDB 被隔离")]),t._v(" "),r("p",[t._v("错误信息 "),r("code",[t._v("queryClusterDetail failed, err=DescribeClusters invalid response.detail.status[isolated]")]),t._v("，代表 CynosDB 集群被隔离，请前往回收站将该集群恢复或者直接删除。")]),t._v(" "),r("h4",{attrs:{id:"共享文件存储-cfs-资源售罄"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#共享文件存储-cfs-资源售罄"}},[t._v("#")]),t._v(" 共享文件存储 CFS 资源售罄")]),t._v(" "),r("p",[t._v("错误信息：“参数值错误：该地域无法提供服务”，代表共享文件存储 CFS 该地域可用区售罄。我们将及时补货，请耐心等待。")]),t._v(" "),r("h4",{attrs:{id:"常见问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),r("h4",{attrs:{id:"小程序部署"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序部署"}},[t._v("#")]),t._v(" 小程序部署")]),t._v(" "),r("p",[t._v("小程序的部署需要单独提审，安装完本扩展应用后，需要参考 "),r("a",{attrs:{href:"https://discuz.com/docs/%E5%B0%8F%E7%A8%8B%E5%BA%8F.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序部署指南"),r("OutboundLink")],1),t._v(" 进行构建发布小程序端的代码。")]),t._v(" "),r("h4",{attrs:{id:"公众号白名单-ip-配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#公众号白名单-ip-配置"}},[t._v("#")]),t._v(" 公众号白名单 IP 配置")]),t._v(" "),r("p",[t._v("公众号登录开通时，需要将服务的 IP 添加到公众号的 IP 白名单中，详情请参见 "),r("a",{attrs:{href:"https://discuz.com/manual-admin/2.html#_2-3-%E7%AC%AC%E4%B8%89%E6%96%B9%E7%99%BB%E5%BD%95%E8%AE%BE%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("第三方登录设置"),r("OutboundLink")],1),t._v(" 文档。")]),t._v(" "),r("ol",[r("li",[t._v("在扩展应用详情页 API 和资源模块中，单击云托管的服务详情。\n"),r("img",{attrs:{src:"https://main.qcloudimg.com/raw/e210b5f23304867805926e3c3a4bb07e.png",alt:"查看云托管服务"}})]),t._v(" "),r("li",[t._v("单击服务配置，查看服务的出口 NAT IP。\n"),r("img",{attrs:{src:"https://main.qcloudimg.com/raw/e9b4724b662b52230b7ce5ca5ff270db.png",alt:"NAT IP"}})])]),t._v(" "),r("h4",{attrs:{id:"版本升级"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#版本升级"}},[t._v("#")]),t._v(" 版本升级")]),t._v(" "),r("p",[t._v("云开发会定期跟踪 Discuz! Q 的大的版本更新，为您推送版本升级，可一键完成升级操作。")]),t._v(" "),r("h4",{attrs:{id:"复用已有的-cynosdb-集群"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复用已有的-cynosdb-集群"}},[t._v("#")]),t._v(" 复用已有的 CynosDB 集群")]),t._v(" "),r("p",[t._v("本应用会选取当前环境所处地域，并且在同一个 vpc 下，集群名为 DiscuzCynosDB 的数据库实例。如果不存在，则会创建新的集群。")]),t._v(" "),r("p",[t._v("如果希望复用已有 CynosDB 集群，可参考如下步骤。")]),t._v(" "),r("ol",[r("li",[t._v("查看 CynosDB 所在的私有网络，并且将集群名更改为 DiscuzCynosDB。\n"),r("img",{attrs:{src:"https://main.qcloudimg.com/raw/3549cec77f92046bada85b9ab79f05e7.png",alt:""}})]),t._v(" "),r("li",[t._v("创建一个新的按量计费环境，并且开通云托管，选择自定义配置，勾选 CynosDB 所在的私有网络，默认请勾选所有子网。\n"),r("img",{attrs:{src:"https://main.qcloudimg.com/raw/eada2b2dac2ee060380da78055da1b5b.png",alt:""}})]),t._v(" "),r("li",[t._v("回到扩展应用页面安装 Discuz!Q。")])]),t._v(" "),r("h4",{attrs:{id:"其他"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),r("h4",{attrs:{id:"程序配置信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#程序配置信息"}},[t._v("#")]),t._v(" 程序配置信息")]),t._v(" "),r("p",[t._v("您可以通过以下配置参数：")]),t._v(" "),r("ul",[r("li",[t._v("环境 ID：选择需要部署的环境，在哪个环境下使用。")]),t._v(" "),r("li",[t._v("管理员用户名：Discuz! Q 后台管理系统的管理员用户名，默认为 admin。")]),t._v(" "),r("li",[t._v("管理员密码：Discuz! Q 后台管理系统的管理员密码，第一次安装时，会设置并加密存储在数据库内，之后变更请前往管理系统的用户管理面板重置密码，详情请参见 "),r("a",{attrs:{href:"https://discuz.com/manual-admin/3.html#_3-1-%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("用户管理"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("li",[t._v("数据库用户名：默认为 root，当前不可修改。")]),t._v(" "),r("li",[t._v("数据库密码：root 账号的密码，初次安装时设置后将作为初始化的密码创建 CynosDB。后续修改密码请前往 CynosDB 控制台的账号管理页面，修改密码后，请同步修改此处的密码，以保证数据库的正常使用。")])]),t._v(" "),r("h4",{attrs:{id:"计费"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#计费"}},[t._v("#")]),t._v(" 计费")]),t._v(" "),r("p",[t._v("此能力使用云开发与其他腾讯云服务，可能会产生相关费用。云开发与云上其他资源分开计费，您可以在 "),r("a",{attrs:{href:"https://console.cloud.tencent.com/expense/overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("费用中心"),r("OutboundLink")],1),t._v(" 查看具体信息。")]),t._v(" "),r("ol",[r("li",[t._v("云托管（"),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/1243/47823",target:"_blank",rel:"noopener noreferrer"}},[t._v("产品定价"),r("OutboundLink")],1),t._v(" 及 "),r("a",{attrs:{href:"https://console.cloud.tencent.com/tcb",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用明细"),r("OutboundLink")],1),t._v("）。")]),t._v(" "),r("li",[t._v("静态网站托管（"),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/1210/42854",target:"_blank",rel:"noopener noreferrer"}},[t._v("产品定价"),r("OutboundLink")],1),t._v(" 及 "),r("a",{attrs:{href:"https://console.cloud.tencent.com/tcb",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用明细"),r("OutboundLink")],1),t._v("）。")]),t._v(" "),r("li",[t._v("文件存储（Cloud File Storage，CFS）（"),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/582/47378",target:"_blank",rel:"noopener noreferrer"}},[t._v("产品定价"),r("OutboundLink")],1),t._v(" 及 "),r("a",{attrs:{href:"https://console.cloud.tencent.com/cfs/overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用明细"),r("OutboundLink")],1),t._v("）。")]),t._v(" "),r("li",[t._v("云数据库 CynosDB for MySQL（"),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/1003/30493",target:"_blank",rel:"noopener noreferrer"}},[t._v("产品定价"),r("OutboundLink")],1),t._v(" 及 "),r("a",{attrs:{href:"https://console.cloud.tencent.com/cynosdb",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用明细"),r("OutboundLink")],1),t._v("）。")])])])}),[],!1,null,null,null);r.default=s.exports}}]);