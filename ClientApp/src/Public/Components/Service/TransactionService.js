import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    LIST_TRANSACTION: "/api/transactions/list/",
    DETAIL_TRANSACTION: "/api/transactions/detail/",
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

}
const transactionService = new TransactionService();
export default transactionService;