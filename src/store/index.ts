import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: "",
    coords: ['', ''] as Coords,
  },
  mutations: {
    SET_COORDS: (state: State, coords: Coords) => {
      state.coords = coords
    },
    SET_API_KEY: (state: State, apiKey: string) => {
      state.apiKey = apiKey
    },
  },
  actions: {
    setCoords({ commit }, coords: Coords) {
      commit("SET_COORDS", coords)
    },
    setApiKey({ commit }, apiKey: string) {
      commit("SET_API_KEY", apiKey)
    }
  },
  getters: {
    getApiKey: (state) => {
      return state.apiKey;
    },
    getCoords: (state) => {
      return state.coords;
    },
  },
  modules: {},
});
