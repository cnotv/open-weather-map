<template>
  <form>
    <label>Country</label>
    <input type="text">
    <label>City</label>
    <input type="text">
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class City extends Vue {
}
</script>