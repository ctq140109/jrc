const app = getApp();
import {
  classify_list_url,
  classify_goods_url
} from '../../service/api.js';
const http = app.globalData.http;
Page({
  data: {
    classify_list: [],
    class_two_list: [],
    productList: [],
    navActive: 0,

    area_id: 4,
    classify_id: '',
    classify_two_id: '',
    sales: 0,
    price: 0,
    name: '',
    pageNo: '1',
    pageSize: 10,
    totalRow: 0,
    state: 0,
    list: []
  },
  //获取标签栏
  getPidCate: function() {
    http.request({
      url: classify_list_url,
    }).then(res => {
      console.log(res);
      this.setData({
        classify_list: res.data.classify_list
      })
      this.selectClass({
        detail: {
          key: res.data.classify_list[0].id
        }
      });
    })
  },
  //点击主分类
  selectClass(e) {
    console.log('classify_id=', e.detail.key)
    this.setData({
      classify_id: e.detail.key
    })
    for (let i of this.data.classify_list) {
      if (i.id == e.detail.key) {
        this.setData({
          class_two_list: i.classify_two_list
        })
      }
    }
    if (this.data.class_two_list.length > 0) {
      this.selectSubClass({
        currentTarget: {
          dataset: {
            idx: this.data.class_two_list[0].id,
            index: 0
          }
        }
      });
    }
  },
  //点击子分类
  selectSubClass: function(e) {
    var id = e.currentTarget.dataset.idx;
    var index = e.currentTarget.dataset.index;
    console.log('classify_two_id=', id);
    this.setData({
      toView: 'd' + index,
      navActive: index,
      classify_two_id: id,
      list:[]
    });
    this.getCargo();
  },
  //获取分类商品
  getCargo() {
    var vm = this;
    http.request({
      url: classify_goods_url,
      data: {
        agency_manage_id: vm.data.area_id,
        classify_id: vm.data.classify_id,
        classify_two_id: vm.data.classify_two_id,
        sales: vm.data.sales,
        price: vm.data.price,
        name: vm.data.name,
        pageNo: vm.data.pageNo,
        pageSize: vm.data.pageSize
      }
    }).then(res => {
      console.log(res);
      this.setData({
        list: vm.data.list.concat(res.data.page.list),
        totalRow: res.data.page.totalRow
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getPidCate();
  }
})