// pages/myOrder/myOrder.js
import api from '../../api/index.js';
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrder(); 
  },
  getOrder() {
    api.myOrder({user_id: app.globalData.userID}).then((res)=> {
      let list = res;
      list.map((item,index)=> {
        item.show = false;
      })
      this.setData({list:res});
    })
  },
  showDetail(e) {
    let Index = e.currentTarget.dataset.index;
    let list = this.data.list;
    list.map((item,index)=> {
      if(index == Index) {
        item.show = !item.show;
      }else {
        item.show = false;
      }
    });
    this.setData({list});
  },
  goRate() {
    wx.navigateTo({
     url:'../activeRate/activeRate',
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