import { call, put } from '@redux-saga/core/effects';
import { setCoins } from '../../actions';
import { requestGame } from '../requests/game';

export function* handleGame(params) {
  try {
    const response = yield call(requestGame, params.payload);
    const { data } = response;
    const result = {
      items: data.items,
      coins: data.coins,
      msg: data.msg,
      rewards: data.rewards,
    };
    yield put(setCoins(result));
    let user = JSON.parse(localStorage.getItem('user'));
    user.coins = result.coins;
    localStorage.setItem('user', JSON.stringify(user));
  } catch (err) {
    console.log(err);
  }
}
