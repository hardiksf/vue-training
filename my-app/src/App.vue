<template>
  <div id="app">
    <h2>Contact Book</h2>
    <!-- <ContactBook
      name="John Smith"
      phoneNumber="123-456-7890"
      emailAddress="john@test.com"
      :isFavorite="true"
    ></ContactBook> -->
    <ContactBook
      v-for="friend in friends"
      :id="friend.id"
      :key="friend.id"
      :name="friend.name"
      :phoneNumber="friend.phone"
      :emailAddress="friend.email"
      :isFavorite="friend.isFavorite"
      @toggle-favorite="toggleFavoriteStatus"
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
  data() {
    return {
      friends: [
        {
          id: "john",
          name: "John Smith",
          phone: "123-456-7890",
          email: "john@test.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Brown",
          phone: "123-123-1234",
          email: "julie@test.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find((friend) => friend.id === friendId);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
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
