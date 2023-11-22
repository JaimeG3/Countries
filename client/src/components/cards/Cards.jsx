//import React from 'react'
import Card from '../card/Card'
//import "./cards.css"
const Cards = ({ countrys }) => {
    return (
        <div>
            {countrys.map(({ id, name, image, continente, capital,subregion, area,poblacion, actividad }) => {
                return (
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        continente={continente}
                        capital={capital}
                        subregion={subregion}
                        area={area}
                        poblacion={poblacion}
                        actividad={actividad}
                    />
                )
            })
            }
        </div>
    )
}
  
 export default Cards;