import {
  HTTP
} from '/service/request.js';
App({
  onLaunch: function() {
  },
  globalData: {
    http: new HTTP()
  }
})