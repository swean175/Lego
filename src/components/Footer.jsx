import React from "react"
import { LuUserCircle2 } from "react-icons/lu"

export default function Footer(){
const [user, setUser] = React.useState("")
setUser(() => sessionStorage.getItem("Name"))

    return(
        <>
        <footer> 
            <h2>{user}</h2>
        <LuUserCircle2 color="#d1cccc" size={48}/>
        </footer>
       
        </>
    )
}