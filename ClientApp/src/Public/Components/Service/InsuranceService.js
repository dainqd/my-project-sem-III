import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    LIST_INSURANCE: "/api/insurances/list",
    DETAIL_INSURANCE: "/api/insurances/detail/",
    // ADMIN
    ADMIN_LIST_INSURANCE: "/admin/api/insurances/list",
    ADMIN_LIST_INSURANCE_STATUS: "/admin/api/insurances/list/",
    ADMIN_DETAIL_INSURANCE: "/admin/api/insurances/detail/",
    ADMIN_POST_INSURANCE: "/admin/api/insurances/",
    ADMIN_UPDATE_INSURANCE: "/admin/api/insurances/",
    ADMIN_DELETE_INSURANCE: "/admin/api/insurances/",
}
class InsuranceStatus {
    // USER
    listInsurance = () => {
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.LIST_INSURANCE);
    }

    detailInsurance = (id) => {
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.DETAIL_INSURANCE + id);
    }
    // ADMIN
    adminListInsurance = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_INSURANCE, config);
    }

    adminListInsuranceStatus = (status) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_INSURANCE_STATUS + status, config);
    }

    adminDetailInsurance = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DETAIL_INSURANCE + id, config);
    }

    adminCreateInsurance = (data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.put(BASE_URL_SERVER + API_ENDPOINT.ADMIN_POST_INSURANCE, data, config);
    }

    adminUpdateInsurance = (id, data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_UPDATE_INSURANCE + id, data, config)
    }

    adminDeleteInsurance = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DELETE_INSURANCE + id, config);
    }
}
const insuranceStatus = new InsuranceStatus();
export default insuranceStatus;