<template>
  <div>
    <h1>Login</h1>
    <p>An API key is required to display the map.</p>
    <input type="text" v-model="apiKey" />
    <button v-on:click="login()">Add key</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      apiKey: ""
    };
  },
  methods: {
    ...mapActions(["setApiKey"]),
    login() {
      if (this.apiKey) {
        this.setApiKey(this.apiKey);
        this.$router.push({ name: "Weather" });
      }
    }
  }
});
</script>
