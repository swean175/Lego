import { useEffect } from "react"
import Robo from "../components/svgs/Robo"
import oponaszer from "../assets/lekcja6/tyre.jpg"




export default function Lekcja7(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])

const [deg, setDeg] = React.useState(stopnie.defaultValue)
const [degB, setDegB] = React.useState(stopnieB.defaultValue)

      const centrum = document.getElementById('centrum')
const slider = document.getElementById('slider')
const stopnie = document.getElementById('stopnie')


const centrumB = document.getElementById('centrumB')
const sliderB = document.getElementById('sliderB')
const stopnieB = document.getElementById('stopnieB')
const obrot = document.getElementById('obrot')


let arr = []
let code = '<img src="robo.svg" className="robo">'

let arrB = []
let codeB = ''

stopnie.textContent = "0 stopni"
stopnieB.textContent = "0 stopni"


sliderB.addEventListener("change", (event)=>{
    setDegB(event.target.value) 
codeB =`<div id="point" class="point"></div>
<div class="centrumB" id="centrumB;">
<img src="robo.svg" class="roboB"> 
</div> `
arrB = []
renderB()
})

function renderB(){


    for (let i =0; i <= degB; i++){

        let styleB = `"transform:translate(calc(cos(${(10*i)+180}deg)*138px),calc(sin(${(10*i)+180}deg)*138px));"`
        arrB.push(`<div class="sladB" style=${styleB}></div>`) 

        codeB =`<div id="point" class="point"></div>
        <div class="centrumB" id="centrumB" style="transform: rotate(${i*10}deg)">
        <img src="robo.svg" class="roboB"> 
        </div> `
    }


    arrB.forEach((it)=>{
        codeB += it
    })

    stopnieB.textContent = `${degB * 10} stopni`
    obrot.innerHTML = codeB 
 
}


//--------------------------------------------------------------------------------------------


slider.addEventListener("change", (event)=>{
   setDeg(event.target.value)
code =`<img src="robo.svg" class="robo" style="transform: rotate(${deg*10}deg); 
transition: 0.2s;">`
arr = []
render()
})

function render(){

    for (let i =0; i <= deg; i++){
        let style = `"transform:translate(calc(cos(${(10*i)-90}deg)*var(--offset)),calc(sin(${(10*i)-90}deg)*var(--offset)));"`
        let style2 = `"transform:translate(calc(cos(${(10*i)+90}deg)*var(--offset)),calc(sin(${(10*i)+90}deg)*var(--offset)));"`
        arr.push(`<div class="slad" style=${style}></div><div class="slad2" style=${style2}></div>`) 
    }
    
    arr.forEach((it)=>{
        code += it
    })

    stopnie.textContent = `${deg * 10} stopni`
    centrum.innerHTML = code 

}


    return(
        <>
             <img className="lekcjaszesc-img" src={oponaszer} alt="koło lego"></img>

   <h1> Programujemy blok do skręcania robotem </h1>
<h3>Robot napędzany jednym kołem zatacza okrąg, oś obrotu znajduję się na drugim kole</h3>
        <div className="skretB">
         
            <div id="obrot" className="obrotB">
                <div id="point" className="point"></div>
                  <div className="centrumB" id="centrumB">
                <Robo className="roboB"/>
            </div> 
            </div>

             <input id="sliderB" className="slider" value="0" type="range" name="pointsB" min="0" max="36"></input>
            <p id="stopnieB"></p>

        </div>

        <h3>Napędzając koła w przeciwnych kierunkach zmniejsza się okrąg i przyspiesza obrót, oś obrotu jest w połowie szerokości</h3>

        <div className="skret">
            <div className="centrum" id="centrum">
                <Robo className="robo"/>
            </div>

            <input id="slider" className="slider" value="0" type="range" name="points" min="0" max="36"></input>
            <p id="stopnie"></p>
        </div>

        
</>
    )
}