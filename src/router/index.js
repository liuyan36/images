import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home/Home.vue'
import Category from '../view/Category/Category.vue'
import Profile from '../view/Profile/profile.vue'
import abc from '../view/abc/abc.vue'

Vue.use(VueRouter)

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/abc',
      name: 'abc',
      component: abc
    }
  ]
})
