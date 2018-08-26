// pages/share/share.js
let app = getApp();
import api from '../../api/index.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {name:'分享圈',id: 0,page: 1,list: [],isMore: true},
      {name: '已关注', id: 1,page: 1,list: [],isMore: true}
    ],
    tabIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getShareList(0);
    this.getShareList(1);
  },
  getShareList(index) {
    let tabs = this.data.tabs;
    if(!tabs[index].isMore) return;
    let user_id = app.globalData.userID;
    let page = tabs[index].page;
    let param = {
      user_id,page
    };
    api.getShareList(param,index).then((res)=> {
      if(res.length < 10) {
        tabs[index].isMore = false;
      };
      tabs[index].page++;
      tabs[index].list = [...tabs[index].list,...res];
      this.setData({
        tabs
      })
    });
  },
  changeTab(e) {
    let id = e.target.id;
    this.setData({tabIndex: parseInt(id)})
  },
  goDetail() {
    wx.navigateTo({
     url:'../rate/rate',
    })
  },
  loadMore() {
      this.data.tabIndex === 0 ?this.getShareList(0):this.getShareList(1);
  },
  zan(e) {
    let id = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index;
    let user_id = app.globalData.userID;
    api.zan({user_id, id}).then((res)=> {
        let tabs = this.data.tabs;
        tabs[this.data.tabIndex].list[index].is_dz = 1;
        this.setData({tabs});
    });
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