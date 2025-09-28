import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface BeamsProps {
  className?: string;
  beamWidth?: number;
  beamHeight?: number;
  beamCount?: number;
  speed?: number;
  noiseIntensity?: number;
  noiseScale?: number;
  rotation?: number;
  color?: string;
}

export const Beams: React.FC<BeamsProps> = ({
  className = "",
  beamWidth = 3,
  beamHeight = 30,
  beamCount = 20,
  speed = 2,
  noiseIntensity = 1.75,
  noiseScale = 0.2,
  rotation = 30,
  color = "#3b82f6"
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  console.log("Beams component rendering with props:", {
    beamWidth, beamHeight, beamCount, speed
  });

  useEffect(() => {
    console.log("Beams useEffect running");
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log("Canvas ref is null");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.log("Canvas context is null");
      return;
    }

    console.log("Canvas and context initialized successfully");

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log("Canvas resized to:", canvas.width, "x", canvas.height);
    };

    const noise = (x: number, y: number, z: number) => {
      // Simple noise function
      const a = Math.sin(x * noiseScale + z * 0.1) * noiseIntensity;
      const b = Math.cos(y * noiseScale + z * 0.1) * noiseIntensity;
      return (a + b) / 2;
    };

    const drawBeam = (x: number, y: number, angle: number, length: number, width: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((angle + rotation) * Math.PI / 180);
      
      const gradient = ctx.createLinearGradient(0, -width/2, 0, width/2);
      gradient.addColorStop(0, `hsla(217, 91%, 60%, 0)`);
      gradient.addColorStop(0.5, `hsla(217, 91%, 60%, ${opacity})`);
      gradient.addColorStop(1, `hsla(217, 91%, 60%, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(-length/2, -width/2, length, width);
      
      // Add glow effect
      ctx.shadowColor = "hsl(217, 91%, 60%)";
      ctx.shadowBlur = 20;
      ctx.fillRect(-length/2, -width/2, length, width);
      
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += speed * 0.01;
      
      for (let i = 0; i < beamCount; i++) {
        const baseX = (canvas.width / beamCount) * i + (canvas.width / beamCount) / 2;
        const baseY = canvas.height / 2;
        
        // Add noise to position
        const offsetX = noise(baseX, baseY, time + i) * 100;
        const offsetY = noise(baseY, baseX, time + i * 2) * 100;
        
        const x = baseX + offsetX;
        const y = baseY + offsetY;
        
        // Animate beam properties
        const beamLength = beamHeight * (1 + Math.sin(time + i) * 0.3) * 20;
        const beamOpacity = 0.3 + Math.sin(time * 2 + i) * 0.2;
        const beamAngle = noise(x, y, time + i * 3) * 45;
        
        drawBeam(x, y, beamAngle, beamLength, beamWidth, beamOpacity);
      }
      
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [beamWidth, beamHeight, beamCount, speed, noiseIntensity, noiseScale, rotation]);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  );
};