//app.js

var plugin = requirePlugin("chatbot");
plugin.init({
  appid: "P5Ot9PHJDechCYqDFAW1AiK6OtG3Ja",
  success: () => {},
  fail: error => {},
  guideList: ["您好"],
  textToSpeech: true, //默认为ture打开状态
  welcome: "请问有什么需要帮助？",
  welcomeImage: 'http://inews.gtimg.com/newsapp_bt/0/10701537095/1000',
  background: "rgba(247,251,252,1)",
  guideCardHeight: 40,
  operateCardHeight: 145,
  history: true,
  historySize: 60,
  navHeight: 0,
  robotHeader: 'https://res.wx.qq.com/mmspraiweb_node/dist/static/miniprogrampageImages/talk/leftHeader.png',
  userHeader: 'https://res.wx.qq.com/mmspraiweb_node/dist/static/miniprogrampageImages/talk/rightHeader.png',
  userName: '',
  defaultWheel: ''
});
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    //接入智能客服
    plugin.init({
      appid: "P5Ot9PHJDechCYqDFAW1AiK6OtG3Ja", //小程序示例账户，仅供学习和参考
      openid: "",//用户的openid，非必填，建议传递该参数
      success: () => {}, //非必填
      fail: error => {} //非必填
  });
  },
  globalData: {
    userInfo: null
  }
})