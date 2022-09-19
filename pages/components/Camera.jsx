import Image from 'next/image'
import React from 'react'
import {camera} from './camera'
const Camera = () => {
  return (
    <div>
        <h2 className='font-bold text-3xl py-10 text-center'>Tools Used</h2>
        <div className='flex flex-wrap w-full items-center justify-center'>
            {camera.map((item) => {
                return(
                    <>
                    <div className='m-2 hidden sm:block ss:block ' key={item.id}>
                        {item.id === 6 
                        ? <Image src={item.image} alt='/' width='614' height='300' objectFit='cover' /> 
                        : <Image src={item.image} alt='/' width='300' height='300' objectFit='cover' /> }
                        
                    </div>
                    <div className='m-2  block sm:hidden ss:hidden' key={item.id}>
                       <Image src={item.image} alt='/' width='200' height='170' objectFit='cover' />   
                    </div>
                    </>

                )
            })}
        </div>
    </div>
  )
}

export default Camera