import { useNavigate } from 'react-router-dom'
import style from "./landing.module.css"
function Landing() {
    const navigate = useNavigate()
    const fNavigate = () => {
        navigate("/home")
    }
  return (
    < div className= {style.image}>
      <div className= {style.container}>
    <h1  >bienvenidos</h1>
    <button  onClick={fNavigate}>ingreso al mundo</button>
    </div>
    </div>
  )
}

export default Landing