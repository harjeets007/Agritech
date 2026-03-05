import { useState } from "react";
import { Link } from "react-router-dom";
// import { Search, ShoppingCart, Menu } from "lucide-react";

const HeaderTools = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const cartCount = 0; // later connect to state/context

  return (
    <div className="flex items-center gap-6">

      {/* Get In Touch Button */}
      <Link
        to="/contact"
        className="hidden md:flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
      >
        Get In Touch
      </Link>

      {/* Search Icon */}
      <button className="p-2 border rounded-md hover:scale-105 transition">
        {/* <Search size={20} /> */}
      </button>

      {/* Cart */}
      <div className="relative">
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="p-2 border rounded-md hover:scale-105 transition relative"
        >
          {/* <ShoppingCart size={20} /> */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        {cartOpen && (
          <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-md p-4">
            {cartCount === 0 ? (
              <p className="text-gray-500 text-sm">
                No products in the cart.
              </p>
            ) : (
              <p>Cart items here</p>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 border rounded-md hover:scale-105 transition">
        {/* <Menu size={22} /> */}
      </button>

    </div>
  );
};

export default HeaderTools;