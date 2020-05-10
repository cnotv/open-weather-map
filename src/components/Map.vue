<template>
  <section>Display map here {{ coord }}</section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Map extends Vue {
  @Prop() private coord!: string[];
}
</script>