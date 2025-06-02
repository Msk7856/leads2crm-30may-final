import Marquee from "react-fast-marquee";

const ZohoServices = [
    {
        img: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/crm.svg',
    },
    {
        img: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/mail.svg',
    },
    {
        img: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/projects.svg',
    },
    {
        img: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/creator.svg',
    },
    {
        img: 'https://www.zoho.com/books/images/new/books-product-logo-black.svg',
    },
]


export default function ZohoLogoScroll() {
    return (
        <div className="">
            <Marquee
                gradient={false}
                speed={40} // Adjust speed as needed
                pauseOnHover={true}
            >
                {ZohoServices.map((item, idx) => (
                    <div key={idx} className="flex gap-10 justify-around items-center w-full">
                        <img src={item.img} alt="" className="w-28 h-16 p-2  px-4 hover:bg-gray-200 rounded" />
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
