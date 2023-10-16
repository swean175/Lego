
import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function Auth() {
    const isLoggedIn = true//localStorage.getItem("loggedin")
    const location = useLocation()
    
    if (!isLoggedIn) {
        return (
            <>
            <h1>Auth</h1>
            <Navigate 
                to="/login" 
                state={{
                    message: "You must log in first",
                    from: location.pathname
                }} 
                replace
            />
            </>)
    }
    return <Outlet />
}