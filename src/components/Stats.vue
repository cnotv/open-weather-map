<template>
  <section>
    <h1>Stats for {{ stats.name || "-" }}, {{ stats.sys.country || "-" }}</h1>

    <h2>Temperature</h2>
    <h3>{{ stats.main.temp + "°C" || "-" }}</h3>
    <p>Max: {{ stats.main.temp_max + "°C" || "-" }}</p>
    <p>Min: {{ stats.main.temp_min + "°C" || "-" }}</p>
    <p>Humidity: {{ stats.main.humidity + "%" || "-" }}</p>
    <p>Feels like: {{ stats.main.feels_like + "°C" || "-" }}</p>

    <template v-if="stats.wind">
      <h2>Wind</h2>
      <p>Speed: {{ stats.wind.speed }}m/s ({{ stats.wind.deg }}°)</p>
    </template>

    <template v-if="stats.rain">
      <h2>Rain</h2>
      <p>Last hour: {{ stats.rain["1h"] }}mm</p>
      <p>Last 3 hurs: {{ stats.rain["3h"] }},,</p>
    </template>

    <template v-if="stats.snow">
      <h2>Snow</h2>
      <p>Last hour: {{ stats.snow["1h"] }}mm</p>
      <p>Last 3 hurs: {{ stats.snow["3h"] }},,</p>
    </template>

    <h2>Pressure</h2>
    <p>Ground level: {{ stats.main.grnd_level || "- " }}hPa</p>
    <p>Pressure: {{ stats.main.pressure || "- " }}hPa</p>
    <p>Sea level: {{ stats.main.sea_level || "- " }}hPa</p>

  </section>
</template>

<script lang="ts">
export default {
  name: "Stats",
  props: ["stats"]
};
</script>
