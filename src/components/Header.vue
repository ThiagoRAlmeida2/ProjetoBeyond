<template>
  <div>
    <v-toolbar
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <!-- Eu gostei bastante desse Background, por isso deixei-->

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title :style="{ color: 'gray' }">Forum Bayond</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-bottom-navigation
          :value="value"
          color="primary"
          class="bottom-nav"
      >
        <v-spacer></v-spacer>
        <v-btn>
          <span>Recents</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>
        <v-btn>
          <span>Favorites</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn>
          <span>Nearby</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-toolbar>
  </div>
</template>

<script>
import {right} from "core-js/internals/array-reduce";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  methods: {right},
  components: {
    // eslint-disable-next-line vue/no-unused-components
    data: () => ({ value: 'recent' }),
  }
};

</script>

<style scoped>
.bottom-nav {
  width: 18%;
  background-color: transparent;
}
</style>