<template>
  <ul>
    <ResourceItem
      v-for="storedResource in resources"
      :key="storedResource.id"
      :title="storedResource.title"
      :description="storedResource.description"
      :link="storedResource.link"
      :id="storedResource.id"
    />
  </ul>
</template>

<script>
import ResourceItem from "./ResourceItem.vue";

export default {
  name: "StoredResources",
  inject: ["resources"],
  components: {
    ResourceItem,
  },
};
</script>

<style lang="sass" scoped>
ul
  list-style-type: none
  padding: 0
</style>
