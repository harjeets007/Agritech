import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [homeOpen, setHomeOpen] = useState(false);
    const [pagesOpen, setPagesOpen] = useState(false);

    return (
        <nav className="flex justify-end items-center space-x-8 relative">

            {/* Home Dropdown */}
            <div className="relative">
                <button
                    onClick={() => setHomeOpen(!homeOpen)}
                    className="flex items-center gap-1 font-medium hover:text-green-600 transition"
                >
                    Home
                    <span className="text-xs">▼</span>
                </button>

                {homeOpen && (
                    <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-48 py-2">
                        <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                            Home Main
                        </Link>
                        <Link to="/modern" className="block px-4 py-2 hover:bg-gray-100">
                            Home Modern
                        </Link>
                        <Link to="/classic" className="block px-4 py-2 hover:bg-gray-100">
                            Home Classic
                        </Link>
                        <Link to="/company" className="block px-4 py-2 hover:bg-gray-100">
                            Home Company
                        </Link>
                        <Link to="/store" className="block px-4 py-2 hover:bg-gray-100">
                            Home Store
                        </Link>
                    </div>
                )}
            </div>

            {/* Pages Dropdown */}
            <div className="relative">
                <button
                    onClick={() => setPagesOpen(!pagesOpen)}
                    className="flex items-center gap-1 font-medium hover:text-green-600 transition"
                >
                    Pages
                    <span className="text-xs">▼</span>
                </button>

                {pagesOpen && (
                    <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-52 py-2">
                        <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">
                            About Us
                        </Link>
                        <Link to="/how-it-works" className="block px-4 py-2 hover:bg-gray-100">
                            How It Works
                        </Link>
                        <Link to="/farmers" className="block px-4 py-2 hover:bg-gray-100">
                            Our Farmers
                        </Link>
                        <Link to="/pricing" className="block px-4 py-2 hover:bg-gray-100">
                            Pricing Plans
                        </Link>
                        <Link to="/faq" className="block px-4 py-2 hover:bg-gray-100">
                            Help & FAQs
                        </Link>
                        <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">
                            Contact Us
                        </Link>
                    </div>
                )}
            </div>

        </nav>
    );
};

export default Navbar;