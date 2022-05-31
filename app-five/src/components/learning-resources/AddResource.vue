<template>
  <div>
    <BaseCard>
      <form>
        <div class="form-control">
          <label for="title">Title
            <input id="title" name="title" type="text"/>
          </label>
        </div>
        <div class="form-control">
          <label for="description">Description
            <textarea id="description" name="description" rows="3"/>
          </label>
        </div>
        <div class="form-control">
          <label for="lik">Link
            <input id="link" name="link" type="url"/>
          </label>
        </div>
        <BaseButton>Add Resource</BaseButton>
      </form>
    </BaseCard>
  </div>
</template>

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
