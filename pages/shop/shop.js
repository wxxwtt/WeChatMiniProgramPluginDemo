
//index.js
var plugin = requirePlugin("ihearing-eval")
let manager = plugin.getRecordRecognitionManager()


import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'




Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onStart() {
    Toast('我是提示文案，建议不超过十五字~');
    manager.start({
      content: 'eye',
      evalMode: 'word',
      scoreCoeff: 1.0,
      duration:3000,
    })
  },
  onStop() {
    manager.onStop = function(res) {
      console.log("record file path", res.tempFilePath)
      console.log("result", res.result)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
})