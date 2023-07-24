import { Link, Outlet } from "react-router-dom";
import Footer from "../componnets/pages/shered/footer/Footer";
import Navbar from "../componnets/pages/shered/navbar/Navbar";
import useAutheProvider from "../hookes/useAutheProvider";


const UserLayout = () => {
    const {user} = useAutheProvider()
    return (
        <>
        <Navbar />
        <div className="drawer lg:drawer-open w-10/12 mx-auto  py-28">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col md:ml-10 bg-slate-200 px-8 ">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-4">Open drawer</label>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu  w-80 h-full  bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <img className="h-20 w-20 rounded-full mx-auto" src={user?.photoURL} alt="" />
                    <h1 className="text-3xl text-center text-teal-500 font-serif my-4">{user?.displayName}</h1>
                    <li><Link to={'/profile/home'}>user home</Link></li>
                    <li><Link to={'/profile/home/information'}>userinformation</Link></li>
                </ul>

            </div>
        </div>
        <Footer />
        </>
    );
};

export default UserLayout;