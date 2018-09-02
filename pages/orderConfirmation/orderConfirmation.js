// pages/orderConfirmation/orderConfirmation.js
import api from '../../api/index.js';
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    agree: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.orderScan(options.id); 
  },
  changC() {
    wx.navigateTo({
      url: '../addContact/addContact'
    })
  },
  orderScan(id) {
    let user_id = app.globalData.userID;
    api.orderScan({user_id,team_id:id}).then((res)=> {
      this.setData({info: res});
    })
  },
  agree() {
    this.setData({
      agree: !this.data.agree
    })
  },
  goPay() {
    if(!this.data.agree) {
      wx.showModal({
       title:'提示',
       content:'请同意阅读',
       success:function(res) {
        if(res.confirm) {
         
        }
       }
      })
    };
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