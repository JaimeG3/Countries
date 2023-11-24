
import {useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { search,allCountrys, filterCards} from '../../redux/actions/actions' 
function Search () {
    const [name, setName] = useState("");
    const filtro = useSelector((state) => state?.filter);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    //const search = useSelector((state)=>state?.searchPoke)
    
    const handleOnclick = (name) => {
          dispatch(search(name));
          navigate("/home")
        
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
            <button onClick={reset}>reset</button>
            <button onClick ={all}>All</button>
        </div>
    )

}

export default Search;