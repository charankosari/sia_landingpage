import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Logo from "../assets/logo.png"; // Adjust the path to your logo if needed

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} alt="SIA Logo" className="h-14 w-auto mb-4" />
            <p className="text-gray-400 max-w-xs">
              Your ultimate study partner for university exams.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#coverage"
                  className="hover:text-white transition-colors"
                >
                  Coverage
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-5">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; 2025 SIA App. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
