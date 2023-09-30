import React, { useState } from "react";

const Cards = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="my-card m-3">
      <div className="card-img">
        {isPlaying ? (
          <video
            controls
            className="card-img-top"
            alt="..."
            autoPlay
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
          >
            <source
              src="https://www.videvo.net/video/raindrops-in-super-slow-motion/3313/" // Replace with your video source URL
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src="https://code.visualstudio.com/assets/docs/nodejs/reactjs/bracket-matching.png"
            className="card-img-top"
            alt="..."
            onClick={() => setIsPlaying(true)}
          />
        )}
      </div>
      <div className="card-text ms-2">
        <div className="d-flex justify-content-between my-2">
          <h5 className="my-2">CareerInCoding</h5>
          <div>
            <span className="ms-3 text-muted">10k</span>
            <span className="btn btn-danger mx-2">Subscriber</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
          repellat ad eligendi assumenda iure, maiores, beatae autem, hic
          laboriosam quas ullam enim perspiciatis qui dolores.
        </p>
        <h6>
          View : <span className="text-secondary">1500</span>
        </h6>
      </div>
    </div>
  );
};

export default Cards;
