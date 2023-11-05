import React from "react"
import { Navigate } from "react-router-dom"

export default function Loguj(){
 
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
   const [aproved, setAproved] = React.useState(false)
    const [komunikat, setKomunikat] = React.useState("")
  

    async function Log(message){
        const serUrl = 'https://slawa-lego-team.netlify.app/.netlify/functions/Log'
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



    async function handleSubmit(e) {
        e.preventDefault()
           try{
            const token = await Log(loginFormData)
            setAproved(token.aprove)
            if (aproved){
                console.log("powinno zapiseac")
                sessionStorage.setItem("logData", token.token)
                sessionStorage.setItem("Name", token.name)
            } else {
                setKomunikat("Adres email lub hasło jest nieprawidłowe")
            }
          
           }catch(error){
            setKomunikat("Błąd logowania")
            console.error(error)
           }
    
    }



    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    if (aproved) {
        return (
        
 <Navigate 
                to="/lekcje" 
                state={{
                    message: "Zalogowano",
                    from: location.pathname
                }} 
                replace
            />
            )}
           
                return (
                <>
 <div className="login-container">
            <h1>Zaloguj się</h1>
            <h2><span className="red-font">{komunikat}</span></h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Hasło"
                    value={loginFormData.password}
                />
                <button>Zaloguj</button>
            </form>
        </div>
     </>)

}
