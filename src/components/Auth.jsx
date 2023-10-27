import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function Auth() {
const isLoggedIn = React.useRef(false)
   let tok = sessionStorage.getItem("logData")

  checkAuthentication()


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
          isLoggedIn.current = value
          console.log("Authenticated " + value)
        } catch (error) {
          console.error("error with Authentification " + value)
        }
     
      }


    const location = useLocation()


    console.log("isLogged "+ isLoggedIn)
    if (!isLoggedIn) {
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