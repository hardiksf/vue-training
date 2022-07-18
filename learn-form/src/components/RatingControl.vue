<template>
  <div>
    <h2>Rating:</h2>
    <ul>
      <li :class="{ active: modelValue === 'poor' }">
        <button type="button" @click="activate('poor')">Poor</button>
      </li>
      <li :class="{ active: modelValue === 'average' }">
        <button type="button" @click="activate('average')">Average</button>
      </li>
      <li :class="{ active: modelValue === 'great' }">
        <button type="button" @click="activate('great')">Great</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    activate(option) {
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style lang="sass" scoped>
ul
  list-style: none
  display: flex
  margin: 0 0.5 rem
  padding: 0

li
  display: flex
  justify-content: center
  align-items: center
  margin: 0 1rem
  padding: 1rem

.active
  button
    background-color: purple
    color: white
</style>
