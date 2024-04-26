<template>
  <v-app>
    <v-main>
      <Header></Header>
      <v-container fluid>
        <v-row wrap
               align="center"
               gap="5px"
        >
          <v-col xs="12" sm="6" md="4" :class="['spacing-card']"> <!-- Aplicando classe personalizada para espaçamento -->
            <v-card class="Card" color="blue" dark max-width="400">
              <v-toolbar flat color="blue" dark>
                <v-toolbar-title>Submit a post</v-toolbar-title>
              </v-toolbar>

              <v-card-text>

                <v-text-field
                    filled
                    label="Your user"
                    v-model="postTitle"
                    maxlength="50"
                ></v-text-field>

                <v-textarea
                    filled
                    label="Text"
                    v-model="postText"
                    auto-grow
                ></v-textarea>

                <v-file-input
                    label="Upload image"
                    v-model="postImage"
                    accept="image/*"
                ></v-file-input>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="success"
                    depressed
                    @click="post"
                >
                  Post
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col xs="1" sm="3" md="3">
            <div v-for="(post, index) in posts" :key="index">
              <v-card
                  class="post-card"
                  color="blue"
                  dark
                  max-width="400"
              >
                <v-card-title>
                  <v-icon large left>
                    mdi-post
                  </v-icon>
                  <span class="text-h6 font-weight-light">Forum</span>
                  <v-spacer></v-spacer>
                  <v-icon
                      @click="deletePost(index)"
                  color="withe"
                  large
                  >
                  mdi-close
                  </v-icon>
                </v-card-title>

                <v-img
                    :src="post.image"
                    class="elevation-6"
                    height="200px"
                ></v-img>

                <v-card-text class="text-h5 font-weight-bold">
                  {{ post.text }}
                </v-card-text>

                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                          class="elevation-6"
                          alt=""
                          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{ post.title }}</v-list-item-title>
                    </v-list-item-content>

                    <v-row align="center" justify="end">
                      <v-icon class="mr-1">mdi-heart</v-icon>
                      <span class="subheading mr-2"></span>
                      <v-icon class="mr-1">mdi-share-variant</v-icon>
                      <span class="subheading"></span>
                    </v-row>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <MainFooter></MainFooter>
  </v-app>
</template>

<script>
import Header from "../components/Header";
import MainFooter from "../components/MainFooter.vue";

export default {
  components: {
    Header,
    MainFooter,
  },
  data() {
    return {
      postTitle: "",
      postText: "",
      postImage: null,
      posts: [],
    };
  },
  methods: {
    post() {
      if (this.postImage) {
        const imageSrc = URL.createObjectURL(this.postImage);
        this.posts.push({
          title: this.postTitle,
          text: this.postText,
          image: imageSrc,
        });
      }

      this.postTitle = "";
      this.postText = "";
      this.postImage = null;
    },
    deletePost(index) {
      this.posts.splice(index, 1);
    },
  },
};
</script>

<style>
.Card{
  text-align: left;
  justify-content: flex-start;
  border-radius: 8px;
}

.spacing-card {
  padding-right: 6px;
}

.post-card{
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>