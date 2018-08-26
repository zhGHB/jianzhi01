// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     item: [
        {name:'我的订单',path:'../myOrder/myOrder',iconUrl:''},
        {name:'我的收藏',path:'../myCollection/myCollection',iconUrl:''},
        {name:'设置',path:'../setting/setting',iconUrl:''},
        {name:'我的钱包',path:'../myPurse/myPurse',iconUrl:''},
        {name:'联系客服',path:'../customMade/customMade',iconUrl:''},
        {name:'帮助中心',path:'',iconUrl:''},
        {name:'关于我们',path:'../customMade/customMade ',iconUrl:''},
        {name:'领队工作台',path:'../leadPaltform/leadPaltform',iconUrl:''},
        {name:'销售工作台 ',path:'../leadPaltform/leadPaltform?isXiaoshou=true',iconUrl:''}
     ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  goDetail(e) {
    let path = e.currentTarget.dataset.path;
    wx.navigateTo({
     url:path,
    })
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