import { useNavigate } from 'react-router-dom'
import style from "./landing.module.css"
function Landing() {
    const navigate = useNavigate()
    const fNavigate = () => {
        navigate("/home")
    }
  return (
    <>
    <div className= {style.container}>
      <div className= { style.image}>
      <h1 className= { style.hl} >bienvenidos</h1>
      <button  onClick={fNavigate}>ingreso al mundo</button>
    </div>
    </div>
    </>
  )
}

export default Landing