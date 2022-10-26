import { Children, Fragment } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"

function Wrapper (props) {
  return (
   <Fragment>
     {props.children}
     <Footer/>
   </Fragment>
  )
}

export default Wrapper
