import PLANTS from "./data.js"
import PlantCard from "./PlantCard.jsx";
import CartCard from "./CartCard.jsx";
import { useState } from "react";

const App = () => {
  const [selectedPlant, setSelectedPlant] = useState(``)
  return (
    <>
      
        <h1>Proper Plants</h1>
      {/* {console.log(PLANTS)} */}
      <h2 className="plants-header">Plants</h2>
      <section className= "plant-cards">
      {
        PLANTS.map((plant) => {
          //console.log(plant)
          return (
            <PlantCard 
              plantName={plant.name}
              plantImg={plant.image}
              setSelectedPlant={setSelectedPlant}
            />

            
          )
        })
      }
      </section>
      <section>
        <h2>Cart</h2>
        {/* {console.log(selectedPlant)} */}
        <CartCard 
          selectedPlant={selectedPlant}
          />
      </section>
    </>
  );
  
}
 export default App