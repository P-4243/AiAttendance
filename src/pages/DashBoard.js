import React from "react";
import { useNavigate } from "react-router-dom";
import "./DashBoard.css";

const DashBoard = () => {
  const navigate = useNavigate();
  const videoData = [
    { video: "camera1.mp4", p: "Camera 1", id: 1 },
    { video: "camera2.mp4", p: "Camera 2", id: 2 },
    { video: "camera3.mp4", p: "Camera 3", id: 3 },
    { video: "camera4.mp4", p: "Camera 4", id: 4 },
    { video: "camera1.mp4", p: "Camera 5", id: 5 },
    { video: "camera2.mp4", p: "Camera 6", id: 6 },
    { video: "camera3.mp4", p: "Camera 7", id: 7 },
    { video: "camera4.mp4", p: "Camera 8", id: 8 },
  ];

  
  const handleVideoClick = (video, id) => {
    navigate(`/camera-details/${id}`, { state: { videoUrl: video, cameraId: id } });
  };

  return (<div>
    
    <div style={{display:"flex",justifyContent:"space-around",fontWeight:"500",backgroundColor:"#0095ff",fontSize:"1vw",borderRadius:"1vw",margin:"1vw 0vw"}}>
    <p>Id : 1002345</p>
    <p>Center Name : ABCD University</p>
    <p>Id :1002345</p>
    </div>
    <div id="video-box">
         
      {videoData.map((camera) => (
        <div
          key={camera.id}
          onClick={() => handleVideoClick(camera.video, camera.id)}
          className="video-item"
        >
          <video className="parallelogram" src={camera.video} alt={camera.p} controls />
          <p>{camera.p}</p>
        </div>
       
      ))}
    </div>
    </div>
  );
};

export default DashBoard;
