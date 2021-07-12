import { call, put } from "@redux-saga/core/effects";
import { setCountry } from "../../actions"
import { requestGetCountry } from "../requests/country";

export function* handleGetCountryByName(params) {
    try {
        const response = yield call(requestGetCountry, params.payload);
        const { data } = response;
        const result = {
            country: data
        }
        yield put(setCountry(result))
    } catch(err) {
        console.log(err)
    }
}