import React from "react";
import "../Style/Css/erorrFetch.css";
function ErorrFetch({ erorr }) {
  return (
    <div className="erorr-fetch">
      <div className="container">
        <div className="erorr-code">{erorr.code}</div>
        <div className="erorr-massage">{erorr.message}</div>
      </div>
    </div>
  );
}

export default ErorrFetch;
