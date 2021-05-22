<template>
  <v-container>
    <v-text-field
      :label="$t('cityInput.title')"
      v-model="cityNameInput"
      :error-messages="errorMessage"
      @input="clearError()"
    ></v-text-field>

    <v-btn
      @click="submitCityName()"
      class="mt-2"
    >
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
      set (value: string): void {
        this.$store.commit('UPDATE_VALUE', {
          cityNameInput: value
        })
      }
    },
    errorMessage: {
      get (): string {
        if (this.$store.state.cityNameError) {
          return this.$t(`errors.${this.$store.state.cityNameError}`) as string
        } else {
          return ''
        }
      }
    }
  },

  methods: {
    submitCityName (): void {
      if (this.cityNameInput.length <= 0) {
        this.$store.commit('UPDATE_VALUE', { cityNameError: 'empty' })
        return
      }

      this.$store.dispatch('getCurrentWeather', {
        cityName: this.cityNameInput,
        saveToHistory: true
      })
    },
    clearError (): void {
      this.$store.commit('UPDATE_VALUE', { cityNameError: '' })
    }
  }
})
</script>
