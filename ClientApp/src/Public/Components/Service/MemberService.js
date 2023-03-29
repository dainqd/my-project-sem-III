import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    LIST_MEMBER: "/api/members/list",
    DETAIL_MEMBER: "/api/members/detail/",
    // ADMIN
    ADMIN_LIST_MEMBER: "/admin/api/members/list",
    ADMIN_LIST_MEMBER_STATUS: "/admin/api/members/list/",
    ADMIN_DETAIL_MEMBER: "/admin/api/members/detail/",
    ADMIN_POST_MEMBER: "/admin/api/members/",
    ADMIN_UPDATE_MEMBER: "/admin/api/members/",
    ADMIN_DELETE_MEMBER: "/admin/api/members/",
}
class MemberService {
    // USER
    listMember = () => {
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_MEMBER);
    }

    detailMember = (id) => {
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.DETAIL_MEMBER + id);
    }
    // ADMIN
    adminListMember = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_MEMBER, config);
    }

    adminListMemberStatus = (status) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_LIST_MEMBER_STATUS + status, config);
    }

    adminDetailMember = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DETAIL_MEMBER + id, config);
    }

    adminCreateMember = (data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.post(BASE_URL_SERVER + API_ENDPOINT.ADMIN_POST_MEMBER, data, config);
    }

    adminUpdateMember = (id, data) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.put(BASE_URL_SERVER + API_ENDPOINT.ADMIN_UPDATE_MEMBER + id, data, config)
    }

    adminDeleteMember = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.delete(BASE_URL_SERVER + API_ENDPOINT.ADMIN_DELETE_MEMBER + id, config);
    }
}
const memberService = new MemberService();
export default memberService;