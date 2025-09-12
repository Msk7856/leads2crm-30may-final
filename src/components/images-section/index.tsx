import Image from "next/image";
import './Img.css'

const customerImages = [
  "images/ClientLogos/1.png",
  "images/ClientLogos/2.png",
  "images/ClientLogos/3.png",
  "images/ClientLogos/4.png",
  "images/ClientLogos/5.png",
  "images/ClientLogos/6.png",
  "images/ClientLogos/7.png",
  "images/ClientLogos/8.png",
  "images/ClientLogos/9.png",
  "images/ClientLogos/10.png",
  "images/ClientLogos/11.png",
  "images/ClientLogos/12.png",
];


const clients = [
  { alt: 'Client 1', src: 'images/ClientLogos/1.png' },
  { alt: 'Client 2', src: 'images/ClientLogos/2.png' },
  { alt: 'Client 3', src: 'images/ClientLogos/3.png' },
  { alt: 'Client 4', src: 'images/ClientLogos/4.png' },
  { alt: 'Client 5', src: 'images/ClientLogos/5.png' },
  { alt: 'Client 6', src: 'images/ClientLogos/6.png' },
  { alt: 'Client 7', src: 'images/ClientLogos/7.png' },
  { alt: 'Client 8', src: 'images/ClientLogos/8.png' },
  { alt: 'Client 9', src: 'images/ClientLogos/9.png' },
  { alt: 'Client 10', src: 'images/ClientLogos/10.png' },
  { alt: 'Client 11', src: 'images/ClientLogos/11.png' },
  { alt: 'Client 12', src: 'images/ClientLogos/12.png' },
];

const FullScreenImage = () => {
  return (
    <div className="overflow-x-hidden bg-[#ffffff] ">
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
