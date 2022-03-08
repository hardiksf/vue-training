<template>
  <div class="click-counter">
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: "ClickCounter",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="sass" scoped>
.click-counter
  margin: 20vw 0
</style>
