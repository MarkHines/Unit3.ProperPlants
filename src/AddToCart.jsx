const AddToCart = (props) => {
  console.log(props)
  return (
    <section className="cart">
      <h2 >{props.selectedPlant}</h2>

      {/* Checking for undefined use the ? before dot notation*/}
      <h2>{props.foundPlant}</h2>
      <button> - </button>
      <p>0</p>
      <button> + </button>
    </section>
  )
}

export default AddToCart