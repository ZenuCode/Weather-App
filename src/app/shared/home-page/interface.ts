export interface checkData {
  country?: string;
  is_capital?: boolean;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
}

export interface fullData {
  base: string;
  clouds: CloudData;
  cod: number;
  coord: CoordData;
  dt: number;
  id: number;
  main: TempData;
  name: string;
  sys: object;
  timezone: number;
  visibility: number;
  weather: WeatherData[];
  wind: WindData;
}

export interface WeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CloudData {
  all: number;
}

export interface WindData {
  deg: number;
  speed: number;
}

export interface TempData {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface CoordData {
  lat: number;
  lon: number;
}
