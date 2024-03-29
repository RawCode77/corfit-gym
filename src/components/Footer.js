import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: 'center' }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: '288px', height: '180px' }} />
    </Stack>
    <Typography
      variant="h5"
      mt="30px"
      textAlign="center"
      pb="40px"
    >
      Made with ❤️ by C.O.R.F.I.T. Alumni
    </Typography>
  </Box>
);

export default Footer;
