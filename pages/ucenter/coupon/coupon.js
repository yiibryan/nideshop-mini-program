var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');

var app = getApp();

Page({
  data: {
    snCoupon: ''
  },
  onLoad: function (options) {
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭
  },
  bindKeyInput(e) {
    this.setData({
      snCoupon: e.detail.value
    })
  },
  clearValue(){
    this.setData({
      snCoupon: ''
    })
  }
})