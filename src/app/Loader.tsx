"use client";

import Image from "next/image";
import React from "react";

interface LoaderProps {
  message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      {/* Animated Spinner */}
      <div className="relative">
        {/* <div className="w-16 h-16 rounded-full border-4 border-gray-200"></div> */}
        {/* <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-mai border-t-transparent animate-spin"></div> */}

        <div className="relative flex items-center justify-center">
          {/* Spinning Border */}
          {/* <div className="absolute w-28 h-28 rounded-full border-2 border-gray-300 border-t-mai animate-spin" /> */}

          {/* Logo Image */}
          <Image
            src="/images/meta/logo.png"
            alt="Loading..."
            width={100}
            height={100}
            className="rounded-full animate-pulse"
          />
        </div>
      </div>

      {/* Modern Loading Text */}
      <p className="text-gray-700 font-medium tracking-wide animate-pulse">
        {message}
      </p>

      {/* Subtle Progress Bar */}
      <div className="w-40 h-1 bg-gray-400 rounded-full overflow-hidden">
        <div className="h-1 bg-mai animate-[loading_1s_infinite]"></div>
      </div>

      {/* Keyframes for progress bar */}
      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-[loading_2s_infinite] {
          animation: loading 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Loader;
