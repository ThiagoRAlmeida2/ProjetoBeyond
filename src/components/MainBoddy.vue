<template>
  <div class="container">
    <criar-comunidade></criar-comunidade>
  </div>
</template>

<script>
import CriarComunidade from "@/components/CriarComunidade.vue";

export default {
  components: {
    CriarComunidade,
  },
  data() {
    return {};
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