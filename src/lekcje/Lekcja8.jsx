import React,{ useEffect } from "react"
import ready from "../assets/lekcja8/ready.png"


export default function Lekcja8(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])


    return(
      
            <div className="format-lekcje">

   <h1 style={{fontSize:"1.5em"}}> Zadania przeniesienia puszek do celu </h1>
   <img className="lekcjaszesc-img" src={ready} alt="plan zadania"></img>

     
        </div>

    )
}