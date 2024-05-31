<template>
  <v-app>
    <v-main>
      <Header></Header>
      <v-container>
        <v-toolbar flat class="mt-1">
          <v-btn align="end" @click="abrirDialogoNovo">
            New Post
          </v-btn>
        </v-toolbar>

        <!-- Início Popup -->
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title>
              <span class="headline">
                {{ editMode ? "Editar Post" : "Adicionar Novo Post" }}
              </span>
            </v-card-title>
            <v-card-text>
              <!-- Conteúdo do dialog aqui -->
              <v-text-field
                  v-model="addConteudoData.titulo"
                  label="Título"
                  outlined
                  dense
                  maxlength="20"
                  counter
              ></v-text-field>
              <v-select
                  v-model="addConteudoData.Interesses"
                  :items="items"
                  label="Interesses"
                  outlined
              ></v-select>
              <v-textarea
                  v-model="addConteudoData.descricao"
                  label="Descrição"
                  outlined
                  dense
                  maxlength="90"
                  counter
                  required
              ></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Cancelar
              </v-btn>
              <v-btn
                  color="blue darken-1"
                  text
                  @click="editMode ? update() : save()"
              >
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- Fim do Popup -->

        <!-- Início dos cards -->
        <v-row>
          <v-col v-for="Conteudo in biblioteca" :key="Conteudo.id" cols="4">
            <v-card height="420" max-width="344" elevation="5">
              <v-img
                  height="230"
                  src="https://th.bing.com/th/id/OIP.Kg6AyaeYj2PbrMI2DBb3cQHaE8?rs=1&pid=ImgDetMain"
              >
                <v-row class="d-flex justify-end">
                  <v-col cols="auto">
                    <v-btn
                        @click="abrirDialogoEditar(Conteudo)"
                        icon
                        class="mr-1"
                    >
                      <v-icon color="black">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn @click="Deletar(Conteudo.id)" icon class="mr-1">
                      <v-icon color="black">mdi-delete</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-img>
              <v-card-text>
                <h2 class="text-h6 text-primary">{{ Conteudo.titulo }}</h2>
                <h5 class="mb-1">Tipo: {{ Conteudo.Interesses }}</h5>
                {{ Conteudo.descricao }}
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn dark width="100">Acessar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <!-- Fim dos cards -->

      </v-container>
    </v-main>
    <MainFooter></MainFooter>
  </v-app>
</template>

<script>
import axios from "axios";
import MainFooter from "@/components/MainFooter.vue";
import Header from "@/components/Header.vue";

export default {
  components: { Header, MainFooter },
  data() {
    return {
      dialog: false,
      editMode: false,
      biblioteca: [],
      items: ["Codes", "Java", "Python", "Vue", "JavaScript", "Html/Css"],
      addConteudoData: {
        titulo: "",
        Interesses: "",
        descricao: "",
      },
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/conteudos");
        this.biblioteca = response.data;
      } catch (error) {
        console.error("Erro ao obter documentos:", error);
      }
    },
    async save() {
      try {
        await axios.post("http://localhost:3000/conteudos", this.addConteudoData);
        this.dialog = false;
        this.addConteudoData = { titulo: "", Interesses: "", descricao: "" };
        this.fetchData();
      } catch (error) {
        console.error("Erro ao salvar documento:", error);
      }
    },
    async update() {
      try {
        await axios.put(`http://localhost:3000/conteudos/${this.addConteudoData.id}`, {
          titulo: this.addConteudoData.titulo,
          tipo: this.addConteudoData.tipo,
          descricao: this.addConteudoData.descricao,
        });
        this.dialog = false;
        this.addConteudoData = { titulo: "", tipo: "", descricao: "" };
        this.fetchData();
      } catch (error) {
        console.error("Erro ao atualizar documento:", error);
      }
    },
    async Deletar(id) {
      try {
        await axios.delete(`http://localhost:3000/conteudos/${id}`);
        this.fetchData();
      } catch (error) {
        console.error("Erro ao deletar documento:", error);
        if (error.response) {
          console.error('Resposta do servidor:', error.response.data);
        }
      }
    },
    abrirDialogoNovo() {
      this.editMode = false;
      this.addConteudoData = { titulo: "", Interesses: "", descricao: "" };
      this.dialog = true;
    },
    abrirDialogoEditar(conteudo) {
      this.editMode = true;
      this.addConteudoData = { ...conteudo };
      this.dialog = true;
    },
  },
};
</script>