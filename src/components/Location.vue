<template>
  <form>
    <label>City</label>
    <input required type="text" v-model="city" />

    <label>Country</label>
    <input required type="text" v-model="country" />

    <button type="button" v-on:click="loadMap()">Show on map</button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "Location",
  data() {
    return {
      city: "",
      country: ""
    };
  },
  methods: {
    ...mapActions(["setLocation"]),
    loadMap() {
      const location: MapLocation = { city: this.city, country: this.country };
      this.setLocation(location);
    }
  }
});
</script>
