<template>
  <div>
    <div>
      <input type="text" @input="updateName">
      <p>Name: {{ name }}</p>
    </div>
    <button @click="add(5)">Add</button>
    <div>Counter: {{ counter }}</div>
    <p>{{ getTitle() }}</p>
    <p>{{ getRandomIntInclusive(5, 6) }}</p>
    <h1>Practice</h1>
    <p>{{ info }}</p>
    <p><a v-bind:href="googleLink">Google link</a></p>
    <p><a :href="googleLink">Another Google link</a></p>
  </div>
</template>

<script>
export default {
  name: "Practice",
  data() {
    return {
      name: "",
      counter: 0,
      googleLink: "https://www.google.com/",
      info: "Enter info here",
      titleText: "This is title",
    };
  },
  methods: {
    updateName(event) {
      // JS native event object
      this.name = event.target.value;
    },
    add(number) {
      this.counter += number;
    },
    getRandomIntInclusive(min, max) {
      // The maximum is inclusive and the minimum is inclusive
      const result = Math.floor(Math.random() * (max - min + 1) + min);
      return result;
    },
    getTitle() {
      return this.titleText;
    },
  },
};
</script>
