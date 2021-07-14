import { call, put } from "@redux-saga/core/effects";
import { loginUserSuccess } from "../../actions";
import { requestLogin } from "../requests/login";

export function* handleLogin(params) {
    try {
        const response = yield call(requestLogin, params.payload);
        const { data } = response;
        yield put(loginUserSuccess(data));
    } catch(err) {
        console.log(err)
    }
}