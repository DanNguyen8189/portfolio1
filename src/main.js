import Vue from 'vue'
import App from './App.vue'
import BarMenu from './BarMenu'
import DropDown from './DropDownMenu'
import ImageCredit from './ImageCredit'
import Banner from './Home-banner'
import Navigation from './Navigation-component.vue'

Vue.component('bar-menu', BarMenu);
Vue.component('drop-down-menu', DropDown);
Vue.component('image-credit', ImageCredit);
Vue.component('home-banner', Banner);
Vue.component('navigation-component', Navigation)

new Vue({
  el: '#app',
  render: h => h(App)
})
