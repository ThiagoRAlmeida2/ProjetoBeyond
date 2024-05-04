<template>
  <v-app>
    <v-main>
      <criar-comunidade></criar-comunidade>

    </v-main>
  </v-app>
</template>

<script>
import CriarComunidade from "@/components/CriarComunidade.vue";

export default {
  components: {CriarComunidade},
  data: () => ({
    components: {
      CriarComunidade,
    },

    drawer: true, // Controla se a gaveta está aberta ou fechada
    model: 1,
    show1: false,
    show2: false,
    show3: false,
    dialog1: false,
    dialog2: false,
    dialog3: false,
    watch: {
      dialog1 (val1) {
        if (!val1) return
        setTimeout(() => (this.dialog1 = false), 4000)
      },
      dialog2 (val2) {
        if (!val2) return
        setTimeout(() => (this.dialog2 = false), 4000)
      },
      dialog3 (val3) {
        if (!val3) return
        setTimeout(() => (this.dialog3 = false), 4000)
      }
    },
  }),
}
</script>

<style scoped>
</style>