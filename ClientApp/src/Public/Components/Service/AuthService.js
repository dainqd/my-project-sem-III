import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    LOGIN_ACCOUNT: "/api/auth/login",
    REGISTER_ACCOUNT: "/api/auth/register"
}
class AuthService {

    loginAccount = (data) => {
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.LOGIN_ACCOUNT, data);
    }

    registerAccount = (data) => {
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.REGISTER_ACCOUNT, data);
    }
}
const authService = new AuthService();
export default authService;