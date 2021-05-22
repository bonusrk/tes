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
    citiesHistory: []
  } as TypedState,

  mutations: {
    UPDATE_VALUE (state: TypedState, payload: Record<string, unknown>) {
      Object.keys(payload).map(propertyKey => {
        Vue.set(state, propertyKey, payload[propertyKey])
      })
    }
  },

  actions: {
    async getCurrentWeather (context: ActionContext<TypedState, TypedState>, cityName: string) {
      const weatherResponse = await api.sendRequest('get', 'currentWeather', {
        q: cityName,
        appid: context.state.apiKey
      })

      console.log(weatherResponse)
    }
  }
})
