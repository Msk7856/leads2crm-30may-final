// components/CentersOfExcellence.tsx

const centers = [
    {
        title: "Software Engineering & Development",
        icon: "/images/about/icon1.svg",
    },
    {
        title: "Quality Assurance",
        icon: "/images/about/icon2.svg",
    },
    {
        title: "Business Analysis",
        icon: "/images/about/icon3.svg",
    },
    {
        title: "Project Management",
        icon: "/images/about/icon4.svg",
    },
    {
        title: "Product Design",
        icon: "/images/about/icon5.svg",
    },
    {
        title: "DevOps",
        icon: "/images/about/icon6.svg",
    },
    {
        title: "Data Science",
        icon: "/images/about/icon7.svg",
    },
    {
        title: "Information Development",
        icon: "/images/about/icon8.svg",
    },
    {
        title: "Technical Support",
        icon: "/images/about/icon9.svg",
    },
];

export default function CentersOfExcellence() {
    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl text-gray-700 md:text-3xl font-extrabold text-center mb-2 tracking-wide">
                    CENTERS OF EXCELLENCE
                </h2>
                <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10 text-base md:text-lg">
                    Centres of Excellence is a team of experts that provide leadership, best practices, research, support and training in their relevant areas of expertise.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {centers.map((center, idx) => (
                        <div
                            key={center.title}
                            className={`flex items-center gap-4 rounded-lg px-6 py-5 shadow-sm transition bg-gray-50 hover:bg-mai hover:text-white`}
                        >
                            <span className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                                <img src={center.icon} alt={center.title} className="w-10 h-10" />
                            </span>
                            <span
                                className='font-semibold text-base md:text-lg text-blue-700 text-[#222] '
                            >
                                {center.title}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex mx-auto mt-10">
                    <button className="bg-mai text-white text-lg mx-auto font-semibold hover:bg-maihover text-center px-6 py-3">Estimate Project</button>
                </div>
            </div>
        </section>
    );
}
