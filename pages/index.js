import { Fragment } from 'react'
import GreenButton from '../components/buttons/GreenButton'
import LightButton from '../components/buttons/LightButton'
import Footer from '../components/layout/Footer'
import NavBar from '../components/layout/NavBar'

export default function Home () {
  return (
    <Fragment>
      <section className=' h-full w-full object-cover object-center relative'>
        <img
          src='/main.svg'
          className='w-full h-full object-cover object-top absolute -z-10'
          alt='photo'
        />
        {/* Navbar component is im[ported here] */}
        <NavBar />
        {/* Hero section start here the imaage and all the content is placed her */}
        <div className='flex w-[1280px] gap-4 max-w-5xl mx-auto flex-col sm:flex-row py-14'>
          <div className='h-full w-full sm:w-2/5 my-auto'>
            <div>
              <div>
                <h1 className='text-5xl font-bold text-darkGreen tracking-wide'>
                  Development <br></br> Company
                </h1>
              </div>
              <div className='mt-5'>
                <h1 className='text-darkGreen'>
                  Forward Thinking real estate developer, owner <br></br>and
                  investor with a reputation
                </h1>
              </div>
              <div className='mt-24 flex gap-3'>
                <GreenButton name='Services' />
                <LightButton name='About the company' />
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
      {/*Section after the header start here  */}
      <section className='h-full w-[1280px] max-w-5xl mx-auto flex flex-col '>
        <div className='mx-auto pt-28'>
          <h1 className='text-2xl font-bold text-darkGreen'>
            Innovative Execution
          </h1>
        </div>
        <div className='flex justify-around py-28'>
          <div className='space-y-3'>
            <img
              src='/icons/icon0.png'
              className='py-3 px-3 shadow-green-200 shadow-2xl bg-darkGreen'
            />
            <h1 className='text-darkGreen font-bold'>Feature Listing</h1>
            <span className='text-sm text-darkGreen'>
              Lorem ipsum sit amet dit ra <br></br> Lorem ipsum sit amet dit ra
            </span>
          </div>
          <div className='space-y-3'>
            <img src='/icons/icon0.png ' className='py-3 px-3 bg-darkGreen' />
            <h1 className='text-darkGreen font-bold'>Available Properties</h1>
            <span className='text-sm text-darkGreen'>
              Lorem ipsum sit amet dit ra <br></br> Lorem ipsum sit amet dit ra
            </span>
          </div>
          <div className='space-y-3'>
            <img src='/icons/icon0.png ' className='py-3 px-3 bg-darkGreen' />
            <h1 className='text-darkGreen font-bold'>In the News</h1>
            <span className='text-sm text-darkGreen'>
              Lorem ipsum sit amet dit ra <br></br> Lorem ipsum sit amet dit ra
            </span>
          </div>
        </div>
      </section>
      <section className='h-full bg-[#E1EBFA] py-10'>
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
      {/* Next section */}
      <section className='h-full bg-hero py-16'>
        <div className='w-[1280px] max-w-5xl mx-auto flex justify-evenly'>
          {/* First section of the flex row column */}
          <img src='/svgs/sv6.svg' className='h-80' />
          {/* First section of the flex row column */}

          <div className='h-full w-full sm:w-2/5 relative'>
            <a href='#' className='absolute -top-10 z-10 text-secondary'>
              About Us
            </a>
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
      {/* Next section */}
      <section className='h-full  py-32'>
        <div className='w-[1280px] max-w-5xl mx-auto flex justify-evenly relative'>
          <div className='h-full w-full sm:w-2/5 relative my-auto'>
            <a href='#' className='absolute -top-10 z-10 text-secondary'>
              Available Properties
            </a>
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
          {/* First section of the flex row column */}
          <div className='flex flex-col gap-5'>
            <div className='flex gap-5'>
              <img src='/svgs/sv7.svg' className='mt-20' />
              <img src='/svgs/sv8.svg' />
            </div>
            <div className='flex gap-5 justify-end mr-7'>
              <img src='/svgs/sv9.svg' className='-mt-5' />
              <img src='/svgs/sv10.svg' className='self-start' />
            </div>
          </div>
          {/* First section of the flex row column */}
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
          </div>
        </div>
      </section>

      {/* Next section */}
      <section className='h-full py-16'>
        <div className='w-[1280px] max-w-5xl mx-auto flex justify-evenly'>
          {/* First section of the flex row column */}
          <div className=' w-full'>
            <div className='text-start'>
              <h1 className='text-base  text-secondary'>Contact</h1>
              <h1 className='text-darkGreen font-bold text-xl'>Get In Touch</h1>
            </div>
            {/* Sub div one */}
            <div className='space-y-12 mt-20 pl-3'>
              <div className='flex gap-5 '>
                <img src='/svgs/sv17.svg' className=' items-end bg-btFormColor px-3' />
                <div className='flex flex-col '>
                  <span>Tel</span>
                  <span>708-790-0000</span>
                </div>
              </div>
              {/* Sub div one */}
              <div className='flex gap-5'>
                <img src='/svgs/sv17.svg' className='bg-btFormColor px-3' />
                <div className='flex flex-col'>
                  <span>Email</span>
                  <span>sales@buildit.site</span>
                </div>
              </div>
              {/* Sub div one */}
              <div className='flex gap-5'>
                <img src='/svgs/sv17.svg' className='bg-btFormColor px-3' />
                <div className='flex flex-col'>
                  <span>office</span>
                  <span>60 Minor Station St.<br></br>Fairport, NY 14450.</span>
                </div>
              </div>
            </div>
          </div>
          {/* First section of the flex row column */}

          <div className='h-full w-9/12 form-bg py-10 '>
            {/* Flex row start here */}
            <div class='flex  px-6 gap-3'>
              <div className='flex flex-col'>
                <label class='font-semibold block text-left text-xs' for=''>
                  Name
                </label>
                <input
                  class='border border-darkGreen hover:outline-none focus:ring-1 focus:ring-darkGreen
               h-5 w-full px-3 py-5 mt-2 rounded-md'
                  type='text'
                  placeholder=''
                />
              </div>
              <div className='flex flex-col'>
                <label class='font-semibold block text-xs text-left' for=''>
                  Email
                </label>
                <input
                  class='border border-darkGreen hover: outline-none focus:ring-1 mt-2 focus:ring-darkGreen
                h-5 w-full px-3 py-5  rounded-md'
                  type='text'
                  placeholder=' '
                />
              </div>
            </div>
            {/* end flex input */}
            <div className='px-6 mx-auto'>
              <label class='font-semibold block text-left text-xs' for=''>
                Subject
              </label>
              <input
                class='border border-darkGreen hover: outline-none focus:ring-1 focus:ring-darkGreen
               h-5 w-full px-3 py-5 mt-2 rounded-md'
                type='text'
                placeholder=''
              />
            </div>
            <div className='px-6 mx-auto mt-5'>
              <label class='font-semibold block text-left text-xs' for=''>
                Message
              </label>
              <textarea
                class='border border-darkGreen w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none'
                rows='4'
              ></textarea>
              <GreenButton name='Explore' className='btn--lg w-full mt-5' />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
