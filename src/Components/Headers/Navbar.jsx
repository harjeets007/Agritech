import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="flex items-center gap-8 text-[15px] font-medium">

            {/* Home */}
            <div className="group relative">
                <button className="flex items-center gap-1 hover:text-green-600 transition">
                    Home
                    <ChevronDown size={16} />
                </button>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-md w-52 py-3 mt-3">

                    <Link className="block px-5 py-2 hover:bg-gray-100">Home Main</Link>
                    <Link className="block px-5 py-2 hover:bg-gray-100">Home Modern</Link>
                    <Link className="block px-5 py-2 hover:bg-gray-100">Home Classic</Link>
                    <Link className="block px-5 py-2 hover:bg-gray-100">Home Company</Link>

                </div>
            </div>

            {/* Pages */}
            <div className="group relative">
                <button className="flex items-center gap-1 hover:text-green-600 transition">
                    Pages
                    <ChevronDown size={16} />
                </button>

                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl rounded-md w-52 py-3 mt-3">

                    <Link className="block px-5 py-2 hover:bg-gray-100">About Us</Link>
                    <Link className="block px-5 py-2 hover:bg-gray-100">How It Works</Link>
                    <Link className="block px-5 py-2 hover:bg-gray-100">Our Farmers</Link>
                    <Link className="block px-5 py-2 hover:bg-gray-100">Pricing Plans</Link>

                </div>
            </div>

            <Link className="hover:text-green-600 transition">Services</Link>
            <Link className="hover:text-green-600 transition">Projects</Link>
            <Link className="hover:text-green-600 transition">Insights</Link>
            <Link className="hover:text-green-600 transition">Shop</Link>

        </nav>
    );
};

export default Navbar;