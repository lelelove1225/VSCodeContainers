<template>
  <section>
    天気
    <div class="weather">
      <img :src="`${weatherValue.icon}`" />
      <div>{{ weatherValue.weather }}</div>
      <br />
      <div>{{ Math.round(weatherValue.temp) }}℃</div>
    </div>
  </section>
</template>

<style scoped>
.weather {
  float: left;
  display: table;
  width: 100%;
  vertical-align: middle;
}
</style>

<script>
import * as axios from "axios";
export default {
  data: function() {
    return {
      weatherValue: {
        date: "",
        temp: 0,
        weather: "",
        icon: ""
      },
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
      }
    };
  },
  mounted() {
    this.getNews();
  },

  methods: {
    getNews() {
      const url = "";
      axios.get(url, { headers: this.headers }).then(response => {
        // eslint-disable-next-line no-console
        console.log(response);
      });
    }
  }
};
</script>
