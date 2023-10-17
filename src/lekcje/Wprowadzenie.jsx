import bricksgen from "../assets/bricksgen.webp"
import Evtbsbutt from "../assets/Evtbsbutt.webp"
import progexmp from "../assets/progexmp.jpg"
import progrblocks from "../assets/progrblocks.jpg"
import bricksassets from "../assets/bricksassets.jpg"
import katblocks from "../assets/katblocks.webp"
import sredniserwo from "../assets/sredniserwo.webp"
import duzyserwo from "../assets/duzyserwo.webp"
import zyroskop from "../assets/zyroskop.webp"
import nadajnik from "../assets/nadajnik.webp"
import touchsensor from "../assets/touchsensor.jpg"
import infraredsensor from "../assets/infraredsensor.webp"
import ultrasonicsensor from "../assets/ultrasonicsensor.jpg"
import colorssensor from "../assets/colorssensor.jpg"

export default function Wprowadzenie(){
    return(
        <div className="wprowadzenie">
        <h1>Wprowadzenie</h1>
        <h3>Starsze generacje</h3>
        <img className="wpro-image" src={bricksgen} alt="generacje kostek" title="Starsze generacje kostek"></img>
        <img className="wpro-image" src={Evtbsbutt} alt="przyciski i zakładki kostki" title="Przyciski i elementy na wyswietlaczu kostki EV3"></img>
        <img className="wpro-image" src={progexmp} alt="przykład programu"title="Przykład programu"></img>
        <img className="wpro-image" src={progrblocks} alt="bloki programu" title="Lista bloków programu wgranych w kostkę EV3"></img>
        <img className="wpro-image" src={bricksassets} alt="elementy programu" title="Lista elementów wgranych w kostkę EV3"></img>
        <p><a href="https://pl.wikipedia.org/wiki/Lego_Mindstorms" target="blank" >https://pl.wikipedia.org/wiki/Lego_Mindstorms</a></p>
        {/* <hr></hr> */}

        <img className="wpro-image" src={sredniserwo} alt="elementy programu" title="średni serwomotor"></img>
        <img className="wpro-image" src={duzyserwo} alt="elementy programu" title="duży serwomotor"></img>
        <h3>Silniki</h3>
        {/* <hr></hr> */}
        <img className="wpro-image" src={zyroskop} alt="elementy programu" title="żyroskop"></img>
        <img className="wpro-image" src={nadajnik} alt="elementy programu" title="nadajnik na podczerwień (pilot)"></img>
        <img className="wpro-image" src={touchsensor} alt="elementy programu" title="tczujnik dotyku"></img>
        <img className="wpro-image" src={infraredsensor} alt="elementy programu" title="czujnik podczerwieni"></img>
        <img className="wpro-image" src={ultrasonicsensor} alt="elementy programu" title="czujnik ponaddźwiekowy"></img>
        <img className="wpro-image" src={colorssensor} alt="elementy programu" title="czujnik koloru"></img>
        <h3>Czujniki</h3>
        {/* <hr></hr> */}
        <h3>Bloki programu</h3>
     

        <article>W zależności od edytora, mamy do czynienia z różnymi blokami programu, te które możemy zobaczyć na wyświetlaczu kostki są również blokami które możemy ustawiać bez użycia zewnętrznych narzędzi, ale dają one ograniczone możliwości.
            Bloki edytorów różnią się wizualnie, jak i ich ułożenie może być inne, ale mają te same zasady działania. Podstawowe kategorie bloków to: <ul><li>czujniki</li><li>silniki</li><li>warunki logiczne</li><li>pętle i bloki kierujące kolejnością wykonywania</li><li>zmienne</li></ul> Możemy natrafić na bardziej zaawansowane bloki jak:
            <ul><li>funkcje</li><li>operacje matematyczne</li><li>cutomowe (własne) bloki</li><li>tablice</li><li>bloki tekstowe</li><li>operacje na danych</li></ul>
            Możemy też doinstalować rozszerzenia edytorów kodu, które dają nam różne dodatkowe możliwości.
        </article>
        
        <img className="katblocks" src={katblocks} alt="elementy programu" title="Oto przykłady kategorii bloków w różnych edytorach"></img>
        <p>Oto przykłady kategorii bloków w różnych edytorach</p>
        </div>

    )
}