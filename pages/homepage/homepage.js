// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,
    activeList:[1,2,3,4]
  },
  changTab(e) {
  
  	let id = e.currentTarget.dataset.id;
  	console.log(e)
  	this.setData({
  		tabIndex: parseInt(id)
  	})
  }
})