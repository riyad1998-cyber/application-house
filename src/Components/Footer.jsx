import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E2F] text-gray-300 py-12">
      <div className="max-w-[1700px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent mb-4">
            HERO.IO
          </h2>
          <p className="text-gray-400">
            Build amazing apps, manage installations, and connect with our community.
          </p>
          <div className="flex gap-3 mt-5 flex-wrap">
            <a href="#" className="p-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:scale-110 transition-transform">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:scale-110 transition-transform">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:scale-110 transition-transform">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:scale-110 transition-transform">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition-colors block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/applications" className="hover:text-white transition-colors block">
                Apps
              </Link>
            </li>
            <li>
              <Link to="/installation" className="hover:text-white transition-colors block">
                Installation
              </Link>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors block">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Get the latest updates right in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none border border-gray-600 bg-[#2A2A3D] text-white focus:outline-none flex-1"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md sm:rounded-l-none sm:rounded-r-md text-white font-semibold hover:scale-105 transition-transform"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="mt-12 text-center text-gray-500 text-sm px-4">
        © 2025 HERO.IO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
