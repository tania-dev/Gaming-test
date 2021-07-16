import { call, put } from "@redux-saga/core/effects";
import { setCoins } from "../../actions";
import { requestGame } from "../requests/game";

export function* handleGame(params) {
    try {
        const response = yield call(requestGame, params.payload);
        const { data } = response;
        console.log(data)
        const result = {
            country: data
        }
        yield put(setCoins(result))
    } catch(err) {
        console.log(err)
    }
}