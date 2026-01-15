import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-2 text-center mb-10", className)}>
      <h2 
        className="text-4xl font-bold tracking-tight gradient-text-primary animate-in fade-in slide-in-from-bottom-4 duration-700"
        data-aos="fade-up"
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className="text-muted-foreground max-w-[700px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}