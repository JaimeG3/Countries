import { Link } from 'react-router-dom';
//import { useDispatch,useLocation } from 'react';
import style from "./Card.module.css"

const Card = ({ id, name, image ,continente}) => {
    
  return (
       
    <div className={style.card}>
    <Link to={`/detail/${id}`}>
                <h2 className={style.name}>{name}</h2>
                <img className={style.img} src={image} />
                <h3 className={style.continente}>{continente}</h3>
            <p ></p>
            </Link>
            </div>
  )
}

export default Card