
import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { search,allCountrys, filterCards,handleError} from '../../redux/actions/actions' 
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
          navigate("/home")
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
    }

    useEffect(() => {
        setName('');
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
        <div>
            <input  type="search" onChange={handleName} value={name} placeholder="search country"/> 
            <button onClick={() => { handleOnclick(name); setName(name) }}>search</button>
            {error && <p>no se encontro ningun pais</p>}
            <button onClick={reset}>reset</button>
            <button onClick ={all}>All</button>
        </div>
    )

}

export default Search;