<template>
  <div class="hello space-y-4">
    <form action="text">
      <button @click.prevent="doSomething" class="bg-black text-white font-bold p-2">
        Vue's preventDefault: .prevent</button>
    </form>
    <form action="text">
      <button @click="onSubmit" class="bg-black text-white p-2 font-bold rounded">
        native preventDefault</button>
    </form>
    <input type="text" class="border-2" @input="setTextFromInput">
    <p>textFromInput: {{ textFromInput }}</p>
    <div class="flex flex-col mx-64">
      <button @click="increaseWithArgument(5)"
        class="bg-black text-white font-bold p-2 m-1 rounded">
        Increase with arguments</button>
      <button @click="increase" class="bg-black text-white font-bold p-2 m-1 rounded">
        Increase</button>
      <button v-on:click="decrease" class="bg-black text-white font-bold p-2 m-1 rounded">
        Decrease</button>
      <button class="bg-black text-white font-bold p-2 m-1 rounded">
        counter: {{ counter }}</button>

    </div>
    <input v-bind:value="inputText" class="border-2">
    <p class="h-56 flex justify-center">
    <img v-bind:src="imageAddress" alt="An image"/></p>
    <p>Another Random Number Plus 5: {{ randomNumberPlus5() }}</p>
    <p v-html="htmlContnet"></p>
    A Random Number: {{ randomNumber() }}
    <p><a v-bind:href="googleLink">Google Link</a></p>
    {{ stringData }}
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank" rel="noopener">unit-jest</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      stringData: 'This is from data',
      googleLink: 'https://www.google.com/',
      htmlContnet: '<li>Html content</li>',
      imageAddress: 'https://cdn.pixabay.com/photo/2020/08/09/15/44/tower-5475850_1280.jpg',
      inputText: 'Input Text',
      counter: 0,
      textFromInput: '',
    };
  },
  methods: {
    doSomething() {
    },
    onSubmit(event) {
      event.preventDefault();
    },
    setTextFromInput(event) {
      this.textFromInput = event.target.value;
    },
    randomNumber() {
      return Math.ceil(Math.random() * 10);
    },
    randomNumberPlus5() {
      return this.randomNumber() + 5;
    },
    increase() {
      this.counter += 1;
    },
    increaseWithArgument(number) {
      this.counter += number;
    },
    decrease() {
      this.counter -= 1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
