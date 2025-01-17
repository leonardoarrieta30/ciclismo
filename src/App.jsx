import React from "react"
import { Header1 } from "./layout/Header1"
import { Inicio } from "./RimmChallenge/Inicio"
import { QuienesSomos } from "./RimmChallenge/QuienesSomos"
import { Inscripcion } from "./RimmChallenge/Inscripcion"
import { Reglamento } from "./RimmChallenge/Reglamento"
import { Album } from "./RimmChallenge/Album"
import { Resultados } from "./RimmChallenge/Resultados"
import { Footer } from "./layout/Footer"

export const App = () => {
  return (
    
    <><Inicio /><QuienesSomos /><Inscripcion /><Reglamento /><Album /><Resultados /></>
  )
}


