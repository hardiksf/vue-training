<template>
  <div>
    <BaseCard>
      <BaseButton @click="setSelectedTab('StoredResources')">
        Stored Resources
      </BaseButton>
      <BaseButton @click="setSelectedTab('AddResource')">
        Add Resource
      </BaseButton>
    </BaseCard>
    <component :is="selectedTab"></component>
  </div>
</template>

<script>
// import BaseButton from "../UI/BaseButton.vue";
// import BaseCard from "../UI/BaseCard.vue";
import AddResource from "./AddResource.vue";
import StoredResources from "./StoredResources.vue";

export default {
  components: {
    AddResource,
    StoredResources,
    // BaseCard,
    // BaseButton,
  },
  data() {
    return {
      selectedTab: "StoredResources",
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
