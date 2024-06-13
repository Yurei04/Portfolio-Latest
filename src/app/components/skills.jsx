import React from 'react'
import ActionAreaCard from './ActionAreaCard'

const skills = () => {
  return (
    <section id='skills' className='py-20'>
      <div className='text-white text-base sm:text-lg mb-6 lg:text-5xl'>
        <h1>Skills</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        <ActionAreaCard
          title="Front-End Development"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          imageSrc="/Images/Front-end-Development.jpeg"
        />
        <ActionAreaCard
          title="Back-End Development"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/backend.jpg"
        />
        <ActionAreaCard
          title="Web Development"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/web.png"
        />
        <ActionAreaCard
          title="Communication"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          imageSrc="/Images/communication-skill.jpg"
        />
        <ActionAreaCard
          title="Research"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/research.png"
        />
        <ActionAreaCard
          title="Adaptability"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/adapt.png"
        />
        <ActionAreaCard
          title="Critical Thinking"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          imageSrc="/Images/critical.png"
        />
        <ActionAreaCard
          title="Computer Skills"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/computer.jpg"
        />
        <ActionAreaCard
          title="Problem Solving"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/problem.jpg"
        />
      </div>
    </section>
  )
}

export default skills
