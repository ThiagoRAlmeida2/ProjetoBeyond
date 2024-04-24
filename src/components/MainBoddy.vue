<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row dense>
          <v-col cols="12" sm="6" md="4"  class="small-margin">
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
                Bayond Community
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
                    Subscribe
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
                    This is a forum for bayond works, to talk about the works and make updates. It is an open forum for all who want to be part of bayond's work.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>

          <!-- Segundo cartão -->
          <v-col cols="12" sm="6" md="4" class="small-margin">
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
                Bayond Community
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
                    Subscribe
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
                    This is a forum for bayond works, to talk about the works and make updates. It is an open forum for all who want to be part of bayond's work.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true, // Controla se a gaveta está aberta ou fechada
    model: 1,
    show: false,
    dialog: false,
    watch: {
      dialog (val) {
        if (!val) return
        setTimeout(() => (this.dialog = false), 1)
      },
    },
  }),
}
</script>

<style scoped>
.small-margin {
  padding-right: 1px; /* Ajusta para diminuir o espaço entre cartões */
}
</style>