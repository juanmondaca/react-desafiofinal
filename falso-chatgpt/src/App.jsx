import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import s from './estilos.module.css'
import Chat from './componentes/componente-chat/chat'
import ListaPreguntas from './componentes/componente-lista-pregunta/ListaPreguntas'

function App() {
  const [preguntaSeleccionada, setPreguntaSeleccionada] = useState(0);
  // onMenuListItemClick
  const tuPregunta = (preg) => {
    setPreguntaSeleccionada(preg)
  }

  return (
    <div >
        <h1 style={{textAlign: "center"}}>Seleccione el tipo de pregunta a realizar</h1>
        {/* App hace un paso de Props (propiedades) al componente Prguntas ... es el patron de diseno Render Props */}
        <div className= {s.workspace}>
          <ListaPreguntas 
            pregunta    = {preguntaSeleccionada}
            onItemClick = {tuPregunta}
          />
          <Chat pregunta = {preguntaSeleccionada}/>
        </div>      
    </div>
  )
}

export default App
