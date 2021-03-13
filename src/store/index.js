import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    order: [
      { name: 'red', route: '/red', startTime: 10  },
      { name: 'yellow', route: '/yellow', startTime: 3 },
      { name: 'green', route: '/green', startTime: 15 },
      { name: 'yellow', route: '/yellow', startTime: 3 },
    ],
    startTime: 0,
    currentIndex: 0,
    currentTime: 0,
  },
  mutations: {

    setStartPosition (state, name) {
      console.log('setStartPosition');
      if (localStorage.color) {
        state.currentIndex = state.order.findIndex(item => item.name === localStorage.color);
        state.startTime = +localStorage.time;
        router.push(state.order[state.currentIndex].route);
        localStorage.clear();
      } else {
        state.currentIndex = state.order.findIndex(item => item.name === name);
        state.startTime = state.order[state.currentIndex].startTime;
      }
    },

    changeLight (state) {
      if (state.currentIndex === (state.order.length - 1)) {
        state.currentIndex = 0;
      } else { 
        state.currentIndex += 1; 
      }
      state.startTime = state.order[state.currentIndex].startTime;
      router.push(state.order[state.currentIndex].route);
    },

    updateCurrentTime (state, time) {
      state.currentTime = time;
    },

    setSate (state) {
      localStorage.setItem('color', state.order[state.currentIndex].name);
      localStorage.setItem('time', state.currentTime);
    }

  },

  getters: {
    currentName: state => {
      return state.order[state.currentIndex].name;
    },

    startTime: state => {
      return state.startTime;
    },

    currentTime: state => {
      return state.currentTime;
    },
  },

  actions: {
  },
  modules: {
  },
});
