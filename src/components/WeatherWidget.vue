<template>
  <v-card transition="v-expand-transition">
    <v-card-title>{{ currentWeather.name }}</v-card-title>

    <v-card-subtitle>{{ currentWeather.description }}</v-card-subtitle>

    <v-card-text>{{ currentWeather.temperature.fact }}</v-card-text>

    <v-card-text>{{ currentWeather.pressure }}</v-card-text>

    <v-card-text>{{ currentWeather.humidity }}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'WeatherWidget',

  computed: mapState([
    'currentWeather'
  ])
})
</script>
