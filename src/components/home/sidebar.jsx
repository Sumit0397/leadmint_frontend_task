import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div className="navbar bg-blue-500">
            <div className="flex items-center justify-end w-full">
                <Link className="navbar-item" to={"/user/home"}>Home</Link>
                <Link className="navbar-item" to={"/user/analytics"}>Analytics</Link>
                <Link className="navbar-item" to={"/auth/login"}>Log Out</Link>
            </div>
        </div>
    )
}

export default SideBar;