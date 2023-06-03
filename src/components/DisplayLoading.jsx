import React from "react";
import ErorrFetch from "../Pages/ErorrFetch";
import Loading from "../Pages/Loading";
function DisplayLoading({ isloaded, isErorr, children }) {
  return (
    <>
      {isloaded ? (
        isErorr ? (
          <ErorrFetch erorr={isErorr} />
        ) : (
          children
        )
      ) : (
        <Loading />
      )}
    </>
  );
}
export default DisplayLoading;
