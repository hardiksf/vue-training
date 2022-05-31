<template>
  <div>
    <BaseCard>
      <BaseButton @click="setSelectedTab('StoredResources')" :mode="storedResourcesButtonMode">
        Stored Resources
      </BaseButton>
      <BaseButton @click="setSelectedTab('AddResource')" :mode="AddResourcesButtonMode">
        Add Resource
      </BaseButton>
    </BaseCard>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
import AddResource from "./AddResource.vue";
import StoredResources from "./StoredResources.vue";

export default {
  components: {
    AddResource,
    StoredResources,
  },
  data() {
    return {
      selectedTab: "StoredResources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "Learn Vue",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn Google",
          link: "https://google.com ",
        },
      ],
    };
  },

  computed: {
    storedResourcesButtonMode() {
      return this.selectedTab === "StoredResources" ? null : "flat";
    },
    AddResourcesButtonMode() {
      return this.selectedTab === "AddResource" ? null : "flat";
    },
  },

  provide() {
    return { resources: this.storedResources };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
