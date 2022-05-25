<template>
  <div>
    <MyHeader title="My Header" />
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
  data() {
    return {
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "Learn Vue",
          link: "https//vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn Google",
          link: "https//google.com ",
        },
      ],
    };
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
