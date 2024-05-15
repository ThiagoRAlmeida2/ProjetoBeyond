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
        // eslint-disable-next-line no-unused-vars
        async create({ commit }, payload) {
            const {email, password } = payload;
            try {
                // eslint-disable-next-line no-undef
                const result = await createUserWithEmailAndPassword(auth, email, password);
                console.log("Usuário criado!", result);
            } catch (error) {
                alert(error);
            }
        },
        // eslint-disable-next-line no-undef
        async login({ commit }, payload) {
            const { email, password } = payload;
            try {
                // eslint-disable-next-line no-undef
                const result = await signInWithEmailAndPassword(auth, email, password);
                console.log("Usuário logado!", result);
                commit("setUser", result.user);
            } catch (error) {
                alert(error);
            }
        },
    },
});
Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App),
}).$mount('#app')