export class Stepper {
    id: number;
    name: string;
    status: 'active'|'complete'|'incomplete';

    constructor (params: {
        id: number;
        name: string;
        status: 'active'|'complete'|'incomplete';
    }) {
        this.id = params.id
        this.name = params.name
        this.status = params.status
    }
}
