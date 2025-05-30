// components/AboutGoldenLionCards.tsx
// import { UsersIcon, HandshakeIcon } from '@heroicons/react/24/outline';
import { HeartHandshakeIcon, Users2Icon } from 'lucide-react';

const cards = [
    {
        icon: <span className="bg-[#f7e4e1] rounded-xl p-4 text-2xl font-bold text-[#e27e6a]">G</span>,
        title: "About Lead2CRM",
        desc: "Who we are and what we do? Let's get to know each other better!",
        href: "#",
        color: "text-[#e27e6a]",
    },
    {
        icon: <Users2Icon className="w-10 h-10 bg-[#e6e7fa] rounded-xl p-2 text-[#6c63ff]" />,
        title: "Team",
        desc: "A business is as good as its team! We've got the best one out there!",
        href: "#",
        color: "text-[#6c63ff]",
    },
    {
        icon: <span className="bg-[#ece6fa] rounded-xl p-4 text-2xl font-bold text-[#b47aea] rotate-90">🫱‍🫲</span>,
        title: "Alliances",
        desc: "Businesses are built on relations! And we have a few awesome ones!",
        href: "#",
        color: "text-[#b47aea]",
    },
    {
        icon: <HeartHandshakeIcon className="w-10 h-10 bg-[#faeede] rounded-xl p-2 text-[#f4a259]" />,
        title: "Referral Partners",
        desc: "Want to earn passive income? Become our referral partner today!",
        href: "#",
        color: "text-[#f4a259]",
    },
];

export default function AboutGoldenLionCards() {
    return (
        <section className="py-12 px-2 space-y-8 md:px-0">
            <div className="text-center mb-8">
                <div className="text-base font-semibold text-[#888] mb-1">Know more</div>
                <h2 className="text-3xl md:text-4xl text-gray-700 font-extrabold mb-2">About Lead2CRM</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {cards.map((card, idx) => (
                    <div
                        key={card.title}
                        className="bg-gray-100 rounded-2xl shadow p-8 flex flex-col items-center text-center transition hover:shadow-lg hover:-translate-y-1 duration-200"
                    >
                        <div className="mb-4">{card.icon}</div>
                        <h3 className="text-lg font-bold mb-2 text-gray-700">{card.title}</h3>
                        <p className="text-gray-500 text-sm mb-4">{card.desc}</p>
                        <a href={card.href} className="font-bold text-black flex items-center gap-1 group">
                            Read more
                            <span className="text-[#ff882e] group-hover:translate-x-1 transition">
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 9h8M11 5l4 4-4 4" /></svg>
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
