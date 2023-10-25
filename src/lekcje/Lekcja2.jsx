import { useEffect } from "react"
import variables from "../assets/lekcja2/constAndVar.png"
import redBlocks from "../assets/lekcja2/czerwone-bloki.png"
import redRest from "../assets/lekcja2/redRest.png"
import math from "../assets/lekcja2/math.jpg"
import variablesMakecode from "../assets/lekcja2/variables-makecode.jpg"




export default function Lekcja2(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])

    return(
        <div className="format-lekcje">
        <h1>Zmienne (<span className="red-font">Variables</span>)</h1>
        <div>
          <img className="variables-image" src={variables} alt="zmienne i stałe"></img>
      
        <h3>Żeby sprawnie używać zmiennych trzeba najpierw poznać typy danych, dane są przechowywane w zmiennych i stałych a ich typ zapisany w zmiennej lub stałej, nie może być póżniej zmieniony.
            Stała nie może zostać nadpisana (zmieniona) nawet przez ten sam typ danych, dlatego nazywamy je stałą.
        </h3>
        </div>
        <div>
            <h2>Typy danych</h2>
            <article><b>W zależności od języka programowania mamy różne typy zmiennych, ale zawsze muszą mieć unikalną nazwę, podstawowe rodzaje to: </b>
                <p>Liczbowe, zwane też literałami liczbowymi (number) np. 10, 2023, 0.1, 0.0007 </p>
                <p>Logiczne, literały logiczne lub boolean mają tylko dwa stany (True, False) czasem zamiennie (0 i 1)</p>
                <p>Tekstowe, literały ciągów znaków (string); (text) np. &#34;przyklad&#34;, &#34;ABcdE&#34;, &#34;10&#34; - zwróć uwagę na to że między zapisem typu danych
                    string w cyfrach i typu danych number jest różnica znaku cudzysłowia w którym znajduje się string &#34;1.576 &#34;, w edytorach bloków jest możliwość konwersji z liczby (number) do tekstu (string) ale tekstu na liczbę już nie.
                    Nie wszystkie znaki mogą być użyte, polskie litery jak ń, ł, ó nie powinny być używane w nazwach zmiennych czy danych tekstowych. Problemy mogą stwarzać także nietypowe znaki jak np: 
                    #, %, *, +, !, /
                </p>
                <p>Tablice (Arrays) liczbowe</p>
                <p>Tablice logiczne</p>
                <p><b>Tablice mogą zawierać wiele danych tego samego typu, dostęp do nich daje nam index (numer elementu w tablicy)</b></p>
            </article>
        </div>
        <div>
            <br></br>
            <h2>Czerwone bloki (Data Operations) z edytora Lego Education EV3</h2>
            <br></br>
            <div>
                 <img className="wpro-image" src={redBlocks} alt="Bloki operacji na danych"></img>
            <img className="variables-image" src={redRest} alt="Bloki operacji na danych"></img>
            </div>
            <div>
            <br></br>
                <h2>Bloki zmiennych i  operacji matematycznych w edytorze Makecode</h2>
                <br></br>
                 <div>
                 <img className="math-image" src={variablesMakecode} alt="Bloki operacji na zmiennych"></img> 
            <img className="math-image" src={math} alt="Bloki operacji na matematycznych"></img>
            
            </div>
            </div>
           
           
        </div>
        </div>
    )
}