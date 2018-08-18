Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    pickActive:false,
    tabIndex: 0,
    price: [
      {name:'价格升序',id:0},
      {name:'价格降序',id:1},
      {name:'天数升序',id:2}
    ]

  },
  methods: {
    // 这里是一个自定义方法
    filter(e){
      console.log(e);
      let id = e.currentTarget.dataset.id;      
      this.setData({
        pickActive: true,
        tabIndex: id
      })
    },
    cancel() {
      this.setData({pickActive:false});
    },
    confirm() {
      this.cancel();
    },
    bindChangePrice(value) {
      console.log(value)
    }
  }
})