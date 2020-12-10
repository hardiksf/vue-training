<template>
  <div>
    <div v-for='plan in plans' :key='plan' class='coffee-plan'>
      <span>
        {{ plan }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoffeePlan',
  props: {
    name: {
      type: String,
      // required: true,
    },
  },
  data() {
    return {
      plans: ['One Shot', 'Two Shots'],
    };
  },
};
</script>
