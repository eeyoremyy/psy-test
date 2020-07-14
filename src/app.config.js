export default {
  pages: [
    'pages/index/index',
    'pages/explore/index',
    'pages/mine/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: 'rgba(68, 68, 68, 1)',
    selectedColor: 'rgba(68, 68, 68, 1)',
    backgroundColor: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/images/home.png',
        selectedIconPath: './assets/images/home@selected.png'
      },
      {
        pagePath: 'pages/explore/index',
        text: '发现',
        iconPath: './assets/images/my.png',
        selectedIconPath: './assets/images/my@selected.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: './assets/images/my.png',
        selectedIconPath: './assets/images/my@selected.png'
      }
    ]
  }
}