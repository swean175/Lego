import React from "react"
import { Link } from "react-router-dom"
import image1 from "../assets/image1.webp"
import vector1 from "../assets/Vector1.svg"


export default function Hero(){
    const tok = sessionStorage.getItem("logData")
    const [isLogged, setIsLogged] = React.useState() 
    tok? setIsLogged(true): setIsLogged(false)

    function logOff(){
        sessionStorage.removeItem("Name")
        sessionStorage.removeItem("logData")
      setIsLogged(prev => prev = false)
    }

    return (
<div className="hero">
    <div className="top-hero">


<button className="zaloguj" onClick={isLogged?logOff:null}> <Link to={isLogged?"/":"login"}>{isLogged?"Wyloguj":"Zaloguj się"}</Link></button>
<article >    Witamy na pokładzie, uczniowie Lego Mindstorms! Przeglądaj naszą stronę, aby znaleźć wskazówki dotyczące rozwiązywania problemów i wyzwania, które rozpalą Twoją pasję do robotyki. </article>
<img src={image1} alt="robot" className="robot"/>
</div>
<div className="bottom-hero">
{/* Czy jesteś gotowy, aby przenieść swoje umiejętności Lego Mindstorms na wyższy poziom? Odkryj zaawansowane techniki budowania, wskazówki dotyczące kodowania i zaprezentuj swoje dzieła na naszej stronie internetowej. Tylko niebo ogranicza! */}
    <div className="white-box"><article><span className="ogloszenia">Ogłoszenia</span><p>Kolejne zajęcia:</p><p>Środa 08 listopad godz 16:00</p> <p>Środa 15 listopad godz 16:00</p><p>Środa 29 listopad godz 16:00</p></article></div>
    <div className="yellow-box"><article>Przygotuj się na uwolnienie swojej kreatywności i zanurz się z nami w ekscytujący świat robotyki!</article></div>

</div>
<div className="back-blue"></div>
<img className="vector1" src={vector1} alt="vector"/> 
</div>
    )
}