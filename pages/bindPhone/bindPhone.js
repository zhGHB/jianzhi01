let timer = null;
import api from '../../api/index.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: null,
    code:'',
    getCodeClick: true,
    timeC: '',
    timer: null,
    allTime: 60,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bindKeyInput(e) {
    // if(e.detail.value.length > 11) return;
    this.setData({phone: e.detail.value});
  },
  code(e) {
     this.setData({code: e.detail.value});
  },
  confirm() {
    if(!this.data.code || !this.data.phone) {
      wx.showModal({
          title: '提示',
          content: '请填写完整信息',
          success: function(res) {
              if (res.confirm) {}
          }
      })
      return;
    };
    wx.showModal({
        title: '提示',
        content: '绑定功能开发中',
        success: function(res) {
            if (res.confirm) {}
        }
    })
  },
  getCode() {
    console.log(this.data.phone)
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(this.data.phone)) {
      wx.showModal({
          title: '提示',
          content: '请填写正确格式的手机号',
          success: function(res) {
              if (res.confirm) {}
          }
      })
      return;
    }
    if(!this.data.getCodeClick) return;
    api.sendCode({mobile: this.data.phone}).then((res) => {

    });
    this.setData({
      getCodeClick:false,
      timeC: this.data.allTime + 's'
    });
    let time = this.data.allTime;
    timer = setInterval(() => {
      time--;
      this.setData({timeC: time + 's'});
      if(time <= 0) {
        this.setData({
          getCodeClick: true
        });
        clearInterval(timer);
      }
    },1000);
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