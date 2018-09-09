// pages/calendar/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    year: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.dateData()
      this.getData()
  },

    dateData: function () {
        let dataAll = []//总日历数据
        let dataAll2 = []//总日历数据
        let dataMonth = []//月日历数据
        let date = new Date//当前日期
        let year = date.getFullYear()//当前年
        this.setData({year})
        let week = date.getDay();//当天星期几
        let weeks=[]
        let month = date.getMonth() + 1//当前月份
        this.setData({month})
        let day = date.getDate()//当天
        this.setData({day})
        let daysCount = 100//一共显示多少天
        let dayscNow = 0//计数器
        let monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]//月份列表
        let nowMonthList=[]//本年剩余年份
        for (let i = month;i<13;i++){
            nowMonthList.push(i)
        }
        let yearList = [year]//年份最大可能
        for (let i = 0; i < daysCount/365+2;i++){
            yearList.push(year+i+1)
        }
        let leapYear = function (Year) {//判断是否闰年
            if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
                return (true);
            } else { return (false); }
        }
        for (let i = 0; i < yearList.length;i++){//遍历年
            let mList
            if (yearList[i] == year){//判断当前年份
                mList = nowMonthList
            }else{
                mList = monthList
            }
            for (let j = 0; j < mList.length;j++){//循环月份
                dataMonth=[]
                let t_days = [31, 28 + leapYear(yearList[i]), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
                let t_days_thisYear=[]
                if (yearList[i] == year){
                    for (let m = 0; m<nowMonthList.length;m++){
                        t_days_thisYear.push(t_days[mList[m]-1])
                    }
                    t_days = t_days_thisYear
                } else {
                    t_days = [31, 28 + leapYear(yearList[i]), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
                }
                for (let k = 0; k < t_days[j];k++){//循环每天
                    dayscNow++
                    let nowData
                    if (dayscNow < daysCount) {//如果计数器没满
                        let days = k + 1
                        if (days < 10) {
                            days = "0" + days
                        }
                        if (yearList[i] == year && mList[j] == month){//判断当年当月
                            if (k + 1 >= day) {
                                nowData = {
                                    year: yearList[i],
                                    month: mList[j],
                                    day: k + 1,
                                    date: yearList[i] + "" + mList[j] + days,
                                    selected: 0,
                                    re: yearList[i] + "-" + mList[j] + "-" + days,
                                }
                                dataMonth.push(nowData)
                                if (k+1 == day) {
                                    let date = new Date(yearList[i] + "-" + mList[j] + "-" + (k + 1))
                                    let weekss = date.getDay()//获取每个月第一天是周几
                                    weeks.push(weekss)
                                }
                            }
                        }            else {//其他情况
                            nowData = {//组装自己需要的数据
                                year: yearList[i],
                                month: mList[j],
                                day: k + 1,
                                date: yearList[i] + "" + mList[j] + days,
                                selected: 0,
                                re: yearList[i] + "-" + mList[j] + "-" + days,
                            }
                            dataMonth.push(nowData)
                            if (k == 0) {
                                let date = new Date(yearList[i] + "-" + mList[j] + "-" + k + 1)
                                let weekss = date.getDay()//获取每个月第一天是周几
                                weeks.push(weekss)
                            }
                        }
                    }else{
                        break
                    }
                }
                dataAll.push(dataMonth)
            }
        }
        for (let i = 0; i < dataAll.length;i++){
            if (dataAll[i].length!=0){
                dataAll2.push(dataAll[i]);
            }
        }
        this.setData({
            date: dataAll2,
            weeks: weeks
        })
    },
    changeMonthD() {
      let index = this.data.index;
      index --;
      console.log(index);
      if (index < 0) return;
      let month = this.data.month;
      this.setData({month: month -1});
      if (month === 0) {
        month = 12;
        this.setData({
          year: this.data.year - 1,
          month,
          index
        });
      }
    },
    changeMonth() {
      let month = (this.data.month + 1) % 13;
      if (month === 0) {
        this.setData({
          year: this.data.year + 1
        });
        month = 1;
      }
      this.setData({
        index: this.data.index + 1,
        month
      },() => {
        this.getData(this.data.index);
      }) 
    },
    getData(index = 0){
      let date=[]
        let temp=[]
        let newDate=new Date();
        let year=newDate.getFullYear();
        let month=newDate.getMonth();
        let days=this.getMonthDays(year,month + index);
        let weekDay=this.firstDay(year,month + index);
        let lastDays=this.getMonthDays(year,month-1 + index)
        for(let i=weekDay-1;i>=0;i--){
            temp.push(lastDays-i)
        }
        for (let j=1;j<days;j++){
            if(temp.length>=7){
                date.push(temp)
                temp=[]
            }
            temp.push(j)
        }
        let a=0
        while (temp.length<7){
            temp.push(a++)
        }
        date.push(temp)
        this.setData({
            date:date
        })
    },
    // 获取当前月份天数
    getMonthDays(year,month){
        let date=new Date(year,month+1,0)
         return date.getDate()
    },
    // 获取每月第一天是星期几
    firstDay(year,month){
       return new Date(year,month,1).getDay()
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