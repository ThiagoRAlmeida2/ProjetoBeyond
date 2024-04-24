<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
        permanent
        width="160">

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
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-card
            class="mx-auto"
            max-width="344"
        >
          <v-img
              src="../assets/Imagem1.png"
              height="200px"
          >
          </v-img>

          <v-card-title>
            <!-- Titulo -->
          </v-card-title>

          <v-card-subtitle>
            <!-- Subtitulo -->
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
                color="black lighten-2"
                text
            >
              Suscribe
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show = !show"
            >
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                <!-- Texto do forum -->
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
      drawer: true, // Controla se a gaveta está aberta ou fechada
      model: 1,
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
      show: false,
  }),
}
</script>

<style scoped>
</style>