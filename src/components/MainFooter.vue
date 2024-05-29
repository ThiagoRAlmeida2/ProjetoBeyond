<template>
  <v-card height="125px">
    <v-footer
        absolute
        padless
        align="center"
    >
    <v-card
        flat
        tile
        width="100%"
        class="red lighten-1"
    >
      <v-card-text>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            @click="navigate(icon)"
        >
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Forum Bayond</strong>
      </v-card-text>
    </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
      ],
    };
  },
  methods: {
    navigate(icon) {
      if (icon === 'mdi-home') {
        this.$router.push('/home');
      }
    },
  },
};
</script>

<style scoped>
</style>
