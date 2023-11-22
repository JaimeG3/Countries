import { Link } from 'react-router-dom';
//import { useDispatch,useLocation } from 'react';
//import "./Card.css"

const Card = ({ id, name, image }) => {
    
  return (
       
    <div className='card'>
    <Link to={`/detail/${id}`}>
                <h2 className='name'>{name}</h2>
                <img className="img" src={image} />
            <p ></p>
            </Link>
            </div>
  )
}

export default Card