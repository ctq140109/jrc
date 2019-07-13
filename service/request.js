import {
  base_url
} from './api.js';
class HTTP {
  baseUrl = base_url;
  request({
    url,
    data = {},
    method = 'GET',
    header = 'www'
  }) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method, header)
    })
  }
  _request(url, resolve, reject, data, method, header) {
    let headers = header == 'json' ? 'application/json' : 'application/x-www-form-urlencoded';
    wx.request({
      url: this.baseUrl + url,
      method: method,
      data: data,
      header: {
        'content-type': headers
        // 'content-type': 'application/x-www-form-urlencoded'
        // 'content-type': 'application/json' // POST默认值
      },
      success: (res) => {
        // resolve(res.data);
        if (res.data.status == 1) {
          resolve(res.data);
        } else {
          reject();
          // wx.hideNavigationBarLoading();
          // wx.stopPullDownRefresh();
          this._showToast(res.data.msg);
        }
      },
      fail: (err) => {
        reject();
        // wx.hideNavigationBarLoading();
        // wx.stopPullDownRefresh();
        this._showToast('请求出错，请稍后重试');
      }
    })
  }

  _showToast(title) {
    wx.showToast({
      title: title,
      icon: 'none',
      duration: 2000
    })
  }
}
export {
  HTTP
}