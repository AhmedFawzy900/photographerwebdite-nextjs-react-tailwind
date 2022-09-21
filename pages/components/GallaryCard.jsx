import Image from 'next/image'
import React from 'react'
import CardsData from './CardsData'
const GallaryCard = () => {
  return (
    <div className='relative flex justify-center items-center flex-wrap  '>
      {CardsData.map((item) => {
        return (
        <div key={item.id} className='w-[400px] p-5 bg-white my-2 h-[350px] mx-2 shadow-md hover:shadow-lg'>
           <div className=''>
            <Image src={item.image} alt='/' className='w-full h-full'
            objectFit='cover'
            layout='responsive' />
          </div>
          <div className='flex justify-between items-end' >
            <div className='text-left my-3'>
              <h2 className='font-bold text-2xl'>{item.title}</h2>
              <p className='text-[#555] mt-1'>{item.desc}</p>
            </div>
            <button className='hover:text-[#999]'>show more</button>
          </div>
        </div>
        )
        })}
    
    </div>
  )
}

export default GallaryCard
