import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <>
      <div className="loader-main">
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
