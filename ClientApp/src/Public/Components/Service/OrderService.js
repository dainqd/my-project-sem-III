import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    DETAIL_ORDER: "/api/orders/detail/",
    CREATE_ORDER: "/api/orders",
    UPDATE_ORDER: "/api/orders/",
    DELETE_ORDER: "/api/orders/",
    // ADMIN
    ADMIN_LIST_ORDER: "/admin/api/orders/list",
    ADMIN_LIST_ORDER_STATUS: "/admin/api/orders/list/",
    ADMIN_DETAIL_ORDER: "/admin/api/orders/detail/",
    ADMIN_CREATE_ORDER: "/admin/api/orders",
    ADMIN_UPDATE_ORDER: "/admin/api/orders/",
    ADMIN_DELETE_ORDER: "/admin/api/orders/",
}
class OrderService {
    // USER
    detailOrder = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.DETAIL_ORDER + id, config);
    }

    createOrder = (data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.CREATE_ORDER , data, config);
    }

    updateOrder = (id, data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.put(BASE_URL_SERVER + API_ENDPOINT.UPDATE_ORDER + id, data, config);
    }

    deleteOrder = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.DELETE_ORDER + id, config);
    }
    // ADMIN
    adminListOrder = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_ORDER, config);
    }

    adminListOrderStatus = (status) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_ORDER_STATUS + status, config);
    }

    adminDetailOrder = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DETAIL_ORDER + id, config);
    }

    adminCreateOrder = (data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.ADMIN_CREATE_ORDER, data, config);
    }

    adminUpdateOrder = (id, data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.put(BASE_URL_SERVER + API_ENDPOINT.ADMIN_UPDATE_ORDER + id, data, config)
    }

    adminDeleteOrder = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DELETE_ORDER + id, config);
    }
}
const orderService = new OrderService();
export default orderService;