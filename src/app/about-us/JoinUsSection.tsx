import Link from 'next/link';
import React from 'react';

const JoinUsSection = () => {
    return (
        <div className="text-center py-20 px-4 ">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                WE ARE Lead2CRM. COME JOIN US!
            </h2>
            <p className="text-gray-700 text-center max-w-xl mx-auto mb-6">
                We interview more than 100+ talented people every year and will be happy to meet you.
            </p>
            <Link href="/hire-talent">
                <button className=" hover:bg-blue-800 bg-mai hover:bg-maihover text-white font-semibold uppercase text-md px-10 py-4 transition">
                    Open Vacancies
                </button>
            </Link>
        </div>
    );
};

export default JoinUsSection;
