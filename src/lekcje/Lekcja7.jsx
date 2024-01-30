import  React, { useEffect, useState } from "react"
import Robo from "../components/svgs/robo"
import oponaszer from "../assets/lekcja6/tyre.jpg"


export default function Lekcja7(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])

const [deg, setDeg] = useState(0)
const [degB, setDegB] = useState(0)


// let code = '<Robo className="robo"/>'

// let codeB = `<div id="point" className="point"></div>
//  <div className="centrumB" id="centrumB">
//  <Robo className="roboB"/> 
//  </div> `

function SladB(){
let arrB = []

for (let i =0; i <= degB; i++){
// const stylB  = `{transform:"translate(calc(cos(${(10*i)+180}deg)*138px),calc(sin(${(10*i)+180}deg)*138px))"}`
    arrB.push(`<div className="sladB" style={{transform:"translate(calc(cos(${(10*i)+180}deg)*138px),calc(sin(${(10*i)+180}deg)*138px))"}}></div>`) 
}
    return (
<>
{arrB.map((it)=> {
    return (
        it
    )
})}
</>
    )
}


function Slad(){
    let arr = []

    for (let i =0; i <= deg; i++){
    //    const styl = `{transform:"translate(calc(cos(${(10*i)-90}deg)*var(--offset)),calc(sin(${(10*i)-90}deg)*var(--offset)))"}`
    //    const styl2 = `{transform:"translate(calc(cos(${(10*i)+90}deg)*var(--offset)),calc(sin(${(10*i)+90}deg)*var(--offset)))"}`
        arr.push(`<div className="slad" style={{transform:"translate(calc(cos(${(10*i)-90}deg)*var(--offset)),calc(sin(${(10*i)-90}deg)*var(--offset)))"}}></div><div className="slad2" style={{transform:"translate(calc(cos(${(10*i)+90}deg)*var(--offset)),calc(sin(${(10*i)+90}deg)*var(--offset)))"}}></div>`) 
    }
    return (
<>
{arr.map((it)=>{
    return (
        it
    )
})}
</>
    )
}

function Obrot(){
    return (
       <>
        <div id="point" className="point"></div>
 <div className="centrumB" id="centrumB" style={{transform:`rotate(${i*10}deg)`}}>
 <Robo className="roboB" /> 
 {deg>0?<SladB/>:null}
 </div>
   </>
    )
}

function Centrum(){
    return(
        <div className="centrum" id="centrum">
            <Robo className="robo" style={{transform: `rotate(${deg*10}deg`}}/>
            {deg>0?<Slad/>:null}
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
        <React.Fragment>
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

        
</React.Fragment>
    )
}