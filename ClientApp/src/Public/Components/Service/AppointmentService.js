import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    POST_APPOINTMENT: "/api/appointments",
    // ADMIN
    ADMIN_LIST_APPOINTMENT: "/admin/api/appointments/list",
    ADMIN_LIST_APPOINTMENT_STATUS: "/admin/api/appointments/list/",
    ADMIN_DETAIL_APPOINTMENT: "/admin/api/appointments/detail/",
    ADMIN_UPDATE_APPOINTMENT: "/admin/api/appointments/",
    ADMIN_DELETE_APPOINTMENT: "/admin/api/appointments/",
}
class AppointmentService {
    // USER
    createAppointment = (data) => {
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.POST_APPOINTMENT, data);
    }
    // ADMIN
    adminListAppointment = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_APPOINTMENT, config);
    }

    adminListAppointmentStatus = (status) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_APPOINTMENT_STATUS + status, config);
    }

    adminDetailAppointment = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DETAIL_APPOINTMENT + id, config);
    }

    adminUpdateAppointment = (id, data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.put(BASE_URL_SERVER + API_ENDPOINT.ADMIN_UPDATE_APPOINTMENT + id + "?status="+ data,"", config)
    }

    adminDeleteAppointment = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DELETE_APPOINTMENT + id, config);
    }
}
const appointmentService = new AppointmentService();
export default appointmentService;