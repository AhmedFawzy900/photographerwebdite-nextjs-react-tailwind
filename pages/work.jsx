import React from 'react'
import Camera from './components/Camera'
import Hero from './components/Hero'
import Protofolio from './components/Protofolio'

const work = () => {
  return (
    <div>
      <Hero heading='Sambles of My Work'
       message='This some of my recent work traveling the world'  />
       <Protofolio />
       <Camera />
    </div>
  )
}

export default work
