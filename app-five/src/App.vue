<template>
  <div>
    <MyHeader title="My Header" />
    <StoredResources :storedResources="storedResources" />
  </div>
</template>

<script>
import StoredResources from "./components/learning-resources/StoredResources.vue";
import MyHeader from "./components/layouts/MyHeader.vue";

export default {
  name: "App",
  components: {
    StoredResources,
    MyHeader,
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
