// // components/AnimatedWords.js

// import React, { useEffect, useState } from 'react';

// const AnimatedWords = () => {
//   const words = ["Potential", "Performance", "Quality"];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 2000); // Change word every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <h1 className="text-red-500 text-2xl">
//       {words.map((word, index) => (
//         <span 
//           key={index}
//           className={`transition-opacity duration-500 font-bold ${currentWordIndex === index ? 'opacity-100' : 'opacity-0'}`}
//         >
//           {word}
//         </span>
//       ))}
//     </h1>
//   );
// };

// export default AnimatedWords;
//2
import React, { useEffect, useState } from 'react';

const AnimatedWords = () => {
  const words = ["Potential", "Performance", "Quality"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const word = words[currentWordIndex];
    const totalLetters = word.length;

    // Interval for displaying each letter
    const interval = setInterval(() => {
      setCurrentLetterIndex((prevIndex) => prevIndex + 1);
    }, 200); // Speed at which letters appear (200ms per letter)

    // Once all letters are displayed, hold the word for 1 second
    if (currentLetterIndex === totalLetters) {
      clearInterval(interval); // Clear the interval once word is fully displayed
      setTimeout(() => {
        setCurrentLetterIndex(0);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 1000); // Hold for 1 second before switching to next word
    }

    return () => clearInterval(interval); // Clean up interval when component unmounts
  }, [currentLetterIndex, currentWordIndex, words]);

  return (
    <h1 className="text-red-500 text-2xl">
      {words[currentWordIndex]
        .split('')
        .map((letter, index) => (
          <span
            key={index}
            className={`transition-opacity duration-500 font-bold ${
              index < currentLetterIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {letter}
          </span>
        ))}
    </h1>
  );
};

export default AnimatedWords;
