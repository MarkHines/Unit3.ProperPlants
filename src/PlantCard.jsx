import { useState } from "react"
 
const PlantCard = (props) => {
  //console.log(props)
  return (
    <>
      <section>
        <h2>{props.plantImg}</h2>
        <h3>{props.plantName}</h3>
        <button onClick={() => {props.setSelectedPlant(props.plantName)}}>Add to cart</button>
      </section>
    </>
    
  )
}

export default PlantCard