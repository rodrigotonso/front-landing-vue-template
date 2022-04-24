export default class Snackbar {
    message: string;
    color: string;
    positionX?: 'right'|'left'|null;
    positionY?: 'top'|'bottom'|null;
    timeout?: number|false;
    mode?: 'multiline'|'vertical'|null

    constructor (
        message: string,
        color: string,
        params?: {
            positionX?: 'right'|'left';
            positionY?: 'top'|'bottom';
            timeout?: number;
            mode?: 'multiline'|'vertical';
        }) {
        this.message = message
        this.color = color || 'grey darken-4'

        if (params) {
            const { positionX, positionY, timeout, mode } = params
            this.positionX = positionX || null
            this.positionY = positionY || null
            this.timeout = timeout || false
            this.mode = mode || null
        }
    }
}
