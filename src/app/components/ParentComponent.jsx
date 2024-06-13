'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import SimpleGrow from './Grow'; // Adjust the import path as needed
import { Switch, FormControlLabel } from '@mui/material';

export default function ParentComponent() {
  const [activeIndex, setActiveIndex] = React.useState(0); // Set initial activeIndex to 0 for "Digital Arts/Editing"

  const handleActivate = (index) => {
    setActiveIndex(index);
  };

  const sections = [
    {
      label: "Digital Arts/Editing",
      images: ["/Images/art.jpg", "/Images/project-world-end.gif", "/Images/world-end-project-2.gif"]
    },
    {
      label: "Watching Anime",
      images: ["/Images/maxresdefault.jpg", "/Images/1310701.jpg", "/Images/anime.png"]
    },
    {
      label: "Gaming",
      images: ["/Images/genshin.png", "/Images/abyss11.png"]
    },
    {
      label: "Coding",
      images: ["/Images/code_2.png", "/Images/code_3.png"]
    }
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', gap: 2 }}>
        {sections.map((section, index) => (
          <FormControlLabel
            key={index}
            control={<Switch checked={index === activeIndex} onChange={() => handleActivate(index)} />}
            label={section.label}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {sections.map((section, index) => (
          <SimpleGrow
            key={index}
            index={index}
            activeIndex={activeIndex}
            images={section.images}
          />
        ))}
      </Box>
    </Box>
  );
}
