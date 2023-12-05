import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/header"
import Inicio from "./Components/Home/inicio"
import Projetos from "./Components/projetos/projetos"
import Sobre from "./Components/Sobre/sobre"
import {GlobalStyle} from "./Components/Estilos/Global"

function App() {

  return (
    <>
    <GlobalStyle />

     <BrowserRouter>
        
       <Header />

       <Routes>
         
         <Route path="/" element={<Inicio/>} />
         <Route path="sobre" element={<Sobre/>}/>
         <Route path="projetos" element={<Projetos/>}/>
    
        </Routes> 
       
     </BrowserRouter>
    </>
  )
}

export default App
