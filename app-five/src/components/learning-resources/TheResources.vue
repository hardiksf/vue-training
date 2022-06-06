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
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
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
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: title.split(" ").join("-").toLowerCase(),
        title,
        description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = "StoredResources";
    },
    removeResource(resourceId) {
      const resourceIndex = this.storedResources.findIndex(
        (resource) => resource.if === resourceId,
      );
      this.storedResources.splice(resourceIndex, 1);
    },
  },
};
</script>
