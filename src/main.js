import Vue from 'vue'
import App from './App.vue'
import BarMenu from './BarMenu'
import DropDown from './DropDownMenu'
import ImageCredit from './ImageCredit'
import Banner from './Banner'

Vue.component('bar-menu', BarMenu);
Vue.component('drop-down-menu', DropDown);
Vue.component('image-credit', ImageCredit);
Vue.component('banner', Banner);

new Vue({
  el: '#app',
  render: h => h(App)
})
