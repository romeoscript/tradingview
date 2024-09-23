import {
    FETCH_TOKEN_SUMMARY_REQUEST,
    FETCH_TOKEN_SUMMARY_SUCCESS,
    FETCH_TOKEN_SUMMARY_FAIL,
  } from "../actions/SummaryAction";
  
  const initialState = {
    loading: false,
    tokenSummary: null,
    error: null,
  };
  
  const tokenSummaryReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TOKEN_SUMMARY_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_TOKEN_SUMMARY_SUCCESS:
        return {
          ...state,
          loading: false,
          tokenSummary: action.payload,
        };
      case FETCH_TOKEN_SUMMARY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default tokenSummaryReducer;
  