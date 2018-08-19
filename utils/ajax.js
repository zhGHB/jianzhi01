  import config from './config.js';
  let baseUrl = config === 'dev' ? 'http://ly.yoyoacg.com/ly/' : 'https://hw.scmxkj.com/hw/';
  function ajax(url, type = 0, data = {}) {
      let method = type === 0? 'GET' : "POST";
      return new Promise((resove, reject) => {
          wx.request({
              url: baseUrl + url,
              data: data,
              method: method,//get为默认方法/POST
              success: function(res) {
                  if(res.data.status === 1) {
                    resove(res.data.result);
                  } else if(res.data.status === 2 ) {
                    toast(res.data.msg);
                  } 
                  

              },
              fail: function(err) {
                toast("请求失败"); 
              }

          })
      })
  };
  function toast(msg) {
    wx.showToast({
        title: msg,
        icon: 'loading',
        duration: 1000,
        mask: true
    })
  }
  export default ajax;