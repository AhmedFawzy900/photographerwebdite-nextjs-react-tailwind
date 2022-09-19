import Image from 'next/image'
import React from 'react'
import image1 from '../../public/ig-img-1.jpeg'
import image2 from '../../public/ig-img-2.jpeg'
import image3 from '../../public/ig-img-3.jpeg'
import image4 from '../../public/ig-img-4.jpeg'
import image5 from '../../public/ig-img-5.jpeg'
import image6 from '../../public/ig-img-6.jpeg'
const Protofolio = () => {
  return (
    <div className='max-w-[1247px] mx-auto py-10 text-center'>
      <h1 className='font-bold text-2xl p-4'>Travel photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2 '>
            <Image src={image6} alt='/' 
            layout='responsive'
            width='677' height="451" />
        </div>
        <div className='w-full h-full'>
        <Image src={image5} alt='/' 
            layout='responsive'
            width='215' height="217" objectFit='cover' />
        </div>
        <div className='w-full h-full'>
        <Image src={image1} alt='/' 
            layout='responsive'
            width='215' height="217" objectFit='cover' />
        </div>
        <div className='w-full h-full'>
        <Image src={image4} alt='/' 
            layout='responsive'
            width='215' height="217" objectFit='cover' />
        </div>
        <div className='w-full h-full'>
        <Image src={image2} alt='/' 
            layout='responsive'
            width='215' height="217" objectFit='cover' />
        </div>
      </div>
    </div>
  )
}

export default Protofolio
