// components/CareerOpenings.tsx
import { BriefcaseIcon, MapPinIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

const jobs = [
    {
        title: "Zoho CRM Business Development Consultant",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <path d="M16 21v-2m0-8v2m-6 6h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm0 0v2a4 4 0 0 0 8 0v-2" />
                </svg>
            </span>
        ),
        location: "Kolkata",
        type: "Full Time",
        vacancies: 2,
        experience: "3 - 7 Years Experience",
        description:
            "We are seeking a skilled Zoho CRM Business Development Consultant to join the Business Solutions Division at Lead2CRM. This division specializes in empowering customers through business process automation solutions designed...",
        color: "bg-[#eaf2f8]",
        btn: "border-[#222] text-[#222] hover:bg-[#eaf2f8]",
    },
    {
        title: "Zoho CRM Implementation Consultant",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <circle cx="16" cy="16" r="12" />
                    <path d="M12 16h8M16 12v8" />
                </svg>
            </span>
        ),
        location: "Kolkata",
        type: "Full Time",
        vacancies: 2,
        experience: "2 - 5 Years Experience",
        description:
            "We are looking for the right candidate for the position of Zoho CRM Implementation Consultant for the business solutions division at Lead2CRM. The business solutions division is responsible for helping...",
        color: "bg-[#fff8e1]",
        btn: "border-[#222] text-[#222] hover:bg-[#fff8e1]",
    },
    {
        title: "Zoho CRM Sales Executive",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <path d="M12 12h8v8h-8z" />
                </svg>
            </span>
        ),
        location: "Mumbai",
        type: "Full Time",
        vacancies: 3,
        experience: "1 - 3 Years Experience",
        description:
            "We are looking for a motivated Zoho CRM Sales Executive to join our sales team in Mumbai. The candidate will be responsible for driving sales and building customer relationships.",
        color: "bg-[#e0f7fa]",
        btn: "border-[#222] text-[#222] hover:bg-[#e0f7fa]",
    },
    {
        title: "Zoho CRM Technical Support Engineer",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <circle cx="16" cy="16" r="12" />
                    <path d="M14 14h4v4h-4z" />
                </svg>
            </span>
        ),
        location: "Bangalore",
        type: "Full Time",
        vacancies: 1,
        experience: "2 - 4 Years Experience",
        description:
            "Seeking a Zoho CRM Technical Support Engineer to provide technical assistance and support to our clients in Bangalore.",
        color: "bg-[#f3e5f5]",
        btn: "border-[#222] text-[#222] hover:bg-[#f3e5f5]",
    },
    {
        title: "Zoho CRM Marketing Specialist",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <path d="M12 16h8M16 12v8" />
                </svg>
            </span>
        ),
        location: "Hyderabad",
        type: "Full Time",
        vacancies: 2,
        experience: "3 - 6 Years Experience",
        description:
            "Looking for a Zoho CRM Marketing Specialist to develop and execute marketing strategies in Hyderabad.",
        color: "bg-[#fff3e0]",
        btn: "border-[#222] text-[#222] hover:bg-[#fff3e0]",
    },
    {
        title: "Zoho CRM Data Analyst",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <circle cx="16" cy="16" r="12" />
                    <path d="M12 12h8v8h-8z" />
                </svg>
            </span>
        ),
        location: "Pune",
        type: "Full Time",
        vacancies: 1,
        experience: "2 - 5 Years Experience",
        description:
            "Seeking a Zoho CRM Data Analyst to analyze customer data and provide insights in Pune.",
        color: "bg-[#e8f5e9]",
        btn: "border-[#222] text-[#222] hover:bg-[#e8f5e9]",
    },
    {
        title: "Zoho CRM Product Manager",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <path d="M12 12h8v8h-8z" />
                </svg>
            </span>
        ),
        location: "Chennai",
        type: "Full Time",
        vacancies: 1,
        experience: "5 - 8 Years Experience",
        description:
            "Looking for a Zoho CRM Product Manager to lead product development in Chennai.",
        color: "bg-[#e1f5fe]",
        btn: "border-[#222] text-[#222] hover:bg-[#e1f5fe]",
    },
    {
        title: "Zoho CRM QA Automation Engineer",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <circle cx="16" cy="16" r="12" />
                    <path d="M10 16h12" />
                </svg>
            </span>
        ),
        location: "Delhi",
        type: "Full Time",
        vacancies: 2,
        experience: "2 - 4 Years Experience",
        description:
            "We are hiring a QA Automation Engineer for Zoho CRM to automate and improve our testing processes in Delhi.",
        color: "bg-[#f9fbe7]",
        btn: "border-[#222] text-[#222] hover:bg-[#f9fbe7]",
    },
    {
        title: "Frontend Developer",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <path d="M4 6h24v4H4zM4 14h24v4H4zM4 22h24v4H4z" />
                </svg>
            </span>
        ),
        location: "Remote",
        type: "Full Time",
        vacancies: 2,
        experience: "2 - 4 Years Experience",
        description:
            "We're seeking a talented Frontend Developer with a strong grasp of modern JavaScript frameworks and responsive design skills.",
        color: "bg-[#f0f4c3]",
        btn: "border-[#222] text-[#222] hover:bg-[#f0f4c3]",
    },

    {
        title: "Backend Developer",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <path d="M4 6h24v20H4zM8 10h16M8 16h16M8 22h10" />
                </svg>
            </span>
        ),
        location: "Bangalore",
        type: "Full Time",
        vacancies: 3,
        experience: "3 - 6 Years Experience",
        description:
            "We're looking for an experienced Backend Developer to build scalable APIs and manage server-side logic using Node.js or similar technologies.",
        color: "bg-[#fce4ec]",
        btn: "border-[#222] text-[#222] hover:bg-[#fce4ec]",
    },

    {
        title: "Database Developer",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <ellipse cx="16" cy="8" rx="10" ry="4" />
                    <path d="M6 8v10c0 2 4.5 4 10 4s10-2 10-4V8" />
                </svg>
            </span>
        ),
        location: "Hyderabad",
        type: "Full Time",
        vacancies: 1,
        experience: "4 - 7 Years Experience",
        description:
            "Hiring a skilled Database Developer to work on database architecture, optimization, and integration for enterprise-level applications.",
        color: "bg-[#e3f2fd]",
        btn: "border-[#222] text-[#222] hover:bg-[#e3f2fd]",
    },

    {
        title: "React Node Developer",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <circle cx="16" cy="16" r="12" />
                    <path d="M10 16h12M16 10v12" />
                </svg>
            </span>
        ),
        location: "Pune",
        type: "Full Time",
        vacancies: 2,
        experience: "2 - 5 Years Experience",
        description:
            "We're looking for a full-stack developer proficient in React and Node.js to help build scalable web applications.",
        color: "bg-[#ede7f6]",
        btn: "border-[#222] text-[#222] hover:bg-[#ede7f6]",
    },

    {
        title: "Cloud Engineer",
        icon: (
            <span className="bg-white/60 rounded-full p-2">
                <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2">
                    <path d="M20 17H8a4 4 0 1 1 0-8c.7 0 1.4.1 2 .4A5 5 0 1 1 20 17z" />
                </svg>
            </span>
        ),
        location: "Chennai",
        type: "Full Time",
        vacancies: 1,
        experience: "3 - 6 Years Experience",
        description:
            "We are looking for an experienced Cloud Engineer to manage infrastructure and deployments across AWS and Azure platforms.",
        color: "bg-[#e0f2f1]",
        btn: "border-[#222] text-[#222] hover:bg-[#e0f2f1]",
    },
];

export default function CareerOpenings() {
    return (
        <section id="jobopening" className="py-12 px-2 w-10/12 mx-auto md:px-4">
            <div className="text-center mb-8 space-y-10">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-700 mb-2">We are Super Excited to Have You Onboard</h2>
                <p className="text-gray-600 text-center max-w-4xl text-lg mx-auto">
                    We are looking for talented people like you who want to help our 700+ customers around the world use Lead2CRM services to transform their business. Lead2CRM not only provides you with the rewarding career development you are seeking but also with unmatched benefits that help you get the most out of your career and your life.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.map((job, idx) => (
                    <div
                        data-aos="fade-up"
                        key={job.title}
                        className={`rounded-xl ${job.color} p-4 shadow flex flex-col h-full`} // h-full ensures equal height in grid
                    // style={{ minHeight: 340 }} // optional: set a min height for visual consistency
                    >
                        {/* Card Content */}
                        <div className=''>
                            <div className="flex items-center gap-2 mb-2">
                                {job.icon}
                                <h3 className="md:text-xl text-md text-gray-700 font-bold">{job.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-[#222] font-medium my-4">
                                <span className="flex items-center gap-1"><MapPinIcon className="w-4 h-4" /> {job.location}</span>
                                <span className="flex items-center gap-1"><BriefcaseIcon className="w-4 h-4" /> {job.type}</span>
                                <span className="flex items-center gap-1"><UserGroupIcon className="w-4 h-4" /> {job.vacancies} Vacancies</span>
                                <span className="flex items-center gap-1"><ClockIcon className="w-4 h-4" /> {job.experience}</span>
                            </div>
                            <p className="text-[#222] text-xs md:text-base my-4">{job.description}</p>
                        </div>
                        {/* Button always at bottom */}
                        <div className="mt-auto flex">
                            <button className={`px-5 py-2  border transition font-semibold ${job.btn}`}>
                                Read more
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
