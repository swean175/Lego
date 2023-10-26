
import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function Auth() {

   let isLoggedIn = false
   let tok = sessionStorage.getItem("logData")

    async function token(message){
        const serUrl = 'https://slawa-lego-team.netlify.app/.netlify/functions/token'
        const response = await fetch(serUrl, {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body:JSON.stringify(message)
       })
     
     const data = await response.json()
       return data
     }
     const status = new Promise((resolve, reject) => {
        return token(tok)
       })
      status
        .then((value) => isLoged = value, console.log("Not authentificated"))

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