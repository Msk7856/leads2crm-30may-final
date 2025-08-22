import { Settings, GitMerge, Zap, Database } from "lucide-react";
import CRMImage from "./CRMImage";

const services = [
    {
        icon: <Settings className="h-8 w-8 text-mai" />,
        title: "Zoho CRM Setup & Customization",
        description:
            "Tailoring Zoho CRM to fit your unique business processes for maximum efficiency.",
    },
    {
        icon: <GitMerge className="h-8 w-8 text-mai" />,
        title: "Integration with ERP, Websites & Apps",
        description:
            "Seamlessly connect your CRM with other essential tools for a unified data ecosystem.",
    },
    {
        icon: <Zap className="h-8 w-8 text-mai" />,
        title: "Workflow Automation & Approvals",
        description:
            "Automate repetitive tasks and streamline approval processes to save time and reduce errors.",
    },
    {
        icon: <Database className="h-8 w-8 text-mai" />,
        title: "Data Migration & KPI Dashboards",
        description:
            "Securely migrate your data and create powerful dashboards to track key performance indicators.",
    },
];

export function Services() {
    return (
        <section id="services" className="py-16 sm:py-24 bg-gray-100">
            <div className="container mx-auto px-4 md:px-10">
                {/* Section Header */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl text-center font-headline font-bold tracking-tight sm:text-5xl">
                        A Full Suite of CRM Solutions
                    </h2>
                    <p className="mt-4 text-xl text-center text-gray-700 font-semibold">
                        From initial setup to advanced automation, we provide end-to-end
                        Zoho CRM services.
                    </p>
                </div>

                {/* <img src="images/zoho/crm-image.png" alt="" /> */}
                

                {/* Services Grid */}
                <div className="mt-12  grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-y-6 items-center text-center py-8 px-6 rounded-xl bg-white border shadow hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
                        >
                            <div className="bg-sky-100 p-4 rounded-full mb-4">
                                {service.icon}
                            </div>
                            <h1 className="text-2xl font-semibold mb-2">{service.title}</h1>
                            <p className="text-gray-700 text-lg">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
