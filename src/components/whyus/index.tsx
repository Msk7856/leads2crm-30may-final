// import React from "react";

// const WhyUs = () => {
//   return (
//     <section className="w-full bg-white py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <div className="border-t-2 border-gray-300 w-1/4 mx-auto"></div>
//           <h3 className="mt-4 text-lg text-gray-600">LET THE NUMBERS TALK</h3>
//           <h2 className="text-3xl font-bold text-gray-800 mt-2">
//             Why Choose Alnafitha IT Solutions?
//           </h2>
//           <p className="text-gray-500 mt-4">
//             Alnafitha IT has a proven track record of delivering high-quality,
//             reliable IT services to clients across various industries.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="text-center p-6 border border-gray-200 shadow-lg rounded-lg">
//             <div className="flex justify-center mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M50 24C50 14 46 10 36 10H24C14 10 10 14 10 24V36C10 46 14 50 24 50" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40.875 20C39.5 18.25 37.2 17.5 33.75 17.5H26.25C20 17.5 17.5 20 17.5 26.25V33.75C17.5 37.2 18.25 39.5 19.975 40.875" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0254 10V5" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 10V5" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M40 10V5" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M50 20H55" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.0254 50V55" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 20H10" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 30H10" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 40H10" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M41.7748 46.475C43.9701 46.475 45.7498 44.6954 45.7498 42.5C45.7498 40.3047 43.9701 38.525 41.7748 38.525C39.5795 38.525 37.7998 40.3047 37.7998 42.5C37.7998 44.6954 39.5795 46.475 41.7748 46.475Z" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28.5254 43.6499V41.3249C28.5254 39.9499 29.6504 38.8249 31.0254 38.8249C33.4254 38.8249 34.4004 37.1249 33.2004 35.0499C32.5004 33.8499 32.9254 32.2999 34.1254 31.6249L36.4004 30.2999C37.4504 29.6749 38.8004 30.0499 39.4254 31.0999L39.5754 31.3499C40.7754 33.4249 42.7254 33.4249 43.9254 31.3499L44.0754 31.0999C44.7004 30.0499 46.0504 29.6999 47.1004 30.2999L49.3754 31.6249C50.5754 32.3249 51.0004 33.8499 50.3004 35.0499C49.1004 37.1249 50.0754 38.8249 52.4754 38.8249C53.8504 38.8249 54.9754 39.9499 54.9754 41.3249V43.6499C54.9754 45.0249 53.8504 46.1499 52.4754 46.1499C50.0754 46.1499 49.1004 47.8499 50.3004 49.9249C51.0004 51.1249 50.5754 52.6749 49.3754 53.3499L47.1004 54.6749C46.0504 55.2999 44.7004 54.9249 44.0754 53.8749L43.9254 53.6249C42.7254 51.5499 40.7754 51.5499 39.5754 53.6249L39.4254 53.8749C38.8004 54.9249 37.4504 55.2749 36.4004 54.6749L34.1254 53.3499C32.9254 52.6499 32.5004 51.1249 33.2004 49.9249C34.4004 47.8499 33.4254 46.1499 31.0254 46.1499C29.6504 46.1749 28.5254 45.0499 28.5254 43.6499Z" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
//             </div>
//             <h3 className="text-xl font-semibold">Maiprosoft </h3>
//             <p className="text-gray-500 mt-2">
//               Our IT services and solutions cover a wide range of technological
//               demands, ranging from cloud infrastructure to business
//               applications.
//             </p>
//           </div>

//           <div className="text-center p-6 border border-gray-200 shadow-lg rounded-lg">
//             <div className="flex justify-center mb-4">
//             <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M15.9258 23.7749C5.72578 24.4999 5.75078 39.2749 15.9258 39.9999H40.0758C43.0008 40.0249 45.8258 38.925 48.0008 36.95C55.1508 30.7 51.3258 18.1999 41.9008 16.9999C38.5258 -3.35011 9.05081 4.37494 16.0258 23.7749" stroke="#292D32" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 40V47.5" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 57.5C32.7614 57.5 35 55.2614 35 52.5C35 49.7386 32.7614 47.5 30 47.5C27.2386 47.5 25 49.7386 25 52.5C25 55.2614 27.2386 57.5 30 57.5Z" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45 52.5H35" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25 52.5H15" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
//             </div>
//             <h3 className="text-xl font-semibold">Innovative Solutions</h3>
//             <p className="text-gray-500 mt-2">
//               We provide innovative and tailored IT solutions that help our
//               clients thrive in the digital age.
//             </p>
//           </div>

//           <div className="text-center p-6 border border-gray-200 shadow-lg rounded-lg">
//             <div className="flex justify-center mb-4">
//             <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M26.2254 5.57502L13.7504 10.275C10.8754 11.35 8.52539 14.75 8.52539 17.8V36.375C8.52539 39.325 10.4754 43.2 12.8504 44.975L23.6004 53C27.1254 55.65 32.9254 55.65 36.4504 53L47.2004 44.975C49.5754 43.2 51.5254 39.325 51.5254 36.375V17.8C51.5254 14.725 49.1754 11.325 46.3004 10.25L33.8254 5.57502C31.7004 4.80002 28.3004 4.80002 26.2254 5.57502Z" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 31.25C32.7614 31.25 35 29.0114 35 26.25C35 23.4886 32.7614 21.25 30 21.25C27.2386 21.25 25 23.4886 25 26.25C25 29.0114 27.2386 31.25 30 31.25Z" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 31.25V38.75" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
//             </div>
//             <h3 className="text-xl font-semibold">Customer Focused</h3>
//             <p className="text-gray-500 mt-2">
//               We prioritize our customers needs, providing them with excellent
//               service and long-term support.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUs;
//2
import React from "react";

const WhyUs = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="border-t-2 border-gray-300 w-1/4 mx-auto"></div>
          <h3 className="mt-4 text-lg text-gray-600">LET THE NUMBERS TALK</h3>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Why Choose Maiprosoft?
          </h2>
          <p className="text-gray-500 mt-4">
            Organizes core turn-around in a process in sync with technology, resources, and possessions of an enterprise. Automation of enterprise operations with Maiprosoft adds value in terms of result enhancements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-gray-200 shadow-lg rounded-lg hover:bg-maipro hover:text-white">
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M50 24C50 14 46 10 36 10H24C14 10 10 14 10 24V36C10 46 14 50 24 50" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M40.875 20C39.5 18.25 37.2 17.5 33.75 17.5H26.25C20 17.5 17.5 20 17.5 26.25V33.75C17.5 37.2 18.25 39.5 19.975 40.875" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M20.0254 10V5" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M30 10V5" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M40 10V5" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M50 20H55" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M20.0254 50V55" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M5 20H10" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M5 30H10" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M5 40H10" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M41.7748 46.475C43.9701 46.475 45.7498 44.6954 45.7498 42.5C45.7498 40.3047 43.9701 38.525 41.7748 38.525C39.5795 38.525 37.7998 40.3047 37.7998 42.5C37.7998 44.6954 39.5795 46.475 41.7748 46.475Z" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M28.5254 43.6499V41.3249C28.5254 39.9499 29.6504 38.8249 31.0254 38.8249C33.4254 38.8249 34.4004 37.1249 33.2004 35.0499C32.5004 33.8499 32.9254 32.2999 34.1254 31.6249L36.4004 30.2999C37.4504 29.6749 38.8004 30.0499 39.4254 31.0999L39.5754 31.3499C40.7754 33.4249 42.7254 33.4249 43.9254 31.3499L44.0754 31.0999C44.7004 30.0499 46.0504 29.6999 47.1004 30.2999L49.3754 31.6249C50.5754 32.3249 51.0004 33.8499 50.3004 35.0499C49.1004 37.1249 50.0754 38.8249 52.4754 38.8249C53.8504 38.8249 54.9754 39.9499 54.9754 41.3249V43.6499C54.9754 45.0249 53.8504 46.1499 52.4754 46.1499C50.0754 46.1499 49.1004 47.8499 50.3004 49.9249C51.0004 51.1249 50.5754 52.6749 49.3754 53.3499L47.1004 54.6749C46.0504 55.2999 44.7004 54.9249 44.0754 53.8749L43.9254 53.6249C42.7254 51.5499 40.7754 51.5499 39.5754 53.6249L39.4254 53.8749C38.8004 54.9249 37.4504 55.2749 36.4004 54.6749L34.1254 53.3499C32.9254 52.6499 32.5004 51.1249 33.2004 49.9249C34.4004 47.8499 33.4254 46.1499 31.0254 46.1499C29.6504 46.1749 28.5254 45.0499 28.5254 43.6499Z" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Maiprosoft</h3>
            <p className="text-gray-500 mt-2 hover:text-white">
              Maiprosoft software is a suite of web-based applications including CRM Software - Customer Relationship Management, HR Software, Financial Accounting System, Supply Chain Management, Point of Sale System, Property Management System, and Construction Project Management.
            </p>
          </div>

          <div className="text-center p-6 border border-gray-200 shadow-lg rounded-lg">
            <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M15.9258 23.7749C5.72578 24.4999 5.75078 39.2749 15.9258 39.9999H40.0758C43.0008 40.0249 45.8258 38.925 48.0008 36.95C55.1508 30.7 51.3258 18.1999 41.9008 16.9999C38.5258 -3.35011 9.05081 4.37494 16.0258 23.7749" stroke="#292D32" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 40V47.5" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 57.5C32.7614 57.5 35 55.2614 35 52.5C35 49.7386 32.7614 47.5 30 47.5C27.2386 47.5 25 49.7386 25 52.5C25 55.2614 27.2386 57.5 30 57.5Z" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M45 52.5H35" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25 52.5H15" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <h3 className="text-xl font-semibold">End-to-End Automation</h3>
            <p className="text-gray-500 mt-2">
              Maiprosoft automates operations at every level: grass root, back-office, intermediary, administration, and managerial.
            </p>
          </div>

          <div className="text-center p-6 border border-gray-200 shadow-lg rounded-lg">
            <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M26.2254 5.57502L13.7504 10.275C10.8754 11.35 8.52539 14.75 8.52539 17.8V36.375C8.52539 39.325 10.4754 43.2 12.8504 44.975L23.6004 53C27.1254 55.65 32.9254 55.65 36.4504 53L47.2004 44.975C49.5754 43.2 51.5254 39.325 51.5254 36.375V17.8C51.5254 14.725 49.1754 11.325 46.3004 10.25L33.8254 5.57502C31.7004 4.80002 28.3004 4.80002 26.2254 5.57502Z" stroke="#292D32" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 31.25C32.7614 31.25 35 29.0114 35 26.25C35 23.4886 32.7614 21.25 30 21.25C27.2386 21.25 25 23.4886 25 26.25C25 29.0114 27.2386 31.25 30 31.25Z" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30 31.25V38.75" stroke="#1E28C3" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <h3 className="text-xl font-semibold">Increase Efficiency</h3>
            <p className="text-gray-500 mt-2">
              Maiprosoft increases operational efficiency, reduces processing time, and helps your enterprise achieve maximum productivity with our post-deployment reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
