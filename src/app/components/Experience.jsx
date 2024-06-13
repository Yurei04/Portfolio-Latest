import React from 'react'
import ActionAreaCard from './ActionAreaCard'

const Experience = () => {
  return (
    <section id="experience" className='py-24'>
      <div className='text-white text-base sm:text-lg mb-6 lg:text-5xl'>
        <h1>Experience</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <ActionAreaCard
          title="HTML/CSS"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          imageSrc="/Images/htmlcss.jpg"
        />
          <ActionAreaCard
          title="Tailwind"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/tail.png"
        />
        <ActionAreaCard
          title="JavaScript"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/javascript.png"
        />
        <ActionAreaCard
          title="React"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/react.png"
        />
        <ActionAreaCard
          title="React Native"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          imageSrc="/Images/react.png"
        />
        <ActionAreaCard
          title="Next js"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/next.png"
        />
        <ActionAreaCard
          title="Python"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/python.jpg"
        />
        <ActionAreaCard
          title="Java"
          description="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          imageSrc="/Images/java-logo.jpg"
        />
        <ActionAreaCard
          title="C#"
          description="Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton."
          imageSrc="/Images/c-sharp-open-source.png"
        />
      </div>
    </section>
  )
}

export default Experience
