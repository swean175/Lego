import { NavLink } from "react-router-dom"

export default function Nav(){

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "grey"
    }


    return(
        <>
        <nav> 
        <div className="home-menu">
            <NavLink to="/"><h2>Sława Lego Team</h2></NavLink>
            
                </div>
      <div className="links-menu">
        <NavLink to="/lekcje"
        style={({ isActive }) => isActive ? activeStyles : null} >Lekcje</NavLink>
         <NavLink to="/linki"
         style={({ isActive }) => isActive ? activeStyles : null} >Linki</NavLink>
         </div>
        
         </nav>
      
        </>
    )
}