import Navbar from "./Navbar";
import HeaderTools from "./HeaderTools";
import { Link } from "react-router-dom";

const MainHeader = () => {
    return (
        <header className="w-full bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-6">

                {/* Single Row */}
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://7oroofthemes.com/agritec/wp-content/themes/agritec/assets/images/logo/logo.png"
                            alt="Agritec"
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Center Menu */}
                    <div className="hidden lg:flex">
                        <Navbar />
                    </div>

                    {/* Right Tools */}
                    <HeaderTools />

                </div>
            </div>
        </header>
    );
};

export default MainHeader;