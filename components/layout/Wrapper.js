import { Children, Fragment } from "react" 
import Footer from "./footer"

function Wrapper (props) {
  return (
   <Fragment>
     {props.children}
     <Footer/>
   </Fragment>
  )
}

export default Wrapper
