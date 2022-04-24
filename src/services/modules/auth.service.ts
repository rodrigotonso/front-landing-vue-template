import service from '@/services/service'

export class AuthServices {
    public static testService () {
        return service.get('/name-services/service/service-name')
    }
}
