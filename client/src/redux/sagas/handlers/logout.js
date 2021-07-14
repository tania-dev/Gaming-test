import { call } from "@redux-saga/core/effects";
import { requestLogout } from "../requests/logout";

export function* handleLogout() {
    try {
        yield call(requestLogout);
    } catch(err) {
        console.log(err)
    }
}