<template>
  <v-app>
    <v-app-bar app>
      <div class="text-h5 ml-2">
        Weather Test App
      </div>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
      <CityInput/>
      <WeatherWidget/>
      <RequestHistory/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import CityInput from './components/CityInput.vue'
import RequestHistory from './components/RequestHistory.vue'
import WeatherWidget from './components/WeatherWidget.vue'

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
    CityInput,
    RequestHistory,
    WeatherWidget
  },

  data: () => ({
    //
  }),

  created () {
    // If locale is present in the store, set it as active
    const savedLocale = this.$store.state.locale
    if (savedLocale) {
      this.$i18n.locale = savedLocale
    } else {
      this.$store.commit('UPDATE_VALUE', { locale: this.$i18n.locale })
    }
  }
})
</script>
