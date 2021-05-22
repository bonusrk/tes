<template>
  <v-container>
    <p class="text-h4 mt-10">
      {{ $t('requestHistory.title') }}
    </p>

    <v-list v-if="citiesHistory.length">
      <template v-for="(cityName, cityId) in citiesHistory">
        <v-list-item
          :key="cityId"
          @click="replaceCityInput(cityName)"
        >
          {{ cityName }}
        </v-list-item>

        <v-divider
          v-if="cityId < citiesHistory.length - 1"
          :key="'divider-' + cityId"
        ></v-divider>
      </template>
    </v-list>

    <p
      v-else
      class="text--secondary"
    >
      {{ $t('requestHistory.empty') }}
    </p>

    <v-btn
      @click="clearRequestHistory()"
      :disabled="!citiesHistory.length"
    >
      {{ $t('requestHistory.clearButton') }}
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import { mapState } from 'vuex'
export default Vue.extend({
  name: 'RequestHistory',

  computed: mapState([
    'citiesHistory'
  ]),

  methods: {
    replaceCityInput (newCityInput: string): void {
      this.$store.commit('UPDATE_VALUE', {
        cityNameInput: newCityInput
      })
    },
    clearRequestHistory (): void {
      this.$store.commit('UPDATE_VALUE', {
        citiesHistory: []
      })
    }
  }
})
</script>
