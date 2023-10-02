/* eslint-disable prettier/prettier */
import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  }, [navigate]);
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h1" gutterBottom>
        PAGE NOT FOUND, YOU ARE BEING REDIRECTED...
        <Box
          component="span"
          sx={{ verticalAlign: 'middle', marginLeft: '0.5rem' }}
        >
          <CircularProgress size={100} />
        </Box>
      </Typography>
    </Box>
  );
};

export default NotFound;
