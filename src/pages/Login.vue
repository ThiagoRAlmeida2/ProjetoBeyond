<!-- LoginPage.vue -->
<template>
  <div class="login-container">
    <div class="login-box">
      <h1>Entrar</h1>
      <form @submit.prevent="login">
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
        <button type="submit" class="login-button">Entrar</button>
      </form>
      <div class="additional-options">
        <a href="#">Esqueceu a senha?</a>
        <a href="#">Criar conta</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = () => {

  console.log('Tentativa de login:', { email: email.value, password: password.value });

};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #383D70;
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
</style>
