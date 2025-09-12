

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
