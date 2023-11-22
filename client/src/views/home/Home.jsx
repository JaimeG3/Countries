import {allCountrys} from "../../redux/actions/actions"
import { useEffect} from 'react'
import Cards from '../../components/cards/Cards'
import {useDispatch, useSelector } from 'react-redux'
function Home () {
    const dispatch = useDispatch();
    const countrys = useSelector((state) => state?.countries)

  useEffect(() => {
    dispatch(allCountrys());
  }, [dispatch]);

    return (
        <>
        <div>  
        <Cards countrys={countrys} />
        </div>        
        </>

    )

}

export default Home
/*
{countrys ? (
    <Cards countrys={countrys} />
  ) : (
    <p>Cargando países...</p>
  )}
  */