import React from 'react'
import Contact from './components/Contact'
import Hero from './components/Hero'

const contact = () => {
  return (
    <div>
       <Hero
        heading='Contact'
        message='submit the form for more work and quotes'
        />
        <Contact />
    </div>
  )
}

export default contact
