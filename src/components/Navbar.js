import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/CORFIT_LOGO-1.png';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: '123px', xs: '40px' },
      mt: { sm: '32px', xs: '20px' },
      justifyContent: 'none',
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: '133px', height: '153px', margin: '0px 10px' }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
          margin: '48px',
        }}
      >
        Home
      </Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212', margin: '48px 0px' }}>
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
