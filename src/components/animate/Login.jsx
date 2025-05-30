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
        color: { value: "#ffffff" },
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
          density: { enable: true, area: 900 },
          value: 100,
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

      {/* Download banners (top right) */}
      <div className="fixed right-4 top-4 z-10 flex gap-2">
        <a
          href="#"
          className="flex items-center gap-2 rounded bg-black px-3 py-1 text-xs text-white shadow"
        >
          <img src="/android-icon.png" alt="" className="h-4 w-4" />
          Download Android
          <br />
          CRM Software
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded bg-black px-3 py-1 text-xs text-white shadow"
        >
          <img src="/android-icon.png" alt="" className="h-4 w-4" />
          Download Android
          <br />
          C.P / Customer
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded bg-black px-3 py-1 text-xs text-white shadow"
        >
          <img src="/android-icon.png" alt="" className="h-4 w-4" />
          Download Android
          <br />
          Visitor ONE APP
        </a>
      </div>

      {/* Login Card */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center rounded-xl bg-white px-8 py-10 shadow-lg">
        <img src="/logo.png" alt="tranquil crm" className="mb-6 w-40" />
        <form className="flex w-full flex-col gap-4">
          <input
            type="email"
            placeholder="Enter email"
            className="focus:border-blue-500 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="************"
              className="focus:border-blue-500 w-full rounded border border-gray-300 px-3 py-2 pr-10 focus:outline-none"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
            >
              <FaEye />
            </button>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 mt-2 w-full rounded py-2 font-bold text-white transition"
          >
            LOGIN
          </button>
        </form>
      </div>

      {/* Bottom banner */}
      <div className="fixed bottom-4 left-1/2 z-10 -translate-x-1/2">
        <a
          href="#"
          className="flex items-center gap-2 rounded-full bg-black px-6 py-2 text-sm font-semibold text-white shadow"
        >
          TRANQUIL REAL ESTATE CRM SOFTWARE &rarr;
        </a>
      </div>
    </div>
  );
}
