import { useEffect } from "react"
import vararray from "../assets/lekcja3/vararray.jpg"
import array from "../assets/lekcja3/array.jpg"
import options from "../assets/lekcja3/arroptions.jpg"
import blokiarray from "../assets/lekcja3/blokiarray.jpg"
import makecodearray from "../assets/lekcja3/makecodearray.jpg"
import list from "../assets/lekcja3/listclassroom.jpg"



export default function Lekcja3(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])

    return(
        <div className="format-lekcje">
        <h1>Tablice Listy(<span className="red-font">Array, List</span>)</h1>
       
        <div>
            <div>
               <img className="arrays-image" src={vararray} alt="blok variable"></img>
        <img className="arrays-image" src={array} alt="blok array operation"></img>  
            </div>
       <div>  
        <article>Tablica jest zmienną która może przechowywać wiele wartości, każda przypisana jest do innego indeksu. Tablice można porównać do ulicy a index do numeru domu, dom to wartość którą zapisujemy. 
            Każy dom ma inny numer, w tablicach zawsze pierwszym numerem jest 0. W edytorze EV3 Classroom zamiast tablic znajdziemy List czyli listę, która działa anologicznie. Pomimo tego że nazwa Array 
            jest stosowana powrzechniej w wielu językach programowania to List może bardziej pasuje do języka Ev3 ponieważ lista obejmuję ciąg wartości i tylko tego możemy tu użyć
            , a Arrays mogą być wielowymiarowe.
    
        </article>
        </div>
        
      
        </div>
        <div>
            <h2>Typy danych które możemy przechowywać w tablicach edytora Education Ev3</h2>
            <article><b>W zależności od edytora  mamy różne typy danych </b>
                <p>Liczbowe (numeric array) </p>
                <p>Logiczne (logic array)</p>
                <p>Tekstowe (string list)</p>

            <h4 className="red-font">Raz zadeklarowany typ danych jaki zapiszemy w tablicy nie może być już zmieniony</h4>

           W bloku zmiennej zapisujemy tablice wybranego typu danych (logic, number), w wejściu bloku będzie widać znaki [ ] otaczające wartości tablicy, np. [11;23].
             Aby edytować tablice odczytujemy naszą zmienną następnym blokiem variable, wybieramy typ tablicy, możemy użyć też nazwy zmiennej i przeciągamy wyjścię (output), 
               które ma charakterystyczny podwójny garb, do wejścia nowego bloku (<span className="red-font">Array operations</span>). W bloku array możemy wykonać kilka operacji na naszej tablicy.
               Wybieramy (read or write) w zależności czy chcemy odczytać wartość z tablicy lub zapisać. Aby to zrobić musimy również wybrać index który nas interesuje.
               Nie można odczytać indeksu który nie istnieje, np. odczytanie wartości z indeksu nr 2 z tablicy która ma tylko jedą wartość jest niemożliwe i program wyrzuci nam błąd.
               W bloku array można też wybrać opcję Append czyli dołącz, spowoduje to dodanie kolejnego indeksu z wartością którą wprowadzimy.
               Po wykonaniu wybranej operacji łączymy wyjście (output) bloku tablicy (<span className="red-font">Array operations</span>) do wejścia (input) bloku zmiennej z wybraną opcją zapisz (write array) odpowiedniego typu danych,
            żeby dokonane zmiany zostały nadpisane na stworzonej wcześniej tablicy, można również zapisać wynik operacji w innej tablicy.
            Blok Array pozwala również na odczytanie długości (length) tablicy, czyli liczby elementów (indeksów) w niej zapisanych. 
            Długość tablicy zawsze będzie liczbą o 1 większą od numeru ostatniego indeksu ponieważ indeks (index) liczony jest od zera a length zwraca ilość elementów, chyba że tablica jest pusta wtedy 
            length będzie równa zero a indeksów wogóle nie będzię.
           
            
            </article>
            <img className="options-image" src={options} alt="opcje bloku array operation"></img>
            <img className="bloki-image" src={blokiarray} alt="połączenie bloków"></img>
            <h2>Operacje na tablicach w edytorze Lego Mindstorms Education Ev3 znany również jako Ev3 Labs</h2>
        </div>
        <div>
            <br></br>
            <img className="options-image" src={makecodearray} alt="Bloki operacji Array w edytorze Makecode.mindstorms"></img>
            <h2>Bloki operacji Array w edytorze Makecode.mindstorms</h2>
            <br></br>
            <div>
            
            </div>
            <div>
            <br></br>
           
            <img className="math-image" src={list} alt="Bloki operacji na listach = arrays"></img>
                <h2>Bloki operacji na Listach czyli inaczej tablicach w edytorze Ev3 Classroom</h2>
                <br></br>
                 <div>
                
          {/* <article>Dzięki bloku operacji matematycznych możemy mnożyć, dzielić, dodawać itd.</article> */}
            
            </div>
            </div>
           
           
        </div>
        </div>
    )
}