<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Data is loading...</p>
      <p v-else-if="!isLoading && errorMessage"> {{ errorMessage }} </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">There is no data to display. Please submit experience first.</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data () {
    return {
      results: [],
      isLoading: false,
      errorMessage: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      fetch("https://vue-http-demo-5562c-default-rtdb.firebaseio.com/surveys.json")
      // fetch("https://vue-http-demo-5562c-default-rtdb.firebaseio.com/surveys")
      .then( (response) => { 
        if (response.ok) {
           return  response.json();
        }
       })
       .then( (data) => {
        this.isLoading = false;
        const results = [];
        for (const id in data) {
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating,
          });
        }
        this.results = results;
       })
       .catch((error) => {
        this.isLoading = false;
        console.log(error);
        this.errorMessage = `Cath all error. Specific error: ${error}`
       });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>