import Search from "../searchbar/SearchBar"
import { useLocation,useNavigate } from 'react-router-dom'
import { useEffect,useState} from 'react'
import {useDispatch,useSelector } from 'react-redux'
import {allCountrys} from "../../redux/actions/actions"
import style from "./Nav.module.css"
function Nav() {
    const pathname = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const back = useSelector((state) => state?.allCountrys);


    useEffect(() => {
        dispatch(allCountrys());
      }, [dispatch]);

    const navigateChange = () => {
        navigate("/home")
    }

    const navigateForm = () => {
      navigate('/form')
  }

    const navigateBack = () => {
        navigate("/home")
    }
  return (
    <div className='nav'>
    <h1>search within the world</h1>
    <div className='SearchBar'> {location.pathname === '/home' && <Search />}</div>
    <div className='buttons'>
    {location.pathname !== '/home' && location.pathname !== '/' && <button onClick={navigateChange} >home</button>}
    {location.pathname !== '/home' && location.pathname !== '/' && <button onClick={navigateBack} >back</button>}
    {location.pathname === '/home' && location.pathname !== '/' && <button onClick={navigateForm} >form</button>}
    </div>
    </div>
  )
}

export default Nav