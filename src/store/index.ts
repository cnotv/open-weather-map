import Vue from "vue";
import Vuex, { Store } from "vuex";
import api from "@/helpers/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: "",
    data: {},
  },

  mutations: {
    SET_LOCATION: (state: State, location: MapLocation) => {
      state.location = location;
    },
    SET_COORDS: (state: State, coords: OwmCoord) => {
      state.coords = coords;
    },
    SET_API_KEY: (state: State, apiKey: string) => {
      state.apiKey = apiKey;
    },
    SET_CACHE: (state: State, payload: { location: string; data: Owm }) => {
      state.data[payload.location] = payload.data;
    },
    SET_MAP: (state: State, map: Owm) => {
      state.map = map;
    },
  },

  actions: {
    setApiKey({ commit }, apiKey: string) {
      commit("SET_API_KEY", apiKey);
    },
    async setLocation({ commit, state }, location: MapLocation) {
      commit("SET_LOCATION", location);
      if (!state.apiKey) return;

      const { city, country } = location;
      const q = `${city},${country}`;
      const cache = state.data[q];

      if (cache) {
        commit("SET_MAP", cache);
        commit("SET_COORDS", cache.coord);
      } else {
        const params: ApiParams = {
          appid: state.apiKey,
          q,
        };
        const mapData = await api.fetchMap(params);
        commit("SET_MAP", mapData);
        commit("SET_COORDS", mapData.coord);
        commit("SET_CACHE", { location: location, data: mapData });
      }
    },
    async setCoords({ commit, state }, coords: OwmCoord) {
      commit("SET_COORDS", coords);
      if (!state.apiKey) return;

      const params: ApiParams = {
        appid: state.apiKey,
        ...coords,
      };
      const mapData = await api.fetchMap(params);
      commit("SET_MAP", mapData);
    },
  },

  getters: {
    getApiKey: (state: State) => {
      return state.apiKey;
    },
    getCoords: (state: State) => {
      return state.coords;
    },
    getMap: (state: State) => {
      return state.map;
    },
  },
  modules: {},
});
