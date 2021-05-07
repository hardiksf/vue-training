<template>
  <div class="hello space-y-4">
    <div class="mb-4">
      <input type="text"
        v-model="enteredText"
        class="p-2 border"
      >
      <button
      @click="secondAddToList"
      class="p-2 bg-yellow-400 font-extrabold text-3xl"
      >+</button>
      <ul v-if="isToggleOn"
      class="flex flex-col">
        <li v-for="item in secondList" :key="item">{{ item }}</li>
      </ul>
      <br>
      <button
      @click="toggleShowHide"
        class="mt-4 p-2 bg-yellow-400 font-bold"
      >{{ buttonText }}</button>
    </div>
    <input
      type="text"
      v-model="enteredValue"
      class="p-2 border"
    >
    <button
      @click="addtoList"
      class="p-2 bg-yellow-400 font-extrabold">
      Add to list
    </button>
    <br>
    <p v-if="myList.length === 0">Add items to list</p>
    <ul v-else class="flex flex-col">
      <li v-for="(item, index) in myList" :key="index"
      >
        <button
        @click="removeItem(index)"
        class="p-2 m-1 bg-green-500"
        >{{ item }}</button>
      </li>
</ul>

    <p><button @click="addNumber(5)" class="bg-gray-700 p-2 text-white font-bold">Add 5</button></p>
    <p><button @click="addNumber(1)" class="p-2 bg-red-200" >Add 1</button></p>
    displayResult: {{ displayResult }} <br>

    Data binding and event handling (v-bind & event): <input type="text"
    class="border" v-bind:value="textFromInput2" @keyup="displayText">
    <p>v-modal: <input type="text" class="border" v-model="textFromInput2"></p>
    <p>show text from input2 {{ textFromInput2 }}</p>
    <button @click="resetInput" class="font-bold bg-yellow-400 p-2">Reset Input</button>
    <section id="assignment">
      <h2>Event Practice</h2>
      <!-- 1) Show an alert (any text of your choice) when the button is pressed -->
      <button @click="showAlert" class="text-gray-50 bg-gray-700 p-1 m-1">Show Alert</button>
      <br />
      <!-- 2) Register the user input on "keydown" and output it in the paragraph
      (hint: event.target.value helps) -->
      <input @keydown="displayUserInput" type="text" class="border">
      <p>OUTPUT: {{ userInput }}</p>
      <br />
      <!-- 3) Repeat 2) but only output the entered value if the ENTER key was pressed -->
      <input @keyup.enter="displayUserInput2" type="text" class="border-4"/>
      <p>OUTPUT: {{ userInput2 }} </p>
    </section>
    <p v-once>starting counter: {{ counter }}</p>
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
      <button @click="increase"
        class="increment-text-button
        bg-black text-white font-bold p-2 m-1 rounded">
        Increase</button>
      <button v-on:click="decrease" class="bg-black text-white font-bold p-2 m-1 rounded">
        Decrease</button>
      <button
        class="counter-text
        bg-black text-white font-bold p-2 m-1 rounded">
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
      userInput: '',
      userInput2: '',
      textFromInput2: '',
      number: 0,
      myList: [],
      dislplayList: 'Empty',
      enteredValue: '',
      enteredText: '',
      secondList: [],
      isToggleOn: true,
    };
  },
  watch: {
    displayResult() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 2000);
    },
  },
  computed: {
    buttonText() {
      return this.isToggleOn ? 'Hide list' : 'Show list';
    },
    displayResult() {
      if (this.number > 10) {
        return 'Too much';
      }
      if (this.number < 10) {
        return 'Add more';
      }
      return this.number;
    },
  },
  methods: {
    toggleShowHide() {
      this.isToggleOn = !this.isToggleOn;
    },
    secondAddToList() {
      this.secondList.push(this.enteredText);
      this.enteredText = '';
    },
    removeItem(index) {
      this.myList.splice(index, 1);
    },
    addtoList() {
      this.myList.push(this.enteredValue);
      this.enteredValue = '';
    },
    addNumber(num) {
      this.number += num;
    },
    resetInput() {
      this.textFromInput2 = '';
    },
    displayText(event) {
      this.textFromInput2 = event.target.value;
    },
    displayUserInput2(event) {
      this.userInput2 = event.target.value;
    },
    displayUserInput(event) {
      this.userInput = event.target.value;
    },
    showAlert() {
      // eslint-disable-next-line
      alert('text in alert');
    },
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
