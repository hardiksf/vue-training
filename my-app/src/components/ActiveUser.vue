<template>
  <div>
    <span>{{ name }}</span>:
    <span>{{ age }}</span> years old
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
