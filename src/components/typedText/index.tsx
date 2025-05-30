// components/TypewriterComponent.jsx
import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        <Typewriter
          options={{
            strings: ['Zoho', 'Cloud'],
            autoStart: true,
            loop: true,
            // pauseFor: 1500, // Time to pause before moving to the next string
            deleteSpeed: 50, // Speed of deleting
          }}
        />
      </h1>
    </div>
  );
};

export default TypewriterComponent;
