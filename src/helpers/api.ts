import axios from "axios";
import { AxiosRequestConfig } from "axios";

export default {
  async fetchMap(params: ApiParams): Promise<Owm> {
    const url = `http://api.openweathermap.org/data/2.5/weather`;
    const config: AxiosRequestConfig = { params };

    return axios
      .get(url, config)
      .then(response => response.data);
  }
}