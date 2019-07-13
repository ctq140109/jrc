const app = getApp()
import {
  banners_url,
  index_navigation_url,
  index_navigations_url
} from '../../service/api.js';
const http = app.globalData.http;
Page({
  data: {
    area_id: 4,
    banner_list: [], //轮播
    prefecture_list_top: [], //分类
    count: '0', //判断显示第几种
    prefecture_list_middle: [], //专区集合
  },
  onLoad: function() {
    var vm = this;
    let res1 = http.request({
      url: banners_url,
      method: 'POST',
      data: {
        agency_manage_id: vm.data.area_id,
        type: 1
      }
    })
    let res2 = http.request({
      url: index_navigation_url,
      method: 'POST',
      data: {
        agency_manage_id: vm.data.area_id,
        type: 1
      }
    })
    let res3 = http.request({
      url: index_navigations_url,
      method: 'POST',
      data: {
        agency_manage_id: vm.data.area_id,
        state: 2
      }
    })
    Promise.all([res1, res2, res3]).then(res => {
      console.log(res);
      this.setData({
        banner_list: res[0].data.banner_list,
        count: res[1].data.count,
        prefecture_list_top: res[1].data.prefecture_list,
        prefecture_list_middle: res[2].data.prefecture_list
      })
    })
  }
})