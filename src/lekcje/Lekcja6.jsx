
import { useEffect } from "react"
import cir from "../assets/lekcja6/cir.jpg"
import insideblok from "../assets/lekcja6/blokoliczdrogi.jpg"
import outsideblok from "../assets/lekcja6/blokod.jpg"
import tyre from "../assets/lekcja6/tyre.jpg"
import Whee from "../components/svgs/whee"
import Wheel from "../components/svgs/wheel"
import Kolo from "../components/svgs/kolo"
import Line from "../components/svgs/line"
import Droga from "../components/svgs/droga"
import Odc from "../components/svgs/odc"



export default function Lekcja6(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])

    return(
        <div className="format-lekcje">
    
    <h1 style={{fontSize:"1.5em"}}>Tworzymy własny blok programu (Lego mindstorms Education Ev3) do jazdy na wprost na zadaną odległość w centymetrach.</h1>
    <div className="tresc">

       
        <img className="lekcjaszesc-img" src={tyre} alt="koło lego"></img>

<h2 className="lek6-title">Jeden obrót koła pokonuje określoną odległość która jest zależna od wielkości koła. Na oponie kół naszych robotów
    możemy odczytać średnicę podaną w milimetrach.
</h2>
        <div className="wzor">

<img className="lekcjaszesc-img" src={cir} alt="koło opis" ></img>
            <h3>
                Znając średnicę koła która zawsze jest równą dwóm promieniom "r", możemy obliczyć obwód koła "C".
            </h3>
            <div> <h2><p>liczba PI w przybliżeniu π ≈ 3.14159</p><p>C = 2πr</p></h2> </div>
           <div>  <h3 className="lek6-title">Przykładowo jeżeli średnica to 64mm to:<p>
                C = 64 * 3.14
            </p>
                <p className="blue-font">
                C = 200.96 mm
            </p>
            </h3>
           </div>
        </div>

    <div className="obwod">
         
    <Whee />
  <Line />
      <div id="circle">
          
           <Kolo />
      </div>
    </div>


<div>
    <h3 >
        Znając obwód koła "C" wiemy jaki odcinek drogi zrobi jeden obrót.
    </h3>
</div>

<div id="jazda">
    <div className="kolo">

    <Wheel/>

    </div>
    <Droga/>

    <div className="droga">
    <div className="numery-odc" style={{width:"243,5px"}}>
        <h2>1C <span style={{fontSize:"0.3em"}}>(200.96mm)</span></h2>
        <h2>2C <span style={{fontSize:"0.3em"}}>(200.96mm)</span></h2>
        <h2>3C <span style={{fontSize:"0.3em"}}>(200.96mm)</span></h2>
        <h2>3.25C <span style={{fontSize:"0.3em"}}>(50.24mm)</span></h2>
    </div>
        <Odc 
        id={"odc1"}
        x2={"75"} />
          <Odc 
        id={"odc2"}
        x2={"75"} />
          <Odc 
        id={"odc3"}
        x2={"75"} />
          <Odc 
        id={"odc4"}
        x2={"18.7"} />
   


   
</div>

</div>

<div className="obliczanie-drogi">

<div className="droga-wzory">
<h2 className="red-font">Droga "D" =  <span  className="blue-font"> 3.25 (obrotów "T") * 200.96mm (obwód koła "C")</span>
<p>D = <span className="blue-font">T * C</span></p>
<p>D = 653,12mm</p>
</h2>
</div>
<h3>Teraz chcąc pokonać drogę którą sami wyznaczymy<br></br> musimy wiedzieć ile razy obrócić koło żeby uzyskać długość drogi, 
    aby to obliczyć musimy podzielić drogę "D" przez obwód koła "C"</h3>
<h2 className="blue-font">T = <span className="red-font">D / C</span></h2>

<h3>Skróty "C", "D", "T", "r", "π" są czymś jak zmienne w programie, podłączmy pod nie wartości.
   
    <p>Jeżeli przykładowo chcemy pokonać drogę "D" o długości 50cm to znając obwód koła "C" np. 64mm, możemy obliczyć ilość obrotów "T" potrzebną
        do przebycia drogi.</p>
        <p>Trzeba jeszcze zamienić jednoski miary na milimetry lub centymetry, wartość na kole podana jest w mm,
            a długość drogi w cm, więc skonwertujemy cm na mm
        </p>
</h3>
<h2>D = 50cm = 500mm
    <p>T = 500 / 64</p>
    <p>T = 7,8125</p>
    <p>T ≈ 7,8</p>
</h2>
<h3 >Potrzeba więc około 7.8 obrotu koła do przebycia 50cm drogi</h3>
    
</div>
<div className="blok-obliczania-drogi">
    <h3>Używając bloków matematycznych obliczamy potrzebną ilość obrotów silnika, po zaznaczeniu potrzebnych bloków klikamy w Tools (narzędzia) 
        i wybieramy My block builder (konstruktor moich bloków), w menu konstruowania bloku wybieramy odpowiednie opcje i zapisujemy.</h3>
    <img className="bloki-image" src={insideblok} alt="wewnątrz bloku obliczania drogi"></img>
    <h3>Wszystkie obliczenia będa zawarte w pojedynczym bloku do którego możemy podłączać wejścia i wyprowadzać wyjścia</h3>
<img className="options-image" src={outsideblok} alt="blok obliczania drogi"></img>
<h3>Żeby edytować zawartość skonstruowanego bloku, klikamy dwukrotnie, zawartość wyswietli się w nowej zakładce.</h3>
</div>



</div>
</div>
    )
}
