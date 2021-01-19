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
    // Property-Style Access
    completedToDos: (state) => state.toDos.filter((toDo) => toDo.done),
    inCompletedToDo: (state) => state.toDos.filter((toDo) => toDo.done === false),
    completedToDosLength: (state) => state.toDos.filter((toDo) => toDo.done).length,

    // Method-Style Access. Passing arguments to getters by returning a function
    // Getters accessed via methods will run each time you call them, and the result is not cached.
    getToDosById: (state) => (id) => state.toDos.find((toDo) => toDo.id === id),
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
