// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '腾飞',
    age : 18,
    count : 0,
    list : [
      {name:'赵灵儿' , age:'16'},
      {name:'桥本环奈' , age:'15'}
    ]
  },
  /**
   * 亲函数
   */
  clickToUp() {
    this.setData({
      count: this.data.count +1
    })
  }
})