<template class="CriarComunidade">
  <v-row class="CriarComunidade" justify="end">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Create Community
        </v-btn>
      </template>
      <v-card class="elevated-card">
        <v-card-title>
          <span class="text-h5">Create Community</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                    v-model="newCommunity.name"
                    label="Name for community"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                    v-model="newCommunity.email"
                    label="Your Email*"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-file-input
                    label="Community Image"
                    accept="image/*"
                    @change="onImageChange"
                ></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-textarea
                    v-model="newCommunity.description"
                    label="Forum Description"
                    required
                    rows="3"
                    auto-grow
                ></v-textarea>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                    v-model="newCommunity.ageGroup"
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Community Users"
                    required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                    v-model="newCommunity.interests"
                    :items="['Vue', 'JavaScript', 'Java', 'Node.js', 'Python', 'Codes']"
                    label="Interested"
                    multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>* indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="closeDialog"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="saveCommunity"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row>
      <v-col v-for="community in communities" :key="community.name" cols="12" sm="6" md="4">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="community.imageURL" height="200px"></v-img>
          <v-card-title>{{ community.name }}</v-card-title>
          <v-card-subtitle>{{ community.description }}</v-card-subtitle>
          <v-card-actions>
            <div class="text-center">
              <v-btn
                  color="purple darken-2"
                  class="white--text"
                  :disabled="isLoading"
              @click="subscribe"
              >
              Subscribe
              </v-btn>
              <v-dialog
                  v-model="isLoading"
                  persistent
                  hide-overlay
                  width="300"
              >
                <v-card color="primary" dark>
                  <v-card-text>
                    <span>Carregando...</span>
                    <v-progress-linear
                        indeterminate
                        color="white"
                    ></v-progress-linear>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      dialog: false,
      communities: [],
      newCommunity: {
        name: '',
        email: '',
        password: '',
        description: '',
        ageGroup: '',
        interests: [],
        image: '',
        imageURL: null,
      },
    };
  },
  methods: {
    subscribe() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.$router.push('/chat');
      }, 10000);
    },
    closeDialog() {
      this.dialog = false;
    },
    onImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.newCommunity.imageURL = URL.createObjectURL(file); // URL temporário para imagem
      }
    },
    saveCommunity() {
      const newEntry = { ...this.newCommunity };
      this.communities.push(newEntry);

      this.dialog = false; // Fecha o diálogo
      this.newCommunity = {
        name: '',
        email: '',
        password: '',
        description: '',
        ageGroup: '',
        interests: [],
        image: '',
        imageURL: null,
      }; // Redefine para nova entrada
    },
  },
};
</script>

<style scoped>
.CriarComunidade {
  margin-right: 5px;
  margin-top: 10px;
}

.elevated-card {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
</style>
