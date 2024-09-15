import React from 'react'
import CountryCarusel from './CountryCarusel'
function HeroSection() {
  return (
    <div className='hero bg-cover text-center text-white'>
    <div className='min-h-60 p-8 backdrop-brightness-50'>
      <h1 className='text-4xl mb-4'>Countries</h1>
      <CountryCarusel/>
    </div>
  </div>
  )
}

export default HeroSection