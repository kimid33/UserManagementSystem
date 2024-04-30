export class ApiRoute{
    private static baseUrl = 'http://localhost:8080/';

    public static SIGN_IN = ApiRoute.baseUrl+'api/v1/auth/login'
    public static LIST_OF_WORKER = ApiRoute.baseUrl+'api/v1/auth/getWorker'
    public static LIST_OF_SUPERVISOR = ApiRoute.baseUrl+'api/v1/auth/getSupervisor'
    public static REGISTERATION = ApiRoute.baseUrl+'api/v1/auth/register'
    public static DELETE_WORKER = ApiRoute.baseUrl + 'api/v1/auth/worker'
    public static DELETE_SUPERVISOR = ApiRoute.baseUrl + 'api/v1/auth/supervisor'
    public static UPDATE_WORKER = ApiRoute.baseUrl + 'api/v1/auth/worker'
    public static UPDATE_SUPERVISOR = ApiRoute.baseUrl + 'api/v1/auth/supervisor'

}