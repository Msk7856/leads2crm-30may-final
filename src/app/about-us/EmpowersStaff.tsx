// components/EmpowersStaff.tsx

export default function EmpowersStaff() {
    return (
        <section className="w-full max-w-7xl mx-auto bg-[#f6f8fa] rounded-2xl px-2 sm:px-4 py-8 md:py-12 md:px-8 my-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0">
                {/* Left: Text */}
                <div className="flex-1 mb-8 md:mb-0 md:pr-8 w-full">
                    <h2 className="text-2xl text-gray-700 md:text-3xl font-extrabold mb-3">Empowers staff</h2>
                    <p className="text-gray-700 text-base md:text-lg">
                        Automate redundant processes, improving
                        <br className="hidden md:block" />
                        productivity
                    </p>
                </div>
                {/* Right: Table mockup */}
                <div className="flex-1 flex justify-center md:justify-end w-full">
                    <div className="w-full max-w-md">
                        {/* Responsive horizontal scroll for table */}
                        <div className="overflow-x-auto">
                            {/* Table header */}
                            <div className="bg-white rounded-t-lg border border-b-0 border-gray-200 flex items-center h-10 px-2 sm:px-4 min-w-[340px]">
                                <div className="w-6" />
                                <div className="flex-1 flex gap-2 sm:gap-4">
                                    <div className="w-20 sm:w-24 h-4 bg-gray-100 rounded" />
                                    <div className="w-12 sm:w-16 h-4 bg-gray-100 rounded" />
                                    <div className="w-12 sm:w-16 h-4 bg-gray-100 rounded" />
                                    <div className="w-12 sm:w-16 h-4 bg-gray-100 rounded" />
                                    <div className="w-12 sm:w-16 h-4 bg-gray-100 rounded" />
                                </div>
                            </div>
                            {/* Table rows */}
                            <div className="shadow-lg rounded-b-lg min-w-[340px]">
                                {[
                                    {
                                        name: "Kristina Mary",
                                        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                                        times: ["08.00", "19.00", "22.00", "10.00"],
                                        checked: true,
                                    },
                                    {
                                        name: "Jonathan Hawk",
                                        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
                                        times: ["08.00", "19.00", "22.00", "10.00"],
                                        checked: false,
                                    },
                                    {
                                        name: "Jennifer Princey",
                                        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                                        times: ["08.00", "19.00", "22.00", "10.00"],
                                        checked: false,
                                    },
                                ].map((row, idx) => (
                                    <div
                                        key={row.name}
                                        className={`bg-white flex items-center px-2 sm:px-4 h-14 border-b last:border-b-0 border-gray-100 ${idx === 0 ? "rounded-t-lg" : ""
                                            }`}
                                        style={{
                                            boxShadow: idx === 0 ? "0 8px 16px 0 rgba(0,0,0,0.08)" : undefined,
                                            zIndex: idx === 0 ? 2 : 1,
                                            position: idx === 0 ? "relative" : "static",
                                        }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={row.checked}
                                            readOnly
                                            className="accent-blue-600 w-4 h-4 mr-2 sm:mr-3"
                                        />
                                        <img
                                            src={row.avatar}
                                            alt={row.name}
                                            className="w-8 h-8 rounded-full mr-2 sm:mr-3"
                                        />
                                        <span className="font-semibold text-xs sm:text-sm flex-1">{row.name}</span>
                                        {row.times.map((t, i) => (
                                            <span key={i} className="text-gray-700 text-xs w-10 sm:w-12 text-center">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
