<template>
  <div>
    <h1>Login</h1>
    <p>An API key is required to display the map.</p>
    <input type="text" v-model="apiKey" />
    <button v-on:click="setApiKey(apiKey)">Add key</button>
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
    ...mapActions(["setApiKey"])
  }
});
</script>
