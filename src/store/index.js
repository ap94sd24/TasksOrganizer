import Vuex from 'vuex';
import Vue from 'vue';
import tasks from './modules/tasks';

// load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    tasks,
  },
});
