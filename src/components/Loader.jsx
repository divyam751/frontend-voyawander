import React from "react";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div class="loader"> </div>
      <div className="loader-message">
        <p>
          "Our backend server is on a free Render account, so thanks for your
          patience during initial loading!"
        </p>
      </div>
    </div>
  );
};

export default Loader;
