// import {getBanner} from '../../utils/api.js';
import api from '../../api/index.js';
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
        list: [1, 3],
        list02: [1, 2, 3],
        showMask: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let id = options.id;
        this.getDatail(id);
    },
    getDatail(id) {
        api.getActiveDetail({id}).then((res)=>{
            console.log(id)
        });
    },
    // 去报名、
    goBook() {
        this.setData({
            showMask: true
        })
    },
    // 去报名k
    // 取消
    cancel() {
        this.setData({showMask:false})
    },
    // 取消
    goNameList() {
        wx.navigateTo({
         url:'../nameList/nameList',
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