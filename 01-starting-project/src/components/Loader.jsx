import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

const Loader = () => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      // alignItems="center" 
      height="100vh"
    >
     
      <Typography variant="h5" style={{ marginLeft: '10px' }}>
      <CircularProgress size={40}/>
        Fetching meals...
      </Typography>
    </Box>
  );
};

export default Loader;

