import Vue from "vue";
import Vuex, { Store } from "vuex";
import api from "@/helpers/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: "",
    coords: undefined,
    data: {},
    stats: undefined,
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
    SET_STATS: (state: State, stats: Owm) => {
      state.stats = stats;
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
        commit("SET_STATS", cache);
        commit("SET_COORDS", cache.coord);
      } else {
        const params: ApiParams = {
          appid: state.apiKey,
          q,
        };
        const mapData = await api.fetchMap(params);
        commit("SET_STATS", mapData);
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
      commit("SET_STATS", mapData);
    },
  },

  getters: {
    getApiKey: (state: State) => state.apiKey,
    getCoords: (state: State) => state.coords,
    getStats: (state: State) => state.stats,
  },
  modules: {},
});
