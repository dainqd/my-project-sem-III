import { BASE_URL_SERVER } from "../config/server";
import axios from "axios";

const API_ENDPOINT = {
    LIST_CREDENTIAL: "/api/credential/list",
    LIST_CREDENTIAL_ID: "/api/credential/list/",
    DETAIL_CREDENTIAL: "/api/credential/detail/",
}
class CredentialService {
    listCredential = () => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_CREDENTIAL, config);
    }

    listCredentialById = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.LIST_CREDENTIAL_ID + id, config);
    }

    detailCredential = (id) => {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("accessToken")}`
            }
        };
        console.log(config)
        return axios.get(BASE_URL_SERVER + API_ENDPOINT.DETAIL_CREDENTIAL + id , config);
    }

}
const credentialService = new CredentialService();
export default credentialService;