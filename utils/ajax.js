 let baseUrl = '';
  function ajax(url, data) {
     return new Promise((resove, reject) => {
         wx.request({
             url: 'https://hw.scmxkj.com/hw/home/banner',
             data: {},
             header: {
                 'content-type': 'application/json' // 默认值
             },
             success: function(res) {
             	
                 resove(res.data);
                 console.log("中间")
             },
             fail: function(err) {
                  reject(err);
             }

         })
     })
 };
 export default ajax;