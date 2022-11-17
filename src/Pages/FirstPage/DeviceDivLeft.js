import React from "react";
import "./DeviceDiv.css";

const DeviceDivImgLeft = ({ textTitle, text, deviceImage }) => {
  return (
    <div>
      <div className="device-div">
        <div className="device-pic">
          <img src={deviceImage} alt="devices" />
        </div>
        <div className="device-desc">
          <h1>{textTitle}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default DeviceDivImgLeft;
