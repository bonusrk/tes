<template>
  <v-container>
    <v-text-field
      :label="$t('cityInput.title')"
      hide-details="auto"
    ></v-text-field>
    <v-btn class="mt-4">
      {{ $t('cityInput.submit') }}
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CityInput',

  data: () => ({
  })
})
</script>
