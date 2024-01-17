import { useEffect } from "react"




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
