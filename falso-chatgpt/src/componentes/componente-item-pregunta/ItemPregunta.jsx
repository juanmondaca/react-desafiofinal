import {useState} from 'react'
import est from "./estilo.module.css"

const ItemPregunta = (props) => {

  const [isHovered, setHover] = useState(false)

  const activaHover = () => {
    setHover(true)
  }

  const desactivaHover = () => {
    setHover(false)
  }
  // clickEnPregunta
  const onItemClick = () => {
    console.log('en clickEnPreguta')
    props.onClick(props.p)
  }

  const poneColorDeFondo =() => {
    if(isHovered){
      return "#a5e9ff"
    }
    else if(props.seleccionado){
      return "#26baea"
    }
    else {
      return "#eff0ef"
    }
  }

  return (
    //console.log(p)
    <div 
      onClick      = {onItemClick}
      onMouseOver  = {activaHover}
      onMouseLeave = {desactivaHover}
      style        = {{backgroundColor: poneColorDeFondo()}}
    >{props.p}</div>
  )
}

export default ItemPregunta