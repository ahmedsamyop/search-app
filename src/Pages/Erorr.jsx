import React from "react";
import "../Style/Css/erorrPage.css";
import { NavLink } from "react-router-dom";
function Erorr() {
  return (
    <div className="erorr-page">
      <div className="container">
        <div className="code">404</div>
        <div className="massage">not found this page </div>
        <NavLink to={"/"} className="go-home">
          Go Home
        </NavLink>
      </div>
    </div>
  );
}

export default Erorr;
