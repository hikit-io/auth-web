import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import '@varlet/touch-emulator'
import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client/core";
import {DefaultApolloClient} from "@vue/apollo-composable";
import { Locale } from '@varlet/ui'

Locale.add('en-US', Locale.enUS)
Locale.use('en-US')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./views/Auth.vue'),
            alias: '/auth'
        },
        {
            path: '/login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/profile',
            component: () => import('./views/Profile.vue')
        }
    ],
})

const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://api.hikit.io/auth/',
    credentials: 'include'
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})


createApp(App)
    .use(router)
    .provide(DefaultApolloClient, apolloClient)
    .mount('#app')
