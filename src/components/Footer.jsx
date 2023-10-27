import React from "react"
import { LuUserCircle2 } from "react-icons/lu"

export default function Footer(){
const [user, setUser] = React.useState("")
const [wyloguj, setWyloguj] = React.useState("")
const name = sessionStorage.getItem("Name")

function logOff(){
    sessionStorage.removeItem("Name")
    sessionStorage.removeItem("logData")
}

React.useEffect(() => {
    if (name) {
      setUser("Witaj" + name)
      setWyloguj("Wyloguj")
    }
  }, [name]);

    return(
        <>
        <footer> 
            <h2>{user}</h2>
        <LuUserCircle2 color="#d1cccc" size={48}/><button onClick={logOff}>{wyloguj}</button>
        </footer>
       
        </>
    )
}