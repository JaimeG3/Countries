import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import{detail} from "../../redux/actions/actions"
import { useParams } from 'react-router-dom';
import style from "./detail.module.css"
function Details() {
    const { idKey } = useParams();
    const dispatch = useDispatch();
    const country = useSelector((state) => state?.detail)

    useEffect(() => {
        dispatch(detail(idKey));
    }, [idKey])

    return (
        <div className='back'>
            <div className='detailsContainer' >
                <img src={country?.image} alt={country?.name}/>
                <h2>ID: {country?.id}</h2>
                <h2>Nombre: {country?.name}</h2>
                <h2>continente: {country?.continente}</h2>
                <h2>capital: {country?.capital}</h2>
                <h2>subregion: {country?.subregion}</h2>
                <h2>area: {country?.area}</h2>
                <h2>poblacion: {country?.poblacion}</h2>
                <h2>actividad: {country?.actividad}</h2>
            </div>
         
        </div>
    )
}

export default Details