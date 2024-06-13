import React from 'react'
import ActionAreaCard from './ActionAreaCard'

const Projects = () => {
  return (
    <section id="projects" className='py-24'>
      <div className='text-white text-base sm:text-lg mb-6 lg:text-5xl'>
        <h1>Projects</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
        <ActionAreaCard
          title="Project Elementia"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          imageSrc="/Images/project1.png"
        />
          <ActionAreaCard
          title="TiraHunt"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/project2.png"
        />
        <ActionAreaCard
          title="Weekon"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/project3.png"
        />
        <ActionAreaCard
          title="Lettre"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          imageSrc="/Images/project4.png"
        />
      </div>
    </section>
  )
}

export default Projects
