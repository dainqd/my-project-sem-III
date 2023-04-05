import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    POST_FEEDBACK: "/api/feedbacks",
    // ADMIN
    LIST_FEEDBACK: "/admin/api/feedbacks/list",
    LIST_FEEDBACK_STATUS: "/admin/api/feedbacks/list/",
    DETAIL_FEEDBACK: "/admin/api/feedbacks/detail/",
    UPDATE_FEEDBACK: "/admin/api/feedbacks/",
    DELETE_FEEDBACK: "/admin/api/feedbacks/",
}
class ContactService {
    //
    sendFeedback = (data) => {
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.POST_FEEDBACK, data);
    }
    // ADMIN
    listFeedback = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_FEEDBACK, config);
    }

    listFeedbackStatus = (status) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_FEEDBACK + status, config);
    }

    updateFeedback = (id, data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        console.log(config)
        return axios.put(BASE_URL_SERVER + API_ENDPOINT.UPDATE_FEEDBACK + id +"?status="+ data,"", config);
    }

    detailFeedback = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.DETAIL_FEEDBACK + id, config)
    }

    deleteFeedback = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.DELETE_FEEDBACK + id, config);
    }
}
const contactService = new ContactService();
export default contactService;