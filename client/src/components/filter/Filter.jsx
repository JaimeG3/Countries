import {  useDispatch,useSelector } from "react-redux";
import { getActivity, filterCards,filterActivity,orderAyZ,orderPoblacion} from "../../redux/actions/actions";
import Select from "../select/Select.jsx";
import { useEffect } from "react";
import style from "./filter.module.css"

function Filter() {
    const allActivity = useSelector((state) => state?.activity);
    const allContinent = useSelector((state) => state?.allCountries);
    const dispatch = useDispatch();

    const uniqueContinents = [...new Set(allContinent.map(country => country.continente))];
  
    useEffect(() => {
      dispatch(getActivity());
    }, [dispatch]);
  
    const handleChange = (event) => {
      const result = event.target.value;
      console.log(result);
      dispatch(filterCards(result));
    };
  
    const allTypes = (event) => {
      const result = event.target.value;
      console.log(result)
      dispatch(filterActivity(result));
    };

    const handlerOrder = (event) => {
        dispatch(orderAyZ(event.target.value));
    }

    const handleAttack = (event) => {
        dispatch(orderPoblacion(event.target.value))
    }
  
    return (
      <div className={style.all}>
      
      <Select
  name="FilterContinent"
  options={[
    { value: '', label: 'Select Continent' },
    ...uniqueContinents.map((continent) => ({
    value: continent,
    label: continent,
  })) ]} 
  onChange={handleChange}
/>


<Select
   name="filterActivity"
   options={[
     { value: '', label: 'Select Activity' }, 
     ...allActivity.map((type) => ({
       value: type.name,
       label: type.name,
     }))
   ]}
  onChange={allTypes}
  
/>

<Select
name="orderAyZ"
options={[
    { value: "todos", label: "todos" },
    { value: "A", label: "A-Z" },
    { value: "Z", label: "Z-A" },
  ]}
  onChange={handlerOrder}
>
</Select>
<Select
name="orderAttack"
options={[
    { value: "ataqueMin", label: "Min" },
    { value: "ataqueMax", label: "MAx" },
  ]}
  onChange={handleAttack}
>
</Select>
      </div>
    );
  }
  
  export default Filter;