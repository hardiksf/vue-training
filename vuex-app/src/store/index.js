import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    toDos: [
      { id: 1, text: 'one', done: true },
      { id: 2, text: 'two', done: false },
    ],
  },
  getters: {
    completedToDos: (state) => state.toDos.filter((toDo) => toDo.done),
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
  actions: {
  },
  modules: {
  },

});
