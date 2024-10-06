import React from 'react'
import {useState} from "react"
import Contador from './Contador'
const ContainerContador = () => {
    const [contador, setContador] = useState (0)

const aumentarcontador = () => {
    setContador( contador + 1 )
}
    

  return (
    <Contador contador= { contador } aumentarcontador = {aumentarcontador}/>
  
  )
}

export default ContainerContador
