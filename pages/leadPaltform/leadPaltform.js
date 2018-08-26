// pages/leadPaltform/leadPaltform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: [
       {name:'账单',path:'../myOrder/myOrder',iconUrl:'../../images/icon1.png'},
       {name:'总资产',path:'../myCollection/myCollection',iconUrl:'../../images/icon2.png'}
    ],
    isXiaoshou: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   options.isXiaoshou && this.setData({isXiaoshou: options.isXiaoshou});

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
  
  }
})