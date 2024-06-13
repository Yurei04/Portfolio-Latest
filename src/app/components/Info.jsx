import React from 'react'
import AccordionUsage from './Accordion';
import ControlledAccordions from './ControlledAccordions';


const Info = () => {
  return (
    <section id="info" className='flex-col items-center lg:py-20 mt-5'>
    <h1 className='text-white mb-4 text-4xl sm:text-2xl lg:text-6xl lg:leading-normal font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
             About Me
            </span>
    </h1>
      <div className='flex flex-row gap-3 py-7'>
        <AccordionUsage/ >
        <ControlledAccordions/ >
      </div>
      </section>
  )
}

export default Info
