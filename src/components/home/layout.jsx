import { Outlet } from "react-router-dom"
import Navbar from "./header"


function HomeLayout()  {
    return (
        <div>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default HomeLayout