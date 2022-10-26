function GreenButton (props) {
  return (
    <button
      className={`
      transition ease-in-out delay-200 shadow-2xl 
      btn-custom-bg btn text-lightColor
      hover:translate-y-1 hover:scale-110 ${props.className}`}
    >
      {props.name}
    </button>
  )
}

export default GreenButton
