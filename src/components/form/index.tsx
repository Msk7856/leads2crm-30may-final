
// "use client";
// import { useState } from 'react';

// export default function ERPServicePopupModal() {
//   const [isModalOpen, setIsModalOpen] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     requirements: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted", formData);
//     setIsModalOpen(false);  // Close the modal after submission
//   };

//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   return (
//     <>
//       {/* Modal Overlay and Content */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-black bg-opacity-50">
//           <div
//             className="absolute inset-0 bg-transparent"
//             onClick={toggleModal}
//           ></div>
//           <div
//             className="relative w-full max-w-lg p-4 rounded-lg shadow-2xl flex flex-col md:flex-row bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
//             style={{ minHeight: 'auto', maxWidth: '650px' }}
//           >
//             <button
//               onClick={toggleModal}
//               className="absolute top-4 right-4 text-2xl text-white"
//             >
//               &times;
//             </button>

//             {/* Left Side: Form Fields */}
//             <div className="flex flex-col md:flex-1 space-y-3 md:space-y-4">
//               <h2 className="text-xl font-semibold text-white">
//                 Empower Your Business with ERP Solutions
//               </h2>
//               <p className="text-sm text-white ">
//                 Streamline your operations with comprehensive ERP services. Fill out the form below for more details.
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <div className="flex flex-col">
//                   <label htmlFor="name" className="text-white opacity-80 text-sm">
//                     Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg shadow-sm text-black text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     required
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="email" className="text-white opacity-80 text-sm">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg shadow-sm text-black text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="phone" className="text-white opacity-80 text-sm">
//                     Phone Number <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg shadow-sm text-black text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     required
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="company" className="text-white opacity-80 text-sm">
//                     Company Name
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg shadow-sm text-black text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="requirements" className="text-white opacity-80 text-sm">
//                     Customer Requirements
//                   </label>
//                   <textarea
//                     id="requirements"
//                     name="requirements"
//                     value={formData.requirements}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg shadow-sm text-black text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     rows="2"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 mt-4 text-sm"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>

//             {/* Right Side: Image */}
//             <div className="mt-6 md:mt-0 md:ml-6 flex justify-center items-center">
//               <img
//                 alt="ERP Solutions"
//                 src="https://www.zoho.com/sites/zweb/images/people/zp-level-up.png"
//                 width="180"
//                 height="270"
//                 className="w-48 h-auto md:w-56"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// "use client";

// import { useState } from 'react';

// export default function ERPServicePopupModal() {
//   const [isModalOpen, setIsModalOpen] = useState(true);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     requirements: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted", formData);
//     setIsModalOpen(false);  // Close the modal after submission
//   };

//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   return (
//     <>
//       {/* Modal Overlay and Content */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-[9999] flex justify-center items-center bg-black bg-opacity-50">
//           <div
//             className="absolute inset-0 bg-transparent"
//             onClick={toggleModal}
//           ></div>
//           <div
//             className="relative w-full max-w-lg p-4 rounded-lg shadow-2xl flex flex-col md:flex-row bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
//             style={{ minHeight: 'auto', maxWidth: '650px' }}
//           >
//             <button
//               onClick={toggleModal}
//               className="absolute top-4 right-4 text-2xl text-white"
//             >
//               &times;
//             </button>

//             {/* Left Side: Form Fields */}
//             <div className="flex flex-col md:flex-1 space-y-3 md:space-y-4">
//               <h2 className="text-xl font-semibold text-white">
//                 Empower Your Business with ERP Solutions
//               </h2>
//               <p className="text-sm text-white opacity-80">
//                 Streamline your operations with comprehensive ERP services. Fill out the form below for more details.
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <div className="flex flex-col">
//                   <label htmlFor="name" className="text-white  text-sm">
//                     Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg shadow-sm text-black text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     required
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="email" className="text-white  text-sm">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg shadow-sm text-black text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="phone" className="text-white  text-sm">
//                     Phone Number <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg shadow-sm text-black text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     required
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="company" className="text-white  text-sm">
//                     Company Name
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg shadow-sm text-black text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                   />
//                 </div>

//                 <div className="flex flex-col">
//                   <label htmlFor="requirements" className="text-white  text-sm">
//                     Customer Requirements
//                   </label>
//                   <textarea
//                     id="requirements"
//                     name="requirements"
//                     value={formData.requirements}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 rounded-lg shadow-sm text-black text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
//                     rows={2}  

//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full px-6 py-2 bg-submneu text-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 mt-4 text-sm"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>

//             {/* Right Side: Image (Hidden on Mobile) */}
//             <div className="mt-6 md:mt-0 md:ml-6 flex justify-center items-center hidden md:block">
//               <img
//                 alt="ERP Solutions"
//                 src="https://www.zoho.com/sites/zweb/images/people/zp-level-up.png"
//                 width="180"
//                 height="270"
//                 className="w-48 h-auto md:w-56"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
"use client"
import { useState, useEffect } from "react";

const DelayedForm = () => {
  const [showForm, setShowForm] = useState(true);  // Whether to show form
  const [loading, setLoading] = useState(false);    // Submission loading state
  const [success, setSuccess] = useState(null);     // Submission success state
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    mobile: "",
    requirements: "",
  });

  // Trigger form appearance after 5 seconds
  useEffect(() => {
    console.log("Setting timer for form appearance...");
    const timer = setTimeout(() => {
      setShowForm(true);  // Show form after delay
    }, 5000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null); // Reset status before submission
    
    try {
      const response = await fetch("/api/sendForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true); // Success message
        setFormData({
          name: "",
          companyName: "",
          email: "",
          mobile: "",
          requirements: "",
        });
      } else {
        setSuccess(false); // Failure message
      }
    } catch (error) {
      setSuccess(false); // Error handling
      console.error("Submission Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // If form is not yet visible, show loading message
  if (!showForm) {
    return <p className="text-center text-gray-500">Loading form...</p>;
  }

  return (
    <div>
      {showForm ? (
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <form
            className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Submit Your Info</h2>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="companyName">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="mobile">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="requirements">
                Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-lg text-white font-bold ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
  
            {/* Success and failure messages */}
            {success === true && (
              <p className="mt-4 text-green-500 text-center">
                Form submitted successfully!
              </p>
            )}
            {success === false && (
              <p className="mt-4 text-red-500 text-center">
                Failed to submit the form. Please try again.
              </p>
            )}
          </form>
        </div>
      ) : (
        <p>No form available</p>
      )}
    </div>
  );
}

export default DelayedForm;
