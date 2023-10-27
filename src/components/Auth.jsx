import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function Auth() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
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

     async function checkAuthentication() {
        try {
          const value = await token(tok)
          console.log("value " + value)
           await setIsLoggedIn(() => value)
          console.log("Authenticated " + value)
        } catch (error) {
          console.error("error with Authentification " + value)
        }
     
      }


    const location = useLocation()

    checkAuthentication()

    console.log("isLogged "+ isLoggedIn)
    if (isLoggedIn===false) {
      console.log("should redirect")
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
    } else {
      console.log("should work")
      return (
<Outlet />
      )
    }
   
}