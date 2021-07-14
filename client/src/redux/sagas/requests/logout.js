import axios from "axios";

export const requestLogout = () => {
    return axios.get('/api/user/logout')
}