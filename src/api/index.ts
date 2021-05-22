import axios, { AxiosResponse } from 'axios'

const urls = {
  base: 'api.openweathermap.org/data/2.5/', // base URL
  currentWeather: 'weather' // GET q = city name, appid = api key
}

async function sendRequest (
  requestType: 'get' | 'post',
  pathName: keyof typeof urls,
  parameters: Record<string, unknown>
): Promise<AxiosResponse<unknown>> {
  const response = await axios({
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
