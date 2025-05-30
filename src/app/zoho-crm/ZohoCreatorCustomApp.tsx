// components/ZohoCreatorCustomApp.jsx

export default function ZohoCreatorCustomApp() {
    const steps = [
        {
            number: 1,
            title: "Analyze",
            desc: "We analyze your requirement",
        },
        {
            number: 2,
            title: "Design",
            desc: "Then we design the solution map",
        },
        {
            number: 3,
            title: "Build",
            desc: "Once designed, we build the app",
        },
        {
            number: 4,
            title: "Test and Deliver",
            desc: "We test and deliver the project",
        },
    ];

    return (
        <section className="bg-[#d9def7] rounded-2xl mx-4 md:mx-28 my-4">
            <div className="max-w-5xl mx-auto py-14 px-4 text-center">
                <div className="text-lg font-semibold mb-1 mt-2 text-gray-700">Transform your business with</div>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 mt-1 text-gray-700">Zoho Creator Custom App</h2>
                <p className="text-gray-700 max-w-3xl mx-auto mb-7 text-base md:text-lg">
                    By this time, you might have already tried quite a few off-the-shelf products hoping that the products will address your unique business needs.
                    If you have not found one and are still using your Excel spreadsheets (which are quick to create but hard to share and keep current),
                    its time to build your own custom app with our expert Zoho developer team.
                </p>
                <button className="mt-2 px-8 py-2 border border-[#c9a59a]  text-[#3d2b1f] font-medium hover:bg-[#ffe0d7] transition">
                    Read more
                </button>
            </div>
            <div className="bg-[#b8c2f5] rounded-b-2xl px-2 py-7">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <div key={step.number} className="flex items-start gap-3">
                            <div className="bg-[#d8a99e] text-white font-bold text-lg rounded-md w-10 h-10 flex items-center justify-center">
                                {step.number}
                            </div>
                            <div>
                                <div className="font-bold text-base text-gray-700 ">{step.title}</div>
                                <div className="text-gray-700 text-sm">{step.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
