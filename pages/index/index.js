const app = getApp()
import {
  pre_banners_url,
  classify_goods_url
} from '../../service/api.js';
const http = app.globalData.http;
Page({
  data: {

  },
  onLoad: function() {
    let res1 = http.request({
      url: pre_banners_url,
      method: 'POST'
    })
    let res2 = http.request({
      url: classify_goods_url
    })
    Promise.all([res1, res2]).then(res => {
      console.log(res);
    })
  }
})