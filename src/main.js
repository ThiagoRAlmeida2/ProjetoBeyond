import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuetify from "vuetify/lib/framework";
import router from './routes/router'
import "vuetify/dist/vuetify.min"
import { auth } from './service/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

Vue.use(Vuex)
Vue.use(Vuetify)

const store = new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        async create({ commit }, payload) {
            const { email, password } = payload;
            // eslint-disable-next-line no-useless-catch
            try {
                const result = await createUserWithEmailAndPassword(auth, email, password);
                console.log("Usuário criado!", result);
                commit("setUser", result.user); // Adiciona o usuário ao estado após criação
            } catch (error) {
                throw error; // Lança o erro para ser tratado no componente
            }
        },
        async login({ commit }, payload) {
            const { email, password } = payload;
            // eslint-disable-next-line no-useless-catch
            try {
                const result = await signInWithEmailAndPassword(auth, email, password);
                console.log("Usuário logado!", result);
                commit("setUser", result.user);
            } catch (error) {
                throw error; // Lança o erro para ser tratado no componente
            }
        },
    }
});
Vue.config.productionTip = false

new vue({
    vuetify,
    store,
    router,
    render: h => h(App),
}).$mount('#app')