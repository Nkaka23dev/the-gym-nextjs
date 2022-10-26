function LightButton(props) {
    return (
      <button className='bg-lightColor btn text-green-700
       hover:translate-y-1  shadow-2xl'>
        {props.name}
      </button>
    )
  }
  
  export default LightButton
  