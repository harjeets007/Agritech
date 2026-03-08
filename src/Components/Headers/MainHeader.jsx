import Navbar from "./Navbar";
import HeaderTools from "./HeaderTools";
import { Link } from "react-router-dom";

const MainHeader = () => {
    return (
        <header className="w-full bg-gray-100 border-b">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center justify-between h-22.5">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://7oroofthemes.com/agritec/wp-content/themes/agritec/assets/images/logo/logo.png"
                            alt="Agritec"
                            className="h-12"
                        />
                    </Link>

                    {/* Center Navigation */}
                    <div className="hidden lg:flex flex-1 justify-center">
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