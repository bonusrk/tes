import axios, { AxiosResponse } from 'axios'

import { WeatherResponse } from '@/types/WeatherResponse.d.ts'

const urls = {
  base: 'https://api.openweathermap.org/data/2.5/', // base URL
  currentWeather: 'weather' // GET q = city name, appid = api key
}

async function sendRequest (
  requestType: 'get' | 'post',
  pathName: keyof typeof urls,
  parameters: Record<string, unknown>
): Promise<AxiosResponse<WeatherResponse>> {
  const response = await axios.request<WeatherResponse>({
    method: requestType,
    url: `${urls.base}${urls[pathName]}`,
    params: requestType === 'get' ? parameters : null,
    data: requestType === 'post' ? parameters : null
  })

  return response
}

export default {
  sendRequest
}
