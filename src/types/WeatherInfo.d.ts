export interface WeatherInfo {
  name: string,
  description: string,
  cityName: string,
  temperature: {
    fact: number,
    feelsLike: number,
    min: number,
    max: number
  },
  pressure: number,
  humidity: number,
  wind: {
    speed: number,
    deg: number
  }
}
