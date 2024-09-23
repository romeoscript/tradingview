export const FETCH_TOKEN_SUMMARY_REQUEST = "FETCH_TOKEN_SUMMARY_REQUEST";
export const FETCH_TOKEN_SUMMARY_SUCCESS = "FETCH_TOKEN_SUMMARY_SUCCESS";
export const FETCH_TOKEN_SUMMARY_FAIL = "FETCH_TOKEN_SUMMARY_FAIL";

export const fetchTokenSummaryRequest = (address) => ({
  type: FETCH_TOKEN_SUMMARY_REQUEST,
  payload: { address },
});

export const fetchTokenSummarySuccess = (data) => ({
  type: FETCH_TOKEN_SUMMARY_SUCCESS,
  payload: data,
});

export const fetchTokenSummaryFail = (error) => ({
  type: FETCH_TOKEN_SUMMARY_FAIL,
  payload: error,
});
