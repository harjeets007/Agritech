import React from "react";
import { Mail, Phone, MapPinned, Facebook } from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#083b1a] text-white text-sm">
      <div className="max-w-350 mx-auto px-6 py-2 flex justify-between items-center">

        {/* LEFT */}
        <div className="flex items-center gap-6">

          {/* Email */}
          <a
            href="mailto:Agritec@7oroof.com"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <Mail size={16} className="text-yellow-400" />
            <span className="hidden md:inline">Email:</span>
            <span>Agritec@7oroof.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+201161145741"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <Phone size={16} className="text-yellow-400" />
            <span className="hidden md:inline">Call Us:</span>
            <span>+2 011 6114 5741</span>
          </a>

          {/* Address */}
          <a
            href="https://maps.google.com"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <MapPinned size={16} className="text-yellow-400" />
            <span>2307 Brooklyn, New York 11226</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">

          {/* Menu */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-yellow-400">Pricing</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-yellow-400">Careers</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-yellow-400">FAQs</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 text-yellow-400">
            <a href="#" className="hover:text-white transition">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedin size={16} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;