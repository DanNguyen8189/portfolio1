import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BarMenu from './BarMenu'
import DropDown from './DropDownMenu'
import ImageCredit from './ImageCredit'
import Banner from './Home-banner'
import Navigation from './Navigation-component.vue'

import About from './About.vue'
import Contact from './Contact-page.vue'

Vue.component('bar-menu', BarMenu);
Vue.component('drop-down-menu', DropDown);
Vue.component('image-credit', ImageCredit);
Vue.component('navigation-component', Navigation);

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Banner },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
];
const router = new VueRouter({
    routes: routes,
    mode: 'history'
});
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})
