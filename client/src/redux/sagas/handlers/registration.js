import { call, put } from "@redux-saga/core/effects";
import { registerUserSuccess } from "../../actions";
import { requestRegistration } from "../requests/registration";

export function* handleRegistration(params) {
    try {
        const response = yield call(requestRegistration, params.payload);
        const { data } = response;
        yield put(registerUserSuccess(data));
    } catch(err) {
        console.log(err)
    }
}