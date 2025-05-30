import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-10">
            <div className="container mx-auto py-4 px-6 flex justify-between items-center">
                <Link to="/" className="text-black font-bold text-2xl md:px-20">Dwell</Link>

                <div className="hidden md:flex space-x-6">
                    <Link to="/real-estate-marketplace"
                          className="text-gray-600 hover:text-real-navy font-medium">Home</Link>
                    <Link to="/about-us" className="text-gray-600 hover:text-real-navy font-medium">About</Link>
                    <Link to="/properties" className="text-gray-600 hover:text-real-navy font-medium">Properties</Link>
                    <Link to="/" className="text-gray-600 hover:text-real-navy font-medium">Rent</Link>
                    <Link to="/" className="text-gray-600 hover:text-real-navy font-medium">Sell</Link>
                </div>

                <div className="flex items-center space-x-4">
                    <Link to="/sign-in">
                        <button className="hidden md:inline-flex text-black">Sign In</button>
                    </Link>
                    <button className="bg-black text-white px-4 py-2 rounded">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;