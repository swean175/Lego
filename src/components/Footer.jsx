import React from "react"
import { Navigate } from "react-router-dom"
import { LuUserCircle2 } from "react-icons/lu"

export default function Footer(){
const [user, setUser] = React.useState("")
const [wyloguj, setWyloguj] = React.useState("")
const [logOut, setLogOut] = React.useState(false)
const name = sessionStorage.getItem("Name")

function logOff(){
    sessionStorage.removeItem("Name")
    sessionStorage.removeItem("logData")
    setLogOut(true)
}

React.useEffect(() => {
    if (name) {
      setUser("Witaj" + name)
      setWyloguj("Wyloguj")
    }
  }, [name]);

  if(!logOut){
    return(
        <>
        <footer> 
            <h2>{user}</h2>
        <LuUserCircle2 className="user-icon" color="#d1cccc" size={48}/><button className="wyloguj" onClick={logOff}>{wyloguj}</button>
        </footer>
       
        </>
    )
  }
  return (
    <Navigate 
    to="/" 
    state={{
        message: "Wylogowano",
        from: location.pathname
    }} 
    replace
/>
  )
}