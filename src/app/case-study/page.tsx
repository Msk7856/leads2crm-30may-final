'use client'
import React, { useState } from 'react';

interface CaseStudy {
    title: string;
    summary: string;
    industry: string;
    goal: string;
    clientChallenge: string;
    solution: string[];
    techStack: string;
    impact: string;
    bestPractices: string[];
}

const caseStudies: CaseStudy[] = [
    {
        title: "Real Estate Project Management Web Portal",
        summary: "Centralize tracking of multiple projects, units, and buyers in one dashboard.",
        industry: "Real Estate",
        goal: "Track multiple projects, units, and buyers in one dashboard",
        clientChallenge: "Projects were tracked via Excel; buyers and payments were manually handled",
        solution: [
            "Developed a secure portal with login for agents, project managers, and clients",
            "Synced Zoho CRM to track buyers and their payment milestones",
            "Admin dashboard to manage Building → Units → Clients → Payments"
        ],
        techStack: "React.js, Node.js, Zoho CRM, Zoho Books",
        impact: "70% improved visibility into project statuses and payment follow-ups",
        bestPractices: [
            "Modular project hierarchy: Project → Building → Unit → Buyer",
            "Role-based dashboards for Sales, Admin, and Finance",
            "CRM blueprint for booking → payment → handover"
        ]
    },
    {
        title: "Real Estate Buyer App with Document Tracking",
        summary: "Empower buyers to view booking status, EMI schedule, and upload documents in-app.",
        industry: "Real Estate / Property Sales",
        goal: "Allow buyers to view booking status, EMI schedule, and upload documents",
        clientChallenge: "Buyers kept calling to check status; paperwork was disorganized",
        solution: [
            "Built a buyer-facing mobile app with secure login",
            "App displays real-time status updates fetched from Zoho CRM",
            "Document upload flow connected with Zoho WorkDrive"
        ],
        techStack: "Flutter, Firebase, Zoho CRM, Zoho WorkDrive",
        impact: "90% fewer customer support calls, increased buyer satisfaction",
        bestPractices: [
            "Push notifications for status updates and payment reminders",
            "API integration with CRM stages and document folders",
            "PDF auto-generation for receipts and agreements"
        ]
    },
    {
        title: "Car Service Company App (B2C)",
        summary: "Let customers book, track, and review services via mobile.",
        industry: "Automotive",
        goal: "Let customers book, track, and review services via mobile",
        clientChallenge: "Manual service booking and tracking, no mobile app",
        solution: [
            "Flutter app (iOS & Android) with bilingual UI (Arabic + English)",
            "Integrated Zoho CRM for service history, reminders",
            "WhatsApp API for service updates"
        ],
        techStack: "Flutter, Node.js, MongoDB, Zoho CRM, Twilio",
        impact: "60% retention rate, 2x bookings from app",
        bestPractices: [
            "Microservice backend, role-based access, offline caching"
        ]
    },
    {
        title: "E-commerce App for Branded Wearables",
        summary: "Mobile shop for buying/selling second-hand branded items.",
        industry: "Fashion",
        goal: "Mobile shop for buying/selling second-hand branded items",
        clientChallenge: "Lack of mobile platform for second-hand branded items",
        solution: [
            "React Native app with login, categories, payments",
            "Admin dashboard linked to Zoho CRM for leads and orders"
        ],
        techStack: "React Native, Firebase, Razorpay, Zoho CRM",
        impact: "Reduced CAC by 40%, 4.8★ avg. rating",
        bestPractices: [
            "Clean UI, fraud prevention filter, fast-loading product pages"
        ]
    },
    {
        title: "Real Estate Booking App",
        summary: "Allow users to browse properties, book visits, talk to agents.",
        industry: "Real Estate",
        goal: "Allow users to browse properties, book visits, talk to agents",
        clientChallenge: "Manual property visit booking and lead assignment",
        solution: [
            "App with real-time calendar for bookings",
            "Integrated with Zoho CRM to assign leads"
        ],
        techStack: "Flutter, Firebase Auth, Zoho CRM, Google Maps",
        impact: "3x more property visit bookings",
        bestPractices: [
            "Location-based listings, CRM assignment rules, smart notifications"
        ]
    },
    {
        title: "Gym & Fitness Center App",
        summary: "Class booking, trainer chat, and payments.",
        industry: "Health & Fitness",
        goal: "Class booking, trainer chat, and payments",
        clientChallenge: "Manual class booking and payment tracking",
        solution: [
            "App with login, plan selection, payments",
            "Integrated with Zoho CRM + Creator for member tracking"
        ],
        techStack: "React Native, Stripe, Zoho Creator",
        impact: "5x faster class bookings",
        bestPractices: [
            "Membership tier logic, attendance tracking"
        ]
    },
    {
        title: "Clinic App for Patient Management",
        summary: "Patients book appointments and track reports.",
        industry: "Healthcare",
        goal: "Patients book appointments and track reports",
        clientChallenge: "High no-show rates and manual patient tracking",
        solution: [
            "HIPAA-ready app with secure login",
            "Connected to Zoho CRM for patient lifecycle"
        ],
        techStack: "Flutter, Firebase, Zoho CRM",
        impact: "45% decrease in no-shows",
        bestPractices: [
            "Role-based access, SSL & encryption, reminder automation"
        ]
    },
    {
        title: "Online Education App",
        summary: "Students access videos, assignments, live classes.",
        industry: "EdTech",
        goal: "Students access videos, assignments, live classes",
        clientChallenge: "Low trial-to-paid conversion rates",
        solution: [
            "Student login, dashboard with progress",
            "CRM tracks leads, trial periods, drop-off"
        ],
        techStack: "React Native, Firebase, Zoho CRM",
        impact: "3x trial-to-paid conversion",
        bestPractices: [
            "Lesson unlocking system, email triggers via Zoho Campaigns"
        ]
    },
    {
        title: "Home Services On-Demand App (Uber-style)",
        summary: "Book plumber/electrician/cleaner.",
        industry: "Local Services",
        goal: "Book plumber/electrician/cleaner",
        clientChallenge: "No real-time availability and booking system",
        solution: [
            "Search-based app with real-time availability",
            "Zoho CRM integration for job requests"
        ],
        techStack: "Flutter, Node.js, Firebase, Zoho CRM",
        impact: "2x monthly job requests",
        bestPractices: [
            "Live location, dynamic pricing, service rating"
        ]
    },
    {
        title: "Sales Team Field App",
        summary: "Salespeople log visits and capture leads offline.",
        industry: "B2B/Enterprise",
        goal: "Salespeople log visits and capture leads offline",
        clientChallenge: "No offline lead capture and visit logging",
        solution: [
            "App with offline sync",
            "Connected to Zoho CRM with deal creation"
        ],
        techStack: "React Native, SQLite, Zoho CRM",
        impact: "100% visit tracking, 40% faster reporting",
        bestPractices: [
            "Geo-tagging, calendar sync, approval logic"
        ]
    },
    {
        title: "Leads2CRM.com (Your own website)",
        summary: "Generate leads, showcase projects, allow CRM consultation booking.",
        industry: "Software Services",
        goal: "Generate leads, showcase projects, allow CRM consultation booking",
        clientChallenge: "Need for lead generation and project showcase",
        solution: [
            "React website with booking form integrated with Zoho CRM",
            "Blog + Case Study CMS for SEO"
        ],
        techStack: "React.js, Firebase Hosting, Zoho CRM, Calendly",
        impact: "5x lead increase within 2 months",
        bestPractices: [
            "Fast load speed, CTA buttons, structured schema markup"
        ]
    },
    {
        title: "Real Estate Agent Portal",
        summary: "Agents login, view leads, upload properties.",
        industry: "Real Estate",
        goal: "Agents login, view leads, upload properties",
        clientChallenge: "Manual lead assignment and property uploads",
        solution: [
            "Agent login + dashboard with stats",
            "Zoho CRM 2-way sync"
        ],
        techStack: "Next.js, MongoDB, Zoho CRM API",
        impact: "30% faster lead-to-property assignment",
        bestPractices: [
            "Dashboard analytics, secure login, form validation"
        ]
    },
    {
        title: "Educational Institute Portal",
        summary: "Let students register, track admission, and pay fees.",
        industry: "Education",
        goal: "Let students register, track admission, and pay fees",
        clientChallenge: "Manual admission tracking and fee payment",
        solution: [
            "Form submission → CRM + Books integration",
            "Auto email based on stage"
        ],
        techStack: "Laravel, MySQL, Zoho CRM + Zoho Books",
        impact: "3x increase in online admissions",
        bestPractices: [
            "Multi-step forms, email sequences, payment tracking"
        ]
    },
    {
        title: "Car Service Booking Website",
        summary: "Customer books service + gets WhatsApp/SMS updates.",
        industry: "Automotive",
        goal: "Customer books service + gets WhatsApp/SMS updates",
        clientChallenge: "Manual booking and update system",
        solution: [
            "Booking form with VIN + mobile",
            "Connected to Zoho CRM & WhatsApp"
        ],
        techStack: "Next.js, Node.js, Twilio API, Zoho CRM",
        impact: "80% digital booking adoption",
        bestPractices: [
            "VIN check, responsive design, Arabic-English support"
        ]
    },
    {
        title: "B2B Wholesale Ordering Portal",
        summary: "Clients login and place recurring orders.",
        industry: "Manufacturing",
        goal: "Clients login and place recurring orders",
        clientChallenge: "Manual order processing and inventory sync",
        solution: [
            "Custom login system with user roles",
            "Orders sync to Zoho CRM and Inventory"
        ],
        techStack: "PHP, MySQL, Zoho Inventory API",
        impact: "60% drop in manual errors",
        bestPractices: [
            "PDF invoice auto-generation, stock sync, password reset"
        ]
    },
    {
        title: "Clinic Website with Dashboard",
        summary: "Patients view appointment history and reports.",
        industry: "Healthcare",
        goal: "Patients view appointment history and reports",
        clientChallenge: "Manual patient record management",
        solution: [
            "Patient login to view past visits, download reports",
            "Admin uses CRM to manage patients"
        ],
        techStack: "React, Firebase Auth, Zoho CRM",
        impact: "Increased returning patients by 55%",
        bestPractices: [
            "JWT security, custom dashboard, encryption"
        ]
    },
    {
        title: "Logistics Company Website + Client Dashboard",
        summary: "Clients view delivery status, invoices.",
        industry: "Logistics",
        goal: "Clients view delivery status, invoices",
        clientChallenge: "High volume of status inquiry calls",
        solution: [
            "CRM push-pull with live shipment status",
            "Client login dashboard"
        ],
        techStack: "Vue.js, Node.js, Zoho CRM, Zoho Books",
        impact: "99% reduction in status inquiry calls",
        bestPractices: [
            "Tracking number integration, PDF download, contact support"
        ]
    }
];


const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="border border-blue-900 rounded-lg p-6 mb-5 shadow-md bg-blue-50 max-w-3xl w-full">
            <h3 className="text-blue-900 text-xl font-bold mb-2">{caseStudy.title}</h3>
            <p className="font-semibold mb-3 text-base">{caseStudy.summary}</p>

            {expanded && (
                <div className="mt-4 text-gray-800 text-base">
                    <p><strong>Industry:</strong> {caseStudy.industry}</p>
                    <p><strong>Goal:</strong> {caseStudy.goal}</p>
                    <p><strong>Client Challenge:</strong> {caseStudy.clientChallenge}</p>
                    <p><strong>Solution:</strong></p>
                    <ul className="list-disc list-inside mb-2">
                        {caseStudy.solution.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                    <p><strong>Tech Stack:</strong> {caseStudy.techStack}</p>
                    <p><strong>Impact:</strong> {caseStudy.impact}</p>
                    <p><strong>Best Practices:</strong></p>
                    <ul className="list-disc list-inside">
                        {caseStudy.bestPractices.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                </div>
            )}

            <button
                onClick={() => setExpanded(!expanded)}
                className={`px-6 py-2 font-bold mt-4 text-white transition-colors duration-300 ${expanded ? 'bg-gradient-to-r from-mai to-mai' : 'bg-gradient-to-r from-mai  to-mai'}`}
            >
                {expanded ? 'See Less' : 'See More'}
            </button>

        </div>
    );
};

const CaseStudies: React.FC = () => {
    return (
        <div className="p-5 flex flex-wrap justify-center gap-5 mt-20 max-w-6xl mx-auto ">
            {caseStudies.map((cs, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3">
                    <CaseStudyCard caseStudy={cs} />
                </div>
            ))}
        </div>

    );
};

export default CaseStudies;
