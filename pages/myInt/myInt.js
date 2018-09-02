// pages/activitySearch/activitySearch.js
import api from '../../api/index.js';
Page({
    data: {
        pickActive: false,
        cateValue: [0],
        dateValue: [0],
        ascValue: [0],
        tabIndex: 0,
        tabs: [],
        topTabs: [
            { name: '所有活动' },
            { name: '城市' },
            { name: '活动天数' },
            { name: '排序' },
        ],
        price: [
            { name: '价格升序', id: 'asc' },
            { name: '价格降序', id: 'desc' },
            // { name: '天数升序', id: 2 }
        ],
        cateDate: [
            { name: '1天', id: 1 },
            { name: '1-3天', id: 3 },
            { name: '3-5天', id: 5 }
        ],
        title: '',
        list: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getCate();
        this.goSeach();
    },
    calander() {
        wx.showModal({
            title: '提示',
            content: '日历开发中，请试用其他功能',
            success: function(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else {
                    console.log('用户点击取消')
                }

            }
        })
    },
    goDetail(e) {
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
       url:`../eventDetails/eventDetails?id=${id}`,
      })
    },
    filter(e) {
        console.log(e);
        let id = e.currentTarget.dataset.id;
        this.setData({
            pickActive: true,
            tabIndex: id
        })
    },
    cancel() {
        this.setData({ pickActive: false });
    },
    confirm() {
        switch (this.data.tabIndex) {
            case 0:
                this.search({ cate: this.data.tabs[this.data.cateValue].id });
                break;
            case 2:
                this.search({ day: this.data.cateDate[this.data.dateValue].id });
                break;
            case 3:
                this.search({ desc: this.data.price[this.data.ascValue].id });
                break;
            default:

        }
        this.cancel();
    },
    bindChangeCate(e) {
        this.setData({ cateValue: e.detail.value });
    },
    bindChangeDate(e) {
        this.setData({ dateValue: e.detail.value });
    },
    bindChangePrice(e) {
        this.setData({ ascValue: e.detail.value });
    },
    bindKeyInput(e) {
        this.setData({
            title: e.detail.value
        })
    },
    search(params = {}) {
        api.activeSearch(params).then((res) => {
            this.setData({ list: res });
        });
    },
    goSeach() {
        this.search({ title: this.data.title });
    },
    getCate() {
        api.getCate().then((res) => {
            let tabs = [];
            let firstObj = {
                tabName: '推荐',
                id: 0,
                page: 0,
                list: [],
                click: true,
                isMore: true
            };
            tabs.push(firstObj);
            res.map((item, index) => {
                let obj = {};
                obj.tabName = item.cate_name;
                obj.id = item.id;
                obj.list = [];
                tabs.push(obj);
            });
            this.setData({
                tabs
            });
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