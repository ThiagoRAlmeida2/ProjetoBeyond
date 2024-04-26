<template>
  <v-app>
    <v-main>
      <Header></Header>
    </v-main>
    <body>

    </body>
    <footer>
      <MainFooter></MainFooter>
    </footer>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import MainFooter from "../components/MainFooter.vue";

export default {
  components: {
    MainFooter,
    Header
  },
  data: () => ({}),
};
</script>