<template>
  <div class="about">
    <v-card class="mx-auto" max-width="500">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="email" label="Email" required></v-text-field>
          <v-text-field
              v-model="password"
              label="Password"
              type="password"
              required
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue" @click="create"> Criar Conta</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="blue" @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email: "",
      password: "",
    };
  },
  methods:{
    login(){
      this.$store.dispatch("login",{
        email:this.email,
        password:this.password
      });
      this.$router.push('/home');
    },
    create(){
      this.$store.dispatch("create", {
        email:this.email,
        password:this.password
      });
    }
  }
}
</script>
