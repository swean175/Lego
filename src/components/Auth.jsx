
import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function Auth() {


    async function Log(message){
        const serUrl = 'https://slawa-lego-team.netlify.app//.netlify/functions/Log'
        const response = await fetch(serUrl, {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body:message
       })
     
     const data = await response.reply.json()
     console.log("data " + data)
       return data
     }

    const isLoggedIn = Log({log:"jajo", pass:"pajo"})
    //localStorage.getItem("loggedin")
    const location = useLocation()
    console.log(isLoggedIn)
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