<template>
  <div class="login-container">
    <div class="login-box">
      <h1>
        Entrar
        <img src="@/assets/beyond_coo_logo.jpeg" alt="Ícone de Entrar" class="login-icon">
      </h1>
      <form>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
              type="email"
              id="email"
              v-model="email"
              required
              placeholder="Digite seu e-mail"
          />
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <input
              type="password"
              id="password"
              v-model="password"
              required
              placeholder="Digite sua senha"
          />
        </div>
        <button type="button" class="login-button" @click="login">Entrar</button>
      </form>
      <div class="additional-options">
        <a href="#">Esqueceu a senha?</a>
        <router-link to="/createLogin">
          <a href="#">Criar conta</a>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/service/firebase';

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async login() {
      await this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
      onAuthStateChanged(auth, (user) => {
        if (user) {
          if (this.$route.path !== '/home') {
            this.$router.push({ path: '/home' });
          }
        } else {
          if (this.$route.path !== '/') {
            this.$router.push({ path: '/' });
          }
        }
      });
    },
  },
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


input {
  width: 100%;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
}


.login-button {
  background-color: #4285f4;
  color: white;
  padding: 0.7em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}


.login-button:hover {
  background-color: #357ae8;
}


.additional-options {
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
}


a {
  color: #4285f4;
  text-decoration: none;
}


a:hover {
  text-decoration: underline;
}


.login-icon {
  width: 40px;
  height: auto;
  margin-left: 0.5em;
  vertical-align: middle;
}
</style>

