import React from "react";
import "../Style/Css/loading.css";
import { Triangle, Rings } from "react-loader-spinner";

function Loading() {
  return (
    <div className="loading">
      <div className="container">
        <Triangle
          height="200"
          width="200"
          color="#004aad"
          ariaLabel="triangle-loading"
        />
        <Rings
          height="80"
          width="80"
          color="#004aad"
          ariaLabel="bars-loading"
          wrapperClass="wrap-puff"
        />
      </div>
    </div>
  );
}

export default Loading;
