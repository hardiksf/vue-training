<template>
  <ul>
    <ResourceItem
      v-for="storedResource in storedResources"
      :key="storedResource.id"
      :title="storedResource.title"
      :description="storedResource.description"
      :link="storedResource.link"
    />
  </ul>

</template>

<script>
import ResourceItem from "./components/learning-resources/ResourceItem.vue";

export default {
  name: "App",
  components: {
    ResourceItem,
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
  margin-top: 60px;
}
</style>
