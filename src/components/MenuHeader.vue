<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="transparent"
            dark
            v-bind="attrs"
            v-on="on"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item-group v-model="model">

          <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="navigate(item.route)"
          >
          <v-list-item-icon>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>

          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-chat',
        text: 'Chat',
        route: '/chat',
      },
      {
        icon: 'mdi-star',
        text: 'Favoritos',
        route: '/favoritos',
      },
      {
        icon: 'mdi-send',
        text: 'Enviados',
        route: '/enviados',
      },
    ],
  }),

  methods: {
    navigate(route) {
      this.$router.push(route);
    },
  },
}
</script>


<style scoped>
</style>