import { useEffect } from "react"
import loops from "../assets/lekcja1/loops.png"
import onstart from "../assets/lekcja1/onstart.jpg"
import rodzajeloops from "../assets/lekcja1/rodzajeloops.jpg"
import warunek from "../assets/lekcja1/if.jpg"
import extensionif from "../assets/lekcja1/iforand.jpg"
import xor from "../assets/lekcja1/xor.jpg"
import dog from "../assets/lekcja1/dog.webp"
import { PiCursorClickBold } from "react-icons/pi"



export default function Lekcja1(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])

    return(
        <div className="format-lekcje">
        <h1><span className="green-font">Loops ∞ </span>Warunek <span className="blue-font"> If ≤</span></h1>
        <div>
            <h2>Loops - Pętle</h2>
            <img className="wpro-image" src={loops} alt="rodzaje pętli"></img>
            <article>Pętle pozwalają nam powtarzać bloki kodu, w zależności od rodzaju pętli może ona być powtarzana określoną ilość razy albo wtedy kiedy warunek jest spełniony.
                Używamy ich wtedy kiedy chcemy powtarzać jakieś zadanie określoną ilość razy, lub na okrągło dopóki osiągniemy zamierzony rezultat.
            </article>
            <img className="loops" src={rodzajeloops} alt="różne pętle"></img>
           
        </div>
        <div >
        <img className="onstart" src={onstart} alt="blok on start"></img>
        <h2><span className="green-font">on start</span> nie jest pętlą, wykonuje zawarte w nim bloki kodu od góry do dołu </h2>
        </div>
        <div>
       <div>
       <img className="if" src={warunek} alt="blok warunku If"></img>
        <img className="ifand" src={extensionif} alt="Or, And"></img>
       </div>
        <h2>Warunek <span className="blue-font"> If </span> (Jeżeli) możemy rozszerzyć o <span className="blue-font"> Else</span> (wykona się jeżeli If jest nieprawdą "FALSE")</h2>
        <h2>Możemy rozszerzyć warunek <span className="blue-font"> If </span> o <span className="blue-font"> Or </span>(Albo) i <span className="blue-font"> And </span>(oraz, i) </h2>
       
        </div>
        <div>
          
           
        <div>
        <img className="shiba" src={dog} alt="Or, And"></img>
            <h2 className="shiba-opis"><p>Prawda (<span className="blue-font"> True</span>) = Nie fałsz (<span className="blue-font"> Not False </span>)</p>
             <p>Fałsz (<span className="blue-font"> False </span>) = Nie Prawda (<span className="blue-font"> Not True </span>)</p>
             <p>Znak nierówności (&#8800;)</p>
            <p>Prawda (<span className="blue-font"> True </span>) &#8800; Fałsz (<span className="blue-font"> False </span>)</p> 
            <p>Fałsz (<span className="blue-font"> False </span>) &#8800; Prwda (<span className="blue-font"> True </span>)</p> 
            
            </h2> 
            <article><b>W przykładzie z psem po lewej stronie oba warunki muszą być spełnione, po prawej stronie tylko jeden z warunków musi być spełniony, 
                więc algorytm sprawdza czy "zwierzę to pies" jeżeli tak idzie dalej i sprawdza czy pies chce iść na spacer, jeżeli tak to mamy Prawdę po lewej stronie i sprawdzamy czy zrówna się z prawą stroną. Po prawej najpierw sprawdza czy zwierzę nie jest lisem, pies nie jest lisem więc mamy Prawdę,
                 dalej nie musi sprawdzać, ale gdyby zwierzę było lisem 🦊, to sprawdza jeszcze drugi warunek, czyli czy pies jest twój, jeżeli pies jest twój, więc znowu mamy Prawdę. 
                  Teraz gdy warunki po lewej i prawej są równe Prawda = Prawda możesz iść na spacer. Trzeba by jednak poprawić warunek logiczny 
                  z Albo (<span className="blue-font"> Or </span>) na Oraz (<span className="blue-font"> And </span>), bo inaczej jest ryzyko że wyjdziesz na spacer z cudzym psem Albo (<span className="blue-font"> Or </span>) z lisem.</b></article>
            </div>
        </div>
        <div>
        <img className="loops" src={xor} alt="Xor"></img>
        <article><b>W edytorze Lego Mindstorms Education EV3 mamy dodatkowy warunek logiczny "XOR", oznacza on że tylko jeden z warunków może być spełniony, spełnienie obu warunków
            zwróci Fałsz(<span className="blue-font"> False </span>)</b>.
        </article>
        </div>
        <h3><a href=" https://makecode.com/_5idgwzUPp8UW" target="blank">🤖Przykładowy program z użyciem If i While i Forever <PiCursorClickBold color="green" size={25} title="kliknij"/></a> </h3>
       
        </div>
    )
}