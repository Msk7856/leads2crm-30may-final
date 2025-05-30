// // import React from 'react';

// // const PartnerSection: React.FC = () => {
// //   return (
// //     <section className="py-16 bg-gray-100">
// //       <div className="container mx-auto px-6">
// //         {/* Parent Section */}
// //         <div className="flex flex-col space-y-8">
// //           {/* Heading 1: Our Partners */}
// //           <div className="text-center">
// //             <h5 className="text-xl font-semibold text-gray-700">Our Partners</h5>
// //           </div>

// //           {/* Heading 2: Partnered with Best Tech & ERP Providers */}
// //           <div className="text-center">
// //             <h2 className="text-3xl font-extrabold text-gray-800">Partnered with Best Tech & ERP Providers</h2>
// //           </div>

// //           {/* Partner Logos */}
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //             {/* Partner 1 */}
// //             <div className="flex justify-center">
// //               <img
// //                 src="/images/partner/yen.jpg"
// //                 alt="Partner 1"
// //                 className="w-full h-auto object-contain"
// //                 loading="lazy"
// //               />
// //             </div>

// //             {/* Partner 2 */}
// //             <div className="flex justify-center">
// //               <img
// //                 src="/images/partner/yen.jpg"
// //                 alt="Partner 2"
// //                 className="w-full h-auto object-contain"
// //                 loading="lazy"
// //               />
// //             </div>

// //             {/* Partner 3 */}
// //             <div className="flex justify-center">
// //               <img
// //                 src="/images/partner/yen.jpg"
// //                 alt="Partner 3"
// //                 className="w-full h-auto object-contain"
// //                 loading="lazy"
// //               />
// //             </div>

// //             {/* Partner 4 */}
// //             <div className="flex justify-center">
// //               <img
// //                 src="/images/partner/yen.jpg"
// //                 alt="Partner 4"
// //                 className="w-full h-auto object-contain"
// //                 loading="lazy"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PartnerSection;
// //2
// import React from 'react';
// import Image from 'next/image';

// const PartnerSection: React.FC = () => {
//   return (
//     <section className="zwc-brand py-10 bg-gray-50">
//       <div className="content-wrap bottom-animated animated middle-animated text-center">
//         {/* Heading */}
//         <h3 className="text-3xl font-semibold mb-8">Our Partners</h3>
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Partnered with Best Tech & ERP Providers</h2>
        
//         <div className="zwc-home-brand">
//           <ul id="brandlisting" className="flex flex-wrap justify-center gap-8">
//             {/* Partner 1 */}
//             <li className="brand-item flex justify-center items-center">
//               <Image
//                 src="/images/partner/yen.jpg"
//                 alt="Partner 1"
//                 width={130}
//                 height={50}
//                 className="object-contain"
//                 loading="lazy"
//               />
//             </li>
//             {/* Partner 2 */}
//             <li className="brand-item flex justify-center items-center">
//               <Image
//                 src="/images/partner/yen.jpg"
//                 alt="Partner 2"
//                 width={120}
//                 height={50}
//                 className="object-contain"
//                 loading="lazy"
//               />
//             </li>
//             {/* Partner 3 */}
//             <li className="brand-item flex justify-center items-center">
//               <Image
//                 src="/images/partner/yen.jpg"
//                 alt="Partner 3"
//                 width={100}
//                 height={50}
//                 className="object-contain"
//                 loading="lazy"
//               />
//             </li>
//             {/* Partner 4 */}
//             <li className="brand-item flex justify-center items-center">
//               <Image
//                 src="/images/partner/yen.jpg"
//                 alt="Partner 4"
//                 width={90}
//                 height={50}
//                 className="object-contain"
//                 loading="lazy"
//               />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnerSection;


"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerSection = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 3000,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 0, // Makes it scroll continuously
  //   cssEase: "linear", // Smooth scrolling effect
  //   pauseOnHover: false,
  // };

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Makes it scroll continuously
    cssEase: "linear", // Smooth scrolling effect
    pauseOnHover: false,
    arrows: false, // Disable left and right slider icons
};

  
  const partners = [
    "/images/partner/new-p/aws/AWS regular size.svg",
    "/images/partner/new-p/Azure/Azure Logo regular.svg",
    "/images/partner/new-p/Boomi/Bhoomi regular size.svg",
    "/images/partner/new-p/HTCD/HTCD regular size.svg",
    "/images/partner/new-p/WSO2/WSO2 regular size.svg",
    "/images/partner/new-p/Yenlo/yenlo regulat.svg",
    "/images/partner/new-p/Mulesoft/Mulesoft regular size.svg",
    "/images/partner/new-p/erp leDGER/ERP Ledger regular size.svg",


    


    // "https://cdn-jhpip.nitrocdn.com/GENdBIltwBtSZkSFCgaXAqdoCWxpqhRH/assets/images/optimized/rev-0d8e292/alnafitha.com/wp-content/uploads/2023/06/Logetic.gif",
    // "https://cdn-jhpip.nitrocdn.com/GENdBIltwBtSZkSFCgaXAqdoCWxpqhRH/assets/images/optimized/rev-0d8e292/alnafitha.com/wp-content/uploads/2023/06/Logetic.gif",
    // "https://cdn-jhpip.nitrocdn.com/GENdBIltwBtSZkSFCgaXAqdoCWxpqhRH/assets/images/optimized/rev-0d8e292/alnafitha.com/wp-content/uploads/2023/06/Logetic.gif",
    // "https://cdn-jhpip.nitrocdn.com/GENdBIltwBtSZkSFCgaXAqdoCWxpqhRH/assets/images/optimized/rev-0d8e292/alnafitha.com/wp-content/uploads/2023/06/Logetic.gif",
    // Add more partner logo URLs as needed
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl   mb-8 text-black">Our Pioneering Partners
        </h2>
        <p className="text-center font-sans font-light text-[#14142b] text-[1.25rem] leading-[1.4]">
          Accredited and partnered with +10 tech innovators
        </p>
        <div className="max-w-5xl mx-auto mt-2">
          <Slider {...settings}>
            {partners.map((logo, index) => (
              <div key={index} className="px-4">
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="w-full h-24 object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
