import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { checkImg, formatNumber } from "../../utils/funcs";
import { svg2img } from "../../utils/randomAvatar";
import { green } from "@mui/material/colors";
import { removeW } from "../../utils/funcs";
import "./style.css";

const TokenRow = ({ data, onTokenClick }) => {
  const [imageExists, setImageExists] = useState(false);
  const handleImageClick = () => {
    if (data.id) {
      onTokenClick(data.id);
    }
  };
  console.log(data,'fuckedisisisis')
  return (
    <tr>
      <td
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-center",
          paddingTop: "20px",
          paddingBottom: "0px",
          borderCollapse: "collapse",
          borderColor: "black",
          paddingLeft: "80px",
          alignItems: "center",
        }}
        className="token-header"
      >
        <img
          src={
            data.logo
              ? `https://assets.thetatoken.org/tokens/${data.logo}`
              : svg2img(data)
          }
          style={
            data.logo
              ? { width: "20px", marginRight: "10px", cursor: "pointer" }
              : {
                  width: "20px",
                  marginRight: "10px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }
          }
          onClick={handleImageClick} // Add click handler
          alt="token-logo"
        />
        <div className="font-header" style={{ marginRight: "3px" }}>
          {removeW(data.symbol)}
        </div>

        <span
          className="font-regular"
          style={{
            fontSize: "small",
            color: "#449782",
          }}
        >
          {"+" +
            (data.tradeVolumeETH * 1
              ? (
                  ((data.volume24HrsETH * 1) / (data.tradeVolumeETH * 1)) *
                  100
                ).toFixed(2)
              : "0") +
            "%"}
        </span>
      </td>
      <td style={{ textAlign: "start" }} className="font-regular">
        {"$" + data.derivedUSD}
      </td>
      <td style={{ textAlign: "start" }} className="font-regular">
        ${formatNumber(data.tradeVolumeUSD * 1)}
      </td>
      <td style={{ textAlign: "start" }} className="font-regular">
        {"$" + formatNumber(data.totalLiquidityUSD * 1)}
      </td>
      <td style={{ textAlign: "start" }} className="font-regular">
        {"$" + formatNumber(data.tradeVolume * 1)}
      </td>
      <td
        style={{ textAlign: "start", paddingRight: "80px" }}
        className="font-regular"
      >
        {"2yr 3mon"}
      </td>
    </tr>
  );
};

export default TokenRow;
