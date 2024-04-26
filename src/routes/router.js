import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../pages/Home.vue";
import Chat from "../pages/Chat.vue";
import Favoritos from "../pages/Favoritos.vue";
import Enviados from "../pages/Enviados.vue";

Vue.use(VueRouter);
const routes= [
    {
    path:'/',
    component: Home
    },
    {
    path:'/chat',
    component: Chat
    },
    {
    path: '/favoritos',
    component: Favoritos
    },
    {
    path: '/enviados',
    component: Enviados
    }
]

const router = new VueRouter({
    routes
})

export default router;
