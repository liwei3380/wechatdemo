// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import init from './js/init'

import './js/hammer'
Vue.config.productionTip = false

init.setcb(function(data){
	if (data == 'ShareAppMessage Success') {
		Toast({
			message:'分享成功',
			duration: 5000
		});
	} else if (data == 'ShareAppMessage cancel') {
		Toast('分享取消');
	}
});
init.init();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

