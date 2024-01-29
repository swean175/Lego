import { useEffect } from "react"
import Robo from "../components/svgs/Robo"
import oponaszer from "../assets/lekcja6/tyre.jpg"




export default function Lekcja7(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])

const [deg, setDeg] = React.useState(stopnie.defaultValue)
const [degB, setDegB] = React.useState(stopnieB.defaultValue)

const [code, setCode] = React.useState(` <Robo className="robo"/>`)
const [codeB, setCodeB] = React.useState(`  <Robo className="roboB"/>`)

const [styl, setStyl] = React.useState(``)
const [styl2, setStyl2] = React.useState(``)
const [stylB, setStylB] = React.useState(``)

      const centrum = document.getElementById('centrum')
const slider = document.getElementById('slider')
const stopnie = document.getElementById('stopnie')


const centrumB = document.getElementById('centrumB')
const sliderB = document.getElementById('sliderB')
const stopnieB = document.getElementById('stopnieB')



let arr = []
let arrB = []



stopnie.textContent = "0 stopni"
stopnieB.textContent = "0 stopni"


function handleSliderB(event){
    setDegB(event.target.value) 
setCodeB (`<div id="point" className="point"></div>
<div className="centrumB" id="centrumB;">
<Robo className="roboB"/> 
</div> `)
arrB = []
renderB()
}

function renderB(){


    for (let i =0; i <= degB; i++){

        setStylB(`"transform:translate(calc(cos(${(10*i)+180}deg)*138px),calc(sin(${(10*i)+180}deg)*138px));"`) 
        arrB.push(`<div className="sladB" style=${stylB}></div>`) 

        setCodeB (`<div id="point" className="point"></div>
        <div className="centrumB" id="centrumB" style="transform: rotate(${i*10}deg)">
        <Robo className="roboB"/> 
        </div> `)
    }


    arrB.forEach((it)=>{
        setCodeB(prev => prev + it)
    })

 
}


//--------------------------------------------------------------------------------------------


function handleSlider (event){
   setDeg(event.target.value)
setCode(`<Robo className="robo" style="transform: rotate(${deg*10}deg); 
transition: 0.2s;"/>`)
arr = []
render()
}

function render(){

    for (let i =0; i <= deg; i++){
        setStyl(`"transform:translate(calc(cos(${(10*i)-90}deg)*var(--offset)),calc(sin(${(10*i)-90}deg)*var(--offset)));"`) 
        setStyl2( `"transform:translate(calc(cos(${(10*i)+90}deg)*var(--offset)),calc(sin(${(10*i)+90}deg)*var(--offset)));"`) 
        arr.push(`<div className="slad" style=${styl}></div><div className="slad2" style=${styl2}></div>`) 
    }
    
    arr.forEach((it)=>{
        setCode(prev => prev + it)
    })


}


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