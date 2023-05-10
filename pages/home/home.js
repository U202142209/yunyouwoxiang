// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页轮播图地址
    home_swiper: [
      "/images/home/swiper/img_1.png",
      "/images/home/swiper/img_2.png",
      "/images/home/swiper/img_3.png",
      "/images/home/swiper/img_4.png",
      "/images/home/swiper/img_5.png",
    ],
    //菜单栏
    navigations: [{
      "id": 1,
      "text": "秦安简介",
      "photo": "/images/home/jianjie.png",
      "content": "",
    }, {
      "id": 2,
      "text": "苹果",
      "photo": "/images/home/apple.png",
      "content": "",
    }, {
      "id": 3,
      "text": "蜜桃",
      "photo": "/images/home/peach.png",
      "content": "",
    }, {
      "id": 4,
      "text": "花椒",
      "photo": "/images/home/huajiao.png",
      "content": "",
    }, ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
    console.log('上拉初定函数');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})