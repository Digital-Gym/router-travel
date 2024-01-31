import {createRouter, createWebHistory} from "vue-router"

import Home from "../views/Home.vue"

const routes = [
    {path: "/", name: "Home", component: Home},
    {
        path: "/destination/:id/:slug",
        name: "destination.show",
        component: () => import('../views/DestinationShow.vue'),
        props: true,
        children: [
            {
                path: ":experienceSlug",
                name: "experience.show",
                component: () => import('../views/ExperienceShow.vue'),
                props: true
            }
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Not Found",
        component: () => import('../views/404.vue')
    },
    {
        path: "/admin-panel",
        name: "protected",
        component: () => import("../views/Protected.vue"),
        meta:{
            requiresAuth: true
        }
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/invoices",
        name: 'invoices',
        component: () => import("../views/Invoices.vue"),
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition){
        return savedPosition || new Promise((resolve) =>{
            setTimeout(() => resolve({top:0}), 500);
        })
    }
})

router.beforeEach((to, from)=>{
    if (to.meta.requiresAuth && !window.user){
        return {name: 'login', query: {queryPath: to.fullPath}}
    }
})

export default router