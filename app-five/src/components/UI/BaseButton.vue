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
button
  background-color: purple
  color: white
  border: none
  margin: 2vw
  padding: 1vw 2vw
.light-color
  background-color: #b298dc //light purple
  color: black
</style>
