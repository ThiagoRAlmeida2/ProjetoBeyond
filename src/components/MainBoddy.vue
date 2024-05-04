<template>
  <v-app>
    <v-main>
      <criar-comunidade></criar-comunidade>
      <busca></busca>
    </v-main>
  </v-app>
</template>

<script>
import CriarComunidade from "@/components/CriarComunidade.vue";
import Busca from "@/components/Busca.vue";

export default {
  components: {
    CriarComunidade,
    Busca,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>
