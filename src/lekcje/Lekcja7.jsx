import  React, { useEffect } from "react"
// import Robo from "../components/svgs/robo"
import oponaszer from "../assets/lekcja6/tyre.jpg"


export default function Lekcja7(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])

// const [deg, setDeg] = useState(0)
// const [degB, setDegB] = useState(0)

const deg = 0
const degB = 0

// let code = '<Robo className="robo"/>'

// let codeB = `<div id="point" className="point"></div>
//  <div className="centrumB" id="centrumB">
//  <Robo className="roboB"/> 
//  </div> `

function Robo(){
    return (
        <div>
        <h1>Robo </h1>
        </div>
    )
   
}

function Obrot(){
    return (
       <>
        <Robo className="roboB"/>
     
   </>
    )
}

function Centrum(){
    return(
        <div className="centrum" id="centrum">
            <Robo className="robo"/>
          
        </div>
    )
}


// function handleSliderB(event){
//     setDegB(event.target.value) 

// let arrB = []

// for (let i =0; i <= degB; i++){
// const stylB  = `{transform:"translate(calc(cos(${(10*i)+180}deg)*138px),calc(sin(${(10*i)+180}deg)*138px))"}`
//     arrB.push(`<div className="sladB" style={${stylB}}></div>`) 

//     codeB = `<div id="point" className="point"></div>
//     <div className="centrumB" id="centrumB" style={{transform:"rotate(${i*10}deg)"}}>
//     <Robo className="roboB"/> 
//     </div>`

//  codeB = codeB + [...arrB]
// }
// }


//--------------------------------------------------------------------------------------------


// function handleSlider(event){
//    setDeg(event.target.value)
//  code = `<Robo className="robo" style={{transform: "rotate(${deg*10}deg)", 
//    transition:" 0.2s"}}/>`

// let arr = []

// for (let i =0; i <= deg; i++){
//    const styl = `{transform:"translate(calc(cos(${(10*i)-90}deg)*var(--offset)),calc(sin(${(10*i)-90}deg)*var(--offset)))"}`
//    const styl2 = `{transform:"translate(calc(cos(${(10*i)+90}deg)*var(--offset)),calc(sin(${(10*i)+90}deg)*var(--offset)))"}`
//     arr.push(`<div className="slad" style={${styl}}></div><div className="slad2" style={${styl2}}></div>`) 
// }

// code = code + [...arr]
// }

    return(
        <React.Fragment>
             <img className="lekcjaszesc-img" src={oponaszer} alt="koło lego"></img>

   <h1> Programujemy blok do skręcania robotem </h1>
<h3>Robot napędzany jednym kołem zatacza okrąg, oś obrotu znajduję się na drugim kole</h3>
        <div className="skretB">
         
         <Obrot />

             <input id="sliderB" className="slider" value="0" type="range" name="pointsB" min="0" max="36" ></input>
            <p id="stopnieB">{degB * 10} stopni</p>

        </div>

        <h3>Napędzając koła w przeciwnych kierunkach zmniejsza się okrąg i przyspiesza obrót, oś obrotu jest w połowie szerokości</h3>
        <div className="skret">
      <Centrum />

            <input id="slider" className="slider" value="0" type="range" name="points" min="0" max="36" ></input>
            <p id="stopnie">{deg * 10} stopni</p>
        </div>

        
</React.Fragment>
    )
}