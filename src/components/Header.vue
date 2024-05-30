<template>
  <div>
    <v-toolbar
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <header>
        <menu-header></menu-header>
      </header>

      <v-toolbar-title :style="{ color: 'withe' }">
        <v-icon class="mr-2">mdi-forum</v-icon>
        Forum Bayond
      </v-toolbar-title>

      <v-spacer> </v-spacer>

      <v-btn text @click="confirmLogout" class="mr-4">
        <v-icon left>mdi-logout</v-icon>
        Logout
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import MenuHeader from "@/components/MenuHeader.vue";

export default {
  methods: {
    confirmLogout() {
      if (confirm("Tem certeza que deseja sair?")) {
        this.logout();
      }
    },
    logout() {
      this.$router.push('/');
    }
  },
  name: "Header",
  components: {
    MenuHeader,
  }
};

</script>

<style scoped>
.bottom-nav {
  width: 18%;
  background-color: transparent;
}
</style>