<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="user-name">Your Name
        <input id="user-name" name="user-name" type="text" v-model="userName"/>
      </label>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)
        <input id="age" name="age" type="number" v-model="userAge" />
      </label>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?
        <select id="referrer" name="referrer" v-model="userReferrer">
          <option value="google">Google</option>
          <option value="wom">Word of mouth</option>
          <option value="newspaper">Newspaper</option>
        </select>
      </label>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <label for="interest-news">News
          <input id="interest-news"
          name="interest" type="checkbox" value="news" v-model="userInterest"/>
        </label>
      </div>
      <div>
        <label for="interest-tutorials">Tutorials
          <input id="interest-tutorials"
          name="interest" type="checkbox" value="tutorials" v-model="userInterest"/>
        </label>
      </div>
      <div>
        <label for="interest-nothing">Nothing
          <input id="interest-nothing"
          name="interest" type="checkbox" value="nothing" v-model="userInterest"/>
        </label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <label for="how-video">Video Courses
          <input id="how-video" name="how" type="radio" value="video" v-model="learn"/>
        </label>
      </div>
      <div>
        <label for="how-blogs">Blogs
          <input id="how-blogs" name="how" type="radio" value="blogs" v-model="learn" />
        </label>
      </div>
      <div>
        <label for="how-other">Other
          <input id="how-other" name="how" type="radio" value="other" v-model="learn"/>
        </label>
      </div>
    </div>
     <div class="form-control">
      <h2>Accept Terms?</h2>
      <div>
        <label for="terms">Select checkbox to accept terms
          <input id="terms"
          name="terms" type="checkbox" value="terms" v-model="agreedWithTerms"/>
        </label>
      </div>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      userAge: null, // vue automatically converts this to #  because type="number in html above
      userReferrer: "wom",
      userInterest: [],
      learn: "",
      agreedWithTerms: false,
    };
  },
  methods: {
    submitForm() {
      console.log(`userName: `, this.userName);
      this.userName = "";
      console.log(`userAge: `, this.userAge);
      this.userAge = null;
      console.log(`userReferrer: `, this.userReferrer);
      this.userReferrer = "wom";
      console.log(`Multiple checkboxes: `, this.userInterest);
      console.log(`Radio button: `, this.learn);
      this.userInterest = [];
      this.learn = "";
      console.log(`Single checkbox`, this.agreedWithTerms);
      this.agreedWithTerms = false;
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1.3rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

</style>
