<template>
<form @submit.prevent="submitData">
  <div>
    <label for="name">Name</label>
    <input type="text" name="name" v-model="enteredName">
  </div>
   <div>
    <label for="phone">Phone</label>
    <input type="tel" name="phone" v-model="enteredPhone">
  </div>
   <div>
    <label for="email">Email</label>
    <input type="email" name="email" v-model="enteredEmail">
  </div>
  <button>Add Contact</button>
</form>
</template>

<script>

export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("add-contact", this.enteredName, this.enteredPhone, this.enteredEmail);
    },
  },
};

</script>
