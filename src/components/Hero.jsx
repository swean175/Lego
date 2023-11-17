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
    <div className="white-box"><article><span className="ogloszenia">Ogłoszenia</span><p>Kolejne zajęcia:</p> <p>Środa 29 listopad godz 16:00</p> <p>Środa 12 grudzień godz 16:00</p> <p>Środa 20 grudzień godz 16:00</p></article></div>
    <div className="yellow-box"><article><span className="red-font">!!!</span>Przypominam że na następnych zajęciach 29 listopada sparing Sumo, sprubójcie zaprogramować roboty tak aby walczyły autonomicznie, użyjcie czujnika koloru do wykrycia białej lini, która bedzię przy krawędzi areny.
        Będzie też opcja sterowania zdalnego przy pomocy pilotów lub aplikacji "Hi Ev3" którą można pobrać na telefon z "Play Store". Zasady: waga nie większa niż 1kg i max 2 duże silniki do napędu, inne napędy np. do 
        podnoszenia są opcjonalne. W linkach znajdziecie przykład walki z youtube</article>
        {/* <article>Przygotuj się na uwolnienie swojej kreatywności i zanurz się z nami w ekscytujący świat robotyki!</article> */}
        </div>

</div>
<div className="back-blue"></div>
<img className="vector1" src={vector1} alt="vector"/> 
</div>
    )
}