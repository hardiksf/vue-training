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
  background-color: indigo
  color: white
  border: none
  margin: 2vw
  padding: 1vw 2vw

button:hover, button:active
  background-color: #270041

.flat
  background-color: transparent //light purple
  color: indigo

.flat:hover, .flat:active
  background-color: #edd2ff

</style>
