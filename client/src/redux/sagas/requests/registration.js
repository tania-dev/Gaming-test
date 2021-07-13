import axios from "axios";

export const requestRegistration = user => {
    const { name, email, password } = user;
    return axios.post('/api/user/registration', {
    	name,
    	email,
    	password,
    })
}