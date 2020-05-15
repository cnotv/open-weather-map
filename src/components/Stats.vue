<template>
  <section>
    <h1>Temperature for {{ stats.name }}</h1>

    <h2>Weather</h2>
    <p>grnd_level: {{ stats.main.grnd_level || "-" }}</p>
    <p>Humidity: {{ stats.main.humidity || "-" }}</p>
    <p>Pressure: {{ stats.main.pressure || "-" }}</p>
    <p>Sea level: {{ stats.main.sea_level || "-" }}</p>
    <h2>Temperature</h2>

    <h3>{{ stats.main.temp || "-" }}</h3>
    <p>Max: {{ stats.main.temp_max || "-" }}</p>
    <p>Min: {{ stats.main.temp_min || "-" }}</p>
    <p>Feels like: {{ stats.main.feels_like || "-" }}</p>
  </section>
</template>

<script lang="ts">
export default {
  name: "Stats",
  props: ["stats"]
};
</script>
