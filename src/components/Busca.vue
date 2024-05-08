<template>
  <v-container class="busca">
    <!-- Campo de Busca -->
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-text-field
            v-model="query"
            :label="placeholder"
            @keyup.enter="search"
            append-icon
            rounded
            clearable
            outlined
        >
          <template v-slot:append>
            <v-icon color="#666" @click="search">mdi-magnify</v-icon>
          </template>
        </v-text-field>
      </v-col>
    </v-row>


    <!-- Resultados da Pesquisa -->
    <v-row v-if="results.length > 0 && query !== ''">
      <v-col v-for="result in results" :key="result.id" cols="12" md="6">
        <v-card>
          <v-card-title>{{ result.title }}</v-card-title>
          <v-card-text>{{ result.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      query: "",
      results: [],
      placeholder: "Pesquisar",
    };
  },
  methods: {
    search() {
      const sampleResults = [
        { id: 1, title: "Forum 1", description: "Descrição do Forum 1" },
        { id: 2, title: "Forum 2", description: "Descrição do Forum 2" },
      ];
      this.results = sampleResults.filter((item) =>
          item.title.toLowerCase().includes(this.query.toLowerCase())
      );
    },
  },
};
</script>


<style scoped>
.busca {
  padding: 16px;
  display: flex;
  flex-direction: column;
}


</style>
