<template>
  <div class="login-container">
    <div class="login-box">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form>
          <div class="form-group">
            <v-text-field v-model="email" label="Email" required></v-text-field>
            <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
            ></v-text-field>
          </div>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <router-link to="/createLogin">
          <v-btn color="blue">Criar Conta</v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <v-btn color="blue" @click="login">Login</v-btn>
      </v-card-actions>
    </div>
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
        });this.$router.push('/home');
    },
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #212179;
}


.login-box {
  background-color: white;
  padding: 2em;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
}

.form-group {
  margin-bottom: 1em;
}

</style>