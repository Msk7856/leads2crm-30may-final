
"use client"
const services = [
  {
    title: 'Customization Services',
    description: 'Tailored Zoho solutions to fit your business needs.',
    icon: '/images/zoho/customise_services.svg',
    points: [
      'Custom workflow automation',
      'Custom report generation',
      'Custom dashboard creation',
      'Custom integration  applications',
      'Custom module creation',
    ],
  },
  {
    title: 'Integration Services',
    description: 'Seamless integration with third-party services.',
    icon: '/images/zoho/Integration_services.svg',
    points: [
      'Microsoft 365',
      'Google Workspace',
      'Slack',
      'Zapier',
      'Custom APIs',
    ],
  },
  {
    title: 'Implementation Services',
    description: 'Smooth Zoho implementation with minimal disruption.',
    icon: '/images/zoho/Implementaion_services.svg',
    points: [
      'Data migration',
      'System configuration',
      'User training',
      'Ongoing support & maintenance',
    ],
  },
  {
    title: 'Deployment Services',
    description: 'Secure cloud deployment with Zoho Cloud.',
    icon: '/images/zoho/deployment_services.svg',
    points: [
      'Cloud deployment (Zoho Cloud)',
      'Data backup and recovery',
      'Security and compliance',
      'Ongoing support & maintenance',
    ],
  },
];
import Image from 'next/image';
import Head from 'next/head';
import { useRef } from 'react';

export default function Home() {
  const consultationRef = useRef<HTMLDivElement>(null);

  const scrollToConsultation = () => {
    if (consultationRef.current) {
      consultationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <Head>
        <title>Zoho with Maiprosoft</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <main className="bg-gray-100 min-h-screen font-[Poppins, sans-serif] pt-[61px]"
      
      >
       
{/* <div className="w-full p-4 flex flex-col lg:flex-row items-center" style={{ background: 'linear-gradient(to right, #e8eef8, #ffffff)', color: '#000000' }}>
  <div className="lg:w-1/2 p-4">
  <div className="flex justify-center w-full">
    <Image
      src="/images/zoho/ZOHO_logo_2023.svg.png"
      alt="Zoho logo with colorful squares"
      width={250}
      height={250}
      className="mb-10"
    />
  </div>
   
    <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
      Unlock the full potential of Zoho with Maiprosoft
    </h1>
    <p className="text-lg mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 300 }}>
      Your trusted partner for Zoho projects, implementation, and management.
    </p>
    <button className="bg-[#0078d4ff] text-white px-6 py-3 rounded shadow hover:bg-blue-600"
            onClick={scrollToConsultation}
    >
      Book a free Consultation
    </button>
  </div>

  <div className="lg:w-1/2 p-4 grid grid-cols-2 gap-4">
    {[ 
      'nYNMV680JeyCMShIOdf28lpf2sIfsuY2WNWcxYttSgwz4r9PB',
      'oenvbaGmx4VACyeS6DkHsjW5V0U7qIf7TaSPTQAATLJK81ePB',
      'cNHpNoEbuM5eXqfU1jyRSW4z0NCVYQZjobmWmEnyheLU81ePB',
      '88YSqw9wGEaxNtjGzH8rKsHKWRfVuHlvtHUIAYC8NKWDfafnA'
    ].map((img, idx) => (
      <Image
        key={idx}
        src={`https://storage.googleapis.com/a1aa/image/${img}.jpg`}
        alt="Zoho project visuals"
        width={300}
        height={300}
        className="w-full h-full object-cover rounded shadow-lg"
      />
    ))}
  </div>
</div> */}


{/* <div className="w-full p-4 flex flex-col lg:flex-row items-center" style={{ background: 'linear-gradient(to right, #e8eef8, #ffffff)', color: '#000000' }}>
  <div className="lg:w-1/2 p-4">
    <div className="flex justify-center w-full mb-10">
      <Image
        src="/images/zoho/ZOHO_logo_2023.svg.png"
        alt="Zoho logo with colorful squares"
        width={250}
        height={250}
      />
    </div>

    <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
      Unlock the full potential of Zoho with Maiprosoft
    </h1>
    <p className="text-lg mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 300 }}>
      Your trusted partner for Zoho projects, implementation, and management.
    </p>
    <button
      className="bg-[#0078d4ff] text-white px-6 py-3 rounded shadow hover:bg-blue-600"
      onClick={scrollToConsultation}
    >
      Book a free Consultation
    </button>
  </div>

  <div className="lg:w-1/2 p-4 flex justify-center items-center">
  <div className="grid grid-cols-2 gap-4 w-full">
    {[ 
      'nYNMV680JeyCMShIOdf28lpf2sIfsuY2WNWcxYttSgwz4r9PB',
      'oenvbaGmx4VACyeS6DkHsjW5V0U7qIf7TaSPTQAATLJK81ePB',
      'cNHpNoEbuM5eXqfU1jyRSW4z0NCVYQZjobmWmEnyheLU81ePB',
      '88YSqw9wGEaxNtjGzH8rKsHKWRfVuHlvtHUIAYC8NKWDfafnA'
    ].map((img, idx) => (
      <Image
        key={idx}
        src={`https://storage.googleapis.com/a1aa/image/${img}.jpg`}
        alt="Zoho project visuals"
        width={100}  // Adjusted width for smaller images
        height={100} // Adjusted height for smaller images
        className="w-full h-full object-cover rounded shadow-lg"
      />
    ))}
  </div>
</div>

</div> */}

<div
  className="w-full p-12 flex flex-col lg:flex-row items-center"
  style={{ background: 'linear-gradient(to right, #e8eef8, #ffffff)', color: '#000000' }}
>
  <div className="lg:w-1/2 p-4">
    <div className="flex justify-center w-full mb-10">
      <Image
        src="/images/zoho/ZOHO_logo_2023.svg.png"
        alt="Zoho logo with colorful squares"
        width={250}
        height={250}
      />
    </div>

    <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
      Unlock the full potential of Zoho with Maiprosoft
    </h1>
    <p className="text-lg mb-6" style={{ fontFamily: 'Quicksand, sans-serif', fontWeight: 300 }}>
      Your trusted partner for Zoho projects, implementation, and management.
    </p>
    <button
      className="bg-[#0078d4ff] text-white px-6 py-3 rounded shadow hover:bg-blue-600"
      onClick={scrollToConsultation}
    >
      Book a free Consultation
    </button>
  </div>

  <div className="lg:w-1/2 p-4 flex justify-center items-center">
    {/* <div className="grid grid-cols-2 gap-4 w-full">
      {[
        'nYNMV680JeyCMShIOdf28lpf2sIfsuY2WNWcxYttSgwz4r9PB',
        'oenvbaGmx4VACyeS6DkHsjW5V0U7qIf7TaSPTQAATLJK81ePB',
        'cNHpNoEbuM5eXqfU1jyRSW4z0NCVYQZjobmWmEnyheLU81ePB',
        '88YSqw9wGEaxNtjGzH8rKsHKWRfVuHlvtHUIAYC8NKWDfafnA',
      ].map((img, idx) => (
        <div
          key={idx}
          className="rounded shadow-lg flex-shrink-0"
          style={{ width: '80px', height: '80px', overflow: 'hidden' }}
        >
          <Image
            src={`https://storage.googleapis.com/a1aa/image/${img}.jpg`}
            alt={`Zoho project visual ${idx + 1}`}
            width={80} // Adjust the image width
            height={80} // Adjust the image height
            className="object-cover"
          />
        </div>
      ))}
    </div> */}
    <div className="grid grid-cols-2 gap-4 w-full">
  {[
    '/images/zoho/Zoho/Images/image1.png',
    '/images/zoho/Zoho/Images/image2.png',
    '/images/zoho/Zoho/Images/image3.png',
    '/images/zoho/Zoho/Images/image4.png',

  ].map((img, idx) => (
    <div
      key={idx}
      className="rounded shadow-lg flex-shrink-0"
      style={{ width: '80px', height: '80px', overflow: 'hidden' }}
    >
      <Image
        src={img}
        alt={`Local project visual ${idx + 1}`}
        width={80} // Adjust the image width
        height={80} // Adjust the image height
        className="object-cover"
      />
    </div>
  ))}
</div>

  </div>
</div>



       

<section className="bg-white text-gray-800 py-12">
  <div className="container mx-auto px-4">
    <h1 className="text-4xl font-medium text-center mb-6 font-[Poppins]">
      Get Started Today!
    </h1>
    <p className="text-center mb-8 max-w-2xl lg:max-w-full mx-auto font-[Poppins]">
      Maiprosoft is a certified Zoho partner, offering expert customization, implementation, and deployment services to help businesses like yours get the most out of Zoho&#39;s suite of productivity applications.
    </p>

    <div className="text-center mb-12">
      <button className="bg-[#0078d4ff] text-white px-6 py-3 rounded shadow hover:bg-blue-600"
              onClick={scrollToConsultation}>
        Book a free Consultation
      </button>
    </div>

    <div className="grid place-items-center mb-12">
      <Image
        src="https://storage.googleapis.com/a1aa/image/MxDrADgxKsJhFRV4QJNsnUp9uF2chhOxcQbY0QfI1RDnA1fTA.jpg"
        alt="People working on a flow chart with sticky notes and laptops"
        width={1200}
        height={250}
        className="rounded-lg shadow-lg"
      />
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 relative">
      {services.map((service, index) => (
        <div key={index} className="bg-[#0078d4ff] text-white p-6 rounded-lg shadow-lg relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 bg-[#0078d4ff] p-2 rounded-full"
            />
          </div>
          <div className="text-center mt-10 mb-4">
            <h2 className="text-2xl font-medium mb-2 font-[Poppins] whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
              {service.title}
            </h2>
            <p className="font-[Poppins]">{service.description}</p>
          </div>

         
          <ul className="list-disc list-none list-inside space-y-2 font-[Poppins]">
  {service.points.map((point, i) => (
    <li key={i} className="text-yellow-400 list-inside">
      <span className="text-maiy">•</span> {point}
    </li>
  ))}
</ul>

        </div>
      ))}
    </div>
  </div>
</section>


    <section className="bg-gray-800 text-white py-12">
  <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-3xl font-semibold mb-4">Managed Services</h2>
      <p className="text-lg mb-6">
        Ongoing support and management of your Zoho setup.
        <br /> Regular updates, backups, and security checks.
        <br /> Performance optimization and troubleshooting.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Support Services</h2>
      <p className="text-lg mb-6">
        Priority support for Zoho-related issues.
        <br /> Timely resolution of errors and bugs.
        <br /> Guidance on best practices and usage.
      </p>
      <h2 className="text-3xl font-semibold mb-4">Benefits of Our Zoho Services</h2>
      {/* <ul className="list-disc pl-5 space-y-3">
  <li className="text-yellow-400">Improved productivity and efficiency</li>
  <li className="text-yellow-400">Enhanced collaboration and communication</li>
  <li className="text-yellow-400">Customized solutions tailored to your business</li>
  <li className="text-yellow-400">Seamless integration with existing systems</li>
  <li className="text-yellow-400">Ongoing support and maintenance</li>
</ul> */}
<ul className="list-none pl-5 space-y-3">
  <li className="flex items-start">
    <span className="text-maiy pr-2">•</span>
    <span>Improved productivity and efficiency</span>
  </li>
  <li className="flex items-start">
    <span className="text-maiy pr-2">•</span>
    <span>Enhanced collaboration and communication</span>
  </li>
  <li className="flex items-start">
    <span className="text-maiy pr-2">•</span>
    <span>Customized solutions tailored to your business</span>
  </li>
  <li className="flex items-start">
    <span className="text-maiy pr-2">•</span>
    <span>Seamless integration with existing systems</span>
  </li>
  <li className="flex items-start">
    <span className="text-maiy pr-2">•</span>
    <span>Ongoing support and maintenance</span>
  </li>
</ul>


    </div>
    <div className="md:w-1/2 flex justify-center">
      <img
        src="https://storage.googleapis.com/a1aa/image/hFDTeIZSigxfkUMjIuu7owi2eZCsV7N1F2bhRAKx6fYjfN9fE.jpg"
        alt="A person working on multiple computer screens"
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>
<section className="bg-maiy text-black py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-6">Zoho CRM</h1>
            <p className="mb-8">
              Transform customer interactions with Zoho CRM. Automate sales, marketing, and support processes. Enhance lead management, pipeline visibility, and team collaboration. Make data-driven decisions with real-time analytics.
            </p>

            <h1 className="text-3xl font-bold mb-6">Zoho Projects</h1>
            <p className="mb-8">
              Simplify project execution with Zoho Projects. Plan, track, and collaborate on projects. Automate workflows, task assignments, and enhance team productivity to boost profitability.
            </p>

            <h1 className="text-3xl font-bold mb-6">Zoho Inventory</h1>
            <p className="mb-8">
              Manage your inventory effortlessly with Zoho Inventory. Track stock levels, automate orders, and optimize warehouse operations. Reduce stockouts and make data-driven decisions.
            </p>

            <h1 className="text-3xl font-bold mb-6">Zoho Books</h1>
            <p className="mb-8">
              Streamline financial management with Zoho Books. Automate invoicing, track expenses, and get real-time insights into cash flow and profits.
            </p>

            <h1 className="text-3xl font-bold mb-6">Zoho People</h1>
            <p className="mb-8">
              Automate HR processes with Zoho People. Manage employee data, track attendance, and streamline payroll and compliance.
            </p>

            <h1 className="text-3xl font-bold mb-6">Zoho Creator</h1>
            <p className="mb-8">
              Simplify business operations with custom applications using Zoho Creator.
            </p>

            <h1 className="text-3xl font-bold mb-6">Zoho One</h1>
            <p className="mb-8">
              Implement and manage Zoho One to streamline business operations with a unified platform.
            </p>

            
          </div>

          <div className="flex justify-center">
            <Image
              src="https://storage.googleapis.com/a1aa/image/7S2U5vKUPmLkIRapmpWRAI53rHGVcXmp3TaaZey60SLHepfnA.jpg"
              alt="Zoho Products Image"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
   
    <section className="bg-[#7dd3ff] py-12 flex justify-center">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-12 px-6">
    {/* Text Section */}
    <div className="text-left max-w-lg">
      <h2 className="text-3xl font-semibold text-black mb-4">Why Choose Maiprosoft?</h2>
      <ul className="text-lg text-black space-y-2">
        <li>Proven expertise in Zoho implementation and management</li>
        <li>Customized solutions tailored to your business needs</li>
        <li>Responsive support and timely issue resolution</li>
        <li>Cost-effective solutions without compromising on quality</li>
      </ul>
    </div>

    {/* Image Section */}
    <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 bg-cover bg-center rounded-lg shadow-xl overflow-hidden">
      <img
        src="https://thumbs.dreamstime.com/b/elections-voting-concept-vector-flat-style-modern-background-illustration-political-campaign-flyer-leaflets-websites-119119868.jpg?w=768"
        alt="Why choose us image"
        className="object-cover w-full h-full"
      />
      
  </div>
  <div className=" inset-0 bg-black opacity-50"></div>
      <h1 className=" text-2xl md:text-3xl font-bold text-white text-center">
        WHY CHOOSE US?
      </h1>
    </div>
</section>


    <section className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center justify-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://storage.googleapis.com/a1aa/image/Us2JN7WsDLaJNNJMIpqaYHzywSI4pbgUTaZqojgtWCQvr6fJA.jpg"
          alt="Person working on a laptop"
          className="w-full h-full object-cover"
          height="400"
          width="600"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg" ref={consultationRef}>
        <h1 className="font-poppins text-3xl font-bold mb-4">
          Book a <span className="text-blue-500">free</span> Consultation
        </h1>
        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Number */}
          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-700 font-medium">
              Number
            </label>
            <input
              id="number"
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Project Description */}
          <div className="mb-4">
            <label htmlFor="project" className="block text-gray-700 font-medium">
              Describe Your Project Need
            </label>
            <textarea
              id="project"
              placeholder="Briefly describe your project need"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
            ></textarea>
          </div>

          {/* Privacy Policy */}
          <div className="mb-4 text-sm text-gray-600">
            By submitting this form, you agree to our{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
            .
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-300 ease-in-out"
          >
            Get in Touch
          </button>
        </form>
      </div>
    </section>



      </main>
    </>
  );
}
