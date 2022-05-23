<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type", "mode"],
};
</script>

<style lang="sass" scoped>
.basic
  background-color: purple
  color: white
  border: none
</style>
