"use client"

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
