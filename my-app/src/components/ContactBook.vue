<template>
  <div>
    <div class="basic-label each-contact">
      <h4>{{ name }} {{ displayFavorite }}</h4>
      <button @click="toggleShowHideDetail">{{ toggleShowHideButtonText }}</button>
      <button @click="toggleFavorite">{{ toggleFavoriteText }}</button>
      <ul v-if="isDetailDisplayed">
        <li>{{ phoneNumber }}</li>
        <li>{{ emailAddress }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isDetailDisplayed: false,
    };
  },
  computed: {
    displayFavorite() {
      return this.isFavorite ? ` (Favorite)` : ``;
    },
    toggleFavoriteText() {
      return this.isFavorite ? `UnFavorite` : `Favorite`;
    },
    toggleShowHideButtonText() {
      return this.isFavorite ? `Hide Detail` : `Show detail`;
    },
  },
  methods: {
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    toggleShowHideDetail() {
      this.isDetailDisplayed = !this.isDetailDisplayed;
    },
  },
};
</script>

<style lang="sass" scoped>
/*https://coolors.co/palette/ffb5a7-fcd5ce-f8edeb-f9dcc4-fec89a */
$melon: #ffb5a7ff
$pale-pink: #fcd5ceff
$sea-shell: #f8edebff
$peach-puff: #f9dcc4ff
$peach-crayola: #fec89aff

button
  background-color: $peach-puff
.basic-label
  margin: 0 auto
  margin-bottom: 2vw
  width: 70vw
  padding: 1vw
.medium-padding
  padding: 3vw
h2
  background-color: $pale-pink
.each-contact
  background-color: $sea-shell
ul
  list-style-type: none
  padding-left: 0
.basic-label, button
  border: 1px solid $melon
</style>
