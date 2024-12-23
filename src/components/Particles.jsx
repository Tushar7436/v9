import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // Load only the necessary slim package

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  // This effect initializes the particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load only the needed modules to reduce bundle size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Callback for when particles have successfully loaded
  const particlesLoaded = (container) => {
    console.log("Particles container loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          color: "#FFFFFF",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles 
      id={props.id || "tsparticles"} 
      init={(engine) => initParticlesEngine(engine)} 
      loaded={particlesLoaded} 
      options={options} 
    />
  );
};

export default ParticlesComponent;
