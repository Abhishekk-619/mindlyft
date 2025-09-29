import React from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  className?: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc, className }) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ filter: 'brightness(0.6)' }} // Darken the video slightly
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};