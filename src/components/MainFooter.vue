<template>
  <v-card height="125px">
    <v-footer
        absolute
        padless
        class="fixed-footer text-center"
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
            icon
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
  data: () => ({
    icons: [
      'mdi-home',
      'mdi-email',
      'mdi-calendar',
      'mdi-delete',
    ],
  }),
}
</script>

<style scoped>
.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
