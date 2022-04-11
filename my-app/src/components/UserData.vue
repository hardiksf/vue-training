<template>
  <form @submit.prevent="updateUserData">
    <label for="name">Name</label>
    <input type="text" name="name" v-model="enteredName">
    <label for="age">Age</label>
    <input type="Number" name="age" v-model="enteredAge">
    <button>Update Information</button>
  </form>
</template>

<script>
export default {
  emits: ["update-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    updateUserData() {
      this.$emit("update-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>
