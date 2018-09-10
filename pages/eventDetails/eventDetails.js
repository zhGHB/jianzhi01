
import api from '../../api/index.js';
let app = getApp();
// const WxParse = require('../../wxParse/wxParse.js');
// import {WxParse} from '../../wxParse/wxParse.js'
var WxParse = require('../../wxParse/wxParse.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [
          {name: '活动详情'},
          {name: '行程准备'},
          {name: '费用说明'},
          {name: '评价'}
        ],
        tabIndex: 0,
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
        showMask: false,
        detail: {},
        diff: 0,
        maxDiff: 5,
        leadList: [],
        activeRate: [],
        myCollect: false
    },
    onLoad: function(options) {
        let id = options.id;
        this.setData({id});
        this.getDatail(id);
        this.getActiveLead(id);
        this.getActiveRate(id);
    },
    collect() {
      let active_id = this.data.id;
      let user_id = app.globalData.userID;
      api.collect({active_id,user_id}).then((res)=>{
        this.setData({myCollect: true})
      })
    },
    changeTab(e) {
      let id= e.currentTarget.dataset.id;
      this.setData({tabIndex: id});
    },
    getDatail(id) { // 获取详情
        let that = this;
        api.getActiveDetail({id}).then((res)=>{
            this.setData({
                detail: res,
                diff: parseInt(res.diff)
            });
            WxParse.wxParse('route', 'html', res.route, that, 5);
            WxParse.wxParse("rate", 'html' ,res.details, that, 5);
            WxParse.wxParse("price_explain", 'html' ,res.price_explain, that, 5);
        });
    },
    getActiveLead(active_id) { // 获取领队
        api.getActiveLead({active_id}).then((res)=> {
          this.setData({leadList: res});
        });
    },
    getActiveRate(active_id) { // 获取评价
      api.getActiveRate({active_id}).then((res)=> {
        this.setData({activeRate: res});
      });
    },
    // 去报名、
    goBook() {
        // this.setData({
        //     showMask: true
        // });
        wx.navigateTo({
          url: '../orderConfirmation/orderConfirmation?id=' + this.data.id
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
         url:`../nameList/nameList?active_id=${this.data.id}&team_id=3`,
        })
    },
    goHome() {
      wx.switchTab({
         url: '../activey/activey'
      });
    },
    share() {
      Page.onShareAppMessage();
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
