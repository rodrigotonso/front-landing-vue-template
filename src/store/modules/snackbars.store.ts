import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import Snackbar from '@/models/snackbar.model'
import { ErrorResponseMessage, ErrorResponse } from '@/interfaces/error-response.interface'

@Module
export default class SnackbarsStore extends VuexModule {
    snackbars: Snackbar[] = []

    @Mutation
    addMessage (newMessage: Snackbar) {
        this.snackbars.push(newMessage)
    }

    @Mutation
    reportError (newErrors: ErrorResponse) {
        if (newErrors.errors) {
            if (!Array.isArray(newErrors.errors)) {
                const newMessage = new Snackbar('Error message not found :(', 'error')
                this.snackbars.push(newMessage)
                return
            }
            newErrors.errors.forEach((error: ErrorResponseMessage) => {
                const newMessage = new Snackbar(error?.msg || 'Error message not found :(', 'error')
                this.snackbars.push(newMessage)
            })
        } else if (newErrors.error?.error) {
            const newMessage = new Snackbar(newErrors?.error?.error?.message || 'Error message not found :(', 'error')
            this.snackbars.push(newMessage)
        } else if (newErrors.error?.errors) {
            newErrors.error.errors.forEach((error: ErrorResponseMessage) => {
                const newMessage = new Snackbar(error?.msg || 'Error message not found :(', 'error')
                this.snackbars.push(newMessage)
            })
        } else if (newErrors.error?.message) {
            const newMessage = new Snackbar(newErrors?.error?.message || 'Error message not found :(', 'error')
            this.snackbars.push(newMessage)
        } else if (newErrors.code) {
            const newMessage = new Snackbar(newErrors.message || 'Error message not found :(', 'error')
            this.snackbars.push(newMessage)
        } else if (!newErrors.error && !newErrors.errors) {
            const newMessage = new Snackbar('Error message not found :(', 'error')
            this.snackbars.push(newMessage)
        }
    }

    @Mutation
    reportSuccess (newSuccess: string) {
        const newMessage = new Snackbar(newSuccess, 'success')
        this.snackbars.push(newMessage)
    }

    @Mutation
    reportWarning (newSuccess: string) {
        const newMessage = new Snackbar(newSuccess, 'warning')
        this.snackbars.push(newMessage)
    }

    @Mutation
    removeLastMessage () {
        this.snackbars.shift()
    }
}
