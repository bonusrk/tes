<template>
  <v-container>
    <v-text-field
      :label="$t('cityInput.title')"
      v-model="cityNameInput"
    ></v-text-field>

    <v-btn @click="submitCityName">
      {{ $t('cityInput.submit') }}
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CityInput',

  computed: {
    cityNameInput: {
      get (): string {
        return this.$store.state.cityNameInput
      },
      set (value): void {
        this.$store.commit('UPDATE_VALUE', {
          cityNameInput: value
        })
      }
    }
  },

  methods: {
    submitCityName (): void {
      this.$store.dispatch('getCurrentWeather', this.cityNameInput)
    }
  }
})
</script>
