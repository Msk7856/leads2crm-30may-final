import Image from "next/image";
import React from "react";

function CRMImage() {
    return (
        <div className="bg-gradient-to-b from-sky-400 via-mai to-orange-200 flex items-center justify-center py-16">
            <div className="">
                <div className="gap-10 mb-16">
                    <h1 className="text-white text-center font-bold text-4xl">
                        Zoho Implementation
                    </h1>
                    <p className="text-white mt-4 text-xl text-center font-semibold">Feel the pulse of your business with ZOHOs Digital & Automation tools
                    </p>
                </div>
                <Image
                    src="/images/zoho/crm-image.png"
                    alt="crm image"
                    title="Zoho CRM"
                    height={700}
                    width={800}
                    className=""
                />
            </div>

        </div>
    );
}

export default CRMImage;
