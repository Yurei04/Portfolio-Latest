'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';

export default function SimpleGrow({ index, activeIndex, images }) {
  const isActive = index === activeIndex;

  return (
    <Grow in={isActive}>
      <Box sx={{ display: isActive ? 'flex' : 'none', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        {images.map((image, idx) => (
          <Paper
            key={idx}
            sx={{
              m: 1,
              width: { xs: '100%', sm: '45%', md: '30%' },
              height: 'auto',
              overflow: 'hidden',
              transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 20px rgba(30, 136, 229, 0.6)', // Light bluish shadow
                border: '2px solid #1e88e5', // Bluish border
              }
            }}
            elevation={4}
          >
            <img
              src={image}
              alt={`Image ${idx}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
            />
          </Paper>
        ))}
      </Box>
    </Grow>
  );
}
