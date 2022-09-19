import Image from 'next/image'
import React from 'react'
import varcel from '../../public/favicon.ico'
const Footer = () => {
  return (
    <div className='bg-[#3b3b3b] h-[100px] text-white flex flex-col justify-center 
    items-center'>
      <div className='flex'>

        <h2 className='text-3xl font-bold '>
            Made By <span className='attia mr-2'>Ahmed Attia</span>    
        </h2>
        <Image src={varcel} alt="/" width='35' height='30' />
      </div>
        <p className='font-bold text-[#999]'>using Nextjs & Reactjs & TailwindCss</p>
    </div>
  )
}

export default Footer