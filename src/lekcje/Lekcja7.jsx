import { useEffect, useState } from "react"
import Robo from "../components/svgs/robo"
import oponaszer from "../assets/lekcja6/tyre.jpg"

let stopnie 
let stopnieB 
let styl
let styl2
let stylB

export default function Lekcja7(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])



const [deg, setDeg] = useState(stopnie.defaultValue)
const [degB, setDegB] = useState(stopnieB.defaultValue)

let code = '<Robo className="robo"/>'
let codeB = `<div id="point" className="point"></div>
 <div className="centrumB" id="centrumB;">
 <Robo className="roboB"/> 
 </div> `



function Obrot(){
    return (
        <div id="obrot" className="obrotB">
        <div id="point" className="point"></div>
          <div className="centrumB" id="centrumB">
        <Robo className="roboB"/>
        {codeB}
    </div> 
    </div>
    )
}

function Centrum(){
    return(
        <div className="centrum" id="centrum">
            <Robo className="robo"/>
            {code}
        </div>
    )
}


function handleSliderB(event){
    stopnieB = document.getElementById('stopnieB')
    setDegB(event.target.value) 

let arrB = []

for (let i =0; i <= degB; i++){
stylB  = `"transform:translate(calc(cos(${(10*i)+180}deg)*138px),calc(sin(${(10*i)+180}deg)*138px));"`
    arrB.push(`<div className="sladB" style={{${stylB}}}></div>`) 

    codeB = `<div id="point" className="point"></div>
    <div className="centrumB" id="centrumB" style={{"transform: rotate(${i*10}deg)}}">
    <Robo className="roboB"/> 
    </div>`

 codeB = codeB + [...arrB]
}
}


//--------------------------------------------------------------------------------------------


function handleSlider(event){
    stopnie = document.getElementById('stopnie')
   setDeg(event.target.value)
   let code = `<Robo className="robo" style={{"transform: rotate(${deg*10}deg); 
   transition: 0.2s;"}}/>`

let arr = []

for (let i =0; i <= deg; i++){
    styl = `"transform:translate(calc(cos(${(10*i)-90}deg)*var(--offset)),calc(sin(${(10*i)-90}deg)*var(--offset)));"`
    styl2 = `"transform:translate(calc(cos(${(10*i)+90}deg)*var(--offset)),calc(sin(${(10*i)+90}deg)*var(--offset)));"`
    arr.push(`<div className="slad" style={{${styl}}}></div><div className="slad2" style={{${styl2}}}></div>`) 
}

code = code + [...arr]
}



    return(
        <>
             <img className="lekcjaszesc-img" src={oponaszer} alt="koło lego"></img>

   <h1> Programujemy blok do skręcania robotem </h1>
<h3>Robot napędzany jednym kołem zatacza okrąg, oś obrotu znajduję się na drugim kole</h3>
        <div className="skretB">
         
         <Obrot />

             <input id="sliderB" className="slider" value="0" type="range" name="pointsB" min="0" max="36" onChange={handleSliderB}></input>
            <p id="stopnieB">{degB * 10} stopni</p>

        </div>

        <h3>Napędzając koła w przeciwnych kierunkach zmniejsza się okrąg i przyspiesza obrót, oś obrotu jest w połowie szerokości</h3>
        <div className="skret">
      <Centrum />

            <input id="slider" className="slider" value="0" type="range" name="points" min="0" max="36" onChange={handleSlider}></input>
            <p id="stopnie">{deg * 10} stopni</p>
        </div>

        
</>
    )
}