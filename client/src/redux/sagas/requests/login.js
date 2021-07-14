import axios from "axios";

export const requestLogin = user => {
    const { email, password } = user;
    return axios.post('/api/user/login', {
    	email,
    	password,
    })
}