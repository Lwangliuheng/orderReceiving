// pages/picklist/surveyList/surveyList.js
var config = require('../../../config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrderList();
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
  //获取订单列表
  getOrderList(){
    console.log(999999999999)
    var data = {
      userId: getApp().data.orderUserId,
      lng: 116.4694415328,//getApp().data.longitude,
      lat: 39.8984379793  //getApp().data.latitude
    };
    var requesturl = config.RequestAddressPrefix4 + '/application/json';
    var that = this;
    wx.request({
      url: requesturl,
      method: "POST",
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.rescode == 200) {
          // that.setData({
          //   isExist: res.data.data.isExist,
          //   phoneNumber: res.data.data.userMobilePhone,
          //   insuranceCompany: res.data.data.insuranceCompanyName,
          //   insuranceCompanys: res.data.data.insuranceCompanys
          // })
          // wx.hideLoading()
        }
        console.log(res, 6666666666666666666666)
      },
      fail: function () {

      }
    })
     
  },
  //抢单按钮
  lootMenu(event){
      wx.showModal({
      title: '温馨提示',
      content: '抢单成功后不能手动取消，需联系客服取消订单',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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