'use client';
import React from "react";

const features = [
    {
        title: "Local Presence",
        description:
            "We welcome you to our Saudi office to understand your needs better and enhance reliability.",
        image:
            "images/features/service-1-Jim-Fahad-Digital.jpg",
        icon: "images/features/location-icon.png",
        dark: false,
        imageCorner: "br",
    },
    {
        title: "Extensive Experience",
        description:
            "Our vast experience and deep insights help us address challenges companies face across all sizes and sectors.",
        image:
            "images/features/service-2-Jim-Fahad-Digital.jpg",
        icon: "images/features/experience-icon.png",
        dark: true,
        imageCorner: "bl",
    },
    {
        title: "Customized Solutions",
        description:
            "We provide tailored solutions to perfectly meet your business needs and ensure seamless integration.",
        image:
            "images/features/service-3-Jim-Fahad-Digital.jpg",
        icon: "images/features/solution-icon.png",
        dark: false,
        imageCorner: "tr",
    },
    {
        title: "After-Sales Support",
        description:
            "We offer continuous after-sales support to ensure you benefit and seamless system operation",
        image:
            "images/features/service-4-Jim-Fahad-Digital.jpg",
        icon: "images/features/online-chat-icon.png",
        dark: false,
        imageCorner: "tl",
    },
];

const getImagePosition = (corner) => {
    switch (corner) {
        case "br":
            return {
                container: "bottom-[-120px] right-[-110px]",
                img: "object-bottom-right",
                icon: "left-1/4 -translate-x-1/7 -top-12",
            };
        case "bl":
            return {
                container: "bottom-[-120px] left-[-110px]",
                img: "object-bottom-left",
                icon: "left-1/2 -translate-x-1/5 -top-12",
            };
        case "tr":
            return {
                container: "top-[-120px] right-[-110px]",
                img: "object-top-right",
                icon: "left-1/5 -translate-x-1/2 -bottom-12",
            };
        case "tl":
            return {
                container: "top-[-120px] left-[-110px]",
                img: "object-top-left",
                icon: "left-1/2 -translate-x-1/6 -bottom-12",
            };
        default:
            return {
                container: "bottom-0 right-0",
                img: "object-center",
                icon: "left-1/2 -translate-x-1/2 -top-12",
            };
    }
};

// Alignment helper per card index
const getContentAlignment = (idx) => {
    if (idx === 0) return "justify-start items-start text-left"; // top left
    if (idx === 1) return "justify-start items-end text-right"; // top right
    if (idx === 2) return "justify-end items-start text-left"; // bottom left
    if (idx === 3) return "justify-end items-end text-right"; // bottom right
    return "";
};

const Card = ({
    title,
    description,
    image,
    icon,
    dark,
    imageCorner,
    contentAlign,
}) => {
    const pos = getImagePosition(imageCorner);

    return (
        <div
            className={`group relative flex min-h-[340px] flex-col justify-center overflow-hidden rounded bg-white text-[#23235b] shadow-md transition-all duration-300 hover:bg-[#23235b] hover:text-white `}
        >
            {/* Text Content */}
            <div className={`z-10 flex h-full flex-col px-10 py-8 ${contentAlign}`}>
                <h3 className="mb-2 text-2xl font-bold">{title}</h3>
                <p className="w-8/12 md:w-6/12 text-base">{description}</p>
            </div>
            {/* Large semi-circular image and icon */}
            <div
                className={`absolute ${pos.container} z-0 flex h-[300px] w-[300px] flex-col items-center`}
                style={{ pointerEvents: "none" }}
            >
                <div className="relative flex h-full w-full items-end justify-center rounded-full">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                        <img loading="lazy"
                            src={image}
                            alt={title}
                            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${pos.img}`}
                        />
                        <div className="bg-blue-600 pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-40"></div>
                    </div>
                    {/* Icon overlay */}
                    <div
                        className={`absolute ${pos.icon} z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-500 group-hover:scale-110`}
                    >
                        <img loading="lazy"
                            src={icon}
                            alt=""
                            className="h-10 w-10 transition-transform duration-500 group-hover:h-8 group-hover:w-8 group-hover:rotate-180"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience = () => (
    <section className="mt-20 px-2 min-h-screen bg-[#f7fafd] py-12  md:block">
        <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-[#23235b] md:text-3xl">
                Why Choose Leads2CRM?
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {features.map((feature, idx) => (
                    <Card
                        key={feature.title}
                        {...feature}
                        contentAlign={getContentAlignment(idx)}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Experience;
