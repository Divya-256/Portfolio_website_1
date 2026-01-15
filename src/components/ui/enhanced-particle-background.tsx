"use client";

import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { cn } from "@/lib/utils";

interface EnhancedParticleBackgroundProps {
  className?: string;
  variant?: "default" | "connections" | "bubbles" | "stars";
}

export function EnhancedParticleBackground({ 
  className,
  variant = "default" 
}: EnhancedParticleBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // console.log(container);
  }, []);
  
  // Different particle configurations
  const getParticleConfig = () => {
    switch (variant) {
      case "connections":
        return {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#3b82f6"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#4f46e5",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 180,
                line_linked: {
                  opacity: 0.8
                }
              },
              push: {
                particles_nb: 4
              }
            }
          }
        };
      case "bubbles":
        return {
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#4f46e5", "#3b82f6", "#6366f1"]
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.7,
              random: true
            },
            size: {
              value: 12,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 5,
                sync: false
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 250,
                size: 10,
                duration: 2,
                opacity: 0.8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          }
        };
      case "stars":
        return {
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 200,
                size: 4,
                duration: 2,
                opacity: 1,
                speed: 3
              },
              push: {
                particles_nb: 4
              }
            }
          }
        };
      default:
        return {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#6b7280"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.3,
              random: false
            },
            size: {
              value: { min: 1, max: 3 },
              random: true
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#6b7280",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "bounce"
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 0.5
                }
              },
              push: {
                particles_nb: 4
              }
            }
          }
        };
    }
  };

  if (!mounted) return null;

  return (
    <Particles
      className={cn("absolute inset-0 -z-10", className)}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        ...getParticleConfig()
      }}
    />
  );
}