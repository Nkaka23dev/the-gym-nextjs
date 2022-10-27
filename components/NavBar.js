import Link from 'next/link'
import GreenButton from './GreenButton'

import React from 'react'

export default function NavBar () {
  return (
    <div className='h-full w-[1280px] max-w-5xl mx-auto pt-14'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          <a className='flex items-center gap-2'>
            <div className='bg-customGreen h-9 w-9 rounded-full'></div>
            <h1 className='font-bold text-darkGreen'>Buildit</h1>
          </a>
        </Link>
        <ul className='flex gap-7'>
          <li>
            {' '}
            <Link href='/about'>
              <a className='text-green-700 hover:underline hover:text-lg'>
                About
              </a>
            </Link>
          </li>
          <li>
            {' '}
            <Link href='/services'>
              <a className='text-green-700 hover:underline hover:text-lg'>
                Services
              </a>
            </Link>{' '}
          </li>
          <li>
            {' '}
            <Link href='/projects'>
              <a className='text-green-700 hover:underline hover:text-lg'>
                Projects
              </a>
            </Link>{' '}
          </li>
          <li>
            {' '}
            <Link href='/contact'>
              <a className='text-green-700 hover:underline hover:text-lg'>
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <Link href='/projects'><a><GreenButton name='Need a project?' /> </a></Link>
      </div>
    </div>
  )
}
