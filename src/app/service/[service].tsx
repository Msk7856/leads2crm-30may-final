// import { useRouter } from 'next/router';
// import Image from 'next/image';

// const servicesData = {
//   erp: {
//     name: 'ERP',
//     description: 'Comprehensive solutions for managing business processes.',
//     imageUrl: 'https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fservices%2Fservice-03.jpg&w=1920&q=75',
//   },
//   zoho: {
//     name: 'Zoho',
//     description: 'Tailored solutions to optimize your business with Zoho.',
//     imageUrl: 'https://example.com/images/services/zoho.jpg',
//   },
//   odoo: {
//     name: 'Odoo',
//     description: 'Integrated applications to run your business smoothly.',
//     imageUrl: 'https://example.com/images/services/odoo.jpg',
//   },
//   oracle: {
//     name: 'Oracle',
//     description: 'Robust solutions for database management and analytics.',
//     imageUrl: 'https://example.com/images/services/oracle.jpg',
//   },
// };

// const ServiceDetails = () => {
//   const router = useRouter();
//   const { service } = router.query; // Extracting the dynamic segment from the URL

//   if (!service) {
//     return <p>Loading...</p>; // Loading state if `service` isn't ready yet
//   }

//   const serviceData = servicesData[service.toLowerCase()]; // Match the service based on the route param

//   if (!serviceData) {
//     return (
//       <div className="text-center py-20">
//         <h1 className="text-4xl font-bold">Service Not Found</h1>
//         <p className="text-lg mt-4">
//           The service you are looking for does not exist. Please check the URL or go back to the{' '}
//           <a href="/service" className="text-primary underline">services page</a>.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="container py-20">
//       <h1 className="text-4xl font-bold text-center mb-8">{serviceData.name}</h1>
//       <div className="flex justify-center mb-8">
//         <Image
//           src={serviceData.imageUrl}
//           alt={serviceData.name}
//           width={800}
//           height={500}
//           className="rounded-lg"
//         />
//       </div>
//       <p className="text-lg text-center max-w-[800px] mx-auto leading-relaxed">
//         {serviceData.description}
//       </p>
//     </div>
//   );
// };

// export default ServiceDetails;
//2
import { useRouter } from 'next/router';
import Image from 'next/image';

const servicesData = {
  erp: {
    name: 'ERP',
    description: 'Comprehensive solutions for managing business processes.',
    imageUrl: 'https://agency.demo.nextjstemplates.com/_next/image?url=%2Fimages%2Fservices%2Fservice-03.jpg&w=1920&q=75',
  },
  zoho: {
    name: 'Zoho',
    description: 'Tailored solutions to optimize your business with Zoho.',
    imageUrl: 'https://example.com/images/services/zoho.jpg',
  },
  odoo: {
    name: 'Odoo',
    description: 'Integrated applications to run your business smoothly.',
    imageUrl: 'https://example.com/images/services/odoo.jpg',
  },
  oracle: {
    name: 'Oracle',
    description: 'Robust solutions for database management and analytics.',
    imageUrl: 'https://example.com/images/services/oracle.jpg',
  },
};

const ServiceDetails = () => {
  const router = useRouter();
  const { service } = router.query; // Extracting the dynamic segment from the URL

  if (!service) {
    return <p>Loading...</p>; // Loading state if `service` isn't ready yet
  }

  // Ensure `service` is a string before calling `toLowerCase`
  const serviceKey = Array.isArray(service) ? service[0] : service; // Handle both cases: array or string

  // Handle case where serviceKey might be an unexpected value
  const serviceData = servicesData[serviceKey.toLowerCase()]; // Match the service based on the route param

  if (!serviceData) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <p className="text-lg mt-4">
          The service you are looking for does not exist. Please check the URL or go back to the
          <a href="/service" className="text-primary underline">services page</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold text-center mb-8">{serviceData.name}</h1>
      <div className="flex justify-center mb-8">
        <Image
          src={serviceData.imageUrl}
          alt={serviceData.name}
          width={800}
          height={500}
          className="rounded-lg"
        />
      </div>
      <p className="text-lg text-center max-w-[800px] mx-auto leading-relaxed">
        {serviceData.description}
      </p>
    </div>
  );
};


export default ServiceDetails;
//2 for vercel
