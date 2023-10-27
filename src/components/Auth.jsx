import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function Auth() {
const [isLoggedIn, setIsLoggedIn] = React.useState(false)
   let tok = sessionStorage.getItem("logData")

   React.useEffect(() => {
    checkAuthentication()
   }, [0])


   console.log("isLogged "+ isLoggedIn)
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

     async function checkAuthentication() {
        try {
          const value = await token(tok);
          setIsLoggedIn(() => value);
          console.log("Authenticated " + value);
        } catch (error) {
          console.error("error with Authentification " + value);
        }
      }


    const location = useLocation()

    if (!isLoggedIn) {
        return (
            <>
            <h1>Auth</h1>
            <Navigate 
                to="/login" 
                state={{
                    message: "Musisz się zalogować",
                    from: location.pathname
                }} 
                replace
            />
            </>)
    }
    return <Outlet />
}