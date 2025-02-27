import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-8 md:px-16 lg:px-24 fixed bottom-0 left-0 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} MyInfoPortal. All rights reserved.
        </p>

        <div className="flex space-x-4 my-4 md:my-0">
          <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
            <FaFacebook size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
            <FaTwitter size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
            <FaLinkedin size={20} />
          </a>
          <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white">
            <FaGithub size={20} />
          </a>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
