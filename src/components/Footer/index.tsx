// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faLinkedinIn, faTwitter, faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons';
// import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-maib text-white py-10">
//       <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
//         {/* Logo Section */}
//         <div className="col-span-2 md:col-span-1">
//           <Link href="/" title="Leads2CRM">
//             <img  src="/images/logo/Leads2crm.jpg"
//  alt="Maiprosoft Logo" className="h-12 width-[210px] mb-4 mx-auto md:mx-0 white-logo" /> {/* Adjust height as needed */}
//           </Link>
//         </div>

//         {/* About Maiprosoft Section */}
//         <div>
//   <h6 className="font-semibold mb-4">About Leads2CRM</h6>
//   <ul className="space-y-2">
//     <li><Link href="#" className="font-light ">Careers</Link></li>
//     <li><Link href="#" className="font-light">Latest News</Link></li>
//     <li><Link href="#" className="font-light">Corporate Vision</Link></li>
//     <li><Link href="/contact-us" className="font-light">About Leads2CRM</Link></li>
//   </ul>
// </div>

// {/* Discover Section */}
// <div>
//   <h6 className="font-semibold mb-4">Discover</h6>
//   <ul className="space-y-2">
//     <li><Link href="#" className="font-light">Our Products</Link></li>
//     <li><Link href="#" className="font-light">Our Services</Link></li>
//     <li><Link href="#" className="font-light">Our Partners</Link></li>
//     <li><Link href="#" className="font-light">    Our Global Footprint
//     </Link></li>

//     <li><Link href="#" className="font-light">Case Studies</Link></li>
//   </ul>
// </div>

// {/* Important Links Section */}
// <div>
//   <h6 className="font-semibold mb-4">Important Links</h6>
//   <ul className="space-y-2">
//     <li><Link href="#" className="font-light">Leads2CRM Club Blue</Link></li>
//     <li><Link href="#" className="font-light">Press Kit</Link></li>
//     <li><Link href="#" className="font-light">Support</Link></li>
//     <li><Link href="#" className="font-light">Secure Usage Policy</Link></li>
//     <li><Link href="#" className="font-light">Privacy Policy</Link></li>

//   </ul>
// </div>

//         {/* Follow Us Section */}
//         <div>
//       <h6 className="font-semibold mb-4">Follow Us</h6>
//       <div className="flex space-x-1">
//         {/* Facebook */}
//         <Link
//           href="#"
//           aria-label="Facebook"
//           className="group text-md p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
//         >
//           <FaFacebookF
//             className="text-white transition-colors group-hover:text-[#1877F2]"
//           />
//         </Link>

//         {/* LinkedIn */}
//         <Link
//           href="#"
//           aria-label="LinkedIn"
//           className="group text-md p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
//         >
//           <FaLinkedinIn
//             className="text-white transition-colors group-hover:text-[#0077B5]"
//           />
//         </Link>

//         {/* X (formerly Twitter) */}
//         {/* <Link
//           href="https://x.com/maiprosoft"
//           aria-label="X"
//           className="group text-xl p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
//         >
//           <FaTwitter
//             className="text-white transition-colors group-hover:text-[#1DA1F2]"
//           />
//         </Link> */}
//                 <Link
//           href="#"
//           aria-label="X"
//           className="group text-md p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="1em"
//             viewBox="0 0 512 512"
//             className="text-white transition-colors group-hover:text-[#fff]"
//             fill="currentColor"
//           >
//             <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
//           </svg>
//         </Link>

//         {/* Instagram */}
//         <Link
//           href="#"
//           aria-label="Instagram"
//           className="group text-md p-2 rounded-full bg-gray-800 flex items-center justify-center transition-colors"
//         >
//           <FaInstagram
//             className="text-white transition-colors group-hover:text-[#E4405F]"
//           />
//         </Link>
//       </div>
//     </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="container mx-auto px-6 mt-8 border-t border-gray-600 pt-4 grid grid-cols-1 md:grid-cols-3">
//         <p className="text-center md:text-left text-gray-400">© Leads2CRM 2024</p>
//         <div className="text-center hidden md:block"></div>
//         <div className="flex justify-center md:justify-end">
//           <Link href="/employee-services"><i className="icon-sign_in_menu_icon text-xl"></i></Link>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] px-6 py-16 font-sans text-white md:px-12">
      <div className="mx-auto max-w-7xl space-y-14">
        {/* Top Section */}
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="col-span-2 md:col-span-1">
            <a href="/" title="Leads2CRM">
              <img
                src="/images/logo/Leads2crm.jpg"
                alt="Maiprosoft Logo"
                className="width-[210px] white-logo mx-auto mb-4 h-12 md:mx-0"
              />{" "}
              {/* Adjust height as needed */}
            </a>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-400 md:mt-0">
            Current Status{" "}
            <span className="bg-green h-2 w-2 rounded-full"></span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h4 className="mb-4 font-semibold text-white">About Leads2CRM</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Latest News</a>
              </li>
              <li>
                <a href="#">Corporate Vision</a>
              </li>
              <li>
                <a href="/contact-us">About Leads2CRM</a>
              </li>
             
            </ul>
          </div>

          
          {/* Column 3 */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Discover</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Our Products</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Our Partners</a>
              </li>
              <li>
                <a href="#">Our Global Footprint</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
             
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="mb-4 font-semibold text-white">
            Important Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Leads2CRM Club Blue</a>
              </li>
              <li>
                <a href="#">Press Kit</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Secure Usage Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
       


        {/* Column 2 */}
        <div>
            <h4 className="mb-4 font-semibold text-white">Stay connected</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#">Check out the blog</a>
              </li>
              <li>
                <a href="#">Find us on Reddit</a>
              </li>
              <li>
                <a href="#">Follow on X</a>
              </li>
              <li>
                <a href="#">Subscribe on YouTube</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>



        </div>


        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-6 text-xs text-gray-500 md:flex-row">
          <p className="mb-4 md:mb-0">@Leads2CRM 2025</p>
          <div className="flex gap-5">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Manage Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
