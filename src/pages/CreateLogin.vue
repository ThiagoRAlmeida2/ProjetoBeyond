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
            v-model="Lastname"
            :error-messages="lastNameErrors"
            :counter="10"
            label="Last name"
            required
            @input="$v.Lastname.$touch()"
            @blur="$v.Lastname.$touch()"
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
            v-model="Password"
            :error-messages="passwordError"
            label="Password"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
        ></v-text-field>
        <v-text-field
            v-model="Password"
            :error-messages="passwordError"
            label="Confirm your Password"
            required
            @input="$v.Confirmpassword.$touch()"
            @blur="$v.Confimrpassword.$touch()"
        ></v-text-field>
        <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="You accept the terms of conditions"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
        ></v-checkbox>

        <v-btn
            class="mr-4"
            @click="submit"
        >
          Submit
        </v-btn>
        <v-btn
            class="mr-4"
            @click="clear">
          clear
        </v-btn>
        <v-btn @click="back">
          Back
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {required, maxLength, email, sameAs} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    password: { required },
    confirmPassword: { required, sameAsPassword: sameAs('password') },
    select: { required },
    checkbox: {
      checked (val) {
        return val
      },
    },
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    submit() {
      this.$v.$touch()
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
    back() {
      this.$router.push({ path: '/' });
    }
  },
}
</script>

<style scoped>
</style>
