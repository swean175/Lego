import loops from "../assets/lekcja1/loops.png"
import onstart from "../assets/lekcja1/onstart.jpg"
import rodzajeloops from "../assets/lekcja1/rodzajeloops.jpg"
import { PiCursorClickBold } from "react-icons/pi"



export default function Lekcja1(){
    return(
        <div className="format-lekcje">
        <h1><span className="green-font">Loops ∞ </span>Warunek <span className="blue-font"> If ≤</span></h1>
        <div>
            <h2>Loops - Pętle</h2>
            <img className="wpro-image" src={loops} alt="rodzaje pętli"></img>
            <article>Pętle pozwalają nam powtarzać bloki kodu, w zależności od rodzaju pętli może ona byc powtarzana określoną ilośc razy albo wtedy kiedy warunek jest spełniony.
                Uzywamy ich wtedy kiedy chcemy powtarzać jakieś zadanie określoną ilość razy, lub na okrągło dopóki osiągniemy zamierzony rezultat.
            </article>
            <img className="loops" src={rodzajeloops} alt="różne pętle"></img>
           
        </div>
        <div >
        <img className="onstart" src={onstart} alt="blok on start"></img>
        <h2><span className="green-font">on start</span> nie jest pętlą, wykonuje zawarte w nim bloki kodu od góry do dołu </h2>
        </div>
        <h3><a href=" https://makecode.com/_5idgwzUPp8UW" target="blank">🤖Przykładowy program z użyciem If i While i Forever <PiCursorClickBold color="green" size={25} title="kliknij"/></a> </h3>
       
        </div>
    )
}