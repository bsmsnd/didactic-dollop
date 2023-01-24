module.exports = {
    base: '/didactic-dollop',
    themeConfig: {
      displayAllHeaders: true, // Default: false
      sidebar: 'auto',
      sidebarDepth: 2,
      lastUpdated: 'Last Updated', // string | boolean
    },
    plugins: [
      [
        'vuepress-plugin-mathjax',
        {
          target: 'svg',
          macros: {
            '*': '\\times',
          },
        },
      ],
    ],
  }