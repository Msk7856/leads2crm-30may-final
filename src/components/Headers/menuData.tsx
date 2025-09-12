import { Menu } from "@/types/menu";
import { FaBuilding, FaBullhorn, FaChartLine, FaCity, FaCloud, FaCode, FaCog, FaCogs, FaCube, FaDatabase, FaExclamationTriangle, FaFileAlt, FaGraduationCap, FaHeadset, FaHeartbeat, FaIndustry, FaInfoCircle, FaLaptopCode, FaList, FaMobileAlt, FaMoneyBillWave, FaPhoneAlt, FaSearch, FaSignInAlt, FaStore, FaThLarge, FaTools, FaUserPlus } from 'react-icons/fa';

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", // Icon for Oracle
  },
  
  {
    id: 2,
    title: "Services",
    newTab: false,
  
    submenu: [
      {
        id: 41,
        title: "IT Consultancy",
        path: "/services/it-consultancy",
        newTab: false,
        icon: '/images/services/it.png'
        },
      {
        id: 42,
        title: "Application Development",
        path: "/services/application-development",
        newTab: false,
        icon: '/images/services/app1.png' // Icon for Application Development
      },
      {
        id: 43,
        title: "Digital Marketing",
        path: "/services/digital-marketing",
        newTab: false,
        icon: '/images/services/digit.png' // Icon for Digital Marketing
      },
      {
        id: 44,
        title: "Oracle",
        path: "/services/oracle",
        newTab: false,
        icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", // Icon for Oracle
        submenu: [
          {
            id: 441,
            title: "Oracle Technical Services",
            path: "/services/oracle/technical-services",
            newTab: false,
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", // Icon for Oracle
          },
          {
            id: 442,
            title: "Oracle Support & Managed Services",
            path: "/services/oracle/support-managed",
            newTab: false,
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", // Icon for Oracle
          }
        ]
      },
      {
        id: 45,
        title: "Zoho",
        path: "/services/zoho",
        newTab: false,
        icon: '/images/services/zoho-1.svg' // Icon for Zoho
      },
      {
        id: 46,
        title: "Odoo",
        path: "/services/odoo",
        newTab: false,
        icon: "https://odoocdn.com/openerp_website/static/src/img/assets/svg/odoo_logo.svg" // Icon for Odoo
      },
      {
        id: 47,
        title: "Salesforce",
        path: "/services/salesforce",
        newTab: false,
        icon: "/images/services/salesforce-2.svg" // Icon for Salesforce
      },
      {
        id: 48,
        title: "SAP",
        path: "/services/sap-3",
        newTab: false,
        icon: "/images/services/sap-3.svg" // Icon for SAP
      }
    ],
    icon: undefined
  },
  
  
  {
    id: 3,
    title: "Industries",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Retail & E-commerce",
        path: "/industries/retail-ecommerce",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Manager-1.svg"
      },
      {
        id: 52,
        title: "Manufacturing",
        path: "/industries/manufacturing",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg"
      },
      {
        id: 53,
        title: "Healthcare",
        path: "/industries/healthcare",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2021/01/Healthcare.svg"
      },
      {
        id: 54,
        title: "Finance & Banking",
        path: "/industries/finance-banking",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2021/01/Banking-Finance.svg"
      },
      {
        id: 55,
        title: "Education",
        path: "/industries/education",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Training-Certification.svg"
      },
      {
        id: 56,
        title: "Construction",
        path: "/industries/construction",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Stream-Processor.svg"
      },
      {
        id: 57,
        title: "Telecommunications",
        path: "/industries/telecommunications",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Stream-Processor.svg"
      },
      {
        id: 58,
        title: "Government",
        path: "/industries/government",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2021/01/Government.svg "
      }
    ],
    icon: undefined
  },

  

  {
    id: 3,
    title: "Technologies",
    newTab: false,
    submenu: [
      {
        id: 49,
        title: "Artificial Intelligence",
        path: "/technologies/artificial-intelligence",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg", // Icon for AI
      },
      {
        id: 50,
        title: "Machine Learning",
        path: "/technologies/machine-learning",
        newTab: false,
icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",      },
      {
        id: 51,
        title: "Python",
        path: "/technologies/python",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 52,
        title: "Blockchain",
        path: "/technologies/blockchain",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 53,
        title: "IoT",
        path: "/technologies/iot",
        newTab: false,
       icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 54,
        title: "Android",
        path: "/technologies/android",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 55,
        title: "iOS",
        path: "/technologies/ios",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 56,
        title: "Node.js",
        path: "/technologies/node-js",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 57,
        title: "React JS",
        path: "/technologies/react-js",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 58,
        title: "Angular JS",
        path: "/technologies/angular-js",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 59,
        title: ".NET",
        path: "/technologies/dotnet",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 60,
        title: "SQL Server",
        path: "/technologies/sql-server",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 61,
        title: "PHP",
        path: "/technologies/php",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 62,
        title: "MySQL",
        path: "/technologies/mysql",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 63,
        title: "Creative Designing",
        path: "/technologies/creative-designing",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 64,
        title: "jQuery",
        path: "/technologies/jquery",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 65,
        title: "Bootstrap",
        path: "/technologies/bootstrap",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
      {
        id: 66,
        title: "WordPress",
        path: "/technologies/wordpress",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-Installation-Configuration.svg",
      },
    ],
    icon: undefined
  },

  
  {
    id: 4,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 67,
        title: "CRM - Customer Relationship Management",
        path: "/products/crm",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg", // Icon for CRM
      },
      {
        id: 68,
        title: "FAS - Financial Accounting System",
        path: "/products/fas",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
      },
      {
        id: 69,
        title: "AMS - Asset Management System",
        path: "/products/ams",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
      },
      {
        id: 70,
        title: "SCM - Supply Chain Management",
        path: "/products/scm",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
      },
      {
        id: 71,
        title: "POS - Point of Sale",
        path: "/products/pos",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
      },
      {
        id: 72,
        title: "HRM - Human Resource Management",
        path: "/products/hrm",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
      },
      {
        id: 73,
        title: "CPM - Construction Project Management",
        path: "/products/cpm",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
      },
      {
        id: 74,
        title: "PCS - Production Control System",
        path: "/products/pcs",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
      },
      {
        id: 75,
        title: "MCS - Maintenance Control System",
        path: "/products/mcs",
        newTab: false,
        icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
      },
    ],
    icon: ""
  },

  
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
    icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
  },
  {
    id: 2,
    title: "Contact",
    path: "/contact",
    newTab: false,
    icon: "https://2ae95bce.rocketcdn.me/wp-content/uploads/2020/11/WSO2-API-Security.svg",
  },
  
];
export default menuData;
2
