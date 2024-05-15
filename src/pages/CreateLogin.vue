<template>
  <v-row style="height: 100vh; background-color: #212179;">

    <!-- Divisão -->
    <v-col cols="6">
      <v-divider vertical></v-divider>
    </v-col>

    <v-col cols="6">
      <v-card
          elevation="5"
          class="container"
          width="50%"
          height="100%"
          style="margin-right: 0; position: relative;"
      >
        <h2
            style="color: black;"
            align="center"
        >
          Create Your Account
        </h2>
        <!-- Conteúdo do cartão -->
        <v-form @submit.prevent="submit">
          <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="10"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
              v-model="lastName"
              :error-messages="lastNameErrors"
              :counter="10"
              label="Last name"
              required
              @input="$v.lastName.$touch()"
              @blur="$v.lastName.$touch()"
          ></v-text-field>
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
              label="Password"
              type="password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
          ></v-text-field>
          <v-text-field
              v-model="confirmPassword"
              :error-messages="confirmPasswordErrors"
              label="Confirm your Password"
              type="password"
              required
              @input="$v.confirmPassword.$touch()"
              @blur="$v.confirmPassword.$touch()"
          ></v-text-field>
          <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="You accept the terms of conditions"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
          ></v-checkbox>

          <v-btn type="submit" class="mr-4" @click="create" style="margin-bottom: 10px;">Create Account</v-btn>
          <v-btn class="mr-4" @click="clear">Clear</v-btn>
          <v-btn @click="back">Back</v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    lastName: { required, maxLength: maxLength(10) },
    email: { required, email },
    password: { required },
    confirmPassword: { required, sameAsPassword: sameAs('password') },
    select: { required },
    checkbox: { checked: val => val },
  },

  data: () => ({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    select: null,
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      return !this.$v.checkbox.$dirty ? [] : !this.$v.checkbox.checked ? ['You must agree to continue!'] : []
    },
    nameErrors() {
      return !this.$v.name.$dirty ? [] : (!this.$v.name.maxLength ? ['Name must be at most 10 characters long'] : (!this.$v.name.required ? ['Name is required.'] : []))
    },
    lastNameErrors() {
      return !this.$v.lastName.$dirty ? [] : (!this.$v.lastName.maxLength ? ['Last name must be at most 10 characters long'] : (!this.$v.lastName.required ? ['Last name is required.'] : []))
    },
    emailErrors() {
      return !this.$v.email.$dirty ? [] : (!this.$v.email.email ? ['Must be valid e-mail'] : (!this.$v.email.required ? ['E-mail is required'] : []))
    },
    passwordErrors() {
      return !this.$v.password.$dirty ? [] : (!this.$v.password.required ? ['Password is required.'] : [])
    },
    confirmPasswordErrors() {
      return !this.$v.confirmPassword.$dirty ? [] : (!this.$v.confirmPassword.required ? ['Confirm password is required.'] : (!this.$v.confirmPassword.sameAsPassword ? ['Passwords do not match.'] : []))
    },
  },

  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch("create", {
          email: this.email,
          password: this.password,
          name: this.name,
          lastName: this.lastName,
        });
      }
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.lastName = ''
      this.email = ''
      this.password = ''
      this.confirmPassword = ''
      this.select = null
      this.checkbox = false
    },
    back() {
      this.$router.push({ path: '/' });
    },
    create(){
      this.$store.dispatch("create", {
        nome: this.nome,
        sobrenome: this.sobrenome,
        email:this.email,
        password:this.password,
        password_confirmation: this.password,
      });
    },
  },
}
</script>

<style scoped>
</style>
