// import Image from 'next/image';

// const Services = () => {
//   return (
//     <section className="bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
//             OUR PRIMARY SERVICES
//           </h2>
//           <p className="mt-4 text-xl text-gray-600">
//             No matter what your tech requirements are, we're here to assist!
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Service 1: Zoho Jumpstart */}
//           <div className="bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 p-10 text-center">
//             <Image
//               src="/zoho-green.png" // replace with the correct image path
//               alt="Zoho Jumpstart"
//               width={130}
//               height={130}
//               className="mx-auto"
//             />
//             <h3 className="text-3xl font-semibold text-gray-900 mt-6">Zoho Jumpstart</h3>
//             <p className="mt-4 text-lg text-gray-600">
//               Quick setup service that includes configuration, data migration, and training on Zoho apps.
//             </p>
//           </div>

//           {/* Service 2: Odoo Jumpstart */}
//           <div className="bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 p-10 text-center">
//             <Image
//               src="/odd-green.png" // replace with the correct image path
//               alt="Odoo Jumpstart"
//               width={130}
//               height={130}
//               className="mx-auto"
//             />
//             <h3 className="text-3xl font-semibold text-gray-900 mt-6">Odoo Jumpstart</h3>
//             <p className="mt-4 text-lg text-gray-600">
//               Odoo setup service including configuration, data migration, and user training.
//             </p>
//           </div>

//           {/* Service 3: Website Development */}
//           <div className="bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 p-10 text-center">
//             <Image
//               src="/coding.png" // replace with the correct image path
//               alt="Website Development"
//               width={130}
//               height={130}
//               className="mx-auto"
//             />
//             <h3 className="text-3xl font-semibold text-gray-900 mt-6">Website Development</h3>
//             <p className="mt-4 text-lg text-gray-600">
//               Professional WordPress website development with efficient setup and customization.
//             </p>
//           </div>

//           {/* Service 4: Oracle ERP */}
//           <div className="bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 p-10 text-center">
//             <Image
//               src="/oracle-erp.png" // replace with the correct image path
//               alt="Oracle ERP"
//               width={130}
//               height={130}
//               className="mx-auto"
//             />
//             <h3 className="text-3xl font-semibold text-gray-900 mt-6">Oracle ERP</h3>
//             <p className="mt-4 text-lg text-gray-600">
//               Implementing Oracle ERP solutions to streamline operations, finance, and supply chain management.
//             </p>
//           </div>

//           {/* Service 5: Ecommerce Development */}
//           <div className="bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 p-10 text-center">
//             <Image
//               src="/ecommerce.png" // replace with the correct image path
//               alt="Ecommerce Development"
//               width={130}
//               height={130}
//               className="mx-auto"
//             />
//             <h3 className="text-3xl font-semibold text-gray-900 mt-6">Ecommerce Development</h3>
//             <p className="mt-4 text-lg text-gray-600">
//               Building scalable and secure ecommerce platforms to drive sales and enhance customer experience.
//             </p>
//           </div>

//           {/* Service 6: Multi-level Integration */}
//           <div className="bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 p-10 text-center">
//             <Image
//               src="/integration.png" // replace with the correct image path
//               alt="Multi-level Integration"
//               width={130}
//               height={130}
//               className="mx-auto"
//             />
//             <h3 className="text-3xl font-semibold text-gray-900 mt-6">Multi-level Integration</h3>
//             <p className="mt-4 text-lg text-gray-600">
//               Seamlessly integrate multiple systems and platforms for optimal data flow and operational efficiency.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
//2
import Link from 'next/link';

interface Service {
  id: number;
  name: string;
  href: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    id: 1,
    name: 'Zoho',
    href: '/service/zoho',
    description: 'Tailored solutions to optimize your business with Zoho.',
    imageUrl: '/images/services/z.jpg', // replace with your image path
  },
  {
    id: 2,
    name: 'Odoo',
    href: '/service/odoo',
    description: 'Integrated applications to run your business smoothly.',
    imageUrl: '/images/services/odoo.png',
  },
  {
    id: 3,
    name: 'Oracle ERP',
    href: '/service/oracle',
    description: 'Robust solutions for database management and analytics.',
    imageUrl: '/images/services/orc.jpg',
  },
  {
    id: 4,
    name: 'Ecommerce Development',
    href: '/service/ecommerce',
    description: 'Building scalable and secure ecommerce platforms.',
    imageUrl: '/images/services/ecommerce.jpg', // replace with your image path
  },
  {
    id: 5,
    name: 'Multi-level Integration',
    href: '/service/integration',
    description: 'Seamlessly integrate multiple systems for operational efficiency.',
    imageUrl: '/images/services/integration.jpg', // replace with your image path
  },
  {
    id: 6,
    name: 'Microsoft Licensing',
    href: '/service/microsoft-licensing',
    description: 'Capitalize on MS licenses that deliver you flexible, feature-rich, and agile solutions.',
    imageUrl: '/images/services/microsoft-licensing.jpg', // replace with your image path
  },
];

const Services = () => {
  return (
    <section className="bg-black pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container">
        <span className="block text-lg font-semibold text-primary mb-2">WHAT WE DO</span>

        <h2 className="text-3xl font-bold text-white leading-tight sm:text-4xl md:text-[45px] mb-10">
          We help build clients their dream projects
        </h2>

        <div className="flex flex-wrap">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10"
            >
              <div
                className="bg-white h-full flex flex-col rounded-lg shadow-md transition-all duration-300 transform hover:bg-blue-500 hover:text-white"
              >
                <div className="block relative w-full aspect-[1/1] min-h-[250px]">
                  <img
                    alt={service.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center rounded-t-lg"
                    src={service.imageUrl}
                  />
                </div>
                <div className="p-8 sm:p-11 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-dark hover:text-white">
                      <Link href={service.href}>{service.name}</Link>
                    </h3>
                    {service.description && (
                      <p className="mb-6 pb-7 border-b border-gray-200 text-base leading-relaxed text-body-color">
                        {service.description}
                      </p>
                    )}
                  </div>
                  <Link href={service.href}>
                    <div className="text-base font-medium text-body-color hover:text-white inline-flex items-center">
                      Learn more 🡢
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/service">
          <div className="text-lg font-medium text-white underline hover:text-primary mt-4">
            {/* EXPLORE SERVICES */}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;
