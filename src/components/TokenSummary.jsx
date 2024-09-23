import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTokenSummaryRequest } from "../redux/actions/SummaryAction";
import { svg2img } from "utils/randomAvatar";

const TokenSummary = ({ tokenId, onClose, tokenData }) => {
  const dispatch = useDispatch();
  const tokenSummary = useSelector(
    (state) => state.tokenSummaryReducer.tokenSummary
  );
  const loading = useSelector((state) => state.tokenSummaryReducer.loading);
  const error = useSelector((state) => state.tokenSummaryReducer.error);
  console.log(tokenData, "donee");

  const filteredtokenData = tokenData.filter((item) => item.id === tokenId);


  useEffect(() => {
    if (tokenId) {
      dispatch(fetchTokenSummaryRequest(tokenId));
    }
  }, [tokenId, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!tokenSummary) return null;
  const tableContainerStyle = {
    color: "white",
    width: "60vw",
    position: "absolute",
    right: 0,
    zIndex: 50,
    background: "black",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    border: "1px solid #333",
    textAlign: "left",
  };

  const formatNumberWithCommas = (number) => {
    // Convert to a number if it's not already one
    const num = typeof number === "number" ? number : Number(number);
    
    // If the conversion results in NaN, return the original value
    if (isNaN(num)) return number; 
    
    return num.toLocaleString();
  };
 
  

  return (
    <div className="table-container font-header" style={tableContainerStyle}>
      <button className="close-button" onClick={onClose} style={{color:"red", border:"none", backgroundColor:"black", padding:"2px 10px"}}>
        X
      </button>
      <figure style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div>
          <img
            src={
              filteredtokenData[0].logo
                ? `https://assets.thetatoken.org/tokens/${filteredtokenData[0].logo}`
                : svg2img(filteredtokenData[0])
            }
            style={
              filteredtokenData.logo
                ? { width: "70px", marginRight: "10px", cursor: "pointer" }
                : {
                    width: "70px",
                    marginRight: "10px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }
            }
            r
            alt="token-logo"
          />
          <h6>{tokenSummary.body.name}</h6>
        </div>

        <div>
          <p>
            <strong>Contract Address:</strong>{" "}
            {tokenSummary.body.contract_address}
          </p>
          <p>
            <strong>Decimals:</strong> {tokenSummary.body.decimals}
          </p>
          <p>
            <strong>Total Supply:</strong> {formatNumberWithCommas(tokenSummary.body.max_total_supply)}
          </p>
          <p>
          <strong>Total Transfer:</strong> {formatNumberWithCommas(tokenSummary?.body?.total_transfers) }

          </p>
          <p>
            <strong>holder:</strong> {formatNumberWithCommas(tokenSummary.body.holders)}
          </p>
          <p>
     
          </p>
          <p>
            <strong>Type:</strong> {tokenSummary.body.type}
          </p>
        </div>
      </figure>

      {/* <p><strong>Rising Rate:</strong> {tokenSummary.body.rising_rate}%</p> */}
    </div>
  );
};

export default TokenSummary;
