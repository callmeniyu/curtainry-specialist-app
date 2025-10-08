"use client";
import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300); // Small delay for smooth transition
          return 100;
        }
        return prev + 2;
      });
    }, 60); // Complete in ~3 seconds

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-1000 hover:scale-110">
            <div className="text-3xl font-bold text-primary animate-pulse">
              C
            </div>
          </div>
          <div className="absolute -inset-4 bg-white/20 rounded-full animate-ping opacity-30"></div>
        </div>
        
        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white tracking-wider animate-fade-in">
            Curtainry
          </h1>
          <p className="text-white/80 text-sm animate-fade-in-delay">
            Specialist Platform
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/60 text-xs mt-2">{Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  );
}