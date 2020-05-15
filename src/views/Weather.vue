<template>
  <section>
    <Location />
    <Stats v-if="getStats" v-bind:stats="getStats" />
    <ErrorMsg v-else />
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

import Stats from "@/components/Stats.vue";
import ErrorMsg from "@/components/ErrorMsg.vue";
import Location from "@/components/Location.vue";

export default Vue.extend({
  name: "Weather",
  components: {
    Stats,
    ErrorMsg,
    Location
  },
  computed: {
    ...mapGetters(["getStats"])
  },
  methods: {
    ...mapActions(["setCoords"]),
    _generateCoords() {
      const randomCoor = (min: number, max: number): number => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      };

      return {
        lon: randomCoor(-180, 180),
        lat: randomCoor(0, 90)
      };
    }
  },

  created() {
    const coords = this._generateCoords();
    this.setCoords(coords);
  }
});
</script>
