
import { Outlet, useLocation } from "react-router-dom"
import Nav from "./Nav"
import Footer from './Footer'

export default function Layout(){

    const location = useLocation()
    return(
        <div className="site-wrapper">
        <Nav />
        <main>
            <Outlet />
        </main>
        {location.pathname.includes("/lekcje")?<Footer/>:null}
    </div>
    )
}