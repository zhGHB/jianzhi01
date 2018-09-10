// pages/setting/setting.js
import api from '../../api/index.js';
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null,
    inputValue: '12121'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({userInfo: app.globalData.userInfo}) 
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  sub() {
    console.log(this.data.inputValue);
    api.intro({user_id: app.globalData.userID, mood: this.data.inputValue}).then((res) => {

    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  isGobindPhone(e) {
    console.log(e);
    let url = e.currentTarget.dataset.url;  
    console.log(url)
    if(!url) {
      wx.showModal({
                  title: '提示',
                  content: '开发中',
                  success: function (res) {
                      if (res.confirm) {
                          console.log('用户点击确定')
                      }else{
                         console.log('用户点击取消')
                      }

                  }
              })
    } ;
    wx.navigateTo({
       url: url,
      })
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