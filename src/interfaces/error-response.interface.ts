export interface ErrorResponse {
    errors?: ErrorResponseMessage[];
    error?: ErrorResponseMessage;
    status: string|number;
    code?: string|number;
    message?: string;
}

export interface ErrorResponseMessage {
    location?: string;
    param?: string;
    msg?: string;
    message?: string;
    error?: ErrorResponseMessage;
    errors?: ErrorResponseMessage[];
}
