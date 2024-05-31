<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title class="titulo">EducLib</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-toolbar flat class="mt-1">
        <v-toolbar-title>Biblioteca</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
              class="mt-6"
              label="Pesquisar"
              outlined
              dense
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <v-btn dark class="mb-2" @click="abrirDialogoNovo">
          Novo Material
        </v-btn>
      </v-toolbar>

      <!-- Início Popup -->
      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">{{
                editMode ? "Editar Material" : "Adicionar Novo Material"
              }}</span>
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
                v-model="addConteudoData.tipo"
                :items="items"
                label="Disciplina"
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
            <v-btn color="blue darken-1" text @click="dialog = false"
            >Cancelar</v-btn
            >
            <v-btn
                color="blue darken-1"
                text
                @click="editMode ? update() : save()"
            >Salvar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Fim do Popup -->

      <!-- inicio dos cards -->
      <v-container>
        <v-row>
          <v-col
              v-for="Conteudo in biblioteca"
              :key="Conteudo.id"
              cols="4"
          >
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
                <h5 class="mb-1">Tipo: {{ Conteudo.tipo }}</h5>
                {{ Conteudo.descricao }}
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn dark width="100">Acessar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- Fim card -->

      <v-footer app dark padless>
        <v-col class="text-center" cols="12"> EducLib </v-col>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      titulo: "",
      descricao: "",
      dialog: false,
      editMode: false,
      biblioteca: [],
      items: [
        "Tecnologia",
        "Saúde",
        "Matemática",
        "História",
        "Geografia",
        "Sociologia",
        "Biologia",
        "Química",
        "Física",
      ],
      addConteudoData: {
        titulo: "",
        tipo: "",
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
        this.addConteudoData = { titulo: "", tipo: "", descricao: "" };
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
      this.addConteudoData = { titulo: "", tipo: "", descricao: "" };
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
