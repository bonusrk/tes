<template>
  <v-app>
    <v-app-bar app>
      <div class="text-h5 ml-2">
        Weather Test App
      </div>
      <v-spacer/>

      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(localeName, localeKey) in availableLocales"
            :key="localeKey"
            @click="changeLocale(localeKey)"
          >
            <v-list-item-title>{{ localeName }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <CityInput/>
        <WeatherWidget
          v-if="$store.state.currentWeather"
          class="mt-8"
        />
        <RequestHistory/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import CityInput from './components/CityInput.vue'
import RequestHistory from './components/RequestHistory.vue'
import WeatherWidget from './components/WeatherWidget.vue'

export default Vue.extend({
  name: 'App',

  components: {
    CityInput,
    RequestHistory,
    WeatherWidget
  },

  data: () => ({
    availableLocales: {
      ru: 'Русский',
      en: 'English'
    }
  }),

  created () {
    // If locale is present in the store, set it as active
    const savedLocale = this.$store.state.locale
    if (savedLocale) {
      this.$i18n.locale = savedLocale
    } else {
      this.$store.commit('UPDATE_VALUE', { locale: this.$i18n.locale })
    }
  },

  methods: {
    changeLocale (newLocale: string): void {
      this.$i18n.locale = newLocale
      this.$store.commit('UPDATE_VALUE', { locale: newLocale })

      // Update weather info on language change
      // to get translated weather description
      if (this.$store.state.currentWeather) {
        this.$store.dispatch('getCurrentWeather', {
          cityName: this.$store.state.currentWeather.cityName,
          saveToHistory: false
        })
      }
    }
  }
})
</script>
