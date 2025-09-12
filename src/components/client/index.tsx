
import Image from 'next/image';

export default function BrandsClient() {
  // Array of brand logos with their respective src and alt text
  const clientLogos = [
    { src: "/images/eclient/1.kaec-logo.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/Adtech_ATC_Logo.jpeg", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/AlomairLogo.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/AlReefLogo.jpg", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/Alshafi.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/ALWATTAN.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/AMD_Logo.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/Asas_Logo.jpg", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/ASSAABLOY.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/Burkan.jpg", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/Costa-Coffee.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/EPS.jpg", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/expertise.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/FastFayanza.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/FirstChoice.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/indesefoodics.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/Ketsah.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/klimafactory.png", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/KlimaTech_Logo.jpg", alt: "IIFL", width: 130, height: 50 },
    { src: "/images/eclient/MBSC.png", alt: "SpiceJet", width: 120, height: 50 },
    { src: "/images/eclient/oceanrestaurant.png", alt: "L'Oreal", width: 100, height: 50 },
    { src: "/images/eclient/ORASCOMCONSTRUCTIONPLC.png", alt: "Amazon", width: 90, height: 50 },
    { src: "/images/eclient/PlatFormEvents.png", alt: "Tata Sky", width: 120, height: 50 },
    { src: "/images/eclient/practiceevolutions.jpg", alt: "Zomato", width: 100, height: 50 },
    { src: "/images/eclient/RaedMuradTradingEst.png", alt: "Daimler", width: 150, height: 50 },
    { src: "/images/eclient/Refhouse.jpg", alt: "Max Life Insurance", width: 80, height: 50 },
    { src: "/images/eclient/RollLandscoffee.jpg", alt: "Kempinski", width: 140, height: 50 },
    { src: "/images/eclient/RoyalGreenLogo.png", alt: "Leminar", width: 90, height: 50 },
    { src: "/images/eclient/Sashmagroup.jpg", alt: "Leminar", width: 90, height: 50 },
    { src: "/images/eclient/SaudiDamahPharmacy.png", alt: "Leminar", width: 90, height: 50 },
    { src: "/images/eclient/SaudiFan.jpg", alt: "Leminar", width: 90, height: 50 },
    { src: "/images/eclient/SaudiRegister.jpg", alt: "Leminar", width: 90, height: 50 },
    { src: "/images/eclient/SaudiArabiaRailways_SAR.jpg", alt: "Leminar", width: 90, height: 50 },
    { src: "/images/eclient/SPS_Logo.png", alt: "Leminar", width: 90, height: 50 },
    { src: "/images/eclient/TheWorldAcademy.png", alt: "Leminar", width: 90, height: 50 },
    { src: "/images/eclient/ThuriahMedicalCenter.png", alt: "Leminar", width: 90, height: 50 },
    { src: "/images/eclient/UnitedHouseTradingCo.png", alt: "Leminar", width: 90, height: 50 },
    { src: "/images/eclient/wazzana.png", alt: "Leminar", width: 90, height: 50 },

  ];

  return (
    <section className="zwc-brand py-10 bg-white">
      <div className="content-wrap bottom-animated animated middle-animated text-center">
        <h3 className="text-3xl font-semibold mb-8 text-black">Brands that trust us</h3>
        <div className="zwc-home-brand">
          <ul id="brandlisting" className="flex flex-wrap justify-center gap-8">
            {clientLogos.map((logo, index) => (
              <li key={index} className="brand-item flex justify-center items-center">
                
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80} // Fixed width
                  height={50} // Fixed height
                  // className="object-contain"
                  className="object-contain w-[100px] h-[60px] overflow-hidden"
                />
              </li>
            ))}
          </ul>
          <a
            className="zwc-btn-nofill inline-block mt-8 text-center px-6 py-2 border border-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-300"
            href="/customers.html?ireft=nhome&src=home"
          >
            Customer Stories
          </a>
        </div>
      </div>
    </section>
  );
}
