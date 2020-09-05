import React from 'react';
import { Box, Typography } from '@material-ui/core';

const About = () => {
  return (
    <Box m="30px" textAlign="center" color="warning.main">
      <Typography variant="h4" component="p">
        Simple social media web application. Data taken from jsonplaceholder and
        randomuserapi.
      </Typography>
    </Box>
  );
};

export default About;
