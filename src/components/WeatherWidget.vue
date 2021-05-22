<template>
  <v-card transition="v-expand-transition">
    <v-card-title class="text-capitalize">{{ currentWeather.description }}</v-card-title>

    <v-card-text>
      <div class="text-h5 text--primary">
        {{ currentWeather.temperature.fact }} °C
      </div>

      <div class="text--primary">
        {{ $t('weatherWidget.temperature.feelsLike') }}:
        {{ currentWeather.temperature.feelsLike }} °C
      </div>

      <div>
        {{ $t('weatherWidget.temperature.min') }}:
        {{ currentWeather.temperature.min }} °C
      </div>

      <div>
        {{ $t('weatherWidget.temperature.max') }}:
        {{ currentWeather.temperature.max }} °C
      </div>

      <div>
        {{ $t('weatherWidget.pressure') }}:
        {{ currentWeather.pressure }}
        {{ $t('weatherWidget.pressureUnit') }}
      </div>

      <div>
        {{ $t('weatherWidget.humidity') }}:
        {{ currentWeather.humidity }}%
      </div>

      <div>
        {{ $t(`weatherWidget.wind.directions.${getVerbalDirection(currentWeather.wind.deg)}`) }}
        {{ $t(`weatherWidget.wind.sep`) }}
        {{ currentWeather.wind.speed }}
        {{ $t(`weatherWidget.wind.speedUnit`) }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'WeatherWidget',

  computed: mapState([
    'currentWeather'
  ]),

  methods: {
    getVerbalDirection (angleDeg: number): string {
      const directions = [
        'north',
        'northEast',
        'east',
        'southEast',
        'south',
        'southWest',
        'west',
        'northWest',
        'north'
      ]

      angleDeg %= 360
      angleDeg -= 22.5
      if (angleDeg < 0) {
        angleDeg += 360
      }

      return directions[Math.floor(angleDeg / 45) + 1]
    }
  }
})
</script>
