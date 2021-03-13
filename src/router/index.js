import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../pages/Main.vue';
import store from '../store'

Vue.use(VueRouter);

const routes = [
  {
    path: '/red',
    name: 'red',
    component: Main,
    meta: {
      route: '/red',
    }
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: Main,
    meta: {
      route: '/yellow',
    }
  },
  {
    path: '/green',
    name: 'green',
    component: Main,
    meta: {
      route: '/green',
    }
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.name) next({ name: 'red' })
  else next();
})

router.afterEach((to, from) => {
  if (!from.name) store.commit('setStartPosition', to.name);
})


export default router;
