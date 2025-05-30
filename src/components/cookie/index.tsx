"use client";
import React, { useState, useEffect } from "react";

const Cookies: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has previously accepted cookies
    const isAccepted = localStorage.getItem("cookieConsent");
    if (!isAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Set cookie consent in localStorage and hide banner
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div id="cookie-policy" className="bg-mai text-white p-6 fixed bottom-0 w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4">
          {/* Left Column: Content */}
          <div className="flex-1">
            <p className="text-lg leading-relaxed">
              This website uses cookies to help us give you the best experience when you visit. By using this website,
              you consent to our use of these cookies. Find out more about how we use cookies and how to manage them.
            </p>
          </div>

          {/* Right Column: Buttons */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://example.com/privacy-policy" // Sample URL for "Learn More"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-transparent border border-white px-4 py-2 rounded-md hover:bg-white hover:text-mai transition-all duration-200"
            >
              Learn More
            </a>
            <button
              onClick={handleAccept}
              className="text-white bg-transparent border border-white px-4 py-2 rounded-md hover:bg-white hover:text-mai transition-all duration-200"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Cookies;
