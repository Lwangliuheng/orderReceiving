// pages/picklist/surveyMap/surveyMap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    layerState:false // 弹层状态 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  //打开联系客服弹层
  contactCustomerService(event){
      wx.showModal({
      title: '客服电话',
      content: '18245512133',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //打开工作证弹层
  openLayer(event){
    this.setData({
      layerState: true
    })
  },
  //关闭工作证弹层
  closeLayer(event){
    this.setData({
      layerState:false
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