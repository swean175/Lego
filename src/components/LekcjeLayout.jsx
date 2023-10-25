import { Outlet, useLocation, NavLink} from "react-router-dom"
import { BiSolidChevronRight } from "react-icons/bi"
import { BiSolidChevronLeft } from "react-icons/bi"

export default function LekcjeLayout(){
  const location = useLocation()
  let locPath = location.pathname.slice(-1)
  let lesseonIndex = parseInt(locPath)
console.log( lesseonIndex, locPath)

    return(
      <div> 
      <Outlet />
      <div className="lekcje-layout">
      <NavLink to={location.pathname==="/lekcje/lekcja1" ? "." : `lekcja${lesseonIndex -1}`}>
                            {location.pathname === "/lekcje" ? null : <BiSolidChevronLeft className="arrows" size={64}/>}
                    </NavLink>
                    <NavLink to={location.pathname==="/lekcje" ? "lekcja1" : `lekcja${lesseonIndex +1}`}>
                    <BiSolidChevronRight className="arrows" size={64}/>
        </NavLink>
        </div>
      </div>
           
    )
}