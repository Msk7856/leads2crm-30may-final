
// "use client"
// import { useState, useEffect } from 'react';

// export default function HRPopupModal() {
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   // Open the modal after 5 seconds of page load
//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     setIsModalOpen(true);
//   //   }, 5000); // 5000 milliseconds = 5 seconds

//   //   // Clean up the timer when the component unmounts
//   //   return () => clearTimeout(timer);
//   // }, []);

//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   return (
//     <>
//       {/* Modal Overlay and Content */}
//       {isModalOpen && (
//         <div className="zp-popupmodal zphome-pop zp-popup-show fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
//           <div
//             className="modal-overlay modal-toggle absolute inset-0 bg-transparent"
//             onClick={toggleModal}
//           ></div>
//           <div
//             className="zpopup-banner relative w-full max-w-3xl p-8 rounded-lg shadow-lg flex justify-between items-center"
//             style={{
//               background: `radial-gradient(81.4% 84.57% at 93.4% 106.38%, #be40dd 0%, rgba(90,116,230,0.00) 100%), radial-gradient(79.15% 43.74% at 66.27% 50.5%, #5290ee 0%, #1352d2 100%)`,
//             }}
//           >
//             <button
//               onClick={toggleModal}
//               className="zwc-zmodal-close zwc-zmodal-toggle absolute top-4 right-4 text-2xl text-white"
//             >
//               &times;
//             </button>
//             <div className="zpopup-wrap flex w-full">
//               <div className="zpop-lef flex flex-col space-y-6">
//                 <h2 className="text-3xl font-semibold text-white">Level up your HR game</h2>
//                 <p className="text-lg text-white opacity-80">
//                   See how Zoho People can save you 20 hours a week on HR tasks.
//                 </p>
//                 <div className="btn-wrap flex space-x-6">
//                   <a
//                     href="/people/free-demo.html?src=popall"
//                     className="act-btn dmo-btn px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105"
//                   >
//                     Request Demo
//                   </a>
//                   <a
//                     href="/people/signup.html?src=popall"
//                     className="act-btn reg-btn px-8 py-3 bg-green-600 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105"
//                   >
//                     30-day free trial
//                   </a>
//                 </div>
//               </div>
//               <div className="zpop-rit">
//                 <img
//                   alt="Level up your HR game"
//                   src="https://www.zoho.com/sites/zweb/images/people/zp-level-up.png"
//                   width="228"
//                   height="349"
//                   className="w-56 h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
//2
// "use client"
// import { useState, useEffect } from 'react';

// export default function ERPServicePopupModal() {
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   // Open the modal after 5 seconds of page load
//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     setIsModalOpen(true);
//   //   }, 5000); // 5000 milliseconds = 5 seconds

//   //   // Clean up the timer when the component unmounts
//   //   return () => clearTimeout(timer);
//   // }, []);

//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   return (
//     <>
//       {/* Modal Overlay and Content */}
//       {isModalOpen && (
//         <div className="zp-popupmodal zphome-pop zp-popup-show fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
//           <div
//             className="modal-overlay modal-toggle absolute inset-0 bg-transparent"
//             onClick={toggleModal}
//           ></div>
//           <div
//             className="zpopup-banner relative w-full max-w-3xl p-8 rounded-lg shadow-lg flex justify-between items-center"
//             style={{
//               background: `radial-gradient(81.4% 84.57% at 93.4% 106.38%, #be40dd 0%, rgba(90,116,230,0.00) 100%), radial-gradient(79.15% 43.74% at 66.27% 50.5%, #5290ee 0%, #1352d2 100%)`,
//             }}
//           >
//             <button
//               onClick={toggleModal}
//               className="zwc-zmodal-close zwc-zmodal-toggle absolute top-4 right-4 text-2xl text-white"
//             >
//               &times;
//             </button>
//             <div className="zpopup-wrap flex w-full">
//               <div className="zpop-lef flex flex-col space-y-6">
//                 <h2 className="text-3xl font-semibold text-white">Empower Your Business with ERP Solutions</h2>
//                 <p className="text-lg text-white opacity-80">
//                   We provide comprehensive ERP services to streamline your operations, whether you are using Odoo, Oracle, or Zoho. Let us help you take your business to the next level.
//                 </p>
//                 <div className="btn-wrap flex space-x-6">
//                   <a
//                     href="/services/odoo"
//                     className="act-btn dmo-btn px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105"
//                   >
//                     Learn More about Odoo
//                   </a>
//                   <a
//                     href="/services/oracle"
//                     className="act-btn reg-btn px-8 py-3 bg-green-600 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105"
//                   >
//                     Learn More about Oracle
//                   </a>
//                   <a
//                     href="/services/zoho"
//                     className="act-btn reg-btn px-8 py-3 bg-purple-600 text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105"
//                   >
//                     Learn More about Zoho
//                   </a>
//                 </div>
//               </div>
//               <div className="zpop-rit">
//                 <img
//                   alt="ERP Solutions"
//                   src="https://www.example.com/your-image-path.jpg"
//                   width="228"
//                   height="349"
//                   className="w-56 h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

//3
// "use client"
// import { useState, useEffect } from 'react';

// export default function ERPServicePopupModal() {
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   // Open the modal after 5 seconds of page load
//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     setIsModalOpen(true);
//   //   }, 5000); // 5000 milliseconds = 5 seconds

//   //   // Clean up the timer when the component unmounts
//   //   return () => clearTimeout(timer);
//   // }, []);

//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   return (
//     <>
//       {/* Modal Overlay and Content */}
//       {isModalOpen && (
//         <div className="zp-popupmodal zphome-pop zp-popup-show fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
//           <div
//             className="modal-overlay modal-toggle absolute inset-0 bg-transparent"
//             onClick={toggleModal}
//           ></div>
//           <div
//             className="zpopup-banner relative w-full max-w-3xl p-8 rounded-lg shadow-lg flex justify-between items-center"
//             style={{
//               background: `radial-gradient(81.4% 84.57% at 93.4% 106.38%, #be40dd 0%, rgba(90,116,230,0.00) 100%), radial-gradient(79.15% 43.74% at 66.27% 50.5%, #5290ee 0%, #1352d2 100%)`,
//             }}
//           >
//             <button
//               onClick={toggleModal}
//               className="zwc-zmodal-close zwc-zmodal-toggle absolute top-4 right-4 text-2xl text-white"
//             >
//               &times;
//             </button>
//             <div className="zpopup-wrap flex w-full">
//               <div className="zpop-lef flex flex-col space-y-6">
//                 <h2 className="text-3xl font-semibold text-white">Empower Your Business with ERP Solutions</h2>
//                 <p className="text-lg text-white opacity-80">
//                   We provide comprehensive ERP services to streamline your operations, whether you are using Odoo, Oracle, or Zoho. Let us help you take your business to the next level.
//                 </p>
//                 <div className="btn-wrap flex space-x-6">
//                   <a
//                     href="/services/odoo"
//                     className="act-btn dmo-btn px-6 py-2 bg-blue-600 text-white rounded-lg"
//                   >
//                     Learn More about Odoo
//                   </a>
//                   <a
//                     href="/services/oracle"
//                     className="act-btn reg-btn px-6 py-2 bg-green-600 text-white rounded-lg"
//                   >
//                     Learn More about Oracle
//                   </a>
//                   <a
//                     href="/services/zoho"
//                     className="act-btn reg-btn px-6 py-2 bg-purple-600 text-white rounded-lg"
//                   >
//                     Learn More about Zoho
//                   </a>
//                 </div>
//               </div>
//               <div className="zpop-rit">
//                 <img
//                   alt="ERP Solutions"
//                   src="https://www.zoho.com/sites/zweb/images/people/zp-level-up.png"
//                   width="228"
//                   height="349"
//                   className="w-56 h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// "use client";
// import { useState, useEffect } from 'react';

// export default function ERPServicePopupModal() {
//   const [isModalOpen, setIsModalOpen] = useState(true); // Initially, modal is closed
//   const [formData, setFormData] = useState({
//     name: '',
//     companyName: '',
//     email: '',
//     mobile: '',
//     requirements: '',
//   });
//   const [submitted, setSubmitted] = useState(false);

//   // Open the modal after 5 seconds of page load
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsModalOpen(true);
//     }, 5000); // 5000 milliseconds = 5 seconds

//     // Clean up the timer when the component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   const toggleModal = () => setIsModalOpen(!isModalOpen);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setIsModalOpen(false); // Close modal after submit
//     }, 3000); // Show success message for 3 seconds
//   };

//   return (
//     <>
//       {/* Modal Overlay and Content */}
//       {isModalOpen && (
//         <div className="zp-popupmodal zphome-pop zp-popup-show fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
//           <div
//             className="modal-overlay modal-toggle absolute inset-0 bg-transparent"
//             onClick={toggleModal}
//           ></div>
//           <div
//             className="zpopup-banner relative w-full max-w-3xl p-8 rounded-lg shadow-lg flex justify-between items-center"
//             style={{
//               background: `radial-gradient(81.4% 84.57% at 93.4% 106.38%, #be40dd 0%, rgba(90,116,230,0.00) 100%), radial-gradient(79.15% 43.74% at 66.27% 50.5%, #5290ee 0%, #1352d2 100%)`,
//             }}
//           >
//             <button
//               onClick={toggleModal}
//               className="zwc-zmodal-close zwc-zmodal-toggle absolute top-4 right-4 text-2xl text-white"
//             >
//               &times;
//             </button>
//             <div className="zpopup-wrap flex w-full flex-col space-y-6">
//               <h2 className="text-3xl font-semibold text-white text-center">Submit Your Information</h2>

//               {!submitted ? (
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                   <div className="flex flex-col">
//                     <label className="text-white font-semibold" htmlFor="name">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="rounded-lg p-2 border border-gray-300 focus:outline-none"
//                       required
//                     />
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="text-white font-semibold" htmlFor="companyName">
//                       Company Name
//                     </label>
//                     <input
//                       type="text"
//                       id="companyName"
//                       name="companyName"
//                       value={formData.companyName}
//                       onChange={handleChange}
//                       className="rounded-lg p-2 border border-gray-300 focus:outline-none"
//                     />
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="text-white font-semibold" htmlFor="email">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="rounded-lg p-2 border border-gray-300 focus:outline-none"
//                       required
//                     />
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="text-white font-semibold" htmlFor="mobile">
//                       Mobile Number <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       id="mobile"
//                       name="mobile"
//                       value={formData.mobile}
//                       onChange={handleChange}
//                       className="rounded-lg p-2 border border-gray-300 focus:outline-none"
//                       required
//                     />
//                   </div>

//                   <div className="flex flex-col">
//                     <label className="text-white font-semibold" htmlFor="requirements">
//                       Requirements
//                     </label>
//                     <textarea
//                       id="requirements"
//                       name="requirements"
//                       value={formData.requirements}
//                       onChange={handleChange}
//                       className="rounded-lg p-2 border border-gray-300 focus:outline-none"
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none"
//                   >
//                     Submit
//                   </button>
//                 </form>
//               ) : (
//                 <p className="text-white text-center font-semibold">
//                   Form submitted successfully!
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
//3
"use client";
import { useState, useEffect } from 'react';

export default function RequestDemoPopup() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Initially, modal is closed
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    mobile: '',
    requirements: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Open the modal after 5 seconds of page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false); // Close modal after submit
    }, 3000); // Show success message for 3 seconds
  };

  return (
    <>
      {/* Modal Overlay and Content */}
      {isModalOpen && (
        <div className="zp-popupmodal zphome-pop zp-popup-show fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div
            className="modal-overlay modal-toggle absolute inset-0 bg-transparent"
            onClick={toggleModal}
          ></div>
          <div
            className="zpopup-banner relative w-full max-w-lg p-8 rounded-lg shadow-lg flex flex-col justify-between items-center animate-fadeIn"
            style={{
              background: `radial-gradient(81.4% 84.57% at 93.4% 106.38%, #be40dd 0%, rgba(90,116,230,0.00) 100%), radial-gradient(79.15% 43.74% at 66.27% 50.5%, #5290ee 0%, #1352d2 100%)`,
            }}
          >
            <button
              onClick={toggleModal}
              className="zwc-zmodal-close zwc-zmodal-toggle absolute top-4 right-4 text-2xl text-white rotating"
            >
              &times;
            </button>
            <div className="zpopup-wrap flex w-full flex-col space-y-6">
              <h2 className="text-3xl font-semibold text-white text-center animate-bounce">Request a Demo</h2>

              {!submitted ? (
                <form className="space-y-4" onSubmit={handleSubmit}>
         <div className="flex flex-col">
  <label className="text-white font-semibold" htmlFor="name">
    Name
  </label>
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    className="rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
    required
  />
</div>

<div className="flex flex-col">
  <label className="text-white font-semibold" htmlFor="companyName">
    Company Name
  </label>
  <input
    type="text"
    id="companyName"
    name="companyName"
    value={formData.companyName}
    onChange={handleChange}
    className="rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
  />
</div>

<div className="flex flex-col">
  <label className="text-white font-semibold" htmlFor="email">
    Email
  </label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    className="rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
    required
  />
</div>

<div className="flex flex-col">
  <label className="text-white font-semibold" htmlFor="mobile">
    Mobile Number <span className="text-red-500">*</span>
  </label>
  <input
    type="tel"
    id="mobile"
    name="mobile"
    value={formData.mobile}
    onChange={handleChange}
    className="rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
    required
  />
</div>

<div className="flex flex-col">
  <label className="text-white font-semibold" htmlFor="requirements">
    Requirements
  </label>
  <textarea
    id="requirements"
    name="requirements"
    value={formData.requirements}
    onChange={handleChange}
    className="rounded-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
  ></textarea>
</div>


                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none rotating"
                  >
                    Submit
                  </button>
                </form>
              ) : (
                <p className="text-white text-center font-semibold animate-bounce">
                  Form submitted successfully!
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
