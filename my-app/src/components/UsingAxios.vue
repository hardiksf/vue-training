<template>
  <div class="using-axios">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => console.log(response));
  },
};
</script>
