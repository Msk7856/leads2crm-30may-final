"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FaEye } from "react-icons/fa";

export default function Login() {
  const [init, setInit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Initialize tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Particle options
  const options = useMemo(
    () => ({
      background: {
        color: { value: "#1566a1" }, // blue gradient look
      },
      fpsLimit: 70,
      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: false },
        },
      },
      particles: {
        color: {
          value: ["#ffffff", "#00ffdd", "#ff66ee", "#ffcc11", "#66ff88"],
          animation: {
            enable: true,
            speed: 20,
            sync: false,
          },
        },
        links: {
          color: "#ffffff",
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          speed: 3,
        },
        number: {
          density: { enable: true, area: 700 },
          value: 150,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 6 } },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Particle Background */}
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="fixed inset-0 z-0"
        />
      )}
    </div>
  );
}
