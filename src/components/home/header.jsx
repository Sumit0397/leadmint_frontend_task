import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import SideBar from "./sidebar";

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="navbar bg-blue-500">
                <div className="navbar-start">
                    <h1 className="navbar-item text-2xl font-bold">LOGO</h1>
                </div>
                <div className="hidden md:flex items-center justify-end w-full">
                    <Link className="navbar-item" to={"/user/home"}>Home</Link>
                    <Link className="navbar-item" to={"/user/analytics"}>Analytics</Link>
                    <Link className="navbar-item" to={"/auth/login"}>Log Out</Link>
                </div>
                <div className="md:hidden cursor-pointer">
                    {
                        open ? <ImCross size={25} onClick={() => setOpen(false)} /> : <GiHamburgerMenu size={30} onClick={() => setOpen(true)} />
                    }
                </div>
            </div>
            {
                open ? <SideBar/> : ''
            }        
        </>
    )
}

export default Navbar;