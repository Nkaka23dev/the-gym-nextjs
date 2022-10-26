import { Fragment } from 'react'
import GreenButton from '../components/buttons/greenButton'


export default function Home() {
  return (
  <Fragment>
  <section  className=" h-full w-full object-cover object-center relative">   
    <img src="/main.svg" 
    className="w-full h-full object-cover object-top absolute mix-blend-overlay" alt="photo"/>
    {/* Hero section start here the imaage and all the content is placed her */}
     <div className="flex w-[1280px] gap-4 max-w-5xl mx-auto flex-col sm:flex-row py-32">
      <div className='h-full w-full sm:w-2/5 my-auto'>
      <div>
      <div >
        <h1 className='text-5xl font-bold text-darkGreen '>Development <br></br> Company</h1>
       </div>
       <div className='mt-5'>
        <h1 className='text-darkGreen'>Forward Thinking real estate developer, owner <br></br>and investor with a reputation</h1>
       </div>
       <div className='mt-24 flex gap-3'>
        <GreenButton name="Services"/>
        <GreenButton name="About the company"/>
       </div>
      </div>
      </div>
      <div className=' h-full w-3/5'>
       <div className='flex  items-end justify-between'>
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
       <div className='flex items-start gap-5 mt-5'>
       
        <div>
          <img src='/himage/headerimg2.png' />
        </div>
        <div>
          <img src='/himage/headerimg3.png' />
        </div>
       </div>
      </div>
     </div>
      {/*Hello Image ends here  */}
 </section> 
 <section className='h-32'>

 </section>
  </Fragment> 
 
  )
}
