<template>
  <section>
    <div class="weather">
      <img :src="`${weatherValue.icon}`" />
      <div>{{ weatherValue.weather }}</div>
      <br />
      <div>{{ Math.round(weatherValue.temp) }}℃</div>
    </div>
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
  display: inline-block;
}
.weather div {
  float: left;
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
      }
    };
  },
  mounted() {
    this.getWeather();
  },

  methods: {
    getWeather() {
      /// <img src="http://openweathermap.org/img/w/" + {{}}
      const API_KEY = "";
      const city = "Tokyo";
      const url =
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        ",jp&units=metric&APPID=" +
        API_KEY;
      // eslint-disable-next-line no-console
      axios.get(url).then(response => {
        // eslint-disable-next-line no-console
        console.log(response);
        const { list } = response.data;
        const target = list[0];
        // eslint-disable-next-line no-console
        this.weatherValue.date = new Date(target.dt_txt);
        this.weatherValue.temp = target.main.temp;
        this.weatherValue.icon =
          // eslint-disable-next-line no-template-curly-in-string
          `http://openweathermap.org/img/w/${target.weather[0].icon}.png`;
        this.weatherValue.weather = target.weather[0].description;
        // eslint-disable-next-line no-console
        console.log(target);
        // eslint-disable-next-line no-console
        console.log(this.weatherValue);
        // const icon = target.weather[0].icon;
      });
    },
    getNews() {
      const url = "https://news.yahoo.co.jp/pickup/computer/rss.xml";
      axios.get(url).then(response => {
        // eslint-disable-next-line no-console
        console.log(response);
      });
    }
  }
};
</script>
