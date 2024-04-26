<template>
  <v-app>
    <Header></Header>

    <v-main>
      <v-container fluid>
        <v-row>

            <v-navigation-drawer
                permanent
                class="custom-width"
            >
              <v-list class="Letras">
                <v-list-item-group v-model="selectedUser">
                  <v-list-item
                      v-for="(user, index) in users"
                      :key="index"
                      @click="selectChat(index)"
                  >
                    <v-list-item-content>
                      <v-list-item-title>{{ user.name }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>

          <v-col xs="3" >
            <div class="postagens">
              <v-app-bar
                  color="blue"
                  elevation="3"
                  class="align-start no-margin"
              >
                <div class="centro">
                  <h2 class="textoBranco">Recent Post</h2>
                </div>
              </v-app-bar>
              <div class="postagem" v-for="(post, index) in recentPosts" :key="index">
                <h3>{{ post.title }}</h3>
                <p>{{ post.content }}</p>
              </div>
            </div>
          </v-col>

          <v-divider
              vertical
          ></v-divider>

          <v-col xs="9">
            <div class="chat-messages">
              <div
                  v-for="(message, index) in messages"
                  :key="index"
                  :class="['chat-message', message.author === 'Você' ? 'message-right' : 'message-left']"
              >
                <span class="message-author">{{ message.author }}:</span>

                <span v-if="message.text" class="message-content">
                  {{ message.text }}
                </span>

                <div v-if="message.image" class="message-image">
                  <img :src="message.image" alt="Pré-visualização" />
                </div>

                <div v-if="message.audio" class="message-audio">
                  <audio controls>
                    <source :src="message.audio" type="audio/webm" />
                  </audio>
                </div>
              </div>
            </div>

            <v-text-field
                v-model="newMessage"
                filled
                label="Digite sua mensagem..."
                @keyup.enter="sendMessage"
            >
              <template v-slot:append>
                <v-btn icon @click="triggerFileInput">
                  <v-icon>mdi-file-image</v-icon>
                </v-btn>

                <v-btn icon @click="toggleRecording">
                  <v-icon v-if="!isRecording">mdi-microphone</v-icon>
                  <v-icon v-else>mdi-stop-circle</v-icon>
                </v-btn>

                <v-btn icon @click="sendMessage">
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </template>
            </v-text-field>

            <input
                ref="fileInput"
                type="file"
                style="display: none;"
                @change="handleImageUpload"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <MainFooter></MainFooter>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import MainFooter from "../components/MainFooter.vue";

export default {
  components: {
    Header,
    MainFooter,
  },
  data() {
    return {
      recentPosts: [
        { title: "Postagem 1", content: "Conteúdo da Postagem 1" },
        { title: "Postagem 2", content: "Conteúdo da Postagem 2" },
        { title: "Postagem 3", content: "Conteúdo da Postagem 3" },
      ],
      selectedUser: 0,
      users: [
        { name: "Forum1" },
        { name: "Forum2" },
        { name: "Forum3" },
      ],
      newMessage: "",
      chats:{
        0: [],
        1: [],
        2: [],
      },
      messages: [],
      isRecording: false,
      mediaRecorder: null,
      recordedBlobs: [],
      imagePreview: null,
    };
  },
  methods: {
    selectChat(index) {
      this.selectedUser = index;
      this.messages = this.chats[index];
    },

    sendMessage() {
      if (this.newMessage.trim() !== "" || this.imagePreview) {
        this.messages.push({
          author: "Você",
          text: this.newMessage.trim(),
          image: this.imagePreview,
        });
        this.newMessage = "";
        this.imagePreview = null;
      }
    },

    triggerFileInput() {
      this.$refs.fileInput.click();
    },

    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
      }
    },

    toggleRecording() {
      if (this.isRecording) {
        this.stopRecording();
      } else {
        this.startRecording();
      }
    },

    startRecording() {
      if (!this.isRecording) {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
              this.mediaRecorder = new MediaRecorder(stream);
              this.recordedBlobs = [];
              this.mediaRecorder.ondataavailable = (event) => {
                if (event.data && event.data.size > 0) {
                  this.recordedBlobs.push(event.data);
                }
              };
              this.mediaRecorder.start();
              this.isRecording = true;
            })
            .catch((err) => {
              console.error("Erro ao acessar o microfone:", err);
            });
      }
    },

    stopRecording() {
      if (this.isRecording) {
        this.mediaRecorder.stop();
        this.isRecording = false;

        // Criar um Blob para o áudio gravado e gerar um URL para ele
        const audioBlob = new Blob(this.recordedBlobs, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(audioBlob);

        // Adicionar o áudio à lista de mensagens
        this.messages.push({
          author: "Você",
          text: "",
          audio: audioUrl,
        });
      }
    },
  },
};
</script>

<style scoped>
.chat-messages {
  max-height: 80vh;
  overflow-y: auto;
}

.chat-message {
  padding: 10px;
  border-bottom: 1px solid lightgray;
}

.message-author {
  font-weight: bold;
}

.message-content {
  margin-left: 10px;
}

.message-image {
  margin-top: 10px;
}

.message-image img {
  max-width: 100%;
  max-height: 200px;
  object-fit: cover;
}

.message-audio {
  margin-top: 10px;
}

.message-audio audio {
  width: 100%;
}

.postagens{
  text-align: justify;
  margin-top: 0px;
}
.custom-width{
  width: 200px;
  margin-top: 0;

}
.Letras{
  margin-top: 5px;
}

.textoBranco{
  color: white;
}

.centro{
  text-align: center;
}
</style>
