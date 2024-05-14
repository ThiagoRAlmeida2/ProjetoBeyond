import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from "../pages/Login.vue";
import Chat from "../pages/Chat.vue";
import Post from "../pages/Post.vue";
import Home from "../pages/Home.vue";

Vue.use(VueRouter);
const routes= [
    {
    path:'/',
    component: Login
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
    path: '/home',
    component: Home
    },
]

const router = new VueRouter({
    routes
})

export default router;


