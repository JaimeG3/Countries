import { Link } from 'react-router-dom';
//import { useDispatch,useLocation } from 'react';
import style from "./Card.module.css"

const Card = ({ id, name, image }) => {
    
  return (
       
    <div className={style.card}>
    <Link to={`/detail/${id}`}>
                <h2 className='name'>{name}</h2>
                <img className={style.img} src={image} />
            <p ></p>
            </Link>
            </div>
  )
}

export default Card