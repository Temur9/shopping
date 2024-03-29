import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loading_container">
        <div className="movie--isloading">
          <div className="loading-image"></div>
          <div className="loading-content">
            <div className="loading-text-container">
              <div className="loading-main-text"></div>
              <div className="loading-sub-text"></div>
            </div>
            <div className="loading-btn"></div>
          </div>
        </div>
        <div className="movie--isloading">
          <div className="loading-image"></div>
          <div className="loading-content">
            <div className="loading-text-container">
              <div className="loading-main-text"></div>
              <div className="loading-sub-text"></div>
            </div>
            <div className="loading-btn"></div>
          </div>
        </div>
        <div className="movie--isloading">
          <div className="loading-image"></div>
          <div className="loading-content">
            <div className="loading-text-container">
              <div className="loading-main-text"></div>
              <div className="loading-sub-text"></div>
            </div>
            <div className="loading-btn"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
