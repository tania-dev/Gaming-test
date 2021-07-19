import axios from 'axios';

export function requestGame(data) {
  return axios.request({
    method: 'get',
    url: `/api/game?coins=${data.coins}&userId=${data.userId}`,
  });
}
