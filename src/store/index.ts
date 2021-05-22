import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import api from '@/api'

import { WeatherInfo } from '@/types/WeatherInfo.d.ts'

Vue.use(Vuex)

interface TypedState {
  apiKey: string,
  locale: string,
  currentWeather: WeatherInfo | null,
  cityNameInput: string,
  citiesHistory: string[]
}

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: [
        'apiKey',
        'locale',
        'citiesHistory'
      ]
    })
  ],

  strict: true,

  state: {
    apiKey: '84e2a9ad0b2bca1922b23252454cc8a2',
    locale: 'ru',
    currentWeather: null,
    cityNameInput: '',
    citiesHistory: []
  } as TypedState,

  mutations: {
    UPDATE_VALUE (state: TypedState, payload: Record<string, unknown>) {
      Object.keys(payload).forEach(propertyKey => {
        Vue.set(state, propertyKey, payload[propertyKey])
      })
    }
  },

  actions: {
    async getCurrentWeather (context: ActionContext<TypedState, TypedState>, cityName: string) {
      const weatherResponse = await api.sendRequest('get', 'currentWeather', {
        q: cityName,
        appid: context.state.apiKey,
        lang: context.state.locale,
        units: 'metric'
      })

      if (weatherResponse.status === 200) {
        this.commit('UPDATE_VALUE', {
          // Convert response data to proper structure
          currentWeather: {
            name: weatherResponse.data.weather[0].main,
            description: weatherResponse.data.weather[0].description,
            cityName: weatherResponse.data.name,
            temperature: {
              fact: weatherResponse.data.main.temp,
              feelsLike: weatherResponse.data.main.feels_like,
              min: weatherResponse.data.main.temp_min,
              max: weatherResponse.data.main.temp_max
            },
            pressure: weatherResponse.data.main.pressure,
            humidity: weatherResponse.data.main.humidity,
            wind: {
              speed: weatherResponse.data.wind.speed,
              deg: weatherResponse.data.wind.deg
            }
          },
          citiesHistory: [cityName, ...context.state.citiesHistory]
        })
      }
    }
  }
})
