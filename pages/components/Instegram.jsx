import React from 'react'
import image1 from '../../public/img1.jpg'
import image2 from '../../public/ig-img-2.jpeg'
import image3 from '../../public/ig-img-3.jpeg'
import image4 from '../../public/ig-img-4.jpeg'
import image5 from '../../public/ig-img-5.jpeg'
import image6 from '../../public/ig-img-6.jpeg'
import image7 from '../../public/img9.jpg'
import image9 from '../../public/img6.jpg'
import image10 from '../../public/img4.jpeg'
import image11 from '../../public/img5.jpg'
import image12 from '../../public/img7.jpeg'
import image8 from '../../public/snow.jpg'
import InstegramImg from './InstegramImg'
const Instegram = () => {
  return (
    <div className='max-w-[1248px] mx-auto text-center py-10'>
        <p className='text-4xl font-bold'>follow me on Instegram</p>
        <p className='pb-4 text-xl text-[#999]'>@Capture</p>
        <div className='grid grid-cols-2 md:grid-cols-3 
        lg:grid-cols-6 gap-2 p-4'>
            <InstegramImg socialTag={image1} />
            <InstegramImg socialTag={image2} />
            <InstegramImg socialTag={image3} />
            <InstegramImg socialTag={image4} />
            <InstegramImg socialTag={image5} />
            <InstegramImg socialTag={image6} />
            <InstegramImg socialTag={image7} />
            <InstegramImg socialTag={image8} />
            <InstegramImg socialTag={image9} />
            <InstegramImg socialTag={image10} />
            <InstegramImg socialTag={image11} />
            <InstegramImg socialTag={image12} />
        </div>
    </div>
  )
}

export default Instegram