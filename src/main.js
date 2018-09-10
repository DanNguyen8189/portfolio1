import Vue from 'vue'
import VueRouter from 'vue-router'

/*Vue file imports*/
import App from './App.vue'
import BarMenu from './BarMenu'
import DropDown from './DropDownMenu'
import ImageCredit from './ImageCredit'
import Banner from './Home-banner'
import Navigation from './Navigation-component.vue'

import About from './About.vue'
import Contact from './Contact-page.vue'
import Profile from './Profile-page.vue'

import Education from './Education'

/*These reusable components are referenced in html sections like: <bar-menu></bar-menu>*/
Vue.component('bar-menu', BarMenu);
Vue.component('drop-down-menu', DropDown);
Vue.component('image-credit', ImageCredit);
Vue.component('navigation-component', Navigation);

/*Allow us usage of vue router*/
Vue.use(VueRouter);

/*Routing paths*/
const routes = [
    { path: '/', component: Banner },
    { path: '/about', component: About },
    { path: '/profile', component: Profile },
    { path: '/contact', component: Contact },
    { path: '/profile/education', component: Education }
];
const router = new VueRouter({
    routes: routes,
    mode: 'history' /*To get rid of the hash in the url, we can use the router's history mode, 
                    which leverages the history.pushState API to achieve URL navigation 
                    without a page reload*/ 
});

/*Root vue instance application descends from. 
Hangs off the root element declared in html part of App.vue(<div id='app'>)*/
new Vue({
    /*div element*/
    el: '#app',
    router: router,
    render: h => h(App)
    /* render function, shorthand for
    render: function (createElement) {
        return createElement(App);
    }*/
})
