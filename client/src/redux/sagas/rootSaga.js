import { takeLatest } from "@redux-saga/core/effects";
import { COUNTRIES } from '../constants'
import { handleGetCountryByName } from "./handlers/country";

export default function* watcherSaga() {
    yield takeLatest(COUNTRIES.LOAD, handleGetCountryByName);
}