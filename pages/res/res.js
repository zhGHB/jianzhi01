// pages/activitySearch/activitySearch.js
import api from '../../api/index.js';
Page({
    data: {
      list:[]     

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      let date = options.date;
      this.search({date});
    },
    
   
    goDetail(e) {
        let id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: `../eventDetails/eventDetails?id=${id}`,
        })
    },
    
   
    search(params = {}) {
        api.activeSearch(params).then((res) => {
            this.setData({ list: res });
        });
    },
    

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})