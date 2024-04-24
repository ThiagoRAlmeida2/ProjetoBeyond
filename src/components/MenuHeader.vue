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
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
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
      },
      {
        icon: 'mdi-star',
        text: 'Favoritos',
      },
      {
        icon: 'mdi-send',
        text: 'Enviados',
      },
    ],
  }),
}
</script>

<style scoped>
</style>