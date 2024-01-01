import { useEffect } from "react"
import vararray from "../assets/lekcja4/vararray.jpg"
import array from "../assets/lekcja4/array.jpg"
import options from "../assets/lekcja4/arroptions.jpg"
import blokiarray from "../assets/lekcja4/blokiarray.jpg"
import makecodearray from "../assets/lekcja4/makecodearray.jpg"
import list from "../assets/lekcja4/listclassroom.jpg"



export default function Lekcja5(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])

    return(
        <div className="format-lekcje">
        <h1>Sparing Sumo !!!</h1>
       
       
       
       <div>  
        <article>Mini zawody treningowe, roboty walczą autonomicznie zaprogramowane, oraz sterowane zdalnie. </article>
        </div>
        </div>
    )
}