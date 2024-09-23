// tokenSummarySaga.js
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_TOKEN_SUMMARY_REQUEST,
  fetchTokenSummarySuccess,
  fetchTokenSummaryFail,
} from "../actions/SummaryAction";

function* fetchTokenSummary(action) {
  try {


    // Extract the dynamic address from the action payload
    const { address } = action.payload;
    // Fetch data from the new dynamic endpoint
    const response = yield axios.get(
      `https://explorer-api.thetatoken.org/api/tokenSummary/${address}`
    );
    const tokenSummary = response.data;

    // Dispatch success action with the fetched data
    yield put(fetchTokenSummarySuccess(tokenSummary));
  } catch (error) {
    // Dispatch fail action with the error message
    yield put(fetchTokenSummaryFail(error.message));
  }
}

// Watcher saga
function* tokenSummarySaga() {
  yield takeLatest(FETCH_TOKEN_SUMMARY_REQUEST, fetchTokenSummary);
}

export default tokenSummarySaga;
