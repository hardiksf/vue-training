<template>
  <div>
    <dialog open>
      <header>
        <slot name="header">
          <h2> {{ title }} </h2>
        </slot>
      </header>
      <section>
        <slot name="description">
        </slot>
      </section>
      <menu>
        <slot name="actions">
        </slot>
      </menu>
    </dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="sass" scoped>
div
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100vh

dialog
  position: fixed
  top: 20vh
  left: 10%
  width: 80%
  border-radius: 12px
  border: none
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.75)
  margin: 0
  padding: 0
  overflow: hidden

header
  background-color: indigo
  color: white
  width: 100%
  padding: 1rem
  h2
    margin: 0
section
  padding: 1rem
</style>
