import React from "react"
import classroom from "../assets/Ev-class.png"

export default function Linki(){
    return(
        <React.Fragment>
            <div className="przydatne-linki">
            <h1>Przydatne Linki</h1>
       
        <h3><a href="https://www.youtube.com/watch?v=7-4yOx1CnXE" target="blank">Fabryka Tesla</a></h3>
        <h3><a href="https://ev3-help-online.api.education.lego.com/Education/en-gb/page.html?Path=editor%2FProgrammingEnvironment.html" target="blank">Dokumentacja LegoEducation Ev3</a></h3>
        <h3><a href="https://makecode.mindstorms.com" target="blank">Online edytor Makecode</a></h3>
       <h3><a href=" https://education.lego.com/pl-pl/downloads/mindstorms-ev3/software/" target="blank">Program Ev3 Clasroom<img className="ev3logo" src={classroom} alt="Link do programu Ev3 Clasroom"/> </a></h3>
   
            </div>
        </React.Fragment>
    )
} 