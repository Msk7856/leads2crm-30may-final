import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function AutomateBusinessProcesses() {
    return (
        <section className="w-full py-12 px-4 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                {/* Left: Screenshot/Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src="/images/zoho/zoho-creator/automatic-business-process.jpg"
                        alt="Scheduled Releases"
                        className="rounded-lg shadow-lg max-w-full"
                    // style={{ minWidth: 320, maxWidth: 480 }}
                    />
                </div>
                {/* Right: Text Content */}
                <div className="flex-1 pl-10 flex flex-col items-start">
                    <h2 className="text-2xl text-gray-700 md:text-4xl font-extrabold mb-4">
                        Automate your business<br className="hidden md:block" /> processes in a few clicks
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg mb-5">
                        Use the Blueprint feature in Zoho Creator to visually design and automate every detail of every process from start to finish.
                    </p>
                    <ul className="mb-6 space-y-3 text-gray-700">
                        <li className="flex items-center gap-2 text-lg">
                            <FaCheckCircle className="text-mai" />
                            <span>Visual process builder</span>
                        </li>
                        <li className="flex items-center gap-2 text-lg">
                            <FaCheckCircle className="text-mai" />
                            <span>Achieve greater accountability</span>
                        </li>
                        <li className="flex items-center gap-2 text-lg">
                            <FaCheckCircle className="text-mai" />
                            <span>Gather relevant info on the go</span>
                        </li>
                    </ul>
                    <Link href="#contactUs"><button className="bg-mai hover:bg-blue-700 text-white font-bold px-8 py-3 rounded transition">
                        LEARN MORE
                    </button></Link>
                </div>
            </div>
        </section>
    );
}
