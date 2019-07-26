class LocationService {
  getLocations(back) {
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res);
        let location = {
          latitude: res.latitude,
          longitude: res.longitude
        };
        wx.setStorageSync("location", JSON.stringify(location));
        back(location);
      }
    })
  }
  //定位方法
  getUserLocation(back) {
    var _this = this;
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          //未授权
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function(res) {
              if (res.cancel) {
                //取消授权
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                //确定授权，通过wx.openSetting发起授权请求
                wx.openSetting({
                  success: function(res) {
                    if (res.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                      _this.getLocations((res) => {
                        back(res)
                      });
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          //用户首次进入页面,调用wx.getLocation的API
          _this.getLocations((res) => {
            back(res)
          });
        } else {
          console.log('授权成功')
          //调用wx.getLocation的API
          _this.getLocations((res) => {
            back(res)
          });
        }
      }
    })
  }
}
export {
  LocationService
}