
"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerSection = () => {
  
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
