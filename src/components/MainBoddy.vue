<template>
  <v-app>
    <v-main>
      <criar-comunidade></criar-comunidade>
      <v-container  class="d-flex justify-start" style="max-width:1000px;">
        <v-row dense>
          <v-col cols="12" sm="6" md="4"  class="small-margin">

            <v-card class="mx-auto" max-width="344">
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
                      :disabled="dialog1"
                      :loading="dialog1"
                      class="white--text"
                      color="purple darken-2"
                      @click="dialog1 = true"
                  >
                    Subscribe
                  </v-btn>
                  <v-dialog
                      v-model="dialog1"
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
                    @click="show1 = !show1"
                >
                  <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show1">
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

            <v-card class="mx-auto" max-width="344">
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
                      :disabled="dialog2"
                      :loading="dialog2"
                      class="white--text"
                      color="purple darken-2"
                      @click="dialog2 = true"
                  >
                    Subscribe
                  </v-btn>
                  <v-dialog
                      v-model="dialog2"
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
                    @click="show2 = !show2"
                >
                  <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show2">
                  <v-divider></v-divider>

                  <v-card-text>
                    This is a forum for bayond works, to talk about the works and make updates. It is an open forum for all who want to be part of bayond's work.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>

          <!-- Terceiro card -->
          <v-col cols="12" sm="6" md="4" class="small-margin">

            <v-card class="mx-auto" max-width="344">
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
                      :disabled="dialog3"
                      :loading="dialog3"
                      class="white--text"
                      color="purple darken-2"
                      @click="dialog3 = true"
                  >
                    Subscribe
                  </v-btn>
                  <v-dialog
                      v-model="dialog3"
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
                    @click="show3 = !show3"
                >
                  <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show3">
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
.small-margin {
}
</style>