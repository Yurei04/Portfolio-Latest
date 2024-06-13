"use client";

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import useIntersectionObserver from './useIntersectionObserver';

const ActionAreaCard = ({ title, description, imageSrc }) => {
  const [ref, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <Card
      ref={ref}
      sx={{
        maxWidth: 250,
        transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s, opacity 0.3s',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        opacity: isVisible ? 1 : 0,
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 4px 20px rgba(30, 136, 229, 0.6)', // Light bluish shadow
          border: '2px solid #1e88e5', // Bluish border
        },
        backgroundColor: '#1d1d1d', // Dark background
        color: 'white', // White text for better contrast
        border: '2px solid transparent', // Initial transparent border to maintain layout consistency
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={imageSrc}
          alt={title}
          sx={{ objectFit: 'contain', padding: '16px', backgroundColor: '#121212' }} // Slightly lighter dark background for image container
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: '#b0bec5' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard;
