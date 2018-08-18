// pages/activey/activey.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tabs:[
      {name: '推荐',id: 0},
      {name: '周边',id: 1},
      {name: '长线',id: 2},
      {name: '节假日',id: 3},
      {name: '定制',id: 4}
    ],
    tabIndex: 0,
    list:[1,1,1,1,1,1,1,1,1,11,2,2]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  changeTag(e) {
    let id = e.currentTarget.dataset.id;
    this.setData({
      tabIndex: id
    })
  },
  // 详情
  goDetail() {
    wx.navigateTo({
     url:'../eventDetails/eventDetails',
    })
  },
  // 详情
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