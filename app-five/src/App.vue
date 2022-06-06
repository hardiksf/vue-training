<template>
  <div>
    <MyHeader title="Learning Resources" />
    <TheResources />
  </div>
</template>

<script>
import MyHeader from "./components/layouts/MyHeader.vue";
import TheResources from "./components/learning-resources/TheResources.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    TheResources,
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
}
</style>
