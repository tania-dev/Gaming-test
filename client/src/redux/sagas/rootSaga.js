import { takeLatest } from "@redux-saga/core/effects";
import { COUNTRIES, USER } from '../constants'
import { handleGetCountryByName } from "./handlers/country";
import { handleRegistration } from "./handlers/registration";

export default function* watcherSaga() {
    yield takeLatest(COUNTRIES.LOAD, handleGetCountryByName);
    yield takeLatest(USER.REGISTER_REQUEST, handleRegistration);
}