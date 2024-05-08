import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "../pages/Home.vue";
import Chat from "../pages/Chat.vue";
import Post from "../pages/Post.vue";
import Login from "../pages/Login.vue";

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
    path: '/post',
    component: Post
    },
    {
        path: '/login',
        component: Login
    },
]

const router = new VueRouter({
    routes
})

export default router;


