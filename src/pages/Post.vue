<template>
  <v-app>
    <v-main>
      <Header></Header>
    </v-main>
    <body>
    <v-card>
      <v-toolbar
          flat
          color="blue"
          dark
      >
        <v-toolbar-title>Submit a post</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-text-field
            filled
            label="Title"
            value="My new post"
        ></v-text-field>

        <v-textarea
            filled
            label="Text"
            value="Write your text"
            class="custom-text"
        ></v-textarea>

        <v-divider class="my-2"></v-divider>

        <v-item-group multiple>
          <v-subheader>Tags</v-subheader>
          <v-item
              v-for="n in 9"
              :key="n"
              v-slot="{ active, toggle }"
          >
            <v-chip
                active-class="blue--text"
                :input-value="active"
                @click="toggle"
            >
              Tag {{ n }}
            </v-chip>
          </v-item>
        </v-item-group>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="success"
            depressed
        >
          Post
        </v-btn>
      </v-card-actions>
    </v-card>
    </body>
    <footer>
      <MainFooter></MainFooter>
    </footer>
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
  data: () => ({
  }),
};
</script>

<style scoped>

.custom-text {
  text-decoration-color: rgba(255, 255, 255, 0.7);
}
</style>