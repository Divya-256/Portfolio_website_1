"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
  variant?: "gradient1" | "gradient2" | "grid";
  interactive?: boolean;
  children?: React.ReactNode;
}

export function AnimatedBackground({ 
  className, 
  variant = "gradient1", 
  interactive = true,
  children 
}: AnimatedBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!interactive || !backgroundRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate position relative to center of the screen
      const moveX = clientX - innerWidth / 2;
      const moveY = clientY - innerHeight / 2;
      
      // Apply subtle parallax effect to background
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate(${moveX * 0.01}px, ${moveY * 0.01}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);
  
  const getBackgroundClasses = () => {
    switch (variant) {
      case "gradient1":
        return "bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-100";
      case "gradient2":
        return "bg-gradient-to-br from-blue-100 via-violet-50 to-indigo-100";
      case "grid":
        return "bg-white bg-grid-slate-200";
      default:
        return "bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-100";
    }
  };
  
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Fixed background layer */}
      <div 
        className={cn(
          "absolute inset-0 w-full h-full transition-transform duration-300 ease-out",
          getBackgroundClasses()
        )}
        ref={backgroundRef}
      >
        {/* Abstract shapes */}
        {variant !== "grid" && (
          <>
            <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-100/20 rounded-full blur-3xl" />
            
            <motion.div 
              className="absolute top-20 right-[20%] w-32 h-32 bg-blue-300/10 rounded-full blur-xl"
              animate={{
                y: [0, 30, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="absolute bottom-40 left-[15%] w-64 h-64 bg-indigo-300/10 rounded-full blur-xl"
              animate={{
                y: [0, -40, 0],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
        
        {/* Grid pattern for grid variant */}
        {variant === "grid" && (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px]" />
        )}
      </div>
      
      {/* Content */}
      {children}
    </div>
  );
}