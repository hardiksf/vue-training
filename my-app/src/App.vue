<template>
  <div id="app">
    <h2>Contact Book</h2>
    <ContactBook
      name="John Smith"
      phoneNumber="123-456-7890"
      emailAddress="john@test.com"
      :isFavorite="true"
    ></ContactBook>
    <ContactBook
      name="Julie Brown"
      phoneNumber="321-456-7890"
      emailAddress="julie@test.com"
    ></ContactBook>
    <Practice/>
    <CoffeePlan/>
    <ClickCounter />
    <Activity />
    <UsingAxios />
    <Notes appTitle="Notes" />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Activity from "./components/Activity.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Notes from "./components/Notes.vue";
import UsingAxios from "./components/UsingAxios.vue";
import ClickCounter from "./components/ClickCounter.vue";
import CoffeePlan from "./components/CoffeePlan.vue";
import Practice from "./components/Practice.vue";
import ContactBook from "./components/ContactBook.vue";

export default {
  name: "App",
  components: {
    ContactBook,
    Activity,
    HelloWorld,
    Notes,
    UsingAxios,
    ClickCounter,
    CoffeePlan,
    Practice,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
[alt='Vue logo'] {
  margin-top: 20vw;
}
</style>
