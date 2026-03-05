// Header.jsx
import React from 'react';

const Header = () => {

  return (
   <div className="w-full bg-[#1f3b2c] text-white text-sm py-2">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center px-4">

        {/* LEFT SIDE */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start">

          {/* Email */}
          <a
            href="mailto:Agritec@7oroof.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <span className="hidden md:inline">Email:</span>
            <span>Agritec@7oroof.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+201161145741"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <span className="hidden md:inline">Call Us:</span>
            <span>+2 011 6114 5741</span>
          </a>

          {/* Address */}
          <a
            href="https://maps.google.com/maps?q=2307%20Brooklyn%2C%20New%20York%2011226"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <span>2307 Brooklyn, New York 11226</span>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-6 mt-2 lg:mt-0">

          {/* Menu */}
          <ul className="flex gap-6">
            <li>
              <a
                href="https://7oroofthemes.com/agritec/pricing-plans/"
                className="hover:text-green-400 transition"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="https://7oroofthemes.com/agritec/careers/"
                className="hover:text-green-400 transition"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="https://7oroofthemes.com/agritec/help-faqs/"
                className="hover:text-green-400 transition"
              >
                FAQs
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-green-400">

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              FB
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              TW
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              IN
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;