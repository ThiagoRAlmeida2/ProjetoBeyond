<template>
  <v-app>
    <v-main>
      <Header></Header>
    </v-main>
    <body>
    <MainBoddy></MainBoddy>
    </body>
    <footer>
      <MainFooter></MainFooter>
    </footer>
  </v-app>
</template>

<script>
import Header from "../components/Header";
import MainFooter from "../components/MainFooter.vue";
import MainBoddy  from "../components/MainBoddy.vue";

export default {
  components: {
    Header,
    MainFooter,
    MainBoddy,
  },
  data: () => ({}),
};
</script>