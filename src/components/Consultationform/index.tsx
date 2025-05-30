import React from 'react';
import Head from 'next/head';

const ConsultationForm = () => {
  return (
    <>
      <Head>
        <title>Consultation Form</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Quicksand:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-[#f0f4f8] flex items-center justify-center min-h-screen p-8 pb-[90px] pt-[61px]">
        <div className="bg-[#ffffff] shadow-lg rounded-lg flex flex-col md:flex-row max-w-6xl">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://storage.googleapis.com/a1aa/image/V8UI6L5Jyq7AINt0gmjWDXqLWqunPYaHLytKh6HvuZbU40fJA.jpg"
              alt="Person working on multiple computer screens with code displayed"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-2xl text-black font-bold mb-2 heading">
              Book a free 
              <br/>
              <span className="text-[#16a34a]">Consultation</span>
            </h1>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border border-[#d1d5db] rounded-md shadow-sm focus:outline-none focus:ring-[#4f46e5] focus:border-[#4f46e5] sm:text-sm bg-white text-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border border-[#d1d5db] rounded-md shadow-sm focus:outline-none focus:ring-[#4f46e5] focus:border-[#4f46e5] sm:text-sm bg-white text-black"
                />
              </div>

              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                  Number
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="mt-1 block w-full px-3 py-2 border border-[#d1d5db] rounded-md shadow-sm focus:outline-none focus:ring-[#4f46e5] focus:border-[#4f46e5] sm:text-sm bg-white text-black"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700">
                  Describe Your Project Need.
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={3}
                  className="mt-1 block w-full px-3 py-2 border border-[#d1d5db] rounded-md shadow-sm focus:outline-none focus:ring-[#4f46e5] focus:border-[#4f46e5] sm:text-sm bg-white text-black"
                ></textarea>
              </div>

              <p className="text-xs text-gray-500">
                By submitting this form, you agree to our
                <a href="#" className="text-[#2563eb]">
                  {' '} Privacy Policy
                </a>
              </p>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2563eb] hover:bg-[#1e40af] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4f46e5]"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationForm;
