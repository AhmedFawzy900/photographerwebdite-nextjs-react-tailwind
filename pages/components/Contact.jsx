import Image from 'next/image'
import React from 'react'
import photgrapher2 from '../../public/photographer2.jpg'
 
 const Contact = () => {
   return (
     <div className='max-w-[1248] m-auto p-4 h-screen shadow-lg'>
        <h1 className='text-3xl font-bold text-center p-4'>let us work together</h1>
        <div className='flex items-center justify-center w-full'>
    
        <form className='bg-white lg:w-[45%] w-full h-[491px] p-4 '>
          <div className='grid grid-cols-2 gap-2'>
              <input className='border shadow-lg p-3 outline-0' type="text" placeholder='Name..' />
              <input className='border shadow-lg p-3 outline-0' type="text" placeholder='Email..' />
          </div>
          <input className='border shadow-lg p-3 w-full my-2 outline-0' type="text" placeholder='Subject..' />
          <textarea className='border shadow-lg p-3 w-full outline-0'  cols="30" rows="10" placeholder='Massage..'></textarea>
          <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
          <div  className='w-[40%] hidden h-[100%] lg:block '>
        <Image src={photgrapher2} alt="photographer"
        height='491px'
        width='505px'
        objectFit='cover'
        />
        </div>
        </div>

     </div>
   )
 }
 
 export default Contact