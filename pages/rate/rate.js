// pages/rate/rate.js
import api from '../../api/index.js';
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detail: [],
        inputValue: '',
        id: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getDetail(options.id);
        this.setData({
            id: options.id
        })
    },
    getDetail(id) {
        let user_id = app.globalData.userID;
        api.shareDetail({ user_id, id }).then((res) => {
            this.setData({ detail: res });
        })
    },
    bindKeyInput(e) {
        this.setData({
            inputValue: e.detail.value
        });
    },
    send() {
        if (this.data.inputValue === '') {
          wx.showModal({
           title:'提示',
           content:'请输入评论',
           success:function(res) {
            if(res.confirm) {
             console.log('用户点击确定')
            }
           }
          });
          return;
        }
        let params = {
            id: this.data.id,
            user_id: app.globalData.userID,
            type: 3,
            content: this.data.inputValue
        }
        api.shareRate(params).then((res) => {
            wx.showToast({
                title: '评论成功',
                icon: 'success',
                duration: 2000
            });
            this.setData({
              inputValue: ''
            })
            this.getDetail(this.data.id);
        })
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