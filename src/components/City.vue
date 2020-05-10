<template>
  <form>
    <label>City</label>
    <input required type="text" v-model="city" />

    <label>Country</label>
    <input required type="text" v-model="country" />

    <button type="button" v-on:click="setLocation()">Show on map</button>
  </form>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";

export default {
  name: "City",
  data() {
    return {
      city: "",
      country: ""
    };
  },
  computed: {
    ...mapGetters(["getApiKey"])
  },
  methods: {
    ...mapActions(["setLocation"]),
    loadMap() {
      this.setLocation({ city: this.city, country: this.country });
    }
  }
};
</script>
