import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    LIST_NOTIFICATION: "/api/notification/list",
    LIST_NOTIFICATION_ID: "/api/notification/list/",
    DETAIL_NOTIFICATION: "/api/notification/detail/",
    DELETE_NOTIFICATION: "/api/notification/",
}
class NotificationService {
    listNotification = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_NOTIFICATION, config);
    }

    listNotificationById = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_NOTIFICATION_ID + id, config);
    }

    detailNotification = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        console.log(config)
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.DETAIL_NOTIFICATION + id , config);
    }

    deleteNotification = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        console.log(config)
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.DELETE_NOTIFICATION + id , config);
    }

}
const notificationService = new NotificationService();
export default notificationService;