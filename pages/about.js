import { Fragment } from "react";  
import GreenButton from '../components/GreenButton'; 
import NavBar from "../components/NavBar";
import LightButton from '../components/LightButton' 

function About() {
    return (
      <Fragment>
      <div className='overflow-x-hidden'>
        <section className=' h-full w-full object-cover object-center relative'>
          <img
            src='/svgs/svbg.svg'
            className='w-full h-full object-cover object-top absolute -z-10'
            alt='photo'
          />
          {/* Navbar component is im[ported here] */}
          <NavBar />
          {/* Hero section start here the imaage and all the content is placed her */}
          <div className='w-[1280px] max-w-5xl mx-auto flex justify-evenly pt-20 pb-60'>
            {/* First section of the flex row column */}
            <div className='relative'>
              <img src='/svgs/sv18.svg' className='' />
              <img
                src='/svgs/sv19.svg'
                className='absolute top-64 -right-20 '
              />
            </div>

            {/* First section of the flex row column */}

            <div className='h-full w-full sm:w-2/5 relative my-auto ml-20 '>
              <div>
              <div className='text-start pb-5'>
              <h1 className='text-base  text-secondary cursor-pointer'>About Us</h1>
            </div>
                <div>
                  <h1 className='text-3xl font-bold text-darkGreen tracking-wide'>
                    Owner and Investor with a reputation
                  </h1>
                </div>
                <div className='mt-5'>
                  <h1 className='text-darkGreen leading-7'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero modi quis expedita, voluptatem sit minima quas
                    voluptatum neque quae deleniti. Cumque vero voluptatum
                    inventore soluta suscipit a ipsa exercitationem beatae,
                    reiciendis dicta veniam vitae magni ipsam voluptate maiores
                    est saepe.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Next Section  */}
        <section className='h-full pb-10 pt-20'>
          <div className='w-[1280px] max-w-5xl mx-auto'>
            {/* First Division */}
            <div className='text-center'>
              <h1 className='text-base  text-secondary'>Statistics</h1>
              <h1 className='text-darkGreen font-bold text-2xl'>
                Development In Numbers
              </h1>
            </div>
          </div>
        </section>
            {/*Section after the header start here  */}
      <section className='h-full w-[1280px] max-w-5xl bg-[#E1EBFA] shadow-2xl shadow-[#E1EBFA] mt-10 mx-auto flex flex-col '>
        <div className='flex justify-around py-10'>
          <div className='flex justify-center gap-3 items-center'>
            <img
              src='/icons/Icon0.png'
              className='py-3 px-3 h-10 shadow-green-200 shadow-2xl bg-darkGreen'
            />
           <div>
           <h1 className='text-darkGreen font-bold'>200</h1>
            <span className='text-sm text-darkGreen'>
              Lorem 
            </span>
           </div>
          </div>
          <div className='space-y-3 flex'>
            <img
              src='/icons/Icon0.png'
              className='py-3 px-3 h-10 shadow-green-200 shadow-2xl bg-darkGreen'
            />
           <div>
           <h1 className='text-darkGreen font-bold'>Feature </h1>
            <span className='text-sm text-darkGreen'>
              Lorem 
            </span>
           </div>
          </div>
          <div className='space-y-3 flex'>
            <img
              src='/icons/Icon0.png'
              className='py-3 px-3 h-10 shadow-green-200 shadow-2xl bg-darkGreen'
            />
           <div>
           <h1 className='text-darkGreen font-bold'>Feature </h1>
            <span className='text-sm text-darkGreen'>
              Lorem 
            </span>
           </div>
          </div>
        </div>
      </section>

      <section className='h-full  py-10'>
        <div className=' w-[1280px] max-w-5xl mx-auto'>
          <hr className='bg-darkGreen'></hr>
          <div className='flex py-5 justify-evenly w-3/5 mx-auto'>
            <img src='/svgs/sv1.svg' />
            <img src='/svgs/sv2.svg' />
            <img src='/svgs/sv3.svg' />
            <img src='/svgs/sv4.svg' />
            <img src='/svgs/sv5.svg' />
          </div>
          <hr className='bg-darkGreen'></hr>
          <hr className='bg-darkGreen'></hr>
          <div></div>
        </div>
      </section>

       {/* Next Section  */}
       <section className='h-full bg-hero pb-10 pt-20'>
        <div className='w-[1280px] max-w-5xl mx-auto'>
          {/* First Division */}
          <div className='text-center'>
            <h1 className='text-base  text-secondary'>Socials</h1>
            <h1 className='text-darkGreen font-bold text-xl'>On Instgram</h1>
          </div>

          {/* Second division */}
          <div className='mt-10 flex flex-col gap-10'>
            <div className='flex gap-5'>
              <img src='/svgs/sv11.svg' className='-mt-5' />
              <img src='/svgs/sv12.svg' className='-mt-5' />
              <img src='/svgs/sv13.svg' className='-mt-5' />
            </div>
            <div className='flex gap-5'>
              <img src='/svgs/sv14.svg' className='-mt-5' />
              <img src='/svgs/sv15.svg' className='-mt-5' />
              <img src='/svgs/sv16.svg' className='-mt-5' />
            </div>
            <div className='flex gap-5'>
              <img src='/svgs/sv14.svg' className='-mt-5' />
              <img src='/svgs/sv15.svg' className='-mt-5' />
              <img src='/svgs/sv16.svg' className='-mt-5' />
            </div>
          </div>
        </div>
      </section>
      <section className='h-full  py-10'>
        <div className=' w-[1280px] max-w-5xl mx-auto'>
          <hr className='bg-darkGreen'></hr>
          <div className='flex py-5 justify-between w-4/5 mx-auto'>
            <h className="text-2xl text-darkGreen font-bold">Call Us</h>
            <div className='flex gap-3'>
               <GreenButton name='call' /> 
               <LightButton name='Email' />
            </div>
         
          </div>
          <hr className='bg-darkGreen'></hr>
          <hr className='bg-darkGreen'></hr>
          <div></div>
        </div>
      </section>
      </div>
    </Fragment>
    )
}

export default About;