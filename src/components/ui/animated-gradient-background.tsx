"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  colorScheme?: "blue" | "purple" | "dark";
  interactive?: boolean;
}

export function AnimatedGradientBackground({
  className,
  children,
  colorScheme = "blue",
  interactive = true,
}: AnimatedGradientBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  const getGradientColors = () => {
    switch (colorScheme) {
      case "purple":
        return "from-indigo-500/10 via-purple-500/10 to-pink-600/10";
      case "dark":
        return "from-slate-900/90 via-purple-900/80 to-slate-900/90";
      case "blue":
      default:
        return "from-blue-500/10 via-sky-500/10 to-indigo-500/10";
    }
  };

  useEffect(() => {
    if (!interactive || !containerRef.current || !gradientRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !gradientRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const offsetX = ((x - centerX) / centerX) * 15;
      const offsetY = ((y - centerY) / centerY) * 15;

      gradientRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [interactive]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900" />

      {/* Animated gradient background */}
      <div 
        ref={gradientRef}
        className="absolute inset-0 -z-10 transition-transform duration-300 ease-out"
      >
        <motion.div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-80",
            getGradientColors()
          )}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
        
        {/* Floating blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Optional grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8881_1px,transparent_1px),linear-gradient(to_bottom,#8881_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}