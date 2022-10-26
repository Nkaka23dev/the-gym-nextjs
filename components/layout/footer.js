function Footer (props) {
  return (
      <section className='h-full bg-darkGreen py-16'>
        <div className='w-[1280px] max-w-[80%] mx-auto h-40 text-white flex justify-between '>
          <div className='flex flex-col justify-between h-full'>
            <div>
              <h1 className='text-white font-bold tracking-wider'>BuildIt</h1>
              <p className='text-sm mt-3'>Development company, 2022</p>
            </div>
            <div>
              <p className='text-sm mt-3'>Site design - Alarm</p>
            </div>
          </div>
          {/* Next Div */}
          <div className='flex flex-col justify-between '>
            <ul className='text-sm space-y-2'>
              <li>Service1</li>
              <li>Service2</li>
              <li>Service3</li>
              <li>Service4</li>
            </ul>
            <div>
              <div>

              </div>
              <div className='flex gap-4'>
                <img className='py-1 px-1 rounded-md cursor-pointer bg-primaryColor'  src="/facebook.svg" />
                <img className='py-1 px-1 rounded-md cursor-pointer bg-primaryColor' src="/instgram.svg" />
              </div>
            </div>
          </div>
          {/* Next Div */}
          <div className='flex flex-col justify-between '>
            <ul className='text-sm space-y-2'>
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          
          </div>
          {/* Next Div */}
          <div className='flex flex-col justify-between'>
            <ul className='text-sm space-y-2'>
              <li>Get In Touch</li>
              <li>60 Manor Station st. Fairport</li>
              <li>NY 141450</li>
             
            </ul>
            <div>
              <div className='flex flex-col'>
                <h1>708-790-0000</h1>
                <h1>sales@buildit.sales</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Footer
