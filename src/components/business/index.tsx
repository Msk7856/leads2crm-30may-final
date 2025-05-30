"use client"
// import { useState } from 'react';

// const BusinessSection = () => {
//   const [employeeRange, setEmployeeRange] = useState(50);

//   return (
//     <div className="business-section py-12">
//       <div className="business-wrap max-w-7xl mx-auto">
//         <div className="content-wrap flex flex-col lg:flex-row justify-between items-center">
//           <div className="cont-part">
//             <h2 className="text-3xl font-bold mb-4">
//               We are Maiprosoft, offering <span className="text-indigo-600">cutting-edge ERP solutions</span> tailored to your business needs.
//             </h2>
//             <p className="text-lg mb-6">
//               From Oracle ERP to Zoho and Odoo, we provide comprehensive services to streamline your operations and drive growth. Explore how Maiprosoft can benefit your organization with our ERP, website development, and e-commerce solutions.
//             </p>
//             <div className="range-slider mb-4">
//               <input
//                 className="slider"
//                 id="employeerange"
//                 type="range"
//                 min="1"
//                 max="1000"
//                 value={employeeRange}
//                 onChange={(e) => setEmployeeRange(e.target.value)}
//               />
//               <p className="valwrap">
//                 0 - <span id="sval">{employeeRange}</span>
//                 <em className="svalplus">+</em>
//               </p>
//               <span className="emp-txt">Employees</span>
//             </div>
//           </div>
//           <div className="img-part">
//             <div className="busiimgwrap">
//               <span className="busiimg"></span>
//               <span className="indusimg">
//                 <img
//                   src="//www.zohowebstatic.com/sites/zweb/images/people/zp-indusmain.png"
//                   alt="ERP Industry"
//                   width="180"
//                   height="385"
//                   className="data-loaded"
//                 />
//               </span>
//               <div className="busicustsect">
//                 <ul className="flex space-x-2">
//                   <li className=""></li>
//                   <li className=""></li>
//                   <li className="small"></li>
//                   <li className=""></li>
//                   <li className="small"></li>
//                   <li className=""></li>
//                   <li className="small"></li>
//                   <li className="small"></li>
//                 </ul>
//               </div>
//             </div>
//             <div className="indust-wrap">
//               <ul className="flex space-x-4">
//                 <li id="small" className="active">
//                   <h4 className="text-lg font-semibold">Small Business</h4>
//                   <p>We empower your growing business with customized ERP solutions.</p>
//                 </li>
//                 <li id="medium" value="0">
//                   <h4 className="text-lg font-semibold">Medium Business</h4>
//                   <p>Streamline operations with the best ERP and e-commerce solutions.</p>
//                 </li>
//                 <li id="enterprise">
//                   <h4 className="text-lg font-semibold">Enterprise</h4>
//                   <p>Scalable ERP systems to match your growing enterprise needs.</p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="business-icons grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
//           <div className="col-block">
//             <img
//               src="//www.zohowebstatic.com/sites/zweb/images/people/zp-marketing.png"
//               alt="ERP for Marketing"
//               width="160"
//               height="150"
//               className="icon1 data-loaded"
//             />
//             <div className="business-iconwrap mt-2">
//               <h3 className="text-lg font-semibold">Marketing and Advertising</h3>
//               <p>Boost your marketing efforts with integrated ERP solutions.</p>
//               <a href="/erp/industries/marketing.html" className="learnmore text-indigo-600">Learn more</a>
//             </div>
//           </div>

//           <div className="col-block">
//             <img
//               src="//www.zohowebstatic.com/sites/zweb/images/people/zp-it.png"
//               alt="ERP for IT"
//               width="180"
//               height="136"
//               className="icon2 data-loaded"
//             />
//             <div className="business-iconwrap mt-2">
//               <h3 className="text-lg font-semibold">Information Technology</h3>
//               <p>Streamline your IT operations with advanced ERP systems.</p>
//               <a href="/erp/industries/it.html" className="learnmore text-indigo-600">Learn more</a>
//             </div>
//           </div>

//           <div className="col-block">
//             <img
//               src="//www.zohowebstatic.com/sites/zweb/images/people/zp-education.png"
//               alt="ERP for Education"
//               width="150"
//               height="130"
//               className="icon3 data-loaded"
//             />
//             <div className="business-iconwrap mt-2">
//               <h3 className="text-lg font-semibold">Education</h3>
//               <p>Manage your educational institution with tailored ERP solutions.</p>
//               <a href="/erp/industries/education.html" className="learnmore text-indigo-600">Learn more</a>
//             </div>
//           </div>

//           <div className="col-block">
//             <img
//               src="//www.zohowebstatic.com/sites/zweb/images/people/zp-healthcare.png"
//               alt="ERP for Healthcare"
//               width="105"
//               height="134"
//               className="icon4 data-loaded"
//             />
//             <div className="business-iconwrap mt-2">
//               <h3 className="text-lg font-semibold">Healthcare</h3>
//               <p>Optimize healthcare operations with ERP and e-commerce integration.</p>
//               <a href="/erp/industries/healthcare.html" className="learnmore text-indigo-600">Learn more</a>
//             </div>
//           </div>

//           <div className="col-block">
//             <img
//               src="//www.zohowebstatic.com/sites/zweb/images/people/zp-finance.png"
//               alt="ERP for Finance"
//               width="160"
//               height="119"
//               className="icon5 data-loaded"
//             />
//             <div className="business-iconwrap mt-2">
//               <h3 className="text-lg font-semibold">Finance</h3>
//               <p>Enhance your financial planning with robust ERP solutions.</p>
//               <a href="/erp/industries/finance.html" className="learnmore text-indigo-600">Learn more</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessSection;
//2
// import { useState } from 'react';

// const BusinessSection = () => {
//   const [employeeRange, setEmployeeRange] = useState(50);

//   return (
//     <section className="business-section py-16 px-6 bg-gray-50">
//       <div className="max-w-7xl mx-auto bg-blue
//       ">
//         {/* Heading and description */}
//         <div className="content-wrap flex flex-col lg:flex-row justify-between items-center lg:space-x-12 mb-12">
//           <div className="lg:w-1/2">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               We are <span className="text-indigo-600">Maiprosoft</span>, offering cutting-edge <span className="text-indigo-600">ERP solutions</span> tailored to your business needs.
//             </h2>
//             <p className="text-lg text-gray-700 mb-8">
//               From Oracle ERP to Zoho and Odoo, we provide comprehensive services to streamline your operations and drive growth. 
//               Additionally, we offer website development and e-commerce solutions to help you achieve your digital transformation.
//             </p>

//             {/* Range Slider for Employees */}
//             <div className="range-slider flex items-center space-x-4">
//               <input
//                 className="slider w-full"
//                 id="employeerange"
//                 type="range"
//                 min="1"
//                 max="1000"
//                 value={employeeRange}
//                 onChange={(e) => setEmployeeRange(e.target.value)}
//               />
//               <div className="valwrap text-gray-700 text-lg">
//                 0 - <span className="font-bold">{employeeRange}</span>+
//               </div>
//               <span className="emp-txt text-sm text-gray-600">Employees</span>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="img-part lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
//             <div className="relative">
//               <img
//                 src="//www.zohowebstatic.com/sites/zweb/images/people/zp-indusmain.png"
//                 alt="ERP Industry"
//                 width="250"
//                 height="400"
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Business Categories */}
//         <div className="industry-sections grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//           <div className="p-6 bg-white rounded-lg shadow-md">
//             <h4 className="text-xl font-semibold text-gray-900 mb-2">Small Business</h4>
//             <p className="text-gray-600">We empower your growing business with customized ERP solutions.</p>
//           </div>
//           <div className="p-6 bg-white rounded-lg shadow-md">
//             <h4 className="text-xl font-semibold text-gray-900 mb-2">Medium Business</h4>
//             <p className="text-gray-600">Streamline operations with the best ERP and e-commerce solutions.</p>
//           </div>
//           <div className="p-6 bg-white rounded-lg shadow-md">
//             <h4 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h4>
//             <p className="text-gray-600">Scalable ERP systems to match your growing enterprise needs.</p>
//           </div>
//         </div>

//         {/* Industries We Serve */}
//         <div className="business-icons grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           <div className="col-block text-center p-6 bg-white rounded-lg shadow-md">
//             <img
//               src="//www.zohowebstatic.com/sites/zweb/images/people/zp-marketing.png"
//               alt="ERP for Marketing"
//               width="100"
//               height="100"
//               className="mx-auto mb-4"
//             />
//             <h3 className="text-lg font-semibold text-gray-900">Marketing & Advertising</h3>
//             <p className="text-gray-600">Boost your marketing efforts with integrated ERP solutions.</p>
//             <a href="/erp/industries/marketing.html" className="text-indigo-600 mt-2 inline-block">Learn more</a>
//           </div>

//           <div className="col-block text-center p-6 bg-white rounded-lg shadow-md">
//             <img
//               src="//www.zohowebstatic.com/sites/zweb/images/people/zp-it.png"
//               alt="ERP for IT"
//               width="100"
//               height="100"
//               className="mx-auto mb-4"
//             />
//             <h3 className="text-lg font-semibold text-gray-900">Information Technology</h3>
//             <p className="text-gray-600">Streamline your IT operations with advanced ERP systems.</p>
//             <a href="/erp/industries/it.html" className="text-indigo-600 mt-2 inline-block">Learn more</a>
//           </div>

//           <div className="col-block text-center p-6 bg-white rounded-lg shadow-md">
//             <img
//               src="//www.zohowebstatic.com/sites/zweb/images/people/zp-education.png"
//               alt="ERP for Education"
//               width="100"
//               height="100"
//               className="mx-auto mb-4"
//             />
//             <h3 className="text-lg font-semibold text-gray-900">Education</h3>
//             <p className="text-gray-600">Manage your educational institution with tailored ERP solutions.</p>
//             <a href="/erp/industries/education.html" className="text-indigo-600 mt-2 inline-block">Learn more</a>
//           </div>

//           <div className="col-block text-center p-6 bg-white rounded-lg shadow-md">
//             <img
//               src="//www.zohowebstatic.com/sites/zweb/images/people/zp-healthcare.png"
//               alt="ERP for Healthcare"
//               width="100"
//               height="100"
//               className="mx-auto mb-4"
//             />
//             <h3 className="text-lg font-semibold text-gray-900">Healthcare</h3>
//             <p className="text-gray-600">Optimize healthcare operations with ERP and e-commerce integration.</p>
//             <a href="/erp/industries/healthcare.html" className="text-indigo-600 mt-2 inline-block">Learn more</a>
//           </div>

//           <div className="col-block text-center p-6 bg-white rounded-lg shadow-md">
//             <img
//               src="//www.zohowebstatic.com/sites/zweb/images/people/zp-finance.png"
//               alt="ERP for Finance"
//               width="100"
//               height="100"
//               className="mx-auto mb-4"
//             />
//             <h3 className="text-lg font-semibold text-gray-900">Finance</h3>
//             <p className="text-gray-600">Enhance your financial planning with robust ERP solutions.</p>
//             <a href="/erp/industries/finance.html" className="text-indigo-600 mt-2 inline-block">Learn more</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BusinessSection;
//3
import { useState } from 'react';

const BusinessSection = () => {
  const [employeeRange, setEmployeeRange] = useState(50);

  // Function to determine which category is highlighted
  const getHighlightClass = (min, max) => {
    if (employeeRange >= min && employeeRange <= max) {
      return 'border-indigo-600 border-4'; // Highlight class when in the range
    }
    return 'border-transparent border-4'; // No highlight
  };

  return (
    <section className="business-section py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading and description */}
        <div className="content-wrap flex flex-col lg:flex-row justify-between items-center lg:space-x-12 mb-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We are <span className="text-indigo-600">Maiprosoft</span>, offering cutting-edge <span className="text-indigo-600">ERP solutions</span> tailored to your business needs.
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              From Oracle ERP to Zoho and Odoo, we provide comprehensive services to streamline your operations and drive growth. 
              Additionally, we offer website development and e-commerce solutions to help you achieve your digital transformation.
            </p>

            {/* Range Slider for Employees */}
            <div className="range-slider flex items-center space-x-4">
              <input
                className="slider w-full"
                id="employeerange"
                type="range"
                min="1"
                max="1000"
                value={employeeRange}
                onChange={(e) => setEmployeeRange(parseInt(e.target.value))}
              />
              <div className="valwrap text-gray-700 text-lg">
                0 - <span className="font-bold">{employeeRange}</span>+
              </div>
              <span className="emp-txt text-sm text-gray-600">Employees</span>
            </div>
          </div>

          {/* Image Section */}
          <div className="img-part lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              <img
                src="//www.zohowebstatic.com/sites/zweb/images/people/zp-indusmain.png"
                alt="ERP Industry"
                width="250"
                height="400"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Business Categories */}
        <div className="industry-sections grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Small Business */}
          <div className={`p-6 bg-white rounded-lg shadow-md ${getHighlightClass(0, 50)}`}>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Small Business</h4>
            <p className="text-gray-600">We empower your growing business with customized ERP solutions.</p>
          </div>

          {/* Medium Business */}
          <div className={`p-6 bg-white rounded-lg shadow-md ${getHighlightClass(51, 500)}`}>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Medium Business</h4>
            <p className="text-gray-600">Streamline operations with the best ERP and e-commerce solutions.</p>
          </div>

          {/* Enterprise */}
          <div className={`p-6 bg-white rounded-lg shadow-md ${getHighlightClass(501, 1000)}`}>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h4>
            <p className="text-gray-600">Scalable ERP systems to match your growing enterprise needs.</p>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="business-icons grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="col-block text-center p-6 bg-white rounded-lg shadow-md">
            <img
              src="//www.zohowebstatic.com/sites/zweb/images/people/zp-marketing.png"
              alt="ERP for Marketing"
              width="100"
              height="100"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Marketing & Advertising</h3>
            <p className="text-gray-600">Boost your marketing efforts with integrated ERP solutions.</p>
            <a href="/erp/industries/marketing.html" className="text-indigo-600 mt-2 inline-block">Learn more</a>
          </div>

          <div className="col-block text-center p-6 bg-white rounded-lg shadow-md">
            <img
              src="//www.zohowebstatic.com/sites/zweb/images/people/zp-it.png"
              alt="ERP for IT"
              width="100"
              height="100"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Information Technology</h3>
            <p className="text-gray-600">Streamline your IT operations with advanced ERP systems.</p>
            <a href="/erp/industries/it.html" className="text-indigo-600 mt-2 inline-block">Learn more</a>
          </div>

          <div className="col-block text-center p-6 bg-white rounded-lg shadow-md">
            <img
              src="//www.zohowebstatic.com/sites/zweb/images/people/zp-education.png"
              alt="ERP for Education"
              width="100"
              height="100"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Education</h3>
            <p className="text-gray-600">Manage your educational institution with tailored ERP solutions.</p>
            <a href="/erp/industries/education.html" className="text-indigo-600 mt-2 inline-block">Learn more</a>
          </div>

          <div className="col-block text-center p-6 bg-white rounded-lg shadow-md">
            <img
              src="//www.zohowebstatic.com/sites/zweb/images/people/zp-healthcare.png"
              alt="ERP for Healthcare"
              width="100"
              height="100"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Healthcare</h3>
            <p className="text-gray-600">Optimize healthcare operations with ERP and e-commerce integration.</p>
            <a href="/erp/industries/healthcare.html" className="text-indigo-600 mt-2 inline-block">Learn more</a>
          </div>

          <div className="col-block text-center p-6 bg-white rounded-lg shadow-md">
            <img
              src="//www.zohowebstatic.com/sites/zweb/images/people/zp-finance.png"
              alt="ERP for Finance"
              width="100"
              height="100"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Finance</h3>
            <p className="text-gray-600">Enhance your financial planning with robust ERP solutions.</p>
            <a href="/erp/industries/finance.html" className="text-indigo-600 mt-2 inline-block">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
