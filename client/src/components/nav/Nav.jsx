import Search from "../searchbar/SearchBar"
import { useLocation,useNavigate } from 'react-router-dom'
import { useEffect} from 'react'
import {useDispatch } from 'react-redux'
import {allCountrys} from "../../redux/actions/actions"
import style from "./Nav.module.css"
function Nav() {
    const pathname = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(allCountrys());
      }, [dispatch]);

    const navigateChange = () => {
        navigate("/home")
    }

    const navigateForm = () => {
      navigate('/form')
  }
  return (
    <div className='nav'>
    <h1>search within the world</h1>
    <div className='SearchBar'> {location.pathname === '/home' && <Search />}</div>
    <div className='buttons'>
    {location.pathname !== '/home' && location.pathname !== '/' && <button onClick={navigateChange} >home</button>}
    {location.pathname === '/home' && location.pathname !== '/' && <button onClick={navigateForm} >form</button>}
    </div>
    </div>
  )
}

export default Nav