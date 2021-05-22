<template>
  <div>
    <v-text-field
      :label="$t('cityInput.title')"
      v-model="cityName"
    ></v-text-field>

    <v-btn
      @click="submitCityName"
    >
      {{ $t('cityInput.submit') }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CityInput',

  data: () => ({
    cityName: 'Berlin'
  }),

  methods: {
    submitCityName (): void {
      this.$store.dispatch('getCurrentWeather', this.cityName)
    }
  }
})
</script>
