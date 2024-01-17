import cir from "../assets/lekcja6/cir.jpg"
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
    
    <h1>Tworzymy własny blok programu (Lego mindstorms Education Ev3) do jazdy na wprost na zadaną odległość w centymetrach.</h1>
    <div class="tresc">

       
        <img src={tyre} alt="koło lego" width="350"></img>
    

<h2>Jeden obrót koła pokonuje określoną odległość która jest zależna od wielkości koła. Na oponie kół naszych robotów
    możemy odczytać średnicę podaną w milimetrach.
</h2>
        <div class="wzor">


<img src={cir} alt="koło opis" width="350"></img>

            <h3>
                Znając średnicę koła która zawsze jest równą dwóm promieniom "r", możemy obliczyć obwód koła "C".
            </h3>
            <h2><p>liczba PI w przybliżeniu π ≈ 3.14159</p><p>C = 2πr</p></h2>
            <h3>Przykładowo jeżeli średnica to 64mm to:<p>
                C = 64 * 3.14
            </p><p style="color:blue;">
                C = 200.96 mm
            </p></h3>
          
       
    
        </div>

    <div class="obwod">
    <Whee />


<div id = "circle">
      
          <Kolo />

    </div>

    <Line />

    </div>

  


<div>
    <h3>
        Znając obwód koła "C" wiemy jaki odcinek drogi zrobi jeden obrót.
    </h3>
</div>

<div id="jazda">
    <div class="kolo">

    <Wheel/>

    </div>
    <Droga/>
</div>

<div class="obliczanie-drogi">
<div class="droga">
    <div class="numery-odc">
        <h2>1C <span style="font-size:0.3em;">(200.96mm)</span></h2>
        <h2>2C <span style="font-size:0.3em;">(200.96mm)</span></h2>
        <h2>3C <span style="font-size:0.3em;">(200.96mm)</span></h2>
        <h2>3.25C <span style="font-size:0.3em;">(50.24mm)</span></h2>
    </div>
        <Odc 
        id={"odc1"}
        x2={"200"} />
          <Odc 
        id={"odc2"}
        x2={"200"} />
          <Odc 
        id={"odc3"}
        x2={"200"} />
          <Odc 
        id={"odc4"}
        x2={"50"} />
   


   
</div>
<div class="droga-wzory">
<h2 style="color:red;">Droga "D" =  <span  style="color:blue;"> 3.25 (obrotów "T") * 200.96mm (obwód koła "C")</span>
<p>D = <span style="color:blue;">T * C</span></p>
<p>D = 653,12mm</p>
</h2>
</div>
<h3>Teraz chcąc pokonać drogę którą sami wyznaczymy musimy wiedzieć ile razy obrócić koło żeby uzyskać długość drogi, 
    aby to obliczyć musimy podzielić drogę "D" przez obwód koła "C"</h3>
<h2 style="color:blue;">T = <span style="color:red;">D / C</span></h2>

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
<h3>Potrzeba więc około 7.8 obrotu koła do przebycia 50cm drogi</h3>
    
</div>
</div>
    
        </div>
    )
}