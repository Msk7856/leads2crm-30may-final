import Image from "next/image";
import './Img.css'

const customerImages = [
  "https://sedra.net.sa/wp-content/uploads/2024/08/12-1.png",
  "https://sedra.net.sa/wp-content/uploads/2024/08/11-1.png",
  "https://sedra.net.sa/wp-content/uploads/2024/08/10-1.png",
  "https://sedra.net.sa/wp-content/uploads/2024/08/9-1.png",
  "https://sedra.net.sa/wp-content/uploads/2024/08/8-1.png",
  "https://sedra.net.sa/wp-content/uploads/2024/08/7-1.png",
  "https://sedra.net.sa/wp-content/uploads/2024/08/6-1.png",
  "https://sedra.net.sa/wp-content/uploads/2024/08/5-1.png",
  "https://sedra.net.sa/wp-content/uploads/2024/08/4-1.png",
  "https://sedra.net.sa/wp-content/uploads/2024/08/3-1.png",
  "https://sedra.net.sa/wp-content/uploads/2024/08/2-1.png",
  "https://sedra.net.sa/wp-content/uploads/2024/08/1-1.png",
];

const FullScreenImage = () => {
  return (
    <div className="overflow-x-hidden bg-[#ffffff] ">
      {/* <div className="relative w-full h-screen overflow-hidden">
        // Desktop image 
        <img
          src="/images/Clients & Partners.png"
          alt="Full Screen"
          className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover"
        />

         //  Mobile image  
        <img
          src="/images/mobile screen size.png"
          alt="Mobile Screen"
          className="sm:hidden absolute top-0 left-0 w-full h-full object-cover"
        />
      </div> */}

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-12 py-12 sm:py-16 md:flex-row md:items-center md:gap-0 md:py-28">
        <div className="min-w-0 md:w-1/2">
          <h2 className="mb-3 text-3xl leading-tight text-[#0b1109] xl:text-[3rem] text-center lg:text-start capitalize font-sans">
            Our customers make us great
          </h2>
          <p className="max-w-md  text-lg leading-relaxed text-[#090a0c] xl:text-lg text-center lg:text-start font-sans font-light">
            We prioritize understanding their needs and challenges, striving to
            deliver tailored solutions that not only meet but exceed their
            expectations . By forging strong relationships, we view our
            customers as integral partners in our journey toward mutual success
            . Their satisfaction fuels our drive for continuous innovation,
            ensuring that we remain their trusted ally in achieving their goals.
          </p>
        </div>
        <div className="md:gap-x-18 grid w-60  min-w-0 md:grid-cols-3 grid-cols-2  gap-x-12 gap-y-8 text-lg font-semibold text-[#8a95aa] md:w-2/5 holder">
          {customerImages.map((item, index) => (
            <div
              key={index}
              className="flex min-w-0 cursor-pointer items-center justify-center p-2"
            >
              <img
                data-aos="fade-up"
                src={item}
                alt={`Customer ${index + 1}`}
                className="block w-full h-auto transform transition-transform duration-300 hover:scale-150"
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default FullScreenImage;

// <div className="w-screen h-screen">
//   <img
//     src="/images/Clients & Partners.png"
//     alt="Full Screen"
//     className="w-full h-full object-contain sm:object-cover"
//   />
// </div>
// <div className="relative w-screen h-screen">
//   <img
//     src="/images/Clients & Partners.png"

//     "/images/mobile screen size.png"
//     alt="Full Screen"
//     className="absolute top-0 left-0 w-full h-full object-cover"
//   />
// </div>

//     <div className="relative w-full h-screen overflow-hidden">
//   {/* Default image for large screens */}
//   <img
//     src="/images/Clients & Partners.png"
//     alt="Full Screen"
//     className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover"
//   />

//   {/* Image for mobile screens */}
//   <img
//     src="/images/mobile screen size.png"
//     alt="Mobile Screen"
//     className="sm:hidden absolute top-0 left-0 w-full h-full object-cover"
//   />
// </div>
