import { call, takeEvery, put } from "redux-saga/effects";
import axios from "axios"
import { sagaActions } from "./sagaActions"
import { initializeCountriesData } from "./countriesReducer";

export function* fetchCountriesSaga() {
    try {
        const result = yield call(axios.get, "https://restcountries.com/v3.1/all")
        const {data} = result
        yield put(initializeCountriesData(data))
    } catch (error) {
        console.log(error)
    }
}

// watcher saga
export default function* rootSaga() {
    yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchCountriesSaga)
}