import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "../../utils/cn";
import { motion, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

const SparklesCore = ({
  id, // Unique identifier for the particles component
  className, // Additional CSS class for styling
  background, // Background color of the particles
  minSize, // Minimum size of the particles
  maxSize, // Maximum size of the particles
  speed, // Speed of the particles' movement
  particleColor, // Color of the particles
  particleDensity, // Density of the particles
}) => {
  const [init, setInit] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const initParticles = async (engine) => {
      await loadSlim(engine); // Load the slim version of the particles engine
      setInit(true); // Set the initialization flag to true
    };

    initParticlesEngine(initParticles)
      .then(() => {
        console.log("Particles engine initialized");
      })
      .catch((error) => {
        console.error("Error initializing particles engine:", error);
      });
  }, []);

  const particlesLoaded = async (container) => {
    if (container) {
      console.log(container); // Log the container element
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  return (
    <motion.div animate={controls} className={cn(" opacity-0", className)}>
      {init && (
        <Particles
          id={id || "tsparticles"} // Use the provided id or default to "tsparticles"
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "transparent", // Set background color to transparent if not provided
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 4,
            },
            fpsLimit: 120,
            interactivity: {
              modes: {
                push: {
                  quantity: 2000, // Adjust the quantity of particles pushed here
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  value: 1,
                },
                vertical: {
                  value: 1,
                },
              },
              collisions: {
                absorb: {
                  speed: 1,
                },
                bounce: {
                  horizontal: {
                    value: 1,
                  },
                  vertical: {
                    value: 1,
                  },
                },
                enable: false,
                maxSpeed: 150,
                mode: "bounce",
                overlap: {
                  enable: true,
                  retries: 0,
                },
              },
              color: {
                value: particleColor || "#ffffff", // Use the provided particle color or default to white
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                },
              },
              links: {
                color: {
                  value: "#ffffff", // Set the color of the links between particles to white
                },
                distance: 150,
                enable: false,
                opacity: 0.4,
                width: 1,
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: speed || 2, // Use the provided speed or default to 2
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: particleDensity || 800, // Use the provided particle density or default to 800
                  factor: 1000,
                },
                limit: 0,
                value: 80,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.3,
                  speed: 1,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.3,
                },
                value: 0.9,
              },
              shape: {
                type: "star",
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: minSize || 1, // Use the provided minimum size or default to 1
                },
                value: maxSize || 1, // Use the provided maximum size or default to 3
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};

SparklesCore.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  minSize: PropTypes.number.isRequired,
  maxSize: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  particleColor: PropTypes.string.isRequired,
  particleDensity: PropTypes.number.isRequired,
};

export default SparklesCore;
