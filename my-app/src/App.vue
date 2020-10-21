<template>
  <div id="app">
    <UsingAxios />
    <Notes appTitle="Notes" />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Notes from './components/Notes.vue';
import UsingAxios from './components/UsingAxios.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Notes,
    UsingAxios,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
[alt='Vue logo'] {
  margin-top: 20vw;
}
</style>
