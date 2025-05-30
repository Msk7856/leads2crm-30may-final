
// "use client"
// import { useParams } from 'next/navigation';

// // Sample service data type
// interface Service {
//   id: number;
//   name: string;
//   description: string;
//   imageUrl: string;
//   details: string[];
// }

// // Sample service data
// // const services: Service[] = [
// //   {
// //     id: 1,
// //     name: 'Website Development',
// //     description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
// //     imageUrl: '/images/services/service-01.jpg',
// //     details: [
// //       'Consectetur adipiscing elit in voluptate velit.',
// //       'Mattis vulputate cupidatat.',
// //       'Vulputate enim nulla aliquet porttitor odio pellentesque.',
// //       'Ligula ullamcorper malesuada proin.'
// //     ]
// //   },
// //   {
// //     id: 2,
// //     name: 'Graphic Design',
// //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
// //     imageUrl: '/images/services/service-02.jpg',
// //     details: [
// //       'Vulputate enim nulla aliquet.',
// //       'Mattis vulputate eros.',
// //       'Porttitor odio pellentesque ligula ullamcorper.',
// //       'Ligula proin libero.'
// //     ]
// //   },
// //   {
// //     id: 3,
// //     name: 'App Development',
// //     description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
// //     imageUrl: '/images/services/service-03.jpg',
// //     details: [
// //       'Adipiscing elit in voluptate velit.',
// //       'Consectetur proin libero nunc consequat.',
// //       'Quis enim lobortis scelerisque fermentum.',
// //       'Neque sodales ut etiam sit amet.'
// //     ]
// //   }
// // ];
// const services: Service[] = [
//   {
//     id: 1,
//     name: 'ERP',
//     description: 'Comprehensive ERP solutions to optimize your business processes and enhance productivity.',
//     imageUrl: '/images/services/odoo.png',
//     details: [
//       'Integrates various business functions into a unified system.',
//       'Improves data accuracy and reporting.',
//       'Enhances collaboration across departments.',
//       'Scalable solutions tailored to your business needs.'
//     ]
//   },
//   {
//     id: 2,
//     name: 'Zoho',
//     description: "Unlock powerful tools for CRM, project management, and analytics with Zoho’s suite of applications. Leverage Zoho CRM to streamline customer relationships, Zoho Projects for effective project management, and Zoho Analytics to gain actionable insights. Drive growth and efficiency across your organization with integrated solutions like Zoho Desk for customer support and Zoho Creator for custom app development. Experience a comprehensive platform designed to enhance productivity and collaboration",
//     imageUrl: '/images/services/zoho.jpg',
//     details: [
//       'User-friendly interface with extensive customization options.',
//       'Automated workflows for enhanced productivity.',
//       'Seamless integration with various applications.',
//       'Robust analytics for data-driven decisions.'
//     ]
//   },
//   {
//     id: 3,
//     name: 'Odoo',
//     description: 'An all-in-one management software with a wide range of business applications.',
//     imageUrl: '/images/services/odoo.png',
//     details: [
//       'Modular approach allowing businesses to choose applications as needed.',
//       'Flexible and open-source, fostering community-driven development.',
//       'Efficient management of sales, inventory, and accounting.',
//       'Intuitive dashboard for real-time insights.'
//     ]
//   },
//   {
//     id: 4,
//     name: 'Oracle',
//     description: 'Leading enterprise solutions offering database management and cloud services for large-scale operations.',
//     imageUrl: '/images/services/orc.jpg',
//     details: [
//       'High-performance database solutions for enterprise needs.',
//       'Cloud infrastructure that scales with your business.',
//       'Advanced analytics and data security features.',
//       'Integration capabilities with various third-party applications.'
//     ]
//   }
// ];


// const ServiceDetails = () => {
//   const { id } = useParams(); // Get the service ID from the URL
//   const service = services.find((s) => s.id === parseInt(id as string));

//   return (
    
//     <>
//     <section className="relative z-10 overflow-hidden bg-white pb-[50px] pt-[150px]">
//   <div className="container">
//     <div className="mx-[-16px] flex flex-wrap items-center">
//       <div className="w-full px-4 md:w-8/12 lg:w-7/12">
//         <div className="mb-12 max-w-[570px] md:mb-0">
//           <h1 className="mb-5 text-2xl font-bold text-black sm:text-3xl">Service Details</h1>
//           <p className="text-base font-medium leading-relaxed text-body-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero.</p>
//         </div>
//       </div>
//       <div className="w-full px-4 md:w-4/12 lg:w-5/12">
//         <div className="text-end">
//           <ul className="flex items-center md:justify-end">
//             <li className="flex items-center">
//               <a className="pr-1 text-base font-medium text-body-color hover:text-primary" href="/">Home</a>
//               <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
//             </li>
//             <li className="text-base font-medium text-primary">Service Details</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div>
//     <span className="absolute bottom-0 left-0 z-[-1]">
//       <svg width="730" height="206" viewBox="0 0 730 206" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect opacity="0.08" width="136.991" height="563.705" transform="matrix(0.632736 0.774368 0.774368 -0.632736 -201.278 330.677)" fill="url(#paint0_linear_0:1)"></rect>
//         <rect opacity="0.05" width="345.355" height="563.705" transform="matrix(0.632736 0.774368 0.774368 -0.632736 74 330.677)" fill="url(#paint1_linear_0:1)"></rect>
//         <defs>
//           <linearGradient id="paint0_linear_0:1" x1="68.4956" y1="0" x2="68.4956" y2="563.705" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#4A6CF7"></stop>
//             <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
//           </linearGradient>
//           <linearGradient id="paint1_linear_0:1" x1="172.678" y1="0" x2="172.678" y2="563.705" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#4A6CF7"></stop>
//             <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
//           </linearGradient>
//         </defs>
//       </svg>
//     </span>
//     <span className="absolute right-0 top-0 z-[-1]">
//       <svg width="405" height="206" viewBox="0 0 405 206" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect opacity="0.08" width="289.718" height="563.705" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 603.461 -125.138)" fill="url(#paint0_linear_54:595)"></rect>
//         <defs>
//           <linearGradient id="paint0_linear_54:595" x1="144.859" y1="0" x2="144.859" y2="563.705" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#4A6CF7"></stop>
//             <stop offset="1" stop-color="#4A6CF7" stop-opacity="0"></stop>
//           </linearGradient>
//         </defs>
//       </svg>
//     </span>
//   </div>
// </section>

    
//     <section className="bg-gray-50 pb-20 pt-[90px]">


//       <div className="container">
//         <div className="-mx-5 flex flex-wrap">
//           <div className="w-full px-5 lg:w-4/12">
//             <div className="space-y-10">
//               <div>
//                 <h3 className="mb-[22px] text-[34px] font-bold text-black">Services</h3>
//                 <div className="border-stroke rounded-sm border">
//                   {services.map((service) => (
//                     <a
//                       key={service.id}
//                       className={`border-stroke flex w-full items-center gap-3 border-b px-5 py-4 text-lg font-medium duration-200 last-of-type:border-0 ${
//                         parseInt(id as string) === service.id ? 'text-primary' : 'text-black hover:text-primary'
//                       }`}
//                       href={`/services/${service.id}`}
//                     >
//                       <svg width="22" height="22" fill="currentColor" className="text-primary">
//                         {/* Add relevant SVG paths for each service */}
//                       </svg>
//                       {service.name}
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-primary px-7 py-10 text-center">
//                 <div className="mx-auto w-full max-w-[215px]">
//                   <h3 className="mb-5 text-2xl font-bold text-white">Let’s talk</h3>
//                   <p className="mb-1.5 text-white">(+966) 559034101</p>
//                   <p className="mb-9 text-white">support@maiprosoft.com</p>
//                   <button className="flex h-12 w-full items-center justify-center rounded-full bg-white text-center font-medium text-black">
//                     Get a call back
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-full px-5 lg:w-8/12">
//             {service ? (
//               <div>
//                 <div className="relative mb-8 aspect-[34/20] rounded-sm bg-stone-100">
//                   <img
//                     alt={service.name}
//                     loading="lazy"
//                     decoding="async"
//                     className="w-full object-cover object-center"
//                     src={service.imageUrl}
//                     style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
//                   />
//                 </div>

//                 <h1 className="mb-7 text-2xl font-bold text-black sm:text-4xl lg:text-3xl">{service.name}</h1>
//                 <p className="mb-8 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">{service.description}</p>

//                 {service.details.map((detail, index) => (
//                   <div key={index} className="mb-8">
//                     <h4 className="mb-8 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
//                       <span className="text-primary">{`0${index + 1}.`}</span> Solution
//                     </h4>
//                     <ul className="list mb-7 list-inside list-disc">
//                       <li className="mb-3 text-base text-primary sm:text-lg lg:text-base xl:text-lg">
//                         <span className="text-body-color">{detail}</span>
//                       </li>
//                     </ul>
//                   </div>
//                 ))}

//                 <p className="mb-10 text-base text-body-color sm:text-lg lg:text-base xl:text-lg">
//                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                 </p>
//               </div>
//             ) : (
//               <p>Service not found</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default ServiceDetails;
//for vercel 22
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maiprosoft-Your software solution",
  description: "Maiprosoft- Software company in Saudi Arabia",
  // other metadata
};

const SignupPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three mx-auto max-w-[500px] rounded bg-white px-6 py-10 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Create your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  Its totally free and super easy
                </p>
                <button className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                  <span className="mr-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_95:967)">
                        <path
                          d="M20.0001 10.2216C20.0122 9.53416 19.9397 8.84776 19.7844 8.17725H10.2042V11.8883H15.8277C15.7211 12.539 15.4814 13.1618 15.1229 13.7194C14.7644 14.2769 14.2946 14.7577 13.7416 15.1327L13.722 15.257L16.7512 17.5567L16.961 17.5772C18.8883 15.8328 19.9997 13.266 19.9997 10.2216"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2042 20.0001C12.9592 20.0001 15.2721 19.1111 16.9616 17.5778L13.7416 15.1332C12.88 15.7223 11.7235 16.1334 10.2042 16.1334C8.91385 16.126 7.65863 15.7206 6.61663 14.9747C5.57464 14.2287 4.79879 13.1802 4.39915 11.9778L4.27957 11.9878L1.12973 14.3766L1.08856 14.4888C1.93689 16.1457 3.23879 17.5387 4.84869 18.512C6.45859 19.4852 8.31301 20.0005 10.2046 20.0001"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39911 11.9777C4.17592 11.3411 4.06075 10.673 4.05819 9.99996C4.0623 9.32799 4.17322 8.66075 4.38696 8.02225L4.38127 7.88968L1.19282 5.4624L1.08852 5.51101C0.372885 6.90343 0.00012207 8.4408 0.00012207 9.99987C0.00012207 11.5589 0.372885 13.0963 1.08852 14.4887L4.39911 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2042 3.86663C11.6663 3.84438 13.0804 4.37803 14.1498 5.35558L17.0296 2.59996C15.1826 0.901848 12.7366 -0.0298855 10.2042 -3.6784e-05C8.3126 -0.000477834 6.45819 0.514732 4.8483 1.48798C3.2384 2.46124 1.93649 3.85416 1.08813 5.51101L4.38775 8.02225C4.79132 6.82005 5.56974 5.77231 6.61327 5.02675C7.6568 4.28118 8.91279 3.87541 10.2042 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_95:967">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Sign in with Google
                </button>

                <button className="border-stroke dark:text-body-color-dark dark:shadow-two mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary dark:border-transparent dark:bg-[#2C303B] dark:hover:border-primary dark:hover:bg-primary/5 dark:hover:text-primary dark:hover:shadow-none">
                  <span className="mr-3">
                    <svg
                      fill="currentColor"
                      width="22"
                      height="22"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C50.1 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.7998 44.6 45.4998 37.8 46.1998C38.9 47.1998 39.9 49.1998 39.9 51.9998C39.9 56.1998 39.8 59.4998 39.8 60.4998C39.8 61.2998 40.4 62.1998 41.9 61.8998C54.1 57.7998 63 46.2998 63 32.5998C62.9 15.5998 49 1.7998 32 1.7998Z" />
                    </svg>
                  </span>
                  Sign in with Github
                </button>
                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                  <p className="w-full px-5 text-center text-base font-medium text-body-color">
                    Or, register with your email
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                </div>
                <form>
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Full Name{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Work Email{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Your Password{" "}
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8 flex">
                    <label
                      htmlFor="checkboxLabel"
                      className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabel"
                          className="sr-only"
                        />
                        <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                          <span className="opacity-0">
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill="#3056D3"
                                stroke="#3056D3"
                                strokeWidth="0.4"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <span>
                        By creating account means you agree to the
                        <a href="#0" className="text-primary hover:underline">
                          {" "}
                          Terms and Conditions{" "}
                        </a>
                        , and our
                        <a href="#0" className="text-primary hover:underline">
                          {" "}
                          Privacy Policy{" "}
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="mb-6">
                    <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Sign up
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Already using Startup?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
