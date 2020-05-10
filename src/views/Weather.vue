<template>
  <section>
    <City />
    <Map coord="[0,0]" />
  </section>
</template>

<script>
// @ is an alias to /src
import Map from "@/components/Map.vue";
import City from "@/components/City.vue";

export default {
  name: "Weather",
  components: {
    Map,
    City
  }
};
</script>
