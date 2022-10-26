import { Fragment } from "react"; 
import NavBar from '../components/NavBar' 

export default function Project() {
    return (
        <Fragment>
        <section className=' h-full w-full object-cover object-center relative'>
        <img
          src='/svgs/svbg.svg'
          className='w-full h-full object-cover object-top absolute -z-10'
          alt='photo'
        />
        {/* Navbar component is im[ported here] */}
        <NavBar />
        {/* Hero section start here the imaage and all the content is placed her */}
        <div className='w-[1280px] max-w-5xl mx-auto y py-40'>
          <div className='h-full w-full  relative'>
            <div>
              <div className="flex justify-center">
               <h1 className="text-2xl text-darkGreen font-bold">Project Page To come......</h1>
            </div>
          </div>
        </div>
        </div>
      </section>
      </Fragment>
    )
}
