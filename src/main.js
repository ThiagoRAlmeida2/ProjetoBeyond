import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuetify from "vuetify/lib/framework";
import router from './routes/router'
import "vuetify/dist/vuetify.min"
import {auth, db} from './service/firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import '@mdi/font/css/materialdesignicons.css';
import "firebase/firestore";
import { collection, addDoc, getDocs } from 'firebase/firestore'
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
        async create({commit}, payload) {
            const {email, password} = payload;
            // eslint-disable-next-line no-useless-catch
            try {
                const result = await createUserWithEmailAndPassword(auth, email, password);
                console.log("Usuário criado!", result);
                commit("setUser", result.user);
            } catch (error) {
                throw error;
            }
        },
        async login({commit}, payload) {
            const {email, password} = payload;
            // eslint-disable-next-line no-useless-catch
            try {
                const result = await signInWithEmailAndPassword(auth, email, password);
                console.log("Usuário logado!", result);
                commit("setUser", result.user);
            } catch (error) {
                throw error;
            }
        },
        async saveCommunity({ commit }, payload) {
            try {
                const docRef = await addDoc(collection(db, 'communities'), payload);
                console.log('Document written with ID: ', docRef.id);
                commit('addCommunity', { id: docRef.id, ...payload });
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        },
        async getCommunities({ commit }) {
            try {
                const querySnapshot = await getDocs(collection(db, 'communities'));
                const communities = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                commit('setCommunities', communities);
            } catch (error) {
                console.error('Error fetching communities: ', error);
            }
        },
    }
});

Vue.config.productionTip = false

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App),
}).$mount('#app')
