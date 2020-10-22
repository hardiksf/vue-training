<template>
  <div class="activity">
    <h4>Select # of people from the input box to generate an activity.</h4>
    <b-container class=" m-3 p-3">
      <b-row class="header">
        <b-col class="border p-3 activity-type-header">Type</b-col>
        <b-col class="border p-3">Activity</b-col>
      </b-row>
      <b-row>
        <b-col class="border p-3 activity-type">{{ type }}</b-col>
        <b-col class="border p-3">{{ activity }}</b-col>
      </b-row>
    </b-container>
    <input v-model="numberOfPeople" type="number" />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      activity: null,
      numberOfPeople: 1,
      type: null,
    };
  },

  watch: {
    numberOfPeople(numberOfPeople) {
      axios
        .get(
          `http://www.boredapi.com/api/activity?participants=${numberOfPeople}`,
        )
        .then((response) => {
          // "activity": "Bake a pie with some friends", "type": "cooking", "participants": 3,
          // "price": 0.3, "link": "", "key": "3141592", "accessibility": 0.3 }
          const { data } = response;
          this.activity = data.activity;
          this.type = data.type;
        });
    },
  },
};
</script>

<style lang="sass">
.activity
  margin: 10vw 20vw 100vw
.header
  font-weight: 600
.activity-type
  text-transform: capitalize
</style>
