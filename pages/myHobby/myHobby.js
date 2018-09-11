// pages/myHobby/myHobby.js
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
    this.getAllIntTags();
  },
  getAllIntTags() {
    api.getAllIntTags().then((res)=> {
      let list = res;
      list.map((item,index)=> {
        item.select = false;
      });
      this.setData({list});
    });
  },
  choose(e) {
    let Index = e.currentTarget.dataset.index;
    let id = e.currentTarget.dataset.id;
    let list = this.data.list;
     list.map((item,index)=> {
      if(index === Index) {
        item.select = !item.select;
      }
    });
     let params =  {
       user_id: app.globalData.userID,
       tags_id: id
     }
     api.watch(params).then((res) => {

     })
    this.setData({list}) ;
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