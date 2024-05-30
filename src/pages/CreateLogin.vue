<template>
  <v-row style="height: 100vh; background-color: #212179;">
    <!-- Divisão -->
    <v-col cols="6">
      <v-divider vertical></v-divider>
    </v-col>

    <v-col cols="6">
      <v-card elevation="5" class="container" width="50%" height="100%" style="margin-right: 0; position: relative;">
        <h2 style="color: black;" align="center">Crie sua Conta</h2>
        <v-form @submit.prevent="submit">
          <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
              v-model="password"
              :error-messages="passwordErrors"
              label="Senha"
              type="password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
          ></v-text-field>
          <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="Você aceita os termos e condições"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
          ></v-checkbox>

          <v-row class="mt-4">
            <v-btn type="submit" style="margin-bottom: 10px; margin-right: 5px;">Criar Conta</v-btn>
            <v-btn class="mr-4" @click="clear">Limpar</v-btn>
            <v-btn @click="back">Voltar</v-btn>
          </v-row>
        </v-form>
        <v-alert v-if="error" type="error">{{ error }}</v-alert>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email as emailValidator } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email: emailValidator },
    password: { required },
    checkbox: { checked: val => val },
  },

  data: () => ({
    email: '',
    password: '',
    checkbox: false,
    error: '',
  }),

  computed: {
    checkboxErrors() {
      return !this.$v.checkbox.$dirty ? [] : !this.$v.checkbox.checked ? ['Você deve concordar para continuar!'] : []
    },
    emailErrors() {
      return !this.$v.email.$dirty ? [] : (!this.$v.email.email ? ['Deve ser um e-mail válido'] : (!this.$v.email.required ? ['E-mail é obrigatório'] : []))
    },
    passwordErrors() {
      return !this.$v.password.$dirty ? [] : (!this.$v.password.required ? ['Senha é obrigatória.'] : [])
    },
  },

  methods: {
    async submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        try {
          await this.createAccount();
          this.clear();
        } catch (error) {
          this.error = "Erro ao criar conta: " + error.response.data;
        }
      }
    },
    clear() {
      this.$v.$reset()
      this.email = ''
      this.password = ''
      this.checkbox = false
      this.error = ''
    },
    back() {
      this.$router.push({ path: '/' });
    },
    async createAccount(){
      await this.$store.dispatch("createAccount", {
        email: this.email,
        password: this.password
      });
    },
  },
}
</script>

<style scoped>
</style>
