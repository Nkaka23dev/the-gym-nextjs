import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>
      <div className='w-[1280px]  max-w-4xl mx-auto bg-green-200 flex'>
       <p className='text-red-700 text-3xl mx-auto'> hello From next JS</p>
       <p className='text-red-700 text-3xl mx-auto'> hello From next JS</p>
      </div>
    </Fragment>
  )
}
