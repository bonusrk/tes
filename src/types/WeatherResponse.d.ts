export interface WeatherResponse {
  weather: [{
    main: string,
    description: string
  }],
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  wind: {
    speed: number,
    deg: number
  },
  name: string
}
