import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    //
    LIST_ID_PAYMENT: "/api/payment/list/",
    DETAIL_PAYMENT: "/api/payment/detail/",
    CREATE_PAYMENT: "/api/payment",
    PAYMENT_METHOD: "/api/payment/pay/",
    UPDATE_PAYMENT: "/api/payment/",
    DELETE_PAYMENT: "/api/payment/",
    //
    ADMIN_LIST_PAYMENT: "/admin/api/payment/list",
    ADMIN_LIST_STATUS_PAYMENT: "/admin/api/payment/list/",
    ADMIN_DETAIL_PAYMENT: "/admin/api/payment/detail/",
    ADMIN_CREATE_PAYMENT: "/admin/api/payment",
    ADMIN_UPDATE_PAYMENT: "/admin/api/payment/",
    ADMIN_DELETE_PAYMENT: "/admin/api/payment/",
}
class PaymentService {

    listPayment = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_ID_PAYMENT + id, config);
    }

    detailPayment = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.DETAIL_PAYMENT + id, config);
    }

    createPayment = ( data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.CREATE_PAYMENT, data, config);
    }

    payPayment = (id, data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.PAYMENT_METHOD + id, data, config);
    }

    updatePayment = (id, data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.put(BASE_URL_SERVER + API_ENDPOINT.UPDATE_PAYMENT + id, data,config)
    }

    deletePayment = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.DELETE_PAYMENT + id, config)
    }
    // // ADMIN
    adminListPayment = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_PAYMENT, config);
    }
    //
    // adminListStatusAccount = (data) => {
    //     const config = {
    //         headers: {
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
    //         }
    //     };
    //     return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_STATUS_ACCOUNT + data, config);
    // }
    //
    // adminDetailAccount = (id) => {
    //     const config = {
    //         headers: {
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
    //         }
    //     };
    //     return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DETAIL_ACCOUNT + id, config)
    // }
    //
    // adminCreateAccount = (data) => {
    //     const config = {
    //         headers: {
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
    //         }
    //     };
    //     return axios.post(BASE_URL_SERVER + API_ENDPOINT.ADMIN_CREATE_ACCOUNT ,data, config);
    // }
    //
    // adminUpdateAccount = (id, data) => {
    //     const config = {
    //         headers: {
    //             'content-type': 'application/json',
    //             'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
    //         }
    //     };
    //     return axios.put(BASE_URL_SERVER + API_ENDPOINT.ADMIN_UPDATE_ACCOUNT + id, data, config);
    // }
    //
    adminDeletePayment = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DELETE_PAYMENT + id, config)
    }

}
const paymentService = new PaymentService();
export default paymentService;