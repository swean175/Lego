import { useEffect } from "react"
import widlak from "../assets/lekcja3/widlak.jpg"




export default function Lekcja3(){

    useEffect(() => {
        window.scrollTo(0, 100)
      }, [])

    return(
        <div className="format-lekcje">
        <h1>Budujemy i programujemy robota</h1>
        <div>
        <h3>Robot podjeżdza do przedmiotu, zabiera go i wraca na miejsce startu
        </h3>
        <img className="program-image" src={widlak} alt="kod programu w edytorze Lego Mindstorm Education EV3"></img>
        </div>
            </div>
        

    )
}
