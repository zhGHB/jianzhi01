import api from '../../api/index.js';
let app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        sex: 1,
        sexArr: [
            { name: '男', id: 1 },
            { name: '女', id: 2 }
        ],
        sexValue: [0],
        tabIndex: 1,
        pickActive: false,
        date: '',
        info:{},
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    bindDateChange(e) {
        this.setData({ date: e.detail.value });
    },
    chooseSex() {
        this.setData({ tabIndex: 1, pickActive: true });
    },
    cancel() {
        this.setData({ pickActive: false });
    },
    bindChangeSex(e) {
        this.setData({ sexValue: e.detail.value });
    },
    confirm() {
        switch (this.data.tabIndex) {
            case 0:
                this.search({ cate: this.data.tabs[this.data.cateValue].id });
                break;
            case 1:
                this.setData({
                    sex: this.data.sexArr[this.data.sexValue].id
                })
                break;
            case 3:
                this.search({ desc: this.data.price[this.data.ascValue].id });
                break;
            default:

        }
        this.cancel();
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
      this.getInfo();
    },
    getInfo() {
      api.getContact({user_id:app.globalData.userID}).then((res) => {
        this.setData({
          date: res.birthday,
          sex: res.sex,
          info: res
        });
      })
    },
    formSubmit(e) {
        let form = e.detail.value;
        for (var key in form) {
          if(form[key] == '') {
            this.showToast();
            return;
          }
        };
        if (this.date == '') {
          this.showToast();
          return;
        };
        let parmas = {
            birthday: this.data.date.substr(0, 4) + this.data.date.substr(4).replace('0','').replace('0',''),
            sex: this.data.sex,
            user_id: app.globalData.userID
        };
        // wx.showModal({
        //     title: '提示',
        //     content: '服务器异常',
        //     success: function(res) {
        //         if (res.confirm) {}
        //     }
        // });
        api.udateContact({...form,...parmas}).then((res) => {
            wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000
            });
            setTimeout(()=> {
              wx.navigateBack();
            },1000);
        });
    },
    showToast() {
        wx.showModal({
            title: '提示',
            content: '请填写完整信息',
            success: function(res) {
                if (res.confirm) {}
            }
        })
        return;
    },
    save() {
        this.formSubmit();
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