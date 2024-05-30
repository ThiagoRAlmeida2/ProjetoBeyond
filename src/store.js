import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        async createAccount({ commit }, userData) {
            try {
                const response = await axios.post('http://localhost:3000/createLogin', userData);
                console.log('Usuário registrado com sucesso:', response.data);
            } catch (error) {
                console.error('Erro ao registrar usuário:', error.response ? error.response.data : error.message);
                throw error;
            }
        }
    },
    modules: {}
});
