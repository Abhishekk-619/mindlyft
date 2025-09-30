import React from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  className?: string;
  opacity?: number;
  zIndex?: number;
  brightness?: number;
  poster?: string;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoSrc, 
  className,
  opacity = 1,
  zIndex = -1,
  brightness = 0.6,
  poster
}) => {
  return (
    <div 
      className={`fixed inset-0 w-full h-full overflow-hidden ${className}`}
      style={{ zIndex }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        className="absolute w-full h-full object-cover"
        style={{ 
          filter: `brightness(${brightness})`,
          opacity
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};