<template>
  <v-container class="Busca">
    <v-row justify="center">
      <v-col cols="12" md="6" >
        <!-- Caixa de busca -->
        <v-text-field
            v-model="query"
            label="Search"
            @keyup.enter="search"
        solo-inverted
        rounded
        clearable
        >
        <template v-slot:append>
          <v-icon @click="search">mdi-magnify</v-icon>
        </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row v-if="results.length > 0">
      <v-col
          v-for="result in results"
          :key="result.id"
          cols="12" md="6"
      >
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
    };
  },
  methods: {
    search() {
      const sampleResults = [
        { id: 1, title: "Result 1", description: "Description for result 1" },
        { id: 2, title: "Result 2", description: "Description for result 2" },
      ];
      this.results = sampleResults.filter((item) =>
          item.title.toLowerCase().includes(this.query.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.Busca{
  margin-top: 1px;
  display: flex;
}
</style>
