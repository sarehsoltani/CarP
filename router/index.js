import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import header1 from '@/components/header'
import about from '@/components/about'
import contact from '@/components/contact'
import Rules from '@/components/Rules'
import Complaint from '@/components/Complaint'
import vueScrollTo from 'vue-scroll-to'

Vue.use(Router);
Vue.use(vueScrollTo);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Complaint',
      name: 'Complaint',
      component: Complaint
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/Rules',
      name: 'Rules',
      component: Rules
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
