import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    //
    LIST_CUSTOMER: "/api/customers/list",
    DETAIL_CUSTOMER: "/api/customers/detail/",
    //
    ADMIN_LIST_CUSTOMER: "/admin/api/customers/list",
    ADMIN_LIST_STATUS_CUSTOMER: "/admin/api/customers/list/",
    ADMIN_DETAIL_CUSTOMER: "/admin/api/customers/detail/",
    ADMIN_CREATE_CUSTOMER: "/admin/api/customers",
    ADMIN_UPDATE_CUSTOMER: "/admin/api/customers/",
    ADMIN_DELETE_CUSTOMER: "/admin/api/customers/",
}
class CustomerService {
    //
    listCustomer = () => {
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_CUSTOMER);
    }

    detailCustomer = (id) => {
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.DETAIL_CUSTOMER + id);
    }

    //
    adminListCustomer = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_CUSTOMER, config);
    }

    adminDetailCustomer = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DETAIL_CUSTOMER + id, config);
    }

    adminListStatusCustomer = (data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_STATUS_CUSTOMER + data, config);
    }

    adminCreateCustomer = (data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.ADMIN_CREATE_CUSTOMER, data, config);
    }

    adminUpdateCustomer = (id, data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.put(BASE_URL_SERVER + API_ENDPOINT.ADMIN_UPDATE_CUSTOMER + id, data, config);
    }

    adminDeleteCustomer = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DELETE_CUSTOMER + id, config);
    }
}
const customerService = new CustomerService();
export default customerService;