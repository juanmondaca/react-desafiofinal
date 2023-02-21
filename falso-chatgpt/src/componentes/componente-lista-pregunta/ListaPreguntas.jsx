import React from 'react'
// el nombre del estilo debe terminar en module.css para que lo sgte funcione
import est from './estilo.module.css'
import ItemPregunta from '../componente-item-pregunta/ItemPregunta'
import { listaDePreguntas } from '../../data/preguntas.jsx'

// desestructurar o recibir lo enviado por el contenedor padre (en este caso es app)
const ListaPreguntas = ({pregunta, onItemClick}) => {
  console.log('Lista de preguntas')

  const preguntaSeleccionada = (preg) => {
    onItemClick(preg)
  }

  return (
    <div className={est.container}>
        {
          listaDePreguntas.map( (preg) => (
            <ItemPregunta 
              seleccionado    = {pregunta === preg}
              onCLick         = {onItemClick}
              p               = {preg}
              
            />
          ))
        }
    </div>
  )
}

export default ListaPreguntas