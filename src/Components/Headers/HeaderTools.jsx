import { Link } from "react-router-dom";
import { Search, ShoppingCart, ArrowRight } from "lucide-react";

const HeaderTools = () => {
  const cartCount = 0;

  return (
    <div className="flex items-center gap-4">

      {/* Button */}
      <Link
        to="/contact"
        className="hidden md:flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
      >
        Get In Touch
        <ArrowRight size={16} />
      </Link>

      {/* Search */}
      <button className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-gray-200 transition">
        <Search size={18} />
      </button>

      {/* Cart */}
      <div className="relative">
        <button className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-gray-200 transition">
          <ShoppingCart size={18} />
        </button>

        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </div>

    </div>
  );
};

export default HeaderTools;