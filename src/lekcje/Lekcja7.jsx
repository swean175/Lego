import React,{ useEffect } from "react"
import Robo from "../components/svgs/icon"
import oponaszer from "../assets/lekcja7/tyre.jpg"
import blokmain from "../assets/lekcja7/blokmain.jpg"
import blokskretu from "../assets/lekcja7/blokskretu.jpg"


export default function Lekcja7(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])

const [deg, setDeg] = React.useState(0)
const [degB, setDegB] = React.useState(0)



function SladB(){
let arrB = []

for (let i =0; i <= degB; i++){
const stylB  = {transform:`translate(calc(cos(${(10*i)+180}deg)*138px),calc(sin(${(10*i)+180}deg)*138px))`}
    arrB.push({stylB:stylB}) 
}

let codeB = arrB.map((it)=> {
    return (
        <div className="sladB" style={it.stylB}></div>
    )
})

    return (
<>
{codeB}
</>
    )
}


function Slad(){
    let arr = []

    for (let i =0; i <= deg; i++){
       const styl = {transform:`translate(calc(cos(${(10*i)-90}deg)*var(--offset)),calc(sin(${(10*i)-90}deg)*var(--offset)))`}
       const styl2 = {transform:`translate(calc(cos(${(10*i)+90}deg)*var(--offset)),calc(sin(${(10*i)+90}deg)*var(--offset)))`}
        arr.push({styl:styl, styl2:styl2}) 
    }

   let code = arr.map((it)=>{
        return (
            <>
            <div className="slad" style={it.styl}></div>
            <div className="slad2" style={it.styl2}></div>
            </>
        )
    })

    return (
<>
{code}
</>
    )
}

function Obrot(){
    return (
       <div className="obrotB" id="obrotB">
        <div id="point" className="point"></div>
 <div className="centrumB" id="centrumB" style={{transform:`rotate(${degB*10}deg)`}}>
         <Robo 
         clasa={"roboB"}
         degrees={90}
         />

 </div>
  {degB > 0?<SladB/>:null}
   </div>
    )
}

function Centrum(){
    return(
        <div className="centrum" id="centrum">
            <Robo
              clasa={"robo"}
            degrees={deg*10}/> 
            {deg > 0?<Slad/>:null}
        </div>
    
       
    )
}


function handleSliderB(event){
    setDegB(event.target.value) 
}


//--------------------------------------------------------------------------------------------


function handleSlider(event){
   setDeg(event.target.value)
}

    return(
      
            <div className="format-lekcje">
           <div className="layout7">

   <h1 style={{fontSize:"1.5em"}}> Programujemy blok do skręcania robotem </h1>
   <img className="lekcjaszesc-img" src={oponaszer} alt="koło lego"></img>
<h3>Robot napędzany jednym kołem zatacza okrąg, oś obrotu znajduję się na drugim kole</h3>
        <div className="skretB">
         
         <Obrot />

         

        </div>

        <input id="sliderB" className="slider" value={degB} type="range" name="pointsB" min="0" max="36" onChange={handleSliderB}></input>
            <p id="stopnieB">{degB * 10} stopni</p>
        <h3>Napędzając koła w przeciwnych kierunkach zmniejsza się okrąg i przyspiesza obrót, oś obrotu jest w połowie szerokości</h3>
        <div className="skret">

      <Centrum />

            <input id="slider" className="slider" value={deg} type="range" name="points" min="0" max="36" onChange={handleSlider}></input>
            <p id="stopnie">{deg * 10} stopni</p>
        </div>
        <div>
            <h3>Do obliczenia obrotu robota bedą potrzebne informacje jak, szerokość opony, średnica opony, roztaw kół, kąt obrotu robota i kierunek obrotu </h3>
            <h3>
                Dzięki temu mozemy stworzyć nowy blok i używac go wielokrotnie
            </h3>
            <h4>Poniżej znajduję się nasz blok skręcania z wprowadzonymi informacjami</h4>
            <img className="lekcjaszesc-img" src={blokmain} alt="blok skręcania na zewnątrz"></img>
        </div>
        <div>
            <h3>Do obliczenia ilości obrotów silnika która jest potrzebna do pokonania odcinka o danej długości posłuży nam blok obliczania drogi z poprzedniej lekcji</h3>
            <h4>Poniżej wnętrze bloku do skręcania</h4>
            <img className="lekcjaszesc-img" src={blokskretu} alt="blok skręcania wnętrze"></img>
        </div>
        </div>
        </div>

    )
}