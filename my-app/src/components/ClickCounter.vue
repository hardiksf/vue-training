<template>
  <div class="click-counter">
    <button @click="count++">{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'ClickCounter',
  data() {
    return {
      count: 0,
    };
  },
};
</script>
