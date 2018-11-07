module.exports = {
  title: 'hustle',
  contentLoading: true,
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  description: 'keep going',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.jpg'
    }], // 增加一个自定义的 favicon(网页标签的图标)
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // base:  '/dist/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    locales: {
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        nav: require('./nav/en'),
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        sidebar: {
          // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
          '/en/front/': getFrontSidebar('front'),
          '/en/algorithm/': getAlgorithmSidebar('algorithm'),
          '/en/operations/': getOperationSidebar('operations'),
          '/en/CS/': getCSSidebar('CS'),
        },
      },
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        nav: require('./nav/zh'),
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        sidebar: {
          // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
          '/front/': getFrontSidebar('前端'),
          '/algorithm/': getAlgorithmSidebar('算法'),
          '/operations/': getOperationSidebar('运维'),
          '/CS/': getCSSidebar('计算机通用知识'),
        },
      }
    }
  }
}

function getFrontSidebar (groupA) {
  return [
    {
      title: groupA,
      children: [
        ['','JS'],
        ['Browser/','Browser'],
        ['Framework/','Framework'],
        ['MP/','MP'],
        ['Performance/','Performance'],
        ['React/','React'],
        ['Safety/','Safety'],
        ['Vue/','Vue'],
      ]
    }
  ]
}
function getAlgorithmSidebar (groupA) {
  return [
    {
      title: groupA,
      children: [
        ['','Algorithm'],
        ['DataStruct/','DataStruct']
      ]
    }
  ]
}
function getCSSidebar (groupA) {
  return [
    {
      title: groupA,
      children: [
        ['','Network'],
        ['Git/','Git']
      ]
    }
  ]
}
function getOperationSidebar (groupA) {
  return [
    {
      title: groupA,
      children: [
        ['','Docker'],
        ['simple/test','Kubernetes']
      ]
    }
  ]
}