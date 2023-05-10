// pages/team/team.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tuisong:[
      {
        "url":"https://mp.weixin.qq.com/s/cb07lcKnd8KeIVC9SUdkuQ",
        "img":"https://mmbiz.qpic.cn/mmbiz_gif/PheWqibTAgXErt3Nw3CfMyLEVibbu756avCoY5eA6ib1I1dLmQXF4RFZp8uZ2fZ2R9xS4KD2Qr6c1nrb3eE9VWRUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1",
        "name":"【实践Over】0和1的浪漫，在CSS与你诉说！",
      },
      {
        "url":"https://mp.weixin.qq.com/s/TGAwAxcWpof1G9X9yM-1vg",
        "img":"https://mmbiz.qpic.cn/mmbiz_jpg/PheWqibTAgXFUX0FI0ppaHwlicNFFdh7H8VrA9MDxd4r3VP4oRvgAxAuyvA3WZxGUa1ZDLS5UScxnE042oNRfLIA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        "name":"秦安IP上新啦！限时登场，可爱来袭！",
      },
      {
        "url":"https://mp.weixin.qq.com/s/Wq492X3Y4FhcYrBN9k9VZg",
        "img":"https://mmbiz.qpic.cn/mmbiz_gif/PheWqibTAgXErt3Nw3CfMyLEVibbu756avCoY5eA6ib1I1dLmQXF4RFZp8uZ2fZ2R9xS4KD2Qr6c1nrb3eE9VWRUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1",
        "name":"【实践Over】胸怀山河烂漫，历经千帆归来",
      },
      {
        "url":"https://mp.weixin.qq.com/s/ct5T8Wiw0jAWY1z1IGqPmA",
        "img":"https://mmbiz.qpic.cn/mmbiz_gif/PheWqibTAgXEYiaiaXUgsTRfKSO9z4AODVLhdpib5nOROfxKg2PuyLsVvoSib06pQdo9JPibzOk1kmguUSxX9UcJT5mQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1",
        "name":"在路上 | 小鹿与索奥的邂逅 ",
      },
      {
        "url":"https://mp.weixin.qq.com/s/HuN99iPGsyfcB606JREBOg",
        "img":"/child1/images/tuisong/img_15.png",
        "name":"放慢脚步，忆往昔，恰是一番好风景！",
      },
      {
        "url":"https://mp.weixin.qq.com/s/3WXons15JevvjjyzNkOELA",
        "img":"https://mmbiz.qpic.cn/mmbiz_gif/PheWqibTAgXGBTibUCWzYz0G1bYjNT2NOtrsv7CaM6ncbvt103bgcc5oOYdv71psfRoicG5cDgbEICkrVepculDYQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1",
        "name":"桃桃&椒椒 表情包上线啦！",
      },
      {
        "url":"https://mp.weixin.qq.com/s/TejZLNO7DPQ2bL48mbrJTg",
        "img":"/child1/images/tuisong/img_14.png",
        "name":"在路上 | 实践绘就最美青春，北科学子助力秦安振兴",
      },

      {
        "url":"https://mp.weixin.qq.com/s/k-YnqXqAzw77rz7rThrIlA",
        "img":"/child1/images/tuisong/img_13.png",
        "name":"鹿鼎沁桉｜小鹿实践故事",
      },
      {
        "url":"https://mp.weixin.qq.com/s/8mvL5473rfFonvGpUEDRHg",
        "img":"/child1/images/tuisong/img_11.png",
        "name":"真香！Get带货新技能，带你共赴一场美食盛宴！",
      },
      {
        "url":"https://mp.weixin.qq.com/s/eL7OOtsxVwEj0hAKS2WD3A",
        "img":"https://mmbiz.qpic.cn/mmbiz_png/trj8u2gPG73ibJwxicdVxtbvKYnxVKj41m9hHibBjCtdL1s2wsT4Oo7jK0gs3QSReHpibTrpufMXKUn8eaupHzrGlA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1",
        "name":"鹿鼎沁桉 ｜小鹿实践故事",
      },
      {
        "url":"https://mp.weixin.qq.com/s/whu0voGbNrnjWMYD8nbUXw",
        "img":"/child1/images/tuisong/img_10.png",
        "name":"在路上 | 小鹿的工作汇报",
      },

      {
        "url":"https://mp.weixin.qq.com/s/Uu0CcLwDHcdqqlJNbiclHQ",
        "img":"https://mmbiz.qpic.cn/mmbiz_gif/CFMEJZqgZJbyhz5qOAJmNZ6Eibb1llb8wiaibs4alkFLRLQhSjBUapDGYexyZ5D7HYt7U813vclKDR9Oqbbcy56Fg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1",
        "name":"鹿鼎沁桉 | 实践中期总结",
      },
      {
        "url":"https://mp.weixin.qq.com/s/CWgEOSh0h24OQKszXkiF-g",
        "img":"https://mmbiz.qpic.cn/mmbiz_gif/CFMEJZqgZJbyhz5qOAJmNZ6Eibb1llb8wXL1hU9NiaJ0yN45fagG043Le1wc3ZSOts9mmoqicyXCmM8yXyib7FJ94g/640?wx_fmt=gif&wxfrom=5&wx_lazy=1",
        "name":"鹿鼎沁桉 | 实践足迹【第四弹】",
      },
      {
        "url":"https://mp.weixin.qq.com/s/Ok-ppyGA8yR5Oy6-giFzCg",
        "img":"/child1/images/tuisong/img_9.png",
        "name":"在路上 | 小鹿的公益之路",
      },

      {
        "url":"https://mp.weixin.qq.com/s/PQSfSz8xPMyucSw4Pqf4Jw",
        "img":"/child1/images/tuisong/img_8.png",
        "name":"在路上 | 实践足迹【第三弹】",
      },
      {
        "url":"https://mp.weixin.qq.com/s/Pl4v7JXkLEcg7VJZoi3HuQ",
        "img":"/child1/images/tuisong/img_7.png",
        "name":"初期总结｜小鹿实践故事",
      },
      {
        "url":"https://mp.weixin.qq.com/s/TN19iKv528E4bHvGyF9oxg",
        "img":"/child1/images/tuisong/img_6.png",
        "name":"实践报道 | “三下乡”社会实践 ，助力秦安小寨乡村振兴",
      },
      {
        "url":"https://mp.weixin.qq.com/s/8z4BgIZ0IQaG841CpfdITw",
        "img":"https://mmbiz.qpic.cn/mmbiz_svg/VLjDyM7pibyIH8exb7WEOj2lf9Z8pNhRibn47blvkNXgcgKjKaZyT6S1j4QwJHFFz8M9spWxnH0dSeCdrD3FdGBuOABt4mHKqe/640?wx_fmt=svg&wxfrom=5&wx_lazy=1&wx_co=1",
        "name":"实践足迹｜小鹿带货【第二弹】",
      },
      {
        "url":"https://mp.weixin.qq.com/s/gk2yJhoDFUxt0wTQ48Z8vA",
        "img":"https://mmbiz.qpic.cn/mmbiz_jpg/PheWqibTAgXEx0icch8mIf6vFGBsCEcnIEadUHMg9PFedN6RSQq9tkdl6WXWLvCntHQnCwRLvAQDem7JQkt7mOaw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        "name":"秦安县企业介绍|甘肃盛源菊香农业发展有限公司",
      },
      {
        "url":"https://mp.weixin.qq.com/s/mE_8vw84uguZypWTbv6L5Q",
        "img":"/child1/images/tuisong/img_5.png",
        "name":"在路上 |【公益策划】星星之火 ，汇聚乡村希望",
      },
      {
        "url":"https://mp.weixin.qq.com/s/lw46cnbXV1hFRuJSWjckEw",
        "img":"/child1/images/tuisong/img_4.png",
        "name":"在路上｜【实践第一弹】小鹿带货",
      },
      {
        "url":"https://mp.weixin.qq.com/s/Mxngv36-sIwZlef4y4s1JA",
        "img":"/child1/images/tuisong/img_3.png",
        "name":"在路上 | 小鹿日记——07.25",
      },
      {
        "url":"https://mp.weixin.qq.com/s/QS7xZN8Nn_f7LLBPb_jUSw",
        "img":"/child1/images/tuisong/img+2.png",
        "name":"在路上 | 小鹿日记——07.19",
      },
      {
        "url":"https://mp.weixin.qq.com/s/LMTfsy46XHo4qqBkAjMOww",
        "img":"https://mmbiz.qpic.cn/mmbiz_jpg/PheWqibTAgXFr3pybXS6TiaklVSAByvc8bdiaE9QW5hibcycbrDGTz1YyhCZDTFMicJLBmcYpBdXiclaluHJp2UnZTZw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        "name":"小鹿听说这里有三样好东西！！！",
      },
      {
        "url":"https://mp.weixin.qq.com/s/jXr9kE3kGGAToTvqXiS3qw",
        "img":"/child1/images/tuisong/img_1.png",
        "name":"在路上｜遇见一只认真开会的小鹿~",
      },
      {
        "url":"https://mp.weixin.qq.com/s/WxCkNUu5u3SDxQ0GoKtSWA",
        "img":"https://mmbiz.qpic.cn/mmbiz_jpg/PheWqibTAgXHX5HswzDhRNnrmGsDN62qBvHQHTxCPkZiaXpFTE2vBCdkeFINvfibAZUlr6r16oSIzsxcVicLwQguFA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1",
        "name":"大家好，我们是“鹿鼎沁桉”",
      },
    ]
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})