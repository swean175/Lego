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



    function handleSubmit(e) {
        e.preventDefault()
         
        const token = ""
        const status = new Promise((resolve, reject) => {
            return Log(loginFormData)
           })
           status
        .then((value) => setAproved(() => value.aprove), setKomunikat(()=> "błąd logowania"))
        .then((data) => token = data.token, alert("token error"))
      
    sessionStorage.setItem("logData", value.token), alert("not saved")
    
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    if (aproved) {
        return (
        <>
 <Navigate 
                to="/lekcje" 
                state={{
                    message: "You must log in first",
                    from: location.pathname
                }} 
                replace
            />
            </>
            )}
            else {
                return (
                <>
 <div className="login-container">
            <h1>Zaloguj się</h1>
            <h2><span className="font-red">{komunikat}</span></h2>
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

       
      
     
    

}