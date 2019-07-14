// const NAMES = ['Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane', 'Aaron'];
// const app = getApp();
// import {
//   index_url
// } from '../../service/api.js';
// const http = app.globalData.http;
// Page({
//   data: {
//     agency_list: [],
//     alphabet: []
//   },
//   onLoad() {
//     this.getCity();
//   },
//   onChange(e) {
//     console.log('onChange', e.detail)
//   },
//   getCity() {
//     http.request({
//       url: index_url,
//       method: 'POST',
//       data: {}
//     }).then(res => {
//       this.setData({
//         agency_list: res.data.agency_list
//       })
//       let arr = [];
//       for (let i of res.data.agency_list){
//         arr.push(i.name)
//       }
//       console.log(arr);
//       this.filterCity(arr);
//     })
//   },
//   filterCity(list) {
//     const alphabet = []
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach((initial) => {
//       const cells = NAMES.filter((name) => name.charAt(0) === initial)
//       alphabet.push({
//         initial,
//         cells
//       })
//     })
//     this.setData({
//       alphabet,
//     })
//   },
//   selectArea(e) {
//     console.log(e.currentTarget.dataset.name);
//   }
// })
const app = getApp();
var wxaSortPicker = require('../../components/common/wxaSortPicker/wxaSortPicker.js');
import {
  index_url
} from '../../service/api.js';
const http = app.globalData.http;
Page({
  data: {
    agency_list: []
  },
  onLoad: function() {
    this.getCity();
  },
  //选中返回值
  wxaSortPickerItemTap: function(e) {
    console.log(e.target.dataset.text);
    console.log(e.target.dataset.value); //字符串数组无此字段
  },
  getCity() {
    var that = this;
    http.request({
      url: index_url,
      method: 'POST',
      data: {}
    }).then(res => {
      this.setData({
        agency_list: res.data.agency_list
      })
      for (let i of res.data.agency_list){
        i.value = i.id;
      }
      wxaSortPicker.init(res.data.agency_list, that);
    })
  },
})
// Page({
//   data: {
//     agency_list: [],
//     cities: []
//   },
//   onChange(event) {
//     console.log(event.detail, 'click right menu callback data')
//   },
//   onLoad() {
//     this.getCity();
//   },
//   onReady() {

//   },
//   getCity() {
//     http.request({
//       url: index_url,
//       method: 'POST',
//       data: {}
//     }).then(res => {
//       this.setData({
//         agency_list: res.data.agency_list
//       })
//       res.data.agency_list[0].pinyin = 'A';
//       res.data.agency_list[1].pinyin = 'P';
//       res.data.agency_list[2].pinyin = 'M';
//       res.data.agency_list[3].pinyin = 'Z';
//       this.filterCity(res.data.agency_list);
//     })
//   },
//   filterCity(cities) {
//     let storeCity = new Array(26);
//     const words = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//     words.forEach((item, index) => {
//       storeCity[index] = {
//         key: item,
//         list: []
//       }
//     })
//     cities.forEach((item) => {
//       let firstName = item.pinyin.substring(0, 1);
//       let index = words.indexOf(firstName);
//       storeCity[index].list.push({
//         name: item.name,
//         key: firstName
//       });
//     })
//     this.data.cities = storeCity;
//     this.setData({
//       cities: this.data.cities
//     })
//   }
// });