import axios from "axios";

export function requestGame(coins) {
    return axios.request({
        method: "get",
        url: `/api/game?coins=${coins}`
    })
}