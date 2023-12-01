import {allCountrys} from "../../redux/actions/actions"
import { useEffect,useState} from 'react'
import Cards from '../../components/cards/Cards'
import Filter from "../../components/filter/Filter"
import Paginado from "../../components/paginado/paginado"
import {useDispatch, useSelector } from 'react-redux'
function Home () {
    const dispatch = useDispatch();
    const countrys = useSelector((state) => state?.countries)

    const COUNTRY_PER_PAGE = 12;
    const totalCountrys = countrys?.length 
    const totalPage = Math.ceil(totalCountrys / COUNTRY_PER_PAGE);
    const [currentPage, setCurrentPage] = useState(0);
  
    const startCountry = currentPage * COUNTRY_PER_PAGE;
    const endCountry = startCountry + COUNTRY_PER_PAGE;
    const countryToDisplay = countrys?.slice(startCountry, endCountry);

  useEffect(() => {
    dispatch(allCountrys());
  }, [dispatch]);

  

  useEffect(() => {
    setCurrentPage(0);
  }, [countrys]);

    return (
        <>
        <div>  
            <Filter  totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage}></Filter>
            <Paginado totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Cards countrys={countryToDisplay} />
        {countrys.length === 0 && <p>No se encontraron países o actividades. ¡Intenta con diferentes filtros!</p>}
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