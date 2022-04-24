import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import dotenv from 'dotenv'

// Styles
import '@/assets/scss/global.styles.scss'

dotenv.config()

// Global Components
Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
