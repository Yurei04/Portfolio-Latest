import React from 'react'
import ParentComponent from './ParentComponent'

const hobbies = () => {
  return (
    <section id='hobbies' className='p-24 mr-16'>
      <div className='text-white text-base sm:text-lg mb-6 lg:text-5xl'>
        <h1>Hobbies</h1>
      </div>
      <div className='lg:py-16 flex flex-row gap-2 align-middle'>
        <ParentComponent></ParentComponent>
      </div>
    </section>
  )
}

export default hobbies
