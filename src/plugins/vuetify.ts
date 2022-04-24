import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        dark: true,
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: '#ee44aa',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                third: '#ff0000'
            },
            dark: {
                primary: '#0068ef',
                background: '#202020',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF2020',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                third: '#ff0000'
            }
        }
    },
    icons: {
        iconfont: 'mdi'
    }
})
