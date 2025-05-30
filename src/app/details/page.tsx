

"use client"; 
import Image from 'next/image';
import Modal from '@/components/Modal/index';
import React ,  { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Breadcrumb from '@/components/Common/Breadcrumb';

const DetailPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const searchParams = useSearchParams();
  const contentKey = searchParams.get('contentKey'); // Get contentKey from the URL
  console.log("contentKey", contentKey);

  // const clientKey = {
  //       api: {
  //         name: "api", 
  //         sections: [
  //           {

  //             sectiontitle:"testing Api",
  //             titledescription :"Unlock API",
  //             url:"https://www.epicor.com/globalassets/uploadedimages/shared/fy21/featured-image/colleagues-working-in-cafeteria-reviewing-data-web.jpg",
  //             title: "What is API Management?",
  //             description:
  //               "API management encompasses the processes, tools, and technologies used to design, implement, secure, and analyze APIs. Effective API management ensures seamless integration, scalability, and reliability.",
  //             benefitsTitle: "Benefits of API Management",
  //             benefits: [
  //               "Increased Revenue: API monetization and partner ecosystem growth",
  //               "Improved Customer Experience: Seamless integration with third-party services",
  //               "Enhanced Security: Robust API security and access control",
  //               "Faster Time-to-Market: Rapid API development and deployment",
  //               "Better Decision-Making: Real-time API analytics and insights"
  //             ]
  //           },
  //           {
  //             title: "Maiprosoft's API Management Services",
  //             benefits: [
  //               "API Strategy & Design: Crafting API roadmaps and architecture",
  //               "API Security: Implementing robust security measures and access control",
  //               "API Gateway: Managing API traffic, caching, and quota management",
  //               "API Analytics: Real-time monitoring and analytics for data-driven decisions",
  //               "API Monetization: Developing revenue-generating API business models"
  //             ]
  //           },
  //           {
  //             title: "API Governance",
  //             description:
  //               "API governance ensures consistent API development, deployment, and management across the organization. Effective governance enables scalability, maintainability, and compliance.",
  //             benefitsTitle: "Benefits of API Governance",
  //             benefits: [
  //               "Standardization: Consistent API design and development",
  //               "Compliance: Adherence to regulatory requirements and industry standards",
  //               "Reusability: Maximizing API reuse across business units",
  //               "Collaboration: Cross-functional teams working together on API development",
  //               "Risk Reduction: Mitigating API-related security and compliance risks"
  //             ]
  //           },
  //           {
  //             title: "Maiprosoft's API Governance Framework",
  //             benefits: [
  //               "API Policy Development: Establishing API development guidelines",
  //               "API Review & Approval: Ensuring compliance with governance policies",
  //               "API Documentation: Maintaining accurate and up-to-date API documentation",
  //               "API Testing & Validation: Ensuring API quality and reliability",
  //               "API Monitoring & Reporting: Real-time API performance monitoring"
  //             ]
  //           },
  //           {
  //             title: "Why Choose Maiprosoft's API Management & Governance?",
  //             benefits: [
  //               "Expertise: Proven track record in API management and governance",
  //               "Customization: Tailored solutions meeting specific business needs",
  //               "Support: Ongoing training, maintenance, and support",
  //               "Innovation: Continuous research and development",
  //               "Partnerships: Collaborations with leading API technology providers"
  //             ]
  //           }
  //         ]
  //       },
  //       cloud: {
  //         name: "cloud",
  //         sections: [
  //           {
  //             sectiontitle:"testing Cloud",
  //             titledescription :"Unlock API",

  //             url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
          
  //             title: "What is Cloud Computing?",

  //             description:
  //               "Cloud computing delivers computing services over the internet, including storage, databases, networking, software, and analytics. It offers flexible resources, faster innovation, and economies of scale.",
  //             benefitsTitle: "Benefits of Cloud Computing",
  //             benefits: [
  //               "Cost Savings: Reduced capital expenses and pay-as-you-go pricing",
  //               "Scalability: Easily scale resources up or down based on demand",
  //               "Reliability: High availability and disaster recovery options",
  //               "Performance: Global network of secure data centers for optimized performance",
  //               "Security: Advanced security features and compliance controls"
  //             ]
  //           },
  //           {
  //             title: "Maiprosoft's Cloud Services",
  //             benefits: [
  //               "Cloud Strategy & Planning: Developing tailored cloud adoption strategies",
  //               "Cloud Migration: Seamless migration of applications and data to the cloud",
  //               "Cloud Security: Implementing security controls and compliance measures",
  //               "Cloud Management: Efficient management of cloud resources and costs",
  //               "Hybrid Cloud Solutions: Integrating on-premises and cloud environments"
  //             ]
  //           },
  //           {
  //             title: "Cloud Governance",
  //             description:
  //               "Cloud governance provides guidelines and policies for managing cloud usage, ensuring cost control, security, and compliance across the organization.",
  //             benefitsTitle: "Benefits of Cloud Governance",
  //             benefits: [
  //               "Cost Management: Control costs and optimize cloud spending",
  //               "Compliance: Meet regulatory and industry standards",
  //               "Operational Efficiency: Streamlined cloud operations and resource management",
  //               "Security Policies: Enforce security policies across cloud environments",
  //               "Accountability: Clear roles and responsibilities for cloud management"
  //             ]
  //           },
  //           {
  //             title: "Maiprosoft's Cloud Governance Framework",
  //             benefits: [
  //               "Policy Creation: Establishing governance policies for cloud usage",
  //               "Access Control: Managing permissions and ensuring secure access",
  //               "Monitoring & Reporting: Real-time monitoring for insights and compliance",
  //               "Audit & Compliance: Ensuring adherence to standards and best practices",
  //               "Optimization: Regular evaluation to optimize performance and costs"
  //             ]
  //           },
  //           {
  //             title: "Why Choose Maiprosoft's Cloud Solutions?",
  //             benefits: [
  //               "Expertise: Skilled in various cloud platforms and architectures",
  //               "Customization: Solutions tailored to specific business needs",
  //               "Support: Comprehensive support and training",
  //               "Innovation: Leveraging the latest cloud technologies",
  //               "Partnerships: Collaborations with leading cloud providers"
  //             ]
  //           }
  //         ]
  //       }
  //     };
  // Access the relevant sections based on the contentKey
  
  const clientKey = {
    // api: {
    //   name: "api", 
    //   sections: [
    //     {
    //       sectiontitle:"testing Api",
    //       titledescription :"Unlock API",
    //       url:"https://www.epicor.com/globalassets/uploadedimages/shared/fy21/featured-image/colleagues-working-in-cafeteria-reviewing-data-web.jpg",
    //       title: "What is API Management?",
    //       description:
    //         "API management encompasses the processes, tools, and technologies used to design, implement, secure, and analyze APIs. Effective API management ensures seamless integration, scalability, and reliability.",
    //       benefitsTitle: "Benefits of API Management",
    //       benefits: [
    //         "Increased Revenue: API monetization and partner ecosystem growth",
    //         "Improved Customer Experience: Seamless integration with third-party services",
    //         "Enhanced Security: Robust API security and access control",
    //         "Faster Time-to-Market: Rapid API development and deployment",
    //         "Better Decision-Making: Real-time API analytics and insights"
    //       ]
    //     },
    //     {
    //       title: "Maiprosoft's API Management Services",
    //       benefits: [
    //         "API Strategy & Design: Crafting API roadmaps and architecture",
    //         "API Security: Implementing robust security measures and access control",
    //         "API Gateway: Managing API traffic, caching, and quota management",
    //         "API Analytics: Real-time monitoring and analytics for data-driven decisions",
    //         "API Monetization: Developing revenue-generating API business models"
    //       ]
    //     },
    //     {
    //       title: "API Governance",
    //       description:
    //         "API governance ensures consistent API development, deployment, and management across the organization. Effective governance enables scalability, maintainability, and compliance.",
    //       benefitsTitle: "Benefits of API Governance",
    //       benefits: [
    //         "Standardization: Consistent API design and development",
    //         "Compliance: Adherence to regulatory requirements and industry standards",
    //         "Reusability: Maximizing API reuse across business units",
    //         "Collaboration: Cross-functional teams working together on API development",
    //         "Risk Reduction: Mitigating API-related security and compliance risks"
    //       ]
    //     },
    //     {
    //       title: "Maiprosoft's API Governance Framework",
    //       benefits: [
    //         "API Policy Development: Establishing API development guidelines",
    //         "API Review & Approval: Ensuring compliance with governance policies",
    //         "API Documentation: Maintaining accurate and up-to-date API documentation",
    //         "API Testing & Validation: Ensuring API quality and reliability",
    //         "API Monitoring & Reporting: Real-time API performance monitoring"
    //       ]
    //     },
    //     {
    //       title: "Why Choose Maiprosoft's API Management & Governance?",
    //       benefits: [
    //         "Expertise: Proven track record in API management and governance",
    //         "Customization: Tailored solutions meeting specific business needs",
    //         "Support: Ongoing training, maintenance, and support",
    //         "Innovation: Continuous research and development",
    //         "Partnerships: Collaborations with leading API technology providers"
    //       ]
    //     }
    //   ]
    // },
    cloud: {
      name: "cloud",
      sections: [
        {
          sectiontitle:"testing Cloud",
          titledescription :"Unlock API",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
      
          title: "What is Cloud Computing?",
          description:
            "Cloud computing delivers computing services over the internet, including storage, databases, networking, software, and analytics. It offers flexible resources, faster innovation, and economies of scale.",
          benefitsTitle: "Benefits of Cloud Computing",
          benefits: [
            "Cost Savings: Reduced capital expenses and pay-as-you-go pricing",
            "Scalability: Easily scale resources up or down based on demand",
            "Reliability: High availability and disaster recovery options",
            "Performance: Global network of secure data centers for optimized performance",
            "Security: Advanced security features and compliance controls"
          ]
        },
        {
          title: "Maiprosoft's Cloud Services",
          benefits: [
            "Cloud Strategy & Planning: Developing tailored cloud adoption strategies",
            "Cloud Migration: Seamless migration of applications and data to the cloud",
            "Cloud Security: Implementing security controls and compliance measures",
            "Cloud Management: Efficient management of cloud resources and costs",
            "Hybrid Cloud Solutions: Integrating on-premises and cloud environments"
          ]
        },
        {
          title: "Cloud Governance",
          description:
            "Cloud governance provides guidelines and policies for managing cloud usage, ensuring cost control, security, and compliance across the organization.",
          benefitsTitle: "Benefits of Cloud Governance",
          benefits: [
            "Cost Management: Control costs and optimize cloud spending",
            "Compliance: Meet regulatory and industry standards",
            "Operational Efficiency: Streamlined cloud operations and resource management",
            "Security Policies: Enforce security policies across cloud environments",
            "Accountability: Clear roles and responsibilities for cloud management"
          ]
        },
        {
          title: "Maiprosoft's Cloud Governance Framework",
          benefits: [
            "Policy Creation: Establishing governance policies for cloud usage",
            "Access Control: Managing permissions and ensuring secure access",
            "Monitoring & Reporting: Real-time monitoring for insights and compliance",
            "Audit & Compliance: Ensuring adherence to standards and best practices",
            "Optimization: Regular evaluation to optimize performance and costs"
          ]
        },
        {
          title: "Why Choose Maiprosoft's Cloud Solutions?",
          benefits: [
            "Expertise: Skilled in various cloud platforms and architectures",
            "Customization: Solutions tailored to specific business needs",
            "Support: Comprehensive support and training",
            "Innovation: Leveraging the latest cloud technologies",
            "Partnerships: Collaborations with leading cloud providers"
          ]
        }
      ]
    },
    apimag: {
      name: "apimag",
      sections: [
        {
          sectiontitle:"Maiprosoft's API Management & API Governance",
          titledescription :"Unlocking Digital Transformation",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
      
          title: "What is API Management?",
          description:
            "API management encompasses the processes, tools, and technologies used to design, implement, secure, and analyze APIs. Effective API management ensures seamless integration, scalability, and reliability.",
          benefitsTitle: "Benefits of API Management",
          benefits: [
            "Increased Revenue: API monetization and partner ecosystem growth",
            " Improved Customer Experience: Seamless integration with third-party services",
            "Enhanced Security: Robust API security and access control",
            " Faster Time-to-Market: Rapid API development and deployment",
            "Better Decision-Making: Real-time API analytics and insights"
          ]
        },
        {
          title: "Maiprosoft's API Management Services",
          benefits: [
            " API Strategy & Design: Crafting API roadmaps and architecture",
            "API Security: Implementing robust security measures and access control",
            "API Gateway: Managing API traffic, caching, and quota management",
            "API Analytics: Real-time monitoring and analytics for data-driven decisions",
            "API Monetization: Developing revenue-generating API business models"
          ]
        },
        {
          title: "API Governance",
          description:
            "API governance ensures consistent API development, deployment, and management across the organization. Effective governance enables scalability, maintainability, and compliance.",
          benefitsTitle: "Benefits of API Governance",
          benefits: [
            "Standardization: Consistent API design and development",
            "Compliance: Adherence to regulatory requirements and industry standards",
            "Reusability: Maximizing API reuse across business units",
            "Collaboration: Cross-functional teams working together on API development",
            "Risk Reduction: Mitigating API-related security and compliance risks"
          ]
        },
        {
          title: "Maiprosoft's API Governance Framework",
          benefits: [
            "API Policy Development: Establishing API development guidelines",
            " API Review & Approval: Ensuring compliance with governance policies",
            " API Documentation: Maintaining accurate and up-to-date API documentation",
            "API Testing & Validation: Ensuring API quality and reliability",
            " API Monitoring & Reporting: Real-time API performance monitoring"
          ]
        },
        {
          title: "Why Choose Maiprosoft's API Management & Governance?",
        benefits: [
            "Expertise: Proven track record in API management and governance",
            "Customization: Tailored solutions meeting specific business needs",
            "Support: Ongoing training, maintenance, and support",
            " Innovation: Continuous research and development",
            "Partnerships: Collaborations with leading API technology providers"
          ]
        }
      ]
    },
    datai: {
      name: "datai",
      sections: [
        {
          sectiontitle:"Maiprosoft's Data Integration",
          titledescription :"Unlocking Insights, Empowering Business",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
      
          title: "What is Data Integration?",
          description:
            "Data integration involves combining data from multiple sources into a unified, consistent, and meaningful format. This enables organizations to gain a comprehensive understanding of their operations, customers, and market trends.",
          benefitsTitle: "Benefits of Data Integration",
          benefits: [
            "Improved Decision-Making: Accurate, real-time data for informed decisions",
            "Enhanced Customer Experience: 360-degree customer views",
            " Increased Efficiency: Streamlined data management and reduced errors",
            "Competitive Advantage: Actionable insights from integrated data",
            "Regulatory Compliance: Adherence to data governance and security standards"
          ]
        },
        {
          title: "Maiprosoft's Data Integration Services",
          benefits: [
            "Data Strategy & Architecture: Designing data integration frameworks",
            "Data Ingestion & Processing: Handling large datasets from various sources",
            "Data Transformation & Mapping: Converting data into actionable insights",
            "Data Quality & Governance: Ensuring data accuracy, security, and compliance",
            "Data Analytics & Visualization: Presenting data in intuitive, actionable formats"
          ]
        },
        {
          title: "Data Integration Methods",
          benefits: [
            "ETL (Extract, Transform, Load): Traditional data warehousing approach",
            "ELT (Extract, Load, Transform): Modern, flexible data integration",
            " Real-Time Data Integration: Streaming data for immediate insights",
            "Cloud-Based Data Integration: Scalable, secure integration in the cloud",
            "API-Based Data Integration: Connecting applications and services via APIs"
          ]
        },
        {
          title: "Data Integration Tools & Technologies",
          benefits: [
            "Informatica PowerCenter",
            "Talend Data Integration",
            " Microsoft SQL Server Integration Services (SSIS)",
            " Apache NiFi",
            "AWS Glue"
          ]
        },
        {
          title: "Industry Expertise",
          benefits: [
            "Healthcare: Integrating electronic health records, medical billing, and claims",
            " Finance: Consolidating financial data for regulatory compliance",
            "Retail: Combining customer, sales, and inventory data",
            " Manufacturing: Integrating supply chain, production, and quality control data",
            "Education: Consolidating student, academic, and administrative data"
          ]
        },
        {
          title: "Why Choose Maiprosoft's Data Integration?",
          benefits: [
            "Expertise: Proven track record in data integration and management",
            " Customization: Tailored solutions meeting specific business needs",
            " Support: Ongoing training, maintenance, and support",
            " Innovation: Continuous research and development",
            "Partnerships: Collaborations with leading data integration technology providers"
          ]
        }
      ]
    },
    ipaas: {
      name: "ipaas",
      sections: [
        {
          sectiontitle:"Unlock Seamless Integration and Digital Transformation with Maiprosoft's iPaaS Solutions",
          titledescription :"Maiprosoft revolutionizes business integration with its cutting-edge Integration Platform as a Service (iPaaS) solutions. Our expertly crafted iPaaS empowers organizations to harmonize disparate systems, applications, and data sources, fueling unparalleled digital transformation and innovation.",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
      
          title: "What is iPaaS?",
          description:
            "iPaaS is a cloud-based platform enabling organizations to integrate, automate, and optimize business processes, workflows, and data flows across multiple systems, applications, and clouds.",
          benefitsTitle: "Benefits of iPaaS",
          benefits: [
            "Improved Integration: Connect disparate systems, applications, and data sources",
            "Increased Efficiency: Automate business processes and workflows",
            "Enhanced Agility: Rapidly adapt to changing business needs",
            "Better Decision-Making: Unify data from multiple sources for real-time insights",
            "Reduced Costs: Minimize integration complexity and maintenance"
          ]
        },
        {
          title: "Maiprosoft's iPaaS Services",
          benefits: [
            "Custom Integration Development",
            " iPaaS Implementation and Deployment",
            " Integration Consulting and Advisory",
            " API Management and Security",
            " Data Integration and Analytics"
          ]
        },
        {
          title: "iPaaS Key Features",
          benefits: [
            " API Management: Design, secure, and manage APIs",
            "Data Integration: Integrate disparate data sources and formats",
            " Workflow Automation: Automate business processes and workflows",
            "Real-time Analytics: Unify data for real-time insights",
            " Cloud Connectivity: Connect multiple clouds, applications, and systems"
          ]
        },
        {
          title: "Industry Applications of iPaaS",
        benefits: [
            "Healthcare: Integrate electronic health records (EHRs) and medical devices",
            " Finance: Connect banking systems, payment gateways, and CRM",
            "Retail: Integrate e-commerce platforms, supply chain management, and customer loyalty programs",
            " Manufacturing: Connect ERP, CRM, and supply chain management systems",
            " Education: Integrate student information systems, learning management systems, and library management systems"
          ]
        },
         {
          title: "Why Choose Maiprosoft's iPaaS Solutions?",
        benefits: [
            "Expertise: Proven track record in iPaaS development and implementation",
            "Customization: Tailored solutions meeting specific business needs",
            "Support: Ongoing training, maintenance, and support",
            "Innovation: Continuous research and development",
            "Partnerships: Collaborations with industry leaders"
          ]
        }
      ]
    },

    idacc: {
      name: "idacc",
      sections: [
        {
          sectiontitle:"Maiprosoft's Identity & Access Management: Secure, Compliant, and Efficient",
          titledescription :"Maiprosoft recognizes the critical role Identity and Access Management (IAM) plays in protecting sensitive data and ensuring regulatory compliance. Our comprehensive IAM solutions empower organizations to securely manage identities, access, and privileges.",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
      
          title: "What is Identity & Access Management?",
          description:
            "Identity and Access Management involves managing and controlling user identities, authentication, authorization, and access to resources across an organization's IT infrastructure.",
          benefitsTitle: "Benefits of Identity & Access Management",
          benefits: [
            " Enhanced Security: Protection against data breaches and cyber threats",
            " Regulatory Compliance: Adherence to industry standards and regulations",
            "Improved Efficiency: Streamlined access management and reduced administrative burdens",
            " Increased Productivity: Seamless user experience and access to necessary resources",
            " Better Decision-Making: Real-time identity and access analytics and insights"
          ]
        },
        {
          title: "Maiprosoft's Identity & Access Management Services",
          benefits: [
            " Identity Governance: Managing identity lifecycle and access requests",
            " Authentication & Authorization: Secure login, SSO, and access control",
            "Access Management: Role-based access control and privilege management",
            " Identity Federation: Secure single sign-on across multiple domains",
            "Compliance & Audit: Ensuring regulatory compliance and audit readiness"
          ]
        },
        {
          title: "Identity & Access Management Solutions",
          benefits: [
            " Multi-Factor Authentication (MFA)",
            "Single Sign-On (SSO)",
            " Identity-as-a-Service (IDaaS)",
            "Role-Based Access Control (RBAC)",
            "Attribute-Based Access Control (ABAC)"
          ]
        },
        {
          title: "Industry Expertise",
          benefits: [
            "Healthcare: HIPAA-compliant IAM for healthcare organizations",
            " Finance: PCI-DSS compliant IAM for financial institutions",
            " Retail: Secure IAM for retail and e-commerce platforms",
            "Manufacturing: IAM for industrial control systems and OT environments",
            "  Education: IAM for educational institutions and research organizations"
          ]
        },
        {
          title: "Why Choose Maiprosoft's Identity & Access Management?",
        benefits: [
            "Why Choose Maiprosoft's Identity & Access Management?",
            "Customization: Tailored solutions meeting specific business needs",
            "Support: Ongoing training, maintenance, and support",
            " Innovation: Continuous research and development",
            " Partnerships: Collaborations with leading IAM technology providers"
          ]
        }
      ]
    },
apis: {
      name: "apis",
      sections: [
        {
          sectiontitle:"Maiprosoft's API Security: Protecting Your Digital Ecosystem",
          titledescription :"Maiprosoft recognizes the critical role API security plays in safeguarding sensitive data and preventing cyber threats. Our comprehensive API security solutions empower organizations to protect their digital ecosystems.",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
      
          title: "What is API Security?",
          description:
            "API security involves implementing measures to prevent unauthorized access, data breaches, and other security threats to APIs. Effective API security ensures confidentiality, integrity, and availability of data.",
          benefitsTitle: "Benefits of API Security",
          benefits: [
            "Data Protection: Preventing sensitive data exposure",
            " Regulatory Compliance: Adhering to industry standards and regulations",
            " Reputation Protection: Mitigating brand damage from security breaches",
            "Customer Trust: Ensuring secure interactions and transactions",
            "Business Continuity: Preventing downtime and revenue loss"
          ]
        },
        {
          title: "Maiprosoft's API Security Services",
          benefits: [
            " API Threat Analysis: Identifying vulnerabilities and potential threats",
            " API Gateway Security: Securing API traffic and access control",
            "OAuth and JWT Implementation: Secure authentication and authorization",
            " API Encryption: Protecting data in transit and at rest",
            "API Monitoring and Analytics: Real-time security monitoring and insights"
          ]
        },
        {
          title: "API Security Best Practices",
          benefits: [
            " Implement Rate Limiting and Quota Management",
            "Use Secure Protocols (HTTPS/TLS)",
            " Validate and Sanitize User Input",
            "Implement API Keys and Access Tokens",
            "Regularly Update and Patch APIs"
          ]
        },
        {
          title: "Common API Security Threats",
          benefits: [
            "SQL Injection and Cross-Site Scripting (XSS)",
            " Cross-Site Request Forgery (CSRF)",
            " Man-in-the-Middle (MitM) Attacks",
            " Denial of Service (DoS) and Distributed Denial of Service (DDoS)",
            " Insider Threats and Privilege Escalation"
          ]
        },
        {
          title: "Industry Expertise",
        benefits: [
            "Finance: Secure APIs for banking and financial institutions",
            "Healthcare: HIPAA-compliant APIs for healthcare organizations",
            "Retail: Secure APIs for e-commerce and retail platforms",
            " Manufacturing: Secure APIs for industrial control systems",
            " Education: Secure APIs for educational institutions"
          ]
        },
        {
          title: "Why Choose Maiprosoft's API Security?",
        benefits: [
            "Expertise: Proven track record in API security implementation",
            "Customization: Tailored solutions meeting specific business needs",
            "Support: Ongoing training, maintenance, and support",
            "Innovation: Continuous research and development",
            "Partnerships: Collaborations with leading API security technology providers"
          ]
        }
      ]
    },
itc: {
      name: "itc",
      sections: [
        {
          sectiontitle:"IT Consultancy",
          titledescription :"Maiprosoft's IT Consultancy services empower businesses to optimize their technology investments, improve efficiency, and drive innovation. Our expert consultants provide strategic guidance to align IT with business objectives.",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
      
          title: "Benefits of IT Consultancy",
          description :"Maiprosoft offers comprehensive IT consultancy services",
          benefits: [
            "  IT Strategy: Aligning IT with business objectives.",
            " Technology Roadmapping: Planning for future technology investments.",
            "  Digital Transformation: Leveraging technology for business innovation.",
            "  IT Operations Optimization: Improving efficiency and reducing costs.",
            "Cybersecurity: Protecting business assets from cyber threats."
          ]
        },
        {
          title: "Consultancy Methodology",
          titledescription :"Maiprosoft's consultancy methodology ensures effective service delivery:",
          benefits: [
            " Assessment: Comprehensive evaluation of current IT environment.",
            "Analysis: Identifying opportunities for improvement.",
            " Recommendations: Tailored solutions meeting unique business needs.",
            "Implementation: Seamless execution of recommended solutions.",
            "Ongoing Support: Continuous monitoring and optimization."
          ]
        },
        {
          title: "Expertise",
          titledescription :"Maiprosoft's consultants possess expertise in:",
          benefits: [
            " Cloud Computing: AWS, Azure, Google Cloud, IBM Cloud.",
            "Cybersecurity: Threat detection, vulnerability management, compliance.",
            "Data Analytics: Business intelligence, data science, machine learning.",
            " Digital Transformation: AI, blockchain, IoT, mobile apps.",
            " IT Service Management: ITIL, service desk, incident management."
          ]
        },
        {
          title: "Industries We Serve",
          titledescription :"Maiprosoft's IT consultancy services cater to various industries:",
          benefits: [
            "Finance and Banking",
            " Healthcare and Life Sciences",
            " Retail and E-commerce",
            " Manufacturing and Logistics",
            " Government and Public Sector"
          ]
        },
        {
          title: "Why Choose Maiprosoft for IT Consultancy?",
        benefits: [
            "Proven Expertise: Experienced consultants with specialized skills.",
            "Customized Solutions: Tailored advice meeting unique business needs.",
            "Independent Guidance: Unbiased recommendations.",
            "Cost-Effective: Optimized IT investments.",
            "Ongoing Support: Continuous monitoring and optimization."
          ]
        }
      ]
    },
    appd: {
      name: "appd",
      sections: [
        {
          sectiontitle:"Application Development",
          titledescription :"Maiprosoft's Application Development services empower businesses to innovate, automate, and optimize their operations through custom-built software solutions. Our expert team crafts applications that drive efficiency, enhance user experience, and foster growth.",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
          benefitsTitle: "Benefits of Custom Application Development",
          benefits: [
            "Improved Efficiency: Streamline processes and reduce manual errors.",
            "Enhanced User Experience: Intuitive interfaces and seamless interactions.",
            "Competitive Advantage: Differentiate your business with unique software solutions.",
            "Scalability: Adapt to changing business needs with flexible architecture.",
            "Cost Savings: Reduce maintenance and support costs with custom solutions."
          ]
        },
        {
          title: "Application Development Services",
          titledescription :"Maiprosoft offers comprehensive application development services:",
          benefits: [
            "Custom Software Development: Tailored solutions meeting unique business needs.",
            "Mobile App Development: Native and cross-platform apps for iOS and Android.",
            "Web Application Development: Responsive web apps for desktop and mobile.",
            "Cloud Application Development: Scalable cloud-based solutions.",
            "Legacy System Modernization: Upgrading outdated systems for improved efficiency."
          ]
        },
        {
          title: "Development Methodology",
          titledescription :"Maiprosoft's development methodology ensures effective service delivery:",
          benefits: [
            "Requirements Gathering: Understanding business needs and goals.",
            "Design: Crafting intuitive user interfaces and experiences.",
            " Development: Building robust, scalable, and secure applications.",
            "Testing: Ensuring quality and reliability through rigorous testing.",
            "Deployment: Seamless deployment and integration."
          ]
        },
        {
          title: "Technologies We Use",
          titledescription :"Maiprosoft's experts proficiently utilize:",
          benefits: [
            "Programming Languages: Java, Python, .NET, JavaScript.",
            "Frameworks: Spring, Django, React, Angular.",
            " Databases: MySQL, MongoDB, PostgreSQL.",
            " Cloud Platforms: AWS, Azure, Google Cloud.",
            "Agile Methodologies: Scrum, Kanban."
          ]
        },
        {
          title: "Industries We Serve",
          titledescription :"Maiprosoft's application development services cater to various industries:",
          benefits: [
            " Finance and Banking",
            " Healthcare and Life Sciences",
            "Retail and E-commerce",
            "Manufacturing and Logistics",
            "Government and Public Sector"
          ]
        },
         {
          title: "Why Choose Maiprosoft for Application Development?",
          benefits: [
            " Proven Expertise: Experienced team with specialized skills.",
            " Customized Solutions: Tailored applications meeting unique business needs.",
            "Agile Development: Rapid iteration and adaptation.",
            "Cost-Effective: Reduced development and maintenance costs.",
            "Ongoing Support: Continuous monitoring and optimization."
          ]
        },
      ]
    },
digm: {
      name: "digm",
      sections: [
        {
          sectiontitle:"Digital Marketing",
          titledescription :"Maiprosoft's Digital Marketing services empower businesses to thrive in the online landscape, driving brand awareness, lead generation, and conversion. Our expert team crafts tailored strategies to reach, engage, and retain target audiences.",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
          benefitsTitle: "Benefits of Digital Marketing",
          benefits: [
            "Increased Visibility: Expand brand reach and online presence.",
            "Targeted Advertising: Reach specific audiences with precision.",
            "Improved Engagement: Foster meaningful customer interactions.",
            " Enhanced Conversion: Drive website traffic and sales.",
            "Measurable ROI: Track and optimize digital marketing efforts."
          ]
        },
        {
          title: "Digital Marketing Services",
          titledescription :"Maiprosoft offers comprehensive digital marketing services:",
          benefits: [
            "Search Engine Optimization (SEO): Improve website rankings and visibility.",
            "Pay-Per-Click (PPC) Advertising: Targeted ads for immediate results.",
            "Social Media Marketing: Engage with audiences on Facebook, Twitter, LinkedIn.",
            "Content Marketing: Compelling content for brand storytelling.",
            "Email Marketing: Nurture leads and drive conversions.",
            "Influencer Marketing: Partner with influencers for expanded reach.",
            "Analytics and Reporting: Data-driven insights for optimization."
          ]
        },
        {
          title: "Digital Marketing Strategy",
          titledescription :"Maiprosoft's digital marketing strategy involves:",
          benefits: [
            "Goal Setting: Aligning digital marketing with business objectives.",
            "Audience Analysis: Understanding target audience behavior.",
            "Channel Selection: Choosing effective digital channels.",
            "Content Creation: Crafting compelling, relevant content.",
            "Campaign Execution: Launching and managing digital campaigns.",
            "Performance Monitoring: Tracking and optimizing results."
          ]
        },
        {
          title: "Digital Marketing Tools",
          titledescription :"Maiprosoft's experts utilize industry-leading tools:",
          benefits: [
            "Google Analytics",
            "Adobe Marketing Cloud",
            " HubSpot",
            "  Hootsuite",
            "Mailchimp"
          ]
        },
        {
          title: "Industries We Serve",
          titledescription :"Maiprosoft's digital marketing services cater to various industries:",
          benefits: [
            " Finance and Banking",
            " Healthcare and Life Sciences",
            "Retail and E-commerce",
            "Manufacturing and Logistics",
            "Government and Public Sector"
          ]
        },
         {
          title: "Why Choose Maiprosoft for Digital Marketing?",
          benefits: [
            " Proven Expertise: Experienced team with specialized skills.",
            " Customized Strategies: Tailored approaches meeting unique business needs.",
            "Data-Driven Insights: Actionable analytics for optimization.",
            "Cost-Effective: Maximized ROI through efficient campaigns.",
            "Ongoing Support: Continuous monitoring and improvement."
          ]
        },
      ]
    },
  mangs: {
      name: "mangs",
      sections: [
        {
          sectiontitle:"Managed Services",
          titledescription :"Maiprosoft's Managed Services empower businesses to optimize IT operations, reduce costs, and focus on strategic growth. Our comprehensive managed services portfolio ensures proactive monitoring, efficient issue resolution, and continuous improvement.",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
          benefitsTitle: "Benefits of Managed Services",
          benefits: [
            "Improved Efficiency: Streamline IT operations and reduce downtime.",
            "Cost Savings: Predictable expenses and reduced capital expenditures.",
            " Enhanced Security: Proactive threat detection and vulnerability management.",
            " Increased Agility: Faster response to changing business needs.",
            " Expertise: Access to specialized skills and knowledge."
          ]
        },
        {
          title: "Managed Services Portfolio",
          titledescription :"Maiprosoft offers a range of managed services:",
          benefits: [
            "Managed IT Services: Comprehensive IT management, including monitoring, maintenance, and support.",
            "Cloud Managed Services: Expert management of cloud infrastructure, applications, and security.",
            "Cybersecurity Managed Services: Proactive threat detection, vulnerability management, and incident response.",
            "Network Managed Services: Optimized network performance, security, and reliability.",
            " Application Managed Services: Expert management of custom applications, including development, testing, and deployment."
          ]
        },
        {
          title: "Service Delivery Model",
          titledescription :"Maiprosoft's managed services follow a structured delivery model:",
          benefits: [
            " Assessment: Comprehensive evaluation of current IT environment.",
            "Strategy: Customized service plan aligned with business objectives.",
            " Implementation: Seamless transition to managed services.",
            "Ongoing Management: Proactive monitoring, maintenance, and support.",
            "Continuous Improvement: Regular service reviews and optimization."
          ]
        },
        {
          title: "Managed Services Methodology",
          titledescription :"Maiprosoft's methodology ensures efficient service delivery:",
          benefits: [
            "ITIL-aligned: Adherence to ITIL best practices.",
            "Agile: Flexible and responsive to changing business needs.",
            "Proactive: Anticipatory approach to issue resolution.",
            " Collaborative: Close partnership with clients and stakeholders."
          ]
        },
        {
          title: "Industries We Serve",
          titledescription :"Maiprosoft's managed services cater to various industries:",
          benefits: [
            " Finance and Banking",
            " Healthcare and Life Sciences",
            "Retail and E-commerce",
            "Manufacturing and Logistics",
            "Government and Public Sector"
          ]
        },
         {
          title: "Why Choose Maiprosoft for Managed Services?",
          benefits: [
            " Proven Expertise: Experienced team with specialized skills.",
            " Customized Solutions: Tailored services meeting unique business needs.",
            "Cost-Effective: Predictable expenses and reduced capital expenditures.",
            "Responsive Support: Rapid issue resolution and proactive monitoring.",
            "Strategic Partnership: Collaborative approach to drive business growth."
          ]
        },
      ]
    },
cms: {
      name: "cms",
      sections: [
        {
          sectiontitle:"Cloud Migration Services",
          titledescription :"Maiprosoft's Cloud Migration Services empower businesses to seamlessly transition their IT infrastructure, applications, and data to the cloud, unlocking scalability, flexibility, and cost savings.",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
          benefitsTitle: "Benefits of Cloud Migration",
          benefits: [
            " Improved Scalability: Scale up or down to meet changing business needs.",
            " Enhanced Flexibility: Access applications and data from anywhere, on any device.",
            "  Reduced Costs: Lower capital expenditures and operational expenses.",
            " Increased Agility: Faster deployment and iteration for rapid innovation.",
            "Enhanced Security: Advanced security features and compliance."
          ]
        },
        {
          title: "Cloud Migration Services",
          titledescription :"Maiprosoft offers comprehensive cloud migration services:",
          benefits: [
            "Assessment: Thorough evaluation of current infrastructure and applications.",
            " Strategy: Customized cloud migration plan aligned with business objectives.",
            "Migration: Seamless transition to cloud infrastructure, applications, and data.",
            "Optimization: Continuous monitoring and optimization for peak performance."
          ]
        },
        {
          title: "Cloud Migration Models",
          titledescription :"Maiprosoft supports various cloud migration models:",
          benefits: [
            " Lift and Shift: Simple migration with minimal changes.",
            "Re-architecture: Optimized migration for cloud-native applications.",
            "Hybrid: Integrated on-premises and cloud infrastructure."
          ]
        },
        {
          title: "Cloud Platforms",
          titledescription :"Maiprosoft has expertise in leading cloud platforms:",
          benefits: [
            "Amazon Web Services (AWS)",
            "Microsoft Azure",
            "Google Cloud Platform (GCP)",
            " IBM Cloud",
            "Oracle Cloud"
          ]
        },
        {
          title: "Industries We Serve",
          titledescription :"Maiprosoft's managed services cater to various industries:",
          benefits: [
            " Finance and Banking",
            " Healthcare and Life Sciences",
            "Retail and E-commerce",
            "Manufacturing and Logistics",
            "Government and Public Sector"
          ]
        },
         {
          title: "Why Choose Maiprosoft for Cloud Migration?",
          benefits: [
            " Proven Expertise: Experienced team with specialized cloud skills.",
            " Customized Solutions: Tailored migration plans meeting unique business needs.",
            " Risk-Free Migration: Minimal downtime and disruption.",
            "Cost-Effective: Optimized cloud resource utilization.",
            "Ongoing Support: Continuous monitoring and optimization."
          ]
        },
      ]
    },
crm: {
      name: "crm",
      sections: [
        {
          sectiontitle:"eXert CRM - Customer Relationship Management",
          titledescription :"eXert CRM is a cutting-edge customer relationship management tool designed to empower businesses with accurate, reliable, and efficient solutions. Our comprehensive CRM system seamlessly integrates planning, sales, and support functions to help you effectively target and engage with your audience, gain valuable insights into your business's performance, and drive success.",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
          benefitsTitle: "With eXert CRM, you can",
          benefits: [
            " Streamline lead generation, follow-up, and conversion",
            "  Enhance sales funnel management and forecasting",
            " Improve customer understanding and segmentation",
            " Deliver personalized customer experiences",
            "Make data-driven decisions with real-time analytics"
          ]
        },
        {
          title: "eXert CRM solution offers a range of features, including:",
          benefits: [
            "Automated Marketing - Streamline customer engagement with automated marketing, boosting efficiency and driving personalized experiences at scale effortlessly. ",
            "Lead Management - Efficiently capture, track, and nurture leads through a streamlined process, converting prospects into loyal customers.",
            "Deal Management - Seamlessly manage sales pipelines, track deals, and close more wins with precision and strategic insights.",
            "Project Preparation - Thoroughly plan and prepare projects with clear objectives, timelines, and resources for successful execution.",
            "Automated Customer - Deliver personalized experiences with automated customer journeys, driving loyalty and retention through timely engagements.",
            "Sales Quotation Preparation - Swiftly generate accurate sales quotes with automated tools, streamlining the sales process and closing deals faster.",
            "Purchase Order Preparation - Efficiently create and manage purchase orders with automated workflows, ensuring timely and cost-effective procurement processes.",
            "Sales Order Preparation - Streamline sales order processing with automation, ensuring accurate and rapid fulfillment of customer orders efficiently.",
            "Dynamic Reports- Generate insightful dynamic reports with real-time data, driving informed decisions and business growth effectively instantly."
          ]
        }, 
      ]
    },

fas: {
      name: "fas",
      sections: [
        {
          sectiontitle:"eXert FAS - Financial Accounting System",
          titledescription :"eXert FAS is designed to help organizations efficiently plan, direct, and manage their financial activities. Our comprehensive solution empowers you to make informed decisions, optimize financial performance, and drive business growth.",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
          benefitsTitle: "With eXert FAS, you can",
          benefits: [
            " Manage financial transactions and accounts with ease",
            " Automate financial processes and reduce errors",
            " Make informed decisions with real-time financial insights",
            "  Ensure compliance with accounting standards and regulations",
            "Streamline financial operations and reduce costs",
            "Generate accurate and timely financial reports"
          ]
        },
        {
          title: "eXert FAS, provides comprehensive financial management solutions",
          benefits: [
            " General Ledger Management - Efficiently manage general ledger accounts, automate journal entries, and ensure accurate financial reporting with real-time visibility.",
            "Accounts Payable and Receivable- Enhance supplier relationships, reduce payment errors, and accelerate receivables with automated workflows and real-time tracking.",
            "Asset Management- Efficiently track and manage assets, monitor depreciation, and schedule maintenance to maximize ROI and minimize downtime.",
            "Budgeting and Forecasting - Create accurate budgets and forecasts, identify trends, and make informed decisions with real-time financial data and intuitive analytics tools.",
            "Financial transparency and accountability - Ensure financial transparency and accountability with real-time visibility, audit trails, and compliance reporting for informed decision-making.",
            "Enhance financial performance and profitability - Boost financial performance and profitability with data-driven insights and strategic decision-making.",
            "Reduce financial risks and errors - Minimize financial risks and errors with automated controls, real-time monitoring, and predictive analytics.",
            "Increase efficiency and productivity - Streamline processes, automate tasks, and boost efficiency with intuitive tools and real-time insights.",
            "Financial Reporting and Analytics - Gain actionable insights with real-time financial reporting, analytics, and visualizations to inform strategic decisions."
          ]
        }, 
      ]
    },
ams: {
      name: "ams",
      sections: [
        {
          sectiontitle:"eXert AMS - Asset Management System ",
          titledescription :"eXert AMS is a comprehensive Asset Management System that empowers organizations to efficiently monitor and maintain their valuable assets, including tangible assets such as buildings, machinery, and property. Our systematic approach enables organizations to optimize asset performance, reduce costs, and improve decision-making.",
          url:"https://assets.epicor.com/m/6ec5e832c390ff57/web_size_crop_JPG-Cardboard-boxes-BA.jpg",
          benefitsTitle: "With eXert AMS, you can",
          benefits: [
            " Tracks Asset Management",
            "Industry Standard Depreciation Posting",
            "Complete control over the Asset Management process",
            "Monitor asset location, status, and condition",
            "Manage inventory, warranties, and contracts",
            "Optimize asset utilization and allocation"
          ]
        },
        {
          title: "eXert AMS offers a range of features",
          benefits: [
            "Asset Inventory - A detailed list of all assets, including descriptions, locations, conditions, and other relevant data.",
            "Maintenance Management - Scheduling and tracking maintenance activities to ensure assets are operating efficiently and reliably.",
            "Lifecycle Management -  Monitoring the entire lifecycle of an asset from acquisition to disposal, including depreciation and replacement planning.",
            "Financial Management - Tracking the financial performance and cost of assets, including budgeting and forecasting.",
            "Compliance and Risk Management - Ensuring assets comply with regulatory requirements and managing risks associated with asset operation.",
            "Reporting and Analytics - Providing insights through data analysis and generating reports for decision-making.",
            "Improved Efficiency- Streamlined processes and better resource management lead to increased operational efficiency.",
            "Cost Savings - Effective maintenance and lifecycle management can reduce costs associated with repairs and replacements.",
            "Risk Management - Identifying and mitigating risks related to asset failure or non-compliance with regulations."
          ]
        }, 
      ]
    },



  };
  const sections = clientKey[contentKey]?.sections || [];
  console.log("sections", sections);


  return (
<>      <Breadcrumb
        pageName="Details Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
     /> 
    <section>
    {/* <div className="overflow-x-hidden pb-[90px] pt-[61px]">  with bredcumb*/}

    <div className="overflow-x-hidden pb-[90px] ">
      {/* Full-width Header Section with bg-mai */}
      <div className="bg-mai w-full">
        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10 lg:py-20 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Column */}
          <div className="lg:pr-8">
            <h1 className="text-5xl font-extrabold text-white mb-4">
               {/* {contentKey === 'erpSolutions' ? 'ERP Solutions' : 'API Management & API Governance'} */}
               {/* Maiprosofts   */}
               {sections[0]?.sectiontitle}

            </h1>
            <p className="text-lg text-white leading-relaxed">Unlocking {sections[0]?.titledescription} Transformation</p>
            <p className="mt-6 text-white">
              {/* Maiprosoft recognizes the critical role APIs play in powering digital ecosystems. Our comprehensive API management and governance solutions empower businesses to securely expose, manage, and monetize their APIs. */}
              <strong>{sections[0]?.sectiontitle}</strong>
            </p>
            <div className='mt-5'>
              <button
                onClick={() => setIsModalOpen(true)}
                className="relative overflow-hidden text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 shadow-lg border border-gray-50"
                style={{
                  background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
                  boxShadow: "0 4px 15px rgba(255, 126, 95, 0.6), 0 4px 20px rgba(254, 180, 123, 0.4)"
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-300 opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-full"></span>
                Request a Consultation
              </button>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
          </div>

          {/* Image Column */}
          <div className="flex justify-center w-full">
            <Image
              
              // src="https://www.epicor.com/globalassets/uploadedimages/shared/fy21/featured-image/colleagues-working-in-cafeteria-reviewing-data-web.jpg"
              src={sections[0]?.url} // Use the URL from the new section

              alt="Colleagues Working"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Sections Render */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
    {sections.map((section, index) => (
      <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl font-extrabold text-gray-900">{section.title}</h2>
        {section.description && <p className="mt-4 text-lg text-gray-700 leading-relaxed">{section.description}</p>}
        
        {section.benefits && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.benefitsTitle || "Benefits"}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {section.benefits.map((benefit, idx) => (
                <li key={idx} className="text-base leading-relaxed">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </div>

  {/* Call to Action */}
  <div className="text-center mt-16 bg-gradient-to-r from-mai  to-blue rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105">
  {/* <div className="text-center mt-16 animated-gradient rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105"> */}

    <a
      href="#"
      className="inline-block px-12 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-700 hover:bg-blue-900 transition-colors duration-300"
    >
      Get Started with {sections[0]?.sectiontitle}
    </a>
    <div className="mt-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="border border-gray-50 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Request a Consultation
      </button>
    </div>
  </div>
</div>


    </div>
    </section>
    </> 
  );
};

export default DetailPage;
