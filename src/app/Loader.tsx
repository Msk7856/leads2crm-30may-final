"use client";

import React from "react";

interface LoaderProps {
    message?: string;
}

const Loader: React.FC<LoaderProps> = ({ message = "Loading..." }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
            {/* Animated Spinner */}
            <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-gray-200"></div>
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
            </div>

            {/* Modern Loading Text */}
            <p className="text-gray-700 font-medium tracking-wide animate-pulse">
                {message}
            </p>

            {/* Subtle Progress Bar */}
            <div className="w-48 h-1 bg-gray-300 rounded-full overflow-hidden">
                <div className="h-1 bg-blue-500 animate-[loading_1s_infinite]"></div>
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
