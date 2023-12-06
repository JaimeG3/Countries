import Search from "../searchbar/SearchBar"
import { useLocation,useNavigate } from 'react-router-dom'
import { useEffect,useState} from 'react'
import {useDispatch,useSelector } from 'react-redux'
import {allCountrys,navBack} from "../../redux/actions/actions"
import style from "./Nav.module.css"
function Nav() {
    const pathname = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const back = useSelector((state) => state?.filter);


    useEffect(() => {
        dispatch(allCountrys());
      }, [dispatch]);

    const navigateChange = () => {
        navigate("/home")
    }

    const navigateForm = () => {
      navigate('/form')
  }

    const navigateBack = (event) => {
       dispatch(navBack(event));
       navigate("/home")
      
    }
  return (
    <div className= {style.nav}>
    {location.pathname === '/home' && <h1 className={style.h1}>Search Within the World</h1>}
    <div className={style.searchBar}> {location.pathname === '/home' && <Search />}</div>
    <div className={style.buttons}>
    {location.pathname !== '/home' && location.pathname !== '/' && <button onClick={navigateChange} >home</button>}
    {location.pathname !== '/home' && location.pathname !== '/' && <button onClick={navigateBack} >back</button>}
    {location.pathname === '/home' && location.pathname !== '/' && <button onClick={navigateForm} >form</button>}
    </div>
    </div>
  )
}

export default Nav