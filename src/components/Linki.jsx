import React from "react"
import classroom from "../assets/Ev-class.png"
import ev from "../assets/EV3_Icon.ico"
import DownloadLink from "./DownloadLink"

export default function Linki(){

    const file = {name: 'skan.ev3', url:'./downloads/skan.ev3'}
    return(
        <React.Fragment>
            <div className="przydatne-linki">
            <h1>Przydatne Linki</h1>
            <hr></hr>
            <h3><a href="https://makecode.mindstorms.com" target="blank">Online edytor Makecode</a></h3>
        <hr></hr>
        <h3><a href=" https://education.lego.com/pl-pl/downloads/mindstorms-ev3/software/" target="blank">Program Ev3 Clasroom<img className="ev3logo" src={classroom} alt="Link do programu Ev3 Clasroom"/> </a></h3>
        <br></br>
        <hr></hr>
        <h3><a href=" https://education.lego.com/pl-pl/downloads/retiredproducts/mindstorms-ev3-lab/software/" target="blank">Lego mindstorms Education Ev3 lub Ev3 Labs<img className="ev3logo" src={ev} alt="Link do programu Lego mindstorms Education Ev3 lub Ev3 Labs"/> </a></h3>
        <br></br>
        <hr></hr>
        <h3><a href="https://ev3-help-online.api.education.lego.com/Education/en-gb/page.html?Path=editor%2FProgrammingEnvironment.html" target="blank">Dokumentacja LegoEducation Ev3</a></h3>
       <hr></hr>
       <h3><a href="https://www.youtube.com/watch?v=7-4yOx1CnXE" target="blank">Fabryka Tesla</a></h3>
       <hr></hr>
       <h3><a href="https://www.youtube.com/watch?v=3tguWcKTXQI" target="blank">Walki Sumo </a></h3>
       <hr></hr>
       <h3>  <DownloadLink fileName={file.name} fileUrl={file.url} /> - Program do skanowania otoczenia i znajdywania największej odległości (projekt z ostatnich kilku lekcji)</h3>
    
 
            </div>
        </React.Fragment>
    )
} 