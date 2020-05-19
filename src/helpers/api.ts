import axios from "axios";
import { AxiosRequestConfig } from "axios";

export default {
  async fetchMap(params: ApiParams): Promise<Owm> {
    params.units = 'metric';
    const url = `//api.openweathermap.org/data/2.5/weather`;
    const config: AxiosRequestConfig = { params };

    return axios
      .get(url, config)
      .then(response => response.data)
      .catch(() => void 0)
  }
}