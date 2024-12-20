import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#f0efef' }}>
      <Typography variant="body2" color="textSecondary">
        © Panda Development Corporation
      </Typography>
    </Box>
  );
};

export default Footer;
