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
              <v-app-bar
                  color="blue"
                  elevation="3"
                  class="align-start no-margin"
              >
                <div class="centro">
                  <h2 class="textoBranco">Comunnit</h2>
                </div>
              </v-app-bar>

              <v-list>
                <v-list-item-group v-model="selectedForum" color="blue">
                  <template v-for="(item, index) in items" :key="index">
                    <v-list-item
                        @click="selectForum(index)"
                        :active="selectedForum === index"
                    >
                      <v-list-item-avatar>
                        <img :src="item.avatar" alt="Avatar do fórum" />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <v-divider
                        v-if="index < items.length - 1"
                        :key="'divider-' + index"
                    ></v-divider>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-list>
          </v-navigation-drawer>

          <v-col xs="12" sm="6" >  <!-- Define o tamanho do cartão -->
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

              <v-row dense>
                <v-col v-for="(post, index) in recentPosts" :key="index">
                  <v-card style="max-height: 400px; max-width: 1000px;">

                    <v-card-media>
                      <img :src="post.image" alt="Imagem do post" style="object-fit: cover; width: 100%; height: 100%;" />
                    </v-card-media>

                    <v-card-title>
                      {{ post.title }}
                    </v-card-title>

                    <!-- Subtítulo do cartão -->
                    <v-card-subtitle>
                      {{ post.subtitle }}
                    </v-card-subtitle>
                    <v-card-actions>
                      <v-avatar>
                        <img :src="post.userAvatar" alt="Avatar do usuário" />
                      </v-avatar>
                      <span>{{ post.userName }}</span>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-divider vertical></v-divider>

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
                  <img :src="message.image" alt="Pré-visualização da imagem" />
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
                :color="imagePreview ? 'green' : 'default'"
                filled
                label="Digite sua mensagem..."
                @keyup.enter="trySendMessage"
            >
              <template v-slot:append>
                <v-btn  @click="sendMessage">
                  <v-icon>mdi-send</v-icon>
                </v-btn>

                <v-btn @click="triggerFileInput">
                  <v-icon>mdi-file-image</v-icon>
                </v-btn>

                <v-btn  @click="toggleRecording">
                  <v-icon v-if="!isRecording">mdi-microphone</v-icon>
                  <v-icon v-else>mdi-stop-circle</v-icon>
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
    <footer>
      <MainFooter></MainFooter>
    </footer>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import MainFooter from "../components/MainFooter.vue";
import Imagem6 from "../assets/Imagem6.jpg";
import Imagem5 from '../assets/Imagem5.jpg';
import Imagem4 from '../assets/Imagem4.jpg';


export default {
  components: {
    Header,
    MainFooter,
  },
  data() {
    return {
      recentPosts: [
        {
          title: "Star Wars",
          subtitle: "É tudo de bom",
          content: "Star Wars é o melhor filme que alguém pode ver",
          image: Imagem5,
          userAvatar: Imagem4,
          userName: "Thiago",
        },
        {
          title: "Acer Nitro",
          subtitle: "Acer!!!!",
          content: "Para mim esse Acer Nitro é um dos melhores PCs",
          image: Imagem6,
          userAvatar: Imagem6,
          userName: "Acerzinho",
        },
        {
          title: "Física",
          subtitle: "Física Quântica",
          content: "Eu quero muito me formar em física, mas Geometria Analítica está sendo bem difícil",
          image: Imagem4,
          userAvatar: Imagem4,
          userName: "Thiago",
        },
      ],
      selectedForum: 0,
      items: [
        { avatar: require("../assets/Imagem4.jpg"), title: "Física Quântica" },
        { avatar: require("../assets/Imagem5.jpg"), title: "Beyond" },
        { avatar: require("../assets/Imagem6.jpg"), title: "Ficr" },
      ],
      chats: {
        0: [],
        1: [],
        2: [],
      },
      messages: [],
      newMessage: "",
      isSending: false,
      isRecording: false,
      mediaRecorder: null,
      recordedBlobs: [],
      imagePreview: null,
    };
  },
  methods: {
    selectForum(index) {
      this.selectedForum = index;
      this.messages = this.chats[index];
    },
    trySendMessage() {
      if (this.isSending) {
        return;
      }
      this.isSending = true;

      this.sendMessage();
      setTimeout(() => {
        this.isSending = false;
      }, 1000);
    },

    sendMessage() {
      if (this.newMessage.trim() === "" && !this.imagePreview) {
        return;
      }

      const newMsg = {
        author: "Você",
        text: this.newMessage.trim(),
        image: this.imagePreview,
      };

      this.chats[this.selectedForum].push(newMsg);
      this.messages.push(newMsg);
      this.newMessage = "";
      this.imagePreview = null;
    },

    triggerFileInput() {
      this.$refs.fileInput.click();
    },

    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
        this.newMessage = "";
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

        const audioBlob = new Blob(this.recordedBlobs, { type: "audio/webm" });
        const audioUrl = URL.createObjectURL(audioBlob);
        const newAudioMessage = {
          author: "Você",
          text: "",
          audio: audioUrl,
        };
        this.chats[this.selectedForum].push(newAudioMessage);
        this.messages.push(newAudioMessage);
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

.postagens {
  text-align: justify;
  margin-top: 0;
}

.custom-width {
  width: 200px;
}

.Letras {
  margin-top: 5px;
}

.textoBranco {
  color: white;
}

.centro {
  text-align: center;
}

</style>