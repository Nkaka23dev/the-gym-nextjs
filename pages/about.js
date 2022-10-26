import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import NavBar from '../components/layout/NavBar';
import GreenButton from '../components/buttons/GreenButton';
import LightButton from '../components/buttons/LightButton';

function About() {
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
        <div className='w-[1280px] max-w-5xl mx-auto flex justify-evenly py-40'>
          {/* First section of the flex row column */}
          <img src='/svgs/sv18.svg' className='relative' />
          <img src='/svgs/sv19.svg' className='absolute bottom-4 ' />
          {/* First section of the flex row column */}

          <div className='h-full w-full sm:w-2/5 relative'>
            <div>
              <div>
                <h1 className='text-3xl font-bold text-darkGreen tracking-wide'>
                  Owner and Investor with a reputation
                </h1>
              </div>
              <div className='mt-5'>
                <h1 className='text-darkGreen leading-7'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  modi quis expedita, voluptatem sit minima quas voluptatum
                  neque quae deleniti. Cumque vero voluptatum inventore soluta
                  suscipit a ipsa exercitationem beatae, reiciendis dicta veniam
                  vitae magni ipsam voluptate maiores est saepe.
                </h1>
              </div>
              <div className='mt-10 flex gap-3'>
                <GreenButton name='Explore' className='btn--lg' />
              </div>
            </div>
          </div>
        </div>
      </section>
      </Fragment>
    )
}

export default About;