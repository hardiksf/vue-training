<template>
  <li>
    <header>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </header>
    <nav>
      <a :href="link">Link to {{ title }} </a>
    </nav>
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
