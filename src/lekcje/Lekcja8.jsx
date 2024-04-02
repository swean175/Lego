import React,{ useEffect } from "react"
import ready from "../assets/lekcja8/ready.png"


export default function Lekcja8(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])


    return(
      
            <div className="format-lekcje">

   <h1 style={{fontSize:"1.5em"}}> Zadanie: zbuduj i zaprogramuj robota który przemieści puszki do celu </h1>
   <img className="generic-img" src={ready} alt="plan zadania"></img>

     
        </div>

    )
}