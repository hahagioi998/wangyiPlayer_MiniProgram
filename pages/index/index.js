import request from '../../utils/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [], //轮播图列表
    recommendSongList:[]  //推荐歌曲列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {

    let bannerListData = await request('/banner', {
      type: 2
    });
    this.setData({

      bannerList: bannerListData.banners
    });


    let recommendData = await request('/personalized',{limit:5});

    this.setData({
      recommendSongList: recommendData.result
    });
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