<template>
  <section>
    <City />
    <Map v-if="map" />
    <Error v-else />
  </section>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";

import Map from "@/components/Map.vue";
import City from "@/components/City.vue";

export default {
  name: "Weather",
  components: {
    Map,
    City
  },
  data() {
    return {
      map: ""
    };
  },
  computed: {
    ...mapGetters(["getMap"])
  },
  methods: {
    ...mapActions(["setCoords"]),
    generateCoords() {
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
    const coords = this.generateCoords();
    this.setCoords(coords);
  }
};
</script>
