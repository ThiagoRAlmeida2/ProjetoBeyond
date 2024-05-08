<template>
    <div class="container">
      <busca></busca>
      <criar-comunidade></criar-comunidade>
    </div>
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
.container {
  position: fixed;
  top: 125px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

</style>