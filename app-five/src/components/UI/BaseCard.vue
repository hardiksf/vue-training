<template>
<div>
  <slot></slot>
</div>

</template>

<style lang="sass" scoped>
div
  border-radius: 12px
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 0 2px 8px grey
  padding: 1rem
  margin: 3rem auto
  max-width: 50vw
</style>
