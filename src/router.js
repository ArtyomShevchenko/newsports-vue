// import { createRouter, createWebHistory } from "vue-router"

// // Pages
// import AboutUsViews from "./pages/AboutUsViews.vue"

// const routes = [
//     { path: '/', component: AboutUsViews },
// ]

// const router = createRouter({
//     history: createWebHistory(),
//     routes
// })

// export default router

import { createRouter, createWebHistory } from 'vue-router'
import AboutUsViews from "./pages/AboutUsViews.vue"

const routes = [
    {
        path: '/test',
        name: 'Home',
        // component: () => import("./pages/HomePage.vue")
    },
    {
        path: '/about',
        name: 'About',
        component: AboutUsViews,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router