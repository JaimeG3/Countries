
import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { search,allCountrys, filterCards,handleError,clearError} from '../../redux/actions/actions'
import style from "../searchbar/searchBar.module.css" 
function Search () {
    const [name, setName] = useState("");
    const filtro = useSelector((state) => state?.countries);
    const error = useSelector((state) => state?.error);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    //const search = useSelector((state)=>state?.searchPoke)

    const handleSearch = (name) => {
        dispatch(search(name));
      };
    
    const handleOnclick = (name) => {
        try{
            handleSearch(name);
        } catch (error) {
            dispatch(handleError(error.message));
          }
    }
        
    const handleName = (event) => {
        setName(event.target.value)
    }
  
    const reset = () => { 
      setName('');
    }

  
    const all = () => {
      console.log("prueba")
      dispatch(allCountrys());
      dispatch(filterCards(''));
      dispatch(clearError());
    }

    useEffect(() => {
        setName('');
        dispatch(clearError());
      }, [filtro]);
    
  /*
    const clean = () => {
     dispatch(borrar(name));
     setName("")
      navigate("/home")
    }

    <button  onClick={() => { clean(name); setName(name) }}>delete</button>
    */
  
    return (
      <div className={style.searchContainer}>
      <input type="search" onChange={handleName} value={name} placeholder="Search Country" />
      <button onClick={() => { handleOnclick(name); setName(name) }}>Search</button>
      {error && <p>No se encontró ningún país</p>}
      <button onClick={reset}>Reset</button>
      <button onClick={all}>All</button>
    </div>
    )

}

export default Search;