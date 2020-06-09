import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loading">
      <img
        src="https://i.imgur.com/Fq8xqGf.gif"
        alt="loading"
        className="loading_icon"
      />
    </div>
  );
};

export default Loader;
