import { createRouter, createWebHistory } from 'vue-router'

// imports views components
import TeamVue from "./views/TeamVue.vue";
import AboutVue from "./views/AboutVue.vue";
import CompetitionVue from "./views/CompetitionVue.vue";
import ContactVue from "./views/ContactVue.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("./views/HomeVue.vue")
    },
    {
        path: '/team',
        name: 'Team',
        component: TeamVue,
    },
    {
        path: '/competition',
        name: 'Competition',
        component: CompetitionVue,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutVue,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactVue,
    },
    {
        path: '/faqs',
        name: 'Faqs',
        component: null,
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: null,
    },
    {
        path: '/cookies',
        name: 'Cookies',
        component: null,
    },
    // {
    //     path: '/error',
    //     name: 'Error',
    //     component: () => import("./views/ErrorVue.vue")
    // },
    { path: '/:pathMatch(.*)', component: () => import("./views/ErrorVue.vue") },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router