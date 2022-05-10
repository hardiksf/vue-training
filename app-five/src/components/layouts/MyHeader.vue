<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="sass" scoped>
header
  background: maroon
  color: white
  height: 15vw
  display: flex
  justify-content: center
  align-items: center
</style>
