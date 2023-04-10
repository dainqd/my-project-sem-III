import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    LIST_TRANSACTION: "/api/transactions/list/",
    DETAIL_TRANSACTION: "/api/transactions/detail/",
    //
    ADMIN_LIST_TRANSACTION: "/admin/api/transactions/list",
    ADMIN_DELETE_TRANSACTION: "/admin/api/transactions/",
}
class TransactionService {
    // USER
    detailTransaction = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_TRANSACTION + id, config);
    }
    //
    adminListTransaction = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_TRANSACTION, config);
    }

    adminDeleteTransaction = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DELETE_TRANSACTION + id, config)
    }
}
const transactionService = new TransactionService();
export default transactionService;