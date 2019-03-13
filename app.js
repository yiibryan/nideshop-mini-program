App({
  onLaunch: function () {
    try {
      this.checkLogged();
    } catch (e) {
      console.log(e);
    }
  },

  globalData: {
    userInfo: {
      nickname: '点击登录',
      avatar: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png'
    },
    token: '',
  },

  checkLogged(){
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res);
              this.globalData.userInfo.avatar = res.userInfo.avatarUrl;
              this.globalData.userInfo.nickname = res.userInfo.nickName;
            }
          })
        }else{
          wx.login({
            success: res=> {
              console.log('login call', res);
            }
          });
        }
      }
    })
  }
})