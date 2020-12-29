<template>
  <div>
    <div>completedToDosFromGetters: {{ completedToDosFromGetters }}</div>
    <div>doneToDosCount: {{ doneToDosCount }}</div>
    <div>count: {{ count }}</div>
    <div>countAlias: {{ countAlias }}</div>
    <div>dataFromStatePlusFromLocal: {{ dataFromStatePlusFromLocal }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'CounterComponent',
  data() {
    return {
      localCount: 4,
    };
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },
  computed: mapState({
    count: (state) => state.count,
    countAlias: 'count',
    dataFromStatePlusFromLocal(state) {
      return state.count + this.localCount;
    },
    // Compute derived state based on store state
    doneToDosCount() {
      return this.$store.state.toDos.filter((toDo) => toDo.done).length;
    },
    // Accessing getters
    completedToDosFromGetters() {
      return this.$store.getters.completedToDos.length;
    },
  }),
  // We can also pass a string array to mapState when the name of a mapped computed property is
  // the same as a state sub tree name like below
  // computed: mapState([
  //   // map this.count to store.state.count
  //   'count',
  // ]),
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
    completedToDos() {
      return this.$getters.completedToDos;
    },
  },
};
</script>
