"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: false },
        },
      },
      particles: {
        color: {
          value: [
            "#ffffff",
            "#fcad03",
            "#08e300",
            "#02d9d9",
            "#0525f5",
            "#0525f5",
            "#08e300",
            "#02d9d9",
          ],
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
    <>
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="absolute left-0 top-0 -z-10 h-screen w-full"
        />
      )}
    </>
  );
}
