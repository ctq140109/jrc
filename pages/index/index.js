const app = getApp();
import {
  LocationService
} from '../../service/location.js';
import {
  banners_url,
  index_navigation_url,
  index_navigations_url,
  select_brand_url,
  prefecture_url,
  guess_you_like_url,
  is_shop_url
} from '../../service/api.js';
const http = app.globalData.http;
const locationService = new LocationService();
Page({
  data: {
    area_name: '',
    area_id: 4,
    banner_list: [], //轮播
    prefecture_list_top: [], //分类
    count: 0, //判断显示第几种
    prefecture_list_middle: [], //专区集合
    brands_list: [], //品牌
    no_threshold: [], //无门槛图片
    thunb_list: [], //热门推销
    like_list: [], //猜你喜欢
  },
  onShow() {
    // locationService.getUserLocation(res => {
    //   console.log(res);
    //   this.area(res);
    // });
  },
  area(location) {
    http.request({
      url: is_shop_url,
      method: 'POST',
      data: {
        lon: location.longitude,
        lat: location.latitude
      }
    }).then(res => {
      console.log(res);
      this.getHomeList(res.data.agency.name, res.data.agency.id);
    })
  },
  onLoad: function() {
    locationService.getUserLocation(res => {
      console.log(res);
      this.area(res);
    });
  },
  getHomeList: function(name, id) {
    var vm = this;
    vm.setData({
      area_name: name,
      area_id: id
    });
    let req1 = http.request({
      url: banners_url,
      method: 'POST',
      data: {
        agency_manage_id: vm.data.area_id,
        type: 1
      }
    })
    let req2 = http.request({
      url: index_navigation_url,
      method: 'POST',
      data: {
        agency_manage_id: vm.data.area_id,
        type: 1
      }
    })
    let req3 = http.request({
      url: index_navigations_url,
      method: 'POST',
      data: {
        agency_manage_id: vm.data.area_id,
        state: 2
      }
    })
    let req4 = http.request({
      url: select_brand_url,
      method: 'POST',
      data: {
        agency_manage_id: vm.data.area_id
      }
    })
    let req5 = http.request({
      url: prefecture_url,
      method: 'POST',
      data: {
        agency_manage_id: vm.data.area_id
      }
    })
    let req6 = http.request({
      url: guess_you_like_url,
      method: 'POST',
      data: {
        agency_manage_id: vm.data.area_id
      }
    })
    Promise.all([req1, req2, req3, req4, req5, req6]).then(res => {
      console.log(res);
      this.setData({
        banner_list: res[0].data.banner_list,
        count: res[2].data.count,
        prefecture_list_top: res[1].data.prefecture_list,
        prefecture_list_middle: res[2].data.prefecture_list,
        brands_list: res[3].data.brands_list,
        thunb_list: res[4].data.prefecture_list,
        no_threshold: res[4].data.no_threshold,
        like_list: res[5].data.page
      })
    })
  },
  // 跳转选择区域
  selectArea() {
    wx.navigateTo({
      url: '../area/area',
    })
  }
})