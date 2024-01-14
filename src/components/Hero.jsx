import React from "react"
import { Link } from "react-router-dom"
import image1 from "../assets/image1.webp"
import vector1 from "../assets/Vector1.svg"


export default function Hero(){
    let tok
    tok = sessionStorage.getItem("logData")
    let state 
    tok === null ? state = false: state = true
    const [isLogged, setIsLogged] = React.useState(state) 


    function logOff(){
        sessionStorage.removeItem("Name")
        sessionStorage.removeItem("logData")
      setIsLogged(false)
    }

    return (
<div className="hero">
    <div className="top-hero">


<Link to={isLogged?"/":"login"}><button className="zaloguj" onClick={isLogged?logOff:null}> {isLogged?"Wyloguj":"Zaloguj się"}</button></Link>
<article >    Witamy na pokładzie, uczniowie Lego Mindstorms! Przeglądaj naszą stronę, aby znaleźć wskazówki dotyczące rozwiązywania problemów i wyzwania które czekają na praktykantów robotyki. </article>
<img src={image1} alt="robot" className="robot"/>
</div>
<div className="bottom-hero">
{/* Czy jesteś gotowy, aby przenieść swoje umiejętności Lego Mindstorms na wyższy poziom? Odkryj zaawansowane techniki budowania, wskazówki dotyczące kodowania i zaprezentuj swoje dzieła na naszej stronie internetowej. Tylko niebo ogranicza! */}
    <div className="white-box"><article><span className="ogloszenia">Ogłoszenia</span><p>Kolejne zajęcia:</p> <p>Środa 31 styczeń godz 16:00</p></article></div>
    <div className="yellow-box">
        <article>Przygotuj się na uwolnienie swojej kreatywności i zanurz się z nami w ekscytujący świat robotyki!</article>
        </div>

</div>
<div className="back-blue"></div>
<img className="vector1" src={vector1} alt="vector"/> 
</div>
    )
}
