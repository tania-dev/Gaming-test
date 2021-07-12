import axios from "axios";

export function requestGetCountry(countryName) {
    return axios.request({
        method: "get",
        url: `/api/country/${countryName}`
    })
}