import {  Outlet, NavLink } from "react-router-dom"
import React from 'react'





export default function Lekcje(){
const [disp, setDisp] = React.useState("Wprowadzenie")
    const tematyArr = ["Wprowadzenie", "lekcja1", "lekcja2", "lekcja3", "lekcja4", "lekcja5", "lekcja6"]


    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#5BB3E4"
    }

    
 
    function dane(){
       let lista = tematyArr.map((temat) => {
        return (
            <>
             <li onClick = {()=>chosen(temat)}>  
              <NavLink
                            to={temat==="Wprowadzenie"?".":temat.toLowerCase()}
                            style={({ isActive }) => isActive & temat!=="Wprowadzenie" ? activeStyles : null}
                        >
                            {temat}
                    </NavLink>
                    </li>
             </>
        )
       
    }) 
    return (
        <>
        {lista}
        </>
    )
    }
   
    function chosen(topic){
       
        setDisp(() =>  tematyArr.indexOf(topic))
    }

    return (
        
        <section>
            <div className='menu-lekcji'>
                 <h1>Lekcje:</h1>
      <div><ol>{dane()}</ol></div>
      </div>
      <content>
      
      <Outlet/>
        
      </content>
        </section>
       
    )
}