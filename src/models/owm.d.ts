interface Owm {
  coord:      OwmCoord;
  weather:    OwmWeather[];
  base:       string;
  main:       OwmMain;
  visibility: number;
  wind:       OwmWind;
  rain:       OwmRain;
  snow:       OwmSnow;
  clouds:     OwmClouds;
  dt:         number;
  sys:        OwmSys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}

interface OwmClouds {
  all: number;
}

interface OwmCoord {
  lon: number;
  lat: number;
}

interface OwmMain {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}

interface OwmRain {
  "1h": number;
  "3h": number;
}

interface OwmSnow {
  "1h": number;
  "3h": number;
}

interface OwmSys {
  type:    number;
  id:      number;
  country: string;
  sunrise: number;
  sunset:  number;
}

interface OwmWeather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

interface OwmWind {
  speed: number;
  deg:   number;
}
