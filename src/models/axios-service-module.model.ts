export default class AxiosServiceModule {
    resource: string
    resourceAlternative?: string
    methods: {[key: string]: () => Promise<object>}

    constructor (resource: string, methods: {[key: string]: () => Promise<object>}) {
        this.resource = resource
        this.methods = methods
    }
}
