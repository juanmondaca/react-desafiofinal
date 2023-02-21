// rafce
import React from 'react'
import s from './estilo.module.css'

import {listaRespuestas} from "../../data/repuestas.jsx"

const Chat = (props) => {
  console.log(props)
  return (
    <div className={s.container}>
    {
      listaRespuestas[props.pregunta]
    }
    </div>
  )
}

export default Chat
