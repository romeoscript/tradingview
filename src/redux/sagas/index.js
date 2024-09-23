import { all } from 'redux-saga/effects';
import tokenSaga from './tokenSaga';
import swapTransactionSaga from './fetchSwapTransactionSaga';
import tokenSummarySaga from './tokenSummarySaga';

function* rootSaga() {
  yield all([
    // List of all your saga watchers
    tokenSaga(),
    tokenSummarySaga(),
    // Add more saga watchers here if needed
    swapTransactionSaga(),
  ]);
}

export default rootSaga;