Page({
  data:{
    // text:"这是一个页面"
    logs:[]
  },
  onShow:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var logs = wx.getStorageSync('calclogs');
    this.setData({"logs":logs});
  },

})