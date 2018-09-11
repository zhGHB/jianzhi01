let app = getApp();
import api from '../../api/index.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tabs:[],
    tabIndex: 0,
    tag: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    this.getBanner();
    this.getCate();
    this.getIntTab();
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        api.getCode({code: res.code}).then((myRes)=> {
          api.getIntTag({user_id: myRes.user_id}).then((res)=> {
            that.setData({tag: res});
          })
        })

      }
    })
  },
  getBanner() {
    api.getActiveBanner().then((res)=>{
      this.setData({
        banner: res
      })
    });
  },
  goSeach() {
    wx.navigateTo({
     url: '../activitySearch/activitySearch',
    })
  },
  calander() {
     wx.navigateTo({
      url:'../calendar/calendar',
     })
  },
  goInt() {
    wx.navigateTo({
     url:`../myInt/myInt`,
    })
  },
  getIntTab() {
    
  },
  // 获取分类
  getCate() {
    api.getCate().then((res)=>{
      let tabs = [];
      let firstObj = {
        tabName: '推荐',
        id: '',
        page: 0,
        list: [],
        click: true,
        isMore: true
      };
      tabs.push(firstObj);
      res.map((item,index)=>{
        let obj = {};
        obj.tabName = item.cate_name;
        obj.id = item.id;
        obj.page = 0;
        obj.list = [];
        obj.click = true;
        obj.isMore= true;
        tabs.push(obj);
      });
      this.setData({
        tabs
      },()=>{
        this.getListByID('');
      });
    })
  },
  // 获取分类
  changeTag(e) {
    let id = e.currentTarget.dataset.id;
    let cateID = e.currentTarget.dataset.cateid;
    this.setData({
      tabIndex: id
    },()=>{
      this.getListByID(cateID);
    });
    
  },
  // 请求数据
  getListByID(cate,type = 0) {
    let tabs = this.data.tabs;
    let index = this.data.tabIndex;
    if(type === 0) {
        if(!tabs[index].click) {
          return;
        } 
    }else {
      if(!tabs[index].isMore) {
        return;
      }
    }
    let page = this.data.tabs[index].page;
    let params = {page,cate};
    api.getListByID(params).then((res)=>{
      tabs[index].click = false;
      tabs[index].page ++ ;
      tabs[index].list = [...tabs[index].list,...res];
      if(res.length < 10) {
        tabs[index].isMore = false;
      }
      this.setData({tabs});
    });

  },
  // 加载跟多
  loadMore() {
    let cateID = this.data.tabs[this.data.tabIndex].id;
    this.getListByID(cateID,1);
  },
  // 加载跟对
  // 请求数据
  // 详情
  goDetail(e) {
   let id = e.currentTarget.dataset.id;
    wx.navigateTo({
     url:`../eventDetails/eventDetails?id=${id}`,
    })
  },
  // 详情
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