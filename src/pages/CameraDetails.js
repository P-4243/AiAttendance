import React from "react";
import { useLocation } from "react-router-dom";
import "./CameraDetails.css";

const CameraDetails = () => {
  const location = useLocation();
  const { videoUrl, cameraId } = location.state || {};

  return (
    <div className="camera-details-container">
      <h1>Camera {cameraId} - Detailed View</h1>
      <video src={videoUrl} controls className="zoomed-video" />
      
    </div>
  );
};

export default CameraDetails;
