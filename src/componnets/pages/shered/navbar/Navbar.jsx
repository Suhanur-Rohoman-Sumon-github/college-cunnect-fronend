
import { useState } from "react";
import { FaBookOpen, FaGripLines, FaGripLinesVertical, FaHome, FaMap, FaPenNib, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const navItem = <>
     <FaHome className="ml-4"/><li className="ml-1"> <Link to={'/'}>Home</Link></li>
     <FaPenNib className="ml-4"/><li className="ml-1"><Link to={'/coleges'}>Colleges</Link></li>
     <FaBookOpen className="ml-4"/><li className="ml-1"><Link to={'/admition'}>Admission</Link></li>
     <FaMap className="ml-4"/><li className="ml-1"><Link to={'/mycolge'}>My College</Link></li>
    </>
    return (
        <nav className="bg-white p-4 fixed z-10 w-full ">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className=" font-semibold text-xl">College Cunnect</div>
                    {/* Regular navigation menu for larger screens */}
                    <div className="hidden md:flex space-x-4">
                        <ul className=" flex items-center">
                            {navItem}
                        </ul>

                    </div>
                    <div className="md:flex hidden ">
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Search…" className="input input-bordered" />
                                <button className="btn btn-square ml-4">
                                   <FaSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Collapsible button for mobile devices */}
                    <div className="md:hidden">
                        {isMobileMenuOpen ? (
                            <button onClick={toggleMobileMenu} className=" focus:outline-none">
                                <FaGripLinesVertical className="h-6 w-6 fill-current" />
                            </button>
                        ) : (
                            <button onClick={toggleMobileMenu} className=" focus:outline-none">
                                <FaGripLines className="h-6 w-6 fill-current" />
                            </button>
                        )}
                    </div>
                </div>
                {/* Mobile responsive navigation menu */}
                <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="mt-2 space-y-2">
                        {navItem}
                    </ul>
                    <div className="flex ">
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Search…" className="input input-bordered" />
                                <button className="btn btn-square ml-4">
                                <FaSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Close button for mobile menu */}
                    <button onClick={toggleMobileMenu} className=" mt-2 focus:outline-none">
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;