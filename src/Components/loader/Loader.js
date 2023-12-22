import React from "react";
import "./loaderStyle.css";
import ReactLoading from "react-loading";

export const Loader = () => {
  return (
    <>
      <div className="loaderContainer">
        <ReactLoading
          type={"spinningBubbles"}
          color={"black"}
          height={48}
          width={48}
        />
        <div className="msgStyle">Server is responding...</div>
      </div>
    </>
  );
};
