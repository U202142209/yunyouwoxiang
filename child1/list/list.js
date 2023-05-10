// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //渲染模板时候的变量
    string:'',
    //秦安简介的数据
    qinanlist:[
      {
        "id":1,
        "text":"秦安县简介",
        "photo":"https://tse4-mm.cn.bing.net/th/id/OIP-C.V77CKGZmyJ--XL_LYKIrVQHaFr?w=207&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "content":1,
      },      {
        "id":2,
        "text":"秦安的历史沿革",
        "photo":"https://tse1-mm.cn.bing.net/th/id/OIP-C.FIVZ6plIVJ1v5IdWzqrORQHaFj?w=204&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "content":2,
      },      {
        "id":3,
        "text":"秦安的地理环境",
        "photo":"https://tse2-mm.cn.bing.net/th/id/OIP-C.MhwVzVXlqAa6FjaqQheSNAAAAA?w=197&h=159&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "content":'',
      },   {
        "id":4,
        "text":"秦安的自然资源",
        "photo":"https://tse2-mm.cn.bing.net/th/id/OIP-C.ItPsPX5wW-bmJoqLZfyoAgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "content":'',
      },  {
        "id":5,
        "text":"秦安的经济发展",
        "photo":"https://tse2-mm.cn.bing.net/th/id/OIP-C.fxKjDA2WDOo27GvLtNGe_wHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "content":'',
      }, {
        "id":6,
        "text":"秦安的社会事业",
        "photo":"https://tse3-mm.cn.bing.net/th/id/OIP-C.btqPOXFFy8gXTkqjxUk1mgHaEu?w=241&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
        "content":'',
      }, {
        "id":7,
        "text":"秦安的风景名胜",
        "photo":"https://ts3.cn.mm.bing.net/th?id=OIP-C.cM2oUuxnFV-x1BF3PUx3LwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
        "content":'',
      }
    ],
    //蜜桃的图片
    peach:[
      "/images/home/peach/peach1.jpg",
      "/images/home/peach/peach2.jpg",
      "/images/home/peach/peach4.jpg",
      "/images/home/peach/peach5.jpg",
      "/images/home/peach/peach6.jpg",
      "https://bkimg.cdn.bcebos.com/pic/3b292df5e0fe992543e6c63434a85edf8cb171e8?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_jpg",
    ],
    //苹果的图片
    apple:[
      "/images/home/apple/apple1.jpg",
      "/images/home/apple/apple2.jpg",
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.aTg5AFKmwb5SUKVjzWzfQAHaHa?w=159&h=180&c=7&r=0&o=5&dpr=1.88&pid=1.7",
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.IGwUSslGo0Mzq7dlZBE0vwHaGG?w=209&h=180&c=7&r=0&o=5&dpr=1.88&pid=1.7",
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.SX5O8ahlXb5yKIybHiDSQAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.88&pid=1.7",
      "https://bkimg.cdn.bcebos.com/pic/c75c10385343fbf2536be5aebc7eca8064388ffc?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_jpg",

    ],
    //花椒的图片链接
    huajiao:[
      "https://tse3-mm.cn.bing.net/th/id/OIP-C.oS_MvUHYk0C47KZDZTfv8wHaD2?w=304&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      "https://tse4-mm.cn.bing.net/th/id/OIP-C.HZMxoxM7aZrTc_Z4y7EXKQHaEy?w=276&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      "https://tse2-mm.cn.bing.net/th/id/OIP-C.UsqhtqAsTwAuAAsOr0BUNAAAAA?w=294&h=201&c=7&r=0&o=5&dpr=1.25&pid=1.7",
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     this.setData({string:options.obj });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})