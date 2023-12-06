import { Link } from 'react-router-dom';
//import { useDispatch,useLocation } from 'react';
import style from "./Card.module.css"

const Card = ({ id, name, image ,continente}) => {
    
  return (
       
    <div className={style.card}>
    <Link to={`/detail/${id}`} className={style.link}>
      <h2 className={style.name}>{name}</h2>
      <img className={style.img} src={image} alt={name} />
      <h3 className={style.continente}>{continente}</h3>
      {/* Puedes agregar más detalles si lo necesitas */}
    </Link>
  </div>
  )
}

export default Card