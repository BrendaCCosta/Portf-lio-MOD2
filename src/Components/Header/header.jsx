import React from "react"
import { Link } from "react-router-dom"
import { StyleHeader, NavBar, NavBarLink } from "../Estilos/HeaderStyle"

export default function Header () {
  return(
    <>
     <StyleHeader>
      <nav>
        <NavBar>
          <li>
            <NavBarLink to="/">Inicio</NavBarLink>
          </li>
          <li>
            <NavBarLink to="Sobre">Sobre</NavBarLink>
          </li>
          <li>
            <NavBarLink to="Projetos">Projetos</NavBarLink>
          </li>
        </NavBar>
      </nav>
     </StyleHeader>
    </>
  )
}