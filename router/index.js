import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Download from '@/components/Download'
import test from '@/components/test'
import vueScrollTo from 'vue-scroll-to'

Vue.use(Router);
Vue.use(vueScrollTo);

export default new Router({
  routes: [
       // {
       //      path: "/",
       //      redirect: {
       //          name: "Main"
       //      }
       //  },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/Download',
      name: 'Download',
      component: Download
    }
  ]
})
