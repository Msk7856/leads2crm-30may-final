// import { Menu } from "@/types/menu";
// import { FaBuilding, FaBullhorn, FaChartLine, FaCity, FaCloud, FaCode, FaCog, FaCogs, FaCube, FaDatabase, FaExclamationTriangle, FaFileAlt, FaGraduationCap, FaHeadset, FaHeartbeat, FaIndustry, FaInfoCircle, FaLaptopCode, FaList, FaMobileAlt, FaMoneyBillWave, FaPhoneAlt, FaSearch, FaSignInAlt, FaStore, FaThLarge, FaTools, FaUserPlus } from 'react-icons/fa';

// const menuData: Menu[] = [
//   {
//     id: 1,
//     title: "Home",
//     path: "/",
//     newTab: false,
//     icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", // Icon for Oracle
//   },
  
//   // {
//   //   id: 2,
//   //   title: "Services",
//   //   newTab: false,

//   //   submenu: [
//   //     {
//   //       id: 41,
//   //       title: "About Page",
//   //       path: "/about",
//   //       newTab: false,
//   //       icon: <FaInfoCircle /> // Icon for About Page
//   //     },
//   //     {
//   //       id: 42,
//   //       title: "Contact Page",
//   //       path: "/contact",
//   //       newTab: false,
//   //       icon: <FaPhoneAlt />, // Icon for Contact Page
//   //     },
//   //     {
//   //       id: 43,
//   //       title: "Blog Grid Page",
//   //       path: "/blog",
//   //       newTab: false,
//   //       icon: <FaThLarge />, // Icon for Blog Grid Page
//   //     },
//   //     {
//   //       id: 44,
//   //       title: "Blog Sidebar Page",
//   //       path: "/blog-sidebar",
//   //       newTab: false,
//   //       icon: <FaList />, // Icon for Blog Sidebar Page
//   //     },
//   //     {
//   //       id: 45,
//   //       title: "Blog Details Page",
//   //       path: "/blog-details",
//   //       newTab: false,
//   //       icon: <FaFileAlt />, // Icon for Blog Details Page
//   //     },
//   //     {
//   //       id: 46,
//   //       title: "Sign In Page",
//   //       path: "/signin",
//   //       newTab: false,
//   //       icon: <FaSignInAlt />, // Icon for Sign In Page
//   //     },
//   //     {
//   //       id: 47,
//   //       title: "Sign Up Page",
//   //       path: "/signup",
//   //       newTab: false,
//   //       icon: <FaUserPlus />, // Icon for Sign Up Page
//   //     },
//   //     {
//   //       id: 48,
//   //       title: "Error Page",
//   //       path: "/error",
//   //       newTab: false,
//   //       icon: <FaExclamationTriangle />, // Icon for Error Page
//   //     },
//   //   ],
//   //   icon: undefined
//   // },
//   {
//     id: 2,
//     title: "Services",
//     newTab: false,
  
//     submenu: [
//       {
//         id: 41,
//         title: "IT Consultancy",
//         path: "/services/it-consultancy",
//         newTab: false,
//         icon: '/images/icon/Consultancy & Healthchecks.svg'
//         },
//       {
//         id: 42,
//         title: "Application Development",
//         path: "/services/application-development",
//         newTab: false,
//         icon: '/images/icon/software development.svg' // Icon for Application Development
//       },
//       {
//         id: 43,
//         title: "Digital Marketing",
//         path: "/services/digital-marketing",
//         newTab: false,
//         icon: '/images/icon/training & certification.svg' // Icon for Digital Marketing
//       },
//       {
//         id: 44,
//         title: "Oracle",
//         path: "/services/oracle",
//         newTab: false,
//         icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", // Icon for Oracle
//         submenu: [
//           {
//             id: 441,
//             title: "Oracle Technical Services",
//             path: "/services/oracle/technical-services",
//             newTab: false,
//             icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", // Icon for Oracle
//           },
//           {
//             id: 442,
//             title: "Oracle Support & Managed Services",
//             path: "/services/oracle/support-managed",
//             newTab: false,
//             icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", // Icon for Oracle
//           }
//         ]
//       },
//       {
//         id: 45,
//         title: "Zoho",
//         path: "/services/zoho",
//         newTab: false,
//         icon: '/images/services/zoho-1.svg' // Icon for Zoho
//       },
//       {
//         id: 46,
//         title: "Odoo",
//         path: "/services/odoo",
//         newTab: false,
//         icon: "https://odoocdn.com/openerp_website/static/src/img/assets/svg/odoo_logo.svg" // Icon for Odoo
//       },
//       {
//         id: 47,
//         title: "Salesforce",
//         path: "/services/salesforce",
//         newTab: false,
//         icon: "/images/services/salesforce-2.svg" // Icon for Salesforce
//       },
//       {
//         id: 48,
//         title: "SAP",
//         path: "/services/sap-3",
//         newTab: false,
//         icon: "/images/services/sap-3.svg" // Icon for SAP
//       }
//     ],
//     icon: undefined
//   },
//   // {
//   //   id: 2,
//   //   title: "Services",
//   //   newTab: false,
  
//   //   submenu: [
//   //     {
//   //       id: 21,
//   //       title: "AI",
//   //       newTab: false,
//   //       submenu: [
//   //         {
//   //           id: 211,
//   //           title: "Machine Learning",
//   //           path: "/services/ai/machine-learning",
//   //           newTab: false,
//   //           icon: "/images/icon/machine-learning.svg"
//   //         },
//   //         {
//   //           id: 212,
//   //           title: "Natural Language Processing",
//   //           path: "/services/ai/nlp",
//   //           newTab: false,
//   //           icon: "/images/icon/nlp.svg"
//   //         },
//   //         {
//   //           id: 213,
//   //           title: "Computer Vision",
//   //           path: "/services/ai/computer-vision",
//   //           newTab: false,
//   //           icon: "/images/icon/computer-vision.svg"
//   //         }
//   //       ],
//   //       icon: ""
//   //     },
//   //     {
//   //       id: 22,
//   //       title: "Blockchain",
//   //       newTab: false,
//   //       submenu: [
//   //         {
//   //           id: 221,
//   //           title: "Smart Contracts",
//   //           path: "/services/blockchain/smart-contracts",
//   //           newTab: false,
//   //           icon: "/images/icon/smart-contracts.svg"
//   //         },
//   //         {
//   //           id: 222,
//   //           title: "Cryptocurrency Development",
//   //           path: "/services/blockchain/cryptocurrency",
//   //           newTab: false,
//   //           icon: "/images/icon/cryptocurrency.svg"
//   //         },
//   //         {
//   //           id: 223,
//   //           title: "DeFi Solutions",
//   //           path: "/services/blockchain/defi-solutions",
//   //           newTab: false,
//   //           icon: "/images/icon/defi.svg"
//   //         }
//   //       ],
//   //       icon: ""
//   //     },
//   //     {
//   //       id: 23,
//   //       title: "Cloud",
//   //       newTab: false,
//   //       submenu: [
//   //         {
//   //           id: 231,
//   //           title: "Cloud Infrastructure",
//   //           path: "/services/cloud/infrastructure",
//   //           newTab: false,
//   //           icon: "/images/icon/cloud-infrastructure.svg"
//   //         },
//   //         {
//   //           id: 232,
//   //           title: "Cloud Security",
//   //           path: "/services/cloud/security",
//   //           newTab: false,
//   //           icon: "/images/icon/cloud-security.svg"
//   //         },
//   //         {
//   //           id: 233,
//   //           title: "Cloud Migration",
//   //           path: "/services/cloud/migration",
//   //           newTab: false,
//   //           icon: "/images/icon/cloud-migration.svg"
//   //         }
//   //       ],
//   //       icon: ""
//   //     }
//   //   ],
//   //   icon: undefined
//   // }
  
  
//   // {
//   //   id: 3,
//   //   title: "Industries",
//   //   newTab: false,
//   //   submenu: [
//   //     {
//   //       id: 51,
//   //       title: "Retail & E-commerce",
//   //       path: "/industries/retail-ecommerce",
//   //       newTab: false,
//   //       icon: <FaStore />
//   //     },
//   //     {
//   //       id: 52,
//   //       title: "Manufacturing",
//   //       path: "/industries/manufacturing",
//   //       newTab: false,
//   //       icon: <FaIndustry />
//   //     },
//   //     {
//   //       id: 53,
//   //       title: "Healthcare",
//   //       path: "/industries/healthcare",
//   //       newTab: false,
//   //       icon: <FaHeartbeat />
//   //     },
//   //     {
//   //       id: 54,
//   //       title: "Finance & Banking",
//   //       path: "/industries/finance-banking",
//   //       newTab: false,
//   //       icon: <FaMoneyBillWave />
//   //     },
//   //     {
//   //       id: 55,
//   //       title: "Education",
//   //       path: "/industries/education",
//   //       newTab: false,
//   //       icon: <FaGraduationCap />
//   //     },
//   //     {
//   //       id: 56,
//   //       title: "Construction",
//   //       path: "/industries/construction",
//   //       newTab: false,
//   //       icon: <FaBuilding />
//   //     },
//   //     {
//   //       id: 57,
//   //       title: "Telecommunications",
//   //       path: "/industries/telecommunications",
//   //       newTab: false,
//   //       icon: <FaMobileAlt />
//   //     },
//   //     {
//   //       id: 58,
//   //       title: "Government",
//   //       path: "/industries/government",
//   //       newTab: false,
//   //       icon: <FaCity />
//   //     }
//   //   ],
//   //   icon: undefined
//   // },
//   ,
//   {
//     id: 3,
//     title: "Industries",
//     newTab: false,
//     submenu: [
//       {
//         id: 51,
//         title: "Retail & E-commerce",
//         path: "/industries/retail-ecommerce",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Manager-1.svg"
//       },
//       {
//         id: 52,
//         title: "Manufacturing",
//         path: "/industries/manufacturing",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg"
//       },
//       {
//         id: 53,
//         title: "Healthcare",
//         path: "/industries/healthcare",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2021/01/Healthcare.svg"
//       },
//       {
//         id: 54,
//         title: "Finance & Banking",
//         path: "/industries/finance-banking",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2021/01/Banking-Finance.svg"
//       },
//       {
//         id: 55,
//         title: "Education",
//         path: "/industries/education",
//         newTab: false,
//         icon: "/images/icon/training & certification.svg"
//       },
//       {
//         id: 56,
//         title: "Construction",
//         path: "/industries/construction",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Stream-Processor.svg"
//       },
//       {
//         id: 57,
//         title: "Telecommunications",
//         path: "/industries/telecommunications",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Stream-Processor.svg"
//       },
//       {
//         id: 58,
//         title: "Government",
//         path: "/industries/government",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2021/01/Government.svg "
//       }
//     ],
//     icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2021/01/Government.svg "
//   },

//   // {
//   //   id: 3,
//   //   title: "Technologies",
//   //   newTab: false,
//   //   submenu: [
//   //     {
//   //       id: 49,
//   //       title: "Artificial Intelligence",
//   //       path: "/technologies/artificial-intelligence",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for AI
//   //     },
//   //     {
//   //       id: 50,
//   //       title: "Machine Learning",
//   //       path: "/technologies/machine-learning",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for Machine Learning
//   //     },
//   //     {
//   //       id: 51,
//   //       title: "Python",
//   //       path: "/technologies/python",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for Python
//   //     },
//   //     {
//   //       id: 52,
//   //       title: "Blockchain",
//   //       path: "/technologies/blockchain",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for Blockchain
//   //     },
//   //     {
//   //       id: 53,
//   //       title: "IoT",
//   //       path: "/technologies/iot",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for IoT
//   //     },
//   //     {
//   //       id: 54,
//   //       title: "Android",
//   //       path: "/technologies/android",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for Android
//   //     },
//   //     {
//   //       id: 55,
//   //       title: "iOS",
//   //       path: "/technologies/ios",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for iOS
//   //     },
//   //     {
//   //       id: 56,
//   //       title: "Node.js",
//   //       path: "/technologies/node-js",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for Node.js
//   //     },
//   //     {
//   //       id: 57,
//   //       title: "React JS",
//   //       path: "/technologies/react-js",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for React JS
//   //     },
//   //     {
//   //       id: 58,
//   //       title: "Angular JS",
//   //       path: "/technologies/angular-js",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for Angular JS
//   //     },
//   //     {
//   //       id: 59,
//   //       title: ".NET",
//   //       path: "/technologies/dotnet",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for .NET
//   //     },
//   //     {
//   //       id: 60,
//   //       title: "SQL Server",
//   //       path: "/technologies/sql-server",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for SQL Server
//   //     },
//   //     {
//   //       id: 61,
//   //       title: "PHP",
//   //       path: "/technologies/php",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for PHP
//   //     },
//   //     {
//   //       id: 62,
//   //       title: "MySQL",
//   //       path: "/technologies/mysql",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for MySQL
//   //     },
//   //     {
//   //       id: 63,
//   //       title: "Creative Designing",
//   //       path: "/technologies/creative-designing",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for Creative Designing
//   //     },
//   //     {
//   //       id: 64,
//   //       title: "jQuery",
//   //       path: "/technologies/jquery",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for jQuery
//   //     },
//   //     {
//   //       id: 65,
//   //       title: "Bootstrap",
//   //       path: "/technologies/bootstrap",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for Bootstrap
//   //     },
//   //     {
//   //       id: 66,
//   //       title: "WordPress",
//   //       path: "/technologies/wordpress",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for WordPress
//   //     },
//   //   ],
//   //   icon: undefined
//   // },

//   {
//     id: 3,
//     title: "Technologies",
//     newTab: false,
//     submenu: [
//       {
//         id: 49,
//         title: "Artificial Intelligence",
//         path: "/technologies/artificial-intelligence",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg", // Icon for AI
//       },
//       {
//         id: 50,
//         title: "Machine Learning",
//         path: "/technologies/machine-learning",
//         newTab: false,
// icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",      },
//       {
//         id: 51,
//         title: "Python",
//         path: "/technologies/python",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 52,
//         title: "Blockchain",
//         path: "/technologies/blockchain",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 53,
//         title: "IoT",
//         path: "/technologies/iot",
//         newTab: false,
//        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 54,
//         title: "Android",
//         path: "/technologies/android",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 55,
//         title: "iOS",
//         path: "/technologies/ios",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 56,
//         title: "Node.js",
//         path: "/technologies/node-js",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 57,
//         title: "React JS",
//         path: "/technologies/react-js",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 58,
//         title: "Angular JS",
//         path: "/technologies/angular-js",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 59,
//         title: ".NET",
//         path: "/technologies/dotnet",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 60,
//         title: "SQL Server",
//         path: "/technologies/sql-server",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 61,
//         title: "PHP",
//         path: "/technologies/php",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 62,
//         title: "Next.js",
//         path: "/technologies/mysql",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 62,
//         title: "Swift",
//         path: "/technologies/mysql",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       }, {
//         id: 62,
//         title: "Java",
//         path: "/technologies/mysql",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       }, {
//         id: 62,
//         title: "Kotlin",
//         path: "/technologies/mysql",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 63,
//         title: "Creative Designing",
//         path: "/technologies/creative-designing",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
//       {
//         id: 63,
//         title: "Redis",
//         path: "/technologies/creative-designing",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },{
//         id: 63,
//         title: "MongoDB",
//         path: "/technologies/creative-designing",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },{
//         id: 63,
//         title: "Elastic Search",
//         path: "/technologies/creative-designing",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
//       },
      
      
      
//     ],
//     icon: undefined
//   },

//   // {
//   //   id: 4,
//   //   title: "Products",
//   //   newTab: false,
//   //   submenu: [
//   //     {
//   //       id: 67,
//   //       title: "CRM - Customer Relationship Management",
//   //       path: "/products/crm",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for CRM
//   //     },
//   //     {
//   //       id: 68,
//   //       title: "FAS - Financial Accounting System",
//   //       path: "/products/fas",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for FAS
//   //     },
//   //     {
//   //       id: 69,
//   //       title: "AMS - Asset Management System",
//   //       path: "/products/ams",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for AMS
//   //     },
//   //     {
//   //       id: 70,
//   //       title: "SCM - Supply Chain Management",
//   //       path: "/products/scm",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for SCM
//   //     },
//   //     {
//   //       id: 71,
//   //       title: "POS - Point of Sale",
//   //       path: "/products/pos",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for POS
//   //     },
//   //     {
//   //       id: 72,
//   //       title: "HRM - Human Resource Management",
//   //       path: "/products/hrm",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for HRM
//   //     },
//   //     {
//   //       id: 73,
//   //       title: "CPM - Construction Project Management",
//   //       path: "/products/cpm",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for CPM
//   //     },
//   //     {
//   //       id: 74,
//   //       title: "PCS - Production Control System",
//   //       path: "/products/pcs",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for PCS
//   //     },
//   //     {
//   //       id: 75,
//   //       title: "MCS - Maintenance Control System",
//   //       path: "/products/mcs",
//   //       newTab: false,
//   //       icon: <FaCog />, // Icon for MCS
//   //     },
//   //   ],
//   //   icon: undefined
//   // },
//   {
//     id: 4,
//     title: "Products",
//     newTab: false,
//     submenu: [
//       {
//         id: 67,
//         title: "CRM - Customer Relationship Management",
//         path: "/products/crm",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg", // Icon for CRM
//       },
//       {
//         id: 68,
//         title: "FAS - Financial Accounting System",
//         path: "/products/fas",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
//       },
//       {
//         id: 69,
//         title: "AMS - Asset Management System",
//         path: "/products/ams",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
//       },
//       {
//         id: 70,
//         title: "SCM - Supply Chain Management",
//         path: "/products/scm",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
//       },
//       {
//         id: 71,
//         title: "POS - Point of Sale",
//         path: "/products/pos",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
//       },
//       {
//         id: 72,
//         title: "HRM - Human Resource Management",
//         path: "/products/hrm",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
//       },
//       {
//         id: 73,
//         title: "CPM - Construction Project Management",
//         path: "/products/cpm",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
//       },
//       {
//         id: 74,
//         title: "PCS - Production Control System",
//         path: "/products/pcs",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
//       },
//       {
//         id: 75,
//         title: "MCS - Maintenance Control System",
//         path: "/products/mcs",
//         newTab: false,
//         icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
//       },
//     ],
//     icon: ""
//   },

  
//   {
//     id: 2,
//     title: "About",
//     path: "/about",
//     newTab: false,
//     icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
//   },
//   {
//     id: 2,
//     title: "Contact",
//     path: "/contact",
//     newTab: false,
//     icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
//   },
  
  
//   // {
//   //   id: 2,
//   //   title: "Services",
//   //   newTab: false,
//   //   submenu: [
//   //     {
//   //       id: 41,
//   //       title: "About Page",
//   //       path: "/about",
//   //       newTab: false,
//   //     },
//   //     {
//   //       id: 42,
//   //       title: "Contact Page",
//   //       path: "/contact",
//   //       newTab: false,
//   //     },
//   //     {
//   //       id: 43,
//   //       title: "Blog Grid Page",
//   //       path: "/blog",
//   //       newTab: false,
//   //     },
//   //     {
//   //       id: 44,
//   //       title: "Blog Sidebar Page",
//   //       path: "/blog-sidebar",
//   //       newTab: false,
//   //     },
//   //     {
//   //       id: 45,
//   //       title: "Blog Details Page",
//   //       path: "/blog-details",
//   //       newTab: false,
//   //     },
//   //     {
//   //       id: 46,
//   //       title: "Sign In Page",
//   //       path: "/signin",
//   //       newTab: false,
//   //     },
//   //     {
//   //       id: 47,
//   //       title: "Sign Up Page",
//   //       path: "/signup",
//   //       newTab: false,
//   //     },
//   //     {
//   //       id: 48,
//   //       title: "Error Page",
//   //       path: "/error",
//   //       newTab: false,
//   //     },
//   //   ],
//   // },
//   // {
//   //   id: 33,
//   //   title: "Blog",
//   //   path: "/blog",
//   //   newTab: false,
//   //   icon: ""
//   // },
//   // {
//   //   id: 3,
//   //   title: "Support",
//   //   path: "/contact",
//   //   newTab: false,
//   //   icon: ""
//   // },
//   // {
//   //   id: 4,
//   //   title: "Pages",
//   //   newTab: false,
//   //   submenu: [
//   //     {
//   //       id: 41,
//   //       title: "About Page",
//   //       path: "/about",
//   //       newTab: false,
//   //       icon: ""
//   //     },
//   //     {
//   //       id: 42,
//   //       title: "Contact Page",
//   //       path: "/contact",
//   //       newTab: false,
//   //       icon: ""
//   //     },
//   //     {
//   //       id: 43,
//   //       title: "Blog Grid Page",
//   //       path: "/blog",
//   //       newTab: false,
//   //       icon: ""
//   //     },
//   //     {
//   //       id: 44,
//   //       title: "Blog Sidebar Page",
//   //       path: "/blog-sidebar",
//   //       newTab: false,
//   //       icon: ""
//   //     },
//   //     {
//   //       id: 45,
//   //       title: "Blog Details Page",
//   //       path: "/blog-details",
//   //       newTab: false,
//   //       icon: ""
//   //     },
//   //     {
//   //       id: 46,
//   //       title: "Sign In Page",
//   //       path: "/signin",
//   //       newTab: false,
//   //       icon: ""
//   //     },
//   //     {
//   //       id: 47,
//   //       title: "Sign Up Page",
//   //       path: "/signup",
//   //       newTab: false,
//   //       icon: ""
//   //     },
//   //     {
//   //       id: 48,
//   //       title: "Error Page",
//   //       path: "/error",
//   //       newTab: false,
//   //       icon: ""
//   //     },
//   //   ],
//   // },
// ];
// export default menuData;
// 2

// qoeking  28oct 10pm

