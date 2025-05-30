
// "use client";
// // import React, { useEffect } from "react";

// // const ProjectNumber = () => {
// //   useEffect(() => {
// //     const counters = document.querySelectorAll(".counter-number");
// //     counters.forEach((counter) => {
// //       const target = +counter.getAttribute("data-to-value");
// //       let count = 0;
// //       const duration = counter.getAttribute("data-duration");
// //       const increment = target / duration;

// //       const interval = setInterval(() => {
// //         count += increment;
// //         if (count >= target) {
// //           count = target;
// //           clearInterval(interval);
// //         }
// //         counter.textContent = Math.floor(count);
// //       }, 1);
// //     });
// //   }, []);

// //   return (
// //     <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 px-6 sm:px-8 lg:px-16 rounded-tl-3xl rounded-tr-3xl">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
// //         {/* Years of Experience */}
// //         <div className="text-center p-6 bg-blue rounded-lg shadow-lg">
// //           <div className="text-2xl font-bold mb-4">Years of Experience</div>
// //           <div className="mt-2 text-5xl font-extrabold">
// //             <span className="counter-number" data-duration="2000" data-to-value="12" data-from-value="0">
// //               0
// //             </span>
// //             <span className="text-3xl ml-1">+</span>
// //           </div>
// //         </div>

// //         {/* Satisfied Customers */}
// //         <div className="text-center p-6 bg-blue rounded-lg shadow-lg">
// //           <div className="text-2xl font-bold mb-4">Satisfied Customers</div>
// //           <div className="mt-2 text-5xl font-extrabold">
// //             <span className="counter-number" data-duration="2000" data-to-value="3000" data-from-value="0">
// //               0
// //             </span>
// //             <span className="text-3xl ml-1">+</span>
// //           </div>
// //         </div>

// //         {/* Projects Completed */}
// //         <div className="text-center p-6 bg-blue rounded-lg shadow-lg">
// //           <div className="text-2xl font-bold mb-4">Projects Completed</div>
// //           <div className="mt-2 text-5xl font-extrabold">
// //             <span className="counter-number" data-duration="2000" data-to-value="4000" data-from-value="0">
// //               0
// //             </span>
// //             <span className="text-3xl ml-1">+</span>
// //           </div>
// //         </div>

// //         {/* Partners */}
// //         <div className="text-center p-6 bg-blue rounded-lg shadow-lg">
// //           <div className="text-2xl font-bold mb-4">Partners</div>
// //           <div className="mt-2 text-5xl font-extrabold">
// //             <span className="counter-number" data-duration="2000" data-to-value="65" data-from-value="0">
// //               0
// //             </span>
// //             <span className="text-3xl ml-1">+</span>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ProjectNumber;
// "use client";
// import React, { useEffect } from "react";

// const ProjectNumber = () => {
//   useEffect(() => {
//     const counters = document.querySelectorAll(".counter-number");
//     counters.forEach((counter) => {
//       const target = +counter.getAttribute("data-to-value");
//       let count = 0;
//       const duration = counter.getAttribute("data-duration");
//       const increment = target / duration;

//       const interval = setInterval(() => {
//         count += increment;
//         if (count >= target) {
//           count = target;
//           clearInterval(interval);
//         }
//         counter.textContent = Math.floor(count);
//       }, 1);
//     });
//   }, []);

//   return (
//     <section className="bg-blue-600 py-20 px-8 sm:px-12 lg:px-16 rounded-tl-3xl rounded-tr-3xl">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
//         {/* Happy Customers */}
//         <div className="text-center p-8 bg-blue-700 rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
//           <div className="text-lg sm:text-xl font-semibold mb-4">Happy Customers</div>
//           <div className="text-6xl font-extrabold mt-2">
//             <span className="counter-number" data-duration="2000" data-to-value="150" data-from-value="0">
//               0
//             </span>
//             <span className="text-4xl ml-2">+</span>
//           </div>
//         </div>

//         {/* Finished Projects */}
//         <div className="text-center p-8 bg-blue-700 rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
//           <div className="text-lg sm:text-xl font-semibold mb-4">Finished Projects</div>
//           <div className="text-6xl font-extrabold mt-2">
//             <span className="counter-number" data-duration="2000" data-to-value="100" data-from-value="0">
//               0
//             </span>
//             <span className="text-4xl ml-2">+</span>
//           </div>
//         </div>

//         {/* Award Winning */}
//         <div className="text-center p-8 bg-blue-700 rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
//           <div className="text-lg sm:text-xl font-semibold mb-4">Award Winning</div>
//           <div className="text-6xl font-extrabold mt-2">
//             <span className="counter-number" data-duration="2000" data-to-value="2" data-from-value="0">
//               0
//             </span>
//           </div>
//         </div>

//         {/* Consultation Certifications */}
//         <div className="text-center p-8 bg-blue-700 rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
//           <div className="text-lg sm:text-xl font-semibold mb-4">Consultation Certifications</div>
//           <div className="text-6xl font-extrabold mt-2">
//             <span className="counter-number" data-duration="2000" data-to-value="4" data-from-value="0">
//               0
//             </span>
//             <span className="text-4xl ml-2">+</span>
//           </div>
//         </div>

//         {/* Countries Served */}
//         <div className="text-center p-8 bg-blue-700 rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
//           <div className="text-lg sm:text-xl font-semibold mb-4">Countries Served</div>
//           <div className="text-6xl font-extrabold mt-2">
//             <span className="counter-number" data-duration="2000" data-to-value="5" data-from-value="0">
//               0
//             </span>
//             <span className="text-4xl ml-2">+</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectNumber;
//2
// import Image from 'next/image';

// const StatsSection = () => {
//   return (
//     <section className="relative overflow-hidden bg-white py-20 dark:bg-gray-50 lg:py-22.5">
//       {/* SVG shapes */}
//       <Image
//         alt="Shape"
//         src="https://base.demo.nextjstemplates.com/images/shape/shape-14.svg"
//         width={58}
//         height={58}
//         className="absolute bottom-[3%] left-[3%] w-14.5 animate-rotating"
//       />
//       <Image
//         alt="Shape"

//         src="https://base.demo.nextjstemplates.com/images/shape/shape-07.svg"
//         width={84}
//         height={42}
//         className="absolute right-[2%] top-[6%] w-21 rotate-90"
//       />
//       <Image
//         alt="Shape"
//         src="https://base.demo.nextjstemplates.com/images/shape/shape-11.svg"
//         width={54}
//         height={54}
//         className="absolute left-[35%] top-[1%] animate-rotating"
//       />
//       <Image
//         alt="Shape"
//         src="https://base.demo.nextjstemplates.com/images/shape/shape-15.svg"
//         width={1660}
//         height={280}
//         className="absolute bottom-0 right-0"
//       />

//       {/* Content */}
//       <div className="relative z-10 mx-auto max-w-1390 px-4 md:px-8 xl:px-36.5 ">
//         <div className="flex flex-wrap justify-center gap-8 md:flex-nowrap md:items-center md:justify-between">
//           {/* Stat 1 */}
//           <div className="animate_top w-2/5 text-center md:w-auto">
//             <h2 className="mb-0.5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
//               <span className="counter">785</span>
//             </h2>
//             <p className="text-base font-medium lg:text-title-xsm2">
//               Global Brands
//             </p>
//           </div>
//           {/* Stat 2 */}
//           <div className="animate_top w-2/5 text-center md:w-auto">
//             <h2 className="mb-0.5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
//               <span className="counter">533</span>
//             </h2>
//             <p className="text-base font-medium lg:text-title-xsm2">
//               Happy Clients
//             </p>
//           </div>
//           {/* Stat 3 */}
//           <div className="animate_top w-2/5 text-center md:w-auto">
//             <h2 className="mb-0.5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
//               <span className="counter">865</span>
//             </h2>
//             <p className="text-base font-medium lg:text-title-xsm2">
//               Winning Awards
//             </p>
//           </div>
//           {/* Stat 4 */}
//           <div className="animate_top w-2/5 text-center md:w-auto">
//             <h2 className="mb-0.5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
//               <span className="counter">346</span>
//             </h2>
//             <p className="text-base font-medium lg:text-title-xsm2">
//               Completed Projects
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;
//2
// "use client"
// import { useEffect } from 'react';
// import Image from 'next/image';

// const StatsSection = () => {
//   // Function to animate the counter
//   const countUp = (start, end, element) => {
//     let current = start;
//     const increment = end / 50; // Adjust the increment for smoother or faster counting
//     const interval = setInterval(() => {
//       current += increment;
//       if (current >= end) {
//         current = end;
//         clearInterval(interval);
//       }
//       element.innerText = Math.floor(current);
//     }, 20);
//   };

//   useEffect(() => {
//     const counters = document.querySelectorAll('.counter');
//     counters.forEach((counter) => {
//       const endValue = parseInt(counter.innerText, 10);
//       countUp(0, endValue, counter);
//     });
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-white py-20 dark:bg-gray-50 lg:py-22.5">
//       {/* SVG shapes */}
//       <Image
//         alt="Shape"
//         src="https://base.demo.nextjstemplates.com/images/shape/shape-14.svg"
//         width={58}
//         height={58}
//         className="absolute bottom-[3%] left-[3%] w-14.5 animate-rotating"
//       />
//       <Image
//         alt="Shape"
//         src="https://base.demo.nextjstemplates.com/images/shape/shape-07.svg"
//         width={84}
//         height={42}
//         className="absolute right-[2%] top-[6%] w-21 rotate-90"
//       />
//       <Image
//         alt="Shape"
//         src="https://base.demo.nextjstemplates.com/images/shape/shape-11.svg"
//         width={54}
//         height={54}
//         className="absolute left-[35%] top-[1%] animate-rotating"
//       />
//       <Image
//         alt="Shape"
//         src="https://base.demo.nextjstemplates.com/images/shape/shape-15.svg"
//         width={1660}
//         height={280}
//         className="absolute bottom-0 right-0"
//       />

//       {/* Content */}
//       <div className="relative z-10 mx-auto max-w-1390 px-4 md:px-8 xl:px-36.5">
//         <div className="flex flex-wrap justify-center gap-8 md:flex-nowrap md:items-center md:justify-between">
//           {/* Stat 1 */}
//           <div className="animate_top w-2/5 text-center md:w-auto">
//             <h2 className="mb-0.5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
//               <span className="counter">785</span>
//             </h2>
//             <p className="text-base font-medium lg:text-title-xsm2">
//               Global Brands
//             </p>
//           </div>
//           {/* Stat 2 */}
//           <div className="animate_top w-2/5 text-center md:w-auto">
//             <h2 className="mb-0.5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
//               <span className="counter">533</span>
//             </h2>
//             <p className="text-base font-medium lg:text-title-xsm2">
//               Happy Clients
//             </p>
//           </div>
//           {/* Stat 3 */}
//           <div className="animate_top w-2/5 text-center md:w-auto">
//             <h2 className="mb-0.5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
//               <span className="counter">865</span>
//             </h2>
//             <p className="text-base font-medium lg:text-title-xsm2">
//               Winning Awards
//             </p>
//           </div>
//           {/* Stat 4 */}
//           <div className="animate_top w-2/5 text-center md:w-auto">
//             <h2 className="mb-0.5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
//               <span className="counter">346</span>
//             </h2>
//             <p className="text-base font-medium lg:text-title-xsm2">
//               Completed Projects
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;
//3
"use client"
import { useEffect } from 'react';
import Image from 'next/image';

const StatsSection = () => {
  // Function to animate the counter
  const countUp = (start, end, element) => {
    let current = start;
    const increment = end / 50; // Adjust the increment for smoother or faster counting
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      element.textContent = Math.floor(current).toString();
    }, 20);
  };

  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const endValue = parseInt(counter.textContent || '0', 10);
      countUp(0, endValue, counter);
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-gray-50 lg:py-22.5">
      {/* SVG shapes */}
      <Image
        alt="Shape"
        src="https://base.demo.nextjstemplates.com/images/shape/shape-14.svg"
        width={58}
        height={58}
        className="absolute bottom-[3%] left-[3%] w-14.5 animate-rotating"
      />
      <Image
        alt="Shape"
        src="https://base.demo.nextjstemplates.com/images/shape/shape-07.svg"
        width={84}
        height={42}
        className="absolute right-[2%] top-[6%] w-21 rotate-90"
      />
      <Image
        alt="Shape"
        src="https://base.demo.nextjstemplates.com/images/shape/shape-11.svg"
        width={54}
        height={54}
        className="absolute left-[35%] top-[1%] animate-rotating"
      />
      <Image
        alt="Shape"
        src="https://base.demo.nextjstemplates.com/images/shape/shape-15.svg"
        width={1660}
        height={280}
        className="absolute bottom-0 right-0"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-1390 px-4 md:px-8 xl:px-36.5">
        <div className="flex flex-wrap justify-center gap-8 md:flex-nowrap md:items-center md:justify-between">
          {/* Stat 1 */}
          <div className="animate_top w-2/5 text-center md:w-auto">
            <h2 className="mb-0.5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
              <span className="counter">785</span>
            </h2>
            <p className="text-base font-medium lg:text-title-xsm2">
              Global Brands
            </p>
          </div>
          {/* Stat 2 */}
          <div className="animate_top w-2/5 text-center md:w-auto">
            <h2 className="mb-0.5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
              <span className="counter">533</span>
            </h2>
            <p className="text-base font-medium lg:text-title-xsm2">
              Happy Clients
            </p>
          </div>
          {/* Stat 3 */}
          <div className="animate_top w-2/5 text-center md:w-auto">
            <h2 className="mb-0.5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
              <span className="counter">865</span>
            </h2>
            <p className="text-base font-medium lg:text-title-xsm2">
              Winning Awards
            </p>
          </div>
          {/* Stat 4 */}
          <div className="animate_top w-2/5 text-center md:w-auto">
            <h2 className="mb-0.5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-title-xxl">
              <span className="counter">346</span>
            </h2>
            <p className="text-base font-medium lg:text-title-xsm2">
              Completed Projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
