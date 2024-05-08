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


      <v-spacer></v-spacer>

      <v-bottom-navigation
          :value="value"
          background-color="transparent"
          color="cyan"
          class="bottom-nav"
      >
        <v-spacer align="center">
          <v-btn
            background-color="transparent"
            color="transparent"
        >
          <span>Recents</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>
          <v-btn
              background-color="transparent"
              color="transparent"
              @click="goTo('/')"
          >
            <span>Home</span>
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn
              background-color="transparent"
              color="transparent"
              @click="goTo('/login')"
          >
            <span>Login</span>
            <v-icon>mdi-login</v-icon>
          </v-btn></v-spacer>

      </v-bottom-navigation>
    </v-toolbar>
  </div>
</template>

<script>
import MenuHeader from "@/components/MenuHeader.vue";

export default {
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
  name: "Header",
  components: {
    MenuHeader,

    // eslint-disable-next-line vue/no-unused-components
    data: () => ({
      items: [
        {
          icon: 'mdi-login',
          text: 'Login',
          route: '/login',
        },
      ]
    }),
  }

};

</script>

<style scoped>
.bottom-nav {
  width: 18%;
  background-color: transparent;
}
</style>