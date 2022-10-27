import Link from 'next/link'

function Footer (props) {
  return (
    <section className='h-full bg-darkGreen py-16'>
      <div className='w-[1280px] max-w-5xl mx-auto h-40 text-white flex justify-between '>
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
            <li>
              {' '}
              Service1{' '}
              <Link href=''>
                <a></a>
              </Link>
            </li>
            <li>
              {' '}
              Service2{' '}
              <Link href=''>
                <a></a>
              </Link>
            </li>
            <li>
              {' '}
              Service3{' '}
              <Link href=''>
                <a></a>
              </Link>
            </li>
            <li>
              {' '}
              Service4{' '}
              <Link href=''>
                <a></a>
              </Link>
            </li>
          </ul>
          <div>
            <div></div>
            <div className='flex gap-4'>
              <img
                className='py-1 px-1 rounded-md cursor-pointer bg-primaryColor'
                src='/facebook.svg'
              />
              <img
                className='py-1 px-1 rounded-md cursor-pointer bg-primaryColor'
                src='/instgram.svg'
              />
            </div>
          </div>
        </div>
        {/* Next Div */}
        <div className='flex flex-col justify-between '>
          <ul className='text-sm space-y-2'>
            <li className='hover:underline hover:text-lg'>
              {' '}
              <Link href='/about'>
                <a>About Us</a>
              </Link>{' '}
            </li>
            <li className='hover:underline hover:text-lg'>
              {' '}
              <Link href='/services'>
                <a>Services</a>
              </Link>
            </li>
            <li className='hover:underline hover:text-lg'>
              {' '}
              <Link href='/projects'>
                <a>Projects </a>
              </Link>
            </li>
            <li className='hover:underline hover:text-lg'>
              {' '}
              <Link href='/contact'>
                <a> Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Next Div */}
        <div className='flex flex-col justify-between'>
          <ul className='text-sm space-y-2'>
            <li>
              {' '}
              Get In T{' '}
              <Link href=''>
                <a></a>
              </Link>
              ouch
            </li>
            <li>
              {' '}
              60 Manor{' '}
              <Link href=''>
                <a></a>
              </Link>{' '}
              Station st. Fairport
            </li>
            <li>
              {' '}
              NY 14145{' '}
              <Link href=''>
                <a></a>
              </Link>
              0
            </li>
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
