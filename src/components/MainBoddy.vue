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
            Bayond communit
          </v-card-title>

          <v-card-subtitle>
            This forum is just for worked
          </v-card-subtitle>

          <v-card-actions>
            <div class="text-center">
              <v-btn
                  :disabled="dialog"
                  :loading="dialog"
                  class="white--text"
                  color="purple darken-2"
                  @click="dialog = true"
              >
                Suscribe
              </v-btn>
              <v-dialog
                  v-model="dialog"
                  hide-overlay
                  persistent
                  width="300"
              >
                <v-card
                    color="primary"
                    dark
                >
                  <v-card-text>
                    Please stand by
                    <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                    ></v-progress-linear>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>

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
                This is a forum for bayond works, to talk about the works and make updates. It is an open forum for all who want to be part of bayond's work
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
      dialog: false,
      watch: {
    dialog (val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 4000)
    },
  },
  }),
}
</script>

<style scoped>
</style>