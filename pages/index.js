import { Fragment } from 'react'
import GreenButton from '../components/buttons/greenButton'
import LightButton from '../components/buttons/lightButton'
import Footer from '../components/layout/footer'
import NavBar from '../components/layout/navBar'


export default function Home() {
  return (
  <Fragment>
  <section  className=" h-full w-full object-cover object-center relative">   
    <img src="/main.svg" 
    className="w-full h-full object-cover object-top absolute -z-10" alt="photo"/>
    {/* Navbar component is im[ported here] */}
    <NavBar/>
    {/* Hero section start here the imaage and all the content is placed her */}
     <div className="flex w-[1280px] gap-4 max-w-5xl mx-auto flex-col sm:flex-row py-14">
      <div className='h-full w-full sm:w-2/5 my-auto'>
      <div>
      <div >
        <h1 className='text-5xl font-bold text-darkGreen tracking-wide'>Development <br></br> Company</h1>
       </div>
       <div className='mt-5'>
        <h1 className='text-darkGreen'>Forward Thinking real estate developer, owner <br></br>and investor with a reputation</h1>
       </div>
       <div className='mt-24 flex gap-3'>
        <GreenButton name="Services"/>
        <LightButton name="About the company"/>
       </div>
      </div>
      </div>
      {/* This is the end of left div on the homepage header section */}
      {/* The right dev on the header with all images star here.............. */}
      <div className=' h-full w-3/5'>
       <div className='flex  items-end justify-between'>
        {/* first col-div with 3 images */}
       <div>
          <img src='/himage/headerimg3.png' />
        </div>
        <div>
          <img src='/himage/headerimg2.png' />
        </div>
        <div>
          <img src='/himage/headerimg4.png' />
        </div>
       </div>
       {/* Second flex-low div of images start here */}
       <div className='flex items-start gap-5 mt-5'>
       
        <div>
          <img src='/himage/headerimg5.png' className='h-64' />
        </div>
        <div>
          <img src='/himage/headerimg6.png' className='h-36' />
        </div>
       </div>
      </div>
      {/*left div with all images ends here  */}
     </div>
   
 </section> 
 <section className='h-32'>
  <h1></h1>
 </section> 
 <Footer/>
  </Fragment> 
 
  )
}
