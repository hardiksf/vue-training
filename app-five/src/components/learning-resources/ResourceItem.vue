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
    <BaseButton mode="basic">Delete</BaseButton>
   </BaseCard>
  </li>
</template>

<script>
export default {
  name: "ResourceItem",
  props: {
    title: String,
    description: String,
    link: String,
  },
};
</script>

<style lang="sass" scoped>
button
  margin: 2vw
  padding: 1vw 2vw
</style>
