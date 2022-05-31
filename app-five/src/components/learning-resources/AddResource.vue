<template>
  <div>
    <BaseCard>
      <form @submit.prevent="submitData ">
        <div class="form-control">
          <label for="title">Title
            <input id="title" name="title" type="text" ref="enteredTitle"/>
          </label>
        </div>
        <div class="form-control">
          <label for="description">Description
            <textarea id="description" name="description" rows="3" ref="enteredDescription"/>
          </label>
        </div>
        <div class="form-control">
          <label for="lik">Link
            <input id="link" name="link" type="url" ref="enteredUrl"/>
          </label>
        </div>
        <BaseButton>Add Resource</BaseButton>
      </form>
    </BaseCard>
  </div>
</template>

<script>
export default {
  inject: ["addResource"],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.enteredTitle.value;
      const enteredDescription = this.$refs.enteredDescription.value;
      const enteredUrl = this.$refs.enteredUrl.value;

      this.addResource(enteredTitle, enteredDescription, enteredUrl);
    },
  },
};
</script>

<style lang="sass" scoped>
label
  display: block
  font-weight: bold
  margin-bottom: 0.5rem
input, textarea
  display: block
  width: 100%
  border: 1px solid #ccc
.form-control
  margin: 1rem 0
</style>
