import React,{ useEffect } from "react"


export default function Lekcja9(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])


    return(
      
            <div className="format-lekcje">

   <h1 style={{fontSize:"1.5em"}}> Programujemy robota który skanuje otoczenie i znajduję drogę wyjścia </h1>

     
        </div>

    )
}