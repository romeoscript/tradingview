import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import swapTransactionReducer from './fetchSwapTransactionReducer';
import tokenSummaryReducer from './tokenSummaryReducer';

const rootReducer = combineReducers({
  tokenReducer, // Add your reducers here
  swapTransactionReducer,
  tokenSummaryReducer
});

export default rootReducer;