var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1148:function(e,t,n){"use strict";n.r(t);var l=n(392),r=n.n(l),a=n(393),p=n.n(a),c=n(394),i=n.n(c);t.default=[{category:"API",components:[{done:!0,deprecated:!1,source:"src/api",sourceName:"src-api",componentName:"API",chineseName:"接口",document:r.a}]},{category:"Storage",components:[{done:!0,deprecated:!1,source:"src/localstorage",sourceName:"src-localstorage",componentName:"LocalStorage",chineseName:"存储",document:p.a}]},{category:"Router",components:[{done:!0,deprecated:!1,source:"src/router",sourceName:"src-router",componentName:"Router",chineseName:"路由",document:i.a}]}]},392:function(e,t,n){"use strict";var l=n(2),r=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;(function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var l={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=p?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(l,c,i):l[c]=e[c]}l.default=e,n&&n.set(e,l)})(n(0)),l(n(13));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}var p={blocks:[{type:"heading",depth:1,children:[{type:"text",value:"API 集合"}]},{type:"blockquote",children:[{type:"paragraph",children:[{type:"text",value:"API SDK 的引入方式可以在 API栏目下 进行快捷复制"}]}]},{type:"heading",depth:2,children:[{type:"text",value:"使用"}]},{type:"code",lang:"javascript",meta:null,value:"// 现在只是一个例子，还有很多需要完善\n// 引入想要的 api\nimport { apiIns } from '@discuzq/sdk/lib/api';\n\n// 实例化请求，传的参数是 axios request config 的配置\nconst api = apiIns({\n  baseURL: 'https://www.qq.com',\n  ...,\n});\n\nconst { http } = api;\n// 可以另外设置请求拦截\nhttp.interceptors.request.use((res) => console.log(res));\n// 可以另外设置响应拦截\nhttp.interceptors.response.use((res) => {\n  const { data, status } = res;\n  // 可以进行一些针对状态的错误处理 handleError(status)\n  return data;\n})\n\n// 请求参数\nconst params = {\n  page: 1,\n  perPage: 10,\n  filter: {\n    sticky: 0,\n    essence: 1,\n  },\n};\n// 获取文章列表\napi.readThreadList({ params })\n  .then(result => console.log('read', result));"}],exampleMap:{},sourceMarkdown:"# API 集合\n\n> API SDK 的引入方式可以在 API栏目下 进行快捷复制\n\n## 使用\n\n```javascript\n// 现在只是一个例子，还有很多需要完善\n// 引入想要的 api\nimport { apiIns } from '@discuzq/sdk/lib/api';\n\n// 实例化请求，传的参数是 axios request config 的配置\nconst api = apiIns({\n  baseURL: 'https://www.qq.com',\n  ...,\n});\n\nconst { http } = api;\n// 可以另外设置请求拦截\nhttp.interceptors.request.use((res) => console.log(res));\n// 可以另外设置响应拦截\nhttp.interceptors.response.use((res) => {\n  const { data, status } = res;\n  // 可以进行一些针对状态的错误处理 handleError(status)\n  return data;\n})\n\n// 请求参数\nconst params = {\n  page: 1,\n  perPage: 10,\n  filter: {\n    sticky: 0,\n    essence: 1,\n  },\n};\n// 获取文章列表\napi.readThreadList({ params })\n  .then(result => console.log('read', result));\n```",fileMTime:"2022/07/08 23:35:02"};t.default=p},393:function(e,t,n){"use strict";var l=n(2),r=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;(function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var l={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=p?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(l,c,i):l[c]=e[c]}l.default=e,n&&n.set(e,l)})(n(0)),l(n(13));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}var p={blocks:[{type:"heading",depth:1,children:[{type:"text",value:"本地存储 - LocalBridge"}]},{type:"heading",depth:2,children:[{type:"text",value:"使用"}]},{type:"code",lang:"javascript",meta:null,value:"import LocalBridge from '@discuzq/sdk/lib/localstorage';\n\nconst ls = new LocalBridge();\nls.set('user', 'angelzou');\nls.get('user'); // angelzou\nls.remove('user');\nls.get('user'); // null"},{type:"heading",depth:2,children:[{type:"text",value:"初始化的时候可以设置键的前缀"}]},{type:"code",lang:"javascript",meta:null,value:"const ls = new LocalBridge({ prefix: 'test' })"},{type:"paragraph",children:[{type:"text",value:"可以初始化的值："}]},{type:"list",ordered:!1,start:null,spread:!1,children:[{type:"listItem",spread:!1,checked:null,children:[{type:"paragraph",children:[{type:"text",value:"prefix: string（前缀）；默认值："},{type:"inlineCode",value:"__dzqls-"}]}]}]},{type:"heading",depth:2,children:[{type:"text",value:"方法"}]},{type:"heading",depth:3,children:[{type:"text",value:"设置存储项"}]},{type:"code",lang:"javascript",meta:null,value:"ls.set('user', 'angelzou', 30); // 设置 user 选项的值为 angelzou，30 秒后过期"},{type:"paragraph",children:[{type:"text",value:"入参："}]},{type:"list",ordered:!1,start:null,spread:!0,children:[{type:"listItem",spread:!1,checked:null,children:[{type:"paragraph",children:[{type:"inlineCode",value:"key: string（键）"}]}]},{type:"listItem",spread:!1,checked:null,children:[{type:"paragraph",children:[{type:"inlineCode",value:"value: string | object（值）"}]}]},{type:"listItem",spread:!1,checked:null,children:[{type:"paragraph",children:[{type:"inlineCode",value:"expires: number（可选：设置过期时间，单位秒）"}]}]},{type:"listItem",spread:!0,checked:null,children:[{type:"paragraph",children:[{type:"text",value:"获取存储项"}]},{type:"code",lang:"javascript",meta:null,value:"ls.get('user');"},{type:"paragraph",children:[{type:"text",value:"入参："}]},{type:"list",ordered:!1,start:null,spread:!1,children:[{type:"listItem",spread:!1,checked:null,children:[{type:"paragraph",children:[{type:"inlineCode",value:"key: string（键）"}]}]}]},{type:"paragraph",children:[{type:"text",value:"返回：如果有存储的值，返回存储的值，如果没有，返回 null"}]}]},{type:"listItem",spread:!0,checked:null,children:[{type:"paragraph",children:[{type:"text",value:"删除存储项"}]},{type:"code",lang:"javascript",meta:null,value:"ls.remove('user');"},{type:"paragraph",children:[{type:"text",value:"入参："}]},{type:"list",ordered:!1,start:null,spread:!1,children:[{type:"listItem",spread:!1,checked:null,children:[{type:"paragraph",children:[{type:"inlineCode",value:"key: string（键）"}]}]}]}]},{type:"listItem",spread:!0,checked:null,children:[{type:"paragraph",children:[{type:"text",value:"清空所有存储项"}]},{type:"code",lang:"javascript",meta:null,value:"ls.clear();"}]}]}],exampleMap:{},sourceMarkdown:"# 本地存储 - LocalBridge\n\n## 使用\n\n```javascript\nimport LocalBridge from '@discuzq/sdk/lib/localstorage';\n\nconst ls = new LocalBridge();\nls.set('user', 'angelzou');\nls.get('user'); // angelzou\nls.remove('user');\nls.get('user'); // null\n```\n\n## 初始化的时候可以设置键的前缀\n\n```javascript\nconst ls = new LocalBridge({ prefix: 'test' })\n```\n\n可以初始化的值：\n- prefix: string（前缀）；默认值：`__dzqls-`\n\n## 方法\n\n### 设置存储项\n\n  ```javascript\n  ls.set('user', 'angelzou', 30); // 设置 user 选项的值为 angelzou，30 秒后过期\n  ```\n\n入参：\n- `key: string（键）`\n- `value: string | object（值）`\n- `expires: number（可选：设置过期时间，单位秒）`\n\n- 获取存储项\n\n  ```javascript\n  ls.get('user');\n  ```\n\n  入参：\n  - `key: string（键）`\n\n  返回：如果有存储的值，返回存储的值，如果没有，返回 null\n\n- 删除存储项\n\n  ```javascript\n  ls.remove('user');\n  ```\n\n  入参：\n  - `key: string（键）`\n\n- 清空所有存储项\n\n  ```javascript\n  ls.clear();\n  ```",fileMTime:"2022/07/08 23:35:02"};t.default=p},394:function(e,t,n){"use strict";var l=n(2),r=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;(function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var l={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=p?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(l,c,i):l[c]=e[c]}l.default=e,n&&n.set(e,l)})(n(0)),l(n(13));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}var p={blocks:[{type:"heading",depth:1,children:[{type:"text",value:"路由模块 - Router"}]},{type:"blockquote",children:[{type:"paragraph",children:[{type:"text",value:"路由模块实现了跨端的基础路由能力调用 "}]}]},{type:"heading",depth:2,children:[{type:"text",value:"使用方式"}]},{type:"code",lang:null,meta:null,value:"import Router from '@discuzq/sdk/dist/router';\n\nRouter.push({ url: '' })"},{type:"heading",depth:2,children:[{type:"text",value:"API"}]},{type:"blockquote",children:[{type:"paragraph",children:[{type:"text",value:"小程序参数参见 "},{type:"link",title:null,url:"https://taro-docs.jd.com/taro/docs/apis/route/reLaunch/",children:[{type:"text",value:"https://taro-docs.jd.com/taro/docs/apis/route/reLaunch/"}]}]}]},{type:"blockquote",children:[{type:"paragraph",children:[{type:"text",value:"web 参数参见 "},{type:"link",title:null,url:"https://www.nextjs.cn/docs/api-reference/next/router",children:[{type:"text",value:"https://www.nextjs.cn/docs/api-reference/next/router"}]}]}]},{type:"table",align:["left","left","left","left","left"],children:[{type:"tableRow",children:[{type:"tableCell",children:[{type:"text",value:"方法名"}]},{type:"tableCell",children:[{type:"text",value:"参数类型"}]},{type:"tableCell",children:[{type:"text",value:"描述"}]},{type:"tableCell",children:[{type:"text",value:"平台"}]}]},{type:"tableRow",children:[{type:"tableCell",children:[{type:"text",value:"push"}]},{type:"tableCell",children:[{type:"text",value:"{ url: string, as: any, options: Object } (小程序参见 Taro 的 navigateTo)"}]},{type:"tableCell",children:[{type:"text",value:"页面跳转"}]},{type:"tableCell",children:[{type:"text",value:"all"}]}]},{type:"tableRow",children:[{type:"tableCell",children:[{type:"text",value:"replace"}]},{type:"tableCell",children:[{type:"text",value:"{ url: string, as: any, options: Object }  (小程序参见 Taro 的 redirectTo)"}]},{type:"tableCell",children:[{type:"text",value:"页面替换"}]},{type:"tableCell",children:[{type:"text",value:"all"}]}]},{type:"tableRow",children:[{type:"tableCell",children:[{type:"text",value:"relaunch"}]},{type:"tableCell",children:[{type:"text",value:"(小程序参见 Taro 的 reLaunch)"}]},{type:"tableCell",children:[{type:"text",value:"重载"}]},{type:"tableCell",children:[{type:"text",value:"mini"}]}]},{type:"tableRow",children:[{type:"tableCell",children:[{type:"text",value:"switchTab"}]},{type:"tableCell",children:[{type:"text",value:"(小程序参见 Taro 的 switchTab)"}]},{type:"tableCell",children:[{type:"text",value:"切换 tab"}]},{type:"tableCell",children:[{type:"text",value:"mini"}]}]},{type:"tableRow",children:[{type:"tableCell",children:[{type:"text",value:"prefetch"}]},{type:"tableCell",children:[{type:"text",value:"{ options: Object }"}]},{type:"tableCell",children:[{type:"text",value:"预加载"}]},{type:"tableCell",children:[{type:"text",value:"web"}]}]},{type:"tableRow",children:[{type:"tableCell",children:[{type:"text",value:"beforePopState"}]},{type:"tableCell",children:[{type:"text",value:"callback: () => any"}]},{type:"tableCell",children:[{type:"text",value:"跳转前监听"}]},{type:"tableCell",children:[{type:"text",value:"web"}]}]},{type:"tableRow",children:[{type:"tableCell",children:[{type:"text",value:"back"}]},{type:"tableCell",children:[{type:"text",value:"-"}]},{type:"tableCell",children:[{type:"text",value:"回退"}]},{type:"tableCell",children:[{type:"text",value:"all"}]}]},{type:"tableRow",children:[{type:"tableCell",children:[{type:"text",value:"redirect"}]},{type:"tableCell",children:[{type:"text",value:"{ url: string, as: any, options: Object } (小程序参见 Taro 的 redirectTo)"}]},{type:"tableCell",children:[{type:"text",value:"页面重定向"}]},{type:"tableCell",children:[{type:"text",value:"all"}]}]}]}],exampleMap:{},sourceMarkdown:"# 路由模块 - Router\n> 路由模块实现了跨端的基础路由能力调用 \n\n## 使用方式\n```\nimport Router from '@discuzq/sdk/dist/router';\n\nRouter.push({ url: '' })\n```\n\n## API\n\n> 小程序参数参见 https://taro-docs.jd.com/taro/docs/apis/route/reLaunch/\n\n> web 参数参见 https://www.nextjs.cn/docs/api-reference/next/router\n\n| 方法名 | 参数类型 |描述 | 平台 |\n| :- | :- | :- | :- | :- |\n| push | { url: string, as: any, options: Object } (小程序参见 Taro 的 navigateTo) | 页面跳转 | all |\n| replace | { url: string, as: any, options: Object }  (小程序参见 Taro 的 redirectTo) | 页面替换 |  all |\n| relaunch | (小程序参见 Taro 的 reLaunch) | 重载 | mini |\n| switchTab | (小程序参见 Taro 的 switchTab) | 切换 tab | mini |\n| prefetch | { options: Object }  | 预加载 | web |\n| beforePopState | callback: () => any | 跳转前监听 | web |\n| back | - | 回退 | all |\n| redirect | { url: string, as: any, options: Object } (小程序参见 Taro 的 redirectTo) | 页面重定向 | all |",fileMTime:"2022/07/08 23:35:02"};t.default=p}}]);

}
