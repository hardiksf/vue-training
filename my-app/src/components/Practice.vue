<template>
  <div>
    <div>
      <h2>To do list</h2>
      <input type="text" v-model="enteredTask" />
      <button @click="addTask">Add task</button>
      <ul v-if="isListDisplayed">
        <li v-for="task in tasks" :key="task" @click="removeTask(key)">
          <b-badge variant="success">{{ task }}</b-badge>
        </li>
      </ul>
      <div v-if="isCaptionButtonDisplayed">
        <button @click="toggleList">{{ toggleCaption }}</button>
      </div>
    </div>
    <div>
      <input type="text" @input="updateName($event, 'Brown')" />
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
      isListDisplayed: true,
      enteredTask: "",
      tasks: [],
      name: "",
      counter: 0,
      googleLink: "https://www.google.com/",
      info: "Enter info here",
      titleText: "This is title",
    };
  },
  computed: {
    isCaptionButtonDisplayed() {
      return this.tasks.length > 0;
    },
    toggleCaption() {
      return this.isListDisplayed ? `Hide List` : `Display List`;
    },
  },
  methods: {
    toggleList() {
      this.isListDisplayed = !this.isListDisplayed;
    },
    removeTask(key) {
      this.tasks.splice(key, 1);
    },
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = "";
    },
    updateName(event, lastName) {
      // event is JS native event object
      this.name = `${event.target.value} ${lastName}`;
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
<style lang="sass" scoped>
div
  margin-top: 1rem
</style>
