import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import Vuetify from '@/plugins/vuetify'
import store from '@/store'
import Color from 'color'

@Module
export default class ThemesStore extends VuexModule {
    /* eslint-disable @typescript-eslint/no-explicit-any */

    currentTheme = {
        name: 'empty'
    }

    loadingTheme = false
    customThemes: any[] = [
        {
            name: 'Default',
            isDark: true,
            colors: {
                primary: '#FF6600',
                secondary: '#112E71',
                third: '#9E9E9E',
                info: '#55A6F8',
                warning: '#FAC900',
                error: '#FF3030',
                success: '#00EE33',
                textColor: '#FFF',
                titleColor: '#FAC900'
            },
            fonts: {
                primary: 'rubik',
                secondary: 'rajdhani'
            }
        }
    ]

    @Mutation
    changeLoadingState (newLoadingTheme: boolean) {
        this.loadingTheme = newLoadingTheme
    }

    @Mutation
    changeTheme (theme: any) {
        this.currentTheme = theme

        if (theme.isDark) {
            Vuetify.framework.theme.themes.dark = theme.colors
            Vuetify.framework.theme.dark = true
        }
        if (!theme.isDark) {
            Vuetify.framework.theme.themes.light = theme.colors
            Vuetify.framework.theme.dark = false
        }
    }

    @Action
    setTheme (themeName: string): Promise<void> {
        return new Promise(resolve => {
            store.commit('changeLoadingState', true)
            setTimeout(() => {
                const foundedTheme = store.state.ThemesStore.customThemes.find((t: any) => t.name === themeName)

                if (foundedTheme) {
                    const finalTheme: {colors: {[key: string]: string}} = foundedTheme

                    for (const colorName in foundedTheme.colors) { // Creates new colors in base a the start palette
                        const color = foundedTheme.colors[colorName]
                        const actualColor = new Color(color)

                        const colorAmount = 5

                        for (let i = 0; i < colorAmount; i++) { // Create 5 colors more lighten than actualColor
                            finalTheme.colors[`${colorName}-lighten-${i + 1}`] = actualColor.lighten(0.1 * (i + 1)).hex()
                        }

                        for (let i = 0; i < colorAmount; i++) { // Create 5 colors more darken than actualColor
                            finalTheme.colors[`${colorName}-darken-${i + 1}`] = actualColor.darken(0.15 * (i + 1)).hex()
                        }
                    }

                    store.commit('changeTheme', finalTheme)
                    store.commit('changeLoadingState', false)
                    resolve()
                }
            }, 1000)
        })
    }
}
