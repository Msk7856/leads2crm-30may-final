// import NewsLatterBox from "./NewsLatterBox";

// const Contact = () => {
//   return (
//     <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
//       <div className="container">
//         <div className="-mx-4 flex flex-wrap">
//           <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
//             <div
//               className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
//               data-wow-delay=".15s
//               "
//             >
//               <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
//                 Need Help? Open a Ticket
//               </h2>
//               <p className="mb-12 text-base font-medium text-body-color">
//                 Our support team will get back to you ASAP via email.
//               </p>
//               <form>
//                 <div className="-mx-4 flex flex-wrap">
//                   <div className="w-full px-4 md:w-1/2">
//                     <div className="mb-8">
//                       <label
//                         htmlFor="name"
//                         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                       >
//                         Your Name
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter your name"
//                         className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-4 md:w-1/2">
//                     <div className="mb-8">
//                       <label
//                         htmlFor="email"
//                         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                       >
//                         Your Email
//                       </label>
//                       <input
//                         type="email"
//                         placeholder="Enter your email"
//                         className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full px-4">
//                     <div className="mb-8">
//                       <label
//                         htmlFor="message"
//                         className="mb-3 block text-sm font-medium text-dark dark:text-white"
//                       >
//                         Your Message
//                       </label>
//                       <textarea
//                         name="message"
//                         rows={5}
//                         placeholder="Enter your Message"
//                         className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="w-full px-4">
//                     <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
//                       Submit Ticket
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
//             <NewsLatterBox />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
//2
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Left Side */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Contact Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Home &gt; About Us &gt; Contact Us
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Card - India */}
                <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-lg font-semibold mb-2">INDIA</h3>
                  <p className="text-md text-gray-700 mb-8">
                    ALM Interactive Soft Sol Pvt Ltd <br />
                    4th Floor, Kautilya Complex, <br />
                    Raj Bhavan Quarters Colony, Somajiguda <br />
                    Hyderabad - 500041. <br />
                    Phone + WhatsApp: +91 8008921118
                  </p>
                  <div>
                    <a
                      href="mailto:info@maiprosoft.com"
                      className="text-blue-500 relative hover:text-blue-700"
                    >
                      info@maiprosoft.com
                    </a>
                    <span className="absolute left-0 -bottom-6 text-xs text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Mail us now
                    </span>
                    <br />
                    <a
                      href="mailto:sales@eXerterp.com"
                      className="text-blue-500 relative hover:text-blue-700"
                    >
                      sales@eXerterp.com
                    </a>
                    <span className="absolute left-0 -bottom-6 text-xs text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Mail us now
                    </span>
                  </div>
                </div>

                {/* Contact Card - Saudi Arabia */}
                <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-lg font-semibold mb-2">SAUDI ARABIA</h3>
                  <p className="text-md text-gray-700 mb-8">
                    6541 Prince Abdul Aziz Bin Musaid Bin Jalawi-AI Murabba Dist. <br />
                    Unit No 63 <br />
                    Riyadh - 12628-2309 <br />
                    Short Address RCRA6541 <br />
                    Kingdom of Saudi Arabia <br />
                    Mobile : 0537697424 <br />
                    WhatsApp : +966 537697424
                  </p>
                  <div>
                    <a
                      href="mailto:info@maiprosoft.com"
                      className="text-blue-500 relative hover:text-blue-700"
                    >
                      info@maiprosoft.com
                    </a>
                    <span className="absolute left-0 -bottom-6 text-xs text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Mail us now
                    </span>
                    <br />
                    <a
                      href="mailto:sales@eXerterp.com"
                      className="text-blue-500 relative hover:text-blue-700"
                    >
                      sales@eXerterp.com
                    </a>
                    <span className="absolute left-0 -bottom-6 text-xs text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Mail us now
                    </span>
                  </div>
                </div>

                {/* Contact Card - Canada */}
                <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-lg font-semibold mb-2">CANADA</h3>
                  <p className="text-md text-gray-700 mb-8">
                    Obaksoft Inc <br />
                    30 Eglinton Ave W, Unit 14, <br />
                    Mississauga ON L5R 0C1, <br />
                    Canada. <br />
                    Canada Toll Free: 1 (800) 638-0869
                  </p>
                  <div>
                    <a
                      href="mailto:info@maiprosoft.com"
                      className="text-blue-500 relative hover:text-blue-700"
                    >
                      info@maiprosoft.com
                    </a>
                    <span className="absolute left-0 -bottom-6 text-xs text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Mail us now
                    </span>
                    <br />
                    <a
                      href="mailto:sales@eXerterp.com"
                      className="text-blue-500 relative hover:text-blue-700"
                    >
                      sales@eXerterp.com
                    </a>
                    <span className="absolute left-0 -bottom-6 text-xs text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Mail us now
                    </span>
                  </div>
                </div>

                {/* Contact Card - UK */}
                <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-lg font-semibold mb-2">UNITED KINGDOM</h3>
                  <p className="text-md text-gray-700 mb-8">
                    Human Connect Ltd <br />
                    Doe House Farm, Blindside Lane, <br />
                    Bradfield, Sheffield, S6 6LE. <br />
                    UK Toll Free: +44 (0) 752 581 3250
                  </p>
                  <div>
                    <a
                      href="mailto:info@maiprosoft.com"
                      className="text-blue-500 relative hover:text-blue-700"
                    >
                      info@maiprosoft.com
                    </a>
                    <span className="absolute left-0 -bottom-6 text-xs text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Mail us now
                    </span>
                    <br />
                    <a
                      href="mailto:sales@eXerterp.com"
                      className="text-blue-500 relative hover:text-blue-700"
                    >
                      sales@eXerterp.com
                    </a>
                    <span className="absolute left-0 -bottom-6 text-xs text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Mail us now
                    </span>
                  </div>
                </div>

                {/* Contact Card - USA */}
                <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-lg font-semibold mb-2">UNITED STATES OF AMERICA</h3>
                  <p className="text-md text-gray-700 mb-8">
                    Obaksoft Inc <br />
                    99 Wall Street, Suite #3309, <br />
                    New York NY 10005 <br />
                    USA Toll Free: 1 (800) 638 0869
                  </p>
                  <div>
                    <a
                      href="mailto:info@maiprosoft.com"
                      className="text-blue-500 relative hover:text-blue-700"
                    >
                      info@maiprosoft.com
                    </a>
                    <span className="absolute left-0 -bottom-6 text-xs text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Mail us now
                    </span>
                    <br />
                    <a
                      href="mailto:sales@eXerterp.com"
                      className="text-blue-500 relative hover:text-blue-700"
                    >
                      sales@eXerterp.com
                    </a>
                    <span className="absolute left-0 -bottom-6 text-xs text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Mail us now
                    </span>
                  </div>
                </div>

                {/* Contact Card - Singapore (Dummy Address) */}
                <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                  <h3 className="text-lg font-semibold mb-2">SINGAPORE</h3>
                  <p className="text-md text-gray-700 mb-8">
                    XYZ Solutions Pvt Ltd <br />
                    50 North Bridge Road, <br />
                    #07-05, Singapore 179102. <br />
                    Phone: +65 6712 3456
                  </p>
                  <div>
                    <a
                      href="mailto:info@maiprosoft.com"
                      className="text-blue-500 relative hover:text-blue-700"
                    >
                      info@maiprosoft.com
                    </a>
                    <span className="absolute left-0 -bottom-6 text-xs text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Mail us now
                    </span>
                    <br />
                    <a
                      href="mailto:sales@eXerterp.com"
                      className="text-blue-500 relative hover:text-blue-700"
                    >
                      sales@eXerterp.com
                    </a>
                    <span className="absolute left-0 -bottom-6 text-xs text-gray-500 opacity-0 transition-opacity duration-300 hover:opacity-100">
                      Mail us now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h3 className="mb-8 text-2xl font-semibold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Newsletter Signup
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Sign up for our newsletter and get the latest updates delivered
                straight to your inbox.
              </p>
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
