import axios from "axios";

export function requestGetCountry(countryName, token) {
    return axios.request({
        method: "get",
        url: `/api/country/${countryName}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
    })
}