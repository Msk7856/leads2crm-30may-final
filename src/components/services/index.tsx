
// //2
// import Link from 'next/link';

// interface Service {
//   id: number;
//   name: string;
//   href: string;
//   description: string;
//   imageUrl: string;
// }

// const services: Service[] = [
//   {
//     id: 1,
//     name: 'ERP',
//     href: '/service/erp',
//     description: 'Comprehensive solutions for managing business processes.',
//     imageUrl: 'https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fservices%2Fservice-03.jpg&w=1920&q=75',
//   },
//   {
//     id: 2,
//     name: 'Zoho',
//     href: '/service/zoho',
//     description: 'Tailored solutions to optimize your business with Zoho.',
//     // imageUrl: '/images/services/zoho.jpg',
//     imageUrl: '/images/services/z.jpg',

//   },
//   {
//     id: 3,
//     name: 'Odoo',
//     href: '/service/odoo',
//     description: 'Integrated applications to run your business smoothly.',
//     imageUrl: '/images/services/odoo.png',
//   },
//   {
//     id: 4,
//     name: 'Oracle',
//     href: '/service/oracle',
//     description: 'Robust solutions for database management and analytics.',
//     imageUrl: '/images/services/orc.jpg',
//   },
// ];

// const Services = () => {
//   return (
//     <section className="bg-black pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      
//       <div className="container">
//       <span className="block text-lg font-semibold text-primary mb-2">WHAT WE DO</span>

//         <h2 className="text-3xl font-bold text-white leading-tight sm:text-4xl md:text-[45px] mb-10">
//           We help build clients their dream projects
//         </h2>
//         <div className="flex flex-wrap">
//           {services.map((service) => (
//             // <div key={service.id} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
//             //   <div className="bg-white">
//             //     <div className="block relative w-full aspect-[34/23]">
//             //       <img
//             //         alt={service.name}
//             //         loading="lazy"
//             //         decoding="async"
//             //         className="w-full object-cover object-center"
//             //         src={service.imageUrl}
//             //       />
//             //     </div>
//             //     <div className="p-8 sm:p-11">
//             //       <h3 className="mb-4 text-lg font-bold text-dark hover:text-primary">
//             //         <Link href={`/services/${service.id}`}>{service.name}</Link>
//             //       </h3>
//             //       {service.description && (
//             //         <p className="mb-6 pb-7 border-b border-gray-200 text-base leading-relaxed text-body-color">
//             //           {service.description}
//             //         </p>
//             //       )}
//             //       <Link href={`/services/${service.id}`}>
//             //         <div className="text-base font-medium text-body-color hover:text-primary inline-flex items-center">
//             //           View Details<span className="ml-3">→</span>
//             //         </div>
//             //       </Link>
//             //     </div>
//             //   </div>
//             // </div>

//             <div key={service.id} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
//   <div className="bg-white h-full flex flex-col rounded-lg shadow-md" >
//     <div className="block relative w-full aspect-[34/23] min-h-[200px]">
//       <img
//         alt={service.name}
//         loading="lazy"
//         decoding="async"
//         className="w-full h-full object-cover object-center"
//         src={service.imageUrl}
//       />
//     </div>
//     <div className="p-8 sm:p-11 flex-grow flex flex-col justify-between 
//     ">
//       <div>
//         <h3 className="mb-4 text-lg font-bold text-dark hover:text-primary">
//           <Link href={`/services/${service.id}`}>{service.name}</Link>
//         </h3>
//         {service.description && (
//           <p className="mb-6 pb-7 border-b border-gray-200 text-base leading-relaxed text-body-color">
//             {service.description}
//           </p>
//         )}
//       </div>
//       <Link href={`/services/${service.id}`}>
//         <div className="text-base font-medium text-body-color hover:text-primary inline-flex items-center">
//           View Details<span className="ml-3">→</span>
//         </div>
//       </Link>
//     </div>
//   </div>
// </div>

//           ))}
//         </div>
//         <Link href="/service">
//           <div className="text-lg font-medium text-white underline hover:text-primary mt-4">
//             {/* EXPLORE SERVICES */}
//           </div>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Services;

//
import Link from 'next/link';

interface Service {
  id: number;
  name: string;
  href: string;
  description: string;
  icon: string; // Use string type for image URL
}

const services: Service[] = [
  
  {
    id: 2,
    name: 'Zoho',
    href: '/service/zoho',
    description: 'Tailored solutions to optimize your business with Zoho.',
    icon: 'https://hallek.com.sa/wp-content/uploads/al_opt_content/IMAGE/hallek.com.sa/wp-content/uploads/2024/08/zoho-green.png.bv_resized_desktop.png.bv.webp',
  },
  {
    id: 3,
    name: 'Odoo',
    href: '/service/odoo',
    description: 'Integrated applications to run your business smoothly.',
    icon: 'https://hallek.com.sa/wp-content/uploads/al_opt_content/IMAGE/hallek.com.sa/wp-content/uploads/2024/08/zoho-green.png.bv_resized_desktop.png.bv.webp',
  },
  {
    id: 4,
    name: 'Oracle',
    href: '/service/oracle',
    description: 'Robust solutions for database management and analytics.',
    icon: 'https://hallek.com.sa/wp-content/uploads/al_opt_content/IMAGE/hallek.com.sa/wp-content/uploads/2024/08/zoho-green.png.bv_resized_desktop.png.bv.webp',
  },
  {
    id: 1,
    name: 'Website Development',
    href: '/service/website-development',
    description: 'Custom websites/software built to suit your business needs.',
    icon: 'https://hallek.com.sa/wp-content/uploads/al_opt_content/IMAGE/hallek.com.sa/wp-content/uploads/2024/08/zoho-green.png.bv_resized_desktop.png.bv.webp',
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

        <div className="flex flex-wrap justify-between">
          {services.map((service) => (
            <div key={service.id} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
              <div className="bg-white rounded-lg shadow-md flex flex-col">
                {/* Icon Section */}
                <div className="flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mx-auto mt-4">
                  <img src={service.icon} alt={service.name} className="w-12 h-12 object-contain" />
                </div>

                {/* Text Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-dark mb-4 text-center">
                    <Link href={`/services/${service.id}`}>{service.name}</Link>
                  </h3>
                  {service.description && (
                    <p className="text-base text-body-color mb-6 pb-7 border-b border-gray-200 text-center">
                      {service.description}
                    </p>
                  )}

                  <Link href={`/services/${service.id}`}>
                    <div className="text-base font-medium text-body-color hover:text-primary inline-flex items-center justify-center w-full">
                      View Details <span className="ml-3">→</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href="/service">
          <div className="text-lg font-medium text-white underline hover:text-primary mt-4 text-center">
            {/* EXPLORE SERVICES */}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;
