import { Box, Typography, Button } from '@mui/material';
import React from 'react';

import HeroBannerImage from '../assets/images/hero_image.jpg';

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
    position="relative"
    p="20px"
  >
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">
      C.O.R.F.I.T Club
    </Typography>
    <Typography
      color="error"
      fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      mb="70px"
      mt="50px"
    >
      Grind, Smile <br />
      And Repeat!
    </Typography>
    <Typography
      fontSize="22px"
      fontFamily="Alegreya"
      lineHeight="35px"
      mb={4}
    >
      Check out the most effective exercises <br />personalized to you in our Programs.
    </Typography>
    <Button variant="contained" color="error" href="#exercises" sx={{ backgrounColor: '#FF2625', padding: '10px' }}>Explore Exercises</Button>
    <Typography
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: '0.3',
        display: { lg: 'block', xs: 'none' },
      }}
      fontSize="150px"
    >
      Advanced <br />BodyBuilding
    </Typography>
    <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
