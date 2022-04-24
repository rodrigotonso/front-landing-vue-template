import Vue from 'vue'
import store from '@/store'
import service from '@/services/service'
import VueRouter, { RouteConfig } from 'vue-router'
import publicRoutes from '@/router/public/public'
import VueGtag from 'vue-gtag'

Vue.use(VueRouter)

function mapRoutes () {
    const allRoutes: RouteConfig[] = [
        ...publicRoutes
    ]

    return allRoutes
}

const routes = mapRoutes()

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

Vue.use(VueGtag, {
    config: { id: 'G-GMY4BYFSPH' }
}, router)

service.interceptors.request.use(config => {
    const token = store?.getters?.Token?._token || null
    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
    }
    if (!config.data && config.method !== 'delete') config.data = {}
    return config
})

export default router
