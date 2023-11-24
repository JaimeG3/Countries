import {useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { create,allCountrys } from "../../redux/actions/actions"
import validation from './validation.js';
import styles from "./Form.module.css"
import Select from "../../components/select/select"

function Form () {
  const navigate = useNavigate()
const [activity,setActivity] = useState({ 
    name:"",
    dificultad:"",
    duracion:"",
    temporada:"",
    asPais:[],
})
const [errors, setErrors] = useState({})
const dispatch = useDispatch()
const countries = useSelector((state) => state?.countries)

useEffect(() => {
    dispatch(allCountrys());
  }, [dispatch]);

const handleChange = (event) => {
  if (event.target.name === 'Pais') {
    const selectedCountry = Array.from(event.target.selectedOptions, (option) => option.value);
    setActivity({
      ...activity,
      asPais: selectedCountry,
    });
  } else {
    setActivity({
      ...activity,
      [event.target.name]: event.target.value,
    });
  }

  setErrors(validation({
    ...activity,
    [event.target.name]: event.target.value,
  }));
};
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(create(activity));
  setActivity("")
  navigate("/home")
}

  return (
    <>
    <div className={styles.backGround}>
    <form onSubmit={handleSubmit} className={styles.img} >
    <h1>crea tu actividad</h1>
    <input type="text" name="name" placeholder="Nombre" onChange={handleChange} />
    <span> {errors.name }</span>
    <p></p>
    <input type="number" name="dificultad" placeholder="dificultad" onChange={handleChange} />
    <input type="number" name="duracion" placeholder="duracion" onChange={handleChange} />
    <span>{errors.hp}</span>
    <input type="text" name="temporada" placeholder="temporada" onChange={handleChange} />
    <span>{errors.attack}</span>
      <label>tipos:
        <select
        multiple
        name='pais'
        value={activity.asPais}
        onChange={handleChange} >
          {countries.map(types => <option name={types.name} key={types.name} value={types.name}>{types.name}</option>)}
        </select>
      </label>
    {errors.types && <p>{errors.types}</p>}
    {Object.keys(errors ).every((key) => !errors[key]) && <button type='submit' onChange={handleSubmit}>Capturar</button>}
</form>
</div>
</>
  )
}

export default Form