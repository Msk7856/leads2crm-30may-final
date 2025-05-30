// components/MeetClients.js

// import export default MeetClients;
// components/Testimonials.js

// components/Testimonials.js
// components/ClientSlider.js



"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clientsData = [
  {
    name: "UD Trucks",
    person: "Keiki Ka",
    title: "Global CIO",
    imgSrc:
      "https://hcltech.imgix.net/sites/default/files/images/business-pages/EM-511_UD-Trucks-Customer-Testimonial-SM-Banner_301x339_pix_0.webp",
    videoLink: "https://www.youtube.com/watch?v=wlg6g6kr7wU&t=12s",
  },
  {
    name: "NatWest Group",
    person: "Kari-Anne Clayton",
    title: "Head of Strategy, Transformation, Service Management and Risk, Retail Banking",
    imgSrc:
      "https://hcltech.imgix.net/sites/default/files/images/special-pages/supercharging-progress/Anne-Clayton.webp",
    videoLink: "https://player.vimeo.com/video/777987302",
  },
  {
    name: "Broadcom Inc.",
    person: "Stanley Toh",
    title: "Head of Enterprise End-user Services & Experience",
    imgSrc:
      "https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/stanley-toh.webp",
    videoLink: "https://player.vimeo.com/video/753534493",
  },
  {
    name: "E.ON",
    person: "Dr. Victoria Ossadnik",
    title: "Chief Operating Officer - Digital Member of the Board of Management",
    imgSrc:
      "https://hcltech.imgix.net/sites/default/files/images/special-pages/home/01/client-02.webp",
    videoLink: "https://player.vimeo.com/video/753526403",
  },
];

const clientImages = [
  "/images/ClientLogos/ALOMAIR/AL OMAIR.png",
  "/images/ClientLogos/ASSA ABLOY/rect104.png",
  "/images/ClientLogos/SPS/SPS.png",
  "/images/ClientLogos/BNP PARIBAS/BNP PARIBAS.png",
  "/images/ClientLogos/Electro Power/ELECTRO POWER.png",
  "/images/ClientLogos/KAEC/rect11.png",
  "/images/ClientLogos/SAR/Saudi Arabia Rails.png",
  "/images/ClientLogos/Refrigeration House/REFRIGERATION house.png",
  ,

  // "/images/ClientLogos/ALOMAIR/ALOMAIR LOGO.png",
  // "/images/ClientLogos/ASSA ABLOY/g8.png",
  // "/images/ClientLogos/BNP PARIBAS/g59.png",
  // "/images/ClientLogos/Electro Power/image1.png",
  // "/images/ClientLogos/KAEC/g7.png",
  // "/images/ClientLogos/Refrigeration House/image91.png",
  // "/images/ClientLogos/SAR/g91.png",
  // "/images/ClientLogos/SPS/SPS.png"
  // Add more image paths as needed
];

const MeetClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Makes it scroll continuously
    cssEase: "linear", // Smooth scrolling effect
    pauseOnHover: false,
    arrows: false, // Disable left and right slider icons
};

  // Split the clientImages array into two parts
  const firstColumnImages = clientImages.slice(0, 4);
  const secondColumnImages = clientImages.slice(4);
  
  return (
    <section className="section-white page-title-left meet-clients-container py-16 bg-[#eaf5fd]">
  <div className="meet-clients-section">
    <div className="container mx-auto px-4">
      <div className="page-title mb-3">
        <h2 className="text-center text-3xl  mb-8 text-black">Our Prestigious Clients</h2>
        
      </div>
      <p className="mx-auto text-left font-sans font-light text-[#14142b] text-[1.2rem] leading-[1.4]">
      At Maiprosoft, we’re privileged to partner with some of the world’s most respected companies. Our clients count on us for tailored solutions that enhance their operations, drive growth, and deliver meaningful, lasting results in their industries    </p>

      <div className="max-w-5xl mx-auto py-4">
      {/* <Slider {...settings}>
            {clientImages.map((logo, index) => (
              <div key={index} className="px-2">
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="w-full h-24 object-contain"
                />
              </div>
            ))}
          </Slider> */}
          {/* <Slider
  {...settings}
  className="flex gap-4"
>
  {clientImages.map((logo, index) => (
    <div key={index} className="px-2">
      <img
        src={logo}
        alt={`Partner logo ${index + 1}`}
        className="w-full h-24 object-contain"
      />
    </div>




  ))}
</Slider> */}

<div className="max-w-5xl mx-auto">
          <Slider {...settings}>
            {clientImages.map((logo, index) => (
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
  </div>
</section>


  );
};

export default MeetClients;





