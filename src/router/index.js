import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../pages/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/red',
    name: 'red-light',
    component: Main,
    props: { activeLight: 'red', startTime: 10 },
  },
  {
    path: '/yellow',
    name: 'yellow-light',
    component: Main,
    props: { activeLight: 'yellow', startTime: 3 },
  },
  {
    path: '/green',
    name: 'green-light',
    component: Main,
    props: { activeLight: 'green', startTime: 15 },
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
