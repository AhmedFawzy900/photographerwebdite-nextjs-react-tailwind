import Image from 'next/image'
import React from 'react'
import {FaInstagram} from 'react-icons/fa'

const InstegramImg = ({socialTag}) => {
  return (
    <div className='relative'>
      <Image src={socialTag} alt='/' className='w-full h-full'
      layout='responsive' />
      <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0
      hover:bg-black/50 group' >
        <p className='text-gray-300 hidden group-hover:block'> <FaInstagram size={30} /> </p>
      </div>
    </div>
  )
}

export default InstegramImg
