import React from "react"
import { Header1 } from "./layout/Header1"
import { Inicio } from "./RimmChallenge/Inicio"
import { QuienesSomos } from "./RimmChallenge/QuienesSomos"
import { Inscripcion } from "./RimmChallenge/Inscripcion"
import { Reglamento } from "./RimmChallenge/Reglamento"
import { Resultado } from "./RimmChallenge/Resultado"
import { Album } from "./RimmChallenge/Album"
import { Footer } from "./layout/Footer"
import { Sponsor } from "./RimmChallenge/Sponsor"
import { Noticias } from "./RimmChallenge/Noticias"

export const App = () => {
  return (
    
    <><Inicio />{/* <QuienesSomos /> */}<Inscripcion />{/* <Reglamento /> */}<Noticias /> <Album /> {/* <Resultado /> */} <Sponsor/></>
  )
}


