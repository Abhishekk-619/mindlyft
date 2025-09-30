import React from 'react';
import { VideoBackground } from '../backgrounds/VideoBackground';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <VideoBackground
        videoSrc="/bgmain.mp4"
        zIndex={-1}
        opacity={0.8}
        brightness={0.5}
      />
      {children}
    </div>
  );
};