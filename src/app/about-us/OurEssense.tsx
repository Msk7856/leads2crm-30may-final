import { useState } from "react";

const essenseItems = [
  {
    title: "Tech expertise",
    image: "/images/about/essense/tech-expertise.jpg",
    heading: "Tech Expertise",
    videoThumb: "/images/about/essense/tech-expertise.jpg",
  },
  {
    title: "One team",
    image: "/images/about/essense/one-team.jpg",
    heading: "One Team",
    videoThumb: "/images/about/essense/one-team.jpg",
  },
  {
    title: "Professional development opportunities",
    image: "/images/about/essense/professional-development.avif",
    heading: "Professional Development Opportunities",
    videoThumb: "/images/about/essense/professional-development.avif",
  },
  {
    title: "Unique recognition programs",
    image: "/images/about/essense/unique-recognition.jpg",
    heading: "Unique Recognition Programs",
    videoThumb: "/images/about/essense/unique-recognition.jpg",
  },
  {
    title: "Care culture",
    image: "/images/about/essense/care-culture.avif",
    heading: "Care Culture",
    videoThumb: "/images/about/essense/care-culture.avif",
  },
  {
    title: "Work for life, not life for work",
    image: "/images/about/essense/work-life.avif",
    heading: "Work for life, Not life for work",
    videoThumb: "/images/about/essense/work-life.avif",
  },
  {
    title: "Talented people",
    image: "/images/about/essense/talented-people.avif",
    heading: "Talented People",
    videoThumb: "/images/about/essense/talented-people.avif",
  },
  {
    title: "Corporate Social Responsibility",
    image: "/images/about/essense/social-responsibility.avif",
    heading: "Corporate Social Responsibility",
    videoThumb: "/images/about/essense/social-responsibility.avif",
  },
];

export default function OurEssense() {
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="w-full pb-10 px-4 bg-white">
      <div className="mx-auto items-center justify-center flex flex-col py-10">
        <h2 className="text-2xl md:text-3xl text-gray-700 font-extrabold text-center md:text-left mb-2 tracking-wide">
          OUR ESSENSE
        </h2>
        <p className="text-gray-600 text-center md:w-5/12  mb-6">
          Lead2CRM is a company of exceptional individuals and professionals. Take a sneak peek into what we appreciate most about us
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left: List */}
        <div className="flex-1 max-w-xl w-full">
          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {essenseItems.map((item, idx) => (
              <div key={item.title} className="w-full">
                <button
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full flex items-center justify-between py-3 px-2 text-left transition
                    ${idx === activeIndex
                      ? "text-[#0066ff] font-semibold"
                      : "text-[#222] font-normal hover:text-[#0066ff]"
                    }
                  `}
                >
                  <span
                    className={
                      idx === activeIndex
                        ? "underline underline-offset-2"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {/* Mobile: Show image below the active item */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${idx === activeIndex ? "max-h-96 mb-4" : "max-h-0"}`}>
                  {idx === activeIndex && (
                    <div className="w-full flex flex-col items-center">
                      <img
                        src={item.videoThumb}
                        alt={item.heading}
                        className="w-full max-w-xs rounded-xl border-4 border-mai shadow-lg"
                      />
                      <div className="text-gray-500 text-lg font-extrabold mt-2">{item.heading}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Card (Desktop only) */}
        <div className="hidden md:flex flex-1 justify-center md:justify-end w-full">
          <div className="rounded-2xl p-6 md:p-8 shadow-lg max-w-md w-full flex flex-col items-start relative">
            <h3 className="text-gray-500 text-2xl font-extrabold mb-6 leading-snug">
              {essenseItems[activeIndex].heading}
            </h3>
            <div className="relative w-full h-full mt-2 self-center">
              <img
                src={essenseItems[activeIndex].videoThumb}
                alt={essenseItems[activeIndex].heading}
                className="w-full md:h-[260px] h-auto border-4 border-mai shadow-lg rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}