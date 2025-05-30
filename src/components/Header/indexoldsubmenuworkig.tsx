// import React, { useState, useEffect } from 'react'; 

// const Header = () => {
//   const [currentMenu, setCurrentMenu] = useState<string | null>(null);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [sticky, setSticky] = useState(false);

 
//   // const menuData = [
//   //   {
//   //     menuName: 'IT Solutions',
//   //     items: [
//   //       {
//   //         title: 'Enterprise Strategy',
//   //         icon: '/images/icon/training & certification.svg',
//   //         subtitle: [
//   //           'IT Strategy and Management',
//   //           'Project Program, and Portfolio Management',
//   //           'IT GRC',
//   //           'Data Management',
//   //           'Enterprise Architecture',
//   //           'Quality Management',
//   //           'IT Service Management',
//   //           'Service Catalogue',
//   //           'Information Security',
//   //           'Application Management Services',
//   //           'Business Continuity Management',
//   //         ],
//   //       },
//   //       {
//   //         title: 'Alnafitha IT ONE Services',
//   //         icon: '/images/icon/training & certification.svg',
//   //         subtitle: ['Service A', 'Service B', 'Service C'],
//   //       },
//   //       {
//   //         title: 'E-GOV Services',
//   //         icon: "https://odoocdn.com/openerp_website/static/src/img/assets/svg/odoo_logo.svg",
//   //         subtitle: ['Government Service A', 'Government Service B'],
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     menuName: 'Services',
//   //     items: [
//   //       {
//   //         title: 'Cloud Services',
//   //         icon: '/images/icon/training & certification.svg',
//   //         subtitle: ['Service X', 'Service Y', 'Service Z'],
//   //       },
//   //       {
//   //         title: 'API Management & API Governance',
//   //         icon: '/images/icon/training & certification.svg',
//   //         subtitle: [
//   //           'Comprehensive API oversight and control',
//   //           'Governance for secure API usage',
//   //           'API lifecycle management strategies',
//   //         ],
//   //       },
//   //       {
//   //         title: 'Data Integration',
//   //         icon: '/images/icon/training & certification.svg',
//   //         subtitle: [
//   //           'Seamless data flow across systems',
//   //           'ETL processes for data transformation',
//   //           'Real-time data synchronization solutions',
//   //         ],
//   //       },
//   //       {
//   //         title: 'iPaaS',
//   //         icon: '/images/icon/training & certification.svg',

//   //         subtitle: [
//   //           'Integrated Platform as a Service solutions',
//   //           'Streamlined application integration',
//   //           'Rapid development of integration workflows',
//   //         ],
//   //       },
//   //       {
//   //         title: 'Identity & Access Management',
//   //         icon: '/images/icon/training & certification.svg',
//   //         subtitle: [
//   //           'Secure identity verification processes',
//   //           'Role-based access control solutions',
//   //           'Single sign-on (SSO) capabilities',
//   //         ],
//   //       },
//   //       {
//   //         title: 'API Security',
//   //         icon: '/images/icon/training & certification.svg',
//   //         subtitle: [
//   //           'Robust API security protocols',
//   //           'Threat detection and response mechanisms',
//   //           'Data encryption and privacy compliance',
//   //         ],
//   //       },
//   //       {
//   //         title: 'Real-time Data Analytics',
//   //         icon: '/images/icon/training & certification.svg',
//   //         subtitle: [
//   //           'Instant insights for data-driven decisions',
//   //           'Predictive analytics for future trends',
//   //           'Visualizations for easier data interpretation',
//   //         ],
//   //       },
//   //       {
//   //         title: 'ERP',
//   //         icon: '/images/icon/training & certification.svg',
//   //         subtitle: [
//   //           'IT Consultancy',
//   //           'Application Development',
//   //           'Digital Marketing',
//   //           'Oracle - Oracle Technical Services, Support & Managed Services',
//   //           'Zoho',
//   //           'Odoo',
//   //           'Salesforce',
//   //           'SAP',
//   //         ],
//   //       },
//   //     ],
//   //   }
    
    
//   // ];
//   const menuData = [

//     {
//       menuName: 'Expertise',
//       items: [
//         {
//           title: 'ERP',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Enterprise Resource Planning solutions', url: 'https://example.com/erp-solutions' },
//             { text: 'Streamlined operations management', url: 'https://example.com/operations-management' },
//             { text: 'Financial management tools', url: 'https://example.com/financial-management' },
//           ],
//         },
//         {
//           title: 'iPaaS',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Integration Platform as a Service expertise', url: 'https://example.com/ipaas-expertise' },
//             { text: 'Cloud-based integration solutions', url: 'https://example.com/cloud-integration' },
//             { text: 'Pre-built connectors and workflows', url: 'https://example.com/connectors-workflows' },
//           ],
//         },
//         {
//           title: 'Data Analytics & BI',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Business Intelligence and Analytics services', url: 'https://example.com/data-analytics-bi' },
//             { text: 'Data visualization tools', url: 'https://example.com/data-visualization-tools' },
//             { text: 'Reporting and dashboard creation', url: 'https://example.com/reporting-dashboards' },
//           ],
//         },
//         {
//           title: 'Cloud',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Cloud Computing solutions', url: 'https://example.com/cloud-solutions' },
//             { text: 'Managed cloud services', url: 'https://example.com/managed-cloud-services' },
//             { text: 'Cloud migration strategies', url: 'https://example.com/cloud-migration' },
//           ],
//         },
//         {
//           title: 'AI & ML',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Artificial Intelligence and Machine Learning applications', url: 'https://example.com/ai-ml' },
//             { text: 'Predictive analytics solutions', url: 'https://example.com/predictive-analytics' },
//             { text: 'Natural Language Processing technologies', url: 'https://example.com/nlp-technologies' },
//           ],
//         },
//         {
//           title: 'IoT',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Internet of Things solutions', url: 'https://example.com/iot-solutions' },
//             { text: 'Connected devices integration', url: 'https://example.com/device-integration' },
//             { text: 'IoT analytics and monitoring', url: 'https://example.com/iot-analytics' },
//           ],
//         },
//         {
//           title: 'Mobile App Development',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Custom Mobile Applications', url: 'https://example.com/mobile-app-development' },
//             { text: 'Cross-platform app development', url: 'https://example.com/cross-platform-development' },
//             { text: 'App maintenance and support', url: 'https://example.com/app-support' },
//           ],
//         },
//         {
//           title: 'Custom Software Development',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Tailored software solutions', url: 'https://example.com/custom-software' },
//             { text: 'Agile development methodologies', url: 'https://example.com/agile-development' },
//             { text: 'Integration with existing systems', url: 'https://example.com/system-integration' },
//           ],
//         },
//         {
//           title: 'Training & Certification',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Professional development programs', url: 'https://example.com/training-certification' },
//             { text: 'Certification courses for industry standards', url: 'https://example.com/certification-courses' },
//             { text: 'Workshops and hands-on training', url: 'https://example.com/workshops-training' },
//           ],
//         },
//       ],
//     }
    
    
//     ,
   
    
//     {
//       menuName: 'Services',
//       items: [
//         {
//           title: 'Cloud Services',
//           icon: '/images/icon/training & certification.svg',
//           subtitle: [
//             { text: 'Service X', url: 'https://example.com/service-x' },
//             { text: 'Service Y', url: 'https://example.com/service-y' },
//             { text: 'Service Z', url: 'https://example.com/service-z' },
//           ],
//         },
//         {
//           title: 'API Management & API Governance',
//           icon: '/images/icon/training & certification.svg',
//           subtitle: [
//             { text: 'Comprehensive API oversight and control', url: 'https://example.com/api-oversight' },
//             { text: 'Governance for secure API usage', url: 'https://example.com/api-governance' },
//             { text: 'API lifecycle management strategies', url: 'https://example.com/api-lifecycle' },
//           ],
//         },
//         {
//           title: 'Data Integration',
//           icon: '/images/icon/training & certification.svg',
//           subtitle: [
//             { text: 'Seamless data flow across systems', url: 'https://example.com/data-flow' },
//             { text: 'ETL processes for data transformation', url: 'https://example.com/etl-processes' },
//             { text: 'Real-time data synchronization solutions', url: 'https://example.com/data-sync' },
//           ],
//         },
//         {
//           title: 'iPaaS',
//           icon: '/images/icon/training & certification.svg',
//           subtitle: [
//             { text: 'Integrated Platform as a Service solutions', url: 'https://example.com/ipaas-solutions' },
//             { text: 'Streamlined application integration', url: 'https://example.com/app-integration' },
//             { text: 'Rapid development of integration workflows', url: 'https://example.com/integration-workflows' },
//           ],
//         },
//         {
//           title: 'Identity & Access Management',
//           icon: '/images/icon/training & certification.svg',
//           subtitle: [
//             { text: 'Secure identity verification processes', url: 'https://example.com/identity-verification' },
//             { text: 'Role-based access control solutions', url: 'https://example.com/access-control' },
//             { text: 'Single sign-on (SSO) capabilities', url: 'https://example.com/sso' },
//           ],
//         },
//         {
//           title: 'API Security',
//           icon: '/images/icon/training & certification.svg',
//           subtitle: [
//             { text: 'Robust API security protocols', url: 'https://example.com/api-security' },
//             { text: 'Threat detection and response mechanisms', url: 'https://example.com/threat-detection' },
//             { text: 'Data encryption and privacy compliance', url: 'https://example.com/data-encryption' },
//           ],
//         },
//         {
//           title: 'Real-time Data Analytics',
//           icon: '/images/icon/training & certification.svg',
//           subtitle: [
//             { text: 'Instant insights for data-driven decisions', url: 'https://example.com/data-insights' },
//             { text: 'Predictive analytics for future trends', url: 'https://example.com/predictive-analytics' },
//             { text: 'Visualizations for easier data interpretation', url: 'https://example.com/data-visualization' },
//           ],
//         },
//         {
//           title: 'ERP',
//           icon: '/images/icon/training & certification.svg',
//           subtitle: [
//             { text: 'IT Consultancy', url: 'https://example.com/it-consultancy' },
//             { text: 'Application Development', url: 'https://example.com/app-development' },
//             { text: 'Digital Marketing', url: 'https://example.com/digital-marketing' },
//             { text: 'Oracle - Oracle Technical Services, Support & Managed Services', url: 'https://example.com/oracle-services' },
//             { text: 'Zoho', url: 'https://example.com/zoho' },
//             { text: 'Odoo', url: 'https://example.com/odoo' },
//             { text: 'Salesforce', url: 'https://example.com/salesforce' },
//             { text: 'SAP', url: 'https://example.com/sap' },
//           ],
//         },
//       ],
//     },
//     {
//       menuName: 'Products',
//       items: [
//         {
//           title: 'eXert ERP',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Comprehensive ERP solution for businesses', url: 'https://example.com/exert-erp' },
//             { text: 'Modules for finance, HR, and more', url: 'https://example.com/erp-modules' },
//             { text: 'User-friendly interface', url: 'https://example.com/user-interface' },
//           ],
//         },
//         {
//           title: 'ERP Ledger',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Streamlined ledger management system', url: 'https://example.com/erp-ledger' },
//             { text: 'Real-time financial reporting', url: 'https://example.com/financial-reporting' },
//             { text: 'Integration with existing ERP systems', url: 'https://example.com/integration-erp' },
//           ],
//         },
//         {
//           title: 'HTCD Cloud Security',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Advanced cloud security solutions', url: 'https://example.com/htcd-cloud-security' },
//             { text: 'Threat detection and response', url: 'https://example.com/threat-detection' },
//             { text: 'Compliance with industry standards', url: 'https://example.com/compliance-standards' },
//           ],
//         },
//       ],
//     },
//     {
//       menuName: 'Technologies',
//       items: [
//         {
//           title: 'Frontend',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'React.js', url: 'https://reactjs.org/' },
//             { text: 'Next.js', url: 'https://nextjs.org/' },
//             { text: 'Vue.js', url: 'https://vuejs.org/' },
//             { text: 'Angular', url: 'https://angular.io/' },
//             { text: 'HTML5 & CSS3', url: 'https://www.w3.org/standards/webdesign/' },
//             { text: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
//             { text: 'Bootstrap', url: 'https://getbootstrap.com/' },
//             { text: 'Sass', url: 'https://sass-lang.com/' },
//             { text: 'jQuery', url: 'https://jquery.com/' },
//           ],
//         },
//         {
//           title: 'Backend',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Node.js', url: 'https://nodejs.org/' },
//             { text: 'Express.js', url: 'https://expressjs.com/' },
//             { text: 'Django', url: 'https://www.djangoproject.com/' },
//             { text: 'Ruby on Rails', url: 'https://rubyonrails.org/' },
//             { text: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' },
//             { text: 'PHP', url: 'https://www.php.net/' },
//             { text: 'Flask', url: 'https://flask.palletsprojects.com/' },
//             { text: 'ASP.NET', url: 'https://dotnet.microsoft.com/apps/aspnet' },
//             { text: 'Go', url: 'https://golang.org/' },
//           ],
//         },
//         {
//           title: 'App Development',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'React Native', url: 'https://reactnative.dev/' },
//             { text: 'Flutter', url: 'https://flutter.dev/' },
//             { text: 'Xamarin', url: 'https://dotnet.microsoft.com/apps/xamarin' },
//             { text: 'Swift (iOS)', url: 'https://developer.apple.com/swift/' },
//             { text: 'Kotlin (Android)', url: 'https://kotlinlang.org/' },
//             { text: 'Ionic', url: 'https://ionicframework.com/' },
//             { text: 'PhoneGap', url: 'https://phonegap.com/' },
//             { text: 'Unity', url: 'https://unity.com/' },
//             { text: 'Apache Cordova', url: 'https://cordova.apache.org/' },
//           ],
//         },
//       ],
//     },
    
    
//     {
//       menuName: 'About Us',
//       items: [
//         {
//           title: 'News Room',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Latest News', url: 'https://example.com/latest-news' },
//             { text: 'Press Releases', url: 'https://example.com/press-releases' },
//           ],
//         },
//         {
//           title: 'Leadership',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Executive Team', url: 'https://example.com/executive-team' },
//             { text: 'Board of Directors', url: 'https://example.com/board-of-directors' },
//           ],
//         },
//         {
//           title: 'Data Privacy',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Privacy Policy', url: 'https://example.com/privacy-policy' },
//             { text: 'Data Protection', url: 'https://example.com/data-protection' },
//           ],
//         },
//         {
//           title: 'Global Presence',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Our Locations', url: 'https://example.com/locations' },
//             { text: 'Global Partnerships', url: 'https://example.com/partnerships' },
//           ],
//         },
//         {
//           title: 'Awards & Recognition',
//           icon: 'https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg',
//           subtitle: [
//             { text: 'Industry Awards', url: 'https://example.com/industry-awards' },
//             { text: 'Certifications', url: 'https://example.com/certifications' },
//           ],
//         },
//       ],
//     }
//   ];
  
//   // const handleStickyNavbar = () => {
//   //   setSticky(window.scrollY >= 80);
//   // };

//   // useEffect(() => {
//   //   window.addEventListener("scroll", handleStickyNavbar);
//   //   return () => window.removeEventListener("scroll", handleStickyNavbar);
//   // }, []);

//   const handleStickyNavbar = () => {
//     // Remove the scroll check to keep the header fixed
//     setSticky(true);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleStickyNavbar);
//     return () => window.removeEventListener("scroll", handleStickyNavbar);
//   }, []);

//   return (
//     <header className={`header left-0 top-0 z-40 w-full items-center ${sticky ? "fixed bg-white shadow-lg backdrop-blur-md" : "absolute bg-transparent"} transition-all`}>
//       <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto w-full">
//       <img
//   src="/images/logo/logo.png"
//   alt="Logo"
//   className="h-9 w-auto z-40" // Adjust height as needed
// />

//         {/* Hamburger Icon for Mobile */}
//         {/* <div className="sm:hidden flex items-center">
//           <button className="text-black focus:outline-none" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div> */}
// <button
//                   // onClick={navbarToggleHandler}
//                   onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//                   id="navbarToggler"
//                   aria-label="Mobile Menu"
//                   className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
//                 >
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
//                       isMobileMenuOpen ? " top-[7px] rotate-45" : " "
//                     }`}
//                   />
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
//                       isMobileMenuOpen ? "opacity-0 " : " "
//                     }`}
//                   />
//                   <span
//                     className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
//                       isMobileMenuOpen ? " top-[-8px] -rotate-45" : " "
//                     }`}
//                   />
//                 </button>
        

//         {/* Desktop Navigation */}
//         <nav className="hidden sm:flex space-x-10 ml-auto">
//           <ul className="flex space-x-6 font-medium text-black">
//             {menuData.map((menu, menuIndex) => (
//               <li
//                 key={menuIndex}
//                 className="relative group"
//                 onMouseEnter={() => setCurrentMenu(menu.menuName)} // Set current menu on hover
//                 onMouseLeave={() => {
//                   setCurrentMenu(null); // Close the menu when leaving
//                   setHoveredIndex(null); 
//                 }}
//               >
//                 <span className="flex items-center cursor-pointer hover:text-mai hover:underline hover:decoration-mai transition-colors duration-300">
//                   {menu.menuName}
//                   <svg
//                     className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${currentMenu === menu.menuName ? 'rotate-0' : 'rotate-180'}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
//                   </svg>
//                 </span>

//                 {/* Dropdown Menu */}
                
// {currentMenu === menu.menuName && (
//   <div
//     className="fixed left-0 right-0 top-18 bg-white text-black shadow-xl z-25 w-screen p-6"
//     onMouseEnter={() => setCurrentMenu(menu.menuName)} // Keep dropdown open
//     onMouseLeave={() => {
//       setCurrentMenu(null); // Close when not hovering over the entire dropdown
//       setHoveredIndex(null);
//     }}
//   >
//     <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto">
//       <div className="col-span-5 bg-white p-4 border-r border-gray-200">
//         {menu.items.map((item, index) => (
//           <div
//             key={index}
//             onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
//             className="p-4 cursor-pointer flex items-center justify-between transition-all duration-200 ease-in-out rounded-lg hover:bg-gray-100"
//           >
//             <div className="flex items-center">
//               <img src={item.icon} alt="Item Icon" className="h-6 w-6 mr-2" />
//               <h3 className="font-medium text-sm text-gray-800  hover:underline hover:decoration-mai ">{item.title}</h3>
//             </div>
//             <svg
//               className={`h-5 w-5 ml-5 transition-colors duration-300 transform rotate-45 ${hoveredIndex === index ? 'text-mai' : 'text-gray-500'}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
//             </svg>
//           </div>
//         ))}
//       </div>

//       <div className="col-span-7 bg-white p-4">
        
//         {hoveredIndex !== null && (
//   <div className="grid grid-cols-2 gap-4">
//     {menu.items[hoveredIndex].subtitle.map((sub, idx) => (
//       <div key={idx} className="flex items-start list-disc ml-5 space-y-2 text-gray-700">
//         <li className="text-sm font-medium text-gray-600 whitespace-nowrap" style={{ width: '100%' }}>
//           <a href={sub.url} target="_blank" rel="noopener noreferrer"             
//           className="hover:text-mai hover:underline hover:decoration-mai"
//           >
//             {sub.text}
//             {/* <svg 
//               className="h-4 w-4 text-gray-500 hover:text-mai" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="2" 
//               viewBox="0 0 24 24" 
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6"></path>
//             </svg> */}
//           </a>
//         </li>
//       </div>
//     ))}
//   </div>
// )}

//       </div>
//     </div>
//   </div>
// )}


//               </li>
//             ))}
//             {/* <li>
//               <span className="cursor-pointer hover:text-blue-500 transition-colors duration-300">About</span>
//             </li> */}
//           </ul>
//         </nav>

//         {/* Mobile Navigation Drawer */}
//         {isMobileMenuOpen && (
//           <div className="fixed inset-0 z-30 bg-white  flex justify-end">
//             <div className="w-3/4 sm:w-1/3 bg-white p-6">
//               <button
//                 className="mb-6 text-right text-2xl text-gray-600 focus:outline-none"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 &times;
//               </button>
//               <ul className="space-y-4 text-black font-medium">
//                 {menuData.map((menu, menuIndex) => (
//                   <li key={menuIndex} className="cursor-pointer">
//                     <span
//                       onClick={() => setCurrentMenu(currentMenu === menu.menuName ? null : menu.menuName)}
//                       className="flex justify-between items-center"
//                     >
//                       {menu.menuName}
//                       <span>{currentMenu === menu.menuName ? '-' : '+'}</span>
//                     </span>
//                     {currentMenu === menu.menuName && (
//                       <ul className="pl-4 mt-2 space-y-2">
                        
//                         {menu.items.map((item, index) => (
//   <li key={index} className="font-semibold text-gray-700">
//     {item.title}
//     <ul className="ml-4 text-gray-600 space-y-1">
//       {item.subtitle.map((sub, idx) => (
//         <li key={idx} className="flex items-start list-disc ml-5 space-y-2 text-gray-700">
//           <a 
//             href={sub.url} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="text-sm font-medium text-gray-600  hover:text-mai hover:underline hover:decoration-mai"
//           >
//             {sub.text}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </li>
// ))}

//                       </ul>
//                     )}
//                   </li>
//                 ))}
//                 <li>
//                   <span className="cursor-pointer hover:text-blue-500">About</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
// // previous code 1st nov withour by deafutl subutle showing



// code  20 nov

// {isMobileMenuOpen && (
          
//   <div className="fixed inset-0 z-50 bg-gray-50 flex justify-end">
// {/* <div className="fixed inset-0 z-50 bg-[rgba(255,255,255,0.5)] flex justify-end"> */}

//     <div className="w-3/4 sm:w-1/3 bg-gray-50 p-6">
//       <button

//         className="mb-6 text-right text-2xl text-gray-600 focus:outline-none"
//         onClick={() => setMobileMenuOpen(false)}
//       >
//         &times;
//       </button>
//       <ul className="space-y-4 text-black font-medium bg-gray-50 p-4">
//         {menuData?.map((menu, menuIndex) => (
//           <li key={menuIndex} className="cursor-pointer">
//             <span
//               onClick={() => setCurrentMenu(currentMenu === menu.menuName ? null : menu.menuName)}
//               className="flex justify-between items-center"
//             >
//               {menu.menuName}
//               <span>{currentMenu === menu.menuName ? '-' : '+'}</span>
//             </span>
//             {currentMenu === menu.menuName && (
//               <ul className="pl-4 mt-2 space-y-2">
//                 {menu?.items?.map((item, index) => (
//                   <li key={index} className="font-semibold text-gray-700">
//                     {item.title}
//                     <ul className="ml-4 text-gray-600 space-y-1">
//                       {item?.subtitle?.map((sub, idx) => (
//                         <li key={idx} className="flex items-start list-disc ml-5 space-y-2 text-gray-700">
//                           {/* <a 
//                             // href={sub.url} 
//                             href={`/details?contentKey=${sub.contentKey}`} // Always goes to /details with contentKey

//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             className="text-sm font-medium text-gray-600 hover:text-mai hover:underline hover:decoration-mai"
//                           >
//                             {sub.text}
//                           </a> */}
//                           {/* <Link 
//   href={`/details?contentKey=${sub.contentKey}`}
//   passHref
// >
//   <a 
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="text-sm font-medium text-gray-600 hover:text-mai hover:underline hover:decoration-mai"
//   >
//     {sub.text}
//   </a>
// </Link> */}

// <Link 
//   // href={`/details?contentKey=${sub.contentKey}`}
//   href='#'
//   className="text-sm font-medium text-gray-600 hover:text-mai hover:underline hover:decoration-mai"
// >
//   {sub.text}
// </Link>

//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//         {/* <li>
//           <span className="cursor-pointer hover:text-blue-500">About</span>
//         </li> */}
//       </ul>
//     </div>
//   </div>
// )}