

import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCamera, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] px-6 py-16 font-sans text-white md:px-12">
      <div className="mx-auto max-w-7xl space-y-14">
        {/* Top Section */}
        <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" title="Leads2CRM">

              <Image
                src="/images/logo/Leads2crm.jpg"
                alt="Leads2CRM Logo"
                loading="lazy"
                width={200}
                height={60}
                // priority
                className="width-[210px] white-logo mx-auto mb-4 h-12 md:mx-0 rounded" // Optional: adjust styles
              />
              {/* Adjust height as needed */}
            </Link>
          </div>
          <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-400 md:mt-0">
            Current Status{" "}
            <span className="relative flex items-center justify-center h-8 w-8">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green"></span>
            </span>
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
        <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-4 text-xs text-gray-500 md:flex-row">
          <p className="mb-4 md:mb-0"> Copyright ©2025 All rights reserved <span className="text-mai">Leads2CRM</span>.</p>

          {/* ✅ Social Media Icons */}
          <div className="flex gap-5 text-gray-400">
            <a
              href="https://www.facebook.com/profile.php?id=61569045539977"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue transition"
              aria-label="Facebook"
            >
              <FaFacebook className="h-6 w-6" />
            </a>

            <a
              href="https://www.instagram.com/leads2crm?igsh=Nm5qb2V2cXp0eXl2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-600 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/company/104812516/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter className="h-6 w-6" />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
              aria-label="Threads"
            >
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
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
