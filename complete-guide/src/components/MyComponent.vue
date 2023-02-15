<template>
  <section id="assignment">
    <h2>Event Practice</h2>
    <!-- 1) Show an alert (any text of your choice) when the button is pressed -->
    <button @click="showAlert">Show Alert</button>
    <hr />
    <!-- 2) Register the user input on "keydown" and output it in the paragraph (hint: event.target.value helps) -->
    <input type="text" @keydown="displayUserInputOnKeyDown" />
    <p>{{ keyDownOutPut }}</p>
    <hr />
    <!-- 3) Repeat 2) but only output the entered value if the ENTER key was pressed -->
    <input type="text" @keyup.enter="displayUserInputOnEnter" />
    <p>{{ enterOutPut }}</p>
  </section>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      keyDownOutPut: '',
      enterOutPut: ``,
    };
  },
  methods: {
    displayUserInputOnEnter(event) {
      this.enterOutPut = event.target.value;
    },
    displayUserInputOnKeyDown(event) {
      this.keyDownOutPut = event.target.value;
    },
    showAlert() {
      return window.alert('alert text');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: #1b995e;
  color: white;
  text-align: center;
}

#assignment {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

#assignment h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #1b995e;
  margin: 0 0 1rem 0;
}

#assignment p {
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #8ddba4;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
}

#assignment input {
  font: inherit;
  border: 1px solid #ccc;
}

#assignment input:focus {
  outline: none;
  border-color: #1b995e;
  background-color: #d7fdeb;
}

#assignment button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#assignment button:hover,
#assignment button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
