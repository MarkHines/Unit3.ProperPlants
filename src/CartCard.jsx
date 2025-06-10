import PLANTS from "./data.js"
import AddToCart from "./AddToCart.jsx"

const CartCard = (props) => {
  //console.log(props);
  //console.log(PLANTS);

  const foundPlant = PLANTS.find((plant) => {
    //console.log(plant);
    return plant.name === props.selectedPlant;
  });
  //console.log(foundPlant);
  const nameOfPlants = foundPlant ? foundPlant.name : [];
  //console.log(nameOfPlants)
  return (
    <AddToCart 
      selectedPlant={props.selectedPlant}
      foundPlant={foundPlant?.image}
    />
  )
}

export default CartCard