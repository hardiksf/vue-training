<template>
  <li>
    <BaseCard>
    <header>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </header>
    <nav>
      <a :href="link">Link to {{ title }} </a>
    </nav>
    <BaseButton mode="flat" @click="deleteResource(id)">Delete</BaseButton>
   </BaseCard>
  </li>
</template>

<script>
export default {
  name: "ResourceItem",
  props: {
    id: String,
    title: String,
    description: String,
    link: String,
  },
  inject: ["deleteResource"],
};
</script>
