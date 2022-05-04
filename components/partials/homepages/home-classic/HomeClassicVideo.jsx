import React, { useEffect, useRef } from "react";

const HomeClassicVideo = () => {
  const videoRef = useRef();

  useEffect(() => {
    // console.log(videoRef.current);
    // videoRef.current.volume = 0.5;
    // videoRef.current.play();
  }, []);

  return (
    <header>
      <div className="overlay"></div>
      <video
        className="w-100"
        src="/static/img/banner/home-classic/piles.mp4"
        autoPlay
        muted
        loop
        ref={videoRef}
      ></video>
      <div className="container h-100">
        <div className="d-flex h-100 flex-column align-items-center justify-content-center text-white">
          {/* <h1 className="display-3">Naruto Web</h1>
          <p>Toda la información sobre Naruto Shippuden</p> */}
        </div>
      </div>
    </header>
  );
};

export default HomeClassicVideo;
