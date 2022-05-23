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
import ResourceItem from "./ResourceItem.vue";

export default {
  name: "StoredResources",
  props: {
    storedResources: Object,
  },
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
