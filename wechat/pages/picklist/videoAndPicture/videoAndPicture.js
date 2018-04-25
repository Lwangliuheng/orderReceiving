Page({
  // 预览图片
  prewImage(){
      console.log("aaa")
      wx.previewImage({
        current: '',
        urls: ['http://placehold.it/226x154'],
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    },
    // 开始视频连接
  videoLink () {

  },

  // 上传图片
  uploadImage () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: '',
          filePath: tempFilePaths,
          name: 'image_file',
        })
      }
    })
  }
})