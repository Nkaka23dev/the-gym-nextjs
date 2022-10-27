import { Children, Fragment } from "react"  
import Footer from './Footer'

function Wrapper (props) {
  return (
   <Fragment>
     {props.children}
     <Footer/>
   </Fragment>
  )
}

export default Wrapper
