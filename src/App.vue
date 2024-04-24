<!-- Trecho de HTML -->
<template>
  <v-app>
    <v-main>
      <Header></Header>
    </v-main>
    <footer>
      <MainFooter></MainFooter>
    </footer>
  </v-app>
</template>

<!-- Trecho de JS -->
<script>
import Header from "./components/Header";
import MainFooter from "@/components/MainFooter.vue";
export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Header,
    // eslint-disable-next-line vue/no-unused-components
    MainFooter,
    // eslint-disable-next-line vue/no-unused-components
  },
  data: () => ({}),
};
</script>

<!-- Trecho de Css -->
<style>
</style>